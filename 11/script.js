/*
    Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.
*/

let numberOne = prompt("Digite o primeiro número : ")
let numberTwo = prompt("Digite o segundo número : ")
let sum = Number(numberOne) + Number(numberTwo)
let subtraction = Number(numberOne) - Number(numberTwo)
let multiplication = Number(numberOne) * Number(numberTwo)
let division = Number(numberOne) / Number(numberTwo)
let rest = Number(numberOne) % Number(numberTwo)
alert("A soma foi : " + sum)
alert("A subtração foi : " + subtraction)
alert("A multiplicação foi : " + multiplication)
alert("A divisão foi : " + division.toFixed(2))
alert("O resto da divisão foi : " + rest)

if(sum % 2 == 0) {
    alert("A soma dos números é par!!")
} else {
    alert("A soma dos números é ímpar!!")
}

if(numberOne == numberTwo) {
    alert("Os números inseridos são iguais!!")
} else {
    alert("Os números inseridos foram diferentes!!")
}