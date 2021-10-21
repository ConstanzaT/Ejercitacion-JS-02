/*
dividir(a, b)
Crear una función dividir que tome como argumentos dos números y devuelva la suma de ellos

dividir(12, 3) // 4
dividir(8, 4) // 2





*/

let valor1 = parseInt(prompt('Ingresa el valor 1: '));
let valor2 = parseInt(prompt('Ingresa el valor 2: '));

function dividir(valor1,valor2){
    let resultado = valor1 / valor2;
    return resultado;
}

document.write('La división de: ' + valor1 + ' y ' + valor2 + ' es: '+ dividir(valor1,valor2))