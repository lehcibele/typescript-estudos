// o ...args: string[] indica que a função só pode receber string.
// ...args --> Permite que passe um número variável de argumentos para uma função como um array.

// A função semRetorno aceita múltiplos argumentos do tipo string, que são agrupados em um array chamado args.
// O operador ... pega todos os argumentos passados e os coloca dentro do array args.
function semRetorno(...args: string[]): void {
    console.log(args.join(' '));
}

const pessoa = {
    nome: 'Leticia',
    sobrenome: 'Cibele',

    exibirNome(): void {
        console.log(this.nome + ' ' + this.sobrenome);
    }
};

semRetorno('Luiz', 'Leticia', 'Cibele');
pessoa.exibirNome();

export {pessoa};