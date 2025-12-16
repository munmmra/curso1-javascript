/* Resumen
   Este capítulo ha cubierto los conceptos básicos de la programación en JavaScript,
   incluyendo expresiones, declaraciones, variables, funciones, valores de retorno y
   control de flujo. Estos fundamentos son esenciales para escribir código efectivo y comprensible
   en JavaScript.
*/
/* Con esto en mente, pasemos a algunos ejercicios prácticos para reforzar estos conceptos. */

/*Ejercicio 1: Declaraciones y Expresiones
  Escribe una declaración que asigne el valor 20 a una variable llamada "edad".
  Luego, escribe una expresión que sume 5 a la variable "edad" y almacene el 
  resultado en una nueva variable llamada "nuevaEdad".
*/
let edad = 20;
let nuevaEdad =edad +5;
console.log("Edad + 5 es : " + nuevaEdad);

/*Ejercicio 2: Comentarios
  Agrega un comentario de una sola línea que explique qué hace el siguiente código:
*/
let saludo = "Hola, mundo!"; // Esta línea asigna el saludo "Hola, mundo!" a la variable saludo
console.log(saludo);

/*Ejercicio 3: Variables y Funciones
  Crea una función llamada "multiplicar" que tome dos parámetros, "a" y "b",
  y devuelva el producto de ambos. Luego, llama a la función con los valores
  4 y 5, y almacena el resultado en una variable llamada "resultado".
*/

function multiplicar (a, b) {
    return a * b;
}
let resultado = multiplicar(4, 5);
console.log("El resultado de multiplicar 4 y 5 es: " + resultado);

/*Ejercicio 4: Control de Flujo
  Escribe un bloque de código que utilice una declaración if-else para verificar
  si una variable llamada "numero" es positiva, negativa o cero. Imprime un mensaje
  correspondiente para cada caso.
*/
let numero = 5;
if (numero = 0) {
    console.log("El número es cero.");
}else if ( numero > 0 ) {
    console.log("El número es positivo.");
}else {
    console.log("el núero es negativo.");
}

/*Ejercicio 5: Bucles
  Crea un bucle for que imprima los números del 1 al 10 en la consola.
*/
for (let i=1; i <=10; i++) {
    console.log("El valor es: " + i);
}
/*Ejercicio 6: Switch Statement
  Escribe una declaración switch que verifique el valor de una variable llamada
  "color" y imprima un mensaje diferente para los colores "rojo", "verde" y "azul".
  Incluye un caso predeterminado que imprima "Color desconocido" si el valor no coincide
  con ninguno de los casos anteriores.
*/
let color = "negro";
switch (color) {
    case "rojo":
        console.log("El color es rojo.");
        break;
    case "verde":
        console.log("El color es verde.");
        breake;
    case "azul":
        console.log("El color es azul.");
        breake;
    default:
        console.log("Color desconocido.");
        break
}

/*Ejercicio 7: Funciones y Valores de Retorno
  Crea una función llamada "esPar" que tome un número como parámetro y
  devuelva true si el número es par y false si es impar. Luego, llama a la función
  con el valor 7 y almacena el resultado en una variable llamada "resultadoParidad".
*/
function esPar(numero) {
    return numero % 2 === 0;
}
let resultadoParidad = esPar(7);
console.log("¿El número 7 es par? " + resultadoParidad);
/*Ejercicio 8: Bucles While
  Escribe un bucle while que imprima los números del 1 al 5 en la consola.
*/
let contador = 1;
while (contador <= 5) {
    console.log("Número: " + contador);
    contador++;
}
/*Ejercicio 9: Saltar Iteraciones en Bucles
  Crea un bucle for que imprima los números del 1 al 10, pero salta los números
  pares utilizando la declaración continue.
*/
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue; // Salta los números pares
    }
    console.log("Número impar: " + i);
}
/*Ejercicio 10: Salir de Bucles
  Escribe un bucle for que imprima los números del 1 al 10, pero salga del bucle
  cuando el número sea 6 utilizando la declaración break.
*/
for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        break; // Sale del bucle cuando i es 6
    }
    console.log("Número: " + i);
}

/*Ejercicio 11: Do-While Loop
  Crea un bucle do-while que imprima los números del 1 al 5 en la consola.
*/
let j = 1;
do {
    console.log("Número: " + j);
    j++;
} while (j <= 5);
/*Ejercicio 12: Combinación de Conceptos
  Escribe una función llamada "contarHasta" que tome un número como parámetro
  y utilice un bucle for para imprimir todos los números desde 1 hasta ese número.
*/
function contarHasta(numero) {
    for (let i = 1; i <= numero; i++) {
        console.log("Contando: " + i);
    }
}
contarHasta(7);

/*¡Buen trabajo! Has completado los ejercicios prácticos sobre declaraciones, expresiones,
  variables, funciones, valores de retorno y control de flujo en JavaScript. Sigue practicando
  estos conceptos para fortalecer tus habilidades de programación. 
*/

/* haora resolvamos los ejercicos del libro */

/*Ejercicio del libro 1 : Looping a triangle
  Escribe un bucle que haga siete llamadas a console.log para crear el siguiente triángulo:
  #
  ##
  ###
  ####
  #####
  ######
  #######
*/
console.log("Ejercicio del libro 1: Looping a triangle solusión 1");
let hash = "";
for (let i=0; i <7; i++) {
    hash += "#";
    console.log(hash)
}

/*Ejercicio del libro 2 : FIZZBUZZ
  Escribe un bucle que imprima todos los numeros del 1 al 100, con las siguientes 2 exepciones.
  Papra numeros divisibles por 3, imprimir FIZZ y para numeros divisibles por 5 imprimir Buzz
*/
for (let i=1; i <=100; i++){
    if (i % 3 === 0){
        console.log("numero : " + i +" : Fizz");
    }else if (i % 5 === 0){
        console.log("numero : " + i +" : Buzz");
    }else {
        console.log("numero : " + i);
    }
}
/*Ejercicio del libro 2.1 : FIZZBUZZ
  Modifique el programa anterior para que cuando el numero sea divisible entre 3 y 5 imprima 
  FizzBuzz y Fizz para cuando solo sea divisible entre 3 y Buzz cuando solo sea divisible entre
  5
*/
for (let i=1; i<=100; i++){
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("numero : " + i +" : FizzBuzz");
    }else if (i % 3 === 0) {
        console.log("numero : " + i +" : Fizz");
    }else if (i % 5 === 0) {
        console.log("numero : " + i +" : Buzz");
    }else {
        console.log("numero : " + i);
    }
}

/*Ejercicio del libro 3 : Tablero de ajedez 
    Escribe un progrema que crea un tablero de ajedres de 8X8, como se muestra acontinuación
     # # # #
    # # # # 
     # # # #
    # # # # 
     # # # #
    # # # # 
     # # # #
    # # # # 
*/

for (let i=1; i<=8; i++){
  if (! (i % 2 === 0)){ //si es numero non
    console.log(" # # # #");
  }else{                //si es numero par
    console.log("# # # # ");
  }
}

/*Ejercicio del libro 3.1 : Tablero de ajedez
  Modifique el programa anterior para que pueda crear tableros de nXn
*/
console.log("ejercicio 3.1")
let tamaño = 3;
let fila = "";
for (let i=1; i<=tamaño; i++) {
  if(! (i%2 === 0)) {
    for (let j=1; j<=tamaño;j++){
      if(! (j%2 === 0)){ // si es non
        fila += " ";
       }else {
        fila += "#";
      }
    }
  }else {
    for (let j=1; j<=tamaño;j++){
      if(! (j%2 === 0)){ // si es non
        fila += "#";
      }else {
        fila += " ";
      }
    }
  }
  console.log(fila); 
  fila = "";
}
