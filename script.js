let productos = [
    { id: 2, nombre: "God of War", categoria: "Accion", stock: 2, precio: 55000, rutaimagen: "God-of-war.jpg"},
    { id: 5, nombre: "Fifa24", categoria: "Deportes", stock: 7, precio: 50000, rutaimagen: "fifa.jpg"},
    { id: 7, nombre: "Resident Evil 7", categoria: "Terror", stock: 4, precio: 25000, rutaimagen: "resident-evil.jpg"},
    { id: 9, nombre: "The last uf as", categoria: "Terror", stock: 1, precio: 30000, rutaimagen: "The.jpg"},
    { id: 12, nombre: "Call of duty", categoria: "Accion", stock: 3, precio: 35000, rutaimagen: "call.jpg"},
]



const listar = (lista, propiedad1, propiedad2) => lista.map(producto => producto[propiedad1] + " - " + producto[propiedad2]).join("\n")

let carrito = []
let opcionMenu

do {
    opcionMenu = Number(prompt("1 - Agregar al carro\n2 - Filtrar por categoria\n0 - Salir"))
    if (opcionMenu === 1) {
        agregarAlCarrito (productos, carrito)
    }else if (opcion === 2){
        filtrarCategoria(productos)
    }
} while (opcionMenu !== 0);

function filtrarCategoria(productos){
    let categoria = prompt("Seleccione Categoria")
    let productosFiltrados = productos.filter(producto => producto.categoria === categoria)
    let salida = productosFiltrados.map(producto => producto.nombre).join("\n")
    alert(salida)
}

function agregarAlCarrito(productos, carrito) {
opcion = Number(prompt(listar(productos, "id", "nombre")))

    let buscarProducto = productos.find(producto => producto.id === opcion)
    let posicionProducto = carrito.findIndex(producto => producto.id === opcion)

    if(buscarProducto){
        if(posicionProducto !== -1){
            carrito[posicionProducto].unidades++
            carrito[posicionProducto].subtotal = carrito [posicionProducto].precioUnidad * carrito[posicionProducto].unidades
        } else {
            carrito.push({
                id: buscarProducto.id,
                nombre: buscarProducto.nombre,
                precioUnidad: buscarProducto.precio,
                unidades: 1,
                subtotal: buscarProducto.precio
            })
        }
    } else {
        alert("ID incorrecto")
    }
}
