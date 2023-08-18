"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const Address_1 = require("../Address/Address");
class User {
    constructor() {
        this.firstName = '';
        this.lastName = '';
        this.age = -1;
        this.address = new Address_1.Address();
    }
}
exports.User = User;
