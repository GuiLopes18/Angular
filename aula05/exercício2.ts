let matriz: number[][] = [
    [1, 2, 3],
    [4, 5 ,6],
    [7, 8, 9]
];

function somaMatriz (matriz): number {
    let soma = 0;

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            soma += matriz[i][j]; 
        }
    }
    return soma;
}

console.log(somaMatriz(matriz));