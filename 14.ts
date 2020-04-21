/* Atributos de visibilidade e os métodos acessores GET e SET */

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
  private _idade: number;
  private _estaVivo: boolean;

  get estaVivo() {
    return this._estaVivo;
  }

  get idade() {
    return this._idade;
  }

  set idade(novaIdade: number) {
    if (novaIdade < 0) {
      throw new Error ("A idade não pode ser menor que zero");
    }
    this._idade = novaIdade;
    this._estaVivo = true;
  }

  constructor(nome: string = "") {
    this.nome = "";
    this.idade = 0;
    this._estaVivo = false;
  }

  nascer(): void{
    this._estaVivo = true;
    alert("O animal nasceu!");
  }

  crescer(): void{
    this.idade += 1;
    alert("O animal cresceu!");
  }

  morrer(): void{
    this._estaVivo = false;
    alert("O animal morreu!");
  }

}

let cachorro: Animal = new Animal("Dog");
cachorro.nome = "Totó";
cachorro.nascer();
alert(cachorro.nome);
alert(cachorro.idade);
alert(cachorro.estaVivo);
cachorro.morrer();
alert(cachorro.estaVivo);
