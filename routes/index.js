const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

const Movie = require("../models/Movie.model");

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((foundMovies) => {
      console.log(foundMovies);
      res.render("movies", { movies: foundMovies });
    })
    .catch((err) => console.log(err));
});

router.get('/movies/:movieId', (req, res) => {
    const movieId = req.params.movieId;
  
    Movie.findOne({_id: movieId})
        .then(foundMovie => {
          console.log('foundMovie', foundMovie);
          res.render('movie-details.hbs', foundMovie)
        })
        .catch(err => console.log(err))
   
  });

module.exports = router;
