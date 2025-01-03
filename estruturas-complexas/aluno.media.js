const alunos = [
  {
    nome: 'Arthur Sena',
    notas: [1, 3, 3, 8]
  },
  {
    nome: 'Sena Arthur',
    notas: [10, 6, 10, 10]
  },
  {
    nome: 'G',
    notas: [10, 6, 1, 0]
  },
  {
    nome: 'E',
    notas: [5, 9, 1, 6]
  },
  {
    nome: 'ed',
    notas: [5, 3, 6, 4]
  }
]

// MELHOR FORMA DE SE FAZER
for (let i = 0; i < alunos.length; i++) {
  
  let soma = 0
  for(let j = 0; j < alunos[i].notas.length; j++){
    soma += alunos[i].notas[j]
  }
  let media = soma / alunos[i].notas.length

  console.log(`Nome: ${alunos[i].nome}, média: ${media}`)
}
