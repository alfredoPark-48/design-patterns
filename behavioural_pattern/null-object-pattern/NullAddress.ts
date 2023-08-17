export class NullAddress {
    street: '';
    zip: '';
    streetNumber: '';
    address: '';

    constructor() {
        this.street = '';
        this.zip = '';
        this.streetNumber = '';
        this.address = ''
    }


    getAddress(): string {
        return 'no place';
    }
}
