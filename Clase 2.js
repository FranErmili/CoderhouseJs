//Ejercicios de Control de Flujos

//1
function ejercicio1() {
    let edad = prompt("coloque su edad");

    if (edad >= 18) {
        alert("¡Eres mayor de edad! Puedes ingresar.");
    }
    else {
        alert("¡OH NO! Debes ser mayor de edad para ingresar.");
    }
}

//2
function ejercicio2() {
    let contraseña = prompt("Cree una contraseña").toLocaleLowerCase(); //pasa todo el string a minuscula (toLocaleUppercase a mayuscula)
    let validacion = prompt("Ingrese su contraseña");

    if (validacion == contraseña) {
        alert("Su contraseña es válida");
    }
    else {
        alert("Error en los datos ingresados");
    }
}

//3
function ejercicio3() {
    let num1 = Number(prompt("Coloque un número"));
    let num2 = Number(prompt("Coloque otro número"));
    let division = Number(num1 / num2);

    if (division == 0) {
        alert("El resultado no puede ser 0");
    }
    else {
        alert(division);
    }
}

//4
function ejercicio4() {
    let numero = prompt("Introduce un número entero");

    if (numero % 2 == 0) {
        alert("Ese número es par");
    }
    else {
        alert("Ese número es impar");
    }
}

//5
function ejercicio5() {
    let edad = Number(prompt("Coloque su edad"));
    let ingresos = Number(prompt("Coloque sus ingresos"));

    if ((edad > 16) && (ingresos > 1000)) {
        alert("Debes tributar impuestos");
    }
    else {
        alert("No debes tributar impuestos");
    }
}

//6
function ejercicio6() {
    let nombre = prompt("Coloque su nombre");
    let sexo = prompt("Coloque su sexo");

    if ((sexo == "femenino" && nombre < "m") || (sexo == "masculino" && nombre > "n")) {
        alert("Usted pertenece al grupo A");
    }
    else {
        alert("Usted pertenece al grupo B");
    }
}
//7
function ejercicio7() {
    let renta = Number(prompt("Coloque su renta anual para saber su tramo impositivo"));

    if (renta <= 10000) {
        alert("Su tipo impositivo es del 5%");
    }
    else if (renta > 10000 && renta <= 20000) {
        alert("Su tipo impositivo es del 15%");
    }
    else if (renta > 20000 && renta <= 35000) {
        alert("Su tipo impositivo es del 20%");
    }
    else {
        alert("Su tipo impositivo es del 45%");
    }
}

//8
function ejercicio8() {
    let edad = Number(prompt("Coloque su edad para saber la tarifa"));

    if (edad <= 4) {
        alert("Para menores de 4 años la entrada es gratis");
    }
    else if ((edad > 4) && (edad <= 12)) {
        alert("Entre 4 y 12 años deben abonar EU$5");
    }
    else if ((edad > 12) && (edad <= 17)) {
        alert("Entre 12 y 17 años deben abonar EU$8");
    }
    else {
        alert("Los mayores de 18 años abonan EU$10");
    }
}
