type funcao = (number) => number;

const gx:funcao = (x: number) => {
    return 3*x;
}

const fx:funcao = (x: number) => {
    return 5*x;
}

function calcular(io: number, callback1: funcao, callback2: funcao) {
    let soma: number = callback1(io) +callback2(io)
    const resultado = console.log(soma)

}

calcular(2,gx,fx)