/* Utilizando type assertions */

/* Uma asserção de tipo é como uma conversão de tipo em outros idiomas, 
mas não realiza nenhuma verificação ou reestruturação especial dos dados. 
Não tem impacto no tempo de execução e é usado exclusivamente pelo compilador. 
O TypeScript supõe que tenha realizado as verificações especiais necessárias.
É possível utilizar o operador diamante (ou colchete angular): */

let teste: any = "Isso é uma string";

alert((<string>teste).length);

/* Outra forma de é utilizinando o operador "as" */

let novoTeste: any = "Isso é uma string";

alert((novoTeste as string).length);
