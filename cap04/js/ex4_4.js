// cria referência ao form e elemento onde será exibida a resposta
const form = document.querySelector("form")
const resp = document.querySelector("h3")

//"ouvinte" de evento, quando o botão "submit" for clicado
form.addEventListener("submit", (e) => {
    e.preventDefault() // evita enviar o "form"
//obtem e converte o conteúdo do campo inHoraBrasil
const horaBrasil = Number(form.inHoraBrasil.value)
let horaFranca = horaBrasil + 5  //calcula do Horário na França
if(horaFranca > 24){            //se passar das 24 horas na França
    horaFranca = horaFranca - 24 //subtrai 24 
}
//exibe resposta (altera o conteudo do elemento h3 da página)
resp.innerText = `Hora na frança: ${horaFranca.toFixed(2)}`

})