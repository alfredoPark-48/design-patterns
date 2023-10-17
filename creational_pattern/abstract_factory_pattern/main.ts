import { MsiManufacturer } from "./MsiManufacturer";
import { AsusManufacturer } from "./AsusManufacturer";

const msiManufacturer = new MsiManufacturer();
const asusManufacturer = new AsusManufacturer();

console.log(msiManufacturer.createGpu());
console.log(asusManufacturer.createGpu());

console.log(msiManufacturer.createMonitor());
console.log(asusManufacturer.createMonitor());
