const minhaArray = [10, 50, 1, 20, 25, 98, 15, 16, 89, 55]
let soma = 0

for (let i = 0; i < minhaArray.length; i++) {
  let indice = minhaArray[i]

  soma += indice
}

console.log(`A soma de de todos os números da array é: ${soma}`)
