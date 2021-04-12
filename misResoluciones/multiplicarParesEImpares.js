// Ejercicio 1
// Dato un array de numeros enteros, multiplicar por 2 si es par y por 3 si es impar

const array = [3,4,6,6,5,5]

function multiplicar(array) {
    return array.map(
        element => {
            if (element % 2 == 0) {
                return element * 2;
            }
            else return element * 3;
        }
    )
}

console.log(array);
console.log(multiplicar(array));