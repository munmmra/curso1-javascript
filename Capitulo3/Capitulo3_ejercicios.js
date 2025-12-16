/* Resumen
    Las funciones son bloques de código reutilizables que pueden aceptar argumentos y
    devolver valores. Entender los conceptos de bindings, scopes, closures y recursión es
    fundamental para escribir código efectivo en JavaScript. Además, mantener las funciones
    organizadas y minimizar los efectos secundarios puede mejorar la legibilidad y
    mantenibilidad del código.
    las formas comunes de definir funciones incluyen declaraciones de función,
    expresiones de función y funciones flecha.
    Un elemento clave es el escopo, que determina la accesibilidad de las variables y funciones en 
    diferentes partes del código, y los closures, que permiten a las funciones recordar su entorno
    de creación.
*/

/* Con esto en mente, pasemos a algunos ejercicios prácticos para reforzar estos conceptos. */

/*Ejercicio 1: tipos de funciones
  Define una función utilizando una declaración de función, una expresión de función
  y una función flecha. Cada función debe tomar dos números como parámetros y devolver
  su suma.
*/
function sumaDeclaracion(a, b) {
  return a + b;
}

let sumaExpresion = function (a, b) {
  return a + b;
};
let sumaFlecha = (a, b) => a + b;

console.log("Suma Declaración: " + sumaDeclaracion(3, 4));
console.log("Suma Expresión: " + sumaExpresion(5, 6));
console.log("Suma Flecha: " + sumaFlecha(7, 8));

/*Ejercicio 2: Scope y Closures
  Crea una función llamada "contador" que devuelva otra función. La función interna
  debe incrementar y devolver un contador cada vez que se llame. Demuestra cómo el
  closure mantiene el estado del contador entre llamadas.
*/
function contador() {
  let cuenta = 0;
  return function () {
    cuenta++;
    return cuenta;
  };
}
let contar = contador();
console.log("Contador: " + contar());
console.log("Contador: " + contar());
console.log("Contador: " + contar());
/*Ejercicio 3: Recursión
  Escribe una función recursiva llamada "factorial" que tome un número
  como parámetro y devuelva su factorial. Por ejemplo, factorial(5) debería
  devolver 120.
*/
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log("Factorial de 5: " + factorial(5));
console.log("Factorial de 0: " + factorial(0));
/*Ejercicio 4: Efectos Secundarios
  Crea una función llamada "agregarElemento" que tome un array y un elemento
  como parámetros y agregue el elemento al array. Demuestra cómo esta función
  tiene un efecto secundario al modificar el array original.
*/
function agregarElemento(array, elemento) {
  array.push(elemento);
}
let miArray = [1, 2, 3];
agregarElemento(miArray, 4);
console.log("Array después de agregar elemento: " + miArray);
/*Ejercicio 5: Función Pura
  Escribe una función pura llamada "multiplicar" que tome dos números
  como parámetros y devuelva su producto sin modificar ninguno de los
  parámetros.
*/
function multiplicar(a, b) {
  return a * b;
}
console.log("Multiplicación de 4 y 5: " + multiplicar(4, 5));
console.log("Multiplicación de 7 y 3: " + multiplicar(7, 3));
console.log(
  "Multiplicación de 4 y 5 (sin modificar parámetros): " + multiplicar(4, 5)
);
/*Ejercicio 6: Parámetros Predeterminados
  Crea una función llamada "saludar" que tome un nombre como parámetro
  y tenga un valor predeterminado de "Invitado". La función debe devolver
  un saludo personalizado.
*/
function saludar(nombre = "Invitado") {
  return "Hola, " + nombre + "!";
}
console.log(saludar("Carlos"));
console.log(saludar());
console.log(saludar("Ana"));
/*Ejercicio 7: Función de Orden Superior
  Escribe una función llamada "filtrarPares" que tome un array de números
  y devuelva un nuevo array que contenga solo los números pares. Utiliza
  el método de array "filter" para lograr esto.
*/
function filtrarPares(numeros) {
  return numeros.filter((numero) => numero % 2 === 0);
}
let numerosArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosPares = filtrarPares(numerosArray);
console.log("Números pares: " + numerosPares);

/*Ejercicio 8: Función Anidada
  Crea una función llamada "calculadora" que tome dos números como
  parámetros y devuelva un objeto con cuatro métodos: "sumar", "restar",
  "multiplicar" y "dividir". Cada método debe realizar la operación correspondiente
  utilizando los dos números proporcionados.
*/
function calculadora(a, b) {
  return {
    sumar: function () {
      return a + b;
    },
    restar: function () {
      return a - b;
    },
    multiplicar: function () {
      return a * b;
    },
    dividir: function () {
      return a / b;
    },
  };
}
let calc = calculadora(10, 5);
console.log("Suma: " + calc.sumar());
console.log("Resta: " + calc.restar());
console.log("Multiplicación: " + calc.multiplicar());
console.log("División: " + calc.dividir());

/*Ejercicio 9: crea una funcion que compare dos numeros y regrese el menor
  Si los numeros son iguales, regresar un mensaje indicando que son iguales
*/
const minimmum = function (numero1, numero2) {
  if (numero1 === numero2) {
    return "Los dos números son iguañles";
  } else if (numero1 < numero2) {
    return "El menor es :" + numero1;
  } else {
    return "El menor es :" + numero2;
  }
};
console.log(minimmum(3, 2));

/*Ejercicio 10: saviendo que 0 es par y 1 es impar, crea una funcion recursiva que
  regrese si un numero es par o impar, la funcion debera regresar un valor booleano
  true si es par y false si es impar. 
*/

let isEven = function (numero) {
  console.log(numero);
  if (numero === 0) {
    return true;
  } else if (numero === 1) {
    return false;
  } else return isEven((numero = numero - 2));
};

console.log(isEven(4));

/*Ejercicio 10: escribe una funcion countBs que tome una cadena y regrese cuantas Bs tine*/
const countBs = function (cadena) {
  let beseses = 0;
  for (let i = 0; i <= cadena.length - 1; i++) {
    if (cadena[i] === "B") {
      beseses++;
    }
  }
  return beseses;
};
let cadena = "Bebto Bismol";
console.log("la cadena " + cadena + "tinene : " + countBs(cadena) + " Bs");
/*Ejercicio 10.1: Modifique la funcion anterior para que duncione con cual quier caracter,
  es decir que la funcion acepte la cadene y el caracter buscado
*/

const buscarCaracter = function (cadena, caracter) {
  let incidencias = 0;
  for (let i = 0; i <= cadena.length; i++) {
    if (cadena[i] === carater) {
      incidencias++;
    }
  }
  return incidencias;
};
cadena = "Bebto Bismol";
const caracter = "o";
console.log(
  "la cadena " + cadena + "tinene : " + countBs(cadena) + " " + caracter
);
