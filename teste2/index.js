class ContaCorrente {
    saldo;
    agencia;

    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
            console.log("Você sacou: ", valor,"\n O seu novo saldo é: ",this.saldo)
        }
        else{
            console.log("Você não pode sacar esse valor. \n Tente novamente mais tarde")
        }
    }

    depositar(valor){
        this.saldo += valor;
        console.log("Você depositou R$",valor,"\n O seu novo saldo é: R$",this.saldo)
    }
}

class Cliente  {
    nome;
    cpf;
    rg;
}

const cliente1 = new Cliente;
cliente1.nome = "Ricardo";
cliente1.cpf = 01201200120;
cliente1.rg = 555555;



const cliente2 = new Cliente;
cliente2.nome = "Alice";
cliente2.cpf = 0202221457;
cliente2.rg = 7878788;


const contacorrenteRicardo = new ContaCorrente;
contacorrenteRicardo.saldo = 0;
contacorrenteRicardo.agencia = 202;


console.log(contacorrenteRicardo.saldo)

contacorrenteRicardo.saldo += 200;
console.log(contacorrenteRicardo.saldo)

contacorrenteRicardo.sacar(100);

console.log(contacorrenteRicardo.saldo);


const contacorrenteAlice = new ContaCorrente;


console.log(cliente1, "\n", cliente2);
