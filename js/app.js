let totalDoCarrinho;
limpar();

function adicionar(){
    let produto =  document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0]
    let precoUnidadeProduto = parseInt(produto.split('R$')[1]);
    let qntProdutos = document.getElementById('quantidade').value;
    let precoSubTotal;

    if (qntProdutos > 1) {
        precoSubTotal = precoUnidadeProduto * qntProdutos;
    } else {
        precoSubTotal = precoUnidadeProduto;
        qntProdutos = 1;
    }

    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${qntProdutos}x</span> ${nomeProduto} <span class="texto-azul">R$${precoUnidadeProduto}</span>
        </section>`;
    
    let campoTotalDoCarrinho = document.getElementById('valor-total');
    totalDoCarrinho = totalDoCarrinho + precoSubTotal;
    campoTotalDoCarrinho.textContent = `R$${totalDoCarrinho}`;
    
    document.getElementById('quantidade').value = '';
}

function limpar() {
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$0';
    totalDoCarrinho = 0;
}