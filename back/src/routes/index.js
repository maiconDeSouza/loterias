const router = require('express').Router()

const Controllers = require('../Controllers/Controllers')
const Middleware = require('../Controllers/Middleware')
// router.get('/sorteio', (req, res) => {
//     res.status(200).json({msg: "ok"})
// })

router.get('/sorteio', Middleware.getLoteria, Controllers.sorteio)

module.exports = router