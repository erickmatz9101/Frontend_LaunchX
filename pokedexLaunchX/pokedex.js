
const fetchPokemon =() =>{

    const pokeName = document.getElementById("pokeName"); //Hace refrencia al input del html para poder crear el document y busque al pokemon

    let pokeInput =pokeName.value.toLowerCase(); //indicando que tome el valor del input que se ingrese

    const url= `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;

    fetch(url).then((res) =>{

        if(res.status !="200"){
            console.log(res);
            //aqui va el gif del pigcachu en el console log
        }
        else{
            return res.json();

        }
    }).then((data) =>{ //Este .then es el que ya me da acceso a la informacion de data que yo deseo consultar y pueda verla en pantalla

        console.log(data);

        let pokeImg = data.sprites.front_default; //le indico que es lo que necesito de la data y donde se encuentra(imagen del pokemon)
        pokeImage(pokeImg); //mandando a llamar la funcion que cambia la imagen y le paso como parametro el lugar donde está
        console.log(pokeImg); 

        var num = data.id; //Mostrar el numero de pokemon que es  
        var converter= `${num}`;//haciendo casteo de entero a String
        console.log(typeof (converter));
        pokeId(converter);

        let esp = data.stats[0,2,0];
        pokeEsp(esp);

    })

}




/**Funcion que permita visualizar la imagen del pokemon que escriba */

const pokeImage =(url) =>{
    const pokeImagen = document.getElementById("pokeImg"); //id que hace refrencia a la imagen que vamos a estar cambiando

    pokeImagen.src= url; //referenciando al atributo que deseo cambiar
}


const pokeId = (numeroPokemon) =>{

    const parrafo= document.getElementById("numPokemon");

    parrafo.innerHTML=numeroPokemon;

    console.log(numeroPokemon);
    
}


const pokeEsp=(especies) =>{

    const espImage=document.getElementById("estadistica");

    espImage.innerHTML=especies;
    


}



/**La URL podria ser utilizada de la misma manera para sacar mas info de cada pokemon? es decir  */