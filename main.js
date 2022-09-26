let x1 = 5;
let x2 = 6;
console.log(x1);
console.log(x2);

x1 = 5 + 10;

console.log(x1);

if (x1 == x2) {
  console.log("É igual");
}
else if (x1 == x1) {
  console.log("Entrou no else if");
}
else {
  console.log("Else da primeira opção");
}

if (x1 !== x2) {
  console.log("Não é igual");
}

const frutas = ["mamão", "melao", "maçã"];

for (let i = frutas.length - 1; i >= 0; i--) {
  console.log("i = " + i + " fruta:" + frutas[i])
}
console.log("_______ outro for _____")

for (let a in frutas) {
  console.log("a: " + a + " fruta: " + frutas[a])
}

const numeros = [45, 4, 9, 16, 25];

numeros.forEach(funcTeste);

function funcTeste (value, index, array) {
  console.log(value);
}

console.log("______while_____")

let a = 0;
while (a != 10) {
  console.log("a:" + a)
  a += 1;
}

let b = 0;

do {
  console.log("b:" + b)

  b += 1;
} while (b != 10);