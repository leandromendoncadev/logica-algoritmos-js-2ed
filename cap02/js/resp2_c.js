// cria referência ao elemento form e ao h3 (pnde será exibida a resposta)
const frm = document.querySelector("form")
const resp1 = document.querySelector("#inPromocao")
const resp2 = document.querySelector("#inApenas")

// cria um "ouvinte" de evento, acionado quando o botao submit for clicado
frm.addEventListener("submit", (e) => {
    const produto = frm.inProduto.value
    const preco = Number(frm.inPreco.value)

    const promocao = 2 * preco + (preco /2)
    const desconto =  preco / 2
    
    resp1.innerText = `${produto} - Promoção: Leve 3 por R$ ${promocao.toFixed(2)}`
    resp2.innerText = `O 3° produto custa apenas R$ ${desconto.toFixed(2)}`

    e.preventDefault()
})