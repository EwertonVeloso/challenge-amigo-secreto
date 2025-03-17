//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let lista = [];

function adicionarAmigo() {
    let nome = document.getElementById("amigo").value;

    if (nome === "") {
        alert("Digite um nome!");
        return;
    }

    lista.push(nome);
    document.getElementById("listaAmigos").innerHTML += `<li>${nome}</li>`;

    //limpa o campo de texto após adicionar um amigo
    document.getElementById("amigo").value = ""; 
}

function sortearAmigo() {
    if (lista.length === 0) {
        alert("Adicione amigos antes de sortear.");
        return;
    }

    let amigoSorteado = lista[Math.floor(Math.random() * lista.length)];
    //limpa o espaço da lista de amigos antes de mostrar o amigo sorteado
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML += `O amigo secreto sorteado é: ${amigoSorteado} <br>`;
  
}