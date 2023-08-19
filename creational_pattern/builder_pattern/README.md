# Builder Pattern
### What do we use it for?
We use the builder pattern to simplify the creation of complex objects by separating
the construction process from the object.

### What is the idea behind this pattern?
The idea behind the builder pattern is that we do not need to pass all the 
parameters in order to create an object, instead we create a builder object where
each method adds the properties to our desired object and returns a reference to itself.

## Implementation
I created two classes `User` and `Address`.
```
export class Address {
    streetName: string
    streetNumber: number
    zipCode: number

    constructor(streetName: string, streetNumber: number, zipCode: number) {
        this.streetName = streetName
        this.streetNumber = streetNumber
        this.zipCode = zipCode
    }

    getAddress(): string {
        return `${this.streetNumber} ${this.streetName} ${this.zipCode}`
    }
}
```
```
export class Address {
    streetName: string
    streetNumber: number
    zipCode: number

    constructor(streetName: string, streetNumber: number, zipCode: number) {
        this.streetName = streetName
        this.streetNumber = streetNumber
        this.zipCode = zipCode
    }

    getAddress(): string {
        return `${this.streetNumber} ${this.streetName} ${this.zipCode}`
    }
}
```
In order to apply the Builder Pattern I created two more classes named `AddressBuilder`
and `UserBuilder`
```
import { Address } from "../Address/Address";

export class AddressBuilder {
    streetName: string;
    streetNumber: number;
    zipCode: number;

    constructor() {
        this.streetName = '';
        this.streetNumber = -1;
        this.zipCode = -1;
    }

    setStreetName(streetName: string): AddressBuilder {
        this.streetName = streetName;
        return this;
    }

    setStreetNumber(streetNumber: number): AddressBuilder {
        this.streetNumber = streetNumber;
        return this;
    }

    setZipCode(zipCode: number): AddressBuilder {
        this.zipCode = zipCode;
        return this;
    }

    getAddress(): string {
        return `${this.setStreetNumber} ${this.setStreetName} ${this.zipCode}`;
    }

    build(): Address {
        return new Address(this.streetName, this.streetNumber, this.zipCode);
    }
}
```
```
import { User } from "../User/User";
import { Address } from "../Address/Address";

export class UserBuilder {
    firstName: string;
    lastName: string;
    age: number;
    address: Address;

    constructor() {
        this.firstName = "";
        this.lastName = "";
        this.age = -1;
        this.address = new Address('', -1, -1);
    }

    setFirstName(firstName: string): UserBuilder {
        this.firstName = firstName;
        return this;
    }

    setLastName(lastName: string): UserBuilder {
        this.lastName = lastName;
        return this;
    }

    setAge(age: number): UserBuilder {
        this.age = age;
        return this;
    }

    setAddress(address: Address): UserBuilder {
        this.address = address;
        return this;
    }

    build(): User {
        return new User(this.firstName, this.lastName, this.age, this.address);
    }
}
```
Finally in our main function we can instantiate the user and address builder
objects, using their methods in other to have better control into the creation
of a `User` and `Address` objects.
```
import { UserBuilder } from "./UserBuilder/UserBuilder";
import { AddressBuilder } from "./AddressBuilder/AddressBuilder";

const addressBuilder = new AddressBuilder();
const userBuilder = new UserBuilder();

const walterWhiteAddress = addressBuilder
    .setStreetName("Negra Arroyo Lane")
    .setStreetNumber(308)
    .setZipCode(87104)
    .build();

const walterWhiteUser = userBuilder
    .setFirstName("Walter")
    .setLastName("White")
    .setAge(52)
    .setAddress(walterWhiteAddress)
    .build();
console.log(walterWhiteUser)
walterWhiteUser.print();
```
