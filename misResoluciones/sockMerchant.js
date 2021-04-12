/**
 * Dada un conjunto de medias debe encontrar la cantidad de pares por color. 
 * Se proporciona un array el cual contiene el codigo de color de las medias
 * Determinar el numero maximo de pares del mismo color que se puede formar
 *
 */

/**
 * 
 * @param {Array} colorSocks 
 * @return {Number} 
 */
const sockMerchant = function(colorSocks){
    let arrayRevisados = [];

    let cantPares = 0;
    let sonDos = 0;
    let unElemento;

    for (let i = 0; i < colorSocks.length; i++) {
        sonDos = 0;
        unElemento = colorSocks[i];

        for (let j = 0; j < colorSocks.length; j++) {
            if (!arrayRevisados.includes(unElemento)) {
                if (unElemento === colorSocks[j]) {
                    sonDos ++;
                    if (sonDos == 2) {
                        cantPares ++;
                        sonDos = 0;
                    }
                }
            }           
        }
        arrayRevisados.push(unElemento);
    }
    return cantPares;
}

// TESTS TDD
console.log(sockMerchant([1,2,1,2,1,3,2]) === 2);
console.log(sockMerchant([10,20,20,10,10,30,50,10,20]) === 3);
