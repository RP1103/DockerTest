const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// To prepare for the change in Mongoose 7:
mongoose.set('strictQuery', false);

// To suppress the warning message:
mongoose.set('strictQuery', true);

let options = new Schema({

  symbol:{
    type: String
  },
  

  contractSymbol: {
    type: String
  },
  lastTradeDate: {
    type: Date
  },
  strike:{
    type: String
  },
  lastPrice: {
    type: String
  }, 

  bid: {
    type: String
  },
  ask: {
    type: String
  },
  change: {
    type: String
  },
  percentChange: {
    type: String
  },
  volume: {
    type: String
  },
  openInterest: {
    type: String
  },
  impliedVolatility: {
    type: String
  },
  inTheMoney: {
    type: Boolean
  },
  contractSize:{
    type: String
  },
  currency:{
    type: String
  },
  
  


}, {
  collection: 'options'
})

module.exports = mongoose.model('options', options)