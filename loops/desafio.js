//mostre na tela os números de 0 à 100 ignorando os múltiplos de 10

for (let i = 0; i <= 100; i++) {
  if (i % 10 === 0) {
    continue
  }
  let numSorteado = parseInt(Math.random() * 100 + 1)
  console.log(i)
  console.log('sorteio:', numSorteado)

  if (i % numSorteado === 0) {
    break
  }
}
