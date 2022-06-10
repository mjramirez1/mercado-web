const express = require('express')
const app = express()
const exphbs = require('express-handlebars')

const productos = [
    {
        nombre: "Platano",
        img: "banana.png",
        precio: 2000
    },
    {
        nombre: "Cebolla",
        img: "cebollas.png",
        precio: 2000
    },
    {
        nombre: "Lechuga",
        img: "lechuga.png",
        precio: 2000
    },
    {
        nombre: "Pimenton",
        img: "pimenton.png",
        precio: 2000
    },
    {
        nombre: "Tomate",
        img: "tomate.png",
        precio: 2000
    },
    {
        nombre: "Papa",
        img: "papas.png",
        precio: 2000
    }
    ]

// server
app.listen(3000, () => {
    console.log('El servidor está inicializado en el puerto 3000')
})
// Middlewares
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/css'))
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'))
app.use('/assets', express.static(__dirname + '/assets'))

// configuración handelbars
app.engine(
    'handlebars',
    exphbs.engine({
        layoutsDir: __dirname + '/views',
        partialsDir: __dirname + '/views/componentes/',
    })
)
app.set('view engine', 'handlebars')


// Ruta a main
app.get('/', function (req, res) {
    res.render('main', { layout: 'main', productos })
})