const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const router = require('./router');

mongoose.connect('mongodb://localhost/FinanceDB', {
//mongoose.connect('mongodb://localhost/my_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Database connected');
}).catch((error) => {
  console.log('Database connection error', error);
});

app.use(bodyParser.json());
app.use(cors());
app.use('/api',router)


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
//const server = app.listen(port, () => console.log(`Server listening on port ${port}`));
