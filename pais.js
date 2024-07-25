const prompt = require("prompt-sync")();
const paises = [];

const validarPais = (pais) => pais.nome != "" && pais.sigla.length == 2;

const criarPais = () => {
  const nome = prompt("Digite o nome");
  const sigla = prompt("Digite a sigla").toUpperCase();

  if (validarPais({ nome, sigla })) {
    paises.push({ nome, sigla });
    console.log("País criado com sucesso!");
  } else {
    console.log("País inválido!")
  }
}


