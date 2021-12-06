// const salvador = `Salvador`
// const saoPaulo = `São Paulo`
// const rioDeJaneiro = `Rio de Janeiro`

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`
); //criando uma lista

//esta forma de criar lista é identica a lista = []

listaDeDestinos.push(`Belém`); //adicionando elementos

console.log(listaDeDestinos);

listaDeDestinos.splice(1,1); //removendo elementos
console.log(listaDeDestinos)

console.log(`Eu nasci em ${listaDeDestinos[3]}.`)