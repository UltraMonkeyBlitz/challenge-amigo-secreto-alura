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
        mostrarAmigos(amigos); // Actualiza la lista en la página
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

//función para sortear amigo
function sortearAmigo() {
    // Verificar que la lista no esté vacía
    if (amigos.length === 0) {
        alert('No hay nombres en la lista para sortear');
        return;
    }
    if (amigos.length === 1) {
        alert('Solo hay un nombre en la lista, ingresa más amigos')
        return;
    }

    //selección un amigo aleatorio del Array
    const nombreSorteado = amigos[Math.floor(Math.random() * amigos.length)];

     // Mostrar el resultado
     document.getElementById('resultado').innerHTML = `El amigo sorteado es: ${nombreSorteado}`;
}
