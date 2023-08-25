# Strategy Pattern
### What do we use it for?
We use the strategy pattern in order to define **interchangable** algorithms or behaviours
and make them **interchangable** at runtime. It allows us to encapsulate behaviours in
separate claseses making it switch different strategies without changing the context they are used.
- Helps us reduce conditional statements by delegating the decision making to the strategy.
- Enables runtime flexibility, by using a common interface we can swap strategies at runtime.
- Encapsulate behaviours.

### What is the idea behind this pattern?
The idea behind the strategy pattern is to separate behaviours and allow us to select
which strategy to utilize at runtime. Basically choose the right tool for the job.
This allows us code to be more flexible and maintainable, and follows the
encapsulation principle where it encapsulates a behaviour within an individual strategy
class making it easy for adding, modifying and removing strategies without affecting the
rest of the code base.

## Implementation
I have created a `PaymentStrategy` interface which has a single function named `pay`.
```
interface PaymentStrategy {
    pay(amount: number): void;
}
```
Then I created two classes that implement this `PaymentStrategy` interface, named
`PayPalPayment` and `CreditCardPayment`.
```
class PayPalPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Paid $${amount} using PayPal.`)
    }
}
```
```
class CreditCardPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Paid $${amount} using credit card.`)
    }
}
```
I also created a `PaymentContext` class to have a reference over which strategy we
are currently using.
Context classes are common practice when implementing the strategy pattern, it has
the responsability to manage strategies and acts as a bridge between the client code 
and the different strategies.
```
class PaymentContext {
    private paymentStrategy: PaymentStrategy

    constructor(paymentStrategy: PaymentStrategy) {
        this.paymentStrategy = paymentStrategy
    }

    setPaymentStrategy(paymentStrategy: PaymentStrategy) {
        this.paymentStrategy = paymentStrategy
    }

    processPayment(amount: number): void {
        this.paymentStrategy.pay(amount)
    }
}
```
Finally we can utilize our strategies.
```
import { PayPalPayment } from "./PayPalPayment/PayPalPayment";
import { CreditCardPayment } from "./CreditCardPayment/CreditCardPayment";
import { PaymentContext } from "./PaymentContext/PaymentContext";

const payPalPayment = new PayPalPayment()
const creditCardPayment = new CreditCardPayment()

const paymentContext = new PaymentContext(creditCardPayment)
paymentContext.processPayment(100)

paymentContext.setPaymentStrategy(payPalPayment)
paymentContext.processPayment(200)


// CONSOLE OUTPUT:
Paid $100 using credit card.
Paid $200 using PayPal.
```
