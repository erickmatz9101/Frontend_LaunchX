/**Seleccionando los elementos de HTML que se van a usar */

const input= document.querySelector('input');
const button= document.querySelector('button');
const pokemonContainer= document.querySelector('.pokemon-container');

/**Agregando evento al botton */

button.addEventListener('click',(evento)=>{
    evento.preventDefault();
    traerPokemon(input.value);
});



/**Generando la funcion que hace la peticion de la API */

function traerPokemon(pokemon) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
    
    .then((res)=> res.json())

    /**Cachando los datos de la peticion para poderlos interpretar dentro de mi funcion crearPokemon */
    .then((data) => {
        crearPokemon(data);
        
    });
}



/**Creando la funcion que permite se vualicen los datos en pantalla */

function crearPokemon(pokemon){
    
    /**creando los elementos para que se pueda ver la imagen */
    const img= document.createElement('img');
    img.src =pokemon.sprites.front_default;

    /**Creando los elementos para que se pueda ver el nombre */

    const h3=document.createElement('h3');
    h3.textContent = pokemon.name;  

    /**Div para juntar la informacion*/
    const div = document.createElement('div');

    /**Agregando al div los elementos que deseo aparezcan */
    div.appendChild(img);
    div.appendChild(h3);
    /**Añadiendo el div al pokemon container */

    pokemonContainer.appendChild(div);

}


