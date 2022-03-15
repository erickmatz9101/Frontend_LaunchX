/**Las funciones se utilizan cuando necesitamos fragmentar código o queremos 
 * mandarlo a llamar en ciertas partes de nuestros bloques.
 */


//Funcion que calcula el cuadrado d eun número
const cuadrado = function(x) {
    return x * x;
}
let numero = 4;
console.log(cuadrado(numero));



/**Esta funcion no tiene parámetros que recibir pero cumple com tal con una tarea que puedo madar a llamar */
const ruido = function () {
    console.log("kataplum!");
}

ruido();

//Funcion que calcula el exponencial de un número
const exponencial = function (base, exponente) {
    let resultado = 1;
    for (let i = 0; i < exponente; i++){
        resultado *= base;
    }
    return resultado;
}

console.log(exponencial(4,3))


console.log(sumar(5,65));
function sumar(x, y) {
    return x + y;
}


/**Arrow function o funciones de flecha que nlo que hace la flecha, nos indica que se 
 * trata de una función cuya tarea lo que tiene que hacer es restar.
 */
const restar = (a, b) => {
    return a - b;
}
console.log(restar(40, 8));


function saludar(quien) {
console.log("Hola " + quien);
return;
}
saludar("Explorer");
console.log("Bye");



/**Excepciones sirven para utilizar las partes dle codigo que lleguen a romper el programa 
 * y puedan seguir funcionando.
 * En esta parte del código sirve para que primero se validen las 2 opciones que se tiene en el if, en caso de que no sea ninguna de esas opciones lo que se ingresó
 * por el usuario entonces THROW hace su trabajo de arrojar ese error
 */
function preguntaDireccion(pregunta) {
let result = prompt(pregunta);
if (result.toLowerCase() == "izquierda") return "I";
if (result.toLowerCase() == "derecha") return "D";
throw new Error("Dirección inválida: " + result);
}

function mirar() {
if (preguntaDireccion("A que lado?") == "I") {
    return "una casa";
} else {
    return "2 osos hambrientos";
}
}

/**TRY se usa cuando se va a entrar a las excepciones por si en caso de que no se ejecute de la manera correcta nustro programa siempre va a buscar un THROW 
 * de esta manera hace que el código siga funcionando pero marque error al usuario , digamos que funciona como un if, en caso de que no sea alguna de las 2 cosas 
 * (izquierda o derecha) va a ir directamnte al TRY y marcar el error al usuario    
 */
try {
console.log("Mira a ", mirar());
} catch (error) {
console.log("Hubo un error: " + error);
}








//Asincrono
setTimeout(() => console.log("Tick"), 500);

let fifteen = Promise.resolve(15);
fifteen.then(value => console.log(`Got ${value}`));

const promesa = () =>
new Promise((resolve, reject) =>
    setTimeout(
    () => (resolve(console.log('Todo cool')), reject(new Error('oops'))),
    2000
    )
)

async function main() {
  //   promesa()
  //     .then(() => {
  //       promesa()
  //         .then(() => console.log('hola'))
  //         .catch((err) => console.error(err))
  //     })
  //     .catch((err) => console.error(err))

await promesa();
console.log('Aquí termina la primer promesa');
await promesa();
console.log('Aquí termina la segunda promesa');
}

main();