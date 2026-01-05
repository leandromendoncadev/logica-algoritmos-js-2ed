const form = document.querySelector("form")
const resp1 = document.querySelector("#outTempo")
const resp2 = document.querySelector("#outTroco")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const valorDeposito = Number(form.inValor.value)

       if (valorDeposito < 1.00) {
        resp1.innerText = `"Valor Insuficiente"`
        resp2.innerText = ""
        return
    }

    let calculoTempo 
    let valorBase
        if (valorDeposito >= 1.00 && valorDeposito < 1.75) {
            calculoTempo = 30
            valorBase = 1.00
        } else if (valorDeposito >= 1.75 && valorDeposito < 3.00) {
            calculoTempo = 60
            valorBase = 1.75
        } else {
            calculoTempo = 120
            valorBase = 3.00
        }

    const troco = valorDeposito - valorBase   

    resp1.innerText = `Tempo: ${calculoTempo} min`
    resp2.innerText = `Troco: R$ ${troco.toFixed(2)}`    
})