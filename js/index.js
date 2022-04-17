let btn_cript = document.querySelector(".btn_cript");
let btn_descript = document.querySelector(".btn_descript");
let input = document.querySelector(".input_principal");
let resultado = document.querySelector(".resultado");
let msg_vazio_bold = document.querySelector(".resultado_vazio_bold");
let msg_vazio = document.querySelector(".resultado_vazio");
let img_vazio = document.querySelector(".img_lupa");

btn_cript.addEventListener("click", function () {
  validaTexto(criptografa);
});

btn_descript.addEventListener("click", function () {
  validaTexto(descriptografa);
});

function validaTexto(funcao) {
  if (input.value == "") { //input.value vazio
    resultado.textContent = "";
    msg_vazio_bold.style.display = "block";
    msg_vazio.style.display = "block";
    img_vazio.style.display = "block";
    return;
  }

  else {
    for (let i = 0; i < input.value.length; i++) {
      if (input.value.charCodeAt(i) < 97 || input.value.charCodeAt(i) > 122) {
        if (input.value.charCodeAt(i) == 32) continue;
        if (input.value.charCodeAt(i) == 44) continue;
        if (input.value.charCodeAt(i) == 46) continue;
        if (input.value.charCodeAt(i) == 231) continue;
        else { //input.value com caracteres inválidos
          alert("Digite um texto válido!");
          input.value = "";
          return;
        }
      }
    }
  }

  //input.value válido
  msg_vazio_bold.style.display = "none";
  msg_vazio.style.display = "none";
  img_vazio.style.display = "none";

  resultado.textContent = funcao(input.value);
  input.value = "";
}

function criptografa(texto) {
  let resultado = texto;

  resultado = resultado.replaceAll("e", "enter");
  resultado = resultado.replaceAll("i", "imes");
  resultado = resultado.replaceAll("a", "ai");
  resultado = resultado.replaceAll("o", "ober");
  resultado = resultado.replaceAll("u", "ufat");

  return resultado;
}

function descriptografa(texto) {
  let resultado = texto;

  resultado = resultado.replaceAll("ai", "a");
  resultado = resultado.replaceAll("enter", "e");
  resultado = resultado.replaceAll("imes", "i");
  resultado = resultado.replaceAll("ober", "o");
  resultado = resultado.replaceAll("ufat", "u");

  return resultado;
}