
// Inicialización de categorías en localStorage
categorias = {
    "101" : { codigo: "101",
              nombre: "Desarrollo Web", 
              descripcion: "Cursos sobre tecnologías para el desarrollo web", 
              imagen: "img/cat101.jpg" },
    "102" : { codigo: "102", nombre: "Lenguajes de Programación", descrpcion: "Cursos de programación en diferentes lenguajes", imagen: "img/cat102.jpg"  },
    "103" : { codigo: "103", nombre: "Metodología de Desarrollo", descrpcion: "Cursos sobre metodologías ágiles y de desarrollo de software", imagen: "img/cat103.jpg"  }
};

localStorage.setItem("categorias", JSON.stringify(categorias));
