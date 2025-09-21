// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//const { createElement } = require("react");



let amigos = [];



function agregarAmigo() {
    
    //en esta parte capturo el valor del input 
    const amigoAgregado = document.getElementById("amigo");
    
    const nombre = amigoAgregado.value 

    //validamos que no este vacio
if (nombre == "") {
    alert ("Ingresa un nombre por favor ");
    return;
}


        console.log(nombre );

    //agrego el nombre al array
    amigos.push(nombre);

    //limpio el campo 
    amigoAgregado.value = ""



console.log(amigos);

mostrarLista();

}


function mostrarLista() {

    //obtenemos el elemento donde se van a mostrar los nobres que agregamos 
    const lista = document.getElementById("listaAmigos");

    //limpiamos lista antes de actializarla
    lista.innerHTML="";

    //vamos a iterar sobre la lista
    for (let i = 0; i < amigos.length; i++) {

        //creamos elemento  para cada amigo 
        const friend =document.createElement("li");

        friend.textContent= amigos[i];

        
        // agrego el <li> a la lista
        lista.appendChild(friend);

        
    }

}

function sortearAmigo() {
    
    //1.validamos que haya amigos disponibles
if (amigos.length === 0) {
    alert("No escribiste ningun nombre")
    return;
}

//2-Generamos indice aleatorio

const indiceAleatorio = Math.floor(Math.random()* amigos.length);

//3 Obtenemos el nmbre sorteado:

const amigoSorteado = amigos[indiceAleatorio];

//4 Ahora quiero mostrar el resultado en pantalla

const resultado = document.getElementById("resultado")

resultado.innerHTML=`<li>${amigoSorteado}</li> `; 



}








