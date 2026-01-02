// cria referência ao form e aos elementos h3 e h4 (resposta)
const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    const titulo = frm.inTitulo.value             // obtem o conteúdo do campo "Título do Filme"
    const duracao = Number(frm.inDuracao.value)   // obtem o conteúdo do campo "Duração (min)"

    const horas = Math.floor(duracao/60)  // Math.floor - Arredonda o valor para baixo (resultado)
    const minutos = duracao % 60          // % - obtem o resto da divisão

    resp1.innerText = titulo                                     //exibe a resposta do campo "Título do Filme"
    resp2.innerText = `${horas} hora(s) e ${minutos} minuto(s)`  //exibe a resposta do campo "Duração (min)"

    e.preventDefault()   // evita o envio do form quando o usuário clica sobre o botão submit de um formulário
}) 