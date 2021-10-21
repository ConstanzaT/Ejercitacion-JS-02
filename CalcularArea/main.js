/*
calcularAreaTriangulo(base, altura)
Crear una función calcularAreaTriangulo que tome como argumentos la base y la altura de un triángulo y devuelva el área del mismo


calcularAreaTriangulo(3, 4) // 6
calcularAreaTriangulo(5, 6) // 40


*/

let base = parseInt(prompt('Ingresa la base de un triangulo: '));
let altura = parseInt(prompt('Ingresa la altura del triangulo '));

function calcularAreaTriangulo(base,altura){
    let area = base * altura;
    return area;
}

document.write('El area del triangulo es: ' + calcularAreaTriangulo(base,altura))