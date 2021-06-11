import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static numerosDeContas = 0;
    // #saldo = 0 https://github.com/tc39/proposal-class-fields#private-fields
    constructor(cliente, agencia ) {
        super(0, cliente, agencia);
        ContaCorrente.numerosDeContas += 1
    }
 //Sobreescrevendo o comportamento de sacar
    sacar(valor) {
        let taxa = 1.1;
        return this._sacar(valor, taxa)
        }    
}