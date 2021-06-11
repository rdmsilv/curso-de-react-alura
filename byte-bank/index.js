import { Cliente } from "./Cliente.js";
import { Gerente } from "./funcionarios/Gerente.js";
import { Diretor } from "./funcionarios/Diretor.js";
import { SistemaDeAutenticacao } from "./SistemaDeAutenticacao.js";

const diretor = new Diretor("Rudimar", 10000, 12345678900);
diretor.cadastrarSenha("123456789")

const gerente = new Gerente("Amanda", 5000, 22334455601);
gerente.cadastrarSenha("1234");

const cliente = new Cliente("Ananda", 78456125489, "456");


const diretorEstaLogado = SistemaDeAutenticacao.login(gerente, "1234");
const gerenteEstaLogado = SistemaDeAutenticacao.login(diretor, "123456789");
const clieteEstaLogado = SistemaDeAutenticacao.login(cliente, "123456789");

console.log("Diretor",diretorEstaLogado, "Gerente",gerenteEstaLogado,"Cliente", clieteEstaLogado  );