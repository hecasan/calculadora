const operacaoAnteriorDigitada = document.querySelector("#operacaoAnterior");

const operacaoAtualDigitada = document.querySelector("#operacaoAtual");

const buttons = document.querySelectorAll("#area-botoes button");

var btnLigaDesliga = document.querySelector("#btn-OnOff");
btnLigaDesliga.innerHTML = "OFF";

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
    // Verificar se no visor já tem um . (ponto)
    if (digito === "." && this.operacaoatualDigitada.innerText.includes(".")) {
      return;
    }
    // Colocar o dígito no visor
    this.atualOperacao = digito;
    this.atualizarTelaCalc();
  }

  // Processar todas as operações de calculos
  processarOperacao(operacao) {
    // Verificar se o valor atual está vazio
    if (this.operacaoatualDigitada === "") {
      // Mudar operação
      if (this.operacaoAnteriorDigitada !== "") {
        this.mudarOperacao(operacao);
      }
      return;
    }
    // Pegar o valor atual e o valor anterior digitado
    let operacaoEscolhida;
    const anterior = +this.operacaoAnteriorDigitada.innerText.split(" ")[0];
    const atual = +this.operacaoatualDigitada.innerText;

    switch (operacao) {
      case "+":
        operacaoEscolhida = anterior + atual;
        this.atualizarTelaCalc(operacaoEscolhida, operacao, atual, anterior);
        break;
      case "-":
        operacaoEscolhida = anterior - atual;
        this.atualizarTelaCalc(operacaoEscolhida, operacao, atual, anterior);
        break;
      case "X":
        operacaoEscolhida = anterior * atual;
        this.atualizarTelaCalc(operacaoEscolhida, operacao, atual, anterior);
        break;
      case "÷":
        operacaoEscolhida = anterior / atual;
        this.atualizarTelaCalc(operacaoEscolhida, operacao, atual, anterior);
        break;
      case "√":
        operacaoEscolhida = Math.sqrt(anterior);
        this.atualizarTelaCalc(operacaoEscolhida, operacao, atual, anterior);
        break;
      case "=":
        this.resultadoOperacao();
        break;
      case "C":
        this.zerarOperacao();
        break;
      case "←":
        this.removerUltimoDigito();
        break;
      case "CE":
        this.removerUltimaEntrada();
        break;

      default:
        return;
    }
  }

  atualizarTelaCalc(
    operacaoEscolhida = null,
    operacao = null,
    atual = null,
    anterior = null
  ) {
    console.log(operacaoEscolhida, operacao, atual, anterior);
    if (operacaoEscolhida === null) {
      this.operacaoatualDigitada.innerText += this.atualOperacao;
    } else {
      // Checar se o valor é zero. Se for, apenas add o valor atual
      if (anterior === 0) {
        operacaoEscolhida = atual;
      }
      // Add o valor atual para cima da calculadora como valor anterior
      this.operacaoAnteriorDigitada.innerText = `${operacaoEscolhida} ${operacao}`;
      this.operacaoatualDigitada.innerText = "";
    }
  }

  // Método para mudar a operação da calculadora
  mudarOperacao(operacao) {
    const calculosMatematicos = ["X", ":", "+", "-"];
    if (!calculosMatematicos.includes(operacao)) {
      return;
    }
    this.operacaoAnteriorDigitada.innerText.slice(0, -1) + operacao;
  }

  resultadoOperacao() {
    const opercao = operacaoAnteriorDigitada.innerText.split(" ")[1];
    this.processarOperacao(opercao);
  }

  zerarOperacao() {
    this.operacaoAnteriorDigitada.innerText = "";
    this.operacaoatualDigitada.innerText = "";
  }
  removerUltimoDigito() {
    this.operacaoatualDigitada.innerText =
      this.operacaoatualDigitada.innerText.slice(0, -1);
  }
  removerUltimaEntrada() {
    this.operacaoatualDigitada.innerText = "";
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
      calc.processarOperacao(value);
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
