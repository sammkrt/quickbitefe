import React, { useState } from "react";

interface PaymentIntent {
  id: string;
  amount: number;
  currency: string;
}
function PaymentForm() {
  const [paymentIntent, setPaymentIntent] = useState<PaymentIntent | null>(
    null
  );
  const [amount, setAmount] = useState<number>(0);
  const [currency, setCurrency] = useState<string>("eur");
  const [cardNumber, setCardNumber] = useState<string>("");
  const [expiryMonth, setExpiryMonth] = useState<number>(0);
  const [expiryYear, setExpiryYear] = useState<number>(0);
  const [cvc, setCvc] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const createPaymentIntent = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    if (
      !amount ||
      !currency ||
      !cardNumber ||
      !expiryMonth ||
      !expiryYear ||
      !cvc
    ) {
      setErrorMessage("Please fill in all required fields");
      return;
    }

    setLoading(true);
    setErrorMessage("");

    try {
      // Create payment intent
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
      } else {
        setErrorMessage("An error occurred, please try again");
      }
    } catch (error) {
      setErrorMessage("An error occurred, please try again");
    }

    setLoading(false);

    const completePayment = async () => {
      if (!paymentIntent) {
        console.error("Payment intent is null or undefined");
        return;
      }

      setLoading(true);
      setErrorMessage("");

      try {
        // Create payment method
        const response = await fetch(
          "http://localhost:5242/Payment/paymentmethod",
          {
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
          }
        );

        if (response.ok) {
          const data = await response.json();
          console.log(data);
        } else {
          setErrorMessage("An error occurred, please try again");
        }
      } catch (error) {
        setErrorMessage("An error occurred, please try again");
      }

      setLoading(false);
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
          setErrorMessage("An error occurred, please try again");
        }
      } catch (error) {
        setErrorMessage("An error occurred, please try again");
      }

      setLoading(false);
    };
  };

  return (
    <div>
      <h1>Payment Page</h1>
      {paymentIntent && (
        <p>
          Payment Intent ID: {paymentIntent.id}, Amount: {paymentIntent.amount}{" "}
          {paymentIntent.currency}
        </p>
      )}
      <form onSubmit={createPaymentIntent}>
        <p className="register-p">Amount</p>
        <input
          className="register-input"
          placeholder="Amount"
          type="text"
          value={amount}
          onChange={(e: any) => setAmount(e.target.value)}
        />
        <br />
        <p>Currency : {currency}</p>
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          <option value="eur">EUR</option>
          <option value="usd">USD</option>
          <option value="gbp">GBP</option>
        </select>
        <br />
        <p className="register-p">Payment Method</p>
        <input
          className="register-input"
          placeholder="Card Number"
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
        <input
          className="register-input"
          placeholder="Expiry Month"
          type="text"
          value={expiryMonth}
          onChange={(e: any) => setExpiryMonth(e.target.value)}
        />
        <input
          className="register-input"
          placeholder="Expiry Year"
          type="text"
          value={expiryYear}
          onChange={(e: any) => setExpiryYear(e.target.value)}
        />
        <input
          className="register-input"
          placeholder="CVC"
          type="text"
          value={cvc}
          onChange={(e: any) => setCvc(e.target.value)}
        />
        <br />
        <br />
        <button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Pay Now"}
        </button>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

        {paymentIntent && (
          <button type="submit" disabled={loading}>
            {loading ? "Loading..." : "Complete Payment"}
          </button>
        )}
      </form>
    </div>
  );
}

export default PaymentForm;
