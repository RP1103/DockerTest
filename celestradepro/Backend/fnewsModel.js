const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Fnews = new Schema({

  url:{
    type: String
   },
   name:{
    type: String
   },
   imgurl:{
    type: String
   },


}, {
  collection: 'ForexNews'
})

module.exports = mongoose.model('Fnews', Fnews)
