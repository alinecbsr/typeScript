/* Declarações com var e let */

/* Ambas podem ser consideradas como variável global, porém:

var - atrelado ao escopo do bjeto global window
let - excluído do escopo do bjeto global window */

/* let restringe o escopo da variável ao bloco de códigos, ou função em que está contido
variávei declaradas com let não podem ser redeclaradas */

function criarMensagem(nome : string) {
  return "Olá, " + nome;
}

var mensagem : string = criarMensagem('fulano')
alert(mensagem);