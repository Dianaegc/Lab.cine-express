//IMPORTACIONES
const express   =      require("express")
const app       =      express()
const hbs       =      require("hbs")     
const Movie     = require("./models/Movie.models") // requerir el modelo de Movie
const connectingDB  =   require('./config/db')

require('dotenv').config()

//GESTION DE BASE DE DATOS
connectingDB()
//ACTIVACION DE LA CARPETA PUBLIC Y VIEWS
app.use(express.static(__dirname + "/public"))
app.set("views",__dirname + "/views")
//ACTIVACION DE HANDLEBARS
app.set("view engine", "hbs")
// ACTIVAR RECEPCIÓN DE DATOS DE FORMULARIOS
app.use(express.urlencoded({ extended: true }))
//RUTEO
app.get("/", (req,res)=>{
    console.log('prueba')
    res.render('index')
})
//ruta de movies
app.get("/movies",(req,res)=>{
    console.log('see the movies')
    Movie.find({}) // Encuentrame las peliculas
    .then((movies)=>{ // despues de que me encontraste las peliculas
        //console.log(movies.length)
        res.render("movies",{movieList:movies} )// creame peliculas con las peliculas de la base de datos  en el handlebars
    })
    .catch((err)=>{
        console.log('error',err)
    })
//ruta de  para ver los detalles de la pelicula
app.get('/movie/:id',(req,res,next)=>{
    const movieId=req.params.id
    console.log('see the details')
    Movie.findById(movieId)
    .then((movie)=>{
        console.log(movie)
        res.render("movie",movie)
    })
})
    
})
//SERVIDOR
app.listen(process.env.PORT, () => console.log(`Servidor activo en el puerto ${ process.env.PORT }`))

