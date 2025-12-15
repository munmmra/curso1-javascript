/*
    Capitulo1/Capitulo1_conceptos.js
    Values, Types, and Operators
*/
// Values
/* Numbers
    JavaScript maneja números enteros y de punto flotante con el mismo tipo de dato: Number.
    Ejemplos:
    13, 3.14, -200, 0.5, 0, 2.998e8
*/
console.log("Tipos de datos - Números");
console.log("Número entero   : " + 13);
console.log("Número decimal  : " + 3.14);
console.log("Número negatico : " + -200);
console.log("Número decimal  : " + 0.5);
console.log("Cero : " + 0);
console.log("Notación científica : " + 2.998e8); // 2.998 x 10^8

/* Operadores aritmeticos 
    +  Suma
    -  Resta
    *  Multiplicación
    /  División
    %  Módulo (residuo de una división)
    ** Exponenciación
*/
console.log("\nOperadores aritméticos:");
console.log("Suma : 5+3  =" + (5 + 3));           // 8
console.log("Resta : 5-3 =" + (5 - 3));         // 2
console.log("Multiplicación 5*3  = " + (5 * 3)); // 15
console.log("División : 5/2 = " + (5 / 2));   // 2.5
console.log("Módulo : 5%2   = " + (5 % 2));      // 1
console.log("Exponenciación 5**2 = " + (5 ** 2)); // 25 

/* Números especiales
    Infinity: Resultado de dividir un número positivo entre 0.
    -Infinity: Resultado de dividir un número negativo entre 0.
    NaN (Not a Number): Resultado de una operación matemática inválida.
*/
console.log("\nNúmeros especiales:");
console.log("División por cero (positivo) : " + (1 / 0));    // Infinity
console.log("División por cero (negativo) : " + (-1 / 0));  // -Infinity
console.log("Operación inválida : " + ("texto" / 2));       // NaN

/* Valores Strings
    Los strings son secuencias de caracteres encerradas entre comillas simples (' '), dobles (" ") o backticks (` `).
*/
console.log("\nTipos de datos - Strings");
console.log("String con comillas simples : " + 'Hola Mundo');
console.log("String con comillas dobles : " + "Hola Mundo");
console.log("String con backticks : " + `Hola Mundo`);
console.log("Concatenación de strings : " + ("Hola" + " " + "Mundo")); // Hola Mundo

// Operadores uniarios
console.log(typeof 42);     // "number"
console.log(typeof 'Hola'); // "string"

/* Valores Booleanos
    Los valores booleanos representan dos estados: true (verdadero) y false (falso).
*/
console.log("\nTipos de datos - Booleanos");
console.log("Valor booleano true : " + true);
console.log("Valor booleano false : " + false);

// Operadores de comparación
console.log("5 > 3 : " + (5 > 3));          // true
console.log("5 < 3 : " + (5 < 3));          // false
console.log("Hola > no " + ("Hola" > "no"));    // false (comparación lexicográfica)
console.log("Hola < no " + ("Hola" < "no"));   // true (comparación lexicográfica)
// operadores adicionales: >=, <=, ==, ===, !=, !==
console.log("5 == '5' : " + (5 == '5'));      // true (igualdad débil)
console.log("5 === '5' : " + (5 === '5'));    // false (igualdad estricta)  
console.log("5 != '5' : " + (5 != '5'));      // false (desigualdad débil)
console.log("5 !== '5' : " + (5 !== '5'));    // true (desigualdad estricta)

/* Valores NaN y null
    NaN (Not a Number): Representa un valor numérico inválido.
    null: Representa la ausencia intencional de cualquier valor u objeto.
*/
console.log("\nValores especiales - NaN y null");
console.log("Valor NaN : " + NaN);
console.log("Valor null : " + null);

/* Operadores lógicos
    && (AND lógico): Devuelve true si ambos operandos son true.
    || (OR lógico): Devuelve true si al menos uno de los operandos es true.
    ! (NOT lógico): Invierte el valor booleano del operando.
*/
console.log("\nOperadores lógicos:");
console.log("true && false : " + (true && false)); // false
console.log("true || false : " + (true || false)); // true
console.log("!true : " + (!true));                 // false

// Operador ternario
console.log("\nOperador ternario:");
console.log(true ? 1 : 2);   // 1
console.log(false ? 1 : 2);  // 2  

/* Valores vacios y undefined
    undefined: Indica que una variable ha sido declarada pero no se le ha asignado ningún valor.
*/
console.log("\nValor especial - undefined");
let x;
console.log("Valor de x (no asignada) : " + x); // undefined   

/* Conversión de tipos automática
    JavaScript realiza conversiones de tipos automáticamente en ciertas operaciones.
*/
console.log("\nConversión de tipos automática:");
console.log("5 + '5' : " + (5 + '5'));       // "55" (número a string)
console.log("'10' - 2 : " + ('10' - 2));     // 8 (string a número)
console.log("'10' * '2' : " + ('10' * '2')); // 20 (strings a números)
console.log("'10' / '2' : " + ('10' / '2')); // 5 (strings a números) 
console.log("'Hola' + 5 : " + ('Hola' + 5)); // "Hola5" (número a string)
console.log("'Hola' - 5 : " + ('Hola' - 5)); // NaN (operación inválida)
console.log("true + 1 : " + (true + 1));     // 2 (true a 1)
console.log("false + 1 : " + (false + 1));   // 1 (false a 0)   

/* Resumen
    - JavaScript maneja varios tipos de datos: Numbers, Strings, Booleans, null, undefined y NaN.
    - Los operadores aritméticos permiten realizar operaciones matemáticas básicas.
    - Los operadores de comparación y lógicos permiten evaluar condiciones.
    - JavaScript realiza conversiones de tipos automáticamente en ciertas operaciones.
*/
