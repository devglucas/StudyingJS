/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes
*/

let patients = [
    {
        name: "Lucas",
        age : 21,
        weight: 100,
        height: 190
    },
    {
        name: "Leandro",
        age : 28,
        weight: 86,
        height: 175
    },
    {
        name: "Maria",
        age : 19,
        weight: 53,
        height: 162
    },
]

for(let i = 0 ; i<patients.length ; i++) {
    alert(`Nome do paciente : ${patients[i].name}
           Idade do paciente : ${patients[i].age} anos
           Peso do paciente : ${patients[i].weight} kg
           Altura do paciente : ${patients[i].height} cm`)
}


