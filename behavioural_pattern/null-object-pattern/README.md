# Null Object Pattern

### What do we use it for?

We use the Null Object Pattern to **create an instance of an object with default values anytime we have a null object being returned**.

### Idea behind this pattern:

We create an object that we return instead of a null, this object has the exact
same signature (properties and methods) as the object we'd be returning with
defaulted values. Therefore instead of checking for null we can simply treat
the object as a normal item.

## Implementation:

I created two classes named `Address` and `User`.

```
class User {
    firstName: string;
    lastName: string;
    age: number;
    address: Address;

    constructor(
        firstName: string,
        lastName: string,
        age: number,
        address: Address
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
    }

    getFirstName(): string {
        return this.firstName;
    }

    getLastName(): string {
        return this.lastName;
    }

    getAge(): number {
        return this.age;
    }

    getAddress(): string {
        return this.address.getAddress();
    }

    print(): void {
        console.log(
            `Hello, my name is ${this.firstName} ${this.lastName}, I am ${this.age} years old and I live in ${this.address.getAddress()}`
        );
    }
}

```

```
class Address {
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

```

In our `main.ts` file we have a function named `findUser`, where we take the `firstName` as an input then we look for the users in an array of `User` objects.

```
const findUser = (userName: string): User | NullUser => {
    const user = users.filter((user) => user.firstName === userName);
    return user[0];
};
```

However if we run the function and do not find a user, the returned user would be `undefined` or `null`, therefore if we do not find a user by following the Null Object pattern we return an object instead of a "null" value.

Also, if we run the following we get an error because `user4` is `undefined` and does not have a `print()` method.

```
const user1 = findUser("John");
const user2 = findUser("Jane");
const user3 = findUser("Jeff");
const user4 = findUser("Adonis");

user1.print();
user2.print();
user3.print();
user4.print();

// CONSOLE OUTPUT:
Hello, my name is John Doe, I am 12 years old and I live in Negra Arroyo Lane 308, 11320
Hello, my name is Jane Black, I am 23 years old and I live in Nosh My Bollocks Ave 673, 13920
Hello, my name is Jeff Jones, I am 31 years old and I live in Lane Street 21, 192100

user4.print();
      ^
TypeError: Cannot read properties of undefined (reading 'print')

```

Therefore, I also created two more classes named `NullUser` and `NullAddress`.

```
class NullUser {
    firstName: '';
    lastName: '';
    age: -1;
    address: NullAddress;

    constructor() {
        this.firstName =  '';
        this.lastName =  '';
        this.age = -1;
        this.address = new NullAddress();
    }

    getFirstName(): string {
        return this.firstName;
    }

    getLastName(): string {
        return this.lastName;
    }

    getAge(): number {
        return this.age;
    }

    getAddress(): string {
        return this.address.getAddress();
    }

    print(): void {
        console.log(
            `Hello, my name is ${this.firstName} ${this.lastName}, I am ${this.age} years old and I live in ${this.address.getAddress()}`
        );
    }
}

```

```
class NullAddress {
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

```

Our final logic for `findUser` is updated as follows

```
const findUser = (userName: string): User | NullUser => {
    const user = users.filter((user) => user.firstName === userName);
    if (user.length === 0) return new NullUser();
    return user[0];
};
```

Now we no longer have an error and have successfully applied the Null Object Pattern.

```
const user1 = findUser("John");
const user2 = findUser("Jane");
const user3 = findUser("Jeff");
const user4 = findUser("Adonis");

user1.print();
user2.print();
user3.print();
user4.print();

// CONSOLE OUTPUT:
Hello, my name is John Doe, I am 12 years old and I live in Negra Arroyo Lane 308, 11320
Hello, my name is Jane Black, I am 23 years old and I live in Nosh My Bollocks Ave 673, 13920
Hello, my name is Jeff Jones, I am 31 years old and I live in Lane Street 21, 192100
Hello, my name is  , I am -1 years old and I live in no place
```
