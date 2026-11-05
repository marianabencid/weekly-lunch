// Adaptador: expone la misma API mínima que usa app.js (doc().set/delete/onSnapshot, collection().onSnapshot)
// sobre Firestore, con caché offline persistente. Todo vive bajo familias/{codigo}/...
import { initializeApp } from "firebase/app";
import {
  initializeFirestore, persistentLocalCache, persistentMultipleTabManager,
  doc, collection, setDoc, deleteDoc, onSnapshot,
} from "firebase/firestore";

function open(code) {
  const app = initializeApp(window.FIREBASE_CONFIG);
  let db;
  try {
    db = initializeFirestore(app, {
      localCache: persistentLocalCache({ tabManager: persistentMultipleTabManager() }),
    });
  } catch (e) {
    db = initializeFirestore(app, {});
  }
  const base = ["familias", code];
  const ref = (p) => doc(db, ...base, ...p.split("/"));
  const fail = (e) =>
    window.dispatchEvent(new CustomEvent("almuerzos-db-error", { detail: { code: e && e.code } }));

  return {
    doc: (p) => ({
      // No esperamos el acuse del servidor: sin conexión la escritura queda en cola y se sincroniza sola.
      set: (data) => { setDoc(ref(p), data).catch(fail); return Promise.resolve(); },
      delete: () => { deleteDoc(ref(p)).catch(fail); return Promise.resolve(); },
      onSnapshot: (next, err) =>
        onSnapshot(ref(p), (s) => next({ exists: s.exists(), data: () => s.data() }), err),
    }),
    collection: (name) => ({
      onSnapshot: (next, err) =>
        onSnapshot(
          collection(db, ...base, name),
          (s) => next({ docs: s.docs.map((d) => ({ id: d.id, data: () => d.data() })) }),
          err
        ),
    }),
  };
}

window.AlmuerzosDB = { open };
