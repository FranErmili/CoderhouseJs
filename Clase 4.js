//Ejercicios de Control de Flujos

//1
function ejercicio1() {
    function mostrarjemplo() {
        alert("¡Hola Amiga!")
    }

    mostrarjemplo()

}

//2
function ejercicio2() {
    let nombre = prompt("Ingresar nombre")

    function mostrarnombre() {
        alert("¡Hola " + nombre + "!")
    }

    mostrarnombre()
}

//3
function ejercicio3() {
    let numero = prompt("Ingresar numero entero positivo")


}

//4
function ejercicio4() {

    function calculoiva(parametro1) {

        if (!parametro1) {
            return 21 / 100
        } else {
            return iva / 100
        }
    }

    let factura = Number(prompt("Coloque monto del producto sin IVA"))
    let iva = Number(prompt("Coloque el porcentaje de IVA a aplicar"))
    let iva21 = calculoiva(iva)
    
    alert(factura + factura * iva21)
}


//5
function ejercicio5() {

}

//6
function ejercicio6() {

}
//7
function ejercicio7() {

}
