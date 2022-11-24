const { edGalho, edFolha } = require('./arrays');

function juntaListas(lista1, lista2) {
    let listaFinal = [];
    let posicaoAtualLista1 = 0;
    let posicaoAtualLista2 = 0;

    while (posicaoAtualLista1 < lista1.length && posicaoAtualLista2 < lista2.length) {
        if (lista1[posicaoAtualLista1].preco < lista2[posicaoAtualLista2].preco) {
            listaFinal.push(lista1[posicaoAtualLista1]);
            posicaoAtualLista1++;
        } else {
            listaFinal.push(lista2[posicaoAtualLista2]);
            posicaoAtualLista2++;
        }
    }

    while (posicaoAtualLista1 < lista1.length) {
        listaFinal.push(lista1[posicaoAtualLista1]);
        posicaoAtualLista1++;
    }

    while (posicaoAtualLista2 < lista2.length) {
        listaFinal.push(lista2[posicaoAtualLista2]);
        posicaoAtualLista2++;
    }

    return listaFinal
}

console.log(juntaListas(edFolha, edGalho));