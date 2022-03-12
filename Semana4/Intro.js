//Para la escritura de variables ne JS recuerda poner la palabra reservada VAR

console.log("*****Variables*****")
//Tipo de dato entero
    var numero1;
    numero1 = 4;

    var numero2;
    var numero2 =2;

    console.log("Numero 1: " +numero1 +  " Numero 2: " +numero2);


//Tipo de dato string

console.log("*****Cadenas*****");

var frase1;

frase1="Comillas dobles";

var frase2;

var frase2 = 'Comillas simples';

console.log("*****Concatenación*****");

console.log("Frase1: " +frase1  + " Frase2:" + frase2);


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





















