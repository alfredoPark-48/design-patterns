"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullUser = void 0;
const NullAddress_1 = require("./NullAddress");
class NullUser {
    constructor() {
        this.firstName = '';
        this.lastName = '';
        this.age = -1;
        this.address = new NullAddress_1.NullAddress();
    }
    getFirstName() {
        return this.firstName;
    }
    getLastName() {
        return this.lastName;
    }
    getAge() {
        return this.age;
    }
    getAddress() {
        return this.address.getAddress();
    }
    print() {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}, I am ${this.age} years old and I live in ${this.address.getAddress()}`);
    }
}
exports.NullUser = NullUser;
