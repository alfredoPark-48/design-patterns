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
