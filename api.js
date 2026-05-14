
// BASE DE DATOS INTEGRADA - DRAGON BALL CENTRAL (VERSIÓN CORREGIDA)
var PERSONAJES_DATA = [
    {
        "id": 1,
        "Personaje": "Goku",
        "Raza": "Saiyan",
        "Planeta de origen": "Vegeta",
        "Universo": "7",
        "imagenes": ["img/personajes/goku.webp"],
        "descripcion": "El protagonista principal, un guerrero Saiyan criado en la Tierra. Superó todos los límites hasta alcanzar el Ultra Instinto.",
        "stats": { "fuerza": 95, "velocidad": 98, "ki": 100, "tecnica": 90 },
        "transformaciones": ["Super Saiyan", "Super Saiyan God", "Super Saiyan Blue", "Ultra Instinto"],
        "tecnicas": ["Kamehameha", "Genkidama", "Teletransportación", "Kaioken"]
    },
    {
        "id": 2,
        "Personaje": "Vegeta",
        "Raza": "Saiyan",
        "Planeta de origen": "Vegeta",
        "Universo": "7",
        "imagenes": ["img/personajes/vegeta.webp"],
        "descripcion": "El príncipe de los Saiyan. Su orgullo y perseverancia lo han llevado a alcanzar el Ultra Ego.",
        "stats": { "fuerza": 94, "velocidad": 92, "ki": 95, "tecnica": 96 },
        "transformaciones": ["Super Saiyan", "Super Saiyan Blue", "Ultra Ego"],
        "tecnicas": ["Galick Gun", "Final Flash", "Big Bang Attack"]
    },
    {
        "id": 3,
        "Personaje": "Piccolo",
        "Raza": "Namekiano",
        "Planeta de origen": "Namek",
        "Universo": "7",
        "imagenes": ["img/personajes/piccolo.webp"],
        "descripcion": "Guerrero estratégico y maestro de Gohan. Desbloqueó su forma 'Orange' para proteger la Tierra.",
        "stats": { "fuerza": 80, "velocidad": 82, "ki": 88, "tecnica": 98 },
        "transformaciones": ["Piccolo Naranja", "Potencial Desatado"],
        "tecnicas": ["Makankosappo", "Masenko", "Regeneración"]
    },
    {
        "id": 4,
        "Personaje": "Gohan",
        "Raza": "Híbrido Saiyan/Humano",
        "Planeta de origen": "Tierra",
        "Universo": "7",
        "imagenes": ["img/personajes/gohan.webp"],
        "descripcion": "Hijo de Goku con un potencial infinito. Su forma 'Beast' lo sitúa entre los más fuertes del multiverso.",
        "stats": { "fuerza": 92, "velocidad": 90, "ki": 98, "tecnica": 85 },
        "transformaciones": ["Super Saiyan 2", "Estado Definitivo", "Gohan Bestia"],
        "tecnicas": ["Masenko", "Kamehameha"]
    },
    {
        "id": 5,
        "Personaje": "Frieza",
        "Raza": "Raza de Frieza",
        "Planeta de origen": "Desconocido",
        "Universo": "7",
        "imagenes": ["https://via.placeholder.com/400x500/1a1a1a/ffffff?text=FRIEZA+PORTRAIT"],
        "descripcion": "El emperador del mal. Regresó con su forma 'Black Frieza' demostrando una superioridad absoluta.",
        "stats": { "fuerza": 98, "velocidad": 95, "ki": 99, "tecnica": 92 },
        "transformaciones": ["Final Form", "Golden Frieza", "Black Frieza"],
        "tecnicas": ["Death Beam", "Supernova", "Death Ball"]
    }
];

var MEDIA_DATA = {
    "series": [
        { 
            "titulo": "Dragon Ball", 
            "descripcion": "La aventura original de Goku buscando las Esferas del Dragón.", 
            "imagen": "https://lh3.googleusercontent.com/d/1-9iYR9tDzA3vZQyK4j8gkoI1GG-O8hEl", 
            "info": "153 Episodios" 
        },
        { 
            "titulo": "Dragon Ball Z", 
            "descripcion": "La etapa de las batallas espaciales, Saiyans, Freezer, Cell y Buu.", 
            "imagen": "https://lh3.googleusercontent.com/d/1sk_RHuD7tLc0junztslnag4CgCisW0hy", 
            "info": "291 Episodios" 
        },
        { 
            "titulo": "Dragon Ball GT", 
            "descripcion": "Secuela alternativa donde Goku vuelve a ser niño.", 
            "imagen": "https://lh3.googleusercontent.com/d/1hEN8OUh65JHzYgOO67te3YL7x1TJ2z91", 
            "info": "64 Episodios" 
        },
        { 
            "titulo": "Dragon Ball Z Kai", 
            "descripcion": "Remasterización de DBZ fiel al manga y sin relleno.", 
            "imagen": "https://lh3.googleusercontent.com/d/1MrKM3d6CccP1Io_PeMK5tJSHAqelg0_Y", 
            "info": "167 Episodios" 
        },
        { 
            "titulo": "Dragon Ball Super", 
            "descripcion": "Continuación oficial tras la derrota de Majin Buu.", 
            "imagen": "https://lh3.googleusercontent.com/d/1LU6auOSGf5z2bzTEOS-O4d0gsc8AV3Ux", 
            "info": "131 Episodios" 
        },
        { 
            "titulo": "Dragon Ball Daima", 
            "descripcion": "Nueva serie donde los protagonistas se encogen.", 
            "imagen": "https://lh3.googleusercontent.com/d/1etdNiG1mN5VsA4FEnnaIIHKind9joCWs", 
            "info": "2024" 
        },
        { 
            "titulo": "Super DB Heroes", 
            "descripcion": "Serie promocional con batallas de dimensiones alternativas.", 
            "imagen": "https://lh3.googleusercontent.com/d/1FCfXjTmrBZ6RaVa2x80C81aA_lOUjwLD", 
            "info": "Spin-off" 
        },
        { 
            "titulo": "Dragon Ball AF", 
            "descripcion": "La legendaria historia fanmade de los años 2000.", 
            "imagen": "https://lh3.googleusercontent.com/d/1qHsFQJOTLlQKxoaBHyoOB2tWWye_qFN0", 
            "info": "Fanmade" 
        }
    ],
    "mangas": [
        { "titulo": "DB X SAITAMA", "descripcion": "Edición Especial", "imagen": "https://lh3.googleusercontent.com/d/1vIZ2kGV1XdULy2bbfwotFTAMQWCR-w7u" },
        { "titulo": "DBAF", "descripcion": "Edición Especial", "imagen": "https://lh3.googleusercontent.com/d/1_QJe6RcQKceqBkqUQz9-S6xr9AH8bePq" },
        { "titulo": "DRAGON BALL", "descripcion": "Edición Especial", "imagen": "https://lh3.googleusercontent.com/d/1Vsy7Y1QCKC458m6B4Lcq_f0J5dN4j6kx" },
        { "titulo": "DRAGON BALL: Aquella vez que me reencarné en Yamcha", "descripcion": "Edición Especial", "imagen": "https://lh3.googleusercontent.com/d/1Ucj90qCRunNLccmBamHd-3maGQP2GA9x" },
        { "titulo": "DB MULTIVERSE", "descripcion": "Edición Especial", "imagen": "https://lh3.googleusercontent.com/d/1SJjeWUjlFR7L9-xgexaKE3VNwJfAVOTl" },
        { "titulo": "DRAGON BALL", "descripcion": "Edición Especial", "imagen": "https://lh3.googleusercontent.com/d/1R0NZOgBI_Yw8v1d5abk6J-zfUnBwyN5-" },
        { "titulo": "DRAGON BALL SUPER", "descripcion": "Edición Especial", "imagen": "https://lh3.googleusercontent.com/d/1Mbnn5SXWKHSUmbWx_6NOF-q63QVXLDal" },
        { "titulo": "DRAGON BALL KAKUMEI", "descripcion": "Edición Especial", "imagen": "https://lh3.googleusercontent.com/d/15AwAhSl2_pgFB7qJ5iLfQd6cJQ6fwzaF" }
    ],
    "peliculas": [
        { "titulo": "La leyenda de Shenlong / El camino hacia el más fuerte (Latam)", "descripcion": "Dragon Ball", "info": "Diciembre 1986", "imagen": "https://lh3.googleusercontent.com/d/1MeskJh-7K8Q8UfAK1pT-1f3cBehBdwLa" },
        { "titulo": "La bella durmiente en el castillo del mal / La princesa durmiente en el castillo del diablo", "descripcion": "Dragon Ball", "info": "Julio 1987", "imagen": "https://lh3.googleusercontent.com/d/1Yhtd75UnoUgdHxeJJS8IeDnAS20X5u7O" },
        { "titulo": "Aventura mística / Gran aventura mística", "descripcion": "Dragon Ball", "info": "Julio 1988", "imagen": "https://lh3.googleusercontent.com/d/1vdukB3FoFKOewaWd4za-1Qe793mmRCuO" },
        { "titulo": "Garlic Junior Inmortal / ¡Devuélvanme a mi Gohan!", "descripcion": "Dragon Ball Z", "info": "Julio 1989", "imagen": "https://lh3.googleusercontent.com/d/1kv0-M5kuwkQKEV8zMuH0Fmc4q-Ku0ujK" },
        { "titulo": "El más fuerte del mundo", "descripcion": "Dragon Ball Z", "info": "Marzo 1990", "imagen": "https://lh3.googleusercontent.com/d/1msJ6i3_F-OaBOWQVRG4fvKtFjkF6jfZg" },
        { "titulo": "La superbatalla decisiva por la Tierra / La batalla más grande de este mundo por la Tierra", "descripcion": "Dragon Ball Z", "info": "Julio 1990", "imagen": "https://lh3.googleusercontent.com/d/1aUuKp0ekK4q9qykIA-ov3QuovAyd-TXh" },
        { "titulo": "El superguerrero Son Goku / Goku es un Super Saiyajin", "descripcion": "Dragon Ball Z", "info": "Marzo 1991", "imagen": "https://lh3.googleusercontent.com/d/1kLDjDs91N0qm85BoLVbH3Al09v4LN_pa" },
        { "titulo": "Los mejores rivales / Los rivales más poderosos", "descripcion": "Dragon Ball Z", "info": "Julio 1991", "imagen": "https://lh3.googleusercontent.com/d/1R9BYS8ZqtUZ2C0Nu36zVGOf4pPdMreWU" },
        { "titulo": "Guerreros de fuerza ilimitada / Los guerreros más poderosos", "descripcion": "Dragon Ball Z", "info": "Marzo 1992", "imagen": "https://lh3.googleusercontent.com/d/1WBJj1qH5gtPbyfyWMoDcMY2F0ySpyHj0" },
        { "titulo": "Los tres grandes Super Saiyans / La pelea de los tres Saiyajins", "descripcion": "Dragon Ball Z", "info": "Julio 1992", "imagen": "https://lh3.googleusercontent.com/d/1Yct44chN74cdxfZ9bNYF1ivkY8GyhuLY" },
        { "titulo": "Estalla el duelo / El poder invencible", "descripcion": "Dragon Ball Z", "info": "Marzo 1993", "imagen": "https://lh3.googleusercontent.com/d/1C_ot9R07D6yvo2AXiAw7uztJaZk8zhk_" },
        { "titulo": "Los guerreros de plata / La galaxia corre peligro", "descripcion": "Dragon Ball Z", "info": "Julio 1993", "imagen": "https://lh3.googleusercontent.com/d/1s9xEKPOGc-1nulMQG0Cuef_bzGSBBw_U" },
        { "titulo": "El regreso de Broly / El regreso del guerrero legendario", "descripcion": "Dragon Ball Z", "info": "Marzo 1994", "imagen": "https://lh3.googleusercontent.com/d/1PYOnYKFLEcU-pXcVFhVwL_1GJF8CoejI" },
        { "titulo": "El combate definitivo / El combate final", "descripcion": "Dragon Ball Z", "info": "Julio 1994", "imagen": "https://lh3.googleusercontent.com/d/1c0gsVhK-24jp79MqRrZkZZV33yqBTCHF" },
        { "titulo": "¡El renacer de la fusión! / La fusión de Goku y Vegeta", "descripcion": "Dragon Ball Z", "info": "Marzo 1995", "imagen": "https://lh3.googleusercontent.com/d/1zhU7lVBjEiiViivwCBjRw_rxvS6FuIMI" },
        { "titulo": "El ataque del dragón / El ataque del dragón", "descripcion": "Dragon Ball Z", "info": "Julio 1995", "imagen": "https://lh3.googleusercontent.com/d/10g1s8cP-wgrt3x4P-EQKQQdNj87GBXqM" },
        { "titulo": "El camino hacia el más fuerte / El camino hacia el poder", "descripcion": "Dragon Ball (Especial 10º Aniv.)", "info": "Marzo 1996", "imagen": "https://lh3.googleusercontent.com/d/1YzWZBnF5SVHQ76ZtHzGo_d9--o8AvU3S" },
        { "titulo": "La batalla de los dioses", "descripcion": "Dragon Ball Z (Moderna)", "info": "Marzo 2013", "imagen": "https://lh3.googleusercontent.com/d/1BXVTWTH1_wW205QretsCiGiwLq5fTxPH" },
        { "titulo": "La resurrección de Freezer / La resurrección de 'F'", "descripcion": "Dragon Ball Z (Moderna)", "info": "Abril 2015", "imagen": "https://lh3.googleusercontent.com/d/132tuEe-NXEG0zbYYZb307YFL433YTok9" },
        { "titulo": "Dragon Ball Super: Broly", "descripcion": "Dragon Ball Super", "info": "Diciembre 2018", "imagen": "https://lh3.googleusercontent.com/d/13bM-a9y8l72FiBD0-ZY5qr1HqOQV9Qck" },
        { "titulo": "Dragon Ball Super: Super Hero", "descripcion": "Dragon Ball Super", "info": "Junio 2022", "imagen": "https://lh3.googleusercontent.com/d/1--0Hiil4UtBmw8ktiXNCla9m1edyCby2" }
    ],
    "videojuegos": [
        { "titulo": "Dragon Ball Sparking! ZERO", "descripcion": "Información no disponible.", "imagen": "https://lh3.googleusercontent.com/d/115sLGIdzioiaRAsxG4ATFfliXWObYpQF" },
        { "titulo": "Dragon Ball Z: Sagas", "descripcion": "Información no disponible.", "imagen": "https://lh3.googleusercontent.com/d/12jXt_CnKRxXIQD_MTGYg79BPLaij85R3" },
        { "titulo": "Dragon Ball Z: Buu's Fury", "descripcion": "Información no disponible.", "imagen": "https://lh3.googleusercontent.com/d/15F8kUwNevGxeU3hBfRksKLZdu6gG_n8Z" },
        { "titulo": "Dragon Ball Z: Budokai Tenkaichi", "descripcion": "Información no disponible.", "imagen": "https://lh3.googleusercontent.com/d/15SZUX8XyEOFjHgV9J8mUFKLLRCrNxEaH" },
        { "titulo": "Dragon Ball: The Breakers", "descripcion": "Información no disponible.", "imagen": "https://lh3.googleusercontent.com/d/15n9jmkwKd64AyrYaG1Q3Mo_LTw5LhI4X" },
        { "titulo": "Dragon Ball Raging Blast", "descripcion": "Información no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1CDaqeXIbeSDIL-cB8Nm72SojEbGHYKGv" },
        { "titulo": "Dragon Ball Z: Budokai", "descripcion": "Información no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1GR5bWqLoO7eGdz-yeKOnyJqmqoDsd7JE" },
        { "titulo": "Dragon Ball Z: El Legado de Goku", "descripcion": "Información no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1KYbxQgzTN4Rxnn314-uUSZY4AkqPNd_X" },
        { "titulo": "Dragon Ball Z: Budokai Tenkaichi 3", "descripcion": "Información no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1LJjapTQJ28k_6Pt1_vZxFMqBi2wmWx6_" },
        { "titulo": "Dragon Ball Legends", "descripcion": "Información no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1OTxA0GWun1qk-8bOyLrNqwuyDHn6Dtro" },
        { "titulo": "Dragon Ball Raging Blast 2", "descripcion": "Información no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1PpxQ0fS7kzhmG1gg0TlQqfc-QldSZwzM" },
        { "titulo": "Dragon Ball Z: Kakarot", "descripcion": "Información no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1Q2frh1C-i8lHs2kSVs4nmSuVaqPVBn7m" },
        { "titulo": "Dragon Ball Z: Shin Budokai", "descripcion": "Información no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1QSfUMU0HG63XqUElUscGbN1c--BmQpTm" },
        { "titulo": "Dragon Ball Z: Shin Budokai - Another Road", "descripcion": "Información no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1SquR3MJrgxrgRYXCWEfD-fkeuGRgi9Ed" },
        { "titulo": "Dragon Ball: Advanced Adventure", "descripcion": "Información no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1Tsj4ICOMHfisXKItRYObeu608txA71Vz" },
        { "titulo": "Dragon Ball Z: Budokai 3", "descripcion": "Información no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1UcPPHRupw_7Cg0bcceCMZux00fbWcLyA" },
        { "titulo": "Dragon Ball Z: Budokai 2", "descripcion": "Información no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1VpnGeNTwnoCeF1OIgONFwFXrSiQBCZtY" },
        { "titulo": "Dragon Ball Z: Budokai Tenkaichi 2", "descripcion": "Información no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1aBMBzvH8LUqDZoxDfdTzednCwXTiahY1" },
        { "titulo": "Dragon Ball Z: The Legacy of Goku II", "descripcion": "Información no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1aCDo3I04ud5PcA1l2Z7JGvowVUYCsa3K" },
        { "titulo": "Dragon Ball FighterZ", "descripcion": "Información no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1emM49Xbed6wuzu6W5FP7DXiC2uGydUwM" },
        { "titulo": "Dragon Ball Z: Dokkan Battle", "descripcion": "Información no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1nM6Wc-shh6lH8TRVS0NRhhA23Mc638qW" },
        { "titulo": "Dragon Ball Xenoverse 2", "descripcion": "Información no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1opHnByooG3XhwoOGb129gvTHK2zemLQz" },
        { "titulo": "Super Dragon Ball Heroes: World Mission", "descripcion": "Información no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1qY1OnwfhIGcE2fNxGPPytaxjn5HpSo8r" },
        { "titulo": "Dragon Ball Fusions", "descripcion": "Información no disponible.", "imagen": "https://lh3.googleusercontent.com/d/1x6y8WCWJA-7eH_aRckj_Bp0YKRv92lmk" }
    ]
};

var WORLD_DATA = {
    "sagas": [
        { 
            "era": "Dragon Ball Clásico", 
            "lista": [
                "Saga de Pilaf", 
                "Saga del 21.º Torneo de Artes Marciales", 
                "Saga del Ejército Red Ribbon", 
                "Saga del General Blue", 
                "Saga de la Torre Karin", 
                "Saga del 22.º Torneo de Artes Marciales", 
                "Saga de Piccolo Daimaō", 
                "Saga del 23.º Torneo de Artes Marciales"
            ] 
        },
        { 
            "era": "Dragon Ball Z", 
            "lista": [
                "Saga Saiyan", 
                "Saga de Freezer", 
                "Saga de Garlic Jr.", 
                "Saga de los Androides", 
                "Saga de Cell", 
                "Saga del Otro Mundo", 
                "Saga de Majin Buu"
            ] 
        },
        { 
            "era": "Dragon Ball GT", 
            "lista": [
                "Saga de las Bolas de Dragón Definitivas", 
                "Saga de Baby", 
                "Saga de Super 17", 
                "Saga de los Dragones Oscuros"
            ] 
        },
        { 
            "era": "Dragon Ball Super", 
            "lista": [
                "Saga de Beerus", 
                "Saga de Golden Freezer", 
                "Saga del Torneo del Universo 6", 
                "Saga de Goku Black", 
                "Saga del Torneo del Poder", 
                "Saga de Broly", 
                "Saga de Super Hero"
            ] 
        },
        { 
            "era": "Dragon Ball DAIMA", 
            "lista": [
                "Saga del Reino Demoníaco", 
                "Saga de Gomah", 
                "Saga de los Tamagami"
            ] 
        }
    ],
    "esferas": [
        { "nombre": "Esferas de la Tierra", "dragon": "Shenlong", "color": "warning", "descripcion": "Creadas por Kamisama. Conceden deseos tras reunirlas todas." },
        { "nombre": "Esferas de Namek", "dragon": "Porunga", "color": "success", "descripcion": "Mucho más grandes, conceden tres deseos en idioma Namek." },
        { "nombre": "Super Esferas del Dragón", "dragon": "Super Shenlong", "color": "info", "descripcion": "Del tamaño de planetas. Sin límites de poder." }
    ],
    "universos": [
        { "id": 6, "dios": "Champa", "angel": "Vados", "info": "Universo gemelo del 7." },
        { "id": 7, "dios": "Beerus", "angel": "Whis", "info": "Nuestro universo.", "highlight": true },
        { "id": 11, "dios": "Belmod", "angel": "Marcarita", "info": "Hogar de Jiren y las Tropas del Orgullo." }
    ],
    "biomas": [
        { "nombre": "Corporación Cápsula", "clima": "Urbano", "descripcion": "Centro tecnológico de West City." },
        { "nombre": "Montaña Paozu", "clima": "Montañoso", "descripcion": "Hogar de la infancia de Goku." },
        { "nombre": "Planeta de Beerus", "clima": "Divino", "descripcion": "Lugar de entrenamiento de Goku y Vegeta." }
    ]
};

const api = {
    getCharacters: () => Promise.resolve(window.PERSONAJES_DATA),
    getMedia: () => Promise.resolve(window.MEDIA_DATA),
    getWorld: () => Promise.resolve(window.WORLD_DATA)
};

window.api = api;
