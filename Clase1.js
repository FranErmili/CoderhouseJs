//Ejercicios de tipos de datos

//1.
function ejercicio1() {
    alert("¡Hola Mundo!");
}

//2. 
function ejercicio2() {
    let frase2 = prompt("escriba: ¡Hola Mundo!");

    alert("usted escribió: " + frase2);
}

//3. 
function ejercicio3() {
    let frase3 = prompt("escriba su nombre");

    alert("¡Hola " + frase3 + "!");
}

//4. 
function ejercicio4() {
    let numerador = parseFloat(3 + 2);
    let denominador = parseFloat(2 * 5);              
    let division = (numerador / denominador);

    alert(division * division);
}

//5.
function ejercicio5() {
    let horas = parseFloat(prompt("escriba cuántas horas trabajó"));
    let precio = parseFloat(prompt("escriba el valor de su hora"));
    let paga = new Intl.NumberFormat('ar-AR').format(horas * precio);

    alert("Usted debe recibir: " + "$" + paga);
}

//6.
function ejercicio6() {
    let peso = parseFloat(prompt("escriba su peso"));
    let altura = parseFloat(prompt("escriba su altura"));
    let altura2 = (altura * altura);
    let imc = parseFloat((peso / altura2).toFixed(2));       //.toFixed (x) le decis a JS la cantidad de decimales que queres motrar

    alert("Tu índice de masa corporal es: " + imc);
}
//7. 

//8. 
function ejercicio8() {
    let inversion = parseFloat(prompt("Coloque la cantidad a invertir"));
    let interes = parseInt(prompt("Coloque el interés anual que brinda la entidad financiera"));
    let periodo = parseFloat(prompt("Coloque la cantidad de años que invertira su dinero"));
    let ganancia = parseFloat(inversion * ((interes / 100) * periodo));
    let total = (inversion + ganancia);

    let ganancia1 = new Intl.NumberFormat('ar-AR').format(ganancia)
    let total1 = new Intl.NumberFormat('ar-AR').format(total)

    alert("Usted obtendrá: $" + ganancia1);
    alert("al finalizar el plazo tendrá: $" + total1)
}

//9.
function ejercicio9() {

    let payasos = parseInt(prompt("coloque la cantidad de payasos que incluye el pedido"));
    let muñecas = parseInt(prompt("coloque la cantidad de muñecas que incluye el pedido"));
    let pesopayasos = (payasos * 112);
    let pesomuñecas = (muñecas * 75);
    let totaldelpedido = ((pesopayasos + pesomuñecas) / 1000).toFixed(2);

    alert("El peso en KG del pedido es: " + totaldelpedido + " Kg.");
}

//10. 
function ejercicio10() {
    let valordelpan = Number(3.49);
    let valorcondescuento = valordelpan - (valordelpan * 0.60);
    let cantdepan = Number(prompt("coloque cuantas piezas de pan con descuento vendió"));
    let totaldeventa = (cantdepan * valorcondescuento).toFixed(2);

    alert("El total vendido es: $" + totaldeventa);
}
