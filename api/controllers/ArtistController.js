'use strict';
var artist = require('../models/ArtistModel').instance;

class ArtistController {

    getList (req, res) {
        artist.getList()
            .then(documents => {
                res.json(documents)
            })
            .catch(error => {
                res.json({error: error});
            });
    }

    getById (req, res) {
        artist.getById(req.params.id)
            .then(documents => {
                res.json(documents[0] || {})
            })
            .catch(error => {
                res.json({error: error});
            });
    }
}

module.exports.ArtistController = ArtistController;
module.exports.instance = new ArtistController();