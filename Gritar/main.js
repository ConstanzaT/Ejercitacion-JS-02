/*
gritar(str)
Crear una función gritar que tome como argumento un string y devuelva el mismo string con un signo de exclamación al principio y al final del mismo

gritar('hola') // ¡hola!
gritar('aaaaaa') // ¡aaaaaa!




*/

//ingreso el string
let str = prompt('Ingresa un texto: ');

//creo funcion gritar
function gritar(str){

    //defino una variable que contenga el parametro y la concateno a los signos
    let grito = '¡'+str+'!';
    return grito //va a devolver el string concatenado 
    
}

//llamo a la funcion y le paso el parametro que ingresó el usuario
document.write(gritar(str))