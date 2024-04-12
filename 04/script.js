/*
  Solicitar o nome do aluno e as 3 notas
  do bimestre calcular a média daquele aluno.

  A média positiva deverá ser maior que 6

  Se o aluno passou no bimestre, dar os 
  parabéns.

  Se o aluno não passou no bimestre, 
  motivar o aluno a dar seu melhor na prova
  de recuperação.

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/

let student = prompt("Qual o nome do aluno? : ")
let gradeOne = prompt("Qual foi a nota da primeira prova? : ")
let gradeTwo = prompt("Qual foi a nota da segunda prova? : ")
let gradeThree = prompt("Qual foi a nota da terceira prova? : ")
let media = (Number(gradeOne) + Number(gradeTwo) + Number(gradeThree)) / 3
if(media > 6) {
    alert(`Parabéns, ${student}, você passou no bimestre com uma média de ${media.toFixed(2)}`)
} else {
    alert(`${student}, infelizmente sua média foi de ${media.toFixed(2)} e você vai ter que fazer a prova de recuperação!!`)
}