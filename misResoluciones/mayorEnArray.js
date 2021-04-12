// Ejercicio 2
// Dado un array de numeros enteros positivos, determinar el segundo mayor
// [3,4,6,6,5,5] el segundo mayor: 5

const array = [3,4,6,6,5,5];

function encontrarSegundoMayor(array) {
    let mayor = 0;
    let segundoMayor = 0;

    array.forEach(element => {
        if (element > mayor) {
            segundoMayor = mayor;
            mayor = element;        
        }
        else if (element > segundoMayor && element != mayor) {
            segundoMayor = element;
        }
    });

    console.log('Mayor = ', mayor);
    console.log('Segundo mayor = ', segundoMayor);
}

function encontrarTercerMayor(array) {
    let mayor = 0;
    let segundoMayor = 0;
    let tercerMayor = 0;

    array.forEach(element => {
        if (element > mayor) {
            tercerMayor = segundoMayor;
            segundoMayor = mayor;            
            mayor = element;        
        }
        else if (element != mayor && element > segundoMayor) {
            tercerMayor = segundoMayor;
            segundoMayor = element;
        }
        else if (element != mayor && element != segundoMayor && element > tercerMayor) {
            tercerMayor = element;
        }
    });

    console.log('Mayor = ', mayor);
    console.log('Segundo mayor = ', segundoMayor);
    console.log('Tercer mayor = ', tercerMayor);
}

encontrarSegundoMayor(array);
console.log('-----------------------------------');
encontrarTercerMayor(array);