class ContaCorrente {
    #saldo = 0;
    agencia;

    sacar(valor){
        if(this.#saldo >= valor){
            this.#saldo -= valor;
            //Esta string foi escrita com Template Literals, portanto é envolvida por ``(acentos graves) ao invés de ''(aspas simples)
            console.log(`Você sacou: R$${valor} \n O seu novo saldo é: R$${this.#saldo}`)
        }
        else{
            console.log("Você não pode sacar esse valor. \n Tente novamente mais tarde")
        }
    }

    depositar(valor){
        if(valor > 0){
            this.#saldo += valor;
            //Esta string foi escrita com Template Literals, portanto é envolvida por ``(acentos graves) ao invés de ''(aspas simples)
            console.log(`Você depositou R$${valor} \n O seu novo saldo é: R$${this.#saldo}`)
        }
        else{
            //Esta string foi escrita com Template Literals, portanto é envolvida por ``(acentos graves) ao invés de ''(aspas simples)
            console.log(`O valor de depósito R$${valor} é inválido!`)
        }    
    }
    mostrarSaldo(){
        //Esta string foi escrita com Template Literals, portanto é envolvida por ``(acentos graves) ao invés de ''(aspas simples)
        console.log(`O seu saldo atual é: R$${this.#saldo}`)
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




contacorrenteRicardo.depositar(200);

contacorrenteRicardo.sacar(100);

contacorrenteRicardo.mostrarSaldo();


contacorrenteRicardo.depositar(-20);
contacorrenteRicardo.depositar(85);


const contacorrenteAlice = new ContaCorrente;


console.log(cliente1);
