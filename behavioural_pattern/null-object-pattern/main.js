"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NullUser_1 = require("./NullUser");
var User_1 = require("./User");
var Address_1 = require("./Address");
var addresses = [
    new Address_1.Address("Negra Arroyo Lane", "11320", "308"),
    new Address_1.Address("Nosh My Bollocks Ave", "13920", "673"),
    new Address_1.Address("Lane Street", "192100", "21"),
];
var users = [
    new User_1.User("John", "Doe", 12, addresses[0]),
    new User_1.User("Jane", "Black", 23, addresses[1]),
    new User_1.User("Jeff", "Jones", 31, addresses[2]),
];
var findUser = function (userName) {
    var user = users.filter(function (user) { return user.firstName === userName; });
    if (user.length === 0)
        return new NullUser_1.NullUser();
    return user[0];
};
var user1 = findUser("John");
var user2 = findUser("Jane");
var user3 = findUser("Jeff");
var user4 = findUser("Adonis");
user1.print();
user2.print();
user3.print();
user4.print();
