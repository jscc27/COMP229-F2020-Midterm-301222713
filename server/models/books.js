// Name: Juliano Souza Chaves Costa
// StudentID: 301222713
// Date: 2022-10-30

let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "booksMidterm"
});

module.exports = mongoose.model('Book', Book);
