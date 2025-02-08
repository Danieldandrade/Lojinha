function adicionar(produto){
    const qtd = document.getElementById('qtd_' + produto)
    const valor = document.getElementById('valor_' + produto)
    const total = document.getElementById('total_' + produto)

    qtd.innerHTML ++

    total.innerHTML = qtd.innerHTML * valor.innerHTML

}

function retirar(produto){
    const qtd = document.getElementById('qtd_' + produto)
    const valor = document.getElementById('valor_' + produto)
    const total = document.getElementById('total_' + produto)

    qtd.innerHTML --

    total.innerHTML = qtd.innerHTML * valor.innerHTML
}