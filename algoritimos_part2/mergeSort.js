const listaLivros = require("./listaLivros")

function mergeSorte (array) {
    if(array.length > 1){
        const meio = Math.floor(array.length / 2);

        const parte1 = mergeSorte(array.slice(0, meio)) ;
        const parte2 = mergeSorte(array.slice(meio, array.length));

        array = ordena(parte1, parte2);
    }

    return array
}

function ordena (parte1, parte2) {
    let posicaoAtualPart1 = 0;
    let posicaoAtualPart2 = 0;

    const resultado = [];

    while(posicaoAtualPart1 < parte1.length && posicaoAtualPart2 < parte2.length) {
        let produtoAtualPart1 = parte1[posicaoAtualPart1];
        let produtoAtualPart2 = parte2[posicaoAtualPart2];

        if(produtoAtualPart1.preco < produtoAtualPart2.preco) {
            resultado.push(produtoAtualPart1);
            posicaoAtualPart1++
        }else{
            resultado.push(produtoAtualPart2);
            posicaoAtualPart2++;
        }
    }
    return resultado.concat(posicaoAtualPart1 < parte1.length ? parte1.slice(posicaoAtualPart1) : parte2.slice(posicaoAtualPart2));
}



console.log(mergeSorte(listaLivros));