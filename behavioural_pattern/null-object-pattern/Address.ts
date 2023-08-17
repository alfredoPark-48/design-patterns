export class Address {
    street: string;
    zip: string;
    streetNumber: string;
    address: string;

    constructor(street: string, zip: string, streetNumber: string) {
        this.street = street;
        this.zip = zip;
        this.streetNumber = streetNumber;
        this.address = `${this.street} ${this.streetNumber}, ${this.zip}`;
    }

    getAddress(): string {
        return this.address;
    }
}
