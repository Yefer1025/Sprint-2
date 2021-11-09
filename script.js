//Declaramos variables
var operandoa;
var operandob;
var operacion;


function init() {
    //variables
    document.querySelector(".calculadora").addEventListener('click', () => {
        var resultado = document.getElementById('resultado');
        var reset = document.getElementById('reset');
        var suma = document.getElementById('suma');
        var resta = document.getElementById('resta');
        var multiplicacion = document.getElementById('multiplicacion');
        var division = document.getElementById('division');
        var igual = document.getElementById('igual');
        var uno = document.getElementById('uno');
        var dos = document.getElementById('dos');
        var tres = document.getElementById('tres');
        var cuatro = document.getElementById('cuatro');
        var cinco = document.getElementById('cinco');
        var seis = document.getElementById('seis');
        var siete = document.getElementById('siete');
        var ocho = document.getElementById('ocho');
        var nueve = document.getElementById('nueve');
        var cero = document.getElementById('cero');
        var punto = document.getElementById('punto');
        var porcentaje = document.getElementById('porcentaje');
        var suprimir = document.getElementById('suprimir');
        var mas = document.getElementById('mas');
    });

}

//Eventos de click
uno.onclick = function (e) {
    resultado.textContent = resultado.textContent + "1";
}
dos.onclick = function (e) {
    resultado.textContent = resultado.textContent + "2";
}
tres.onclick = function (e) {
    resultado.textContent = resultado.textContent + "3";
}
cuatro.onclick = function (e) {
    resultado.textContent = resultado.textContent + "4";
}
cinco.onclick = function (e) {
    resultado.textContent = resultado.textContent + "5";
}
seis.onclick = function (e) {
    resultado.textContent = resultado.textContent + "6";
}
siete.onclick = function (e) {
    resultado.textContent = resultado.textContent + "7";
}
ocho.onclick = function (e) {
    resultado.textContent = resultado.textContent + "8";
}
nueve.onclick = function (e) {
    resultado.textContent = resultado.textContent + "9";
}
cero.onclick = function (e) {
    resultado.textContent = resultado.textContent + "0";
}
reset.onclick = function (e) {
    resetear();
}
suma.onclick = function (e) {
    operandoa = resultado.textContent;
    operacion = "+";
    limpiar();
}
resta.onclick = function (e) {
    operandoa = resultado.textContent;
    operacion = "-";
    limpiar();
}
multiplicacion.onclick = function (e) {
    operandoa = resultado.textContent;
    operacion = "*";
    limpiar();
}
division.onclick = function (e) {
    operandoa = resultado.textContent;
    operacion = "/";
    limpiar();
}
mas.onclick = function (e) {
    operandoa = resultado.textContent;
    operacion = "+/-"
    resolver();
}
igual.onclick = function (e) {
    operandob = resultado.textContent;
    resolver();
}
punto.onclick = function (e) {
    resultado.textContent = resultado.textContent + ".";
}
porcentaje.onclick = function (e) {
    operandoa = resultado.textContent;
    operacion = "%";
    resolver();
}
suprimir.onclick = function (e) {
    borrar();
}
function borrar() {
    var value = resultado.textContent;
    var newValue = value.substring(0, value.length - 1);
    resultado.textContent = newValue;
}
function limpiar() {
    resultado.textContent = "";
}

function resetear() {
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}

function resolver() {
    var res = 0;
    switch (operacion) {
        case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
            break;

        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;

        case "*":
            res = parseFloat(operandoa) * parseFloat(operandob);
            break;

        case "/":
            res = parseFloat(operandoa) / parseFloat(operandob);
            break;
        case "%":
            res = parseFloat(operandoa) / 100;
            break;
        case "+/-":
            res = parseFloat(operandoa) * (-1);
            break;
    }
    resetear();
    resultado.textContent = res;
}