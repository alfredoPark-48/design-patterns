import { Address } from "./Address";

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

    getFirstName(): string {
        return this.firstName;
    }

    getLastName(): string {
        return this.lastName;
    }

    getAge(): number {
        return this.age;
    }

    getAddress(): string {
        return this.address.getAddress();
    }

    print(): void {
        console.log(
            `Hello, my name is ${this.firstName} ${this.lastName}, I am ${this.age} years old and I live in ${this.address.getAddress()}`
        );
    }
}
