const readlineSync = require("readline-sync");
// ? - Todo modulo baixado vai vir com sync? é o segundo que vejo assim


class contabancaria{
    constructor(titular){
        this.titular = titular;
        this.saldo = 0;
        this.historico = [];
    }

sacar(valor){
    if (valor<=0){
        console.log("Saldo insuficiente");
        return;// Volta o cão arrependido
// Esqueci a função do return de novo, pra que serve isso?
// Pq sempre gera um "falso cognato", parece que tá retornando algo, mas a função ja faz isso quando chamada
    }
    if (valor < this.saldo){
        console.log("Saldo insuficiente");
        return;
    }
}


// Tenho que terminar as outras funções:
// depositar();
// verSaldo();
// verHistorico();


// seguir guia e perguntando sobre a sintaxe


} 




console.log(" === MENU PRINCIPAL === ")
console.log("1 - Sacar")
console.log("2 - Depositar")
console.log("3 - Ver saldo atual")
console.log("4 - Ver histórico de transação")

let option = readlineSync.question("qual a sua escolha?")

// TODO - converter string para numero usando Number(x) ou parseInt(x), porem não sei.



while (true) { // será que eu uso desse jeito ou um switch case caso exista?
    if (option == 1){
        sacar();
    } else if (x == 2){
        depositar();
    } else if (x == 3){
        atual();
    } else if (x == 4){
        historico();
    } else {
        console.log("Erro, tente novamente");
}
}