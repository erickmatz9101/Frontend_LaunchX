const pokeNameInput= document.getElementById("pokeName")

/**Funcion que muestra la imagen del pokemin que se solicite */

const fetchPokemon = () => {
    pokeNameInput
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./pokemon-sad.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);
        }
    });
}


/**Funcion que muestra los movimientos del Pokemon que se desea*/

const fetchMoves= () =>{
    pokeNameInput
    let pokeName = pokeNameInput.value;
    const direcion= `https://pokeapi.co/api/v2/move/${pokeName}`;
    fetch(direcion).then((res)=>{
        console.log(res);
        return res.json;

    })

    } 

    fetchMoves();








const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}



/**En esta funcion se van a guardar las funciones que tendra el click on */





//Funcion padre (main) que manda a llamar a las demás funciones conforme yo las vaya agregando



/**Fetch: Es la forma en como se hace una consulta o una petición a una API
 * 
 * -En el momento que se hace la petición de igual manera se genera una promesa, la cual utiliza programación asincrona, debido a que va y 
 * busca dentro de la API lo que se necesita, no hay necesidad de que lea o mande toda la información sino solo lo que yo le pida 
 * o le consulte. La promesa se hace por medio de la sentencia .then.
 * 
 * En el codigo el fetch lo que hace es ir y pedirle la informacion a la API de la URL que coloque, en el .json es básicamente la respuesta
 * que se tiene de lo que se solicitó.
 * Se imprime la respuesta para poder observar en consola lo que se tiene en la respuesta.  
 * 
 * 
 * -El segundo .then que se coloca en la llave de cierre es para poder convertir esa promesa en una respuesta
 * 
 * Con el console.log(data) lo que hace es poder visualizar toda la informacion del pokemon (movimientos,nombres de evoluciones etc),
 * pero como en este caso lo que nosotros necesitamos es solo la imagen entonces se crea otra variable letpokeImg la cual nos dara como
 * resultado que se pueda sisualizar la imagen del pokemon que yo solicite, en este caso indicandole donde está que para este caso es
 * data.sprites.front_default   
 * 
 * 
 * document.getElementById("pokeImg"): Lo que hace es buscar dentro de mi HTML lo que tenga el id que está dentro de las comillas para 
 * poder identificar el click on que se le da y cuando se mande a llamar a la funcion haga lo que se le solicitó.
 * 
 *  -pokePhoto.src = url: Es el atributo que deseamos cambiar, para este caso hace referencia a que cada que se de un click lo que se va a 
 * estar cambiando cuando yo le de cambiar pokemon tambien será la imagen de mi pokemon, digamos que internamente en la API hace la 
 * busqueda de lo que yo le solicito por el nombre del pokemon y cuando lo identifica entonces cambia la url de pendiendo de mi pokemon.
 * 
 * const pokeNameInput= document.getElementById("pokeName") /let pokeName = pokeNameInput.value: Lo que hace es tomar como referencia el 
 * click que se da para buscar a los pokemones por su nombe (pokename).
 * 
 *   const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`: Lo que esta entre la llaves es la variable que en este caso es la variable
 * que refiere a que lo que va a hacer es ir y buscar en la API por medio del nombre del pokemon lo que le solicitemos.
 * 
 * 
 * Condiiconales dentro de mi programa: Es este caso se aplica para que cuando la respuesta no sea valida se ocupo el manejo de errores
 * por medio de un if / else.
 * 
 * if (res.status != "200"): estatus 200 es un standard que ya esta establecido y es el correcto, es decir si hay algo que sea diferente de 
 * lo que le solicité no mostrará más de lo que le solicité. Por ejemplo si el estatus es 404 entonces ahi es cuando sale el gif de pikachu 
 * llorando.
 * 
 * toLowerCase: convierte todo el texto que el usuario ingrese a minusculas porque es uno de los requerimientos del fetch para que pueda 
 * hacer la peticion a la API.
 * 
*/







