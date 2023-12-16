const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    director: {
        type: String,
    },
    stars: {
        type: [String], 
        required: true
    }, 
    image:{
        type: String,
        reguired: true,
    }, 
    description: {
        type: String,
        reguired: true, 
    },
    showtimes:{
        type: [String], 
        required: true
    }   
})
    
const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie;