let lista = [];

function adicionarAmigo() {
    let nome = document.getElementById("amigo").value;

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    lista.push(nome);

    //limpa o campo de texto após adicionar um amigo
    document.getElementById("amigo").value = ""; 

    atualizarLista();
}

function atualizarLista() {
    document.getElementById("listaAmigos").innerHTML = "";
    
    lista.forEach((amigo) => {
        document.getElementById("listaAmigos").innerHTML += `${amigo} <br>`;
    });
}

function sortearAmigo() {
    if (lista.length === 0) {
        alert("Adicione amigos antes de sortear.");
        return;
    }

    document.getElementById("listaAmigos").innerHTML = "";

    let amigoSorteado = lista[Math.floor(Math.random() * lista.length)];
    document.getElementById("resultado").innerHTML += `O amigo secreto sorteado é: ${amigoSorteado} <br>`;
  
}
