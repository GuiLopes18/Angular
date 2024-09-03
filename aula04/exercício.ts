type ingredientes = (elementos : string) => string


const preparar_feijoada : ingredientes = (elementos : string) => {
    
    return elementos;
}

function feijoada(func: ingredientes, elementos : string) {
    
    console.log("A feijoada com: ${func(elementos)} está pronta!");

}

feijoada(preparar_feijoada, "Feijão, Arroz, Laranja, Farofa, Couve");