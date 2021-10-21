/*
restar(a, b)
Crear una función restar que tome como argumentos dos números y devuelva la resta de ellos

restar(3, 2) // 1
restar(10, 5.5) // 4.5
restar(3, 5) // -2


*/

let valor1 = parseInt(prompt('Ingresa el valor 1: '));
let valor2 = parseInt(prompt('Ingresa el valor 2: '));

function restar(valor1,valor2){
    let resultado = valor1 - valor2;
    return resultado;
}

document.write('La resta de: ' + valor1 + ' y ' + valor2 + ' es: '+ restar(valor1,valor2))