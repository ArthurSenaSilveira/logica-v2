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
console.log(alunos[0].nome)
for(let i in alunos[0].notas){
    console.log(alunos[0].notas[i])
}
console.log(alunos[1].nome)
for(let i in alunos[1].notas){
    console.log(alunos[1].notas[i])
}