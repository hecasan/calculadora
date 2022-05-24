const operacaoAnterior = document.querySelector("#operacaoAnterior");

const operacaoAtual = document.querySelector("#operacaoAtual");

const buttons = document.querySelectorAll("#area-botoes button");

class Calculadora {}

// adicionar eventos nos botões
buttons.forEach((btn) => {
  // dentro de cada botão, adiciono um evento de click
  btn.addEventListener("click", (e) => {
    // pego o texto do botão que o evento gerou aoi ser clicado
    const valorBtn = e.target.innerText;

    // Verifico se o que digitei é um número ou um operador
    if (+valorBtn >= 0 || valorBtn === ".") {
      console.log(valorBtn);
    } else {
      console.log("operador: " + valorBtn);
    }
  });
});

// Exibir no visor Data e Hora da Calculadora
function mostrarDataHora() {
  let hoje = new Date();
  const nomeMes = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Augosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  let mes = nomeMes[hoje.getMonth()];
  let hora = hoje.getHours();
  let min = hoje.getMinutes();
  let segundos = hoje.getSeconds();
  let dia = hoje.getDate();

  dia = dia < 10 ? (dia = "0" + dia) : dia;
  min = min < 10 ? (min = "0" + min) : min;
  segundos = segundos < 10 ? (segundos = "0" + segundos) : segundos;

  if (hora > 12) {
    hora -= 12;
    periodoDia = "PM";
  } else {
    periodoDia = "AM";
  }

  hora = hora < 10 ? (hora = "0" + hora) : hora;

  document.querySelector(".dataHora").innerHTML =
    dia +
    " de " +
    mes +
    " de " +
    hoje.getFullYear() +
    "<br>" +
    hora +
    ":" +
    min +
    ":" +
    segundos +
    " " +
    periodoDia;
}

setInterval(mostrarDataHora, 1000);
