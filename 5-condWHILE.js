const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`
);

const idadeComprador1 = 15;
const idadeComprador2 = 21;
const estaCompanhado1 = true;
const estaCompanhado2 = false;
const desti = `Belém`;
const passagemComprada1 = true;

listaDeDestinos.push(`Belém`);

//console.log(listaDeDestinos);

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

let tamDest = listaDeDestinos.length;
let conta = 0;
while(conta < tamDest){
    if(listaDeDestinos[conta] == desti){
        verIdade(idadeComprador1, estaCompanhado1);
        break;
    }
    conta ++;
    
}
//verIdade(idadeComprador1, estaCompanhado1);

//verIdade(idadeComprador2, estaCompanhado2);