// Desafíos:
// Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];
console.log(listaGenerica);
// Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python']
console.log(lenguagesDeProgramacion);
// Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguagesDeProgramacion.push('Java');
lenguagesDeProgramacion.push('Ruby');
lenguagesDeProgramacion.push('GoLang');
console.log(lenguagesDeProgramacion);
// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function mostrarConsola(elementoArray) {
    for (let i = 0; i < elementoArray.length; i++) {
        console.log(elementoArray[i])
        
    }
}
mostrarConsola(lenguagesDeProgramacion);
// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
function inversoConsola(arrayInv) {
    for (let i = arrayInv.length -1; i > 0; i--) {
        console.log(arrayInv[i])        
    }
}
inversoConsola(lenguagesDeProgramacion);
// Crea una función que calcule el promedio de los elementos en una lista de números.
let notas = [4,8,10];
function calcularPromedio(numero) {
    let promedio = numero.length
    let total = 0;
    for (let i = 0; i < numero.length; i++) {
        total += numero[i];              
    }
    return console.log(total/promedio)
}
calcularPromedio(notas);
// Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
function grandePequeno(array) {
    // con métodos seria asi:
    // let pequeno = Math.min(...array);
    // let grande = Math.max(...array);
    //Con un for of:
    //infinity se usa para hacer mejor una operacion dond esta incluida el cero
    let grande  = -Infinity;
    let pequeno = Infinity;
    for (let numero of array) {
        if (numero > grande) {
            grande = numero;
        };
        if (numero < pequeno) {
            pequeno = numero
        }
    };
    return console.log (grande, pequeno);

}
grandePequeno(notas); 
// Crea una función que devuelva la suma de todos los elementos en una lista.
function suma(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
        suma += lista[i];        
    }
    return console.log(suma);
}
suma(notas);
// Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
function posiciónLista(lista, parametro) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === parametro) {
            return i;
        }
        return -1;
             
    };
};

let posición =  posiciónLista(notas, 10);
console.log(posición);
// Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
// Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.