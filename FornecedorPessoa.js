import Fornecedor from "Fornecedor.js";

//criando a classe
class FornecedorPessoa extends Fornecedor{
    //atributos
    #rg;
    #cpf;
    
    //criar o contrutor
    constructor(nome = "Sem nome", fone = "(00) 0000-0000", rg=" ", cpf = " "){
        super(nome, fone);
        this.#rg = rg;
        this.#cpf = cpf;        
    }

    //criando setters
    setRg(rg){
        this.#rg = rg;
    }
    setCpf(cpf){
        this.#cpf = cpf;
    }

    //criando getters
    getRg(){
        return this.#rg;
    }
    getCpf(){
        return this.#cpf;
    }

}

export default FornecedorPessoa;