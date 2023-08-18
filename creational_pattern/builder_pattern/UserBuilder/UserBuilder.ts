import { User } from "../User/User";

export class UserBuilder {
    user: User;

    constructor() {
        this.user = new User();
    }

    setFirstName(firstName: string): UserBuilder {
        this.user.firstName = firstName;
        return this;
    }

    setLastName(lastName: string): UserBuilder {
        this.user.lastName = lastName;
        return this;
    }

    setAge(age: number): UserBuilder {
        this.user.age = age;
        return this;
    }

    setStreetName(streetName: string): UserBuilder {
        this.user.address.streetName = streetName;
        return this;
    }

    setStreetNumber(streetNumber: number): UserBuilder {
        this.user.address.streetNumber = streetNumber;
        return this;
    }

    setZipCode(zipCode: number): UserBuilder {
        this.user.address.zipCode = zipCode;
        return this;
    }
}
