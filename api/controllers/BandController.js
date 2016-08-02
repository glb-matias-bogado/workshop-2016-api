'use strict';
var band = require('../models/BandModel').instance;

class BandController {

    getList (req, res) {
        band.getList()
            .then(documents => {
                res.json(documents)
            })
            .catch(error => {
                res.json({error: error});
            });
    }

    getById (req, res) {
        band.getById(req.params.id)
            .then(documents => {
                res.json(documents[0] || {})
            })
            .catch(error => {
                res.json({error: error});
            });
    }

    getAlbums (req, res) {
        res.json({getAlbums: true});
    }

    getArtists (req, res) {
        res.json({getArtists: true});
    }
}

module.exports.BandController = BandController;
module.exports.instance = new BandController();