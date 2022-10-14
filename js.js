function comenzar() {
    let cant_personas = Number(prompt("¿Cuántas personas serán parte de la división final?"))

    for (let i = 1; i <= cant_personas; i++) {
        let nombre = prompt("Nombre de la persona " + i)
        let gasto = Number(prompt("¿Cúanto gastó " + nombre + "?"))
    }

    alert("Este bucle no es funcional lo hice para mostrar el uso práctico. La idea es que se creen variables dinámicas con arrays y así guardar cada valor ingresado. Hagamos de cuenta que colocaste 4 en el primer prompt y seguimos con la operación :)")

    let nombre1 = prompt("Nombre de la primer persona")
    let gasto1 = Number(prompt("¿cuánto gastó " + nombre1 + "?"))

    let nombre2 = prompt("Nombre de la primer persona")
    let gasto2 = Number(prompt("¿cuánto gastó " + nombre2 + "?"))

    let nombre3 = prompt("Nombre de la primer persona")
    let gasto3 = Number(prompt("¿cuánto gastó " + nombre3 + "?"))

    let nombre4 = prompt("Nombre de la primer persona")
    let gasto4 = Number(prompt("¿cuánto gastó " + nombre4 + "?"))

    let total = (gasto1 + gasto2 + gasto3 + gasto4)
    let division = (total / 4).toFixed(2)

    alert("El total de los gastos fueron $" + total)
    alert("Cada uno debía gastar $" + division)

    let dif1 = division - gasto1
    let dif2 = division - gasto2
    let dif3 = division - gasto3
    let dif4 = division - gasto4

    if (gasto1 < division) {
        alert(nombre1 + " debe pagar $" + dif1)
    } else {
        alert(nombre1 + " debe recibir $" + dif1)
    }
    
    if (gasto2 < division) {
        alert(nombre2 + " debe pagar $" + dif2)
    } else {
        alert(nombre2 + " debe recibir $" + dif2)
    }
    
    if (gasto3 < division) {
        alert(nombre3 + " debe pagar $" + dif3)
    } else {
        alert(nombre3 + " debe recibir $" + dif3)
    }

    if (gasto4 < division) {
        alert(nombre4 + " debe pagar $" + dif4)
    } else {
        alert(nombre4 + " debe recibir $" + dif4)
    }
}