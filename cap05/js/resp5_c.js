const form = document.querySelector("form");
const resp = document.querySelector("h3");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // entrada
  const num = Number(form.inNumero.value)

  // validação
  if (isNaN(num) || num <= 0)  {
    resp.innerText = "Informe um número inteiro maior que 0."
    return
  }

  // processamento
  let soma = 0;
  let divisores = []

  for (let i = 1; i <= Math.floor(num / 2); i++) {
    if (num % i === 0) {
      divisores.push(i)
      soma += i
    }
  }

  // saída
  const lista = divisores.join(", ")
  let msg = `Divisores do ${num}: ${lista} (Soma: ${soma})\n`

  if (soma === num) {
    msg += `\n${num} É um Número Perfeito`
  } else {
    msg += `\n${num} Não É um Número Perfeito`
  }

  resp.innerHTML = `<pre>${msg}</pre>`
});
