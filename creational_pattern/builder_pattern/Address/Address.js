"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = void 0;
class Address {
    constructor(streetName, streetNumber, zipCode) {
        this.streetName = streetName;
        this.streetNumber = streetNumber;
        this.zipCode = zipCode;
    }
    getAddress() {
        return `${this.streetNumber} ${this.streetName} ${this.zipCode}`;
    }
}
exports.Address = Address;
