"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(firstName, lastName, age, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
    }
    print() {
        console.log(`${this.firstName} ${this.lastName}, aged ${this.age}, lives at ${this.address.getAddress()}`);
    }
}
exports.User = User;
