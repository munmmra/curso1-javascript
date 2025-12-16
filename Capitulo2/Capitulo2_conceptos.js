/* Estructura de un programa en JavaScript */
// Expressions and Statements
let x = 5; // Esta es una declaración (statement)
x + 10;    // Esta es una expresión (expression)
console.log(x); // Llamada a función (statement)

// Comentarios
// Este es un comentario de una sola línea
/* Este es un comentario
   de múltiples líneas
*/
/* Binding y Variables */
let nombre = "Juan"; // Declaración de variable con let
const PI = 3.14; // Declaración de constante con const
var edad = 30; // Declaración de variable con var (no recomendado en ES6+)  
// Nombres de variables válidos
let _miVariable = 10;
let $otraVariable = 20;
// Nombres de variables inválidos
// let 2variable = 30; // No puede comenzar con un número
// let mi-variable = 40; // No puede contener guiones
/* Funciones
  las funciones son bloques de código reutilizables que realizan una tarea específica.
*/
function saludar(nombre) {
    return "Hola, " + nombre + "!";
}
console.log(saludar("María")); // Llamada a la función
/* la funcion console.log() es una función incorporada en JavaScript que se utiliza para 
   imprimir mensajes en la consola del navegador o del entorno de ejecución.
*/
console.log("Este es un mensaje en la consola.");
/* Valores de retorno
   El valor de retorno de una función es el valor que la función devuelve cuando se completa
   su ejecución.
*/ 
function sumar(a, b) {
    return a + b; // Devuelve la suma de a y b
}
console.log(sumar(5, 10)); // Imprime 15
/* Control de flujo
   Las estructuras de control de flujo permiten dirigir el orden en que se ejecutan las
   instrucciones en un programa.
*/
/* Estructura condicional if-else, el eslse puede ser opcional y se usa para ejecutar código
 si la condición es falsa. se usa para tomar decisiones en el código y puede tener múltiples
 condiciones encadenadas usando else if.
*/
let numero = 10;
if (numero > 0) {
    console.log("El número es positivo.");
    } else if (numero < 0) {
        console.log("El número es negativo.");
    } else {
    console.log("El número es cero.");
}
/* While loops 
    El bucle while ejecuta un bloque de código mientras una condición especificada sea verdadera.
*/
let contador = 0;
while (contador < 5) {
    console.log("Contador: " + contador);
    contador++;
}
/* do-while loops
   El bucle do-while ejecuta un bloque de código al menos una vez y luego repite la ejecución
   mientras la condición especificada sea verdadera.
*/
let i = 0;
do {
    console.log("Valor de i: " + i);
    i++;
} while (i < 5);

/* For loops
   El bucle for se utiliza para repetir un bloque de código un número específico de veces.
*/
for (let i = 0; i < 5; i++) {
    console.log("Índice: " + i);
}
/* Saltar iteraciones y salir de bucles
   Las declaraciones break y continue se utilizan para controlar el flujo dentro de los bucles.
*/
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Sale del bucle cuando i es 5
    }
    if (i % 2 === 0) {
        continue; // Salta las iteraciones cuando i es par
    }
    console.log("Índice impar: " + i);
}
/* Switch statement
   La declaración switch se utiliza para ejecutar diferentes partes de código basándose en el
   valor de una expresión.
*/
let fruta = "manzana";
switch (fruta) {
    case "manzana":
        console.log("Es una manzana.");
        break;
    case "banana":
        console.log("Es una banana.");
        break;
    case "naranja":
        console.log("Es una naranja.");
        break;
    default:
        console.log("Fruta desconocida.");
        break;
}

/* Resumen
   Este capítulo ha cubierto los conceptos básicos de la programación en JavaScript,
   incluyendo expresiones, declaraciones, variables, funciones, valores de retorno y
   control de flujo. Estos fundamentos son esenciales para escribir código efectivo y comprensible
   en JavaScript.
*/
/* Con esto en mente, pasemos a algunos ejercicios prácticos para reforzar estos conceptos. */