    const frm = document.querySelector("form");
    const resp = document.querySelector("#tituloPromocao");

addEventListener("submit", (e) =>{
    const produto = (frm.inProduto.value);
    const precoUnitario = Number(frm.inPreco.value);
    const precoDesconto = Number(precoUnitario / 2);
    const precoPromocao = Number(precoUnitario * 2) + precoDesconto;

    resp.innerText = `Promoção ${produto}. Leve 3 por R$ ${precoPromocao.toFixed(2)}. O 3º produto custa apenas R$ ${precoDesconto.toFixed(2)}`

    e.preventDefault()

})