    const frm = document.querySelector("form");
    const resp = document.querySelector("h1");

addEventListener("submit", (e) => {
    const valor = Number(frm.inValor.value);
    const tempo = Number(frm.inTempo.value);
    const total =  Math.ceil(tempo / 15) * valor;

    resp.innerText = `O valor a pagar é de R$ ${total.toFixed(2)}`

        e.preventDefault();
})