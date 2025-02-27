/* 
    Tuple não existe no javascript, só no typescript.
    O typescript vai utilizar o array do js para fazer a tupla. 
    Tupla seria um array, com tipos bem especificos e tamanho fixo.
*/
const dadosCliente1: readonly [number, string] = [1, 'Leticia'];
const dadosCliente2: [number, string, string] = [1, 'Leticia', 'Cibele'];
const dadosCliente3: [number, string, string?] = [1, 'Leticia']; // a A ? indica que é opcional
// rest operetor ...
const dadosCliente4: [number, string, ...string[]] = [1, 'Leticia'];

// ao usar o readonly não é possivel alterar o valor, por isso aparece o erro
//dadosCliente1[0] = 100;
//dadosCliente1[1] = 'Cibele';
//dadosCliente1.pop(); // remove o ultimo elemento

console.log(dadosCliente1);
console.log(dadosCliente2);

// array imutavel: não pode usar pop ou puhs
const array1: readonly string[] = ['Leticia', 'Levi'];
const array2: ReadonlyArray<string> = ['Leticia', 'Levi'];

console.log(array1);
console.log(array2);