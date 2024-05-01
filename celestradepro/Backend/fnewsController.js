// Node.js controller code
const Fnews = require('./fnewsModel');

exports.getAllFnews = (req, res) => {
  Fnews.find({}, (err, Fnews) => {
    if (err) {
      res.send(err);
    }
    res.json(Fnews);
  });
};
