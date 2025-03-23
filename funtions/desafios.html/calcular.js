function calcular(n1, n2, str){
    switch(str){
        case "+" : 
            return n1 + n2
    
        case "-" : 
            return n1 - n2
    
        case "*" : 
            return n1 * n2
    
        case "/" : 
            return n1 / n2

        default : 
            return null
    } 
}
console.log(calcular(5, 2, "+"))
console.log(calcular(5, 2, "-"))
console.log(calcular(5, 2, "*"))
console.log(calcular(5, 2, "/"))
console.log(calcular(5, 2, "a"))