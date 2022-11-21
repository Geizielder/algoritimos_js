const livros = require("./listaLivros")
function menorValor(arrProdutos, posicaoInocial) {
    let maisBarato = posicaoInocial;

    for (let atual = posicaoInocial; atual < arrProdutos.length; atual++) {
        if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
            maisBarato = atual;
        }
    }
    return maisBarato;
}


module.exports = menorValor;