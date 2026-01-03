// cria referência ao elemento form e ao h3 (pnde será exibida a resposta)
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

// cria um "ouvinte" de evento, acionado quando o botao submit for clicado
frm.addEventListener("submit", (e) => {
    const medicamento = frm.inMedicamento.value  //obtem o conteudo do campo "Medicamento"
    const preco = Number(frm.inPreco.value) //obtem o conteudo do campo "Medicamento"

    const valor = Math.floor(preco)  // Math.floor - Arredonda o valor para baixo (resultado)
    const promocao = valor * 2

    resp1.innerText = `Promoção de ${medicamento}`
    resp2.innerText = `Leve 2 por apenas ${promocao.toFixed(2)}`

    e.preventDefault() // evita o envio do form quando o usuário clica sobre o botão "submit" de um formulário
})