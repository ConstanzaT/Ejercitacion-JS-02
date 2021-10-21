/*
esPar(numero)
Crear una función esPar que tome como argumento un número y 
devuelva true si dicho números es par o false si no lo es

TIP: un número es par si divido por 2 el resto (o módulo) de esa operación es 0
esPar(2) // true
esPar(3) // false

*/

let numero = parseInt(prompt('Ingresa un valor para saber si es par: '));


function esPar(){

    if(numero % 2 == 0){
        return true;

    }else{
        return false;
    }
}

document.write('Retornó: '+esPar(numero))