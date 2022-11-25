const listaLivros = require('./array');
const trocaLugar = require('./encontraMenores')


function quickSort(array, esquerda, direita) {
    if(array.length > 1) {
        let indiceAtual = particiona(array, esquerda, direita);

        if(esquerda < indiceAtual -1){
            quickSort(array, esquerda, indiceAtual -1)
        }
        if(indiceAtual < direita) {
            quickSort(array, indiceAtual, direita);
        }
    }
    
    return array;
}

function particiona(array, esquerda, direita) {
    let pivo = array[Math.floor((esquerda + direita) / 2)];

    let atualEsquerda = esquerda; //0 
    let atualDiretita = direita; //10

    while(atualEsquerda <= atualDiretita); {
        while(array[atualEsquerda].preco < pivo.preco) {
            atualEsquerda++;
        }
        while(array[atualDiretita].preco < pivo.preco) {
            atualDiretita--;
        }

        if(atualEsquerda <= atualDiretita){
            trocaLugar(array, atualEsquerda, atualDiretita);
            atualDiretita++;
            atualDiretita--;
        }
    }
    return atualEsquerda;
}

console.log(listaLivros, 0, listaLivros.length - 1);