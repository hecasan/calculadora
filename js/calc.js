const operacaoAnteriorDigitada = document.querySelector("#operacaoAnterior");

const operacaoAtualDigitada = document.querySelector("#operacaoAtual");

const buttons = document.querySelectorAll("#area-botoes button");

class Calculadora {
  // Vamos criar um contrutor para a nossa classe Calculadora
  // e vamos iniciar no argumento do contrutor a operação anterior digitada e também a operação atual digitada
  constructor(operacaoAnteriorDigitada, operacaoatualDigitada) {
    // E criar as propriedades de inicialização da calculadora
    this.operacaoAnteriorDigitada = operacaoAnteriorDigitada;
    this.operacaoatualDigitada = operacaoatualDigitada;
    // e vamos criar uma propriedade com valor vazio para inicar a calculadora
    this.atualOperacao = "";
  }

  //vamos criar um métod para adicionar um dígito
  addDigito(digito) {
    // console.log(digito);
    // Colocar o dígito no visor
    this.atualOperacao = digito;
    this.atualizarTelaCalc();
  }

  atualizarTelaCalc() {
    this.operacaoatualDigitada.innerText += this.atualOperacao;
  }
}

// Vamos criar uma nova instancia da Calculadora
const calc = new Calculadora(operacaoAnteriorDigitada, operacaoAtualDigitada);

// adicionar eventos nos botões
buttons.forEach((btn) => {
  // dentro de cada botão, adiciono um evento de click
  btn.addEventListener("click", (e) => {
    // pego o texto do botão que o evento gerou ao ser clicado
    const value = e.target.innerText;

    // Verifico se o que digitei é um número ou um operador
    if (+value >= 0 || value === ".") {
      calc.addDigito(value);
    } else {
      console.log("operador: " + value);
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
