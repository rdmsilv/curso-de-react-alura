import  Cliente  from "./Cliente";
import  ContaCorrente  from "./ContaCorrente";

const cliente1 = new Cliente();
cliente1.Nome = "Rudimar";
cliente1.CPF = 11122233309;

const cliente2 = new Cliente();
cliente2.Nome = "Amanda";
cliente2.CPF = 88822233309;

const contaCorrenteRudimar = new ContaCorrente();
contaCorrenteRudimar.agencia = 1001;

contaCorrenteRudimar.depositar(-100);
contaCorrenteRudimar.depositar(100);
contaCorrenteRudimar.depositar(100);

const valorSacado = contaCorrenteRudimar.sacar(50);

console.log("Saldo R$:", contaCorrenteRudimar);
console.log("Saque R$:", valorSacado);
