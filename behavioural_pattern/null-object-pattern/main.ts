import { NullUser } from "./NullUser";
import { User } from "./User";
import { Address } from "./Address";

const addresses = [
    new Address("Negra Arroyo Lane", "11320", "308"),
    new Address("Nosh My Bollocks Ave", "13920", "673"),
    new Address("Lane Street", "192100", "21"),
];

const users = [
    new User("John", "Doe", 12, addresses[0]),
    new User("Jane", "Black", 23, addresses[1]),
    new User("Jeff", "Jones", 31, addresses[2]),
];

const findUser = (userName: string): User | NullUser => {
    const user = users.filter((user) => user.firstName === userName);
    if (user.length === 0) return new NullUser();
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
