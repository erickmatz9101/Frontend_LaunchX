const nombre= "Diego";

/**Creando la funcion flecha */

/**Las funciones flecha las puedo guardar o declarar como si fuesen variables, sustituyendo a la palabra funcion por la flecha que llevan,
 * otra custion impornte es que si mi funcion lleva solo un parametro puedo o no colocar los parentesis y seguira realizando su funcion, pero
 * si ya necesito usar mas de un parametro entonces si me veo obligado a tener que colocar los parentesis y los parametros van separados por
 * comas.
 */

const saludar= (nombre)=> {

    return `Mi nombre es ${nombre}`;
}

saludar();

console.log(saludar(nombre));


/**Declarando las funciones flecha en una sola linea de codigo sin el retun, conviene usarlas cuando su funcionalidad es mas simple
 * como por ejemplo el caso de este saludo
*/


const name="Erick";

const saludo=(name) =>`Mi nombre es ${name}`;
console.log(saludo(name));