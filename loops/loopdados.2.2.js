
      let contagemPares = 0
      let totalJogadas = 0

      while(contagemPares <= 10){
        totalJogadas++
        let dado1 = parseInt(Math.random() * 6 + 1)
        let dado2 = parseInt(Math.random() * 6 + 1)
        soma = dado1 + dado2
        console.log(`Jogada ${contagemPares}: ${dado1} + ${dado2} = ${soma} (par)`)

        if(dado1 === dado2){
          continue
        }

        if(soma % 2 === 0) {
            contagemPares++
        } else if (dado1 % 2 !== 0 || dado2 % 2 !== 0){
          continue;
        } else {
            console.log(`Jogada ${contagemPares}: ${dado1} + ${dado2} = ${soma} (impar)`)
        }

      }
    
      console.log(`Total de jogadas: ${totalJogadas}`)
      console.log(`resultados pares: ${contagemPares}`)