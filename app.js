/* ---------- Datos base ---------- */
const FAM={
  med:{n:"Mediterráneo",v:"--f-med",sh:"Comparten pollo shawarma, tzatziki, pepino y tomate."},
  carne:{n:"Carne molida",v:"--f-carne",sh:"Comparten carne molida sazonada, pico y arroz."},
  pollo:{n:"Pollo desmechado",v:"--f-pollo",sh:"Una olla grande de pollo desmechado rinde para varios platos."},
  asia:{n:"Salteados",v:"--f-asia",sh:"Comparten salsa teriyaki casera, arroz y vegetales en tiras."},
  mar:{n:"Del mar",v:"--f-mar",sh:"Salmón, atún o corvina con papa, limón y ensaladas rápidas."}
};
const TYPES={pasta:"Pastas",bowl:"Bowls",plato:"Platos",mano:"Tacos y sándwiches"};
const SEC={p:"Proteínas",v:"Frutas y verduras",l:"Lácteos y huevos",n:"Panes y tortillas",d:"Despensa"};
const SECCOL={p:"--f-carne",v:"--f-med",l:"--f-pollo",n:"--f-asia",d:"--f-mar"};
const UNIT={g:"g",tz:"tazas",cda:"cda",cdta:"cdta",u:"",lata:"latas",dientes:"dientes",cabeza:"cabeza",manojo:"manojo",trozo:"trozo",rebanadas:"rebanadas"};
const COOK={mama:"Maurilyn",nos:"Harmodio y Mariana"};
const CCOL={mama:"var(--mama)",nos:"var(--nos)"};
const DAYS=["Lunes","Martes","Miércoles","Jueves","Viernes"];
const MES=["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"];
const PROTS={pollo:["Pollo","--f-pollo"],carne:["Carne molida","--f-carne"],res:["Res","--f-carne"],"salmón":["Salmón","--f-mar"],"atún":["Atún","--f-mar"],corvina:["Corvina","--f-mar"],garbanzo:["Garbanzo y huevo","--f-med"],cerdo:["Cerdo","--f-carne"],otro:["Otra proteína","--f-asia"]};
const PROT={med1:"pollo",med2:"pollo",med3:"pollo",med4:"garbanzo",med5:"pollo",car1:"carne",car2:"carne",car3:"carne",car4:"carne",car5:"carne",
  pol1:"pollo",pol2:"pollo",pol3:"pollo",pol4:"pollo",pol5:"pollo",asi1:"pollo",asi2:"pollo",asi3:"res",asi4:"salmón",asi5:"pollo",
  mar1:"salmón",mar2:"atún",mar3:"atún",mar4:"corvina",mar5:"corvina"};

/* Paso a paso: por clave compartida o por receta:índice del componente */
const STEPS={
 shawarma:["Corta 700 g de muslos en tiras gruesas (o déjalos enteros si prefieres cortarlos después).","Mezcla 2 cda de especias shawarma (comino, paprika, cúrcuma, un toque de canela y ajo en polvo), jugo de 1 limón, 3 dientes de ajo picados, 2 cda de aceite y 1 cdta de sal.","Marina el pollo mínimo 20 minutos; si puedes, desde la noche anterior.","Hornea a 220 °C por 25–30 min en una bandeja amplia sin amontonar, volteando a la mitad, hasta que doren los bordes.","Deja enfriar, pica en tiras y guarda en recipientes herméticos. Dura 4 días en nevera."],
 tzatziki:["Ralla 1 pepino con cáscara y exprímelo con las manos o un paño limpio para sacarle el agua.","Mézclalo con 300 g de yogur griego, 1 diente de ajo rallado, 1 cda de aceite de oliva, jugo de ½ limón y sal.","Opcional: menta o eneldo picado.","Guarda en frasco de vidrio; dura 4 días. Revuelve antes de servir."],
 arroz:["Lava 1½ tz de arroz hasta que el agua salga casi clara y escúrrelo.","En una olla sofríe 1 diente de ajo picado en 1 cda de aceite, agrega el arroz y revuelve 1 minuto.","Añade 2¼ tz de agua caliente y 1 cdta de sal. Hierve a fuego alto sin tapar.","Cuando el agua baje al nivel del arroz (se ven huequitos), baja al mínimo, tapa y cocina 15 min sin destapar.","Apaga, reposa 5 min tapado y suelta con un tenedor.","Si la receta lo pide con hierbas o con limón y culantro, mezcla culantro picado y ralladura de limón al servir. Enfría antes de guardar."],
 "carne-taco":["Calienta 1 cda de aceite a fuego alto y dora 600 g de carne molida casi sin moverla, 5 min.","Agrega ½ cebolla picada y 2 dientes de ajo; cocina 3 min.","Añade 1 cda de especias para tacos (comino, paprika, orégano, ajo en polvo), sal y ¼ tz de agua.","Cocina 5 min más hasta que se evapore el líquido y ajusta la sal.","Enfría y guarda. Se recalienta en sartén en 3 min."],
 desmechado:["Pon la pechuga en una olla con agua que la cubra, ½ cebolla, 2 dientes de ajo, unas ramas de culantro y 1 cdta de sal.","Lleva a hervor, baja a fuego medio y cocina 20–25 min hasta que esté cocida por dentro.","Saca el pollo y guarda el caldo: sirve para el arroz con pollo o para congelar.","Desmecha con dos tenedores mientras está tibio.","Guarda con un chorrito de caldo para que no se seque. Dura 4 días."],
 teriyaki:["En una olla pequeña mezcla 4 cda de salsa de soya, 2 cda de miel, 1 cdta de jengibre rallado, 2 dientes de ajo rallados y ½ tz de agua.","Hierve a fuego medio 3 min.","Disuelve 1 cda de fécula de maíz en 2 cda de agua fría y agrégala revolviendo.","Cocina 1–2 min hasta que espese. Enfría y guarda en frasco; dura una semana."],
 slaw:["Corta ½ repollo en tiras muy finas (y ralla 1–2 zanahorias si las tienes).","Mezcla 100 g de yogur, jugo de 1 limón, 1 cdta de mostaza, sal y pimienta.","Guarda el repollo y el aderezo por separado y mézclalos al servir para que quede crocante."],
 pure:["Pela y corta 900 g de papa en cubos del mismo tamaño.","Ponlos en agua fría con sal y cocina 15–18 min desde que hierva, hasta que se deshagan con un tenedor.","Escurre y machaca con 2 cda de mantequilla, ½ tz de leche caliente, 1 diente de ajo rallado y sal.","Enfría y guarda. Para recalentar, agrega un chorrito de leche y revuelve."],
 "med1:2":["Corta 800 g de papa en bastones o gajos, sin pelar.","Mezcla con 1 cda de aceite, 1 cdta de especias shawarma y sal.","Air fryer: 200 °C por 18–20 min agitando a la mitad. Horno: 220 °C por 25–30 min.","Guárdalas aparte del tzatziki para que no se ablanden."],
 "med1:3":["Corta en cubos 1 pepino, 2 tomates y ¼ de cebolla morada.","Aliña con jugo de ½ limón, 1 cda de aceite de oliva y sal.","Empácala aparte y mezcla al servir."],
 "med2:2":["Calienta el pollo shawarma en sartén 3–4 min.","Corta tomate, cebolla morada y lechuga en tiras.","Calienta las pitas 30 segundos por lado en sartén seca.","Rellena con pollo, vegetales y una buena cucharada de tzatziki.","Para llevar: empaca el tzatziki aparte y arma al momento de comer."],
 "med3:0":["Corta 450 g de pechuga en cubos.","Sazona con 1 cdta de orégano, 2 dientes de ajo picados, jugo de ½ limón, sal y pimienta.","Dora en sartén con 1 cda de aceite a fuego alto, 6–8 min, sin amontonar.","Enfría y guarda."],
 "med3:1":["Cocina 360 g de pasta en agua con sal según el paquete y reserva ½ tz del agua.","En sartén con 2 cda de aceite sofríe 2 dientes de ajo 1 min y agrega 300 g de tomate cherry partidos; 4 min.","Añade 200 g de espinaca hasta que se marchite y el pollo para calentarlo.","Mezcla con la pasta y un poco del agua reservada.","Termina con 120 g de feta desmoronado y ralladura de limón."],
 "med4:1":["Escurre y seca muy bien 2 latas de garbanzos con un paño.","Mezcla con 1 cda de aceite, 1 cda de especias shawarma y sal.","Hornea a 210 °C por 25–30 min, moviendo a la mitad, hasta que estén crujientes.","Guárdalos en un recipiente sin cerrar del todo para que no se humedezcan."],
 "med4:3":["Pon 6 huevos en agua fría, lleva a hervor y cocina 10 min.","Pásalos a agua con hielo 5 min y pélalos.","Arma: arroz, garbanzos, pepino y tomate picados, huevo en mitades y tzatziki."],
 "med5:0":["Mezcla jugo de 2 limones, ralladura de 1, 3 dientes de ajo picados, 1 cdta de orégano, 2 cda de aceite y sal.","Marina 700 g de pechuga 15 min (si es muy gruesa, ábrela en mariposa).","Hornea a 200 °C por 22–25 min, hasta que el centro no esté rosado.","Reposa 5 min antes de cortar en lonjas para que no se seque."],
 "med5:2":["Lava y seca bien la lechuga; córtala en tiras.","Corta tomate y pepino.","Aliña al servir con limón, aceite de oliva y sal."],
 "car1:0":["Pica fino 1 cebolla, 2 zanahorias, 1 pimentón y 4 dientes de ajo (usa procesador si tienes).","Dora 600 g de carne molida en 2 cda de aceite a fuego alto, 6 min, y retírala.","En la misma olla sofríe los vegetales 6–8 min hasta que ablanden.","Regresa la carne y agrega 2 latas de tomate triturado, 1 cdta de orégano, sal, pimienta y una pizca de azúcar.","Tapa y cocina a fuego bajo 25–30 min, revolviendo de vez en cuando.","Enfría y guarda en porciones. Se congela hasta 3 meses."],
 "car1:1":["Hierve agua con abundante sal y cocina 360 g de espagueti según el paquete.","Calienta la salsa en otra olla con un chorrito del agua de la pasta.","Mezcla y sirve con parmesano rallado."],
 "car2:1":["Pica fino 3 tomates sin semillas, ½ cebolla blanca y un manojo pequeño de culantro.","Mezcla con jugo de 1 limón y sal.","Guarda en frasco; dura 2–3 días."],
 "car2:2":["Calienta la carne en sartén.","Calienta las tortillas 30 segundos por lado en sartén seca y envuélvelas en un paño.","Corta el aguacate al momento con limón para que no se oscurezca.","Arma: tortilla, carne, pico, aguacate y queso rallado."],
 "car3:0":["Pela y corta 400 g de papa y 2 zanahorias en cubos pequeños.","Dora 600 g de carne molida en 1 cda de aceite, 5 min.","Agrega cebolla, pimentón y 3 dientes de ajo picados; sofríe 4 min.","Añade papa, zanahoria, 1 lata de tomate triturado, ½ tz de agua, comino y sal.","Tapa y cocina a fuego medio-bajo 18–20 min hasta que la papa esté suave."],
 "car3:2":["Pela 2 plátanos bien maduros (cáscara casi negra) y córtalos en diagonal.","Úntalos con muy poco aceite.","Air fryer a 190 °C por 12–14 min, u horno a 200 °C por 20 min volteando a la mitad."],
 "car4:2":["Escurre a medias 1 lata de frijoles negros.","Sofríe ¼ de cebolla y 1 diente de ajo en 1 cdta de aceite.","Agrega los frijoles, comino y sal; cocina 6–8 min aplastando algunos para espesar."],
 "car4:3":["Prepara pico de gallo: 3 tomates, ½ cebolla y culantro picados, con limón y sal.","Dora 1 lata de maíz escurrido en sartén 3 min.","Arma: arroz, carne, frijoles, maíz, pico, aguacate en cubos y una cucharada de yogur."],
 "car5:0":["Dora 600 g de carne molida en 1 cda de aceite, 5 min.","Agrega 1 cebolla y 1 pimentón picados; cocina 5 min.","Añade 1 lata de tomate triturado, 1 cda de mostaza, 1 cdta de azúcar morena (opcional), paprika y sal.","Cocina a fuego bajo 15 min hasta que espese bastante."],
 "car5:2":["Calienta la carne.","Tuesta los panes abiertos en sartén o tostadora.","Rellena con carne y pon el coleslaw encima."],
 "pol1:1":["Sofríe en 2 cda de aceite 1 cda de achiote con cebolla, pimentón y 3 dientes de ajo picados, 5 min.","Agrega 2 tz de arroz lavado y revuelve 2 min.","Añade 3 tz del caldo del pollo, 1 tz de vegetales mixtos, sal y culantro picado.","Hierve hasta que el líquido baje al nivel del arroz y agrega el pollo desmechado.","Tapa a fuego mínimo 15–18 min. Reposa 5 min y suelta con tenedor."],
 "pol1:2":["Corta ½ repollo en tiras finas.","Aliña al servir con jugo de limón, sal y un chorrito de aceite."],
 "pol2:1":["Sofríe ½ cebolla picada en 1 cda de aceite, 3 min.","Licúa 1 lata de tomate triturado con 1 o 2 chiles chipotle en adobo, según qué tan picante lo quieran.","Agrega la salsa a la sartén, cocina 5 min y añade el pollo desmechado; 5 min más.","Ajusta la sal y guarda."],
 "pol2:2":["Calienta el pollo en su salsa.","Corta repollo en tiras finas y aguacate en lonjas.","Calienta las tortillas y arma con culantro y limón."],
 "pol3:1":["Cocina 360 g de pasta en agua con sal; en los últimos 3 min agrega el brócoli en floretes a la misma olla.","Mientras, sofríe 4 dientes de ajo en 2 cda de aceite, 1 min.","Agrega 1 lata de leche evaporada y el pollo desmechado; hierve suave 3 min.","Apaga y añade 60 g de parmesano, sal y pimienta.","Escurre pasta y brócoli y mézclalos con la salsa."],
 "pol4:1":["Mezcla el pollo desmechado con 100 g de yogur, 1 cda de mostaza, sal, pimienta y un chorrito de limón.","Guarda en recipiente hermético."],
 "pol4:2":["Abre los panes y tuéstalos un poco.","Unta aguacate machacado con sal.","Pon el pollo, tomate en rodajas y lechuga."],
 "pol5:2":["Sofríe ¼ de cebolla y 1 diente de ajo en 1 cdta de aceite.","Agrega 1 lata de frijoles rojos con su líquido, culantro y sal.","Cocina 10 min a fuego bajo hasta que espesen."],
 "pol5:3":["Hornea o pasa por air fryer 2 plátanos maduros en rodajas diagonales (190 °C, 12–14 min).","Pica tomate y pepino con limón y sal.","Arma: arroz, frijoles, pollo, maduro y ensalada."],
 "asi1:2":["Corta 700 g de pechuga en tiras y sazona con sal y pimienta.","Corta el brócoli en floretes y 2 zanahorias en rodajas finas.","En sartén o wok con 1 cda de aceite a fuego alto dora el pollo 5–6 min y retíralo.","Saltea los vegetales 4 min con 2 cda de agua para que se cocinen al vapor.","Regresa el pollo, agrega la salsa teriyaki y mezcla 1 min. Termina con ajonjolí."],
 "asi2:1":["Corta 450 g de pechuga en cubos pequeños y sazona con sal.","Dora en sartén caliente con 1 cda de aceite, 6 min.","Enfría y guarda junto al arroz."],
 "asi2:2":["Calienta 2 cda de aceite en sartén grande a fuego alto.","Revuelve 4 huevos batidos y retíralos apenas cuajen.","Saltea ajo picado y 1 tz de vegetales mixtos, 3 min.","Agrega el arroz frío y el pollo; saltea 4–5 min sin moverlo demasiado para que dore.","Añade 4 cda de soya, los huevos y cebollina picada."],
 "asi3:1":["Corta 1 pimentón, ¼ de repollo y 2 zanahorias en tiras.","Marina 500 g de bistec en tiras con 1 cda de soya y 1 cdta de fécula de maíz.","Guarda carne y vegetales por separado en la nevera."],
 "asi3:2":["Cocina 350 g de espagueti, escurre y pásalo por agua fría.","En sartén muy caliente con 1 cda de aceite sella la carne 3 min y retírala.","Saltea los vegetales 3 min.","Agrega fideos, carne y 4–5 cda de teriyaki; mezcla 2 min a fuego alto."],
 "asi4:2":["Precalienta el horno a 200 °C.","Pon 500 g de salmón en bandeja con papel y píntalo con 2–3 cda de teriyaki.","Hornea 12–14 min, hasta que se separe en lajas."],
 "asi4:3":["Corta el pepino en medias lunas y ralla 2 zanahorias.","Corta el aguacate al servir con unas gotas de limón.","Arma: arroz, salmón, vegetales, ajonjolí y un chorrito de teriyaki."],
 "asi5:1":["Corta 600 g de pechuga en tiras.","Dora en sartén con 1 cda de aceite, 6–7 min.","Agrega 4 cda de teriyaki y cocina 1 min hasta que glasee."],
 "asi5:2":["Corta ½ repollo morado en tiras finas y ralla 2 zanahorias.","Mezcla 150 g de yogur con 1 cda de sriracha y limón (aderezo aparte).","Guarda todo por separado."],
 "asi5:3":["Calienta las tortillas 20 segundos en sartén.","Pon pollo, slaw y aderezo en el centro.","Dobla los lados y enrolla apretado. Corta en diagonal."],
 "mar1:1":["Precalienta el horno a 200 °C.","Pon 550 g de salmón en bandeja y sazona con sal, ajo rallado, jugo de limón y 1 cda de aceite.","Hornea 12–15 min según el grosor."],
 "mar1:2":["Corta el brócoli en floretes.","Cocina al vapor 5–6 min (o en microondas con 2 cda de agua, tapado, 4 min).","Sazona con sal, limón y un hilo de aceite."],
 "mar2:0":["Sofríe 1 cebolla, 1 pimentón y 4 dientes de ajo picados en 2 cda de aceite, 6 min.","Agrega 2 latas de tomate triturado, 1 cdta de orégano, sal y pimienta; cocina 10 min.","Escurre 3 latas de atún y agrégalas; cocina 5 min más sin deshacerlo demasiado.","Enfría y guarda. También se congela."],
 "mar2:1":["Cocina 360 g de pasta corta en agua con sal.","Calienta la salsa con un poco del agua de la pasta.","Mezcla y sirve con parmesano."],
 "mar3:0":["Pon 4 huevos en agua fría, lleva a hervor y cocina 10 min.","Enfríalos en agua con hielo y pélalos."],
 "mar3:1":["Escurre muy bien 3 latas de atún.","Pica los huevos y ¼ de cebolla morada bien fina.","Mezcla con 150 g de yogur, 1 cda de mostaza, limón, sal y pimienta."],
 "mar3:2":["Tuesta el pan si les gusta.","Pon lechuga, la mezcla y tomate en rodajas.","Para llevar: empaca la mezcla aparte para que el pan no se humedezca."],
 "mar4:1":["Mezcla 150 g de yogur, 1 cda de salsa picante, jugo de ½ limón y sal.","Guarda en frasco."],
 "mar4:2":["Sazona 600 g de corvina con especias para tacos, sal y limón.","Cocina en sartén caliente con 1 cda de aceite, 3 min por lado, y desmenuza en trozos.","Calienta las tortillas y arma con slaw, aguacate, salsa de yogur y culantro."],
 "mar5:0":["Lava 1½ tz de arroz.","Mezcla 1 lata de leche de coco con agua hasta completar 2¼ tz y agrega 1 cdta de sal.","Hierve el líquido, agrega el arroz y cocina hasta que baje al nivel del arroz.","Tapa a fuego mínimo 15 min y reposa 5."],
 "mar5:1":["Pon 600 g de corvina en un recipiente con jugo de 2 limones, 3 dientes de ajo picados, culantro y sal.","Tapa y refrigera; máximo 1 día."],
 "mar5:2":["Precalienta el horno a 200 °C.","Pon la corvina con su marinada en bandeja con un hilo de aceite.","Hornea 15–18 min hasta que esté opaca por dentro."]
};
STEPS["mar5:3"]=STEPS["med5:2"];
const RAW=[
{id:"med1",name:"Bowl mediterráneo shawarma",type:"bowl",fam:"med",diff:2,kcal:680,p:45,cb:60,f:26,
 desc:"Pollo especiado, papas doradas tipo shawarma, tzatziki y ensalada de pepino.",
 art:{s:"bowl",c:["#F1F0E8","#D2A56B","#E6C878","#A9C08F","#C85A48"]},
 i:["700|g|Muslos de pollo sin hueso|p","2|cda|Especias shawarma|d","3|u|Limón|v","5|dientes|Ajo|v","300|g|Yogur griego natural|l","2|u|Pepino|v","3|u|Tomate|v","1|u|Cebolla morada|v","800|g|Papa|v","3|cda|Aceite de oliva|d"],
 c:["Pollo shawarma: marinar y hornear|45|B|shawarma","Tzatziki|10|B|tzatziki","Papas tipo shawarma (horno o air fryer)|30|D","Ensalada de pepino, tomate y cebolla|10|D"]},
{id:"med2",name:"Pitas de pollo shawarma",type:"mano",fam:"med",diff:1,kcal:590,p:42,cb:55,f:20,
 desc:"El mismo pollo del bowl, en pan pita con lechuga, tomate y tzatziki.",
 art:{s:"taco",c:["#EBD7A8","#C9955F","#9CBB6E","#F1F0E8"]},
 i:["700|g|Muslos de pollo sin hueso|p","2|cda|Especias shawarma|d","2|u|Limón|v","4|dientes|Ajo|v","250|g|Yogur griego natural|l","1|u|Pepino|v","6|u|Pan pita|n","2|u|Tomate|v","1|u|Cebolla morada|v","1|cabeza|Lechuga|v"],
 c:["Pollo shawarma: marinar y hornear|45|B|shawarma","Tzatziki|10|B|tzatziki","Calentar pollo, cortar vegetales y armar pitas|15|D"]},
{id:"med3",name:"Pasta griega con pollo y feta",type:"pasta",fam:"med",diff:1,kcal:640,p:42,cb:70,f:20,
 desc:"Pasta corta con espinaca, tomate cherry, feta y pollo al orégano.",
 art:{s:"pasta",c:["#E9CF8E","#DCCFA8","#C85A48","#F7F5EE","#6E8B4E"]},
 i:["360|g|Pasta corta (penne o fusilli)|d","450|g|Pechuga de pollo|p","200|g|Espinaca|v","300|g|Tomate cherry|v","120|g|Queso feta|l","4|dientes|Ajo|v","1|u|Limón|v","1|cdta|Orégano seco|d","3|cda|Aceite de oliva|d"],
 c:["Pollo al orégano en cubos, a la plancha|20|B","Pasta con espinaca, cherry y feta|25|D"]},
{id:"med4",name:"Bowl de garbanzos crujientes",type:"bowl",fam:"med",diff:1,kcal:600,p:28,cb:80,f:18,
 desc:"Arroz, garbanzos horneados con especias, huevo duro y tzatziki.",
 art:{s:"bowl",c:["#F3EEE3","#D8B97A","#F2D16B","#A9C08F","#C85A48"]},
 i:["2|lata|Garbanzos|d","1.5|tz|Arroz|d","6|u|Huevos|l","250|g|Yogur griego natural|l","1|u|Pepino|v","2|u|Tomate|v","1|u|Cebolla morada|v","1|cda|Especias shawarma|d","2|cda|Aceite de oliva|d","1|u|Limón|v"],
 c:["Arroz blanco|25|B|arroz","Garbanzos crujientes al horno|30|B","Tzatziki|10|B|tzatziki","Huevos duros y armar bowls|15|D"]},
{id:"med5",name:"Pollo al limón con arroz de hierbas",type:"plato",fam:"med",diff:1,kcal:610,p:44,cb:62,f:18,
 desc:"Pechuga horneada con limón y ajo, arroz con culantro y ensalada fresca.",
 art:{s:"plate",c:["#E3C08F","#F3EEE3","#9CBB6E","#F2E27A"]},
 i:["700|g|Pechuga de pollo|p","3|u|Limón|v","4|dientes|Ajo|v","1.5|tz|Arroz|d","1|manojo|Culantro|v","1|cabeza|Lechuga|v","2|u|Tomate|v","1|u|Pepino|v","1|cdta|Orégano seco|d","2|cda|Aceite de oliva|d"],
 c:["Pollo al limón al horno|40|B","Arroz con hierbas|25|B|arroz","Ensalada fresca|10|D"]},

{id:"car1",name:"Pasta boloñesa",type:"pasta",fam:"carne",diff:2,kcal:720,p:42,cb:78,f:24,
 desc:"Salsa de carne con zanahoria y pimentón, cocida lento el día fuerte.",
 art:{s:"pasta",c:["#E9CF8E","#9E3F2F","#F4EAD2","#E0924A"]},
 i:["600|g|Carne molida de res|p","360|g|Espagueti|d","2|lata|Tomate triturado|d","1|u|Cebolla blanca|v","2|u|Zanahoria|v","1|u|Pimentón|v","4|dientes|Ajo|v","60|g|Queso parmesano|l","2|cda|Aceite de oliva|d"],
 c:["Salsa boloñesa|45|B","Cocinar pasta y calentar salsa|15|D"]},
{id:"car2",name:"Tacos de carne molida",type:"mano",fam:"carne",diff:1,kcal:650,p:38,cb:50,f:32,
 desc:"Carne especiada, pico de gallo, aguacate y queso blanco rallado.",
 art:{s:"taco",c:["#E8D3A2","#8B5A44","#C85A48","#9DB26A"]},
 i:["600|g|Carne molida de res|p","12|u|Tortillas de maíz|n","1|cda|Especias para tacos|d","3|u|Tomate|v","1|u|Cebolla blanca|v","1|manojo|Culantro|v","2|u|Aguacate|v","2|u|Limón|v","100|g|Queso blanco|l"],
 c:["Carne sazonada para tacos|25|B|carne-taco","Pico de gallo|10|B","Calentar tortillas, aguacate y armar|15|D"]},
{id:"car3",name:"Picadillo con arroz y maduro",type:"plato",fam:"carne",diff:1,kcal:700,p:36,cb:88,f:22,
 desc:"Carne guisada con papa y zanahoria, arroz blanco y plátano maduro al horno.",
 art:{s:"plate",c:["#8B5A44","#F3EEE3","#D9953A","#E0924A"]},
 i:["600|g|Carne molida de res|p","400|g|Papa|v","2|u|Zanahoria|v","1|u|Cebolla blanca|v","1|u|Pimentón|v","3|dientes|Ajo|v","1|lata|Tomate triturado|d","1.5|tz|Arroz|d","2|u|Plátano maduro|v"],
 c:["Picadillo de carne con papa|35|B","Arroz blanco|25|B|arroz","Maduro al horno o air fryer|20|D"]},
{id:"car4",name:"Bowl tipo burrito",type:"bowl",fam:"carne",diff:1,kcal:690,p:40,cb:80,f:22,
 desc:"Arroz con limón, carne especiada, frijoles negros, maíz, pico y aguacate.",
 art:{s:"bowl",c:["#F3EEE3","#8B5A44","#3E2B2A","#F2D16B","#9DB26A","#C85A48"]},
 i:["600|g|Carne molida de res|p","1|cda|Especias para tacos|d","1.5|tz|Arroz|d","1|lata|Frijoles negros|d","1|lata|Maíz dulce|d","3|u|Tomate|v","1|u|Cebolla blanca|v","1|manojo|Culantro|v","2|u|Aguacate|v","2|u|Limón|v","150|g|Yogur griego natural|l"],
 c:["Carne sazonada para tacos|25|B|carne-taco","Arroz con limón y culantro|25|B|arroz","Frijoles negros guisados|10|B","Pico, aguacate y armar bowls|15|D"]},
{id:"car5",name:"Sándwich sloppy joe con coleslaw",type:"mano",fam:"carne",diff:1,kcal:640,p:36,cb:58,f:26,
 desc:"Carne en salsa de tomate y pimentón en pan tostado, con ensalada de repollo.",
 art:{s:"sand",c:["#D9A962","#9A4A36","#E7E0C4","#C85A48"]},
 i:["600|g|Carne molida de res|p","6|u|Pan de hamburguesa|n","1|lata|Tomate triturado|d","1|u|Cebolla blanca|v","1|u|Pimentón|v","1|cda|Mostaza|d","0.5|cabeza|Repollo|v","2|u|Zanahoria|v","100|g|Yogur griego natural|l"],
 c:["Carne en salsa estilo sloppy joe|30|B","Coleslaw de repollo|10|B|slaw","Tostar pan y armar|10|D"]},

{id:"pol1",name:"Arroz con pollo",type:"plato",fam:"pollo",diff:2,kcal:640,p:40,cb:82,f:14,
 desc:"Clásico panameño con achiote, culantro y vegetales, con ensalada de repollo.",
 art:{s:"plate",c:["#E0A94A","#E7B452","#B9C98C","#E0924A"]},
 i:["800|g|Pechuga de pollo|p","2|tz|Arroz|d","1|cda|Achiote|d","1|u|Pimentón|v","1|u|Cebolla blanca|v","3|dientes|Ajo|v","1|manojo|Culantro|v","1|tz|Vegetales mixtos congelados|v","0.5|cabeza|Repollo|v","1|u|Limón|v"],
 c:["Pollo desmechado (hervir con cebolla y culantro)|40|B|desmechado","Arroz con pollo|35|B","Ensalada de repollo|10|D"]},
{id:"pol2",name:"Tacos de pollo en salsa chipotle",type:"mano",fam:"pollo",diff:1,kcal:580,p:40,cb:48,f:22,
 desc:"Pollo desmechado en salsa de tomate ahumada, repollo y aguacate.",
 art:{s:"taco",c:["#E8D3A2","#C06A3E","#E4E6CF","#9DB26A"]},
 i:["700|g|Pechuga de pollo|p","12|u|Tortillas de maíz|n","1|lata|Tomate triturado|d","1|lata|Chipotle en adobo|d","0.5|cabeza|Repollo|v","2|u|Aguacate|v","1|u|Cebolla blanca|v","1|manojo|Culantro|v","2|u|Limón|v"],
 c:["Pollo desmechado (hervir con cebolla y culantro)|40|B|desmechado","Salsa de tomate y chipotle con el pollo|15|B","Repollo, aguacate y armar tacos|15|D"]},
{id:"pol3",name:"Pasta cremosa de pollo y brócoli",type:"pasta",fam:"pollo",diff:1,kcal:690,p:46,cb:74,f:20,
 desc:"Salsa ligera con leche evaporada, ajo y parmesano. Lista en 25 minutos.",
 art:{s:"pasta",c:["#E9CF8E","#F1EAD8","#6E8B4E","#E3C08F"]},
 i:["360|g|Pasta corta (penne o fusilli)|d","500|g|Pechuga de pollo|p","1|cabeza|Brócoli|v","1|lata|Leche evaporada|l","60|g|Queso parmesano|l","4|dientes|Ajo|v","2|cda|Aceite de oliva|d"],
 c:["Pollo desmechado (hervir con cebolla y culantro)|40|B|desmechado","Pasta, salsa cremosa y brócoli|25|D"]},
{id:"pol4",name:"Sándwich de pollo y aguacate",type:"mano",fam:"pollo",diff:1,kcal:560,p:40,cb:50,f:20,
 desc:"Pollo desmechado con yogur y mostaza, aguacate, tomate y lechuga.",
 art:{s:"sand",c:["#D4A868","#E3C08F","#9DB26A","#C85A48"]},
 i:["500|g|Pechuga de pollo|p","6|u|Pan ciabatta o baguette|n","2|u|Aguacate|v","2|u|Tomate|v","1|cabeza|Lechuga|v","1|cda|Mostaza|d","100|g|Yogur griego natural|l"],
 c:["Pollo desmechado (hervir con cebolla y culantro)|40|B|desmechado","Mezclar pollo con yogur y mostaza|10|B","Armar sándwiches|10|D"]},
{id:"pol5",name:"Bowl criollo de pollo y frijoles",type:"bowl",fam:"pollo",diff:1,kcal:700,p:40,cb:96,f:14,
 desc:"Arroz, frijoles rojos guisados, pollo desmechado, maduro y ensalada.",
 art:{s:"bowl",c:["#F3EEE3","#E3C08F","#6B2E2A","#D9953A","#A9C08F"]},
 i:["600|g|Pechuga de pollo|p","1.5|tz|Arroz|d","1|lata|Frijoles rojos|d","2|u|Plátano maduro|v","2|u|Tomate|v","1|u|Pepino|v","1|manojo|Culantro|v","1|u|Limón|v"],
 c:["Pollo desmechado (hervir con cebolla y culantro)|40|B|desmechado","Arroz blanco|25|B|arroz","Frijoles rojos guisados|15|B","Maduro al horno y ensalada|25|D"]},

{id:"asi1",name:"Bowl de pollo teriyaki",type:"bowl",fam:"asia",diff:1,kcal:650,p:42,cb:80,f:14,
 desc:"Pollo salteado con brócoli y zanahoria en teriyaki casero, sobre arroz.",
 art:{s:"bowl",c:["#F3EEE3","#9A5B2E","#6E8B4E","#E0924A"]},
 i:["700|g|Pechuga de pollo|p","1.5|tz|Arroz|d","1|cabeza|Brócoli|v","2|u|Zanahoria|v","4|cda|Salsa de soya|d","2|cda|Miel|d","1|trozo|Jengibre|v","3|dientes|Ajo|v","1|cda|Ajonjolí|d","1|cda|Fécula de maíz|d"],
 c:["Salsa teriyaki casera|10|B|teriyaki","Arroz blanco|25|B|arroz","Saltear pollo y vegetales con teriyaki|25|D"]},
{id:"asi2",name:"Arroz frito con pollo y huevo",type:"plato",fam:"asia",diff:1,kcal:620,p:36,cb:78,f:18,
 desc:"Aprovecha el arroz frío del día fuerte. Huevo, vegetales y cebollina.",
 art:{s:"bowl",c:["#E2C68A","#E3C08F","#F2D16B","#7FA05A","#E0924A"]},
 i:["2|tz|Arroz|d","450|g|Pechuga de pollo|p","4|u|Huevos|l","1|tz|Vegetales mixtos congelados|v","1|manojo|Cebollina|v","4|cda|Salsa de soya|d","3|dientes|Ajo|v","2|cda|Aceite vegetal|d"],
 c:["Arroz blanco (mejor si reposa frío en la nevera)|25|B|arroz","Pollo en cubos sellado|15|B","Arroz frito con huevo y vegetales|20|D"]},
{id:"asi3",name:"Fideos salteados con carne",type:"pasta",fam:"asia",diff:2,kcal:660,p:38,cb:80,f:20,
 desc:"Espagueti salteado con bistec en tiras, repollo, pimentón y teriyaki.",
 art:{s:"pasta",c:["#D9B26A","#7A4A2A","#8C5A8C","#E0924A","#7FA05A"]},
 i:["350|g|Espagueti|d","500|g|Bistec de res en tiras|p","1|u|Pimentón|v","0.5|cabeza|Repollo|v","2|u|Zanahoria|v","4|cda|Salsa de soya|d","2|cda|Miel|d","1|trozo|Jengibre|v","3|dientes|Ajo|v","2|cda|Aceite vegetal|d"],
 c:["Salsa teriyaki casera|10|B|teriyaki","Cortar vegetales y marinar carne|15|B","Saltear fideos, carne y vegetales|25|D"]},
{id:"asi4",name:"Bowl de salmón teriyaki",type:"bowl",fam:"asia",diff:1,kcal:680,p:36,cb:70,f:26,
 desc:"Salmón glaseado al horno, arroz, pepino, zanahoria y aguacate.",
 art:{s:"bowl",c:["#F3EEE3","#E59A7A","#A9C08F","#E0924A","#9DB26A"]},
 i:["500|g|Salmón en filete|p","1.5|tz|Arroz|d","1|u|Pepino|v","2|u|Zanahoria|v","2|u|Aguacate|v","3|cda|Salsa de soya|d","1|cda|Miel|d","1|cda|Ajonjolí|d","1|trozo|Jengibre|v"],
 c:["Salsa teriyaki casera|10|B|teriyaki","Arroz blanco|25|B|arroz","Salmón al horno con teriyaki|15|D","Cortar pepino, zanahoria y aguacate|10|D"]},
{id:"asi5",name:"Wraps de pollo teriyaki",type:"mano",fam:"asia",diff:1,kcal:590,p:38,cb:56,f:20,
 desc:"Tortilla grande con pollo en tiras, repollo morado y salsa de yogur picante.",
 art:{s:"taco",c:["#EBDDB8","#A8622F","#8C5A8C","#E0924A"]},
 i:["600|g|Pechuga de pollo|p","6|u|Tortillas de harina grandes|n","0.5|cabeza|Repollo morado|v","2|u|Zanahoria|v","150|g|Yogur griego natural|l","1|cda|Salsa picante|d","3|cda|Salsa de soya|d","1|cda|Miel|d"],
 c:["Salsa teriyaki casera|10|B|teriyaki","Pollo teriyaki en tiras|25|B","Slaw de repollo morado|10|B","Calentar y enrollar wraps|10|D"]},

{id:"mar1",name:"Salmón con puré y brócoli",type:"plato",fam:"mar",diff:1,kcal:650,p:38,cb:48,f:32,
 desc:"Puré cremoso hecho el día fuerte; salmón y brócoli frescos en 20 minutos.",
 art:{s:"plate",c:["#E59A7A","#EFE2B8","#6E8B4E","#F2E27A"]},
 i:["550|g|Salmón en filete|p","900|g|Papa|v","1|cabeza|Brócoli|v","2|cda|Mantequilla|l","0.5|tz|Leche|l","1|u|Limón|v","3|dientes|Ajo|v","1|cda|Aceite de oliva|d"],
 c:["Puré de papa|30|B|pure","Salmón al horno con limón y ajo|15|D","Brócoli al vapor|8|D"]},
{id:"mar2",name:"Pasta con atún en salsa",type:"pasta",fam:"mar",diff:1,kcal:610,p:38,cb:80,f:14,
 desc:"Salsa de tomate con atún, pimentón y orégano. Barata y rendidora.",
 art:{s:"pasta",c:["#E9CF8E","#B5483A","#C9A48A","#6F6F42"]},
 i:["360|g|Pasta corta (penne o fusilli)|d","3|lata|Atún en agua|p","2|lata|Tomate triturado|d","1|u|Cebolla blanca|v","4|dientes|Ajo|v","1|u|Pimentón|v","60|g|Queso parmesano|l","1|cdta|Orégano seco|d"],
 c:["Salsa de tomate con atún|25|B","Cocinar pasta y mezclar|15|D"]},
{id:"mar3",name:"Sándwich de atún y huevo",type:"mano",fam:"mar",diff:1,kcal:540,p:38,cb:46,f:20,
 desc:"Atún con huevo duro, yogur, cebolla morada y limón en pan integral.",
 art:{s:"sand",c:["#C99A5E","#D9C3A8","#F2D16B","#9DB26A"]},
 i:["3|lata|Atún en agua|p","4|u|Huevos|l","12|rebanadas|Pan de molde integral|n","150|g|Yogur griego natural|l","1|u|Cebolla morada|v","2|u|Tomate|v","1|cabeza|Lechuga|v","1|cda|Mostaza|d","1|u|Limón|v"],
 c:["Huevos duros|15|B","Mezcla de atún, huevo y yogur|10|B","Armar sándwiches|10|D"]},
{id:"mar4",name:"Tacos de corvina",type:"mano",fam:"mar",diff:1,kcal:560,p:40,cb:50,f:20,
 desc:"Corvina a la plancha con slaw de limón, aguacate y salsa de yogur.",
 art:{s:"taco",c:["#E8D3A2","#F1E8D8","#E4E6CF","#9DB26A"]},
 i:["600|g|Filete de corvina|p","12|u|Tortillas de maíz|n","0.5|cabeza|Repollo|v","150|g|Yogur griego natural|l","1|cda|Salsa picante|d","3|u|Limón|v","2|u|Aguacate|v","1|manojo|Culantro|v","1|cda|Especias para tacos|d"],
 c:["Coleslaw de repollo|10|B|slaw","Salsa de yogur picante|5|B","Corvina a la plancha y armar tacos|25|D"]},
{id:"mar5",name:"Corvina al horno con arroz con coco",type:"plato",fam:"mar",diff:2,kcal:650,p:40,cb:75,f:20,
 desc:"Pescado con limón y ajo, arroz con coco y ensalada de tomate.",
 art:{s:"plate",c:["#F1E8D8","#F5F0E4","#9CBB6E","#C85A48"]},
 i:["600|g|Filete de corvina|p","1.5|tz|Arroz|d","1|lata|Leche de coco|d","2|u|Limón|v","3|dientes|Ajo|v","1|manojo|Culantro|v","1|cabeza|Lechuga|v","2|u|Tomate|v","1|u|Pepino|v"],
 c:["Arroz con coco|30|B","Marinar corvina en limón y ajo|5|B","Corvina al horno|20|D","Ensalada fresca|10|D"]}
];
function mk(o){return{...o,prot:PROT[o.id]||"otro",ings:o.i.map(s=>{const[q,u,n,sec]=s.split("|");return{q:+q,u,n,sec}}),
  comps:o.c.map((s,ix)=>{const[t,min,w,sh]=s.split("|");return{k:"c"+ix,t,min:+min,b:w==="B",s:sh||null,steps:STEPS[sh]||STEPS[o.id+":"+ix]||[]}})}}
const BUILT=RAW.map(mk);

/* ---------- Estado ---------- */
const S={view:"week",wk:null,weeks:{},custom:{},freezer:0,favs:[],mult:{maurilyn:1,mariana:1,harmodio:1.5},type:"all",q:"",pick:null,modal:null,confirm:null,form:null};
const PEOPLE=[["maurilyn","Maurilyn"],["mariana","Mariana"],["harmodio","Harmodio"]];
let DB=null;const pending=new Set(),timers={};
const $=s=>document.querySelector(s);
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const clone=o=>JSON.parse(JSON.stringify(o));
const pad=n=>String(n).padStart(2,"0");
const keyOf=d=>`${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
const parseKey=k=>{const[y,m,d]=k.split("-").map(Number);return new Date(y,m-1,d)};
const addDays=(d,n)=>{const x=new Date(d);x.setDate(x.getDate()+n);return x};
const mondayOf=d=>{const x=new Date(d.getFullYear(),d.getMonth(),d.getDate());x.setDate(x.getDate()-((x.getDay()+6)%7));return x};
const fmtD=d=>`${d.getDate()} ${MES[d.getMonth()]}`;
const fmtMin=m=>{m=Math.round(m);if(m<60)return`${m} min`;const h=Math.floor(m/60),r=m%60;return r?`${h} h ${r} min`:`${h} h`};
const thisWeek=()=>{const t=new Date(),dw=t.getDay();return keyOf(mondayOf(dw===0||dw===6?addDays(t,2):t))};
S.wk=thisWeek();

const BMAP=Object.fromEntries(BUILT.map(r=>[r.id,r]));
function resolve(id){const b=BMAP[id],o=S.custom[id];if(o&&b)return{...o,art:b.art,custom:false,edited:true};return o||b||null}
const allRecipes=()=>BUILT.map(r=>resolve(r.id)).concat(Object.values(S.custom).filter(r=>!BMAP[r.id]));
const rec=id=>id?resolve(id):null;
const isFav=id=>S.favs.includes(id);
const portions=()=>PEOPLE.reduce((a,[k])=>a+(+S.mult[k]||0),0);
const factor=()=>portions()/3;
const fmtN=n=>String(Math.round(n*100)/100).replace(".",",");
const famOf=r=>FAM[r?.fam]||FAM.med;
const famVar=r=>`var(${famOf(r).v})`;
const totalMin=r=>r.comps.reduce((a,c)=>a+c.min,0);
const dayMin=r=>r.comps.filter(c=>!c.b).reduce((a,c)=>a+c.min,0);
const who=(k,btn,v)=>`<${btn?"button":"span"} class="who-chip" style="--c:${CCOL[k]}"${btn?` data-act="${btn}" data-v="${esc(v)}" title="Cambiar quién lo hace"`:""}><span class="dot" style="background:${CCOL[k]}"></span>${COOK[k]}</${btn?"button":"span"}>`;

function blank(){return{days:Array.from({length:5},()=>({r:null,cook:"nos",done:{}})),bOwn:{},shop:{}}}
function normWeek(o){const b=blank();if(!o||typeof o!=="object")return b;
  if(Array.isArray(o.days))o.days.slice(0,5).forEach((d,i)=>{if(d&&typeof d==="object")b.days[i]={r:typeof d.r==="string"?d.r:null,cook:d.cook==="mama"?"mama":"nos",done:d.done&&typeof d.done==="object"?{...d.done}:{}}});
  if(o.bOwn&&typeof o.bOwn==="object")Object.entries(o.bOwn).forEach(([k,v])=>{if(v==="mama"||v==="nos")b.bOwn[k]=v});
  b.shop=o.shop&&typeof o.shop==="object"?{...o.shop}:{};return b}
function normRec(id,o){if(!o||typeof o!=="object"||typeof o.name!=="string")return null;
  const n=v=>Number.isFinite(+v)?+v:0;
  return{id,custom:true,name:o.name.slice(0,80),type:TYPES[o.type]?o.type:"plato",fam:FAM[o.fam]?o.fam:"med",prot:PROTS[o.prot]?o.prot:"otro",diff:[1,2,3].includes(+o.diff)?+o.diff:1,
   kcal:n(o.kcal),p:n(o.p),cb:n(o.cb),f:n(o.f),desc:String(o.desc||"").slice(0,240),
   photo:typeof o.photo==="string"&&o.photo.startsWith("data:image/")?o.photo:null,
   ings:Array.isArray(o.ings)?o.ings.filter(x=>x&&x.n).map(x=>({q:n(x.q),u:UNIT[x.u]!==undefined?x.u:"u",n:String(x.n).slice(0,60),sec:SEC[x.sec]?x.sec:"d"})):[],
   comps:Array.isArray(o.comps)?o.comps.filter(x=>x&&x.t).map((x,i)=>({k:"c"+i,t:String(x.t).slice(0,90),min:n(x.min),b:!!x.b,s:typeof x.s==="string"&&x.s?x.s.slice(0,30):null,steps:Array.isArray(x.steps)?x.steps.map(s=>String(s).slice(0,300)).slice(0,20):[]})):[]}}
const week=(k=S.wk)=>S.weeks[k]||blank();

/* ---------- Persistencia ---------- */
function saveLS(){try{localStorage.setItem("almuerzos",JSON.stringify({weeks:S.weeks,custom:S.custom,freezer:S.freezer,favs:S.favs,mult:S.mult}))}catch(e){}}
function applyMeta(o){if(!o)return;S.freezer=Math.max(0,+o.freezer||0);if(Array.isArray(o.favs))S.favs=o.favs.filter(x=>typeof x==="string").slice(0,200);if(o.mult&&typeof o.mult==="object")PEOPLE.forEach(([k])=>{const v=+o.mult[k];if(Number.isFinite(v)&&v>=0&&v<=4)S.mult[k]=v})}
const metaDoc=()=>({freezer:S.freezer,favs:S.favs,mult:S.mult});
const saveMeta=()=>persist("meta/main",metaDoc);
function loadLS(){try{const o=JSON.parse(localStorage.getItem("almuerzos")||"null");if(!o)return;
  Object.entries(o.weeks||{}).forEach(([k,v])=>S.weeks[k]=normWeek(v));
  Object.entries(o.custom||{}).forEach(([k,v])=>{const r=normRec(k,v);if(r)S.custom[k]=r});
  applyMeta(o)}catch(e){}}
function persist(path,get){saveLS();if(!DB)return;pending.add(path);clearTimeout(timers[path]);
  timers[path]=setTimeout(()=>write(path,get,0),400)}
async function write(path,get,tries){try{await DB.doc(path).set(clone(get()))}
  catch(e){if(e&&e.code==="unavailable"&&tries<1){setTimeout(()=>write(path,get,1),600+Math.random()*600);return}
    toast(e&&e.code==="invalid_argument"?"Tienes acceso de solo lectura: los cambios no se guardan.":"No se pudo guardar. Revisa tu conexión.")}
  finally{pending.delete(path)}}
function mutateWeek(fn,k=S.wk){const w=clone(week(k));fn(w);S.weeks[k]=w;persist("weeks/"+k,()=>S.weeks[k]);render()}

const CODE_KEY="almuerzos-code";
const famCode=()=>{try{return localStorage.getItem(CODE_KEY)||""}catch(e){return""}};
const validCode=c=>/^[A-Za-z0-9_-]{12,60}$/.test(c||"");
function getDB(){
  const code=famCode();
  if(!validCode(code)){try{if(!sessionStorage.getItem("almuerzos-skip"))showGate()}catch(e){showGate()}return null}
  if(!window.FIREBASE_CONFIG||!window.FIREBASE_CONFIG.apiKey){S.noSync="config";render();return null}
  if(!window.AlmuerzosDB){S.noSync="sdk";render();return null}
  try{return window.AlmuerzosDB.open(code)}catch(e){S.noSync="sdk";render();return null}
}
async function initDB(){loadLS();render();
  const db=getDB();if(!db)return;DB=db;render();
  db.collection("weeks").onSnapshot(snap=>{snap.docs.forEach(d=>{if(!pending.has("weeks/"+d.id))S.weeks[d.id]=normWeek(d.data())});render()},()=>{});
  db.collection("recipes").onSnapshot(snap=>{const next={};snap.docs.forEach(d=>{const r=normRec(d.id,d.data());if(r)next[d.id]=r});S.custom=next;render()},()=>{});
  db.doc("meta/main").onSnapshot(s=>{if(s.exists&&!pending.has("meta/main"))applyMeta(s.data());render()},()=>{});
}

/* ---------- Ilustraciones ---------- */
function hash(s){let h=2166136261;for(const c of s)h=Math.imul(h^c.charCodeAt(0),16777619);return h>>>0}
function rng(seed){return()=>{seed|=0;seed=seed+0x6D2B79F5|0;let t=Math.imul(seed^seed>>>15,1|seed);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
function sector(r0,r1,a0,a1){const p=(r,a)=>`${(60+r*Math.cos(a)).toFixed(1)} ${(60+r*Math.sin(a)).toFixed(1)}`;const L=a1-a0>Math.PI?1:0;
  return`M${p(r1,a0)} A${r1} ${r1} 0 ${L} 1 ${p(r1,a1)} L${p(r0,a1)} A${r0} ${r0} 0 ${L} 0 ${p(r0,a0)}Z`}
function art(r){
  if(r.photo)return`<img src="${esc(r.photo)}" alt="">`;
  const R=rng(hash(r.id));const col=getComputedStyle(document.documentElement).getPropertyValue(famOf(r).v).trim()||"#8A9A7B";
  const a=r.art||{s:{pasta:"pasta",bowl:"bowl",plato:"plate",mano:"taco"}[r.type]||"plate",c:["#EDE3CF",col,"#9DB26A","#C85A48","#F2D16B"]};
  const c=a.c;let g=`<circle cx="60" cy="60" r="56" fill="var(--plate)" stroke="var(--rim)" stroke-width="1.5"/><circle cx="60" cy="60" r="47" fill="none" stroke="var(--rim)" stroke-width=".8"/>`;
  if(a.s==="bowl"){const n=c.length-1,st=-Math.PI/2+R()*.8,gap=.06;
    for(let i=0;i<n;i++){const a0=st+i*2*Math.PI/n+gap,a1=st+(i+1)*2*Math.PI/n-gap;g+=`<path d="${sector(17,44,a0,a1)}" fill="${c[i+1]}"/>`;
      for(let j=0;j<3;j++){const aa=a0+(a1-a0)*R(),rr=22+R()*18;g+=`<circle cx="${(60+rr*Math.cos(aa)).toFixed(1)}" cy="${(60+rr*Math.sin(aa)).toFixed(1)}" r="${(1.2+R()*1.6).toFixed(1)}" fill="rgba(255,255,255,.3)"/>`}}
    g+=`<circle cx="60" cy="60" r="14" fill="${c[0]}"/>`}
  else if(a.s==="plate"){const rot=Math.round(R()*40-20);
    g+=`<ellipse cx="75" cy="50" rx="23" ry="15" fill="${c[0]}" transform="rotate(${rot} 75 50)"/><path d="M62 47 q13 -7 26 0" stroke="rgba(255,255,255,.35)" stroke-width="2" fill="none" transform="rotate(${rot} 75 50)"/>`;
    g+=`<circle cx="42" cy="56" r="19" fill="${c[1]}"/><circle cx="37" cy="51" r="6" fill="rgba(255,255,255,.3)"/>`;
    for(let i=0;i<7;i++)g+=`<circle cx="${(52+R()*26).toFixed(1)}" cy="${(78+R()*12).toFixed(1)}" r="${(4.5+R()*3).toFixed(1)}" fill="${c[2]}"/>`;
    if(c[3])for(let i=0;i<3;i++)g+=`<circle cx="${(70+R()*20).toFixed(1)}" cy="${(38+R()*28).toFixed(1)}" r="2.4" fill="${c[3]}"/>`}
  else if(a.s==="pasta"){g+=`<circle cx="60" cy="60" r="38" fill="${c[1]}"/>`;
    for(let i=0;i<9;i++){const y=34+i*6.5+R()*2,x0=28+R()*6,amp=3+R()*3;g+=`<path d="M${x0} ${y} q8 ${-amp} 16 0 t16 0 t16 0 t16 0" stroke="${c[0]}" stroke-width="3.6" fill="none" stroke-linecap="round" transform="rotate(${Math.round(R()*30-15)} 60 60)"/>`}
    for(let i=2;i<c.length;i++)for(let j=0;j<5;j++)g+=`<circle cx="${(36+R()*48).toFixed(1)}" cy="${(36+R()*48).toFixed(1)}" r="${(2.6+R()*2).toFixed(1)}" fill="${c[i]}"/>`}
  else if(a.s==="taco"){[[46,52,-24],[72,70,18]].forEach(([x,y,rt])=>{
    g+=`<g transform="rotate(${rt} ${x} ${y})"><ellipse cx="${x}" cy="${y}" rx="30" ry="15" fill="${c[0]}"/><ellipse cx="${x}" cy="${y-2}" rx="24" ry="8" fill="${c[1]}"/>`;
    for(let j=0;j<6;j++)g+=`<circle cx="${(x-20+R()*40).toFixed(1)}" cy="${(y-6+R()*7).toFixed(1)}" r="${(2+R()*1.6).toFixed(1)}" fill="${c[2+(j%2)]||c[2]}"/>`;
    g+=`<path d="M${x-30} ${y+2} Q${x} ${y+20} ${x+30} ${y+2}" fill="rgba(0,0,0,.06)"/></g>`})}
  else if(a.s==="sand"){[[[26,36],[76,36],[26,86]],[[94,84],[44,84],[94,34]]].forEach(t=>{const P=t.map(p=>p.join(" ")).join(" L");
    g+=`<path d="M${P}Z" fill="${c[0]}"/>`;const m=(p,q,s)=>[p[0]+(q[0]-p[0])*s,p[1]+(q[1]-p[1])*s];const A=t[1].slice(),B=t[2].slice();
    for(let j=1;j<c.length;j++){const s=.12+j*.11;const a1=m(A,t[0],s),b1=m(B,t[0],s);g+=`<path d="M${A[0]} ${A[1]} L${B[0]} ${B[1]} L${b1[0].toFixed(1)} ${b1[1].toFixed(1)} L${a1[0].toFixed(1)} ${a1[1].toFixed(1)}Z" fill="${c[j]}"/>`;A.splice(0,2,...a1);B.splice(0,2,...b1)}})}
  return`<svg viewBox="0 0 120 120" role="img" aria-label="${esc(r.name)}">${g}</svg>`}

/* ---------- Cálculos ---------- */
function batchTasks(w){const g=new Map();
  w.days.forEach((d,di)=>{const r=rec(d.r);if(!r)return;r.comps.filter(c=>c.b).forEach(c=>{
    const key=c.s?"s:"+c.s:r.id+":"+c.k;if(!g.has(key))g.set(key,{key,t:c.t,c,base:c.min,refs:[],days:[],rs:[],r});
    const x=g.get(key);x.refs.push([di,c.k]);if(!x.days.includes(di))x.days.push(di);if(!x.rs.includes(r))x.rs.push(r)})});
  return[...g.values()].map(x=>({...x,n:x.refs.length,min:x.base+8*(x.refs.length-1),done:x.refs.every(([di,k])=>w.days[di].done[k]),own:w.bOwn[x.key]==="mama"?"mama":"nos"})).sort((a,b)=>b.min-a.min)}
function loads(w){const L={mama:0,nos:0},B={mama:0,nos:0},D={mama:0,nos:0};
  batchTasks(w).forEach(t=>{L[t.own]+=t.min;B[t.own]+=t.min});
  w.days.forEach(d=>{const r=rec(d.r);if(r){const m=dayMin(r);L[d.cook]+=m;D[d.cook]+=m}});return{L,B,D}}
/* Reparto: tareas del día fuerte y días de entre semana, el más largo primero al grupo con menos minutos */
function balanceWeek(w){const bt=batchTasks(w);
  const items=[...bt.map(t=>({b:t.key,m:t.min})),...w.days.map((d,i)=>({d:i,m:rec(d.r)?dayMin(rec(d.r)):-1})).filter(x=>x.m>=0)].sort((a,b)=>b.m-a.m||("d" in a?1:-1));
  const L={mama:0,nos:0},C={mama:0,nos:0};w.bOwn={};
  items.forEach(x=>{const p=L.mama<L.nos?"mama":L.nos<L.mama?"nos":(C.mama<=C.nos?"mama":"nos");
    if("d" in x){w.days[x.d].cook=p;C[p]++}else w.bOwn[x.b]=p;L[p]+=x.m});
  const idx=w.days.map((d,i)=>d.r?i:-1).filter(i=>i>=0);
  ["mama","nos"].forEach(p=>{const o=p==="mama"?"nos":"mama";if(idx.length>=2&&!idx.some(i=>w.days[i].cook===p)){
    const s=idx.filter(i=>w.days[i].cook===o).sort((a,b)=>dayMin(rec(w.days[a].r))-dayMin(rec(w.days[b].r)))[0];if(s!==undefined)w.days[s].cook=p}})}
function dayProg(d){const r=rec(d.r);if(!r)return{done:0,total:0};return{done:r.comps.filter(c=>d.done[c.k]).length,total:r.comps.length}}
function weekProg(w){let a=0,b=0,n=0;w.days.forEach(d=>{const p=dayProg(d);a+=p.done;b+=p.total;if(d.r)n++});return{done:a,total:b,planned:n}}
function shopList(w){const m=new Map();
  w.days.forEach((d,di)=>{const r=rec(d.r);if(!r)return;r.ings.forEach(x=>{const k=(x.n.toLowerCase()+"|"+x.u);
    if(!m.has(k))m.set(k,{k,n:x.n,u:x.u,sec:x.sec,q:0,days:[]});const it=m.get(k);it.q+=x.q*factor();if(!it.days.includes(di))it.days.push(di)})});
  return[...m.values()]}
function fmtQ(q,u){if(u==="g"){q=Math.round(q/10)*10;if(q>=1000)return(Math.round(q/100)/10).toString().replace(".",",")+" kg";return q+" g"}
  if(["u","lata","dientes","rebanadas"].includes(u))q=Math.ceil(q-.05);else q=Math.round(q*4)/4;
  const s=String(q).replace(".",",");return UNIT[u]?`${s} ${UNIT[u]}`:s}
const shortDays=ds=>ds.map(d=>DAYS[d].slice(0,3)).join(", ");

/* ---------- Sugerencia de semana ---------- */
function scoreWeek(ids,prevSig){const rs=ids.map(rec);const prots=new Set(rs.map(r=>r.prot));const cnt={};ids.forEach(i=>cnt[i]=(cnt[i]||0)+1);
  const D=Object.keys(cnt).length,P=prots.size;let s=0;
  if(P>2)s-=30*(P-2);if(P===1)s-=2;
  s+=({1:-40,2:0,3:5,4:-5,5:-16})[D]||0;
  Object.values(cnt).forEach(c=>{if(c>2)s-=25*(c-2)});
  for(let i=0;i<4;i++)if(ids[i]===ids[i+1])s-=5;
  const merges=batchTasks({days:ids.map(r=>({r,cook:"nos",done:{}})),bOwn:{}}).reduce((a,t)=>a+(t.n-1),0);s+=2.5*merges;
  s+=1.5*new Set(rs.map(r=>r.type)).size+1.5*ids.filter(isFav).length;
  const tot=rs.reduce((a,r)=>a+dayMin(r),0);if(rs.some(r=>dayMin(r)>45))s-=6;
  if(prevSig&&[...new Set(ids)].sort().join()===prevSig)s-=80;
  return s+Math.random()*5}
function suggestWeek(){const w0=week();const full=w0.days.every(d=>d.r);
  const fixed=full?[null,null,null,null,null]:w0.days.map(d=>d.r&&rec(d.r)?d.r:null);
  const prevSig=full?[...new Set(w0.days.map(d=>d.r))].sort().join():null;
  const all=allRecipes();let best=null,bs=-1e9;
  for(let it=0;it<500;it++){const ids=fixed.slice();
    const order=[0,1,2,3,4].filter(i=>!ids[i]).sort(()=>Math.random()-.5);
    order.forEach(i=>{const cur=ids.filter(Boolean),cp=new Set(cur.map(x=>rec(x).prot)),cnt={};cur.forEach(x=>cnt[x]=(cnt[x]||0)+1);
      const ws=all.map(r=>{if((cnt[r.id]||0)>=2)return 0;let v=isFav(r.id)?2.5:1;if(cp.has(r.prot))v*=6;if(cnt[r.id])v*=5;return v});
      let t=Math.random()*ws.reduce((a,b)=>a+b,0);let pick=all[0];for(let j=0;j<all.length;j++){t-=ws[j];if(t<=0){pick=all[j];break}}ids[i]=pick.id});
    const sc=scoreWeek(ids,prevSig);if(sc>bs){bs=sc;best=ids}}
  return best}

/* ---------- Vistas ---------- */
function diffDots(n){return`<span class="diff" aria-label="Dificultad ${n} de 3">${[1,2,3].map(i=>`<i class="${i<=n?"on":""}"></i>`).join("")}</span>`}
const DIFF=["","Fácil","Media","Elaborada"];

function viewWeek(){const w=week(),mon=parseKey(S.wk),today=keyOf(new Date());
  const{L,B,D}=loads(w),tot=L.mama+L.nos||1,wp=weekProg(w);
  const mid=addDays(mon,2),first=new Date(mid.getFullYear(),mid.getMonth(),1);let m=mondayOf(first);const pills=[];
  for(let i=0;i<7;i++){const wed=addDays(m,2);if(wed.getMonth()===mid.getMonth())pills.push(keyOf(m));else if(wed>mid)break;m=addDays(m,7)}
  const pillHtml=pills.map(k=>{const p=weekProg(week(k));const pct=p.total?Math.round(p.done/p.total*100):0;
    return`<button class="mpill" data-act="goWeek" data-v="${k}" aria-current="${k===S.wk}"><b>Semana del ${fmtD(parseKey(k))}</b><span>${p.planned} de 5 días elegidos</span><div class="bar"><i style="width:${pct}%;background:var(--accent)"></i></div></button>`}).join("");
  const pc={};w.days.forEach(d=>{const r=rec(d.r);if(r)pc[r.prot]=(pc[r.prot]||0)+1});
  const prots=Object.entries(pc).sort((a,b)=>b[1]-a[1]).map(([p,n])=>`<span class="prot"><span class="dot" style="background:var(${PROTS[p][1]})"></span>${PROTS[p][0]}: ${n} ${n===1?"día":"días"}</span>`).join("");
  const empty=5-wp.planned;
  const days=w.days.map((d,i)=>{const date=addDays(mon,i),r=rec(d.r),isT=keyOf(date)===today;
    if(!r)return`<button class="day empty${isT?" today":""}" data-act="openDay" data-v="${i}"><span class="plus">+</span><span><b>${DAYS[i]}</b> ${fmtD(date)}<br><span class="small">Elegir plato</span></span></button>`;
    const p=dayProg(d),pct=Math.round(p.done/p.total*100),dm=dayMin(r);
    return`<button class="day tint${isT?" today":""}" style="--fam:${famVar(r)}" data-act="openDay" data-v="${i}">
      <div class="hd"><div class="dow">${DAYS[i]}</div><div class="date">${fmtD(date)}${isT?", hoy":""}</div></div>
      <div class="art">${art(r)}</div>
      <div class="name">${esc(r.name)}</div>
      <div class="who">${who(d.cook)}${dm>45?` <span class="alert">${dm} min</span>`:""}</div>
      <div class="prog"><div class="bar"><i style="width:${pct}%;background:${famVar(r)}"></i></div><div class="row"><span>${p.done} de ${p.total} listos</span><span>${pct===100?"Todo listo":fmtMin(r.comps.filter(c=>!d.done[c.k]).reduce((a,c)=>a+c.min,0))+" pendientes"}</span></div></div>
    </button>`}).join("");
  return`
  <section class="hero">
    <div class="row">
      <div class="row"><button class="icon-btn" data-act="wk" data-v="-1" aria-label="Semana anterior">‹</button>
      <h2>${fmtD(mon)} al ${fmtD(addDays(mon,4))}</h2>
      <button class="icon-btn" data-act="wk" data-v="1" aria-label="Semana siguiente">›</button>
      ${S.wk!==thisWeek()?`<button class="btn ghost small" data-act="wk" data-v="0">Volver a esta semana</button>`:""}</div>
      <div class="row"><button class="btn color" data-act="suggest">${wp.planned===5?"Sugerir otra combinación":"Sugerir semana"}</button></div>
    </div>
    <div class="prots">${prots||`<span class="muted small">${empty} días por elegir. Toca un día o pide una sugerencia.</span>`}</div>
    <div class="month" aria-label="Semanas del mes">${pillHtml}</div>
  </section>
  <div class="summary">
    <div class="panel balance">
      <div class="row" style="justify-content:space-between"><b>Tiempo en la cocina</b><button class="btn small" data-act="balance" ${wp.planned?"":"disabled"}>Repartir otra vez</button></div>
      <div class="bb"><i style="width:${L.mama/tot*100}%;background:var(--mama)"></i><i style="width:${L.nos/tot*100}%;background:var(--nos)"></i></div>
      <div class="legend"><span>${who("mama")} ${fmtMin(L.mama)}<span class="small muted"> (día fuerte ${fmtMin(B.mama)}, semana ${fmtMin(D.mama)})</span></span>
      <span>${who("nos")} ${fmtMin(L.nos)}<span class="small muted"> (día fuerte ${fmtMin(B.nos)}, semana ${fmtMin(D.nos)})</span></span></div>
    </div>
    <div class="panel">
      <div class="row" style="justify-content:space-between"><b>${empty?`Faltan ${empty} ${empty===1?"día":"días"}`:"Semana completa"}</b><span class="small muted">${wp.total?Math.round(wp.done/wp.total*100):0}% cocinado</span></div>
      <div class="bar" style="margin:12px 0 10px"><i style="width:${wp.total?wp.done/wp.total*100:0}%;background:linear-gradient(90deg,var(--f-med),var(--f-pollo),var(--f-carne))"></i></div>
      <div class="row"><button class="btn small" data-act="nav" data-v="cook">Ver plan de cocina</button>
      <button class="btn ghost danger small" data-act="clearWeek" ${wp.planned?"":"disabled"}>${S.confirm==="clear"?"Toca otra vez para vaciar":"Vaciar semana"}</button></div>
    </div>
  </div>
  <div class="days" id="days">${days}</div>
  <div class="pager" role="tablist" aria-label="Días">${w.days.map((d,i)=>{const r=rec(d.r);return`<button data-act="goDay" data-v="${i}" aria-current="false"><span class="dot" style="background:${r?famVar(r):"var(--line)"}"></span>${DAYS[i].slice(0,3)}</button>`}).join("")}</div>
  ${syncFooter()}`}
function syncFooter(){const c=famCode(),ok=validCode(c);
  const st=DB?`Sincronizado, código ••••${esc(c.slice(-4))}`:S.noSync==="config"?"Sin sincronizar: falta completar firebase-config.js":S.noSync==="sdk"?"Sin sincronizar: no cargó firebase-db.js":ok?"Conectando…":"Solo en este dispositivo";
  return`<div class="foot small muted">${st}<br><button class="linkbtn" data-act="invite">Copiar link de invitación</button> · <button class="linkbtn" data-act="gate">${ok?"Cambiar código":"Poner código familiar"}</button></div>`}
function showGate(){const g=$("#gate"),cur=famCode();g.hidden=false;
  g.innerHTML=`<div class="box panel"><div class="sec-title">Código familiar</div>
  <p class="small muted" style="margin:4px 0 10px">Es la llave de la base compartida: los tres deben escribir el mismo. De 12 a 60 caracteres, solo letras, números, guion y guion bajo. Quien lo genera primero puede copiar el link de invitación desde el pie de la pantalla Semana.</p>
  <label class="small muted" for="g-code">Código</label>
  <input id="g-code" class="search" maxlength="60" autocapitalize="off" autocomplete="off" autocorrect="off" spellcheck="false" value="${esc(cur)}">
  <div class="row" style="margin-top:12px"><button class="btn color" data-act="gateSave">Entrar</button><button class="btn" data-act="gateGen">Generar uno</button>
  ${cur?`<button class="btn ghost" data-act="gateClose">Cancelar</button>`:`<button class="btn ghost" data-act="gateSkip">Solo en este teléfono</button>`}</div>
  <p id="g-err" class="alert" role="alert" style="margin-top:10px"></p></div>`;
  const i=$("#g-code");if(i&&i.focus)i.focus()}
function copyText(txt,ok){const done=()=>toast(ok);
  (navigator.clipboard?navigator.clipboard.writeText(txt):Promise.reject()).then(done).catch(()=>{const t=document.createElement("textarea");t.value=txt;document.body.appendChild(t);t.select();try{document.execCommand("copy");done()}catch(e){toast("No se pudo copiar.")}t.remove()})}
window.addEventListener("almuerzos-db-error",e=>{const c=e.detail&&e.detail.code;
  toast(c==="permission-denied"?"No hay permiso para guardar. Revisa las reglas de Firestore y el código familiar.":"No se pudo guardar. Revisa tu conexión.")});

function viewLib(){const inWeek=new Set(week().days.map(d=>rec(d.r)?.fam).filter(Boolean));
  const pickBar=S.pick!==null?`<div class="pickbar"><span>Eligiendo el almuerzo del <b>${DAYS[S.pick].toLowerCase()} ${fmtD(addDays(parseKey(S.wk),S.pick))}</b>.${inWeek.size?" Los colores que ya están en tu semana salen primero.":""}</span><button class="btn ghost small" data-act="cancelPick" style="margin-left:auto">Cancelar</button></div>`:"";
  return`${pickBar}
  <div class="lib-top">
    <input id="q" class="search" type="search" placeholder="Buscar plato o ingrediente" value="${esc(S.q)}" aria-label="Buscar">
    <button class="btn primary" data-act="newRec">Agregar receta</button>
  </div>
  <div class="chips" role="group" aria-label="Tipo de plato">${[["all","Todos"],["fav","Favoritos"],...Object.entries(TYPES)].map(([k,v])=>`<button class="chip" data-act="type" data-v="${k}" aria-pressed="${S.type===k}">${v}</button>`).join("")}</div>
  <p class="intro">Cada color es una familia de preparación. Platos del mismo color comparten la base del día fuerte, así que cocinan menos cosas distintas. Repetir un plato dos veces en la semana también cuenta: una sola olla, dos almuerzos.</p>
  <div id="libList">${libList(inWeek)}</div>`}
function libList(inWeek){const q=S.q.trim().toLowerCase();
  const list=allRecipes().filter(r=>(S.type==="all"||(S.type==="fav"?isFav(r.id):r.type===S.type))&&(!q||r.name.toLowerCase().includes(q)||r.ings.some(i=>i.n.toLowerCase().includes(q))));
  if(!list.length)return S.type==="fav"&&!S.q?`<div class="empty-state">Todavía no hay favoritos. Toca el corazón de una receta y aparecerá aquí; también sale más seguido al sugerir la semana.</div>`:`<div class="empty-state">Nada coincide con “${esc(S.q)}”. Prueba con un ingrediente, como pollo o atún.</div>`;
  const fams=Object.keys(FAM);if(S.pick!==null)fams.sort((a,b)=>(inWeek.has(b)?1:0)-(inWeek.has(a)?1:0));
  return fams.map(fk=>{const rs=list.filter(r=>r.fam===fk);if(!rs.length)return"";const F=FAM[fk];
    return`<section class="fam" style="--fam:var(${F.v})"><div class="fam-head"><h3><span class="dot" style="background:var(${F.v});width:12px;height:12px"></span>${F.n}</h3><span class="sh">${F.sh}</span>${inWeek.has(fk)?`<span class="inweek">En tu semana</span>`:""}</div>
    <div class="grid">${rs.map(r=>`<div class="cardwrap"><button class="card tint" data-act="openRec" data-v="${esc(r.id)}"><div class="art">${art(r)}</div><div class="nm">${esc(r.name)}</div>
      <div class="meta"><span>${fmtMin(totalMin(r))}</span>${diffDots(r.diff)}<span>${r.kcal} kcal</span>${r.custom?`<span class="tag">Tuya</span>`:r.edited?`<span class="tag">Editada</span>`:""}</div></button>${heart(r.id)}</div>`).join("")}</div></section>`}).join("")}

function viewShop(){const w=week(),items=shopList(w),mon=parseKey(S.wk);
  if(!items.length)return`<div class="empty-state"><p>Todavía no hay platos esta semana, así que no hay nada que comprar.</p><button class="btn primary" data-act="nav" data-v="week">Ir a la semana</button></div>`;
  const left=items.filter(i=>!w.shop[i.k]).length;
  const secs=Object.keys(SEC).map(s=>{const its=items.filter(i=>i.sec===s).sort((a,b)=>a.n.localeCompare(b.n));if(!its.length)return"";
    return`<div class="panel shopsec tint" style="--sc:var(${SECCOL[s]});--c:var(${SECCOL[s]})"><div class="sec-title"><span class="dot"></span>${SEC[s]}</div>${its.map(i=>`<label class="check${w.shop[i.k]?" done":""}"><input type="checkbox" data-act="shop" data-v="${esc(i.k)}" ${w.shop[i.k]?"checked":""}><span class="t"><span class="plain">${esc(i.n)}</span><span class="days-used">(${shortDays(i.days)})</span></span><span class="m">${fmtQ(i.q,i.u)}</span></label>`).join("")}</div>`}).join("");
  return`<section class="hero"><h2>Compras de la semana del ${fmtD(mon)}</h2>
  <p class="small" style="margin:6px 0 0">${left?`Te faltan ${left} de ${items.length}.`:"Todo comprado."} Revisa la despensa antes de salir: aceite, especias y soya suelen estar en casa.</p>
  <div class="portions">${PEOPLE.map(([k,n])=>`<div class="stepper"><span>${n}</span><button data-act="mult" data-v="${k}:-0.25" aria-label="Menos porción para ${n}">−</button><b>×${fmtN(S.mult[k])}</b><button data-act="mult" data-v="${k}:0.25" aria-label="Más porción para ${n}">+</button></div>`).join("")}</div>
  <p class="small" style="margin:8px 0 0">${fmtN(portions())} porciones por día. Las cantidades ya están ajustadas.</p>
  <div class="row" style="margin-top:12px"><button class="btn color" data-act="copyList">Copiar lista</button><button class="btn ghost small" data-act="shopReset">Desmarcar todo</button></div></section>
  <div class="two">${secs}</div>`}

function viewCook(){const w=week(),bt=batchTasks(w),mon=parseKey(S.wk);
  if(!w.days.some(d=>d.r))return`<div class="empty-state"><p>Elige los platos de la semana y aquí aparece el plan de cocina con el paso a paso.</p><button class="btn primary" data-act="nav" data-v="week">Ir a la semana</button></div>`;
  const{B}=loads(w);const bm=B.mama+B.nos,bd=bt.filter(t=>t.done).length;
  const batch=`<div class="panel">
    <div class="sec-title">Día fuerte, domingo ${fmtD(addDays(mon,-1))}</div>
    <p class="small muted" style="margin:2px 0 6px">${fmtMin(bm)} de trabajo; con horno y estufa en paralelo terminan antes. Empiecen por lo más largo. ${bd} de ${bt.length} listos.</p>
    <div class="legend-dots"><span><i class="odot" style="background:var(--mama)"></i>Maurilyn ${fmtMin(B.mama)}</span><span><i class="odot" style="background:var(--nos)"></i>Harmodio y Mariana ${fmtMin(B.nos)}</span></div>
    ${bt.map(t=>`<div class="check${t.done?" done":""}" style="--c:${famVar(t.r)}"><input type="checkbox" data-act="batchTask" data-v="${esc(t.key)}" ${t.done?"checked":""} aria-label="Marcar ${esc(t.t)}">
      <span class="t"><button class="ttl" data-act="steps" data-v="b|${esc(t.key)}">${esc(t.t)}${t.n>1?` (${t.n===2?"doble":"x"+t.n})`:""}</button><span class="sub">${shortDays(t.days)}</span></span>${ownBtn(t.own,"bOwn",t.key)}<span class="m">${t.min} min</span></div>`).join("")}
    </div>`;
  const daily=w.days.map((d,di)=>{const r=rec(d.r);if(!r)return"";const cs=r.comps.filter(c=>!c.b);const m=cs.reduce((a,c)=>a+c.min,0);
    const when=di===0?"domingo en la noche o lunes temprano":`${DAYS[di-1].toLowerCase()} en la noche o ${DAYS[di].toLowerCase()} temprano`;
    return`<div class="daytask tint" style="--fam:${famVar(r)}"><div class="hd"><span class="dot" style="background:${famVar(r)}"></span><b>${DAYS[di]}</b><span class="small muted">${esc(r.name)}</span><button class="own" style="margin-left:auto" data-act="dayCook" data-v="${di}" title="Toca para cambiar"><i class="odot" style="background:${CCOL[d.cook]}"></i>${COOK[d.cook]}</button></div>
      <div class="small muted">Se hace ${when}. ${fmtMin(m)}${m>45?` <span class="alert">supera los 45 min</span>`:""}</div>
      ${cs.map(c=>`<div class="check${d.done[c.k]?" done":""}"><input type="checkbox" data-act="comp" data-v="${di}:${c.k}" ${d.done[c.k]?"checked":""} aria-label="Marcar ${esc(c.t)}"><span class="t"><button class="ttl" data-act="steps" data-v="d|${di}:${c.k}">${esc(c.t)}</button></span><span class="m">${c.min} min</span></div>`).join("")||`<p class="small muted">Nada extra: solo servir.</p>`}</div>`}).join("");
  return`<section class="hero"><h2>Plan de cocina</h2><p class="small" style="margin:6px 0 0">Semana del ${fmtD(mon)}. Toca el nombre de una tarea para ver el paso a paso; el cuadrito la marca como lista. Toca el nombre de quién cocina para cambiarlo.</p></section>
  <div class="two"><div>${batch}
    <div class="panel" style="margin-top:16px"><div class="sec-title">Plan B en el congelador</div>
      <p class="small muted">Si un día nadie puede cocinar, sacan una reserva y nadie se queda sin almuerzo. En el día fuerte, dupliquen una salsa o un guiso y congelen 3 porciones.</p>
      <div class="frz"><button class="icon-btn" data-act="frz" data-v="-1" aria-label="Quitar porción">−</button><b>${S.freezer}</b><span class="small">porciones guardadas<br><span class="muted">${Math.floor(S.freezer/3)} ${Math.floor(S.freezer/3)===1?"día":"días"} de respaldo</span></span><button class="icon-btn" data-act="frz" data-v="1" aria-label="Agregar porción">+</button></div>
    </div></div>
    <div class="panel"><div class="sec-title">Entre semana</div><p class="small muted">Lo rápido se hace la noche antes. Cualquiera puede cubrir estas tareas si hace falta.</p>${daily}</div>
  </div>`}

/* ---------- Modales ---------- */
function modalRec(r){const w=week(),mon=parseKey(S.wk);const B=r.comps.filter(c=>c.b),D=r.comps.filter(c=>!c.b);
  const act=S.pick!==null?`<button class="btn primary" data-act="addTo" data-v="${S.pick}">Poner el ${DAYS[S.pick].toLowerCase()} ${fmtD(addDays(mon,S.pick))}</button>`
   :`<div class="label-sm">Agregar a la semana del ${fmtD(mon)}</div><div class="daychips">${DAYS.map((n,i)=>{const o=rec(w.days[i].r);return`<button data-act="addTo" data-v="${i}" class="${o?"busy":""}" title="${o?"Reemplaza: "+esc(o.name):"Libre"}">${n.slice(0,3)}${o?" (ocupado)":""}</button>`}).join("")}</div>`;
  const compHtml=cs=>cs.map(c=>`<details class="comp"><summary><span>${esc(c.t)}</span><span class="muted">${c.min} min</span></summary>${c.steps.length?`<ol>${c.steps.map(s=>`<li>${esc(s)}</li>`).join("")}</ol>`:`<p class="small muted">Sin pasos detallados.</p>`}</details>`).join("");
  const tile=(v,l,cv)=>`<div style="background:color-mix(in srgb,var(${cv}) 16%,var(--surface))"><b>${v}</b><span>${l}</span></div>`;
  return`<div class="rec-head"><div class="art">${art(r)}</div><div>
    <div class="row" style="align-items:flex-start;flex-wrap:nowrap"><h2 style="flex:1">${esc(r.name)}</h2></div><div class="muted">${esc(r.desc)}</div>
    <div class="badges"><span class="badge"><span class="dot" style="background:${famVar(r)}"></span>${famOf(r).n}</span><span class="badge">${TYPES[r.type]}</span><span class="badge">${PROTS[r.prot][0]}</span><span class="badge">${diffDots(r.diff)} ${DIFF[r.diff]}</span><span class="badge">${fmtMin(totalMin(r))} en total</span><span class="badge">${fmtMin(dayMin(r))} entre semana</span></div>
  </div></div>
  <div class="nutri">${tile(r.kcal,"kcal","--f-pollo")}${tile(r.p+" g","proteína","--f-carne")}${tile(r.cb+" g","carbohidratos","--f-med")}${tile(r.f+" g","grasa","--f-mar")}</div>
  <div class="small muted">Valores aproximados por porción.</div>
  <div class="cols"><div><h3>Ingredientes para ${fmtN(portions())} porciones</h3><ul class="ing">${r.ings.map(i=>`<li><span>${esc(i.n)}</span><span>${fmtQ(i.q*factor(),i.u)}</span></li>`).join("")}</ul>${factor()!==1?`<p class="small muted">Los pasos indican cantidades para 3; multiplica por ${fmtN(factor())}.</p>`:""}</div>
  <div><h3>Preparación</h3>${B.length?`<div class="label-sm">Día fuerte</div>${compHtml(B)}`:""}${D.length?`<div class="label-sm">Entre semana</div>${compHtml(D)}`:""}</div></div>
  <div class="actions">${act}<div class="row" style="margin-top:14px">${heart(r.id,true)}<button class="btn small" data-act="editRec" data-v="${esc(r.id)}">Editar</button><button class="btn small" data-act="dupRec" data-v="${esc(r.id)}">Duplicar y editar</button>
  ${r.custom?`<button class="btn ghost danger small" data-act="delRec" data-v="${esc(r.id)}">${S.confirm==="del:"+r.id?"Toca otra vez para eliminar":"Eliminar receta"}</button>`:""}
  ${r.edited?`<button class="btn ghost small" data-act="restoreRec" data-v="${esc(r.id)}">${S.confirm==="res:"+r.id?"Toca otra vez para restaurar":"Restaurar original"}</button>`:""}</div></div>`}

function modalDay(di){const w=week(),d=w.days[di],r=rec(d.r),date=addDays(parseKey(S.wk),di);const p=dayProg(d);
  const grp=b=>r.comps.filter(c=>c.b===b).map(c=>`<div class="check${d.done[c.k]?" done":""}" style="--c:${famVar(r)}"><input type="checkbox" data-act="comp" data-v="${di}:${c.k}" ${d.done[c.k]?"checked":""} aria-label="Marcar ${esc(c.t)}"><span class="t"><button class="ttl" data-act="steps" data-v="d|${di}:${c.k}">${esc(c.t)}</button></span><span class="m">${c.min} min</span></div>`).join("");
  return`<div class="rec-head" style="grid-template-columns:110px 1fr"><div class="art" style="width:110px;height:110px">${art(r)}</div><div>
    <div class="muted small">${DAYS[di]} ${fmtD(date)}</div><h2 style="font-size:23px">${esc(r.name)}</h2>
    <div class="bar" style="margin-top:8px"><i style="width:${Math.round(p.done/p.total*100)}%;background:${famVar(r)}"></i></div><div class="small muted" style="margin-top:4px">${p.done} de ${p.total} listos</div></div></div>
  <div class="label-sm">Quién cocina lo de entre semana</div>
  <div class="seg" role="group">${["mama","nos"].map(k=>`<button style="--c:${CCOL[k]}" data-act="setCook" data-v="${di}:${k}" aria-pressed="${d.cook===k}">${COOK[k]}</button>`).join("")}</div>
  ${r.comps.some(c=>c.b)?`<div class="label-sm">Del día fuerte</div>${grp(true)}`:""}
  ${r.comps.some(c=>!c.b)?`<div class="label-sm">Entre semana</div>${grp(false)}`:""}
  <div class="actions row">
    <button class="btn" data-act="openRec" data-v="${esc(r.id)}">Ver receta</button>
    <button class="btn" data-act="changeDish" data-v="${di}">Cambiar plato</button>
    <select class="btn" data-change="move" data-v="${di}" aria-label="Mover a otro día"><option value="">Mover a…</option>${DAYS.map((n,i)=>i===di?"":`<option value="${i}">${n}${w.days[i].r?" (intercambiar)":""}</option>`).join("")}</select>
    <button class="btn ghost danger" data-act="removeDay" data-v="${di}">Quitar</button>
  </div>`}

function stepsCtx(v){const w=week();const[kind,rest]=[v.slice(0,1),v.slice(2)];
  if(kind==="b"){const t=batchTasks(w).find(x=>x.key===rest);if(!t)return null;
    return{title:t.t,r:t.r,steps:t.c.steps,min:t.min,done:t.done,own:t.own,ownAct:["bOwn",t.key],toggle:["batchTask",t.key],
      note:`${t.n>1||factor()!==1?`Las cantidades de los pasos son para una tanda de 3 porciones; esta semana multiplícalas por ${fmtN(t.n*factor())}${t.n>1?` (${t.n===2?"doble":"x"+t.n}${factor()!==1?`, con porciones de ×${fmtN(factor())}`:""})`:""}. `:""}Rinde para ${t.days.map(d=>DAYS[d].toLowerCase()).join(", ")} (${t.rs.map(r=>r.name).join(", ")}).`,when:"Día fuerte"}}
  const[di,k]=rest.split(":");const d=w.days[+di],r=rec(d?.r);const c=r?.comps.find(x=>x.k===k);if(!c)return null;
  return{title:c.t,r,steps:c.steps,min:c.min,done:!!d.done[k],own:c.b?null:d.cook,ownAct:c.b?null:["dayCook",di],toggle:["comp",`${di}:${k}`],
    note:(c.b?`Es parte del día fuerte para ${r.name}.`:`Para el almuerzo del ${DAYS[+di].toLowerCase()}: ${r.name}. Se hace la noche antes o esa mañana.`)+(factor()!==1?` Multiplica las cantidades por ${fmtN(factor())}.`:""),when:c.b?"Día fuerte":"Entre semana"}}
function modalSteps(v){const x=stepsCtx(v);if(!x)return"";
  return`<div class="muted small">${x.when}, ${x.min} min</div><h2 style="font-size:24px;padding-right:40px;margin-top:2px">${esc(x.title)}</h2>
  <div class="row" style="margin-top:10px">${x.own?who(x.own,x.ownAct[0],x.ownAct[1]):""}<span class="badge"><span class="dot" style="background:${famVar(x.r)}"></span>${esc(x.r.name)}</span></div>
  <div class="callout">${esc(x.note)}</div>
  ${x.steps.length?`<ol class="stepnum">${x.steps.map(s=>`<li><span>${esc(s)}</span></li>`).join("")}</ol>`:`<p class="muted">Esta tarea no tiene pasos detallados todavía.</p>`}
  <div class="actions row"><button class="btn ${x.done?"":"color"}" data-act="${x.toggle[0]}" data-v="${esc(x.toggle[1])}">${x.done?"Desmarcar":"Marcar como lista"}</button>
  ${S.modal.back?`<button class="btn ghost" data-act="back">Volver</button>`:""}</div>`}

const ownBtn=(k,act,v)=>`<button class="own" data-act="${act}" data-v="${esc(v)}" title="${COOK[k]}. Toca para cambiar" aria-label="Lo hace ${COOK[k]}. Toca para cambiar"><i class="odot" style="background:${CCOL[k]}"></i></button>`;
const HEART='<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 3.1 4.5 6.9 4.5c2.1 0 3.6 1.1 5.1 3 1.5-1.9 3-3 5.1-3 3.8 0 6 3.9 4.5 7.3C19.5 16.4 12 21 12 21Z"/></svg>';
const HEART_O='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 20s-7-4.3-9-8.6C1.6 8.3 3.6 5 7 5c2 0 3.4 1 5 3 1.6-2 3-3 5-3 3.4 0 5.4 3.3 4 6.4C19 15.7 12 20 12 20Z"/></svg>';
const heart=(id,big)=>`<button class="heart${big?" big":""}" data-act="fav" data-v="${esc(id)}" aria-pressed="${isFav(id)}" aria-label="${isFav(id)?"Quitar de favoritos":"Marcar como favorito"}">${isFav(id)?HEART:HEART_O}</button>`;

/* Formulario de receta: nueva, editar o duplicar */
const SECW={p:"proteína",v:"verdura",l:"lácteo",n:"pan",d:"despensa"};
function formFrom(r,mode){if(!r)return{name:"",type:"plato",fam:"med",prot:"pollo",diff:1,desc:"",kcal:"",p:"",cb:"",f:"",ingsText:"",comps:[{t:"",min:20,b:true,s:null,stepsText:""}],photo:null,mode:"new",editId:null,baseId:""};
  return{name:mode==="copy"?r.name+" (variación)":r.name,type:r.type,fam:r.fam,prot:r.prot,diff:r.diff,desc:r.desc||"",kcal:r.kcal,p:r.p,cb:r.cb,f:r.f,
    ingsText:r.ings.map(i=>`${String(i.q).replace(".",",")} | ${i.u} | ${i.n} | ${SECW[i.sec]}`).join("\n"),
    comps:r.comps.map(c=>({t:c.t,min:c.min,b:c.b,s:c.s,stepsText:c.steps.join("\n")})),
    photo:r.photo||null,mode:mode,editId:mode==="edit"?r.id:null,baseId:mode==="copy"?r.id:""}}
function collectForm(){const F=S.form;if(!F||!$("#f-name"))return;const g=id=>$("#"+id)?.value??"";
  Object.assign(F,{name:g("f-name"),type:g("f-type"),fam:g("f-fam"),prot:g("f-prot"),diff:+g("f-diff"),desc:g("f-desc"),kcal:g("f-kcal"),p:g("f-p"),cb:g("f-cb"),f:g("f-f"),ingsText:g("f-ings")});
  F.comps=F.comps.map((c,i)=>({...c,t:g("t-t"+i),min:+g("t-m"+i)||0,b:g("t-b"+i)==="1",stepsText:g("t-s"+i)}))}
function modalForm(){const F=S.form;const opt=(o,v)=>Object.entries(o).map(([k,x])=>`<option value="${k}" ${k===String(v)?"selected":""}>${Array.isArray(x)?x[0]:x.n||x}</option>`).join("");
  const title=F.mode==="edit"?"Editar receta":F.mode==="copy"?"Nueva receta a partir de otra":"Nueva receta";
  return`<h2 style="font-size:24px;padding-right:40px">${title}</h2>
  <p class="small muted">Cantidades para 3 porciones; la app las ajusta según las porciones de cada quien.</p>
  <div class="form">
    ${F.mode!=="edit"?`<label for="f-base">Partir de una receta existente</label><select id="f-base" data-change="base"><option value="">Empezar en blanco</option>${Object.entries(FAM).map(([fk,fv])=>`<optgroup label="${fv.n}">${allRecipes().filter(r=>r.fam===fk).map(r=>`<option value="${esc(r.id)}" ${r.id===F.baseId?"selected":""}>${esc(r.name)}</option>`).join("")}</optgroup>`).join("")}</select>`:""}
    <label for="f-name">Nombre</label><input id="f-name" maxlength="80" value="${esc(F.name)}">
    <div class="g3"><div><label for="f-type">Tipo</label><select id="f-type">${opt(TYPES,F.type)}</select></div>
    <div><label for="f-fam">Familia de preparación</label><select id="f-fam">${opt(FAM,F.fam)}</select></div>
    <div><label for="f-prot">Proteína principal</label><select id="f-prot">${opt(PROTS,F.prot)}</select></div></div>
    <div class="g2"><div><label for="f-diff">Dificultad</label><select id="f-diff">${opt({1:"Fácil",2:"Media",3:"Elaborada"},F.diff)}</select></div>
    <div><label for="f-desc">Descripción corta</label><input id="f-desc" maxlength="240" value="${esc(F.desc)}"></div></div>
    <div class="g4"><div><label for="f-kcal">kcal</label><input id="f-kcal" type="number" value="${esc(F.kcal)}"></div><div><label for="f-p">Proteína g</label><input id="f-p" type="number" value="${esc(F.p)}"></div><div><label for="f-cb">Carbos g</label><input id="f-cb" type="number" value="${esc(F.cb)}"></div><div><label for="f-f">Grasa g</label><input id="f-f" type="number" value="${esc(F.f)}"></div></div>
    <label for="f-ings">Ingredientes, uno por línea: cantidad | unidad | ingrediente | sección</label>
    <textarea id="f-ings" placeholder="600 | g | Pechuga de pollo | proteína">${esc(F.ingsText)}</textarea>
    <div class="small muted">Unidades: g, tz, cda, cdta, u, lata, dientes, cabeza, manojo, trozo, rebanadas. Secciones: proteína, verdura, lácteo, pan, despensa.</div>
    <label>Tareas y paso a paso</label>
    ${F.comps.map((c,i)=>`<div class="task-ed"><div class="g3"><div><label for="t-t${i}">Tarea</label><input id="t-t${i}" value="${esc(c.t)}" placeholder="Pollo desmechado"></div>
      <div><label for="t-m${i}">Minutos</label><input id="t-m${i}" type="number" value="${esc(c.min)}"></div>
      <div><label for="t-b${i}">Cuándo</label><select id="t-b${i}"><option value="1" ${c.b?"selected":""}>Día fuerte</option><option value="0" ${c.b?"":"selected"}>Entre semana</option></select></div></div>
      <label for="t-s${i}">Pasos, uno por línea</label><textarea id="t-s${i}">${esc(c.stepsText)}</textarea>
      ${F.comps.length>1?`<button class="btn ghost danger small" data-act="delTask" data-v="${i}" style="margin-top:6px">Quitar tarea</button>`:""}</div>`).join("")}
    <button class="btn small" data-act="addTask" style="margin-top:10px">Agregar tarea</button>
    <label for="f-photo">Foto (opcional)</label><input id="f-photo" type="file" accept="image/*">
    ${F.photo?`<img class="preview" src="${esc(F.photo)}" alt="Vista previa">`:""}
    <div class="actions row"><button class="btn primary" data-act="saveRec">${F.mode==="edit"?"Guardar cambios":"Guardar receta"}</button><button class="btn ghost" data-act="close">Cancelar</button></div>
  </div>`}


/* ---------- Render ---------- */
let lastCar=null;
function render(){document.querySelectorAll("#nav button").forEach(b=>b.setAttribute("aria-current",b.dataset.v===S.view?"page":"false"));
  const old=$("#days"),keep=old&&lastCar===S.wk?old.scrollLeft:null;
  $("#main").innerHTML={week:viewWeek,lib:viewLib,shop:viewShop,cook:viewCook}[S.view]();
  const car=$("#days");
  if(car){if(keep!==null)car.scrollLeft=keep;
    else{const mon=parseKey(S.wk),t=keyOf(new Date());let i=[0,1,2,3,4].find(i=>keyOf(addDays(mon,i))===t);if(i===undefined)i=week().days.findIndex(d=>d.r&&dayProg(d).done<dayProg(d).total);if(i<0)i=0;
      requestAnimationFrame(()=>{const c=car.children[i];if(c)car.scrollLeft=c.offsetLeft-car.offsetLeft-(car.clientWidth-c.clientWidth)/2});}
    lastCar=S.wk;syncPager()}else lastCar=null;
  renderModal()}
function syncPager(){const car=$("#days");if(!car)return;const mid=car.scrollLeft+car.clientWidth/2;let best=0,bd=1e9;
  [...car.children].forEach((c,i)=>{const d=Math.abs(c.offsetLeft-car.offsetLeft+c.clientWidth/2-mid);if(d<bd){bd=d;best=i}});
  document.querySelectorAll(".pager button").forEach((b,i)=>b.setAttribute("aria-current",i===best))}
document.addEventListener("scroll",e=>{if(e.target&&e.target.id==="days"){cancelAnimationFrame(syncPager.f);syncPager.f=requestAnimationFrame(syncPager)}},true);
function renderModal(){const m=S.modal,el=$("#modal");if(!m){el.innerHTML="";return}
  let body="",fam="var(--accent)";
  if(m.type==="rec"){const r=rec(m.id);if(!r)return closeModal();body=modalRec(r);fam=famVar(r)}
  else if(m.type==="day"){const r=rec(week().days[m.di].r);if(!r)return closeModal();body=modalDay(m.di);fam=famVar(r)}
  else if(m.type==="steps"){const x=stepsCtx(m.v);if(!x)return closeModal();body=modalSteps(m.v);fam=famVar(x.r)}
  else if(m.type==="form"){if(el.querySelector("#f-name")&&!S.formRedraw)return;S.formRedraw=false;body=modalForm()}
  const same=el.dataset.sig===m.type+(m.id||m.di||m.v||"");const sc=same?(el.querySelector(".sheet")?.scrollTop||0):0;
  el.dataset.sig=m.type+(m.id||m.di||m.v||"");
  el.innerHTML=`<div class="wrap" data-act="close"><div class="sheet" role="dialog" aria-modal="true" data-act="noop" style="--fam:${fam}"><div class="sheet-top"></div><button class="icon-btn x" data-act="close" aria-label="Cerrar">×</button>${body}</div></div>`;
  el.querySelector(".sheet").scrollTop=sc}
function closeModal(){S.modal=null;$("#modal").innerHTML="";$("#modal").dataset.sig=""}
function toast(t){const e=$("#toast");e.textContent=t;e.hidden=false;clearTimeout(toast.t);toast.t=setTimeout(()=>e.hidden=true,2800)}

/* ---------- Acciones ---------- */
const A={
  nav:v=>{S.view=v;if(v!=="lib")S.pick=null;closeModal();render();scrollTo(0,0)},
  theme:()=>{const r=document.documentElement,dark=r.dataset.theme?r.dataset.theme==="dark":matchMedia("(prefers-color-scheme: dark)").matches;
    r.dataset.theme=dark?"light":"dark";try{localStorage.setItem("almuerzos-theme",r.dataset.theme)}catch(e){}render()},
  wk:v=>{S.wk=v==="0"?thisWeek():keyOf(addDays(parseKey(S.wk),7*+v));render()},
  goWeek:v=>{S.wk=v;render()},
  gate:()=>showGate(),
  gateClose:()=>{$("#gate").hidden=true},
  gateSkip:()=>{try{sessionStorage.setItem("almuerzos-skip","1")}catch(e){}$("#gate").hidden=true},
  gateGen:()=>{const al="abcdefghjkmnpqrstuvwxyz23456789",b=new Uint8Array(16);(window.crypto||{getRandomValues:a=>a.map(()=>Math.random()*256)}).getRandomValues(b);
    $("#g-code").value=[...b].map(x=>al[x%al.length]).join("")},
  gateSave:()=>{const v=$("#g-code").value.trim();if(!validCode(v)){$("#g-err").textContent="Usa entre 12 y 60 caracteres: letras, números, guion o guion bajo.";return}
    try{localStorage.setItem(CODE_KEY,v);sessionStorage.removeItem("almuerzos-skip")}catch(e){}location.reload()},
  invite:()=>{const c=famCode();if(!validCode(c)){showGate();return}
    copyText(location.origin+location.pathname+"?c="+encodeURIComponent(c),"Link copiado. Quien lo abra queda dentro de la misma familia.")},
  goDay:v=>{const car=$("#days"),c=car&&car.children[+v];if(c)car.scrollTo({left:c.offsetLeft-car.offsetLeft-(car.clientWidth-c.clientWidth)/2,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"})},
  openDay:v=>{const di=+v;if(week().days[di].r){S.modal={type:"day",di};renderModal()}else{S.pick=di;S.view="lib";render();scrollTo(0,0)}},
  openRec:v=>{S.modal={type:"rec",id:v};renderModal()},
  steps:v=>{const back=S.modal&&S.modal.type==="day"?S.modal:null;S.modal={type:"steps",v,back};renderModal()},
  back:()=>{S.modal=S.modal.back;renderModal()},
  close:()=>{S.confirm=null;closeModal()},
  noop:()=>{},
  cancelPick:()=>{S.pick=null;S.view="week";render()},
  addTo:v=>{const di=+v,r=rec(S.modal?.id);if(!r)return;closeModal();
    mutateWeek(w=>{w.days[di]={r:r.id,cook:"nos",done:{}};balanceWeek(w)});
    toast(`${r.name}: ${DAYS[di].toLowerCase()}. Cocina repartida de nuevo.`);if(S.pick!==null){S.pick=null;S.view="week";render()}},
  changeDish:v=>{S.pick=+v;closeModal();S.view="lib";render();scrollTo(0,0)},
  removeDay:v=>{closeModal();mutateWeek(w=>{w.days[+v]={r:null,cook:"nos",done:{}};balanceWeek(w)})},
  setCook:v=>{const[di,k]=v.split(":");mutateWeek(w=>{w.days[+di].cook=k})},
  dayCook:v=>mutateWeek(w=>{const d=w.days[+v];d.cook=d.cook==="mama"?"nos":"mama"}),
  bOwn:v=>mutateWeek(w=>{const cur=w.bOwn[v]==="mama"?"mama":"nos";w.bOwn[v]=cur==="mama"?"nos":"mama"}),
  comp:v=>{const[di,k]=v.split(":");mutateWeek(w=>{const d=w.days[+di];d.done[k]=!d.done[k]})},
  batchTask:v=>mutateWeek(w=>{const t=batchTasks(w).find(x=>x.key===v);if(!t)return;const val=!t.done;t.refs.forEach(([di,k])=>w.days[di].done[k]=val)}),
  balance:()=>{mutateWeek(balanceWeek);const{L}=loads(week());toast(`Repartido: Maurilyn ${fmtMin(L.mama)}, Harmodio y Mariana ${fmtMin(L.nos)}.`)},
  suggest:()=>{const ids=suggestWeek();if(!ids)return;
    mutateWeek(w=>{ids.forEach((id,i)=>{if(w.days[i].r!==id)w.days[i]={r:id,cook:"nos",done:{}}});w.shop={};balanceWeek(w)});
    const pc={};ids.forEach(id=>{const p=rec(id).prot;pc[p]=(pc[p]||0)+1});
    toast("Semana con "+Object.entries(pc).map(([p,n])=>`${PROTS[p][0].toLowerCase()} ${n} ${n===1?"día":"días"}`).join(" y ")+".")},
  clearWeek:()=>{if(S.confirm!=="clear"){S.confirm="clear";render();setTimeout(()=>{if(S.confirm==="clear"){S.confirm=null;render()}},3500);return}
    S.confirm=null;mutateWeek(w=>{w.days=blank().days;w.shop={};w.bOwn={}})},
  shop:v=>mutateWeek(w=>{w.shop[v]=!w.shop[v]}),
  shopReset:()=>mutateWeek(w=>{w.shop={}}),
  copyList:()=>{const w=week(),items=shopList(w);const txt=`Compras semana del ${fmtD(parseKey(S.wk))}\n`+Object.keys(SEC).map(s=>{const its=items.filter(i=>i.sec===s&&!w.shop[i.k]);return its.length?`\n${SEC[s]}\n`+its.map(i=>`- ${i.n}: ${fmtQ(i.q,i.u)} (${shortDays(i.days)})`).join("\n"):""}).join("");
    const done=()=>toast("Lista copiada. Pégala en WhatsApp o en notas.");
    (navigator.clipboard?navigator.clipboard.writeText(txt):Promise.reject()).then(done).catch(()=>{const t=document.createElement("textarea");t.value=txt;document.body.appendChild(t);t.select();try{document.execCommand("copy");done()}catch(e){toast("No se pudo copiar.")}t.remove()})},
  frz:v=>{S.freezer=Math.max(0,S.freezer+ +v);persist("meta/main",()=>({freezer:S.freezer}));render()},
  type:v=>{S.type=v;render()},
  newRec:()=>{S.form=formFrom(null);S.modal={type:"form"};S.formRedraw=true;renderModal()},
  editRec:v=>{S.form=formFrom(rec(v),"edit");S.modal={type:"form"};S.formRedraw=true;renderModal()},
  dupRec:v=>{S.form=formFrom(rec(v),"copy");S.modal={type:"form"};S.formRedraw=true;renderModal()},
  addTask:()=>{collectForm();S.form.comps.push({t:"",min:15,b:false,s:null,stepsText:""});S.formRedraw=true;renderModal()},
  delTask:v=>{collectForm();S.form.comps.splice(+v,1);S.formRedraw=true;renderModal()},
  fav:v=>{S.favs=isFav(v)?S.favs.filter(x=>x!==v):[...S.favs,v];saveMeta();render()},
  mult:v=>{const[k,d]=v.split(":");S.mult[k]=Math.min(4,Math.max(0,Math.round((S.mult[k]+ +d)*100)/100));saveMeta();render()},
  restoreRec:v=>{if(S.confirm!=="res:"+v){S.confirm="res:"+v;renderModal();return}S.confirm=null;delete S.custom[v];saveLS();
    if(DB)DB.doc("recipes/"+v).delete().catch(()=>toast("No se pudo restaurar."));render();toast("Receta original restaurada.")},
  saveRec:()=>{collectForm();const F=S.form;const name=F.name.trim();if(!name){toast("Ponle un nombre a la receta.");return}
    const secOf=s=>{s=(s||"").toLowerCase();return s.startsWith("prot")?"p":/^(verd|frut|veg)/.test(s)?"v":/^(l[aá]c|hue|leche|queso)/.test(s)?"l":/^(pan|tort)/.test(s)?"n":"d"};
    const ings=F.ingsText.split("\n").map(l=>l.split("|").map(x=>x.trim())).filter(p=>p.length>=3&&p[2]).map(([q,u,n,s])=>({q:parseFloat(q.replace(",","."))||1,u:UNIT[u]!==undefined?u:"u",n,sec:secOf(s)}));
    const comps=F.comps.filter(c=>c.t.trim()).map(c=>({t:c.t.trim(),min:c.min||15,b:c.b,s:c.s||null,steps:c.stepsText.split("\n").map(x=>x.trim()).filter(Boolean)}));
    if(!comps.length)comps.push({t:"Preparar",min:30,b:false,s:null,steps:[]});
    const id=F.editId||"u"+Date.now().toString(36);
    const data={name,type:F.type,fam:F.fam,prot:F.prot,diff:+F.diff||1,desc:F.desc.trim(),kcal:+F.kcal||0,p:+F.p||0,cb:+F.cb||0,f:+F.f||0,ings,comps,photo:F.photo||null};
    S.custom[id]=normRec(id,data);saveLS();
    if(DB)DB.doc("recipes/"+id).set(data).catch(e=>toast(e?.code==="invalid_argument"?"La foto es muy pesada o no tienes permiso de guardar.":"No se pudo guardar la receta."));
    const was=F.mode;S.form=null;$("#modal").innerHTML="";S.modal={type:"rec",id};S.view=S.view==="lib"?"lib":S.view;render();toast(was==="edit"?"Cambios guardados.":"Receta guardada.")},
  delRec:v=>{if(S.confirm!=="del:"+v){S.confirm="del:"+v;renderModal();return}
    S.confirm=null;delete S.custom[v];saveLS();if(DB)DB.doc("recipes/"+v).delete().catch(()=>toast("No se pudo eliminar."));closeModal();render();toast("Receta eliminada.")}
};
document.addEventListener("click",e=>{const el=e.target.closest("[data-act]");if(!el)return;const a=el.dataset.act;
  if(a==="close"&&el.classList.contains("wrap")&&e.target!==el)return;
  if(el.classList.contains("sheet"))return;
  A[a]?.(el.dataset.v,el,e)});
document.addEventListener("change",e=>{const el=e.target;
  if(el.dataset.change==="move"&&el.value!==""){const a=+el.dataset.v,b=+el.value;S.modal={type:"day",di:b};mutateWeek(w=>{[w.days[a],w.days[b]]=[w.days[b],w.days[a]]});toast(`Movido al ${DAYS[b].toLowerCase()}.`)}
  if(el.dataset.change==="base"){const r=rec(el.value);S.form=r?formFrom(r,"copy"):formFrom(null);S.formRedraw=true;renderModal();return}
  if(el.id==="f-photo"&&el.files[0])compress(el.files[0]).then(url=>{S.form=S.form||{};S.form.photo=url;let p=$(".preview");if(!p){p=document.createElement("img");p.className="preview";p.alt="Vista previa";el.after(p)}p.src=url}).catch(()=>toast("No se pudo leer la imagen."))});
document.addEventListener("input",e=>{if(e.target.id==="q"){S.q=e.target.value;const inWeek=new Set(week().days.map(d=>rec(d.r)?.fam).filter(Boolean));$("#libList").innerHTML=libList(inWeek)}});
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&S.modal)A.close()});
function compress(file){return new Promise((res,rej)=>{const img=new Image();const u=URL.createObjectURL(file);
  img.onload=()=>{const s=Math.min(1,560/Math.max(img.width,img.height));const c=document.createElement("canvas");c.width=Math.round(img.width*s);c.height=Math.round(img.height*s);
    c.getContext("2d").drawImage(img,0,0,c.width,c.height);let q=.72,url=c.toDataURL("image/jpeg",q);while(url.length>170000&&q>.3){q-=.12;url=c.toDataURL("image/jpeg",q)}URL.revokeObjectURL(u);res(url)};
  img.onerror=rej;img.src=u})}

try{const t=localStorage.getItem("almuerzos-theme");if(t)document.documentElement.dataset.theme=t}catch(e){}
try{const q=new URLSearchParams(location.search).get("c");if(q&&validCode(q)){localStorage.setItem(CODE_KEY,q);history.replaceState(null,"",location.pathname)}}catch(e){}
initDB();
if("serviceWorker" in navigator&&/^https?:$/.test(location.protocol))window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}));
