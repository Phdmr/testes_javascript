const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`
);

const idadeComprador1 = 15;
const idadeComprador2 = 21;

listaDeDestinos.push(`Belém`);

console.log(listaDeDestinos);

function veriIdade(comp){
    if(comp>=18){
        console.log("Você pode adiquirir passagens"+
        " para os seguintes locais: "+listaDeDestinos);
    }
    else{
        console.log("Você mão tem idade para comprar "+
        "as passagens");
    }
}

veriIdade(idadeComprador1);

veriIdade(idadeComprador2);