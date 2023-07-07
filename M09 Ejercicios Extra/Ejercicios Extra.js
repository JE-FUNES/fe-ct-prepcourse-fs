/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {  
   // objeto {var, clave : valor} => array = [array1 = [clave1, valor1], array2 = [clave2, valor2], array3 = [clave3, valor3]];
   
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
  
   var array = Object.entries(objeto);
   return array;
   }

function numberOfCharacters(string) {     
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:

   var letrasSeparadas = string.split("").sort();

   var resultante = letrasSeparadas.reduce((letra, cant) => {letra[cant] = letra[cant] ? letra[cant] + 1 : 1; return letra}, {});
   return resultante;
   }



function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:

   function mayusculasAlInicio(string) {
      var mayuscula = "";
      var minuscula = "";

      for (i = 0; i < string.length; i++) {
         if ( string[i] === string[i].toUpperCase()) {
            mayuscula = mayuscula + string[i];
         }
         }
      for (i = 0; i < string.length; i++) {
            if ( string[i] === string[i].toLowerCase()) {
               minuscula = minuscula + string[i];
            }
            }   
      return (mayuscula + minuscula);
      }
      return mayusculasAlInicio(string);
   }


function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:

   var resultado = [];
   var palabras = frase.split(" ");

   for ( var i = 0; i < palabras.length; i++ ) {
      var palabraInvertida = palabras[i].split("").reverse().join("");
      resultado.push(palabraInvertida);
   }
   return resultado.join(" ");
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:

   var numString = numero.toString();
   var longitud = numString.length;

   for ( var i = 0; i < Math.floor(longitud / 2); i++) {
      if (numString[i] !== numString[longitud - 1 - i]) {
         return "No es capicua";
      }
   }
   return "Es capicua";
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:

   var nuevoArray = [];
   var letras = string.split("");

   for ( var i = 0; i < letras.length; i++) {
      if ( letras[i] !== "a" && letras[i] !== "b" && letras[i] !== "c") {
         nuevoArray.push(letras[i]);
      }
   }
   return nuevoArray.join("");
}


function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:

  arrayOfStrings.sort( function (a, b) {
   return a.length - b.length;
  })
return arrayOfStrings;
   
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:

var comunes = array1.filter(x => array2.indexOf(x) !== -1)
return comunes;

}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
