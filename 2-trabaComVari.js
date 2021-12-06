let primeiroNome = "Pedro";  //permite trocar seu valor
const sobrenome = "Rocha"; //o valor é imutável

//let idade; //variável declarada
//idade = 24; //atribuição de valor


const summ = 12+72;
const di = 73 / 4;
const sub = 44 - 3;
const mul = 12*7;


console.log(primeiroNome, sobrenome);

console.log("Meu nome é",primeiroNome,"e meu sobrenome é",sobrenome);
//Imprime no console as strings e as variáveis com espaço, 
//mas não as une

console.log(summ,di,sub,mul); // As operações saem separadas pro um espaço

console.log(`Meu nome é ${primeiroNome} ${sobrenome}.`); //Interpolando usando crase

primeiroNome = primeiroNome + sobrenome; //Somente variáveis com atribuição "let" podem
//sofrer alterações durante a sua execução
console.log(`Meu nome é ${primeiroNome}.`);

primeiroNome = 2;

console.log(primeiroNome);