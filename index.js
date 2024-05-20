import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('titulo pagina princpal')
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`servidor escuchando en puerto ${PORT}`)
})