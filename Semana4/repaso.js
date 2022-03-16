/**Conceptos de JS modernos Es 6 */

/**¿Que es let y que es const? */


/**La diferencia entre let y const:
 * 
 * Let: se utiliza para poder nombrar variables que posteriormente se desean reasignar
 * Conts: Como su nombre lo dice son constantes, es decir solo debo de tulizarlas cuando sean valores que nunca cambiarán
 */



/**Para este caso lo que se hizo fue darle un valor primero a la variable y aunque ya se tenia asignado, cuando la mando a llamar y le
 * asigno un nuevo nombre ahora mi variable tomará el valor de Alejandro, debido que estoy utilizando let.
 * 
 * Si yo en lugar de colocar let pongo const en mi variable y la quiero reasignar, en consola me saldrá un error porque NO se puede hacer eso
 * 
 */

//Uso de let para asignar variables 
let nombre = "Diego";

nombre = "Alejandro";

console.log(nombre);




//Funciones//

/**En JS las variables que están declaradas fuera de la funcion su escope es global por lo cual yo puedo hacer uso de ellas en todo mi programa,
 * en cambio aquellas variables que yo declare dentro de mi funcion su escope solo es dentro de ellas, no las puedo mandar a llamar o utilizar
 * fuera de la funcion, en mi ejemplo tengo declarada a la funcion como let, pero daria lo mismo si fuera const porque aunque yo tenga
 * mas variables debo siempre tomar en cuenta que mi variable dentro de la funcion solo vive dentro de ella.
 */

function hola(){

    let nombre= "Alejandro";  //variable declarada dentro de la funcion su escope solo es local
    console.log(nombre);
}

hola();
console.log(nombre);




                                        /**Template Strings */

 /**La comillas sencillas invertidas sirven para concatenar en lugar de poner el signo de mas su sintaxis es de la siguinte mandera
  * 
  * `Mi nombre es $ {namee}` dentro de las llaves debere de colocar el nombre de la variable a la que estoy haciendo referencia */                                       


const name="Diego";

function saludar(nombre){

    return "Mi nombre es "+ name;


}

saludar();
console.log(saludar( name ));   



const namee="Erick";

function saludo(nombre){

return `Mi nombre es ${namee}`;


}

saludo();
console.log(saludo( namee ));   




                                                            







