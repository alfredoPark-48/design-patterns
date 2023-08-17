"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullAddress = void 0;
var NullAddress = /** @class */ (function () {
    function NullAddress() {
        this.street = '';
        this.zip = '';
        this.streetNumber = '';
        this.address = '';
    }
    NullAddress.prototype.getAddress = function () {
        return 'no place';
    };
    return NullAddress;
}());
exports.NullAddress = NullAddress;
