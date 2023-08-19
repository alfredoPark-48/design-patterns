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
