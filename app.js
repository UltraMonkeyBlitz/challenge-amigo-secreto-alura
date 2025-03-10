// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

//función para agregar amigos

function agregarAmigo() {
    let input = document.getElementById('amigo').value;

    // Verifica que el input no esté vacío
    if (input.trim() !== '') {
        //Indica que el amigo ya fue ingresado a la lista y que ingrese otro
        if (amigos.includes(input)) {
            document.getElementById('resultado').innerHTML = `${input} ya está en la lista, ingresa otro amigo`;
            document.getElementById('amigo').value = '';
            return;
        }
        // Agrega el amigo al array
        amigos.push(input);
        //console.log(amigos);
        // Limpia el input
        document.getElementById('amigo').value = '';
        // Actualiza la lista en la página
        mostrarAmigos(amigos);
        // Mensaje amigo agregado
        document.getElementById('resultado').innerHTML = `${input} ha sido agregado a la lista de amigos.`;
    } else {
        alert("Por favor, inserte un nombre.");
    }
}
function mostrarAmigos(amigos) {
    const lista = document.getElementById("listaAmigos");
    //limpia lista
    lista.innerHTML = "";

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
        //indicar que no hay nombres en la lista
        document.getElementById('resultado').innerHTML = 'Ups... No encontramos a tus amigos en la lista, ¡ingresalos!';
        return;
    }
    if (amigos.length === 1) {
        //indicar que agregue más amigos a la lista
        document.getElementById('resultado').innerHTML = 'Agrega más amigos a la lista!';
        return;
    }
    

    //selección un amigo aleatorio del Array
    const nombreSorteado = amigos[Math.floor(Math.random() * amigos.length)];

     // Mostrar el resultado
     document.getElementById('resultado').innerHTML = `El amigo sorteado es: ${nombreSorteado}`;
}
