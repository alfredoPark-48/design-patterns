"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBuilder = void 0;
const User_1 = require("../User/User");
const Address_1 = require("../Address/Address");
class UserBuilder {
    constructor() {
        this.firstName = "";
        this.lastName = "";
        this.age = -1;
        this.address = new Address_1.Address('', -1, -1);
    }
    setFirstName(firstName) {
        this.firstName = firstName;
        return this;
    }
    setLastName(lastName) {
        this.lastName = lastName;
        return this;
    }
    setAge(age) {
        this.age = age;
        return this;
    }
    setAddress(address) {
        this.address = address;
        return this;
    }
    build() {
        return new User_1.User(this.firstName, this.lastName, this.age, this.address);
    }
}
exports.UserBuilder = UserBuilder;
