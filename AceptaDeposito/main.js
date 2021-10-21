/*
aceptaDeposito(monto)
Crear una función aceptaDeposito que tome como argumento un número monto y devuelva true si el monto es divisible por 10 o false si no lo es

aceptaDeposito(440) // true
aceptaDeposito(123) // false
aceptaDeposito(500.50) // false
aceptaDeposito(1000) // true



*/

let monto = parseInt(prompt('Ingrese el monto: '));

function aceptaDeposito(monto){
    
    if(monto % 10 == 0){
        return true;

    }else{
        return false;
    }
}

document.write('Es divisible por 10: ' + aceptaDeposito(monto))