

const nome: string | null = window.prompt("Qual o seu nome?");
const idade: string | null = window.prompt("Qual a sua idade?");


const element1 = document.getElementById("nome") as HTMLElement;
const element2 = document.getElementById("idade") as HTMLElement;

element1.textContent = `Nome: ${nome}`;
element2.textContent = `Idade: ${idade}`;
