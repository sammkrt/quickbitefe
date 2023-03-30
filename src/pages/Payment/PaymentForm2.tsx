import React, { useState } from "react";

interface PaymentIntent {
  id: string;
  amount: number;
  currency: string;
}

const PaymentForm2 = () => {
  const [amount, setAmount] = useState<number>(0);
  const [paymentIntent, setPaymentIntent] = useState<PaymentIntent | null>(null);
  const [currency, setCurrency] = useState<string>("eur");
  const [cardNumber, setCardNumber] = useState<string>("");
  const [expiryMonth, setExpiryMonth] = useState<number>(0);
  const [expiryYear, setExpiryYear] = useState<number>(0);
  const [cvc, setCvc] = useState<string>("");

  const createPayment = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:5242/Payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount,
          currency,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        setPaymentIntent(data);
        console.log(paymentIntent?.id)
        completePayment();
      }
    } catch {
      console.log("error");
    }
  };

  const completePayment = async () => {
    if (!paymentIntent) {
      console.error("Payment intent is null or undefined");
      return;
    }
    try {
      // Create payment method
      const response = await fetch("http://localhost:5242/Payment/paymentmethod", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          CardNumber: cardNumber,
          ExpiryMonth: expiryMonth,
          ExpiryYear: expiryYear,
          Cvc: cvc,
        }),
      });
      if (!response.ok) {
        // handle error from server
        console.error("Error creating payment method:", response.statusText);
        return;
      }
      const data = await response.json();
      console.log(data);
      try {
        // Complete payment with payment intent
        const response = await fetch("http://localhost:5242/Payment/complete", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ PaymentIntentId: paymentIntent.id }),
        });

        if (response.ok) {
          const data = await response.text();
          console.log(data); // prints "Payment succeeded" or "Payment failed"
        } else {
          // handle error from server
          console.error("Error completing payment:", response.statusText);
        }
      } catch (error) {
        // handle error from fetch
        console.error("Error completing payment:", error);
      }
    } catch (error) {
      // handle error from fetch
      console.error("Error creating payment method:", error);
    }
  };

  return (
    <form onSubmit={createPayment}>
      <label>
        Amount:
        <input type="number" value={amount} onChange={(e) => setAmount(parseFloat(e.target.value))} />
      </label>
      <br />
      <label>
        Currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          <option value="eur">EUR</option>
          <option value="usd">USD</option>
          <option value="gbp">GBP</option>
        </select>
      </label>
      <br />
      <label>
        Card Number:
        <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
      </label>
      <br />
      <label>
        Expiry Month:
        <input type="number" value={expiryMonth} onChange={(e) => setExpiryMonth(parseInt(e.target.value))} />
      </label>
      <br />
      <label>
        Expiry Year:
        <input type="number" value={expiryYear} onChange={(e) => setExpiryYear(parseInt(e.target.value))} />
      </label>
      <br />
      <label>
        CVC:
        <input type="text" value={cvc} onChange={(e) => setCvc(e.target.value)} />
      </label>
      <br />
      <button type="submit">Pay</button>
</form>
);
};

export default PaymentForm2;