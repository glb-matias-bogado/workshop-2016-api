'use strict';
const Datastore = require('nedb');
const Promise = require('bluebird');

class Database extends Datastore {

    constructor (options) {
        super(options);
    }

    promisifyParentMethod (parentMethod, parentArguments) {
        if (typeof parentArguments[parentArguments.length] === 'function') {
            super[parentMethod](...parentArguments);
        } else {
            return new Promise((resolve, reject) => {
                const parentCallback = (error, data) => {
                    if (error) {
                        return reject(error);
                    }

                    return resolve(data);
                };

                parentArguments.push(parentCallback);

                super[parentMethod](...parentArguments);
            });
        }
    }

    insert (document, callback) {
        return this.promisifyParentMethod('insert', [...arguments]);
    }

    remove (query, options, callback) {
        return this.promisifyParentMethod('remove', [...arguments]);
    }

    find (query, callback) {
        return this.promisifyParentMethod('find', [...arguments]);
    }
}

module.exports.Database = Database;
module.exports.instance = new Database({
    filename: './database/workshop.db',
    autoload: true,
    timestampData: true
});