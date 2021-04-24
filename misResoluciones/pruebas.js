//1 - REPLACE
// Reemplaza string por otro string
const nombres = "Joaquin Lopez; Ramiro Garcia";
console.log(nombres.replace('Lopez', 'Garcia'))
/////////////////////////////////////////////////

//2 - SPLIT 
// Generar un array a partir de un string
// Divide el string según el parametro que quiera uno
// Devuelve un nuevo Array
console.log(nombres.split(';'));
// Split ()[]
// Me quedo con la [posicion] del array que genera el split 
console.log(nombres.split(';')[1]);
/////////////////////////////////////////////////

//3 - SLICE 
// Devuelve una copia de una parte de un array
// (0, 1) --> De la posición 0 a la pos 1 (1 no lo incluye)
// (0, -1) --> el -1 es TODO el array -1 (elimina la última posición)
let nombres2 = "Joaquin Lopez; Ramiro Garcia; Florencia Perez";
let arrayNombres = nombres2.split(';'); // Convierte a ARRAY
console.log(arrayNombres.slice(0,1)); // Joaquin - RAMIRO y FLORENCIA NO!
console.log(arrayNombres.slice(0,-1)); // Joaquin y Ramiro -- FLORENCIA NO!
/////////////////////////////////////////////////

//4 - SPLICE
// Cambia el contenido de un array eliminar elementos existentes
// Agrega nuevos elementos si se quiere
let nombres3 = "Joaquin Lopez; Ramiro Garcia; Florencia Perez";
let arrayNombres3 = nombres3.split(';');
let arrayNombres4 = nombres3.split(';');
let arrayNombres5 = nombres3.split(';');

// Empieza desde posicion 0, remueve elementos que se indiquen (ej:1), y agrega Mario Perez
console.log("Splice 1 -->");
arrayNombres3.splice(0,1,'Mario Perez');
console.log(arrayNombres3);

// Empieza desde posicion 0, remueve elementos que se indiquen (ej:1)
console.log("Splice 2 -->")
arrayNombres4.splice(0,1);
console.log(arrayNombres4);

// dentro de console log, devuelve el elemento que se elimino
console.log("Splice 3 -->")
console.log(arrayNombres5.splice(0,1));
/////////////////////////////////////////////////

// 5 - MAP
// Crea un nuevo array, luego de iterar cada uno de los elementos de un array existente
// Ej: itera todos los 'arrayNombres' y les agrega un numero al nombre
// Devuelve un nuevo array 
const arrayNombres = [
                        {Nombre: "Joaquin Lopez"},
                        {Nombre: "Ramiro Garcia"},
                     ];
let num = 1;

let nuevoArrayNombres = arrayNombres.map(    
    element => (
        {Nombre: (num++) + " - " + element.Nombre }
    )
)          
console.log(nuevoArrayNombres);
/////////////////////////////////////////////////


// 6 - FILTER
// Crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
const arrayNombres2 = [
    {Nombre: "Joaquin Lopez"},
    {Nombre: "Ramiro Garcia"},
 ];

 console.log(
     arrayNombres2.filter(element => element.Nombre === "Joaquin Lopez")
 );

 /////////////////////////////////////////////////


// 7 - REDUCE
// Totaliza valor de todos los elementos de un array
// NO OLVIDAR ULTIMO PARAMETRO QUE ES EL VALOR INICIAL
const arrayNombres3 = [
    {Nombre: "Joaquin Lopez", Edad: 15},
    {Nombre: "Ramiro Garcia", Edad: 20},
 ];

console.log(
     arrayNombres3.reduce(
         (totalEdad, elemento) => totalEdad + elemento.Edad, 0 // Es el valor inicial de totalEdad
     )
);
 /////////////////////////////////////////////////
 

 // 8 - AGREGAR NUEVO ATRIBUTO A TODOS LOS OBJETOS DE UN ARRAY
 const arrayNombres4 = [
    {Nombre: "Joaquin Lopez", Edad: 15},
    {Nombre: "Ramiro Garcia", Edad: 20},
 ];

 console.log(
    arrayNombres4.map( element =>
        ({
            ...element, EstadoCivil: 'soltero'
        })
    )
 );
 /////////////////////////////////////////////////


 // 9 - SORT
 // ORDENAR SEGUN EDAD (int)
 // ORDERNAR SEGUN NOMBRE (string)

 const arrayNumeros = [1,2,1,2,1,3,2];
 // Ordena el array de menor a mayor
 console.log(arrayNumeros.sort())
 
 const arrayNombres5 = [
    {Nombre: "Wilson Rodriguez", Edad: 15},
    {Nombre: "Joaquin Lopez", Edad: 7},
    {Nombre: "Ramiro Garcia", Edad: 20},
    {Nombre: "Joaquin Lopez", Edad: 7.5},

 ];
console.log("ORDENA POR EDAD:")
console.log(arrayNombres5.sort((obj1, obj2) => obj1.Edad - obj2.Edad));

console.log("ORDENA POR NOMBRE OPC 1:")
console.log(arrayNombres5.sort((obj1, obj2) => obj1.Nombre > obj2.Nombre ? 1: -1))

console.log("ORDENA POR NOMBRE OPC 2:")
console.log(
    arrayNombres5.sort((a, b) => {
        let fa = a.Nombre.toLowerCase(),
            fb = b.Nombre.toLowerCase();
    
        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
    })
);