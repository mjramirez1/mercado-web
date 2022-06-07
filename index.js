const express = require('express')
const app = express()
app.listen(3000, () => {
    console.log('El servidor está inicializado en el puerto 3000')
})

app.use('/bootstrap', express.static(__dirname +
    '/node_modules/bootstrap/dist/css'))

app.use('/jquery', express.static(__dirname +
    '/node_modules/jquery/dist'))
