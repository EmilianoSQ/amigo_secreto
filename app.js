let amigos = [];

function agregarAmigo() {
    const inputNombre = document.getElementById('amigo');
    const nombre = inputNombre.value.trim();
    
    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }
    
    amigos.push(nombre);
    
    inputNombre.value = '';
    
    mostrarListaAmigos();
}

function mostrarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    
    lista.innerHTML = '';
    
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos para sortear. Por favor, agregue algunos nombres.');
        return;
    }
    
    const resultado = document.getElementById('resultado');
    
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    const amigoSorteado = amigos[indiceAleatorio];
    
    resultado.innerHTML = `<li>¡El amigo secreto es: <b>${amigoSorteado}</b>!</li>`;
}