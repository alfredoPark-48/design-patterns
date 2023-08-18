"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBuilder = void 0;
const User_1 = require("../User/User");
class UserBuilder {
    constructor() {
        this.user = new User_1.User();
    }
    setFirstName(firstName) {
        this.user.firstName = firstName;
        return this;
    }
    setLastName(lastName) {
        this.user.lastName = lastName;
        return this;
    }
    setAge(age) {
        this.user.age = age;
        return this;
    }
    setStreetName(streetName) {
        this.user.address.streetName = streetName;
        return this;
    }
    setStreetNumber(streetNumber) {
        this.user.address.streetNumber = streetNumber;
        return this;
    }
    setZipCode(zipCode) {
        this.user.address.zipCode = zipCode;
        return this;
    }
}
exports.UserBuilder = UserBuilder;
