const Controller = require(`./Controller`);
const BankAccount = require(`../models/BankAccount`);

class BankAccountController extends Controller {
    constructor() {
        super(new BankAccount());
    }

    findByPerson(personId) {
        return this.Database.findMany({ key: 'person_id', value: personId })
    }
}

module.exports = new BankAccountController();