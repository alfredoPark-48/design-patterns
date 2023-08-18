import { Address } from "../Address/Address";

export class User {
    firstName: string;
    lastName: string;
    age: number;
    address: Address;

    constructor() {
        this.firstName = "";
        this.lastName = "";
        this.age = -1;
        this.address = new Address();
    }

    print(): void {
        console.log(
            `${this.firstName} ${this.lastName}, aged ${this.age}, lives at ${this.address}`
        );
    }
}
