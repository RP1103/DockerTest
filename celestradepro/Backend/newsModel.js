const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let News = new Schema({

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
  collection: 'News'
})

module.exports = mongoose.model('News', News)
