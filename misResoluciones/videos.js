const str = `<ul>
  <li data-time="5:17">Flexbox Video</li>
  <li data-time="8:22">Flexbox Video</li>
  <li data-time="3:34">Redux Video</li>
  <li data-time="5:23">Flexbox Video</li>
  <li data-time="7:12">Flexbox Video</li>
  <li data-time="7:24">Redux Video</li>
  <li data-time="6:46">Flexbox Video</li>
  <li data-time="4:45">Flexbox Video</li>
  <li data-time="4:40">Flexbox Video</li>
  <li data-time="7:58">Redux Video</li>
  <li data-time="11:51">Flexbox Video</li>
  <li data-time="9:13">Flexbox Video</li>
  <li data-time="5:50">Flexbox Video</li>
  <li data-time="5:52">Redux Video</li>
  <li data-time="5:49">Flexbox Video</li>
  <li data-time="8:57">Flexbox Video</li>
  <li data-time="11:29">Flexbox Video</li>
  <li data-time="3:07">Flexbox Video</li>
  <li data-time="5:59">Redux Video</li>
  <li data-time="3:31">Flexbox Video</li>
</ul>`;
// Parsear datos
// Obtener el total de segundos de los videos de tipo Redux
// Tip: Obtener un array de objetos, donde cada objeto sea un video
// {min:5, seg: 59, tipo: 'Redux Video'}



function convertirObjetos(str) {
    return str
        .replace('<ul>','')
        .replace('</ul>','')
        .split('</li>')
        .slice(0,-1)
        .map(element => ({
            min: parseInt(
                    element.split('"')[1]
                           .split(':')[0]
                 ),
            seg: parseInt(
                    element.split('"')[1]
                           .split(':')[1]
                 ),      
            tipoVideo: element.split('>')[1]
        })
        )
}

function obtenerSegundos(videos, tipo) {
    let totalSegundos = 0;

    videos.forEach(element => {
        if (element.tipoVideo == tipo) {
            totalSegundos += (element.min * 60) + element.seg;
        }
    });

    return totalSegundos;
}

function obtenerSegundos2(videos, tipo) {
    return  videos      
            .filter(video => video.tipoVideo == tipo)
            .reduce(
                   (total, video) => total + ((video.min * 60) + video.seg) , 0
                   );
}

console.log(convertirObjetos(str));

console.log(obtenerSegundos(convertirObjetos(str), 'Redux Video'))
console.log(obtenerSegundos(convertirObjetos(str), 'Flexbox Video'))

//console.log(obtenerSegundos2(convertirObjetos(str), 'Redux Video'))
//console.log(obtenerSegundos2(convertirObjetos(str), 'Flexbox Video'))


/*

let prueba;
prueba = str.replace('<ul>','')
            .replace('</ul>','')

var array = prueba.split('</li>')
array.filter()
array.reduce( (total, video) => total + (video.min * 60) + video.seg,0)

var array2 = array.map(element => ({
    min: (element.split('"')[1]
         //.split(':')[0]
         ),
    seg: prueba.split(':')[1] = (element.split('"')[1]),

    tipoVideo: element.split('>')[1]
})
)
//prueba.slice(0,-1)
console.log(array.length);
console.log(array);
console.log(array.slice(0,array.length-1));
//console.log(array[0]);
//console.log(array[0].split('"')[1].split(':')[0]);

/*
var array = str.split('</li>');

var ej1 = array[0];


console.log('primero ' + array[0]);
console.log('segundo ' + array[1]);
*/

/*
PASO ARRAY A OBJETO

let nombres = "Mariano Barone; Diego Barone"
var array = nombres.split(';')
console.log(array.map(e => ({
    Nombre: e
}))
)

*/