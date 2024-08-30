var adivinha;
var resultado;
function calculeMov() {
    var compMov = Math.random();
    if (compMov < 0.5) {
        adivinha = "Cara";
    }
    else {
        adivinha = "Coroa";
    }
}
function jogar(escolha) {
    calculeMov();
    if (adivinha === "Cara") {
        if (escolha === "Cara") {
            resultado = ("Você Ganhou!!!");
        }
        else if (escolha === "Coroa") {
            resultado = ("Você Perdeu.");
        }
    }
    else if (adivinha === "Coroa") {
        if (escolha === "Cara") {
            resultado = ("Você Perdeu.");
        }
        else if (escolha === "Coroa") {
            resultado = "Você Ganhou!!!";
        }
        window.alert("O computador escolheu: ".concat(adivinha, ". ").concat(resultado));
    }
}
jogar(window.prompt('Cara ou Coroa. Adivinhe o resultado!', 'Cara ou Coroa?'));
