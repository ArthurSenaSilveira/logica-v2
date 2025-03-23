function anobi (ano){
    return ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0)
}
console.log(anobi(2025))
console.log(anobi(2024))
console.log(anobi(1800))
console.log(anobi(2000))