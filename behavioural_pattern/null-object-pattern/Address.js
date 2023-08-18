"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = void 0;
class Address {
    constructor(street, zip, streetNumber) {
        this.street = street;
        this.zip = zip;
        this.streetNumber = streetNumber;
        this.address = `${this.street} ${this.streetNumber}, ${this.zip}`;
    }
    getAddress() {
        return this.address;
    }
}
exports.Address = Address;
