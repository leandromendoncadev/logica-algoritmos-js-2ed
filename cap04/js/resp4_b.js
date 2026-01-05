const form = document.querySelector("form")
const resp = document.querySelector("h3")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const permitida = Number(form.inVelocidadePermitida.value)
    const condutor = Number(form.inVelocidadeCondutor.value)

    let limiteLeve = permitida * 1.20
   
    if (condutor <= permitida) {
        resp.innerText = `Situação: Sem Multa`
    } else if (condutor <= limiteLeve) {
        resp.innerText = `Situação: Multa Leve`
    } else {
        resp.innerText = `Situação: Multa Grave`
    }
})