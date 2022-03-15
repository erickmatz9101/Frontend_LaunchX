
/*Las variables se pueden declarar con la palabra reservada "var", estas variables se pueden considerar como globales
También se pueden declarar con la palabra reservada "let" y estas serán usadas dentro de un bloque de código
Igualmente está la declaración con la palabra reservada "const" y se usarán cuando el valor no cambie */

console.log("*****Variables*****")
//Tipo de dato entero
    var numero1;
    numero1 = 4;

    var numero2;
    var numero2 =2;

    console.log("Numero 1: " +numero1 +  " Numero 2: " +numero2);


//Tipo de dato string

console.log("*****Cadenas*****");

/*Las cadenas (Strings) son caracteres que pueden ser una frase o palabra y estas pueden darse con comillas dobles "", simples '' o invertidas ``
la diferencia es que con las invertidas podemos agregar variables dentro de la cadena con la sintaxis ${}*/
console.log("\n************* Cadenas **************\n");
var frase1 = "Ejemplo comillas dobles";
var frase2 = 'Ejemplo comillas simples';
var frase3 = `Ejemplo comillas ${frase1} invertidas`;

//Concatenar sirve para ir metiendo los valores

console.log("*****condicionales*****")

//Nos arroja true o false dependiendo del condicional 

console.log(numero1 > numero2);

//Son para cuando tenemos mas de una condicional

console.log("*****Operador Lógico AND*****");

console.log(true && true); //La dos condiciones deben de ser verdaderas para que se cumpla

console.log("*****Operador Lógico OR*****");

console.log(true || false); //Ci¿on que una de las condicionales sea verdadera se cumple


console.log("*****Arreglos*****");

//Se utilizan cuando necesidtamos mas de una variable 
//let se utiliza cuando vamos a utilizar un bloque de código (if, else, while)
//Cuando necesitamos estar utilizando dentro y fuera de nuestro bloque de código entonces si utilizamos a VAR
//Const es un arreglo donde nunca van a cambiar los valores 
//Los arreglos empiezan desde la posicion cero
let listaDeNumeros = [2,3,5,7,11,234];


//Imprime el valor que se encuentre en la posicion 0
console.log(listaDeNumeros[0]);

 //Ingreaar datos en el arregloe en la última psosicion
listaDeNumeros.push(16);

listaDeNumeros.push(939);

//Conociendo la longitud de la lista de numeros por medio de Length
console.log(listaDeNumeros);


console.log(listaDeNumeros.length);

//Los arreglos no solo pueden ser de números sino tambieén de tipo String

let listaDePalabras = ["Explorer", "MisionComander", "LaunchX", "Innovaccion"];
console.log(listaDePalabras);

console.log(listaDePalabras.length);

//Para conocer la longitud de nuestra cadena o arreglo hacemos uso de Length

/* Las cadenas de texto se pueden utilizar como un arreglo, es decir puedo utilizar una de las palabras que esté dentro de mi arreglo
y conocer la posición de alguno de sus elementos, de la siguinete manera*/
let palabra = "Explorer";
console.log(palabra[2]);

console.log(palabra.length);


console.log("*****Objetos en JavaScript*****");

/**La llaves nos sirven como contenedores de los objetos, los atributos van separados por las comas dentro de nuestros objetos */

let explorer = {

    nombre: "Nombre del explorer",
    email: "email@innovaccion.mx",
    numReg: "12345",
    mision: "FrontEnd", 

    //Colocando un arreglo dentro de un objeto
    proyectos:["Proyecto Abogabot", "Proyceto Pateleria", "Proyecto Taqueria", "Vacunacion"],

    //Dentro de los objetos se pueden tener otros objetos

    proPer: {

        escolar: "Tareas",
        profesional:"Trabajo",
        personal:"Negocio"

    }
}

//Para imprimir el contenido de mi arreglo :

console.log(explorer);

/**Si quisiera alguno de los atributos en especifico de mi objeto lo que debo hacer es mandarlos a llamar como se debe, en este caso solo
 * quiero el email y para ello lo hago de la siguiente manera:
 */

console.log(explorer.email); //Solo imprime el email


//Para poder observar el objeto que tenemos dentro de nuestro objeto principal

console.log(explorer.proPer);



console.log("*****Flujos condicionales*****");

let number1 = 4;
let number2 = 2;

console.log("***** If / else *****")

if (number1 > number2){
    console.log("El número 1 es mayor que el número 2");

}

else if(number1 == number2){
    console.log("Los números son iguales");

}

else{
    console.log("El número 2 es mayor que el número 1");

}

console.log("*****Ciclos condicionales******");

console.log("***Ciclo While***");

/**Mientras mi number while sea menor a 12 le va a ir sumando de 2 en 2 hasta que sea 12 */

let numberWhile = 0;

while (numberWhile <= 12) {

    console.log(numberWhile);
    numberWhile =numberWhile + 2;
    
}


/**Va a pazar por lo menos una vez por el ciclo, es decir por lo menos lo va a iterar una vez
 * La condicion se checa hasta el final del ciclo
 * 
 * Mientras el numero sea menor a 20 realiza lo que está dentro del do
 * y en el while valida que se cumpla la condicion de que cuando el numero
 * sea 20 entonces salga del ciclo y deje de hacer su función.
 */

console.log("*****Ciclo Do While*****");

let numeroDoWhile = 20;

do {
    numberWhile = numberWhile +2;

    console.log(numberWhile);

} while (numeroDoWhile < 20);
console.log("Awuí sale del Do While" + numeroDoWhile);


//Ciclo for con iteracion controlada

/**El ciclo for en este caso comienza en 0 y de ahi va a ir sumando de 1
 * en 1 hasta que el numero sea 12
 */

console.log("*****Ciclo For*****");

let numeroFor = 0;

for ( numeroFor= 0; numeroFor <= 12; numeroFor +1) {

    console.log(numeroFor);
    
}
console.log("Aquí salimos del for");


/* Opciones para evitar anidar condicionales */


/**Prompt lo que hace es arrojar un mensaje dentro del navegador */

console.log("\n************* Switch **************\n");

switch (prompt("¿Cómo está el clima?")) {
case "lluvioso":
    console.log("No te vayas a mojar");
    break;
case "soleado":
    console.log("Ponte bloqueador");
    break;
case "nublado":
    console.log("Tapate bien");
    break;
default:
    console.log("No se como está el clima");
    break;
}
console.log("Aquí salimos del Switch");





















