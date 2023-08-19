"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressBuilder = void 0;
const Address_1 = require("../Address/Address");
class AddressBuilder {
    constructor() {
        this.streetName = '';
        this.streetNumber = -1;
        this.zipCode = -1;
    }
    setStreetName(streetName) {
        this.streetName = streetName;
        return this;
    }
    setStreetNumber(streetNumber) {
        this.streetNumber = streetNumber;
        return this;
    }
    setZipCode(zipCode) {
        this.zipCode = zipCode;
        return this;
    }
    getAddress() {
        return `${this.setStreetNumber} ${this.setStreetName} ${this.zipCode}`;
    }
    build() {
        return new Address_1.Address(this.streetName, this.streetNumber, this.zipCode);
    }
}
exports.AddressBuilder = AddressBuilder;
