const carro = {
    modelo: "Uno",
    ano: 2023,
    km: 10000,
    combustivel: "gasolina",
    listrosConsumidos: 625
}
carro.marca = "Fiat"

console.log(`O carro ${carro.marca} ${carro.modelo} ano de ${carro.ano} fez em média ${carro.km / carro.listrosConsumidos}Km/L de ${carro.combustivel}`)