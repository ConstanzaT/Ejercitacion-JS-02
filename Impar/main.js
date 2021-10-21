/*
esImpar(numero)
Crear una función esImpar que tome como argumento un número y devuelva true si dicho números es impar o false si no lo es

TIP: un número es impar si divido por 2 el resto (o módulo) de esa operación no es 0


esImpar(2) // false
esImpar(3) // true


*/

let numero = parseInt(prompt('Ingresa un valor para saber si es impar: '));


function esImpar(){

    if(numero % 2 != 0){
        return true;

    }else{
        return false;
    }
}

document.write('Retornó: '+esImpar(numero))