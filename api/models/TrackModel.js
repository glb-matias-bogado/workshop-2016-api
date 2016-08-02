'use strict';
const dataBase = require('../../database/Database').instance;
const docTypes = require('../../database/docTypes');

class TrackModel {

    getList () {
        return this.getListFiltered();
    }

    getById (id) {
        return this.getListFiltered({_id: id});
    }

    getListFiltered (filter) {
        const query = Object.assign({}, {docType: docTypes.TRACK}, filter || {});

        return dataBase.find(query)
    }

}
module.exports.AlbumModel = TrackModel;
module.exports.instance = new TrackModel();