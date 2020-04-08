/* Um novo tipo de dado - o tipo never */

/* Never:
Representa o tipo de valores que nunca ocorrem. 
Por exemplo, never é o tipo de retorno para uma expressão de função
ou expressão de função de seta que sempre gera uma exceção ou uma que nunca retorna; 
As variáveis também adquirem o tipo neverquando restringidas por qualquer proteção 
de tipo que nunca possa ser verdadeira.*/

/* A função de retorno nunca deve ter um ponto final inacessível
Verificar mensagem em console */
function mostrarErro(mensagem: string): never {
  throw new Error('Ocorreu um erro: ' + mensagem);
}

let meuNumero: number = -1;
if (meuNumero <= 0) {
  mostrarErro('Número menor ou igual a zero')
}

/* Outro exempl... O tipo de retorno inferido nunca é: 
function fail() {
  return error("Something failed");
}*/

/* A função de retorno nunca deve ter um ponto final inacessível */
function infiniteLoop(): never {
  while (true) {
  }
}

/* O que difencia o never de void:
O void ainda pode retornar null ou undefined se for necessário */