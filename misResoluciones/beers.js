/*
 * En el siguiente array de objetos (beers)
 * 1.- Desarrollar una function que retorne un array que incluya el precio segun el siguiente criterio
 *     a) Si el  grado alcoholico es < a 5.0 el precio es 300
 *     b) Si el grado alcoholico es >= 5.0 el precio es 350
 *     c) La cerveza 'Purple Iris' esta de oferta y si precio es 320
 * 2.- Desarrolle una función que inserte la propiedad file_name a cada uno de los objetos, esta propiedad debe tener solo
 * el nombre del archivo de la propiedad label (upload_xOMnlK-large.png, etc..)
 * 3.- Desarrollo una funcion que ordene por tipo (type)
 * 
 
 /*
  Beers
*/

const beers = [
  { name: 'Purple Iris', abv: 6.8, label: 'https://s3.amazonaws.com/brewerydbapi/beer/dMLwGo/upload_yiUllE-large.png', type: 'IPA' },
  { name: 'Orange Blossom Pilsner', abv: 5.5, label: 'https://s3.amazonaws.com/brewerydbapi/beer/Rczcb9/upload_9Nhxxl-large.png', type: 'Pilsner' },
  { name: 'Darkness', abv: 4.2, label: 'https://s3.amazonaws.com/brewerydbapi/beer/lnxbIV/upload_idNXFf-large.png', type: 'Stout' },
  { name: 'Belgian Wit', abv: 5.4, label: 'https://s3.amazonaws.com/brewerydbapi/beer/3CvVQG/upload_xOMnlK-large.png', type: 'Wheat' },
  { name: 'Stolen Fruit', abv: 4.6, label: 'https://s3.amazonaws.com/brewerydbapi/beer/YGT30k/upload_uVCHP7-large.png', type: 'Wheat' },
];

function agregarPrecio(beers) {
  let precio; 
  return beers.map( 
    element => ({...element, precio: calcularPrecio(element)})    
  );
};

function calcularPrecio(beer){
  let precio; 
  if (beer.name == 'Purple Iris') {
    precio = 320;
    return precio
  }

  if (beer.abv < 5.0) {
    precio = 300;
  }
  else if (beer.abv >= 5.0) {
    precio = 350;
  }
  return precio;
};

function agregarFileName(beers) {
  return beers.map ( 
    beer => ({...beer, fileName: obtenerFileName(beer)})
  )
};

function obtenerFileName(beer) {
  let label = beer.label.split('/');
  return label[label.length-1];     
};

function ordenarPorTipo(beers) {
  
  return beers.sort((a, b) => {
      let fa = a.type.toLowerCase(),
          fb = b.type.toLowerCase();
  
      if (fa < fb) {
          return -1;
      }
      if (fa > fb) {
          return 1;
      }
      return 0;
  })
  
};

//console.log(beers);
//console.log(agregarPrecio,agregarFileName,ordenarPorTipo(beers));
//console.log(agregarFileName(beers));
//console.log(ordenarPorTipo(beers));
console.log(ordenarPorTipo(agregarFileName(agregarPrecio(beers))));