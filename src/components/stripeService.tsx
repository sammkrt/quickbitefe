import axios from 'axios';
import { AddStripeCustomer, AddStripePayment } from './contracts';
import { StripeCustomer, StripePayment } from '../models/stripe';

const baseUrl = 'https://localhost:5001/api/stripe';

const stripeService = {
  addStripeCustomerAsync: async (customer: AddStripeCustomer): Promise<StripeCustomer> => {
    const response = await axios.post(`${baseUrl}/customer/add`, customer);
    return response.data;
  },
  addStripePaymentAsync: async (payment: AddStripePayment): Promise<StripePayment> => {
    const response = await axios.post(`${baseUrl}/payment/add`, payment);
    return response.data;
  },
};

export default stripeService;
