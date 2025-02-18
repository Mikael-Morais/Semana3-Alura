function comprar() {
    let tipoDeIngresso = document.getElementById("tipo-ingresso").value;
    let quantidadeEscolhida = parseInt(document.getElementById("qtd").value);
    let quantidadePista = parseInt(document.getElementById("qtd-pista").textContent);
    let quantidadeCadeiraInferior = parseInt(document.getElementById("qtd-inferior").textContent);
    let quantidadeCadeiraSuperior = parseInt(document.getElementById("qtd-superior").textContent);

    if(quantidadeEscolhida <= 0 || isNaN(quantidadeEscolhida)) {
        alert("Quantidade inválida");
        return
    }
    if (tipoDeIngresso == "pista") {
        comprarPista(quantidadeEscolhida, quantidadePista);
        document.getElementById("qtd").value = "";
    } else if (tipoDeIngresso == "inferior") {
        comprarCadeiraInferior(quantidadeEscolhida, quantidadeCadeiraInferior);
        document.getElementById("qtd").value = "";
    } else if (tipoDeIngresso == "superior") {
        comprarCadeiraSuperior(quantidadeEscolhida, quantidadeCadeiraSuperior);
        document.getElementById("qtd").value = "";
    }
}

function comprarPista(quantidadeEscolhida, quantidadePista) {
    let qtdPista = 0;
    if (quantidadeEscolhida > quantidadePista) {
        alert("Quantidade indisponível");
    } else {
        qtdPista = quantidadePista - quantidadeEscolhida;
        document.getElementById("qtd-pista").textContent = qtdPista;
    }
}

function comprarCadeiraInferior(quantidadeEscolhida, quantidadeCadeiraInferior) {
    let qtdCadeiraInferior = 0;
    if (quantidadeEscolhida > quantidadeCadeiraInferior) {
        alert("Quantidade indisponível");
    } else {
        qtdCadeiraInferior = quantidadeCadeiraInferior - quantidadeEscolhida;
        document.getElementById("qtd-inferior").textContent = qtdCadeiraInferior;
    }
}

function comprarCadeiraSuperior(quantidadeEscolhida, quantidadeCadeiraSuperior) {
    let qtdCadeiraSuperior = 0;
    if (quantidadeEscolhida > quantidadeCadeiraSuperior) {
        alert("Quantidade indisponível");
    } else {
        qtdCadeiraSuperior = quantidadeCadeiraSuperior - quantidadeEscolhida;
        document.getElementById("qtd-superior").textContent = qtdCadeiraSuperior;
    }
}