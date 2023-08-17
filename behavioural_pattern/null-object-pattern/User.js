"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(firstName, lastName, age, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
    }
    User.prototype.getFirstName = function () {
        return this.firstName;
    };
    User.prototype.getLastName = function () {
        return this.lastName;
    };
    User.prototype.getAge = function () {
        return this.age;
    };
    User.prototype.getAddress = function () {
        return this.address.getAddress();
    };
    User.prototype.print = function () {
        console.log("Hello, my name is ".concat(this.firstName, " ").concat(this.lastName, ", I am ").concat(this.age, " years old and I live in ").concat(this.address.getAddress()));
    };
    return User;
}());
exports.User = User;
