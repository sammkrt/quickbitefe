import { useState } from "react";
import axios from "axios";

interface PaymentIntentCreateDto {
  amount: number;
  currency: string;
}

interface PaymentMethodCreateDto {
  cardNumber: string;
  expiryMonth: number;
  expiryYear: number;
  cvc: string;
}

interface PaymentIntentCompleteDto {
  paymentIntentId: string;
}

function Payment() {
  const [paymentIntentId, setPaymentIntentId] = useState("");
  const [paymentMethodId, setPaymentMethodId] = useState("");
  const [paymentSucceeded, setPaymentSucceeded] = useState(false);

  const createPaymentIntent = async () => {
    try {
      const response = await axios.post("https://localhost:7179/Payment", 
      {
        amount: 1000,
        currency: "eur",
      } as PaymentIntentCreateDto);
      setPaymentIntentId(response.data.id);
    } catch (error) {
      console.error(error);
    }
  };

  const createPaymentMethod = async () => {
    try {
      const response = await axios.post(
        "https://localhost:7179/Payment/paymentmethod",
        {
          cardNumber: "4242424242424242",
          expiryMonth: 12,
          expiryYear: 2024,
          cvc: "123",
        } as PaymentMethodCreateDto,
        { headers: { "Content-Type": "application/json" } }
      );
      setPaymentMethodId(response.data.id);
    } catch (error) {
      console.error(error);
    }
  };

  const confirmPaymentIntent = async () => {
    try {
      const response = await axios.post(
        "/payment/complete",
        { paymentIntentId, paymentMethodId } as PaymentIntentCompleteDto,
        { headers: { "Content-Type": "application/json" } }
      );
      setPaymentSucceeded(response.data === "Payment succeeded");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={createPaymentIntent}>Create Payment Intent</button>
      <button onClick={createPaymentMethod}>Create Payment Method</button>
      <button onClick={confirmPaymentIntent}>Confirm Payment Intent</button>
      {paymentSucceeded && <div>Payment succeeded!</div>}
    </div>
  );
}

export default Payment;