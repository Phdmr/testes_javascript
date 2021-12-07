const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`
);

const idadeComprador1 = 15;
const idadeComprador2 = 21;
estaCompanhado1 = true;
estaCompanhado2 = false;
listaDeDestinos.push(`Belém`);

console.log(listaDeDestinos);

function verIdade(comp, estaCompanhado) {
    if (comp >= 18) {
        console.log("Você pode adiquirir passagens" +
            " para os seguintes locais: " + listaDeDestinos);
    }
    else if (estaCompanhado) {
        console.log("O seu responsável pode comparar passagens para " +
            "os seguintes destinos: " + listaDeDestinos);
    }
    else {
        console.log("Você mão tem idade para comprar " +
            "as passagens");
    }
}

verIdade(idadeComprador1, estaCompanhado1);

verIdade(idadeComprador2, estaCompanhado2);