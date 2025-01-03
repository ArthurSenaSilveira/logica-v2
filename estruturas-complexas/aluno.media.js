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

// MELHOR FORMA DE SE FAZER
for (let i = 0; i < alunos.length; i++) {
  
  let soma = 0
  for(let j = 0; j < alunos[i].notas.length; j++){
    soma += alunos[i].notas[j]
  }
  let media = soma / alunos[i].notas.length

  console.log(`Nome: ${alunos[i].nome}, média: ${media}`)
}



// UMA FORMA FÁCIL MAS NÃO RECOMENDADA
let soma = 0
for (let i = 0; i < alunos[0].notas.length; i++) {
  let indice = alunos[0].notas[i]
  soma += indice
}
let media = soma / alunos[0].notas.length
console.log(`Nome: ${alunos[0].nome}, média: ${media}`)



let somaa = 0
for(let i = 0; i < alunos[1].notas.length; i++){
  let indice = alunos[1].notas[i]
  somaa += indice
}
let mediaa = somaa / alunos[1].notas.length
console.log(`Nome: ${alunos[1].nome}, média: ${mediaa}`)