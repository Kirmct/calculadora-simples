const btns = document.querySelectorAll(`.btn`);

const addInput = (valor) => {
  let valores = document.querySelector(`#result`);
  valores.value += valor.currentTarget.innerText;
};
btns.forEach((botao) => {
  botao.addEventListener(`click`, addInput);
});

const selectOperantion = (operation) => {
  let valores = document.querySelector(`#result`);
  switch (operation.currentTarget.innerText) {
    case "/":
      valores.value += operation.currentTarget.innerText;
      break;
    case "*":
      valores.value += operation.currentTarget.innerText;
      break;
    case "-":
      valores.value += operation.currentTarget.innerText;
      break;
    case "+":
      valores.value += operation.currentTarget.innerText;
      break;
    case "C":
      valores.value = ``;
      break;
    case "=":
      let result = valores.value.split("");
      let ok = result[result.length - 1];
      if (valores.value && ok != `+` && ok != `-` && ok != `*` && ok != `/`) {
        valores.value = eval(valores.value);
      }
      break;
  }
};

const operationValue = document.querySelectorAll(`.operation`);
operationValue.forEach((botao) => {
  botao.addEventListener(`click`, selectOperantion);
});
