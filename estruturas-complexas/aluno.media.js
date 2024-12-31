const alunos = [
  {
    nome: 'Arthur Sena',
    notas: [1, 3, 3, 8]
  },
  {
    nome: 'Sena Arthur',
    notas: [10, 6, 3, 2]
  }
]
let soma = 0
for(let i = 0; i < alunos[0].notas; i++){
    soma += i
}
let soma2 = 0
for(let i = 0; i < alunos[1].notas; i++){
    soma2 += i
}
let media = soma / alunos[0].notas.length
let media2 = soma2 / alunos[1].notas.length
console.log(`O aluno: ${alunos[0].nome} ficou com média: ${media}`)
console.log(`O aluno: ${alunos[1].nome} ficou com média: ${media2}`)