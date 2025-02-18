function sortear(){
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);
    let vetorValores = [];
    
if(de > ate){
    alert("O valor inicial não pode ser maior que o valor final");
} else if(quantidade > (ate - de + 1)){
    alert("A quantidade de números a serem sorteados não pode ser maior que o intervalo de números");

    } else{
        for(let i = 0; i < quantidade; i++){
         let sorteio = sortearNumeroAleatorio(de, ate);

            while(vetorValores.includes(sorteio)){
            sorteio = sortearNumeroAleatorio(de, ate);
            }   
            vetorValores.push(sorteio);
        }
}    
console.log(vetorValores);
let resultado = document.getElementById("resultado");
resultado.innerHTML= `<label class="texto__paragrafo">Os valores sorteados foram: ${vetorValores}</label>`;
alterarStatusBotao();
}
function sortearNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function limpar(){
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    document.getElementById("resultado").innerHTML = "<label class=\"texto__paragrafo\">Números sorteados:  nenhum até agora</label>";
}

function reiniciar(){
    limpar();
    alterarStatusBotao();
}

function alterarStatusBotao(){
    let botao = document.getElementById("btn-reiniciar");
    let botaoSortear = document.getElementById("btn-sortear");
    if(botao.classList.contains("container__botao-desabilitado")){

        botao.classList.remove("container__botao-desabilitado");
        botao.classList.add("container__botao");

    } else{

        botao.classList.remove("container__botao");
        botao.classList.add("container__botao-desabilitado");
    }
    if(botaoSortear.classList.contains("container__botao")){
        botaoSortear.classList.remove("container__botao");
        botaoSortear.classList.add("container__botao-desabilitado");
    } else{
        botaoSortear.classList.remove("container__botao-desabilitado");
        botaoSortear.classList.add("container__botao");
    }
}