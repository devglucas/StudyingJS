/* 
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC
*/

/* peso / (altura * altura) */

let patients = [
    {
        name: "Lucas",
        age : 21,
        weight: 110,
        height: 180
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
function calcIMC(weight, height) {
    return (weight / ((height / 100 ) ** 2).toFixed(2))
}
function printIMC(patient) {
    return `Paciente ${patient.name} possui o IMC de
    ${calcIMC(patient.weight, patient.height).toFixed(2)}`
}
for (let patient of patients) {
    let IMCmessage = printIMC(patient)
    alert(IMCmessage)
  }