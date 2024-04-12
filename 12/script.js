/*
Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, 
deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada 
aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/

let listStudents = [
    {
        name: "Roberto",
        firstNote: 8.9,
        secondNote: 4.6
    },
    {
        name: "Maria",
        firstNote: 10,
        secondNote: 8.2
    },
    {
        name: "Letícia",
        firstNote: 7.2,
        secondNote: 9.6
    },
    {
        name: "Gustavo",
        firstNote: 6.5,
        secondNote: 8.5
    }
]

function gradeAverage(proofOne, proofTwo) {
    return ((proofOne + proofTwo) / 2)
}

for(student of listStudents) {
    let gradeStudent = gradeAverage(student.firstNote, student.secondNote)
    if(gradeStudent >= 7) {
        alert(`Parabéns, ${student.name} sua média foi de ${gradeStudent} e você passou no concurso!!`)
    } else {
        alert(`Infelizmente, ${student.name} sua média foi de ${gradeStudent} e você não passou no concurso.`)
    }
}
   
