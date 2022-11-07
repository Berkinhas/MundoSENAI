const express = require('express')
const router = express.Router()
const axios = require('axios')

router.get('/', async (req, res) => {
    const { data } = await axios('http://queimadas.dgi.inpe.br/api/focos/')
    const dataNormalized = []

    for(let i = 0; i < data.length; i++) {
        const newFormData = {
            pais: data[i].properties.pais,
            estado: data[i].properties.estado,
            municipio: data[i].properties.municipio,
            risco_fogo: data[i].properties.risco_fogo,
            sem_chuva_dias: data[i].properties.numero_dias_sem_chuva,
            latitude: data[i].properties.latitude,
            longitude: data[i].properties.longitude,
            satelite: data[i].properties.satelite
        }

        dataNormalized.push(newFormData)
    }

    res.json(dataNormalized)
})

module.exports = app => app.use('/focos', router)