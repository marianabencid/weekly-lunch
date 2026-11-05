# Almuerzos (PWA)

Planificador de almuerzos para Maurilyn, Harmodio y Mariana: biblioteca de recetas, semana, compras y plan de cocina.
Funciona como app instalable, también sin conexión, y sincroniza entre los tres teléfonos con Firestore.

## Qué hay en la carpeta

| Archivo | Para qué sirve |
|---|---|
| `index.html`, `app.js` | La app completa |
| `firebase-config.js` | **Aquí pegas tu configuración de Firebase** |
| `firebase-db.js` | SDK de Firestore ya empaquetado (no se toca) |
| `firestore.rules` | Reglas de seguridad para pegar en Firebase |
| `sw.js`, `manifest.webmanifest`, `icons/` | Lo que la hace instalable y offline |
| `netlify.toml` | Configuración de Netlify |
| `src/`, `package.json` | Solo si algún día quieres regenerar `firebase-db.js` (`npm install && npm run build`) |

## Puesta en marcha (unos 15 minutos)

### 1. Firebase
1. En https://console.firebase.google.com crea un proyecto nuevo (Analytics puedes dejarlo apagado).
2. **Build → Firestore Database → Create database**. Elige modo de producción y una región cercana (por ejemplo `us-east1` o `southamerica-east1`).
3. Engranaje junto a *Project Overview* → **Project settings** → **Your apps** → ícono web `</>`. Ponle un apodo (por ejemplo "almuerzos"), sin Firebase Hosting.
4. Copia el objeto `firebaseConfig` y pega sus valores en `firebase-config.js`.
5. **Firestore Database → Rules**: reemplaza todo por el contenido de `firestore.rules` y pulsa **Publish**.

### 2. GitHub
1. Crea un repositorio nuevo (puede ser privado).
2. Sube **todos los archivos de esta carpeta** a la raíz del repo (arrastrando en *Add file → Upload files*). No hace falta `node_modules`.

### 3. Netlify
1. **Add new site → Import an existing project → GitHub** y elige el repo.
2. Deja vacío el *Build command* y pon `.` como *Publish directory* (`netlify.toml` ya lo indica). **Deploy**.
3. Cada cambio que subas al repo se publica solo.

### 4. Primera vez en el teléfono
1. Abre la URL de Netlify. Sale la pantalla **Código familiar**: pulsa *Generar uno* y *Entrar*.
2. En la pantalla **Semana**, al pie, toca **Copiar link de invitación** y mándalo por WhatsApp a Maurilyn y a Harmodio. Al abrirlo, su teléfono guarda el código solo.
3. Instalar:
   - **iPhone (Safari):** Compartir → *Añadir a pantalla de inicio*.
   - **Android (Chrome):** menú ⋮ → *Instalar app*.

En el pie de la pantalla Semana ves "Sincronizado, código ••••xxxx"; los tres deben ver los mismos cuatro caracteres.

## Actualizar la app
Edita los archivos en GitHub y haz commit; Netlify republica. Para que los teléfonos recojan el cambio sin demora, cambia `V = "almuerzos-v1"` por `"almuerzos-v2"` (y así sucesivamente) en `sw.js`. Si ves la versión anterior, cierra la app por completo y ábrela otra vez.

## Seguridad, en corto
- Los datos viven en `familias/{código}/...`. Las reglas no permiten listar `/familias`, así que solo entra quien conoce el código.
- Los valores de `firebase-config.js` no son secretos. La llave real es el código familiar: no lo publiques.
- Si el código se filtra, genera uno nuevo en *Cambiar código* y compártelo de nuevo. Los datos del código anterior quedan en la base pero ya no se ven.
- Es una protección sencilla para uso familiar. Si algún día quieres cuentas individuales, se agrega Firebase Authentication.

## Probar en tu computadora
Necesita servirse por http (no abrir el archivo directo): `npx serve .` y abre la dirección que indique.

## Nota
Lo que hayas guardado en la versión de prueba dentro de Claude no se migra: esta versión empieza con su propia base.
