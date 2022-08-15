class Producto {
    constructor (id, nombre, imagen, descripcion, precio, terminacion) {
        this.id = id
        this.nombre = nombre
        this.imagen = imagen
        this.descripcion = descripcion
        this.precio = precio
        this. terminacion = terminacion
    }
}

class Terminaciones {
    constructor (id, nombre, valor) {
        this.id = id
        this.nombre = nombre
        this.valor = valor
    }
}

class Carrito {
    constructor (id,) {
        this.id = id
        this.productos = []
    }

    calcularTotal () {
        let total = 0
        for (let i = 0; i < this.productos.length; i++){
            total = total + this.productos[i].precio
        }
        return total
    }
}

let terminaciones = []
let catalogo = []
let carrito = new Carrito (1)

let contenedorProducto
let botones


let producto1 = new Producto (1, "Espejo Pi", "espejoPi.png", "El marco está fabricado en planchuela de hierro de 5 cm de ancho pintada al horno con pintura epoxi. Tiene fondo de madera que lo hace muy seguro y el espejo es de 3 o 4 mm dependiendo su tamaño.", 15000, `${terminaciones[0,1]}`)
let producto2 = new Producto (2, "Estante Versátil", "estanteVersatil.png", "Fabricados en chapa plegada y pintados al horno con pintura epoxi blanca o negra. Las medidas son 80cm de frente, 20cm de altura y 15cm de profundidad. El estante se entrega con tarugos, tornillos y los embellecedores en color platil. Stock para entrega inmediata.", 25000)
let producto3 = new Producto (3, "Tirador Semi", "tiradorSemi.png", "Tiradores de chapa hechos a mano y pintados con epoxi color dorado. Miden 15x7,5cm y se pueden colocar tanto en puertas como en tapas de cajón.", 85444)

catalogo.push (producto1)
catalogo.push (producto2)
catalogo.push (producto3)

let terminacion1 = new Terminaciones (1, "diametro 110cm", 100)
let terminacion2 = new Terminaciones (2, "diametro 140 cm", 135)
let terminacion3 = new Terminaciones (3, "largo 110 cm", 75)
let terminacion4 = new Terminaciones (4, "largo 140 cm", 90)
let terminacion5 = new Terminaciones (5, "pintado al horno", 25)
let terminacion6 = new Terminaciones (6, "crudo", 18)

terminaciones.push (terminacion1)
terminaciones.push (terminacion2)
terminaciones.push (terminacion3)
terminaciones.push (terminacion4)
terminaciones.push (terminacion5)
terminaciones.push (terminacion6)


function inicializarElementos() {
    contenedorProducto = document.getElementById ("card")
}

function hacerContenedor() {
    contenedorProducto.innerHTML =""
    catalogo.forEach ((producto) => {
        let columna = document.createElement("div")
        columna.className = "card col-md-3"
        columna.innerHTML =`
        <div style="width: 18rem;">
            <img src="./assets/img/${producto.imagen}" class="card-img-top" alt="img-producto">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">${producto.descripcion}</p>

                <div class="form-group">
                    <label for="material">Seleccione el tipo de terminación:</label>
                    <select class="form-control" id="material">
                        <option>${terminaciones[0].nombre}</option>
                        <option></option>
                        <option></option>
                    </select>
                </div>
                
                <a href="#" id="${producto.id}" class="btn btn-dark boton-compra">Agregar al carrito</a>
            </div>
        </div>
            `
        contenedorProducto.append (columna)
    })
    
    botones = document.querySelectorAll(".boton-compra")
}

function mostrarCarrito() {
    let divCarrito = document.querySelector("#carrito")
    divCarrito.innerHTML = `El total de su presupuesto es de: <br>$${carrito.calcularTotal()}`
}

function renovarStorage () {
    localStorage.removeItem ("carrito")
    localStorage.setItem ("carrito", JSON.stringify (carrito))
}

function obtenerStorage() {
    let carritoAlmacenado = localStorage.getItem ("carrito")
    if (carrito != null) {
        carrito = JSON.parse (carritoAlmacenado)
        carrito = carrito.map(()=> new Carrito (carrito.id, carrito.productos))
    }

    renovarStorage()
    
}

function agregarProductos() {
    botones.forEach (boton => {
        boton.addEventListener ("click", (e) => {
            let productoSeleccionado = catalogo.find (producto => producto.id == e.target.id)
            carrito.productos.push (productoSeleccionado)
            mostrarCarrito()
            obtenerStorage()

        })
    })
}   




function main() {
    inicializarElementos()
    hacerContenedor()
    agregarProductos()
}

main()

//solucionar orden de inicializacion//



