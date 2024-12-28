const dias = [
  'Domingo',
  'Segunda-Feira',
  'Terça-Feira',
  'Quarta-Feira',
  'Quinta-Feira',
  'Sexta-Feira',
  'Sabado'
]

let hoje = new Date()
const hoje_e_dia = hoje.getDay()

console.log(`Olá, hoje é ${dias[hoje_e_dia]}`)
/*      0 - dom
        1 - seg
        2 - ter
        3 - qua
        4 - qui
        5 - sex
        6 - sab 
*/
