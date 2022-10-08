function lotofacil(){
    const numerosParaSorteio = []

    for(let x = 1; x <= 25; x++){
        numerosParaSorteio.push(x)
    }

    const sorteados = sorteio(15, numerosParaSorteio)

    return sorteados
}

function megasena(){
    const numerosParaSorteio = []

    for(let x = 1; x <= 60; x++){
        numerosParaSorteio.push(x)
    }

    const sorteados = sorteio(6, numerosParaSorteio)

    return sorteados
}

function lotomania(){
    const numerosParaSorteio = []

    for(let x = 0; x <= 99; x++){
        numerosParaSorteio.push(x)
    }

    const sorteados = sorteio(20, numerosParaSorteio)

    return sorteados
}

function sorteio(quantosNumerosSorteiados, arrayComOsNumeros){
    const sorteados = []

    while(sorteados.length < quantosNumerosSorteiados){
        const index = Math.floor(Math.random() * arrayComOsNumeros.length)
        sorteados.push(arrayComOsNumeros[index])
        arrayComOsNumeros.splice(index, 1)
    }

    sorteados.sort((a, b) => a - b)

    return sorteados
}

module.exports = {
    lotofacil,
    megasena,
    lotomania
}

