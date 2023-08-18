"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NullUser_1 = require("./NullUser");
const User_1 = require("./User");
const Address_1 = require("./Address");
const addresses = [
    new Address_1.Address("Negra Arroyo Lane", "11320", "308"),
    new Address_1.Address("Nosh My Bollocks Ave", "13920", "673"),
    new Address_1.Address("Lane Street", "192100", "21"),
];
const users = [
    new User_1.User("John", "Doe", 12, addresses[0]),
    new User_1.User("Jane", "Black", 23, addresses[1]),
    new User_1.User("Jeff", "Jones", 31, addresses[2]),
];
const findUser = (userName) => {
    const user = users.filter((user) => user.firstName === userName);
    if (user.length === 0)
        return new NullUser_1.NullUser();
    return user[0];
};
const user1 = findUser("John");
const user2 = findUser("Jane");
const user3 = findUser("Jeff");
const user4 = findUser("Adonis");
user1.print();
user2.print();
user3.print();
user4.print();
