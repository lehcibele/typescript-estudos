/* 
    x é undefined na primeira linha de sua declaração.
    no if é verificado o type de x como o valor é true é atribuido o valor 20 para x.
    no console.log como x é um number é feito a multiplicação.
    Se o if não existesse iria dar um erro no console, pois x seria do type undefined.
*/
let x;
if(typeof x === 'undefined') {
    x = 20;
}
console.log(x*2);

export function createPerson(
    // abertura da função
    firstName: string,  
    lastName?: string
): {// type annotations
    firstName: string;
    lastName?: string;
} {// corpo da função
    return {
        firstName,
        lastName,
    };
}

export function squareOf(x: any) {
    if(typeof x === 'number'){
        return x * x;
    } else {
        return null;
    }
}

const squareOfTwoNumber = squareOf(2);
const squareOfTwoString = squareOf('2');

if(squareOfTwoNumber === null) {
    console.log('Conta inválida');
} else {
    console.log(squareOfTwoNumber);
}