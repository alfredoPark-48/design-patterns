"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserBuilder_1 = require("./UserBuilder/UserBuilder");
const AddressBuilder_1 = require("./AddressBuilder/AddressBuilder");
const addressBuilder = new AddressBuilder_1.AddressBuilder();
const userBuilder = new UserBuilder_1.UserBuilder();
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
console.log(walterWhiteUser);
walterWhiteUser.print();
