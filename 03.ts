/* Tipagem de dados - parte 2 */

/* Tuple: 
Permitem expressar uma matriz com um número fixo de elementos tipados, 
mas não precisam ser os mesmos tipos.*/

let nascimento: [string, number] = ['Abril', 1990];

/* É possível acessar cada posição do array: */
alert(`${nascimento[0]}, ${nascimento[1]}`);

/* Também é possível acessar todo conteúdo do array:*/
alert(nascimento);

/* Alterando valor da tupla */
nascimento[0] = "Teste";
alert(`${nascimento[0]}, ${nascimento[1]}`);

/* Acrescentando valor a tupla */
let aniversario: [number, string] = [18, ' de Abril']
alert(aniversario);
/* aniversario[2] = ' de 1990'
alert(aniversario); */

/* Enum:
Maneira de atribuir nomes mais amigáveis a conjuntos de valores numéricos */

enum Color {Red, Green, Blue}
let c: Color = Color.Blue;
alert(c); 

/* É possível definir manualmente todos os valores na enumeração, atribuindo novos valores */
enum Colors {yellow = 3, grey = 5, brown = 7}
let j: Colors = Colors.grey;
alert(j); 

/* Any:
Permite que os valores passem pelas verificações de tipagem em tempo de compilação*/

let notSure: any = 4;
alert(notSure);

notSure = "maybe a string instead";
alert(notSure);

notSure = false;
alert(notSure);

/* Embora seja semelhante ao uso do Object, no entanto, 
variáveis do tipo Object permitem apenas atribuir qualquer valor a elas. 
Você não pode chamar métodos arbitrários, nem mesmo os que existem */

let v: any = 2;
alert(v.toExponential());

/* let v2: Object = 4;
alert(v2.toExponential()); */

