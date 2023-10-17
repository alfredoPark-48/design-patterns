"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsiManufacturer = void 0;
const Company_1 = require("../Company");
class MsiManufacturer extends Company_1.Company {
    createGpu() {
        return 'Created MSI GPU';
    }
    createMonitor() {
        return 'Created MSI Monitor';
    }
}
exports.MsiManufacturer = MsiManufacturer;
