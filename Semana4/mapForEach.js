/**Sirven para poder trabajar o modificar los arrays sin utilizar bucles complicados*/

const numeros=[ 1,2,3,4,5];

//Utiliznado foreach para trabajar con el array

/**Funciona como u ciclo for pero mas simplificado lo cual permite que en este caso lo que recibe como parametro es numero, haciendo
 * referencia a cada uno de los elementos dentro del array, dando como resultado que imprima cada uno de los elementos del array.
 */

numeros.forEach(numero =>{

    console.log(numero);
}); 




/**Map sirve en este caso para poder sustituir el bucle for, para este ejemplo lo que quiero hacer es calcular la potencia de cada uno de los
 * numeros pero el lugar de hacerlo con un for convencional, lo que hago es mapear con el valor posicional de cada numero su valor, y poder
 * manipularlo como mas me convenga, y la funcion se coloca solo en un alinea de codigo sin el return debido a que su funcjonalidad es mas
 * simple.
 * 
 */

const potencias= numeros.map(numero => numero* numero);

console.log(potencias);