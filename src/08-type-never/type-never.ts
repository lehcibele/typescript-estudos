/* 
    Never --> Função ou método nunca vai retorna nada.
*/

// função cria um erro que pode parar a aplicação se não for tratado
export function criaErro(): never {
    throw new Error('Erro qualquer');
}

criaErro();

