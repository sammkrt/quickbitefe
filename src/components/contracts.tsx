export interface AddStripeCustomer {
  email: string;
  name: string;
  creditCard: {
    name: string;
    cardNumber: string;
    expirationMonth: string;
    expirationYear: string;
    cvc: string;
  };
}

  
  export interface AddStripePayment {
    customerId: string;
    cardNumber: string;
    expMonth: string;
    expYear: string;
    cvc: string;
  }
  