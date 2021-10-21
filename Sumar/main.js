/*
sumar(a, b)
Crear una función sumar que tome como argumentos dos números y devuelva la suma de ellos

sumar(2, 3) // 5
sumar(1.2, 3.4) // 4.6
sumar(3, -5) // -2

*/

let valor1 = parseInt(prompt('Ingresa el valor 1: '));
let valor2 = parseInt(prompt('Ingresa el valor 2: '));

function sumar(valor1,valor2){
    let resultado = valor1 + valor2;
    return resultado;
}

document.write('La suma de: ' + valor1 + ' y ' + valor2 + ' es: '+ sumar(valor1,valor2))