import express from 'express'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'
import _ from 'lodash'
import chalk from 'chalk'



const app = express()

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