// Node.js controller code
const Com_news = require('./com_newsModel');

exports.getCom_news = (req, res) => {
  Com_news.find({}, (err, com_news) => {
    if (err) {
      res.send(err);
    }
    res.json(com_news);
  });
};
