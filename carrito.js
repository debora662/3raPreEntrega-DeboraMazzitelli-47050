const productos = [
    {
        id: 0,
        nombre: "Auriculares Soul s600",
        image: "./assets/images/auris2.webp",
        precio: 5200,
        tags: ["auriculares", "inalambricos"],
        desc: "Sumérgete en la mejor experiencia auditiva con los Auriculares inalámbricos Soul S600 AUR-BT881 en elegante combinación de rosa y gris. Diseñados pensando en tu comodidad y estilo, estos auriculares On-ear se ajustan perfectamente a tus oídos, permitiéndote disfrutar de tu música favorita durante horas sin molestias.",
        categoria: "auriculares",
        cantidad: 1,
    },
    {
        id: 1,
        nombre: "Auriculares JBL 510T",
        image: "./assets/images/auris3.webp",
        precio: 7500,
        tags: ["auriculares", "inalambricos"],
        desc: "JBL, marca de renombre mundial en el mercado de audio, es desde hace más 70 años una referente por la alta calidad de sus productos. Su gama de auriculares es variada, ya que la compañía ofrece produtos in-ear, over-ear, on-ear, deportivos e inalámbricos. Cualquiera de estos es una buena opción para hacerte disfrutar de tu música preferida.",
        categoria: "auriculares",
        cantidad: 1,
    },
    {
        id: 2,
        nombre: "Auriculares Noga Ng98t",
        image: "./assets/images/auris1.webp",
        precio: 4899,
        tags: ["auriculares", "inalambricos"],
        desc: "En la calle, en el colectivo o en la oficina, tené siempre a mano tus auriculares Noga y ¡escapate de la rutina por un rato! Vas a poder disfrutar de la música que más te gusta y de tus podcasts favoritos cuando quieras y donde quieras. Al ser on-ear se apoyan en tus orejas cómodamente y ofrecen una gran calidad de sonido.",
        categoria: "auriculares",
        cantidad: 1,
    },
    {
        id: 3,
        nombre: "Mouse Yindiao A2410",
        image: "./assets/images/mouse3.webp",
        precio: 5800,
        tags: ["mouse", "inalambricos"],
        desc: "Para trabajar desde casa con la computadora o aprovechar los momentos de ocio, necesitás comodidad y facilidad de movimiento.Con tu Yindiao A2 encontrá eso que buscás en un solo aparato con la mejor tecnología.",
        categoria: "mouse",
        cantidad: 1,
    },
    {
        id: 4,
        nombre: "Mouse Logitech M220",
        image: "./assets/images/mouse1.webp",
        precio: 2800,
        tags: ["mouse", "inalambricos"],
        desc: "Su diseño eficaz hace de este mouse un elemento cómodo, tambien cuenta con detección de movimiento óptico te permitirá mover el cursor de una manera más precisa y sensible",
        categoria: "mouse",
        cantidad: 1,
    },
    {
        id: 5,
        nombre: "Mouse Redragon M601L",
        image: "./assets/images/mouse2.webp",
        precio: 4100,
        tags: ["mouse", "inalambricos"],
        desc: "El sistema de detección de movimiento óptico te permitirá mover el cursor de una manera más precisa y sensible que en los sistemas tradicionales. Trabajá de forma inalámbrica y movete libremente sin ninguna interrupción..",
        categoria: "mouse",
        cantidad: 1,
    },
    {
        id: 6,
        nombre: "Teclado Noganet 78005",
        image: "./assets/images/teclado1.webp",
        precio: 5300,
        tags: ["teclado", "español"],
        desc: "Este teclado Noganet es el mejor complemento para hacer todo tipo de actividades. Es cómodo y práctico al momento de redactar documentos, navegar y hacer búsquedas por internet, ya sea en tu trabajo o en la comodidad del hogar.",
        categoria: "teclado",
        cantidad: 1,
    },
    {
        id: 7,
        nombre: "Teclado Logitech K380",
        image: "./assets/images/teclado2.webp",
        precio: 9800,
        tags: ["teclado", "español"],
        desc: "Innovadores en diseño y tecnología, Logitech se encarga de brindar la mejor experiencia de uso para sus usuarios. Sus teclados resaltan por ser resistentes y muy de buena calidad, por lo que podrás disfrutarlos por un largo tiempo.",
        categoria: "teclado",
        cantidad: 1,
    },
    {
        id: 8,
        nombre: "Teclado ApexPro TKL",
        image: "./assets/images/teclado3.webp",
        precio: 4700,
        tags: ["teclado", "español"],
        desc: "Este teclado SteelSeries de alto rendimiento permite que puedas disfrutar de horas ilimitadas de juegos. Está diseñado especialmente para que puedas expresar tanto tus habilidades como tu estilo.",
        categoria: "teclado",
        cantidad: 1,
    },
    {
        id: 9,
        nombre: "WebCam Noga NGW-120",
        image: "./assets/images/web3.webp",
        precio: 6500,
        tags: ["webcam", "camaraweb"],
        desc: "Ya no tenés que preocuparte si tu PC no tiene cámara. Este dispositivo de Noga brinda la calidad de imagen y funciones que necesitás para comunicarte de manera fácil y efectiva en la virtualidad.",
        categoria: "webcam",
        cantidad: 1,
    },
    {
        id: 10,
        nombre: "WebCam Logitech C922",
        image: "./assets/images/web2.webp",
        precio: 7700,
        tags: ["webcam", "camaraweb"],
        desc: "Este dispositivo es ideal para aquellas personas que disfrutan de los juegos en línea. Cabe destacar que sus funcionalidades y la calidad de imagen, sin dudas, ofrecen una gran experiencia.",
        categoria: "webcam",
        cantidad: 1,
    },
    {
        id: 11,
        nombre: "WebCam Genius 100X",
        image: "./assets/images/web1.webp",
        precio: 4300,
        tags: ["webcam", "camaraweb"],
        desc: "La Genius FaceCam 1000X cuenta con un micrófono incorporado, lo que facilita la comunicación con tus amigos, familiares o colegas sin necesidad de utilizar un dispositivo adicional.",
        categoria: "webcam",
        cantidad: 1,
    },
    {
        id: 12,
        nombre: "Parlantes Genius HF180",
        image: "./assets/images/parlantes1.webp",
        precio: 5900,
        tags: ["parlantes", "musica"],
        desc: "Genius SP-HF180 ofrece un sonido natural, con una gran claridad y precisión, que se dispersa de manera uniforme. Un parlante que asegura potencia y calidad por igual en la reproducción de contenidos multimedia.",
        categoria: "parlantes",
        cantidad: 1,
    },
    {
        id: 13,
        nombre: "Parlantes Xinua Rgb",
        image: "./assets/images/parlantes3.webp",
        precio: 6800,
        tags: ["parlantes", "musica"],
        desc: "Xinua Xinua ofrece un sonido natural, con una gran claridad y precisión, que se dispersa de manera uniforme. Un parlante que asegura potencia y calidad por igual en la reproducción de contenidos multimedia.",
        categoria: "parlantes",
        cantidad: 1,
    },
    {
        id: 14,
        nombre: "Parlantes Braun J180TB",
        image: "./assets/images/parlantes2.webp",
        precio: 3900,
        tags: ["parlantes", "musica"],
        desc: "La unidad de rango completo de 2,75 pulgadas ofrece un sonido excelente. Con su revestimiento blanco perla y su tapa antipolvo en forma de bala, complementará tu escritorio en todo momento.",
        categoria: "parlantes",
        cantidad: 1,
    },
    {
        id: 15,
        nombre: "Auriculares Noblex H350b",
        image: "./assets/images/auris4.webp",
        precio: 5900,
        tags: ["auriculares", "inalambricos"],
        desc: "En la calle, en el colectivo o en la oficina, tené siempre a mano tus auriculares Noblex y ¡escapate de la rutina por un rato! Vas a poder disfrutar de la música que más te gusta y de tus podcasts con un sonido excelente y con muy buenos graves.",
        categoria: "auriculares",
        cantidad: 1,
    },
    {
        id: 16,
        nombre: "Auriculares Extrabass 80TB",
        image: "./assets/images/auris5.webp",
        precio: 6900,
        tags: ["parlantes", "musica"],
        desc: "El Auricular sunset 450-AP Vincha Plegable Extra Bass es un auricular con un sonido excelente y cuentan con muy buenos graves, tambien tienen (manos libres, play/pausa, atender/colgar) desdxe la comodidad de un boton.",
        categoria: "auriculares",
        cantidad: 1,
    },
    {
        id: 17,
        nombre: "Auriculares Suono Style ",
        image: "./assets/images/auris6.webp",
        precio: 7900,
        tags: ["parlantes", "musica"],
        desc: "¡Experimentá la adrenalina de sumergirte en la escena de otra manera! Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida. Con los Suono Confort Audio no te perdés ningún detalle y escuchás el audio tal y como fue diseñado por los creadores.",
        categoria: "auriculares",
        cantidad: 1,
    },
    {
        id: 17,
        nombre: "Auriculares Soul XH150 ",
        image: "./assets/images/auris7.webp",
        precio: 8900,
        tags: ["parlantes", "musica"],
        desc: "¡Experimentá la adrenalina de sumergirte en la escena de otra manera! Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida. Con los Soul Future Sound XH150 no te perdés ningún detalle y escuchás el audio tal y como fue diseñado por los creadores.",
        categoria: "auriculares",
        cantidad: 1,
    },
    {
        id: 14,
        nombre: "Auriculares GTC Vintage ",
        image: "./assets/images/auris8.webp",
        precio: 8900,
        tags: ["parlantes", "musica"],
        desc: "En la calle, en el colectivo o en la oficina, tené siempre a mano tus auriculares GTC y ¡escapate de la rutina por un rato! Vas a poder disfrutar de la música que más te gusta y de tus podcasts favoritos cuando quieras y donde quieras.",
        categoria: "auriculares",
        cantidad: 1,
    },
]

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];


const botonAuriculares = document.querySelector("#auriculares");
const botonMouse = document.querySelector("#mouse");
const botonTeclado = document.querySelector("#teclado");
const botonWebcam = document.querySelector("#webcam");
const botonParlantes = document.querySelector("#parlantes");
const textoCategoria = document.querySelector("#textoCategoria")
const volverBtn = document.querySelector("#volverBtn");
const categoriasContainer = document.querySelector("#categoriasContainer");
const productosContainer = document.querySelector('#productosContainer');
const carritoCompras = document.querySelector("#mostrarProductos");
const sidenav = document.querySelector("#sidenav-7");
const inputBuscador = document.querySelector("#buscador");
const botonBuscar = document.querySelector("#botonBuscar");
const carousel = document.querySelector("#carouselExampleControls");
const dataInfo = document.querySelector("#dataPagos");
const botonesCategoria = document.querySelectorAll(".categoria-btn");
const contenedorFiltros = document.querySelector("#contenedorFiltros");
const noEncontrado = document.querySelector("#noEncontrado");
const detalleProducto = document.querySelector("#detalleProducto");
const containerDetalle = document.querySelector("#containerDetalle");
const slider = document.querySelector("#slider")
const bannerMiddle = document.querySelector("#bannerMiddle")


function mostrarCategorias(categoria, orden) {

    console.log("Mostrando productos de la categoría:", categoria);

    carousel.style.display = 'none';
    dataInfo.classList.remove('hidden');
    botonAuriculares.style.display = 'none';
    botonMouse.style.display = 'none';
    botonTeclado.style.display = 'none';
    botonWebcam.style.display = 'none';
    botonParlantes.style.display = 'none';
    textoCategoria.style.display = 'none';
    volverBtn.classList.remove('hidden');
    bannerMiddle.classList.add('hidden');



    productosContainer.innerHTML = '';

    let productosCategoria = productos.filter(producto => producto.categoria === categoria);

    if (orden === 'menorPrecio') {
        productosCategoria = productosCategoria.sort(ordenarPorPrecioAscendente);
    } else if (orden === 'mayorPrecio') {
        productosCategoria = productosCategoria.sort(ordenarPorPrecioDescendente);
    } else if (orden === 'nombreAscendente') {
        productosCategoria = productosCategoria.sort(ordenarNombreAscendente);
    } else if (orden === 'nombreDescendente') {
        productosCategoria = productosCategoria.sort(ordenarNombreDescendente);
    }

    productosCategoria.forEach(producto => {
        const productoElemento = document.createElement('div');
        productoElemento.className = 'bg-white rounded-lg shadow-xl hover:shadow-gray-500 p-8 m-4 flex flex-col items-center border border-slate-400'
        productoElemento.innerHTML = `        
        <div class="flex flex-col items-center w-32 h-64">
        <button class="producto-card" data-id="${producto.id}">
        <img class="w-36 object-cover mb-2 mx-auto rounded-t" src="${producto.image}" alt="${producto.nombre}"> 
        <h2 class="text-sm mb-1 text-center">${producto.nombre}</h2>
        <p class="font-bold text-sm mt-10">Precio: $${producto.precio}</p>          
        </button>
        </div>
        `;

        const botonProducto = productoElemento.querySelector('.producto-card');
        botonProducto.addEventListener('click', () => {
            Swal.fire({
                title: producto.nombre,
                html: `
            <div class="flex">
                <img src="${producto.image}" alt="Product Image" class="mr-4" style="max-height: 350px;"> 
                <div>
                     <p class="font-bold text-3xl text-blue-500 text-left">$ ${producto.precio}</p>
                    <div class="flex items-center mt-8">                        
                        <button class="bg-gray-200 px-2.5 py-1 rounded-l hover:bg-gray-300 decrease-btn">-</button>
                        <span class="mx-2 cantidad">${producto.cantidad}</span>
                        <button class="bg-gray-200 px-2 py-1 rounded-r hover:bg-gray-300 increase-btn">+</button>
                    </div>
                    <p class="mt-8 text-sm text-left mb-16">${producto.desc}</p>                   
                        <button id="btnAgregar" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded 11">Agregar al carrito</button>
                </div>
            </div>
        `,
                imageHeight: 350,
                width: 950,
                imageAlt: 'A tall image',
                customClass: {
                    title: 'font-bold text-black text-3xl text-center ml-16'
                },
                allowOutsideClick: false,
                showCloseButton: true,
                showConfirmButton: false,
            })

            const modal = document.querySelector('.swal2-modal');
            const decreaseBtn = modal.querySelector('.decrease-btn');
            const increaseBtn = modal.querySelector('.increase-btn');
            const cantidadElement = modal.querySelector('.cantidad');


            decreaseBtn.addEventListener('click', function (event) {
                event.stopPropagation();
                if (producto.cantidad > 1) {
                    producto.cantidad--;
                    cantidadElement.textContent = producto.cantidad;
                }
            });

            increaseBtn.addEventListener('click', function (event) {
                event.stopPropagation();
                producto.cantidad++;
                cantidadElement.textContent = producto.cantidad;
            });

            modal.addEventListener('click', function (event) { //cantidad
                if (event.target.id === 'btnAgregar') {
                    const cantidadSeleccionada = productos[producto.id].cantidad;
                    agregarProducto(producto, cantidadSeleccionada);
                }
            });

        });

        productosContainer.appendChild(productoElemento);
    });
}

function ordenarPorPrecioAscendente(a, b) {
    return a.precio - b.precio;
}

function ordenarPorPrecioDescendente(a, b) {
    return b.precio - a.precio;
}

function ordenarNombreAscendente(a, b) {
    const nombreA = a.nombre.toLowerCase();
    const nombreB = b.nombre.toLowerCase();
    if (nombreA < nombreB) {
        return -1
    }
    if (nombreA > nombreB) {
        return 1
    }
    return 0;
}

function ordenarNombreDescendente(a, b) {
    const nombreA = a.nombre.toLowerCase();
    const nombreB = b.nombre.toLowerCase();
    if (nombreA > nombreB) {
        return -1;
    }
    if (nombreA < nombreB) {
        return 1;
    }
    return 0;
}

function mostrarFiltros(categoria) {

    contenedorFiltros.innerHTML = '';

    const cuotas = document.createElement("div");
    cuotas.innerHTML = "⭐ ¡12 cuotas sin interés!";
    cuotas.className = "text-sm font-bold mb-8"

    contenedorFiltros.appendChild(cuotas);

    const ordernarPor = document.createElement("div");
    ordernarPor.textContent = "Ordenar por...";
    ordernarPor.className = "text-sm font-bold mb-2"

    contenedorFiltros.appendChild(ordernarPor);

    const divsFiltros1 = document.createElement("div");
    divsFiltros1.className = "flex items-center mb-2";

    const labelMenorPrecio = document.createElement("label");
    labelMenorPrecio.setAttribute("for", "menorPrecio");
    labelMenorPrecio.className = "mr-2";
    labelMenorPrecio.textContent = "Menor Precio";

    const inputMenorPrecio = document.createElement("input");
    inputMenorPrecio.setAttribute("type", "radio");
    inputMenorPrecio.setAttribute("id", "menorPrecio");
    inputMenorPrecio.setAttribute("name", "orden");
    inputMenorPrecio.setAttribute("value", "menorPrecio");
    inputMenorPrecio.className = "mr-2"

    inputMenorPrecio.addEventListener('change', function () {
        if (inputMenorPrecio.checked) {
            mostrarCategorias(categoria, 'menorPrecio');
        }
    });

    divsFiltros1.appendChild(labelMenorPrecio);
    divsFiltros1.appendChild(inputMenorPrecio);

    const divsFiltros2 = document.createElement("div");
    divsFiltros2.className = "flex items-center mb-2"

    const labelMayorPrecio = document.createElement("label");
    labelMayorPrecio.setAttribute("for", "mayorPrecio");
    labelMayorPrecio.className = "mr-2";
    labelMayorPrecio.textContent = "Mayor Precio";

    const inputMayorPrecio = document.createElement("input");
    inputMayorPrecio.setAttribute("type", "radio");
    inputMayorPrecio.setAttribute("id", "mayorPrecio");
    inputMayorPrecio.setAttribute("name", "orden");
    inputMayorPrecio.setAttribute("value", "mayorPrecio");
    inputMayorPrecio.className = "mr-2"

    inputMayorPrecio.addEventListener('change', function () {
        if (inputMayorPrecio.checked) {
            mostrarCategorias(categoria, 'mayorPrecio');
        }
    });

    divsFiltros2.appendChild(labelMayorPrecio);
    divsFiltros2.appendChild(inputMayorPrecio);

    const divsFiltros3 = document.createElement("div");
    divsFiltros3.className = "flex items-center mb-2";

    const labelAz = document.createElement("label");
    labelAz.setAttribute("for", "a_z");
    labelAz.className = "mr-2";
    labelAz.textContent = "Ordenar A - Z";

    const inputAz = document.createElement("input");
    inputAz.setAttribute("type", "radio");
    inputAz.setAttribute("id", "a_z");
    inputAz.setAttribute("name", "orden");
    inputAz.setAttribute("value", "a_z");
    inputAz.className = "mr-2";

    inputAz.addEventListener('change', function () {
        if (inputAz.checked) {
            mostrarCategorias(categoria, 'nombreAscendente');
        }
    });

    divsFiltros3.appendChild(labelAz);
    divsFiltros3.appendChild(inputAz);

    const divsFiltros4 = document.createElement("div");
    divsFiltros4.className = "flex items-center mb-2";

    const labelZa = document.createElement("label");
    labelZa.setAttribute("for", "z_a");
    labelZa.className = "mr-2";
    labelZa.textContent = "Ordenar Z - A";

    const inputZa = document.createElement("input");
    inputZa.setAttribute("type", "radio");
    inputZa.setAttribute("id", "z_a");
    inputZa.setAttribute("name", "orden");
    inputZa.setAttribute("value", "z_a");
    inputZa.className = "mr-2";

    inputZa.addEventListener('change', function () {
        if (inputZa.checked) {
            mostrarCategorias(categoria, 'nombreDescendente');
        }
    });

    divsFiltros4.appendChild(labelZa);
    divsFiltros4.appendChild(inputZa);

    contenedorFiltros.appendChild(divsFiltros1);
    contenedorFiltros.appendChild(divsFiltros2);
    contenedorFiltros.appendChild(divsFiltros3);
    contenedorFiltros.appendChild(divsFiltros4);

    contenedorFiltros.classList.remove('hidden');
}

function agregarProducto(producto, cantidad) {

    console.log(producto, cantidad)

    const productoEnCarrito = carrito.find((el) => el.id === producto.id);

    if (productoEnCarrito) {
        productoEnCarrito.cantidad++;
        productoEnCarrito.subTotal = productoEnCarrito.cantidad * productoEnCarrito.precio;
    } else {
        const nuevoProducto = {
            ...producto,
            cantidad: cantidad,
            subTotal: cantidad * producto.precio
        };
        carrito.push(nuevoProducto)

    }
    carritoEnLocalStorage();
    mostrarProductosEnCarrito();
    actualizaContador();

    localStorage.setItem("contadorCarrito", carrito.length);

    Toastify({
        text: `Se ha añadido ${producto.nombre} al carrito`,
        className: "info",
        gravity: "top",
        position: "center",
        style: {
            background: "linear-gradient(to right, #ec1534, #ec27ea)",
        }
    }).showToast();

}

function calcularTotalCarrito() {
    let total = 0;
    carrito.forEach((producto) => {
        total += producto.subTotal;
    });
    return total;
}

function barraLateral() {

    if (sidenav.style.transform === "translateX(100%)") {
        sidenav.classList.remove('invisible');
        sidenav.style.transform = "translateX(0)";
    } else {
        sidenav.style.transform = "translateX(100%)";
    }
    mostrarProductosEnCarrito();
};

function mostrarProductosEnCarrito() {
    const articulosCarrito = document.querySelector("#listaCarrito");

    articulosCarrito.innerHTML = "";

    carrito.forEach((producto, index) => {
        const productoCarrito = document.createElement('li');
        productoCarrito.classList.add('text-white', 'text-left', 'ml-4', 'mb-6', 'text-sm');
        productoCarrito.innerHTML = `${producto.nombre} <br> Cantidad: ${producto.cantidad} <button class="eliminar-btn bg-red-600 rounded-md text-white text-md font-bold ml-24 px-1">X</button> <br> Subtotal: $${producto.subTotal}
        `;

        const botonEliminar = productoCarrito.querySelector('.eliminar-btn');
        botonEliminar.addEventListener('click', (event) => {
            event.stopPropagation();
            eliminarProducto(index);
            mostrarProductosEnCarrito();
        });
        articulosCarrito.appendChild(productoCarrito);
    });


    const totalCarrito = document.createElement('div');
    totalCarrito.classList.add('text-white', 'font-bold');
    const total = calcularTotalCarrito();

    if (total > 0) {
        totalCarrito.innerHTML = `TOTAL:$${calcularTotalCarrito()} <br> <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mt-5 agregar-btn">Comprar</button>`
    } else {
        totalCarrito.innerHTML = "El carrito está vacio 😢"
    }

    totalCarrito.id = 'totalCarrito';
    articulosCarrito.appendChild(totalCarrito);
}

function eliminarProducto(index) {
    const productoEnCarrito = carrito[index];
    if (productoEnCarrito.cantidad > 1) {
        productoEnCarrito.cantidad--;
        productoEnCarrito.subTotal = productoEnCarrito.cantidad * productoEnCarrito.precio;
    } else {
        carrito.splice(index, 1);
    }

    carritoEnLocalStorage();
    actualizaContador();
    localStorage.setItem("contadorCarrito", carrito.length);
    mostrarProductosEnCarrito();

}

function actualizaContador() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    const contadorCarrito = document.querySelector("#contadorCarrito");

    const totalCantidadCarrito = carrito.reduce((total, producto) => {
        return total + producto.cantidad;
    }, 0);

    contadorCarrito.innerText = totalCantidadCarrito;

    if (totalCantidadCarrito > 0) {
        contadorCarrito.classList.remove("hidden");
    } else {
        contadorCarrito.classList.add("hidden");
    }

    localStorage.setItem("contadorCarrito", totalCantidadCarrito.toString());
}

actualizaContador()

function carritoEnLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(carrito))

}

function mostrarProductosFiltrados(productosFiltrados) {
    carousel.style.display = 'none';
    dataInfo.classList.remove('hidden');
    botonAuriculares.style.display = 'none';
    botonMouse.style.display = 'none';
    botonTeclado.style.display = 'none';
    botonWebcam.style.display = 'none';
    botonParlantes.style.display = 'none';
    textoCategoria.style.display = 'none';
    volverBtn.classList.remove('hidden')

    productosContainer.innerHTML = "";

    const hayCoincidencia = productosFiltrados.length > 0;

    if (hayCoincidencia) {
        productosFiltrados.forEach(producto => {
            const productoElemento = document.createElement('div');
            productoElemento.className = 'bg-white rounded-lg shadow-xl hover:shadow-gray-500 p-8 m-4 flex flex-col items-center border border-slate-400'
            productoElemento.innerHTML = `        
            <div class="flex flex-col items-center w-32 h-64">
            <button>
            <img class="w-36 object-cover mb-2 mx-auto rounded-t" src="${producto.image}" alt="${producto.nombre}"> 
            <h2 class="text-sm mb-1 text-center">${producto.nombre}</h2>
            <p class="font-bold text-sm mt-10">Precio: $${producto.precio}</p>          
            </button>
            </div>
            `;

            productosContainer.appendChild(productoElemento);
            mostrarFiltros();
        })
    } else {
        ocultarFiltro();
        noEncontrado.classList.remove('hidden');
        noEncontrado.innerHTML = '<p class="bg-white rounded-lg p-20 text-center">No se encontraron productos que coincidan con la búsqueda.</p>';
    }
}

function ocultarFiltro(){
    contenedorFiltros.classList.add('hidden');
}

sidenav.style.transform = "translateX(100%)";

botonAuriculares.addEventListener('click', () => {
    const categoria = botonAuriculares.getAttribute(`data-categoria`);
    mostrarCategorias(categoria);
    mostrarFiltros(categoria);
});

botonMouse.addEventListener('click', () => {
    const categoria = botonMouse.getAttribute(`data-categoria`);
    mostrarCategorias(categoria);
    mostrarFiltros(categoria);
});

botonTeclado.addEventListener('click', () => {
    const categoria = botonTeclado.getAttribute(`data-categoria`);
    mostrarCategorias(categoria);
    mostrarFiltros(categoria);
});

botonWebcam.addEventListener('click', () => {
    const categoria = botonWebcam.getAttribute(`data-categoria`);
    mostrarCategorias(categoria);
    mostrarFiltros(categoria);
});

botonParlantes.addEventListener('click', () => {
    const categoria = botonParlantes.getAttribute(`data-categoria`);
    mostrarCategorias(categoria);
    mostrarFiltros(categoria);
});


carritoCompras.addEventListener("click", () => {
    barraLateral()
});

botonBuscar.addEventListener("click", function () {
    const textoIngresado = inputBuscador.value.toLowerCase();


    if (textoIngresado !== "") {
        const productosFiltrados = productos.filter((producto) => {
            const coincideNombre = producto.nombre.toLowerCase().includes(textoIngresado);
            const coincideCategoria = producto.categoria.toLowerCase().includes(textoIngresado);
            return coincideNombre || coincideCategoria;
        });

        mostrarProductosFiltrados(productosFiltrados)
        bannerMiddle.classList.add('hidden');
    }
})

inputBuscador.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        const textoIngresado = inputBuscador.value.toLowerCase();

        if (textoIngresado !== "") {
            const productosFiltrados = productos.filter((producto) => {
                const coincideNombre = producto.nombre.toLowerCase().includes(textoIngresado);
                const coincideCategoria = producto.categoria.toLowerCase().includes(textoIngresado);
                return coincideNombre || coincideCategoria;
            })
            mostrarProductosFiltrados(productosFiltrados)
            bannerMiddle.classList.add('hidden');
        }
    }
})

botonesCategoria.forEach(boton => {
    boton.addEventListener("click", function () {
        const categoria = boton.getAttribute(`data-categoria`);
        mostrarCategorias(categoria);
        mostrarFiltros(categoria);
    })
})

volverBtn.addEventListener('click', () => {

    productosContainer.innerHTML = '';

    carousel.style.display = 'block';
    dataInfo.classList.add('hidden');
    botonAuriculares.style.display = 'block';
    botonMouse.style.display = 'block';
    botonTeclado.style.display = 'block';
    botonWebcam.style.display = 'block';
    botonParlantes.style.display = 'block';
    volverBtn.classList.add('hidden');
    textoCategoria.style.display = 'block';
    textoCategoria.style.textAlign = 'center';
    contenedorFiltros.classList.add('hidden');
    noEncontrado.classList.add('hidden');
    bannerMiddle.classList.remove('hidden');
});


window.onload=function(){
    $('#slider').slick({
    autoplay:true,
    autoplaySpeed:2000,
    arrows:false,
    prevArrow:'<button type="button" class="slick-prev"></button>',
    nextArrow:'<button type="button" class="slick-next"></button>',
    centerMode:true,
    slidesToShow:4,
    slidesToScroll:5
    });
  };