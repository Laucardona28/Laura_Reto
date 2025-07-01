// --- Categorías ---
const categorias = {
    "101": {
        codigo: "101",
        nombre: "Alimento Hill's",
        descripcion: "Alimento prémium para tu peludito.",
        imagen: "img/cat101.png"
    },
    "102": {
        codigo: "102",
        nombre: "Camas",
        descripcion: "Lindas y cómodas camas de la mejor calidad.",
        imagen: "img/cat102.png"
    },
    "103": {
        codigo: "103",
        nombre: "Cepillos y peines",
        descripcion: "Los mejores cepillos para el cuidado de tu gato.",
        imagen: "img/cat103.jpg"
    }
};
localStorage.setItem("categorias", JSON.stringify(categorias));

// --- Productos ---
const productos = {
    // Alimentos
    "1001": {
        codigo: "1001",
        nombre: "Hill's para gatos",
        descripcion: "Alimento especial para prevenir las bolas de pelo.",
        categoria: "101",
        imagen: "img/cat11.png",
        precio: 100000,
        calificacion: 5
    },
    "1004": {
        codigo: "1004",
        nombre: "Hill's Digestive Care",
        descripcion: "Alimento especial para el cuidado digestivo.",
        categoria: "101",
        imagen: "img/cat14.png",
        precio: 100000,
        calificacion: 5
    },
    "1005": {
        codigo: "1005",
        nombre: "Hill's Kidney Care",
        descripcion: "Alimento a base de atún y vegetales.",
        categoria: "101",
        imagen: "img/cat15.png",
        precio: 90000,
        calificacion: 5
    },

    // Camas
    "1002": {
        codigo: "1002",
        nombre: "Cama con cojín interior",
        descripcion: "Cama diseñada para la comodidad de tu gato.",
        categoria: "102",
        imagen: "img/cat12.jpg",
        precio: 200000,
        calificacion: 4
    },
    "1006": {
        codigo: "1006",
        nombre: "Cama iglú",
        descripcion: "Cama con orejitas, súper acogedora para tu mascota.",
        categoria: "102",
        imagen: "img/cat16.jpeg",
        precio: 200000,
        calificacion: 4
    },
    "1007": {
        codigo: "1007",
        nombre: "Cama cesta de mimbre",
        descripcion: "Cama hecha de mimbre ecológico natural.",
        categoria: "102",
        imagen: "img/cat17.jpg",
        precio: 200000,
        calificacion: 4
    },

    // Cepillos
    "1003": {
        codigo: "1003",
        nombre: "Cepillo para gatos",
        descripcion: "Cepillo con sistema de vapor para mejores resultados.",
        categoria: "103",
        imagen: "img/cat13.jpg",
        precio: 60000,
        calificacion: 3
    },
    "1008": {
        codigo: "1008",
        nombre: "Cepillo autolimpiable",
        descripcion: "Elimina el pelo enredado y la capa inferior.",
        categoria: "103",
        imagen: "img/cat18.jpg",
        precio: 60000,
        calificacion: 5
    },
    "1009": {
        codigo: "1009",
        nombre: "Peine masajeador para gatos",
        descripcion: "Peine para consentir a tus peluditos.",
        categoria: "103",
        imagen: "img/cat19.jpg",
        precio: 50000,
        calificacion: 3
    }
};
localStorage.setItem("productos", JSON.stringify(productos));


// --- Banners ---
const banners = [
    {
        imagen: "img/cat101.png",
        titulo: "Bienvenido a Nuestro Sitio",
        subtitulo: "Alimentos para todas las necesidades de tu mascota",
        descripcion: "Productos seleccionados para su salud y felicidad.",
        enlace: "productos.html?categoria=todos",
        activo: true
    },
    {
        imagen: "img/cat102.png",
        titulo: "Nuevos Productos Disponibles",
        subtitulo: "Dale la mejor comodidad a tu gato",
        descripcion: "Conoce nuestras últimas novedades.",
        enlace: "productos.html?categoria=todos",
        activo: false
    }
];
localStorage.setItem("banner", JSON.stringify(banners));


