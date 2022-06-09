const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
//const fs = require('fs').promises

const productos = {
    "productos": [{
        "nombre": "Platano",
        "img": "banana.png"
    },
    {
        "nombre": "Cebolla",
        "img": "cebollas.png"
    },
    {
        "nombre": "Lechuga",
        "img": "lechuga.png"
    },
    {
        "nombre": "Pimenton",
        "img": "pimenton.png"
    },
    {
        "nombre": "Tomate",
        "img": "tomate.png"
    }
    ]
}

/*
const programa = async () => {
    const data = await fs.readFile(__dirname + 'data.json')
    const dataJSON = JSON.parse(data)
    console.log(dataJSON)*/

app.listen(3000, () => {
    console.log('El servidor está inicializado en el puerto 3000')
})
// configuración handelbars
app.engine(
    'handlebars',
    exphbs.engine({
        layoutsDir: __dirname + '/views',
        partialsDir: __dirname + '/views/componentes/',
    })
)
app.set('view engine', 'handlebars')

// Middlewares
app.use('/bootstrap', express.static(__dirname +
    '/node_modules/bootstrap/dist/css'))

app.use('/jquery', express.static(__dirname +'/node_modules/jquery/dist'))

app.use('/public', express.static(__dirname +'/assets'))


app.get('/', function (req, res) {
    res.render('Main', { layout: 'Main' })
})




/*
app.get('/', function (req, res) {
    res.render('Main', {
        layout: 'Main',
    })
})

app.get('/', function (req, res) {
    res.render('Main', {
        layout: 'Main',
        productos: [
            {
                "nombre": "Platano",
                "img": "banana.png"
            }
        ]
    })
})
*/

/*
    dataJSON.productos.forEach(producto => {

        app.get(producto.url, (req, res) => {
            res.render(producto.view, {
                layout: producto.view,
                nombre:producto.nombre,
                productos: dataJSON.productos
            })
        })
    })

}
programa()*/