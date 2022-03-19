
const fetchPokemon =() =>{

    const pokeName = document.getElementById("pokeName"); //Hace refrencia al input del html para poder crear el document y busque al pokemon

    let pokeInput =pokeName.value; //indicando que tome el valor del input que se ingrese

    const url= `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;

    fetch(url).then((res) =>{

        return res.json();

    }).then((data) =>{ //Este .then es el que ya me da acceso a la informacion de data que yo deseo consultar y pueda verla en pantalla

        console.log(data);

        let pokeImg = data.sprites.front_default; //le indico que es lo que necesito de la data y donde se encuentra(imagen del pokemon)
        pokeImage(pokeImg); //mandando a llamar la funcion que cambia la imagen y le paso como parametro el lugar donde está
        console.log(pokeImg); 

        let num = data.id; //Mostrar el numero de pokemon que es
        console.log(num);

    })

}

//fetchPokemon();


/**Funcion que permita visualizar la imagen del pokemon que escriba */

const pokeImage =(url) =>{
    const pokeImg = document.getElementById("pokeImg"); //id que hace refrencia a la imagen que vamos a estar cambiando
    pokeImg.src= url; //referenciando al atributo que deseo cambiar
}






/**La URL podria ser utilizada de la misma manera para sacar mas info de cada pokemon? es decir  */