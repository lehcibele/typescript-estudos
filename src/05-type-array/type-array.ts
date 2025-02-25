// Array<Tipo> - Tipo[]
export function multiplicaArgs(...args: Array<number>): number {
    // O método reduce é uma função de array qye reduz o array a um único valor, executando uma função de callback em cada elemento.
    return args.reduce((ac, valor) => ac * valor, 1);
}

export function concatenaString(...args: string[]): string {
    return args.reduce((ac, valor) => ac + valor);
}

export function toUpperCase(...args: string[]): string[] {
    return args.map(valor => valor.toUpperCase());
}

const result1 = multiplicaArgs(1, 2, 3);
const concatenacao = concatenaString('a', 'b', 'c');
const upper = toUpperCase('a', 'b', 'c');

console.log(result1);
console.log(concatenacao);
console.log(upper);