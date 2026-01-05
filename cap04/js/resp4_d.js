const form = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const ladoA = Number(form.inLadoA.value)
    const ladoB = Number(form.inLadoB.value)
    const ladoC = Number(form.inLadoC.value)

    // Teste de Lados não podem formar um triângulo
    if((ladoA + ladoB <= ladoC ) || (ladoA + ladoC <= ladoB ) || (ladoB + ladoC <= ladoA )){
        resp1.innerText = `Lados não podem formar um triângulo`
        resp2.innerText = ""
        return
    }

    //Teste Equilátero | Isósceles | Escaleno
    if(ladoA === ladoB && ladoA === ladoC){
        resp1.innerText = `Lados pode Formar um Triângulo`
        resp2.innerText = `Tipo: Equilátero`
    } else if ((ladoA == ladoB && ladoA != ladoC) || (ladoA != ladoB && ladoA == ladoC)){
        resp1.innerText = `Lados pode Formar um Triângulo`
        resp2.innerText = `Tipo: Isósceles`
    } else {
        resp1.innerText = `Lados pode Formar um Triângulo`
        resp2.innerText = `Tipo: Escaleno`
    }
})