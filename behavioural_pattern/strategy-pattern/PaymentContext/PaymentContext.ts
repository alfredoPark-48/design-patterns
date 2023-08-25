import { PaymentStrategy } from "../PaymentStrategy/PaymentStrategy";

export class PaymentContext {
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
