/* 
    No javascript não existe o type enum.
    Essa estrutura de dados não é ordenada, que utiliza quando tem mais de uma opção para alguma coisa.
*/

enum Cores {
    VERMELHO = 10,   // o indice é 10 do vermelho
    AZUL = 100,       // indice 100
    AMARELO = 200,    // indice 200
}

enum Cores {
    ROXO = 'ROXO',
    VERDE = 201,
    ROSA, 
}
//console.log(Cores);
console.log(Cores.VERMELHO);
console.log(Cores[10]);
console.log(Cores.ROXO);

function escolhaACore(cor: Cores): void {
    console.log(Cores[cor]);
}

escolhaACore(Cores.ROXO);