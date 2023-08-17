"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullUser = void 0;
var NullAddress_1 = require("./NullAddress");
var NullUser = /** @class */ (function () {
    function NullUser() {
        this.firstName = '';
        this.lastName = '';
        this.age = -1;
        this.address = new NullAddress_1.NullAddress();
    }
    NullUser.prototype.getFirstName = function () {
        return this.firstName;
    };
    NullUser.prototype.getLastName = function () {
        return this.lastName;
    };
    NullUser.prototype.getAge = function () {
        return this.age;
    };
    NullUser.prototype.getAddress = function () {
        return this.address.getAddress();
    };
    NullUser.prototype.print = function () {
        console.log("Hello, my name is ".concat(this.firstName, " ").concat(this.lastName, ", I am ").concat(this.age, " years old and I live in ").concat(this.address.getAddress()));
    };
    return NullUser;
}());
exports.NullUser = NullUser;
