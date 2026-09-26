let carrito = [];


/* =========================
   CARRITO
========================= */

function agregarAlCarrito(nombre, precio) {

    const productoExistente = carrito.find(
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

    actualizarCarrito();
    abrirCarrito();
}


function actualizarCarrito() {

    const contenedor =
        document.getElementById("productos-carrito");

    const contador =
        document.getElementById("contador-carrito");

    const totalElemento =
        document.getElementById("total");


    let total = 0;
    let cantidadTotal = 0;


    if (carrito.length === 0) {

        if (contenedor) {

            contenedor.innerHTML =
                "<p>Tu carrito está vacío.</p>";

        }

    } else {

        if (contenedor) {

            contenedor.innerHTML = "";

            carrito.forEach((producto, indice) => {

                total +=
                    producto.precio *
                    producto.cantidad;

                cantidadTotal +=
                    producto.cantidad;


                const item =
                    document.createElement("div");

                item.className =
                    "item-carrito";


                item.innerHTML = `

                    <div class="item-carrito-info">

                        <strong>
                            ${producto.nombre}
                        </strong>

                        <span>
                            $${producto.precio.toLocaleString("es-CO")}
                            x ${producto.cantidad}
                        </span>

                    </div>

                    <button
                        class="eliminar-producto"
                        onclick="eliminarProducto(${indice})"
                    >

                        <i class="fa-solid fa-trash"></i>

                    </button>

                `;

                contenedor.appendChild(item);

            });

        }

    }


    if (contador) {

        contador.textContent =
            cantidadTotal;

    }


    if (totalElemento) {

        totalElemento.textContent =
            "$" + total.toLocaleString("es-CO");

    }

}


function eliminarProducto(indice) {

    carrito.splice(indice, 1);

    actualizarCarrito();

}


function abrirCarrito() {

    const carritoVentana =
        document.getElementById("carrito");

    if (carritoVentana) {

        carritoVentana.style.display =
            "block";

    }

}


function cerrarCarrito() {

    const carritoVentana =
        document.getElementById("carrito");

    if (carritoVentana) {

        carritoVentana.style.display =
            "none";

    }

}


/* =========================
   PAGOS
========================= */

function finalizarCompra() {

    if (carrito.length === 0) {

        alert("Tu carrito está vacío.");

        return;

    }


    const pago =
        document.getElementById("pago");

    if (pago) {

        pago.style.display =
            "flex";

    }

}


function seleccionarPago(metodo) {

    const informacion =
        document.getElementById("informacion-pago");

    if (!informacion) return;


    informacion.style.display =
        "block";


    informacion.innerHTML = `

        <strong>
            Pago con ${metodo}
        </strong>

        <br><br>

        Has seleccionado
        <strong>${metodo}</strong>
        como método de pago.

        <br><br>

        Para continuar con tu pedido,
        comunícate con CREACIONES YM
        por WhatsApp.

        <br><br>

        <a
            href="https://wa.me/573249829483?text=Hola%2C%20quiero%20realizar%20un%20pago%20de%20mi%20pedido%20en%20CREACIONES%20YM."
            target="_blank"
            class="btn-whatsapp-pago"
        >

            <i class="fa-brands fa-whatsapp"></i>

            Continuar por WhatsApp

        </a>

    `;

}


function cerrarPago() {

    const pago =
        document.getElementById("pago");

    if (pago) {

        pago.style.display =
            "none";

    }

}


/* =========================
   INICIAR SESIÓN
========================= */

function abrirLogin() {

    const login =
        document.getElementById("login");

    if (login) {

        login.style.display =
            "flex";

    }

}


function cerrarLogin() {

    const login =
        document.getElementById("login");

    if (login) {

        login.style.display =
            "none";

    }

}


function iniciarSesion(event) {

    event.preventDefault();

    const mensaje =
        document.getElementById("mensaje-login");

    if (mensaje) {

        mensaje.textContent =
            "Sesión iniciada correctamente.";

    }

}


/* =========================
   CREAR CUENTA
========================= */

function mostrarRegistro() {

    cerrarLogin();

    const registro =
        document.getElementById("registro");

    if (registro) {

        registro.style.display =
            "flex";

    }

}


function cerrarRegistro() {

    const registro =
        document.getElementById("registro");

    if (registro) {

        registro.style.display =
            "none";

    }

}


function crearCuenta(event) {

    event.preventDefault();

    const nombre =
        document.getElementById("nombre-registro");

    const mensaje =
        document.getElementById("mensaje-registro");

    if (!nombre) return;

    if (mensaje) {

        mensaje.textContent =
            "Cuenta creada correctamente. Bienvenido/a " +
            nombre.value +
            ".";

    }

}


/* =========================
   CHAT
========================= */

function toggleChat() {

    const chat =
        document.getElementById("chat-contenido");

    if (!chat) return;


    if (chat.style.display === "block") {

        chat.style.display = "none";

    } else {

        chat.style.display = "block";

    }

}


function mostrarAyuda() {

    const ayuda =
        document.getElementById("chat-ayuda");

    if (!ayuda) return;


    ayuda.style.display =
        "block";


    ayuda.innerHTML = `

        Para ayudarte con tu pedido
        puedes escribirnos directamente
        por WhatsApp.

        <br><br>

        <a
            href="https://wa.me/573249829483?text=Hola%2C%20necesito%20ayuda%20con%20mi%20pedido%20de%20CREACIONES%20YM."
            target="_blank"
            class="btn-whatsapp-pago"
        >

            <i class="fa-brands fa-whatsapp"></i>

            Escribir por WhatsApp

        </a>

    `;

}


/* =========================
   CERRAR VENTANAS
========================= */

window.addEventListener("click", function(event) {

    const login =
        document.getElementById("login");

    const registro =
        document.getElementById("registro");

    const pago =
        document.getElementById("pago");

    const carrito =
        document.getElementById("carrito");


    if (
        login &&
        event.target === login
    ) {

        cerrarLogin();

    }


    if (
        registro &&
        event.target === registro
    ) {

        cerrarRegistro();

    }


    if (
        pago &&
        event.target === pago
    ) {

        cerrarPago();

    }


    if (
        carrito &&
        event.target === carrito
    ) {

        cerrarCarrito();

    }

});


/* =========================
   INICIAR
========================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        actualizarCarrito();

    }
);
