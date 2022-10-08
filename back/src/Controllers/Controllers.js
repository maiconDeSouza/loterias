const Sorteios = require('./Sorteios')
function sorteio(req, res){
    const { jogo } = req.body

    try {
        const jogosDaLoteria = {
            lotofacil: Sorteios.lotofacil,
            megasena: Sorteios.megasena,
            lotomania: Sorteios.lotomania
        }
    
        const numerosSorteados = jogosDaLoteria[jogo]()
    
        res.status(200).json({numerosSorteados})
    } catch (error) {
        console.log(error)
        res.status(500).json({mensagem: "Desculpe, ocorreu um erro no servidor!"})
    }
}

module.exports = {
    sorteio
}