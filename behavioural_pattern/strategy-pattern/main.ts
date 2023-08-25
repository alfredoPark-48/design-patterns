import { PayPalPayment } from "./PayPalPayment/PayPalPayment";
import { CreditCardPayment } from "./CreditCardPayment/CreditCardPayment";
import { PaymentContext } from "./PaymentContext/PaymentContext";

const payPalPayment = new PayPalPayment()
const creditCardPayment = new CreditCardPayment()

const paymentContext = new PaymentContext(creditCardPayment)
paymentContext.processPayment(100)

paymentContext.setPaymentStrategy(payPalPayment)
paymentContext.processPayment(200)

