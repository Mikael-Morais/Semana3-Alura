function alterarStatus(id){
    let gameSelecionado = document.getElementById(`game-${id}`);
    let imagem = gameSelecionado.querySelector(".dashboard__item__img");
    let botao = gameSelecionado.querySelector(".dashboard__item__button");

    alterarParametros(gameSelecionado);
}

function alterarParametros(selecionado){
    let imagem = selecionado.querySelector(".dashboard__item__img");
    let botao = selecionado.querySelector(".dashboard__item__button"); 
    let nomeJogo = selecionado.querySelector('.dashboard__item__name').textContent;  
    
    if(imagem.classList.contains("dashboard__item__img--rented")){
    if(confirm(`Deseja devolver o jogo ${nomeJogo}?`)){
        imagem.classList.remove("dashboard__item__img--rented");
        botao.classList.remove("dashboard__item__button--return")

        botao.innerHTML = "Alugar";
        }
    } else{
        if(confirm(`Deseja alugar o jogo ${nomeJogo}?`)){

        imagem.classList.add("dashboard__item__img--rented");
        botao.classList.add("dashboard__item__button--return")
        botao.innerHTML = "Devolver";
        }
    }

}

