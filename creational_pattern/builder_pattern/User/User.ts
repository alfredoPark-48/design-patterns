import { Address } from "../Address/Address";

export class User {
    firstName: string;
    lastName: string;
    age: number;
    address: Address;

    constructor(
        firstName: string,
        lastName: string,
        age: number,
        address: Address
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
    }

    print(): void {
        console.log(
            `${this.firstName} ${this.lastName}, aged ${this.age}, lives at ${this.address.getAddress()}`
        );
    }
}
