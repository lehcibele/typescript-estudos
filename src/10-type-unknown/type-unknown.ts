/* 
    unknown --> É a mesma coisa do any, só que mais seguro.
    O unknown vem antes do any na hierarquia de types.
    O unknown é pai de todos os outros types.
*/

let x: unknown;

x = 100;
x = 'Luiz';
x = 900;
x = 10;
const y = 800;

if(typeof x === 'number') {
    console.log(x + y);
}

