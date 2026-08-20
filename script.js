function irPagina() {
    const menu = document.getElementById("menu");
    if (menu.value !== "") {
        window.location.href = menu.value;
    }
}

let carrito = [];

function abrirCarrito() {
    document.getElementById("carrito").style.display = "block";
}

function cerrarCarrito() {
    document.getElementById("carrito").style.display = "none";
}

function agregarAlCarrito(nombre, precio) {

    let productoExistente = carrito.find(
        producto => producto.nombre === nombre
    );

    if (productoExistente) {
        productoExistente.cantidad++;
    } else {
        carrito.push({
            nombre: nombre,
            precio: precio,
            cantidad: 1
        });
    }

    mostrarCarrito();
}

function mostrarCarrito() {

    let contenedor = document.getElementById("productos-carrito");
    let total = 0;
    let cantidadTotal = 0;

    contenedor.innerHTML = "";

    if (carrito.length === 0) {
        contenedor.innerHTML = "<p>Tu carrito está vacío.</p>";
    }

    carrito.forEach((producto, index) => {

        let subtotal = producto.precio * producto.cantidad;

        total += subtotal;
        cantidadTotal += producto.cantidad;

        contenedor.innerHTML += `
            <div class="producto-carrito">

                <div>
                    <strong>${producto.nombre}</strong>
                    <p>$${producto.precio.toLocaleString()}</p>
                </div>

                <div>
                    <button onclick="disminuirCantidad(${index})">−</button>

                    <span>${producto.cantidad}</span>

                    <button onclick="aumentarCantidad(${index})">+</button>
                </div>

                <strong>$${subtotal.toLocaleString()}</strong>

                <button onclick="eliminarProducto(${index})">
                    🗑️
                </button>

            </div>
        `;
    });

    document.getElementById("total").textContent =
        "$" + total.toLocaleString();

    document.getElementById("contador-carrito").textContent =
        cantidadTotal;
}

function aumentarCantidad(index) {
    carrito[index].cantidad++;
    mostrarCarrito();
}

function disminuirCantidad(index) {

    if (carrito[index].cantidad > 1) {
        carrito[index].cantidad--;
    } else {
        carrito.splice(index, 1);
    }

    mostrarCarrito();
}

function eliminarProducto(index) {
    carrito.splice(index, 1);
    mostrarCarrito();
}

function finalizarCompra() {

    if (carrito.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }

    alert("¡Gracias por comprar en Creaciones YM! 💗");
}