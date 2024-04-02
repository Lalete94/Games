
let mensaje = "Ingrese una opcion:\n1 - Agregar al carrito\n2 - Consultar total\n3 - Terminar compra\n0 - Salir"
let opcion
let producto = "Selecciona un producto\n1 - God Of War $55000\n2 - Fifa $50000\n3 - Resident Evil 7 $25000\n4 - Volver"
let total = 0

do {
    opcion = Number(prompt(mensaje))
    if (opcion === 1) {
        total = agregarProductosAlCarrito(total)
    } else if (opcion === 2) {
        alert("Su total hasta ahora es: " + "$" + total)
    } else if (opcion === 3) {
        alert("Su compra total es de: " + "$" + total + "\n¿Desea concretar la compra?")
        alert("Su compra ha sido realizada con exito." + "\n¡Gracias por preferirnos!")
        total = 0
    }
} while (opcion !== 0 && opcion !== 3)

function agregarProductosAlCarrito(total) {
    let opcionJuegos = Number(prompt(producto))
    if (opcionJuegos === 1) {
        let cantidad = Number(prompt("Ingrese cantidad en unidad"))
        total = total + cantidad * 55000
    } else if (opcionJuegos === 2) {
        let cantidad = Number(prompt("Ingrese cantidad en unidad"))
        total = total + cantidad * 50000
    } else if (opcionJuegos === 3) {
        let cantidad = Number(prompt("Ingrese cantidad en unidad"))
        total = total + cantidad * 25000
    }
    return total
}