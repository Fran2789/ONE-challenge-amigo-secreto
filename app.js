// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo(){
amigoForm = document.getElementById("amigo").value;
if (amigoForm.length == 0 ){
    alert("por favor ingrese un nombre");
    console.log(amigoForm);
}
else{
    amigos.push(amigoForm);
    document.getElementById("amigo").value = "";
    actualizarAmigos();
    console.log(amigoForm);

}
}

function actualizarAmigos(){
    document.getElementById("listaAmigos").innerHTML = "";
    for (let i = 0; i < amigos.length; i++){
        document.getElementById("listaAmigos").innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function sortearAmigo(){
    numeroRandom = Math.floor(Math.random() * amigos.length);
    amigoRandom = amigos[numeroRandom];
    document.getElementById("resultado").innerHTML = `<p>Amigo Aleatorio: ${amigoRandom}<p>`;
    console.log(amigoRandom);
}