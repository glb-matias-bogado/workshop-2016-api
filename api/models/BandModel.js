'use strict';
const dataBase = require('../../database/Database').instance;
const docTypes = require('../../database/docTypes');

class BandModel {

    getList () {
        return this.getListFiltered();
    }

    getById (id) {
        return this.getListFiltered({_id: id});
    }

    getListFiltered (filter) {
        const query = Object.assign({}, {docType: docTypes.BAND}, filter || {});

        return dataBase.find(query)
    }

    getBandArtists (bandId) {
    }

    getBandAlbums (bandId) {
    }


}
module.exports.BandModel = BandModel;
module.exports.instance = new BandModel();