import { UserBuilder } from "./UserBuilder/UserBuilder";
import { AddressBuilder } from "./AddressBuilder/AddressBuilder";

const addressBuilder = new AddressBuilder();
const userBuilder = new UserBuilder();

const walterWhiteAddress = addressBuilder
    .setStreetName("Negra Arroyo Lane")
    .setStreetNumber(308)
    .setZipCode(87104)
    .build();

const walterWhiteUser = userBuilder
    .setFirstName("Walter")
    .setLastName("White")
    .setAge(52)
    .setAddress(walterWhiteAddress)
    .build();
console.log(walterWhiteUser)
walterWhiteUser.print();
