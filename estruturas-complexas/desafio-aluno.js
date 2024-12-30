const aluno = {
    nome: "Arthur Sena",
    notas:[1,3,10,8]
}
let soma = 0
for(let i = 0; i < aluno.notas.length; i++){
    let indice = aluno.notas[i]

    soma += indice
}
let media = soma / aluno.notas.length

let estatos = (media >= 5) ? "Aprovado" : "Reprovado"

console.log(`O aluno ${aluno.nome} tirou as seguintes notas:`)
for(let i in aluno.notas){
    console.log(aluno.notas[i])
}
console.log(`A média do aluno foi: ${media}`)
console.log(`O aluno foi: ${estatos}`)