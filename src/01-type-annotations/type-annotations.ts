/* Tipos básicos (aqui ocorre inferência de tipos) */
let nome: string = 'Leticia';
let idade: number = 25; //10, 1.75, -5.55, 0xf00d, 0b1010
let adulto: boolean = true; // true ou false
let simbolo: symbol = Symbol('qualquer-symbol');
//let big: bigint = 10n; só funciona com es2020 (tsconfig: target)

// Arrays 
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeNumeros2: number[] = [1, 2, 3];
let arrayDeStrings: Array<string> = ['a', 'b', 'c'];
let arrayDeStrings2: string[] = ['a', 'b', 'c'];

// Objetos 
let pessoa: {
    nome: string,
    idade: number,
    adulto?: boolean // o ? indica que a chave é opcional
} = {nome: 'Cibele', idade: 25};

// Funções
function soma(x: number, y: number) {
    return x + y;
}

const result = soma(2, 2);

const soma2: (x: number, y:number) => number = (x, y) => x + y;