/* Criando classes e objetos  */

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

  nascer(): void{
    alert("O animal nasceu!");
  }

  crescer(): void{
    alert("O animal cresceu!");
  }

  morrer(): void{
    alert("O animal morreu!");
  }

}

let cachorro: Animal = new Animal();
cachorro.nome = "Totó";
cachorro.crescer();
alert(cachorro.nome);