/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:

   return array[0];
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[array.length - 1];
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var incremento = array.map(num => num + 1);
   // el parametro que vamos a modificar va primero entre parentencis y despues de la funcion flecha
   // va que modificaciones querems hacer.
   // otra manera sería 
   // var incremento = array.map(num => num++);
   return incremento;
// otra forma apta sería
//   for(var i = 0; i < array.length; i++) {
//      array[i] = array[i] + 1;
//   return array;
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return(array);
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return(array);
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   palabras.toString();
   return palabras.join(" ");

   //podriamos haberlo guardado en una variable
   // var frase = palabras.join(" ");
   // return frase;
   // el palabras.toString solo es necesario si lo que recibimos por parametro no fueran strings.
   
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   return(array.includes(elemento)); 
   // el metodo .includes devuelve un booleano siempre.
   // si decidimos guardar todo en una variable seria asi:
   // var contieneElemento = array.inlcudes(elemento);
   // return contieneElemento;
   // no es necesario el if.. else.. porque el .includes ya funciona devolviendo true o false.
   
}
function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   // utilizando el metodo .reduce:
   // var suma = arrayOfNums.reduce((num1, num2) => num1 + num2);
   // return suma;
   // otra manera utilizando for: 
   var suma = 0 
   for(var i = 0; i < arrayOfNums.length; i++) {
      suma = suma + arrayOfNums[i] }
      return suma;
   }

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   // utilizando el bucle "for of" :
   // var promedio = 0;
   // for (var i of resultadosTest) {
   //     promedio = promedio + i; (esto hace que a medida que va avanzando va sumando uno con otro)
   // return (promedio / resultadosTest.length); 
   // }
   var suma = 0
   for(var i = 0; i < resultadosTest.length; i++) {
   suma = suma + resultadosTest[i] }
   return(suma / resultadosTest.length);
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   // con for seria asi:
   // var elemento = arrayOfNums[0];
   // for (var i = 0; i < arrayOfNums; i++) {
   //   if (arrayOfNums[i] > elemento) {
      // elemento = arrayOfNums[i]
      // }
      // }
      // return elemento;
   let max = Math.max(...arrayOfNums);
   return max;
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:

   // aqui podriamos haber utilizado el .reduce asi va multiplicando uno con otro y reemplazando el valor de la variable, y luego 
   // darle las intrucciones de cuando devolver 0 o cuando devolver el argmento.
   // en cambio lo desarrollaron asi:
   var multiplicar = 1;
   // cuando una operacion de multiplicacion la variable no puede ser 0 ya que sino el resultado seria 0
   if (arguments.length > 1) {
      for (var i = 0; i < arguments.length; i++) {
         multiplicar = multiplicar * arguments[i];
      }
      return multiplicar;
   } else if (arguments.length == 1) {
      return arguments[0];
   } else {
      return 0;
   }
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
  var elementosMayor18 = 0;
array.forEach(function (numero) {
   if (numero > 18) {
      elementosMayor18++;
   }
})

return elementosMayor18;
} // con for se hace de esta manera:
// var elementoMayor18 = 0;
// for (var i = 0; i < array.length; i++) {
   // if (array[i] > 18) {
      // elementoMayor18.push(array[i])
      // }
      // }
      // return elementoMayor18.length;

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
            if (numeroDeDia === 1 || numeroDeDia === 7) {
         return ("Es fin de semana");
         } else {
         return ("Es dia laboral");
      }
   }

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   var nums = num.toString();
   if (nums[0] === "9") {
      return true;
   } else {
      return false;
   }
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   var primerValor =array[0];
   for (var i = 0; i < array.length; i++) {
   if (array[i] !== primerValor) {
   return false;
}
}
return true;
}


function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   
   var tresMeses = [];
   array.forEach(function(mes) {
      if (mes === "Enero" || mes === "Marzo" || mes === "Noviembre") {
         tresMeses.push(mes);
        } 
        })
        if (tresMeses.length === 3) {
         return tresMeses;
        } else {
         return("No se encontraron los meses pedidos");
        }
      }


function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var tablaCompleta = [];
   for (var i = 0; i < 11; i++) {
      tablaCompleta.push(i * 6);
   }
   return tablaCompleta;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var enterosCeroADoscientos = [];
   array.forEach(function(num) {
      if (num > 100) {
         enterosCeroADoscientos.push(num);
      }
   })
   return enterosCeroADoscientos;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var array = [];
   var suma = num;
   for (var i = 0; i < 10; i++) {
      suma = suma + 2;
      if (suma === i) break;
     else {
         array.push(suma);
}
      }
      if (i < 10) {
         return "Se interrumpió la ejecución";
      } else {
      return array;
   }
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:

   var array = [];
   var suma = num;

   for (var i = 0; i < 10; i++) {
      if (i === 5) {
      continue;
      } 
      suma = suma + 2;   
         array.push(suma);
      } 
return array;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
