// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

//función para agregar amigos

function agregarAmigo() {
    let input = document.getElementById('amigo').value;

    // Verifica que el input no esté vacío
    if (input.trim() !== '') {
        amigos.push(input); // Agrega el amigo al array
        console.log(amigos); // Muestra el array actualizado en la consola
        document.getElementById('amigo').value = ''; // Limpia el input
    } else {
        alert('Por favor, ingresa un nombre válido.');
    }
}
function mostrarAmigos(amigos) {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; //limpia lista

    for (let i = 0; i < amigos.length; i++) {
        const nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = amigos[i];
        lista.appendChild(nuevoElemento);
    }
    
}