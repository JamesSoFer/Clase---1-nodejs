/* Tarea: leer dos números entero y muestre la división del primer 
número entre el segundo. Recordar que la división entre 0 da un error. */

// let a = prompt("Introduce un número entero");
// let b = prompt("Introduce un número entero");

let a = 10;
let b = 50;

function dividir(a, b){
    if (a == 0 || b == 0){
        console.log("No se pueden realizar diviciones entre 0");
    } else {
        if (a % 1 == 0 && b % 1 == 0) {
            // console.log("Es un numero entero");
            let resultado = a / b;
            console.log('La resultado de la division es: ' + resultado);
        } else {
            console.log("No es un numero entero");
        }
    }
}

dividir(a,b);

