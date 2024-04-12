/*
  ** Jogo da advinhação **

  Apresente a mensagem ao usuário:
  "Advinhe o número que estou pensando? Está entre 0 e 10"

  Crie um lógica para gerar um número aleatório 
  e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema.

  Enquanto o usuário não adivinhar o número, mostrar a mensagem:
  "Erro, tente novamente:"

  Caso o usuário acerte o número, apresentar a mensagem:
  "Parabéns! Você advinhou o número em x tentativas"

  Substitua o "x" da mensagem, pelo número de tentativas
*/

alert("Adivinhe o número que estou pensando? Está entre 0 e 10!!")
let userNumber = prompt("Digite um número para verificação!!")
userNumber = Number(userNumber)
const randomNumber = Math.round(Math.random() * 10)
let attempts = 1
while(userNumber != randomNumber) {
    userNumber = prompt("Erro, tente novamente!!")
    attempts++
}
alert(`Parabéns! O número que eu pensei foi ${randomNumber} e você advinhou o número em ${attempts} tentativas`)








