/* Funciones
    las funciones son bloques de código reutilizables que realizan una tarea específica.
*/
/* Como se define una función en JavaScript usando la palabra clave function,
   seguida del nombre de la función, los parámetros entre paréntesis y el cuerpo de
   la función entre llaves.
*/
const square = function (x) {
  return x * x;
};
console.log(square(12));
/* Bindings and scopes
    Un binding es una asociación entre un nombre y un valor en el contexto de un programa.
    El scope (ámbito) se refiere a la accesibilidad de las variables y funciones en diferentes
    partes del código.
*/
/* Variables definidas con let y const tienen un scope de bloque, lo que significa que solo
    son accesibles dentro del bloque donde se definen (entre llaves {}).
*/
const halve = function (n) {
  return n / 2;
};
let n = 10;
console.log(halve(100));
// → 50
console.log(n);
// → 10
/* Nested scope
    El scope anidado ocurre cuando una función está definida dentro de otra función.
    La función interna tiene acceso a las variables de la función externa.
*/
const hummus = function (factor) {
  const ingredient = function (amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      unit += "s";
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  };
  ingredient(1, "can", "chickpeas");
  ingredient(0.25, "cup", "tahini");
  ingredient(0.25, "cup", "lemon juice");
  ingredient(1, "clove", "garlic");
  ingredient(2, "tablespoon", "olive oil");
  ingredient(0.5, "teaspoon", "cumin");
};
/* Functions as values
    En JavaScript, las funciones son ciudadanos de primera clase, lo que significa que pueden
    ser tratadas como cualquier otro valor. Pueden ser asignadas a variables, pasadas como
    argumentos a otras funciones y devueltas desde funciones.
*/
let launchMissiles = function () {
  missileSystem.launch("now");
};
if (safeMode) {
  launchMissiles = function () {
    /* do nothing */
  };
}
/* Declaration notation
    Las declaraciones de funciones son otra forma de definir funciones en JavaScript.
    A diferencia de las expresiones de función, las declaraciones de función son elevadas
    (hoisted) al inicio del ámbito, lo que significa que pueden ser llamadas antes de su
    definición en el código.
*/
function square(x) {
  return x * x;
}
/* Arrow functions
    Las funciones flecha son una sintaxis más concisa para definir funciones en JavaScript.
    No tienen su propio this, arguments, super o new.target.
*/
const power = (base, exponent) => {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};

/* la flecha biene despues de la lista de parametros y antes del cuerpo de la funcion, cuando 
   hay un solo parametro se pueden omitir los parentesis. Si el cuerpo de la función es una sola expresión,
   se pueden omitir las llaves y la expresión se evalua y se devuelve automaticamente.
*/
const square1 = (x) => {
  return x * x;
};
const square2 = (x) => x * x;
/* cando las funciones flecha no tienen parametros se usan parentesis vacios */
const horn = () => {
  console.log("Toot");
};
/* The call stack
    La pila de llamadas (call stack) es una estructura de datos que rastrea las funciones
    que se están ejecutando en un programa. Cuando se llama a una función, se agrega a la
    pila, y cuando la función termina, se elimina de la pila.
*/
/* Argumentos optionales
    En JavaScript, las funciones pueden tener argumentos opcionales. Si un argumento no
    se proporciona al llamar a la función, su valor será undefined dentro de la función.
    Si la funcion se llama con menos argumentos de los que se definen, los argumentos faltantes
    se establecerán en undefined o se pueden asignar valores predeterminados.
*/
function power(base, exponent = 2) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
}
console.log(power(4));
// → 16
console.log(power(2, 6));
// → 64
/* Closures
    Un closure es una función que recuerda el entorno en el que fue creada, incluso cuando
    se ejecuta fuera de ese entorno. Esto permite que la función acceda a las variables
    de su ámbito externo incluso después de que ese ámbito haya terminado de ejecutarse.
*/
function wrapValue(n) {
  let local = n;
  return () => local;
}
let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
// → 1
console.log(wrap2());
// → 2
/* wrwapValue crea una nueva función que recuerda el valor de local en el momento en que fue creada.
   Cada llamada a wrapValue crea un nuevo entorno con su propia variable local.
*/
function multiplier(factor) {
  return (number) => number * factor;
}
let twice = multiplier(2);
console.log(twice(5));
// → 10
/* Recursion
    La recursión es una técnica en la que una función se llama a sí misma para resolver un
    problema. Cada llamada recursiva debe acercarse a una condición base que detenga la
    recursión.
*/
function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}
console.log(power(2, 3));
// → 8
/* Ejemplo de funcion recursiva que encuentra el camino para llegar a un valor objetivo */
function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return (
        find(current + 5, `(${history} + 5)`) ||
        find(current * 3, `(${history} * 3)`)
      );
    }
  }
  return find(1, "1");
}
console.log(findSolution(24));
// → (((1 * 3) + 5) * 3)
/* Growing functions 
    A medida que las funciones crecen en tamaño y complejidad, es importante mantenerlas
    organizadas y legibles. Esto puede implicar dividir funciones grandes en funciones más
    pequeñas y manejables, usar nombres descriptivos para funciones y variables, y agregar
    comentarios para explicar partes complejas del código.
*/
function printFarmInventory(cows, chickens) {
  let cowString = String(cows);
  while (cowString.length < 3) {
    cowString = "0" + cowString;
  }
  console.log(`${cowString} Cows`);
  let chickenString = String(chickens);
  while (chickenString.length < 3) {
    chickenString = "0" + chickenString;
  }
  console.log(`${chickenString} Chickens`);
}
printFarmInventory(7, 11);

// mejira dando la funcion anterior
function zeroPad(number, width) {
  let string = String(number);
  while (string.length < width) {
    string = "0" + string;
  }
  return string;
}
function printFarmInventory(cows, chickens, pigs) {
  console.log(`${zeroPad(cows, 3)} Cows`);
  console.log(`${zeroPad(chickens, 3)} Chickens`);
  console.log(`${zeroPad(pigs, 3)} Pigs`);
}
printFarmInventory(7, 16, 3);

/* Functions and side effects
    Una función tiene un efecto secundario cuando modifica algún estado fuera de su propio
    ámbito o interactúa con el mundo exterior (por ejemplo, modificando una variable global,
    escribiendo en la consola, o realizando operaciones de E/S).
    Las funciones sin efectos secundarios son más fáciles de razonar y probar, ya que su
    comportamiento depende únicamente de sus argumentos de entrada.
*/
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
