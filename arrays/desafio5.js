const minhaArray = [1, 'um', 3, 4, 5, 6, 7]
let encontrou = false

for (let i = 0; i < minhaArray.length; i++) {
  if (
    minhaArray[i] === null ||
    minhaArray[i] === undefined ||
    isNaN(minhaArray[i])
  ) {
    encontrou = true
    break
  }
}
console.log(`Existe algum null, undefined ou NaN: ${encontrou}`)
