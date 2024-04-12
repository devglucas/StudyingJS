/*
  Capturar 2 números
  e fazer as operações matemáticas
  de soma, subtração, multiplicação,
  divisão e resto da divisão.

  E para cada operação, mostrar um alerta
  com o resultado.
*/

let numberOne = prompt("Digite o primeiro número : ")
let numberTwo = prompt("Digite o segundo número : ")
let sum = Number(numberOne) + Number(numberTwo)
alert("A soma foi : " + sum)
let subtraction = Number(numberOne) - Number(numberTwo)
alert("A subtração foi : " + subtraction)
let multiplication = Number(numberOne) * Number(numberTwo)
alert("A multiplicação foi : " + multiplication)
let division = Number(numberOne) / Number(numberTwo)
alert("A divisão foi : " + division)
let rest = Number(numberOne) % Number(numberTwo)
alert("O resto da divisão foi : " + rest)

