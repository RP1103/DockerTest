const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Com_news = new Schema({

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
  collection: 'Com_news'
})

module.exports = mongoose.model('Com_news', Com_news)
