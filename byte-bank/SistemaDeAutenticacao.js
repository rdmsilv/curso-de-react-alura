/**
 * Ser autenticavvel significa ter o método autenticar()
 * ducky type
 */

export class SistemaDeAutenticacao {
    static login(autenticavel, senha) {
        if (SistemaDeAutenticacao.ehAutenticavel(autenticavel)) {
            return autenticavel.autenticar(senha);
        }
        return false;
    }
    static ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function
    }
}