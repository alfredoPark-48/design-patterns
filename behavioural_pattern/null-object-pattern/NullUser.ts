import { NullAddress } from "./NullAddress";

export class NullUser {
    firstName: '';
    lastName: '';
    age: -1;
    address: NullAddress;

    constructor() {
        this.firstName =  '';
        this.lastName =  '';
        this.age = -1;
        this.address = new NullAddress();
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
