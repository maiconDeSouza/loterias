function getLoteria(req, res, next){
    const { jogo } = req.body
    console.log(jogo)
    try {
        const jogosDaLoteria = {
            lotofacil: true,
            megasena: true,
            lotomania: true
        }
    
        const isValid = jogosDaLoteria[jogo]
    
        if(isValid){
            return next()
        }
    } catch (error) {
        res.status(404).json({mensagem: `Por favor escolha entre "Lotofácil", "Megasena ou "Lotomania"`})
    }
}

module.exports = {
    getLoteria
}