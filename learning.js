const readlineSync = require("readline-sync");
// ? - Todo modulo baixado vai vir com sync? é o segundo que vejo assim





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
        atual()
    } else if (x == 4){
        historico()
    } else {
        console.log("Erro, tente novamente");
}
}