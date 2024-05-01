const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Vix = new Schema({
 
  Open: {
    type: Number
  },
  High: {
    type: Number
  },
  Low: {
    type: Number
  },
 
  Close: {
    type: Number
  },
  Volume: {
    type: Number
  },
  Adjclose:{
    type:String
  } 

}, {
  collection: 'Vix'
})

module.exports = mongoose.model('Vix', Vix)
