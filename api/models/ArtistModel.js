'use strict';
const dataBase = require('../../database/Database').instance;
const docTypes = require('../../database/docTypes');

class ArtistModel {

    getList () {
        return this.getListFiltered();
    }

    getById (id) {
        return this.getListFiltered({_id: id});
    }

    getListFiltered (filter) {
        const query = Object.assign({}, {docType: docTypes.ARTIST}, filter || {});

        return dataBase.find(query)
    }

}
module.exports.AlbumModel = ArtistModel;
module.exports.instance = new ArtistModel();