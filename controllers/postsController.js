const db = require("../models");
const moment = require('moment');
const sixtyDaysAgo = moment().subtract(60, 'days').startOf('day')


module.exports = {
  findAll: function(req, res) {
    db.Post
      .find({})
      .sort({ category: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Post
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
  
    console.log('create post fired');
    db.Post
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Post
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Post
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findNewest: function(req, res) {
    db.Post
  .findOne(req.query)
  .sort({ date: -1 })
  .limit(1)
  .then(dbModel => res.json(dbModel))
  .catch(err => res.status(422).json(err));
},
findUserPosts: function(req, res) {
  console.log('*******************made it into controller');
  db.Post
  .find({authorId: req.params.userId})
  .sort({date: -1})
  .limit(12)
  .then(dbPosts => res.json(dbPosts))
  .catch(err => res.status(422).json(err))
}
};
