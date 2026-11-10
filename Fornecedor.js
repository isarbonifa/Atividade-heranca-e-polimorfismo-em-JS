
class Fornecedor{

    //atributos
    #nome;
    #fone;

    //criar método contrutor
    constructor(nome = "Sem nome", fone = "(00) 0000-0000"){
        this.#nome = nome;
        this.#fone = fone;
    }

    //criando setters
    setNome(nome){
        this.#nome = nome;
    }
    setFone(fone){
        this.#fone = fone;
    }

    //criando getters
    getNome(){
        return this.#nome;
    }
    getFone(){
        return this.#fone;
    }
}


export default Fornecedor; //pra dizer que a classe está disponivel

