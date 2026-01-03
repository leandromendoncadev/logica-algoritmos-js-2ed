const prompt = require("prompt-sync")()                // adiciona o pacote ao programa
const veiculo = prompt("Veículo: ")                    //Lê os dados de entrada
const preco = Number(prompt("Preço R$: "))
const entrada = preco * 0.50                           // calcula o valor da entrada
const parcela = (preco * 0.50) / 12                    // calcula o valor das parcelas

console.log(`Promoção: ${veiculo}`)                    //exibe o veículo digitado
console.log(`Entrada de R$: ${entrada.toFixed(2)}`)    //exibe o valor de entrada 
console.log(`+ 12x de R$: ${parcela.toFixed(2)} `)     //exibe o valor das parcelas
