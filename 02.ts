/* Tipagem de dados */

/* Booleanos:

true, false */

let meuBooleano: boolean = true;
alert(meuBooleano);

/* Number:

1, 1.5, 0.5, 
0b11  ( 3 em binário)
0o13  ( 11 em octal) 
0xAB13  ( 43795 em hexadecimal)*/

let meuNumero: number = 1.1;
alert(meuNumero);

/* String:
caracter literal em 'uma' ou "duas" aspas*/

let meuTexto: string = 'Olá TypeScript'
alert(meuTexto);

/* String expression ou String Pattern
com o uso de crase, permite através de ${} interpolar strings*/ 

let logradouro: string = 'Rua Vidal de Negreiros'
let numero: string = '318'
let cidade: string = 'Recife'
let estado: string = 'Pernambuco'
alert(`Endereço: ${logradouro}, ${numero}. ${cidade}, ${estado}.`);

/* Array:
É possível tipar o conteúdo do array*/

let meuArray: number[] = [1, 2, 3, 4];
alert(meuArray);

/* Pode também ser escrito assim: */

let arrayMeu: Array<string> = ['1', '2', '3', '4'];
alert(arrayMeu);
