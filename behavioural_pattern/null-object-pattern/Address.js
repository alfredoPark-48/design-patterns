"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = void 0;
var Address = /** @class */ (function () {
    function Address(street, zip, streetNumber) {
        this.street = street;
        this.zip = zip;
        this.streetNumber = streetNumber;
        this.address = "".concat(this.street, " ").concat(this.streetNumber, ", ").concat(this.zip);
    }
    Address.prototype.getAddress = function () {
        return this.address;
    };
    return Address;
}());
exports.Address = Address;
