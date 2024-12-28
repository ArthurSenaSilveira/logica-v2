const pessoa = {
  nome: 'Arthur',
  sobrenome: 'Sena',
  endereco: {
    rua: 'Rua Abílio cardoso',
    numero: 26
  }
}
for (let i in pessoa) {
  console.log(`${i}: ${pessoa[i]}`)
}
for (let i in pessoa.endereco) {
    console.log(`${i}: ${pessoa.endereco[i]}`)
  }