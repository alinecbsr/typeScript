/* Definindo construtores para nossas classes */

interface IAnimal {

  /* atributos: características */
  nome: string;
  idade: number;
  estaVivo: boolean;
  
  /* métodos: comportamentos */
  nascer(): void;
  crescer(): void;
  morrer(): void;

}

class Animal implements IAnimal{

  nome: string;
  idade: number;
  estaVivo: boolean;

  constructor() {
    this.nome = "";
    this.idade = 0;
    this.estaVivo = false;
  }

  nascer(): void{
    this.estaVivo = true;
    alert("O animal nasceu!");
  }

  crescer(): void{
    this.idade += 1;
    alert("O animal cresceu!");
  }

  morrer(): void{
    this.estaVivo = false;
    alert("O animal morreu!");
  }

}

let cachorro: Animal = new Animal();
cachorro.nome = "Totó";
cachorro.crescer();
alert(cachorro.nome);
alert(cachorro.idade);
alert(cachorro.estaVivo);