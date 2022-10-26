const express = require('express')
const cors = require('cors')

const app = express()


const router = require('./src/routes')

app.use(cors({
    origin: 'http://localhost:8080'
}))

app.use(express.json())

app.use(router)




const porta = process.env.PORT || 1993
app.listen(porta, () => console.log(`Servidor rodando na porta ${porta}`))