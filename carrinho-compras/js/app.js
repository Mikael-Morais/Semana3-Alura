// Variável global para manter o valor total acumulado
let valorTotalAcumulado = 0;

limpar();


function adicionar() {
    // Pega os parâmetros de input e modela alguns valores    
    let produto = document.getElementById("produto").value;
    let nomeProduto = produto.split("-")[0].trim();
    let valorProduto = produto.split("R$")[1].trim();
    let quantidade = document.getElementById("quantidade").value;
    let listaProduto = document.getElementById("lista-produtos");

    if (!produto || produto.trim() === "") {
        alert("Selecione um produto válido.");
        return;
    }

    if( quantidade <= 0){
        alert("Digite um valor de quantidade válido");
    } else{

    // Pega o sub total
    let subValor = preco(quantidade, valorProduto);
    
    // Atualiza o valor total acumulado
    valorTotalAcumulado += subValor;
    
    // Escreve o sub total e o elemento escolhido no carrinho
    listaProduto.innerHTML += ` <section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${subValor}</span>
        </section>
      </section>`;

    let carrinhoValorFinal = document.getElementById("valor-total");
    carrinhoValorFinal.innerHTML = `<span class="texto-azul">R$ ${valorTotalAcumulado}</span>`;
  
    document.getElementById("quantidade").value = 0;
    }
}


function limpar() {
    // Reseta a lista de produtos e o valor total acumulado
    document.getElementById("lista-produtos").innerHTML = '';
    document.getElementById("valor-total").innerHTML = '<span class="texto-azul">R$ 0,00</span>';
    valorTotalAcumulado = 0;  // Reseta o valor total acumulado
}

function preco(quantidade, valor) {
    let subTotal = quantidade * valor; 
    return subTotal;
}
