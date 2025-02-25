/*
const objetoA: Record<string, unknown> = {
    chaveA: 'Valor A',
    chaveB: 'Valor B',
}; 
*/

const objetoA: {
    chaveA: string;
    chaveB: string;
    chaveC?: string;
    [key: string]: unknown;
} = {
    chaveA: 'Valor A',
    chaveB: 'Valor B',
};


objetoA.chaveA = 'Outro Valor';
objetoA.chaveC = 'Nova chave';
objetoA.chaveD = 'Nova chave D';