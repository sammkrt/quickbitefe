import React, { useEffect, useState } from "react";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import { CartModel, PaymentIntent, User } from "../../types/Types";
import "./Payment.css";
import { useParams } from "react-router-dom";
const Payment = () => {
  const [paymentIntent, setPaymentIntent] = useState<PaymentIntent | null>(
    null
  );
  const [cardNumber, setCardNumber] = useState<string>("");
  const [expiryMonth, setExpiryMonth] = useState<number>(0);
  const [expiryYear, setExpiryYear] = useState<number>(0);
  const [cvc, setCvc] = useState<string>("");

//amount total price
const [user, setUser] = useState<User | null>(null);
const [cartById, setCartById] = useState<CartModel>();

const fetchCartId = async (id: any) => {
  if (user?.cartId) {
    const result = await fetch(
      `http://localhost:5242/api/Carts/${user.cartId}`
    );
    const data = await result.json();
    setCartById(data);
    console.log(data);
    console.log(cartById);
  }
};
useEffect(() => {
  const jwt = localStorage.getItem("jwt");
  fetch("http://localhost:5242/Auth/user", {
    method: "GET",
    headers: { Authorization: `Bearer ${jwt}` },
    credentials: "include",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      setUser(data);
      console.log(user?.cartId);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}, []);
useEffect(() => {
  fetchCartId(idCart);
}, [user?.cartId]);
let { idCart } = useParams();


//payment process
  const createPayment = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:5242/Payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: parseFloat(event.currentTarget.amount.value),
          currency: "eur",
        }),
      });
      if (response.ok) {
        const data = await response.json();
        setPaymentIntent(data);
        console.log(paymentIntent?.id);
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
      if (!response.ok) {
        console.error("Error creating payment method:", response.statusText);
        return;
      }
      const data = await response.json();
      console.log(data);
      try {
        const response = await fetch("http://localhost:5242/Payment/complete", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ PaymentIntentId: paymentIntent.id }),
        });

        if (response.ok) {
          const data = await response.text();
          console.log(data);
        } else {
          console.error("Error completing payment:", response.statusText);
        }
      } catch (error) {
        console.error("Error completing payment:", error);
      }
    } catch (error) {
      console.error("Error creating payment method:", error);
    }
  };
  return (
    <div className="payment-main">
      <HeaderComponent />
      <h1 className="payment-h1">Payment Page</h1>
      <form onSubmit={createPayment}>
        <div className="payment-section">
          <h2 className="payment-h2">Payment Details</h2>
          <label className="payment-label">
           Amount: <span>{cartById?.totalPrice} euros</span>
          </label>
          <br />
          <label className="payment-label">
            Card Number:
            <input
              className="payment-input"
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
          </label>
          <br />
          <label className="payment-label">
            Expiry Month:
            <input
              className="payment-input"
              type="number"
              value={expiryMonth}
              onChange={(e) => setExpiryMonth(parseInt(e.target.value))}
            />
          </label>
          <br />
          <label className="payment-label">
            Expiry Year:
            <input
              className="payment-input"
              type="number"
              value={expiryYear}
              onChange={(e) => setExpiryYear(parseInt(e.target.value))}
            />
          </label>
          <br />
          <label className="payment-label">
            CVC:
            <input
              className="payment-input"
              type="text"
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
            />
          </label>
          <br />
          <button className="payment-button" type="submit">
            Pay
          </button>
        </div>
      </form>
      <FooterComponent />
    </div>
  );
};

export default Payment;
