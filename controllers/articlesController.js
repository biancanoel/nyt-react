const db = require('../models');

//Define methods for the articleControllers which will run mongoose queries

module.exports = {
    create: function (req, res) {
        db.Article 
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    },

    findAll: function(req, res) {
        db.Article 
        .find(req.query)
        .then(dbModel => 
            res.json(dbModel)
        )
        .catch(err => res.json(422).json(err))
    },

    remove: function(req, res) {
        db.Article
        .findById({_id: req.params.id})
        .then(dbModel => dbModel.remove())
        // .then(dbModel => res.json(dbModel))
        .cath(err =>res.status(422).json(err))
    }
};