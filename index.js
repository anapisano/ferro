class Producto {
    constructor (id, nombre, imagen, descripcion) {
        this.id = id
        this.nombre = nombre
        this.imagen = imagen
        this.descripcion = descripcion
    }
}

class Carrito {
    constructor (id,) {
        this.id = id
        this.productos = []
    }
}

let catalogo = []
let carrito = new Carrito (1)

let contenedorProducto
let botones


let producto1 = new Producto (1, "Espejo Pi", "espejoPi.png", "El marco está fabricado en planchuela de hierro de 5 cm de ancho pintada al horno con pintura epoxi. Tiene fondo de madera que lo hace muy seguro y el espejo es de 3 o 4 mm dependiendo su tamaño.")
let producto2 = new Producto (2, "Estante Versátil", "estanteVersatil.png", "Fabricados en chapa plegada y pintados al horno con pintura epoxi blanca o negra. Las medidas son 80cm de frente, 20cm de altura y 15cm de profundidad. El estante se entrega con tarugos, tornillos y los embellecedores en color platil. Stock para entrega inmediata.")
let producto3 = new Producto (3, "Tirador Semi", "tiradorSemi.png", "tiradores de chapa hechos a mano y pintados con epoxi color dorado. Miden 15x7,5cm y se pueden colocar tanto en puertas como en tapas de cajón.")

catalogo.push (producto1)
catalogo.push (producto2)
catalogo.push (producto3)

function inicializarElementos() {
    contenedorProducto = document.getElementById ("card")
    botones = document.querySelectorAll(".boton-compra")
}

function hacerContenedor() {
    contenedorProducto.innerHTML =""
    catalogo.forEach ((producto) => {
        let columna = document.createElement("div")
        columna.innerHTML =`
        <div class="card col-md-4" style="width: 18rem;">
            <img src="./assets/img/${producto.imagen}" class="card-img-top" alt="img-producto">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">${producto.descripcion}</p>
                
                <a href="#" id="${producto.id}" class="btn btn-dark boton-compra">Agregar al carrito</a>
            </div>
        </div>
            `
        contenedorProducto.append (columna)
    })
}

let arrayDeBotones = Array.from(botones)

function agregarProductos() {
    arrayDeBotones.forEach (boton => {
        boton.addEventListener ("click", (e) => {
            let productoSeleccionado = catalogo.find (producto => producto.id == e.target.id)
            carrito.productos.push (productoSeleccionado)
            console.log(productoSeleccionado)
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



