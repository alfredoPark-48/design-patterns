# Abstract Factory Pattern
### What do we use it for?
We use the Abstract Factory Pattern in order to create families of related objects without specifying their concrete classes.

### What is the idea behind this pattern?
The main idea behind the Abstract Factory Pattern is to provide an interface in order to create families of *related* or *dependent* objects without specifying concrete classes.

## Implementation
I created a `Company` abstract class with two methods `createGpu` and `createMonitor`.
```
export abstract class Company {
    public abstract createGpu(): string;
    public abstract createMonitor(): string;
}
```
In order to apply the Abstract Factory Pattern I created two more classes named `MsiManufacturer`
and `AsusManufacturer`
```
import { Company } from "../Company";

export class MsiManufacturer extends Company {
    public createGpu(): string {
        return 'Created MSI GPU'
    }

    public createMonitor(): string {
        return 'Created MSI Monitor'
    }
}
```
```
import { Company } from "../Company";

export class AsusManufacturer extends Company {
    public createGpu(): string {
       return 'Created ASUS GPU' 
    }
    public createMonitor(): string {
       return 'Created ASUS Monitor' 
    }
}
```
Finally in our main function we can instantiate the MsiManufacturer and AsusManufacturer 
objects.
```
import { MsiManufacturer } from "./MsiManufacturer";
import { AsusManufacturer } from "./AsusManufacturer";

const msiManufacturer = new MsiManufacturer();
const asusManufacturer = new AsusManufacturer();

console.log(msiManufacturer.createGpu());
console.log(asusManufacturer.createGpu());

console.log(msiManufacturer.createMonitor());
console.log(asusManufacturer.createMonitor());
```
