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


function crearPokemon(){

    
}