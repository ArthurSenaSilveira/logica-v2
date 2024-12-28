const minhaArray = [7, 2, 20, 21, 10, 50, 1, 20, 25, 98, 15, 16, 89, 55]
let soma = 0

for (let i = 0; i < minhaArray.length; i++) {
  let indice = minhaArray[i]

  if (indice % 2 === 0) {
    continue
  }

  soma += indice
}

console.log(`A soma de de todos os números ímpares da array é: ${soma}`)
