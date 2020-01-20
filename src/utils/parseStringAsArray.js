/**
 * Função que retorna um array de uma string, separando por vírgula (,)
 */
module.exports = function (arrayAsString) {
    return arrayAsString.split(',').map(str => str.trim());
}