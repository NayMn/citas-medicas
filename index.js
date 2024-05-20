import express from 'express'
import axios from 'axios'

const app = express()

app.get('/', (req, res) => {
    res.send('titulo pagina princpal')
})

const randomInfo = async () => {
    try {
        const response = await axios.get('https://randomuser.me/api/')
        console.log(response.data)
    } catch (error) { console.log(error) }

}
randomInfo()



const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`servidor escuchando en puerto ${PORT}`)
})