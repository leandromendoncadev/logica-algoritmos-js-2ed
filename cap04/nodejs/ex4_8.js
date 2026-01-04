const prompt = require("prompt-sync")();                                    // adiciona o pacote prompt-sync
const valor = Number(prompt("Valor da Compra R$: "));                       // lê o valor da compra

/* ====================**Exemplo 1 - Operador Ternário**=================*/

const aux = Math.floor(valor / 20);                                         //aux n° de parcelas sem condições
const parcelas = aux == 0 ? 1 : aux > 6 ? 6 : aux;                          // operador ternário

const valorParcela = valor / parcelas;                                      // calculo do valor da parcela
console.log(`Pode pagar em ${parcelas}x de R$ ${valorParcela.toFixed(2)}`); // exibe o resultado

/* ====================**Exemplo 2 - Utilizando if/else if/ else**=================

const aux = Math.floor(valor / 20);                                         //aux n° de parcelas sem condições

let parcelas                                                                // cria a variável
if(aux==0) {                                                                // condiões para o parcelamento
    parcelas = 1
} else if (aux > 6){
    parcelas = 6
} else {
    parcelas = aux
}

const valorParcela = valor / parcelas;                                      // calculo do valor da parcela
console.log(`Pode pagar em ${parcelas}x de R$ ${valorParcela.toFixed(2)}`); // exibe o resultado 

*/
