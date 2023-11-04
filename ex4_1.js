const frm = document.querySelector("form");
const resp1 = document.querySelector("#msgMedia");
const resp2 = document.querySelector("#msgSituacao");

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const nome = frm.inNome.value;
    const nota1 = Number(frm.inNota1.value);
    const nota2 = Number(frm.inNota2.value);
    const media = (nota1 + nota2) / 2;

    resp1.innerText=`Médias das notas: ${media}`;

        if (media >=7) {
            resp2.innerText=`Parabéns, ${nome}! Você foi aprovado(a).`;
            resp2.style.color = "blue";
        } else {
            resp2.innerText=`Que pena, ${nome}! Você foi reprovado(a).`;
            resp2.style.color = "red";
            }
        }
      )
