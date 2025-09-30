// scripts/utils.js

/**
 * Cria um item visual para exibir um filme no ranking
 * @param {Object} filme - Objeto com nome, nota10, notaEstrelas, gênero e comentário
 * @returns {HTMLElement} - Elemento <li> com os dados do filme
 */
export function criarItemFilme(filme) {
  const li = document.createElement("li");

  const estrelas = "★".repeat(filme.notaEstrelas) + "☆".repeat(5 - filme.notaEstrelas);

  li.innerHTML = `
    <strong>${filme.nome}</strong> (${filme.genero})<br>
    ${filme.comentario}<br>
    Nota: ${filme.nota10}/10<br>
    Avaliação: ${estrelas}
  `;

  return li;
}

