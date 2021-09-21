
// 1. IMPORTACIONES
const mongoose      = require("mongoose")


// 2. SCHEMA
const movieSchema =  mongoose.Schema({
    title: String,
    director: String,
    stars: [String],
    image:String,
    description:String,
    showtimes:[String]
},{
    timestamps: true // INSERTA EN LA BASE DE DATOS LA FECHA EN QUE FUE CREADA
})



// 3. MODEL
const Movie = mongoose.model("Movie", movieSchema)


// 4. EXPORTACIÓN
module.exports = Movie