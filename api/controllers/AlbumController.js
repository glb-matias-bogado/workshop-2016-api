'use strict';
var album = require('../models/AlbumModel').instance;

class AlbumController {

    getList (req, res) {
        album.getList()
            .then(documents => {
                res.json(documents)
            })
            .catch(error => {
                res.json({error: error});
            });
    }

    getById (req, res) {
        album.getById(req.params.id)
            .then(documents => {
                res.json(documents[0] || {})
            })
            .catch(error => {
                res.json({error: error});
            });
    }

    getTracks (req, res) {
        res.json({getTracks: true});
    }
}

module.exports.AlbumController = AlbumController;
module.exports.instance = new AlbumController();