import { UserBuilder } from "./UserBuilder/UserBuilder";

const user1 = new UserBuilder();
user1
    .setFirstName("Walter")
    .setLastName("White")
    .setAge(52)
    .setStreetName("Negra Arroyo Lane")
    .setStreetNumber(308)
    .setZipCode(87104);

console.log(user1);
