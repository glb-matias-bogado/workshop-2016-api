'use strict';
const dataBase = require('../../database/Database').instance;
const docTypes = require('../../database/docTypes');

class AlbumModel {

    getList () {
        return this.getListFiltered();
    }

    getById (id) {
        return this.getListFiltered({_id: id});
    }

    getListFiltered (filter) {
        const query = Object.assign({}, {docType: docTypes.ALBUM}, filter || {});

        return dataBase.find(query)
    }

    getAlbumTracks (albumId) {
    }

}
module.exports.AlbumModel = AlbumModel;
module.exports.instance = new AlbumModel();