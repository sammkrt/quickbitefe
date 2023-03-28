export interface StripeCustomer {
    name: string;
    email: string;
    customerId: string;
  }
  
  
  export interface StripePayment {
    customerId: string;
    receiptEmail: string;
    description: string;
    currency: string;
    amount: number;
    paymentId: string;
  }
  