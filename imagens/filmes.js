export const filmes = [];

/**
 * Adiciona um filme à lista
 * @param {string} nome
 * @param {number} nota10 - nota de 0 a 10
 * @param {number} notaEstrelas - nota de 1 a 5
 * @param {string} genero
 * @param {string} comentario
 */
export function adicionarFilme(nome, nota10, notaEstrelas, genero, comentario) {
  filmes.push({ nome, nota10, notaEstrelas, genero, comentario });
}

/**
 * Ordena os filmes por notaEstrelas (maior para menor)
 * @returns {Array}
 */
export function ordenarPorNota() {
  return [...filmes].sort((a, b) => b.notaEstrelas - a.notaEstrelas);
}

/**
 * Filtra os filmes por gênero
 * @param {string} genero
 * @returns {Array}
 */
export function filtrarPorGenero(genero) {
  return filmes.filter(filme => filme.genero.toLowerCase() === genero.toLowerCase());
}

/**
 * Calcula a média das notas de 0 a 10
 * @returns {string}
 */
export function calcularMedia() {
  if (filmes.length === 0) return "0.00";
  const total = filmes.reduce((acc, filme) => acc + filme.nota10, 0);
  return (total / filmes.length).toFixed(2);
}

/**
 * Retorna os filmes com notaEstrelas >= 4
 * @returns {Array}
 */
export function melhoresAvaliados() {
  return filmes.filter(filme => filme.notaEstrelas >= 4);
}
