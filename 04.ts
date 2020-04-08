/* Tipagem de dados - parte 3 */

/* Void:
Um pouco como o oposto de any: a ausência de ter qualquer tipo. 
Geralmente utilazado como o tipo de retorno de funções que não retornam um valor*/

function funcaoTeste(): void {
  alert('Olá');
}

function warnUser(): void {
  console.log("This is my warning message");
}

/*Null e Undefined:
No TypeScript, ambos undefinede nullrealmente têm seus próprios tipos 
nomeados undefinede nullrespectivamente.*/

let u: undefined = undefined;
let n: null = null;

/* Por padrão nulle undefinedsão subtipos de todos os outros tipos.
Isso significa que você pode atribuir nulle undefinedalgo a um number por exemplo: */

var teste1: number = undefined;
alert(teste1);

/* Se habilitar a configuração "strictNullChecks"no compilator TS, será considerado como erro
pois se uma variável é do tipo number, não deve aceitar outro parâmetro que não seja number */