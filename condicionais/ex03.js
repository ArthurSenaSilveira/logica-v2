let n1 = prompt('digite sua primeira nota')

let n2 = prompt('digite sua segunda nota')

n1 = Number(n1)

n2 = Number(n2)

let media = (n1 + n2) / 2

if (n1 < 0 || n1 > 10 || n2 < 0 || n2 > 10) {
  alert('Digite um número entre 0 e 10')
} else if (media > 4 && n1 > 0 && n2 > 0) {
  alert('Aprovado')
} else {
  alert('Reprovado')
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
