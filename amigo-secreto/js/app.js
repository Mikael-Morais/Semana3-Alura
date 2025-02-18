let listaAmigos = [];

function adicionar(){
    let nomeAmigo = document.getElementById('nome-amigo').value.toUpperCase();
    if(nomeAmigo == ""){
        alert('Digite um nome!');
        return;
    }
    if(listaAmigos.includes(nomeAmigo)){
        alert("nome ja adicionado!");
        return;
    }

    let listaAmigosElement = document.getElementById('lista-amigos');
    
    listaAmigos.push(nomeAmigo);
    
    if(listaAmigosElement.textContent == ""){
        listaAmigosElement.innerHTML += `${nomeAmigo}`;
    } else {
        listaAmigosElement.innerHTML += `, ${nomeAmigo}`;
    }

    document.getElementById('nome-amigo').value = '';
} 

function sortear(){
    if(listaAmigos.length < 4){
        alert('Adicione pelo 4 amigos!');
        return;
    }

    embaralha(listaAmigos);
    let listaSorteio = document.getElementById('lista-sorteio');

    for(let i = 0; i < listaAmigos.length; i++){

        if(i == listaAmigos.length -1){
            listaSorteio.innerHTML += listaAmigos[i] + ' -> ' + listaAmigos[0] + '<br>';
        } else{
            listaSorteio.innerHTML += listaAmigos[i] + ' -> ' + listaAmigos[(i + 1)] + '<br>';
        }
    }
}

function embaralha(lista) {
    let indice = lista.length;
    for (indice; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar(){
    if(confirm("deseja mesmo limpar a lista?")){
        document.getElementById('lista-amigos').innerHTML = '';
        document.getElementById('lista-sorteio').innerHTML = '';
        document.getElementById('nome-amigo').value = '';
        listaAmigos = [];
    }
}