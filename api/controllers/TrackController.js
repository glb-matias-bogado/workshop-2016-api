'use strict';
var track = require('../models/TrackModel').instance;

class TrackController {

    getList (req, res) {
        track.getList()
            .then(documents => {
                res.json(documents)
            })
            .catch(error => {
                res.json({error: error});
            });
    }

    getById (req, res) {
        track.getById(req.params.id)
            .then(documents => {
                res.json(documents[0] || {})
            })
            .catch(error => {
                res.json({error: error});
            });
    }
}

module.exports.TrackController = TrackController;
module.exports.instance = new TrackController();