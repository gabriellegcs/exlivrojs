const frm = document.querySelector("form");
const resp = document.querySelector("#msg");

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.inNome.value;
    const masculino = frm.inSexoM.checked;
    const altura = Number(frm.inAltura.value);

    let peso

    if (masculino){
        peso = 22 * Math.pow(altura,2);
    } else {
        peso = 21 * Math.pow(altura,2);
    }

    resp.innerText=`${nome}, o peso ideal para sua altura é: ${peso.toFixed(3)} Kg.`
})