import Fornecedor from "./Fornecedor";
import Fornecedor from "./Fornecedor";
import FornecedorPessoa from "./FornecedorPessoa";

//criar e instanciar o objeto no método construtor da classe Fornecedor
const Fornecedor = new Fornecedor("Pedro Henrique", "(11) 2222-2222");

console.log(`Dados do fornecedor:
    Nome: ${objFornecedor.getNome()}
    Fone: ${objFornecedor.getFone()}`
);

const objFornecedorPessoa = new FornecedorPessoa("Marina", "(11) 3333-3333", "58.665.333-07" ,"111.222.333-09")

//exibindo dados
console.log(`Dados do fornecedor pessoa:
    Nome: ${objFornecedorPessoa.getNome()})
    Fone: ${objFornecedorPessoa.getFone()}
    Rg: ${objFornecedorPessoa.getRg()}
    Cpf: ${objFornecedorPessoa.getCpf()}`);