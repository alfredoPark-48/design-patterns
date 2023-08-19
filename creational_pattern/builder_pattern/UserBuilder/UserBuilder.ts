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
