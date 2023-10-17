"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsusManufacturer = void 0;
const Company_1 = require("../Company");
class AsusManufacturer extends Company_1.Company {
    createGpu() {
        return 'Created ASUS GPU';
    }
    createMonitor() {
        return 'Created ASUS Monitor';
    }
}
exports.AsusManufacturer = AsusManufacturer;
