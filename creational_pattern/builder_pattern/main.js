"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserBuilder_1 = require("./UserBuilder/UserBuilder");
const user1 = new UserBuilder_1.UserBuilder();
user1.setFirstName('Walter').setLastName('White').setAge(52).setStreetName('Negra Arroyo Lane').setStreetNumber(210).setZipCode(11700);
console.log(user1);
