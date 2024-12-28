const minhaArray = [
  10,
  10,
  10,
  10,
  10,
  100,
  NaN,
  true,
  'String',
  '100',
  undefined,
  false,
  null
]

let soma = 0

for (let i = 0; i < minhaArray.length; i++) {
  let indice = minhaArray[i]

  if (typeof indice == 'number' && !isNaN(indice)) {
    soma += Number(indice)
  }
}

console.log(`A soma de de todos os números da array é: ${soma}`)
