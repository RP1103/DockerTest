// Node.js controller code
const News = require('./newsModel');

exports.getAllNews = (req, res) => {
  News.find({}, (err, news) => {
    if (err) {
      res.send(err);
    }
    res.json(news);
  });
};
