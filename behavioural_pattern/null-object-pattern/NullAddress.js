"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullAddress = void 0;
class NullAddress {
    constructor() {
        this.street = '';
        this.zip = '';
        this.streetNumber = '';
        this.address = '';
    }
    getAddress() {
        return 'no place';
    }
}
exports.NullAddress = NullAddress;
