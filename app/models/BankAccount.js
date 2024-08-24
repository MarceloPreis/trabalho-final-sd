const Model = require('./Model');
const mongoose = require('mongoose');

module.exports = class BankAccount extends Model {  
    model = 'bankAccount';

    constructor(data = {}) {
        super();
        this.fill(data)
    }

    getSchema() {
        return new mongoose.Schema({
            type: String,
            bank_code: String,
            agency: String,
        });
    }

    attributes() {
        return ['id', 'type', 'bank_code', 'agency'];
    }
}
