const prompt = require("prompt-sync")();

const cadastro = [];

const modelo = () => {
  let paises = {
    pais: "",
    estado: "",
    cidade: "",
  };

cadastro.pais = prompt("Qual o nome do País? ");
let resposta;

console.log("Quando terminar digite 's'!")

while (true) {
  resposta = prompt("Digite o nome do estado: ");

  if (resposta == "s") {
    break;
  } else {
    cadastro.paises.push(resposta);
  }
}
return atividade;
};


const criar = () => {};
