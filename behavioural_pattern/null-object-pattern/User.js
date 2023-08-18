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
exports.User = User;
