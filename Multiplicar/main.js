/*
multiplicar(a, b)
Crear una función multiplicar que tome como argumentos dos números y devuelva la multiplicación de ellos

multiplicar(2, 3) // 6
multiplicar(4, 0.5) // 2



*/

let valor1 = parseInt(prompt('Ingresa el valor 1: '));
let valor2 = parseInt(prompt('Ingresa el valor 2: '));

function multiplicar(valor1,valor2){
    let resultado = valor1 * valor2;
    return resultado;
}

document.write('La multiplicación de: ' + valor1 + ' y ' + valor2 + ' es: '+ multiplicar(valor1,valor2))