//Ejercicios de Estructuras Iterativas

//1
function ejercicio1() {
    let palabra = prompt("Pone una palabra");

    for (let i = 1; i <= 10; i++) {
        console.log(palabra);
    }
}

//2
function ejercicio2() {
    let edad = Number(prompt("Pone tu edad"));

    for (let i = 1; i <= edad; i++) {
        console.log(i);
    }
}

//3
function ejercicio3() {
    let numero = Number(prompt("Pone un número positivo"));
    let salida = "";

    for (let i = 1; i <= numero; i++) {     // Esta variable de salida dentro del for hace solo esta operación repetitiva 
        salida = salida + i + ", ";
    }
    console.log(salida);                    // Y luego la muestra una vez en consola.
}

//4
function ejercicio4() {
    let numero = Number(prompt("Pone un número positivo"));
    let salida = "";
    for (let i = numero; i >= 1; i--) {   // Esta estructura va a comenzar desde el valor que puso el usuario
        salida = salida + i + ", "        // y la va a restar tantas veces hasta que llegue a 1.
    }
    console.log(salida);
}

//5
function ejercicio5() {
    let capital = Number(prompt("Coloque la cantidad a invertir"));
    let interes = Number(prompt("Coloque el interés anual"));
    let años = Number(prompt("Coloque los años que invertira"));

    for (let i = 1; i <= años; i++) {

        capital = parseFloat((capital + (capital * interes / 100)).toFixed(2));
        let resultado = new Intl.NumberFormat('es-ES').format(capital);
        console.log("Año: ", i, " - $", resultado);
    }
}

//6
function ejercicio6() {
    let numero = Number(prompt("Coloque un numero para ver su tabla de multiplicar del 1 al 10"));
    for (let i = 1; i <= 10; i++) {
        console.log(numero, " multiplicado por ", i, "es igual a = ", (numero * i));
    }
}

//7
function ejercicio7() {
    let contraseña = prompt("Cree su contraseña");

    cont = 0;

    while (cont < 3) {
        let checkcontraseña = prompt("Coloque su contraseña");
        if (checkcontraseña == contraseña) {
            alert("Los datos son correctos");
            break;
        }
        else {
            cont++;
            alert('Error. Los datos son incorrectos');
        }

        if (cont == 3) {
            alert('Lo siento, has agotado el número de intentos');
        }
    }
}


//8
function ejercicio8() {

}
