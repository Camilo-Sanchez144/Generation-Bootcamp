// EJEMPLOS PARA CONSUMIR APIs USANDO JAVASCRIPT

//Para poder ejecutar cada ejemplo ten en cuenta que cada ejemplo esta comentado con /**/ debes eliminar los comentarios del bloque de codigo que quieres explorar. 


    //Arrow function: (parametro) => codigo
    //No necesita la palabra "function", usa => en su lugar
fetch('https://dragonball-api.com/api/characters')
    // arrow function de una línea: no necesita {} ni return
    .then(response => response.json())

    // data es el objeto convertido
    // arrow function con varias líneas necesita {}
    .then(data => {
        //console.log("esta es la data: ", data);
        let idRandom = Math.floor(Math.random() * data.items.length); 
        console.log("El nombre del Personaje con id: "+ idRandom + " es: " + data.items[idRandom].name);
 
    })
    .catch(error => {
        console.log("Hubo un error: ", error);
    });
/* 
//Creamos una funcion async 
async function obtenerPersonajes(){
    try{
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();

        console.log(data.results[0]);
    }catch(error){
        console.log("Error: ", error);
        
    }
}

// LLamar la funcion
obtenerPersonajes();

async function explorarAPI() {
    console.log("\nExplorando diferentes endpoints de Rick and Morty...");
    
    try {
        // Personajes
        const personajes = await fetch('https://rickandmortyapi.com/api/character');
        const dataPersonajes = await personajes.json();
        console.log("Total de personajes:", dataPersonajes.info.count);
        
        // Ubicaciones
        const ubicaciones = await fetch('https://rickandmortyapi.com/api/location');
        const dataUbicaciones = await ubicaciones.json();
        console.log("Total de ubicaciones:", dataUbicaciones.info.count);
        
        // Episodios
        const episodios = await fetch('https://rickandmortyapi.com/api/episode');
        const dataEpisodios = await episodios.json();
        console.log("Total de episodios:", dataEpisodios.info.count);
        
    } catch (error) {
        console.log("Error:", error.message);
    }
}

explorarAPI();



function obtenerPersonajesConThen() {
    // Mensaje para saber que empezó la función
    console.log("1. Obteniendo personajes con .then()...");
    
    // fetch() hace la petición a la URL de la API
    fetch('https://rickandmortyapi.com/api/character')
        // .then() se ejecuta cuando la petición recibe respuesta
        // response es lo que devuelve el servidor
        .then(function(response) {
            //Verificar si la respuesta fue exitosa (código 200 - ok)
            //ok es true si la respuesta es exitosa
            if (!response.ok) {
                // Si hay error, lanzamos una excepción
                throw new Error('Error HTTP: ' + response.status);
            }
            //response.json() convierte la respuesta a un objeto JavaScript

            //Es otra promesa, por eso retornamos para el siguiente .then()
            return response.json();
        })
        //Este .then() recibe los datos ya convertidos a objeto
        .then(function(data) {
            //data.results es el arreglo de personajes
            //0] es la primera posición del arreglo
            //.name es la propiedad "name" del primer personaje
            console.log("Primer personaje:", data.results[0].name);
            console.log("Especie:", data.results[0].species);
            console.log("Estado:", data.results[0].status);
        })
        //catch() atrapa cualquier error que ocurrió en la cadena de .then()
        .catch(function(error) {
            console.log("Error:", error.message);
        });
}


obtenerPersonajesConThen();
 */