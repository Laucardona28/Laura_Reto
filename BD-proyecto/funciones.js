// --- Funciones para manejar localStorage como Map o Array ---

function obtenerMap(nombre) {
    const str = localStorage.getItem(nombre);
    if (!str) {
        throw new Error(`No se encontró el objeto con el nombre: ${nombre}`);
    }
    const json = JSON.parse(str);
    return new Map(Object.entries(json));
}

function obtenerArray(nombre) {
    const str = localStorage.getItem(nombre);
    if (!str) {
        throw new Error(`No se encontró el array con el nombre: ${nombre}`);
    }
    return JSON.parse(str);
}

// --- Funciones para obtener datos ---

function obtenerCategorias() {
    const map = obtenerMap("categorias");
    return Array.from(map.values());
}

function obtenerProductos(categoria = "todos") {
    const map = obtenerMap("productos");
    let productos;

    if (categoria == null || categoria === "todos") {
        productos = Array.from(map.values());
    } else {
        productos = Array.from(map.values()).filter(producto => producto.categoria === categoria);
    }

    return productos;
}

function obtenerBanners() {
    return obtenerArray("banner");
}

function obtenerProductoPorCodigo(codigoProducto) {
    const productosMap = obtenerMap("productos");
    const producto = productosMap.get(codigoProducto);
    if (!producto) {
        throw new Error(`No se encontró el producto con el código: ${codigoProducto}`);
    }
    return producto;
}

// --- Funciones para el carrito de compras ---

function obtenerCarrito() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

function guardarCarrito(carrito) {
    localStorage.setItem("carrito", JSON.stringify(carrito));

    // Contar la cantidad total de artículos en el carrito (sumar cantidades)
    const totalUnidades = carrito.reduce((acc, item) => acc + (item.cantidad || 1), 0);
    sessionStorage.setItem("contadorCarrito", totalUnidades);
}



// Carrito
function agregarAlCarrito(codigoProducto, cantidad = 1) {
    const map = obtenerMap("productos");
    const producto = map.get(codigoProducto);
    if (!producto) return;

    const carrito = obtenerCarrito();
    const index = carrito.findIndex(item => item.codigo === codigoProducto);

    if (index !== -1) {
        carrito[index].cantidad += cantidad;
    } else {
        carrito.push({ ...producto, cantidad });
    }

    guardarCarrito(carrito);
    renderizarCarrito(); // Actualiza el carrito lateral automáticamente
}




function eliminarDelCarrito(index) {
    const carrito = obtenerCarrito();
    carrito.splice(index, 1);
    guardarCarrito(carrito);
    renderizarCarrito();
}

function vaciarCarrito() {
    localStorage.removeItem("carrito");
    sessionStorage.setItem("contadorCarrito", 0); 
    renderizarCarrito();
}


// Renderiza el carrito en una página que tenga los elementos con ID "carrito" y "total"
function renderizarCarrito() {
    const carrito = obtenerCarrito();
    const carritoContainer = document.getElementById("carrito");
    const totalSpan = document.getElementById("total");

    if (!carritoContainer || !totalSpan) return;

    carritoContainer.innerHTML = "";
    let total = 0;

    carrito.forEach((producto, index) => {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center";
        li.innerHTML = `
            <span>${producto.nombre} (x${producto.cantidad || 1})</span>
            <div>
                <span>$${(producto.precio * (producto.cantidad || 1)).toFixed(2)}</span>
                <button class="btn btn-sm btn-danger ml-2" onclick="eliminarDelCarrito(${index})">X</button>
            </div>`;
        carritoContainer.appendChild(li);
        total += producto.precio * (producto.cantidad || 1);
    });

    totalSpan.textContent = total.toFixed(2);

    document.getElementById('contadorCarrito').textContent = carrito.reduce((acc, item) => acc + (item.cantidad || 1), 0);

}







 