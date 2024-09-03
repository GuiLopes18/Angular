/*
///// EX1 - Função para Multiplicar /////

function multiplicar(num1 : number, num2 : number) : number {
    let resultado: number = num1 * num2;
    return resultado;
}

let numero1 : number = 4;
let numero2 : number = 5;

let resultado = multiplicar(numero1, numero2)

console.log(resultado);


///// EX2 - Função para Realizar Contagem Regressiva /////

function contagem_regressiva(num : number) : void {
    if (num < 1) {
        console.log("Fim");
        return;
    }
    else {
        console.log(num);
        contagem_regressiva(num-1);
    }
}

console.log(contagem_regressiva(5));

*/
/*
type ingredientes = (elementos : string) => string


const preparar_feijoada : ingredientes = (elementos : string) => {
    
    return elementos;
}

function feijoada(func: ingredientes, elementos : string) {
    
    console.log("A feijoada com: ${func(elementos)} está pronta!");

}

feijoada(preparar_feijoada, "Feijão, Arroz, Laranja, Farofa, Couve");
*/