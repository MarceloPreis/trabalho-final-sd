const Model = require('./Model');
const mongoose = require('mongoose');

module.exports = class Contact extends Model {
    model = 'contact';

    constructor(data = {}) {
        super();
        this.fill(data);
    }

    getSchema() {
        return new mongoose.Schema({
            address: String,
            phone: String,
            email: String,
        });
    }

    attributes() {
        return ['id', 'address', 'phone', 'email'];
    }
}
