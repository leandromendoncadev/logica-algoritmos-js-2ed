const prompt = require("prompt-sync") ()                 //adiciona o pacote prompt-sync
const pessoas = Number(prompt("N° de Pessoas: "))       //lê os dados de entrada
const peixes = Number(prompt("N° de Peixes: "))

let pagar                                               // declara a variável
if (peixes <= pessoas){
    pagar = pessoas * 20
} else {
    pagar = (pessoas *20) + ((peixes - pessoas) *12)
}
console.log(`Pagar R$: ${pagar.toFixed(2)}`)          // exibe o valor a ser pago