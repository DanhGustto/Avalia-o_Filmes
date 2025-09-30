import {
  adicionarFilme,
  ordenarPorNota,
  calcularMedia,
  melhoresAvaliados,
  filtrarPorGenero
} from "./filmes.js";

import { criarItemFilme } from "./utils.js";

// Elementos do DOM
const form = document.getElementById("form-filme");
const lista = document.getElementById("lista-filmes");
const estrelasContainer = document.getElementById("estrelas");
const notaEstrelasInput = document.getElementById("notaEstrelas");
const nota10Input = document.getElementById("nota10");
const contadorFilmes = document.getElementById("contador-filmes");
const mediaNotas = document.getElementById("media-notas");
const listaMelhores = document.getElementById("melhores-filmes");
const btnFiltrar = document.getElementById("btn-filtrar");
const inputFiltro = document.getElementById("filtro");

// Estrelas interativas
estrelasContainer.innerHTML = "";

for (let i = 1; i <= 5; i++) {
  const estrela = document.createElement("span");
  estrela.textContent = "★";
  estrela.dataset.valor = i;

  estrela.addEventListener("click", () => {
    notaEstrelasInput.value = i;
    atualizarEstrelas(i);
  });

  estrelasContainer.appendChild(estrela);
}

function atualizarEstrelas(valor) {
  const estrelas = estrelasContainer.querySelectorAll("span");
  estrelas.forEach((estrela, index) => {
    estrela.classList.toggle("ativa", index < valor);
  });
}

// Envio do formulário
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const genero = document.getElementById("genero").value.trim();
  const comentario = document.getElementById("comentario").value.trim();
  const nota10 = parseFloat(nota10Input.value);
  const notaEstrelas = parseInt(notaEstrelasInput.value);

  if (
    !nome ||
    !genero ||
    !comentario ||
    isNaN(nota10) || nota10 < 0 || nota10 > 10 ||
    isNaN(notaEstrelas) || notaEstrelas < 1 || notaEstrelas > 5
  ) {
    alert("Preencha todos os campos corretamente!");
    return;
  }

  adicionarFilme(nome, nota10, notaEstrelas, genero, comentario);
  atualizarRanking();
});

// Atualiza o ranking completo
function atualizarRanking() {
  const ordenados = ordenarPorNota();

  // Lista principal
  lista.innerHTML = "";
  ordenados.forEach(filme => {
    lista.appendChild(criarItemFilme(filme));
  });

  // Contador
  contadorFilmes.textContent = `Total de filmes avaliados: ${ordenados.length}`;

  // Média
  mediaNotas.textContent = `Média das notas: ${calcularMedia()}`;

  // Melhores avaliados
  const melhores = melhoresAvaliados();
  listaMelhores.innerHTML = "";
  melhores.forEach(filme => {
    listaMelhores.appendChild(criarItemFilme(filme));
  });
}

// Filtro por gênero
btnFiltrar.addEventListener("click", () => {
  const genero = inputFiltro.value.trim();
  if (!genero) return;

  const filtrados = filtrarPorGenero(genero);
  lista.innerHTML = "";
  filtrados.forEach(filme => {
    lista.appendChild(criarItemFilme(filme));
  });
});

