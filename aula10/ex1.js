var nome = window.prompt("Qual o seu nome?");
var idade = window.prompt("Qual a sua idade?");
var element1 = document.getElementById("nome");
var element2 = document.getElementById("idade");
element1.textContent = "Nome: ".concat(nome);
element2.textContent = "Idade: ".concat(idade);
