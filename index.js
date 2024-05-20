import express from 'express'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'
import _ from 'lodash'
import chalk from 'chalk'

const app = express();

const usuarios = [];


const randomUsuario = async () => {
    try {
        const response = await axios.get('https://randomuser.me/api/');
        const dataUsuario = response.data.results[0];
        return {
            id: uuidv4(),
            name: `${dataUsuario.name.first} ${dataUsuario.name.last}`,
            email: dataUsuario.email,
            gender: dataUsuario.gender,
            timestamp: moment().format('YYYY-MM-DD HH:mm:ss')
        };
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
};


app.get('/registrar', async (req, res) => {
    try {
        const usuarioNuevo = await randomUsuario();
        usuarios.push(usuarioNuevo);
        res.json(usuarioNuevo);
    } catch (error) {
        res.status(500).json({ error: 'Error no se puede registrar el usuario' });
    }
});


app.get('/usuarios', (req, res) => {
    const usuariosMF = _.groupBy(usuarios, 'gender');
    console.log(chalk.bgWhite.blue(JSON.stringify(usuariosMF, null, 2)));
    res.json(usuariosMF);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
});