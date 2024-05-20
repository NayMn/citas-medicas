import express from 'express'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'
import _ from 'lodash'
import chalk from 'chalk'

const app = express()


// obtener un usuario cualquiera: 
const randomUsuario = async () => {
    try {
        const response = await axios.get('https://randomuser.me/api/')
        const dataUsuario = response.data.results[0]
        return {
            id: uuidv4(),
            name: `${dataUsuario.name}`,
            gender: dataUsuario.gender,
            timestamp: moment().format('YYYY-MM-DD HH:mm:ss')
        }
    } catch (error) { console.log(error) }
}
randomUsuario()

console.log(randomUsuario())

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`servidor escuchando en puerto ${PORT}`)
})