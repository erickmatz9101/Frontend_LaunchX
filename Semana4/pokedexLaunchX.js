const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
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

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}





/**Las condicionales se ocupan para que valide si las respuetas de entrada son validas con la informacion que tengo en la API
 * 
 * 
 * En el if lo que se hace es que si el valor que se ingresa es mayor a 200 no es un pokemon valido por lo cual 
 * arroja esa imagen y sino regresa al Json
 * 
 * Lowercase se usa para que el valor que se ingresa se pase a minusculas y pueda encontrar la informacion del pokemin
 * que deseamos
 */