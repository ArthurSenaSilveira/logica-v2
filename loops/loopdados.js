//enquanto os dois números não forem iguais a mensagem será "Os números são diferentes" e quando forem iguais a mensagem será " "  (teste e descubra.)

let dado1 = parseInt(Math.random() * 6 + 1)
let dado2 = parseInt(Math.random() * 6 + 1)

let contador = 1

while (dado1 != dado2) {
  console.log(`${dado1} e ${dado2}`)
  contador++
  dado1 = parseInt(Math.random() * 6 + 1)
  dado2 = parseInt(Math.random() * 6 + 1)
}
console.log(
  `Os dados foram jogados ${contador} vezes. e o número repetido foi ${dado1}`
)

console.log('-------------------')

dado1 = parseInt(Math.random() * 6 + 1)
dado2 = parseInt(Math.random() * 6 + 1)

contador = 1

do {
  console.log(`${dado1} e ${dado2}`)
  contador++
  dado1 = parseInt(Math.random() * 6 + 1)
  dado2 = parseInt(Math.random() * 6 + 1)
} while (dado1 != dado2)

console.log(
  `Os dados foram jogados ${contador} vezes. e o número repetido foi ${dado1}`
)

/* alert(`${dado1}`)
        alert(`${dado2}`)

        if (dado1 != dado2) {
            alert('Os números são diferentes')
        } else {
            alert('Os números são iguais')
        } */
