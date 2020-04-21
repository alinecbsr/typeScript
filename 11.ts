/* Definindo interfaces */

/* No TypeScript, as interfaces desempenham o papel de nomear esses tipos
e são uma maneira poderosa de definir contratos dentro do seu código, 
bem como contratos com o código fora do seu projeto */

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