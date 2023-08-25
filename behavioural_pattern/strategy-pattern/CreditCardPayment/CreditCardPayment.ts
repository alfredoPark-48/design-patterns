import { PaymentStrategy } from "../PaymentStrategy/PaymentStrategy";

export class CreditCardPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Paid $${amount} using credit card.`)
    }
}
