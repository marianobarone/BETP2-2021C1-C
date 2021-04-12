/**
 * Dado un string s que contiene solo los caracteres 
 * '(', ')','{','}', '[' y ']' determinar si el string enviado es valido
 * 
 * Un string es valido si
 * 1.- Todas las aperturas ( { y [ tienen su cierre.
 * 2.- Todos los cierres estan en el orden correcto 
 * 
 */

/**
 * 
 * @param {string} s 
 * @return {boolean}
 */
 const isValid = function(s){
    let aux = -1;
    
    while(s.length != 0){
        // Almaceno la longitud antes de hacer reemplazos
        aux = s.length;

        s = s.replace('()','');
        s = s.replace('[]','');
        s = s.replace('{}','');
        if(aux === s.length) return false;
    }
    if(s.length === 0) return true;
};

// TESTS
console.log(isValid('()') === true);
console.log(isValid('()[]{}')=== true);
console.log(isValid('(}') === false);
console.log(isValid('([)]') === false);
console.log(isValid('{}{}(){[()]}') === true);