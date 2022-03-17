const pokemonContainer= document.querySelector('.pokemon-container');


/**Funcion para traer solo un pokemon y hacer prueba*/

function fetchPokemon(id){

    /**Haciendo la solicitud a la API */
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)

    .then(res => res.json())

    /**.then que permite ver la data en la consola */
    .then(data => {
        createPokemon(data);
    })

}

    /**Creando la funcion para ver los pokemon en consola */

    function createPokemon(pokemon){

        /**Creando la tarjeta que lo va a contener */
        const card =document.createElement('div')
        card.classList.add('pokemon-block');

        /**Creando el contendor que contendra la imagen */

        const spriteContainer = document.createElement('div');
        spriteContainer.classList.add('img-container');

        /**Creando el sprite */

        const sprite = document.createElement('img');
        /**Agrgando la URL que contiene a la imagen */
        spriteContainer.src= pokemon.sprites.front_default;

        /**contenedor de la imagen */

        spriteContainer.appendChild(sprite);

        /**Creando el numero del pokemon */

        const number = document.createElement('p');
        number.textContent = `#${pokemon.id.toString().padStart(3,0)}`; //La funcion padStart añade 2 ceros al principio para darle el numero al pokemon

        /**Creando el nombre del pokemon */

        const name = document.createElement('p');
        name.classList.add('name');
        name.textContent = pokemon.name

        /**Agregando contenido a la carta */

        card.appendChild(spriteContainer);
        card.appendChild(numero);
        card.appendChild(name);

        /**Agragando la carta al pokemon-container */

        pokemonContainer.appendChild(card);
    

    }

