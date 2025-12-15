/* Resumen
    - JavaScript maneja varios tipos de datos: Numbers, Strings, Booleans, null, undefined y NaN.
    - Los operadores aritméticos permiten realizar operaciones matemáticas básicas.
    - Los operadores de comparación y lógicos permiten evaluar condiciones.
    - JavaScript realiza conversiones de tipos automáticamente en ciertas operaciones.
*/
/* con esto en mente, procede a los ejercicios */
console.log("Ejercicios del Capítulo 1 - Tipos de Datos y Operadores");

// Ejercicio 1: Operaciones Aritméticas 
console.log("\nEjercicio 1: Operaciones Aritméticas");
let a = 10;
let b = 3;
console.log("a + b : " + (a + b));          // Suma
console.log("a - b : " + (a - b));          // Resta
console.log("a * b : " + (a * b));          // Multiplicación
console.log("a / b : " + (a / b));          // División
console.log("a % b : " + (a % b));         // Módulo
console.log("a ** b : " + (a ** b));        // Exponenciación

// Ejercicio 2: Comparaciones
console.log("\nEjercicio 2: Comparaciones");
console.log("a > b : " + (a > b));          // Mayor que
console.log("a < b : " + (a < b));          // Menor que
console.log("a >= b : " + (a >= b));        // Mayor o igual que
console.log("a <= b : " + (a <= b));        // Menor o igual que
console.log("a == '10' : " + (a == '10'));  // Igualdad débil
console.log("a === '10' : " + (a === '10'));// Igualdad estricta
console.log("a != '10' : " + (a != '10'));  // Desigualdad débil
console.log("a !== '10' : " + (a !== '10'));// Desigualdad estricta
// Ejercicio 3: Operadores Lógicos
console.log("\nEjercicio 3: Operadores Lógicos");
console.log("tree && true : " + (true && true)); // AND lógico
console.log("true && false : " + (true && false)); // AND lógico
console.log("false && true : " + (false && true)); // AND lógico
console.log("flase && false : " + (false && false)); // AND lógico
console.log("true || true : " + (true || true)); // OR lógico
console.log("true || false : " + (true || false)); // OR lógico
console.log("false || true : " + (false || true)); // OR lógico
console.log("false || false : " + (false || false)); // OR lógico
console.log("!true : " + (!true));                 // NOT lógico
// Ejercicio 4: Conversión de Tipos
console.log("\nEjercicio 4: Conversión de Tipos");
console.log("20 + '5' : " + (20 + '5'));       // Número a string
console.log("'15' - 5 : " + ('15' - 5));     // String a número
console.log("'4' * '2' : " + ('4' * '2')); // Strings a números
console.log("'20' / '4' : " + ('20' / '4')); // Strings a números 
console.log("'Hello' + 10 : " + ('Hello' + 10)); // Número a string
console.log("'Hello' - 10 : " + ('Hello' - 10)); // Operación inválida
console.log("false + 3 : " + (false + 3));     // false a 0
console.log("true + 3 : " + (true + 3));       // true a 1  
// Ejercicio 5: Valores Especiales
console.log("\nEjercicio 5: Valores Especiales");
let c;
console.log("Valor de c (no asignada) : " + c); // undefined
console.log("Valor null : " + null); // null
console.log("Valor NaN : " + NaN);   // NaN 
// Fin de los ejercicios del Capítulo 1
console.log("\nFin de los ejercicios del Capítulo 1");