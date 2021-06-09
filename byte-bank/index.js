import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Rudimar", 11122233309);
const cliente2 = new Cliente("Amanda", 88822233309);


const contaCorrenteRudimar = new ContaCorrente(1001, cliente1);

contaCorrenteRudimar.depositar(500);
const conta2 = new ContaCorrente(1002, cliente2);


let valor = 200;
contaCorrenteRudimar.transferir(valor, conta2)

console.log(ContaCorrente.numerosDeContas);