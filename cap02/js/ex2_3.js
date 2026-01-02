// cria referência ao form e aos elementos de resposta (pelo seu id)
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

// cria um "ouvinte" de evento, acionado quando o botao submit for clicado
frm.addEventListener("submit", (e) => {
    const veiculo = frm.inVeiculo.value       //obtem o conteudo do campo "Véiculo"
    const preco = Number(frm.inPreco.value)   //obtem o conteudo do campo "Preço R$"

    const entrada = preco * 0.50              // calcula o valor da entrada
    const parcela = (preco * 0.50) / 12       // calcula o valor das parcelas

    resp1.innerText = `Promoção: ${veiculo}`                  //exibe a resposta do campo "Véiculo"
    resp2.innerText = `Entrada de R$: ${entrada.toFixed(2)}`  //exibe a resposta do campo "Entrada"
    resp3.innerText = `+ 12x de R$: ${parcela.toFixed(2)}`     //exibe a resposta do campo "Parcela"
    
    e.preventDefault() // evita o envio do form quando o usuário clica sobre o botão "submit" de um formulário
})
