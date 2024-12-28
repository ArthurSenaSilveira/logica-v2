let n1 = Number(prompt('digite sua primeira nota'))

let n2 = Number(prompt('digite sua segunda nota'))

let media = (n1 + n2) / 2

if (media > 4 && n1 > 0 && n2 > 0) {
  console.log('Aprovado')
} else {
  console.log('Reprovado')
}
/* function verificar() {
            let nota1 = document.querySelector('#nota1').value

            let nota2 = document.querySelector('#nota2').value

            nota1 = Number(nota1)
            nota2 = Number(nota2)
            
            let resultado = document.querySelector('#res')
            
            /* let media = ((nota1 + nota2) / 2)
            
            
            if(((nota1 + nota2) / 2) > 4) {
                return resultado.innerHTML = `<strong>Aprovado</strong>`
            } else {
                return resultado.innerHTML = `<strong>Reprovado</strong>`
            }
        //}
        */
