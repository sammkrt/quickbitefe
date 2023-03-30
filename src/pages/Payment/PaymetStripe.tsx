import React from 'react'

// // import React, { useState } from 'react';
// // import Stripe from 'stripe';

// // interface PaymentProps {}

// // const PaymentStripe: React.FC<PaymentProps> = () => {
// //   const [cardNumber, setCardNumber] = useState<string>('');
// //   const [cardExpiration, setCardExpiration] = useState<string>('');
// //   const [cardCvc, setCardCvc] = useState<string>('');

// //   const stripe = new Stripe('sk_test_51MpW20JdhubROhwWod9fbBpkhRUslF2Y7AmcqlPJrExivb1cnIiUgqGkiKVJkPQUX0d3lGcXSO4WPDTLwSaTv40S00RNGT8dmy', {
// //     apiVersion: '2022-11-15',
// //   });

// //   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
// //     event.preventDefault();

// //     const { paymentMethod, error } = await stripe.paymentMethods.create({
// //         type: 'card',
// //         card: {
// //           number: cardNumber,
// //           exp_month: parseInt(cardExpiration.split('/')[0], 10),
// //           exp_year: parseInt(cardExpiration.split('/')[1], 10),
// //           cvc: cardCvc,
// //         },
// //       }) as { paymentMethod?: PaymentMethodData; error?: any };
      
// //       if (error) {
// //         console.error(error);
// //       } else if (paymentMethod) {
// //         console.log(paymentMethod);
// //         // TODO: Send paymentMethod.id to backend server for processing
// //       }}
// //   return (
// //     <div>
// //       <h2>Payment</h2>
// //       <form onSubmit={handleSubmit}>
// //         <div>
// //           <label htmlFor="cardNumber">Card number:</label>
// //           <input
// //             type="text"
// //             id="cardNumber"
// //             value={cardNumber}
// //             onChange={(event) => setCardNumber(event.target.value)}
// //             required
// //           />
// //         </div>
// //         <div>
// //           <label htmlFor="cardExpiration">Expiration date:</label>
// //           <input
// //             type="text"
// //             id="cardExpiration"
// //             value={cardExpiration}
// //             onChange={(event) => setCardExpiration(event.target.value)}
// //             placeholder="MM/YY"
// //             required
// //           />
// //         </div>
// //         <div>
// //           <label htmlFor="cardCvc">CVC:</label>
// //           <input
// //             type="text"
// //             id="cardCvc"
// //             value={cardCvc}
// //             onChange={(event) => setCardCvc(event.target.value)}
// //             required
// //           />
// //         </div>
// //         <button type="submit">Pay</button>
// //       </form>
// //     </div>
// //   );
// // };
// // export default PaymentStripe;
// // import React, { useState } from 'react';
// // import Stripe from 'stripe';
// // import { loadStripe,PaymentIntent } from '@stripe/stripe-js'

// // interface PaymentProps {}

// // interface PaymentMethodCreateDto {
// //   cardNumber: string;
// //   expiryMonth: number;
// //   expiryYear: number;
// //   cvc: string;
// // }

// // interface PaymentIntentCreateDto {
// //   amount: number;
// //   currency: string;
// // }

// // interface PaymentIntentCompleteDto {
// //   paymentIntentId: string;
// // }

// // const PaymentStripe: React.FC<PaymentProps> = () => {
// //   const [cardNumber, setCardNumber] = useState<string>('');
// //   const [cardExpiration, setCardExpiration] = useState<string>('');
// //   const [cardCvc, setCardCvc] = useState<string>('');

// //   const stripePromise = loadStripe('pk_test_51MpW20JdhubROhwW67SEDTRE3RzHZp6uRBMWt0NNQ7u5lDrxHA8TvOrlYTwsbnV28elQkjsoUsVIvnMr7Jri0LZb00R1XFs5Eo')
// //   const stripe = new Stripe('sk_test_51MpW20JdhubROhwWod9fbBpkhRUslF2Y7AmcqlPJrExivb1cnIiUgqGkiKVJkPQUX0d3lGcXSO4WPDTLwSaTv40S00RNGT8dmy', {
// //     apiVersion: '2022-11-15',
// //   });

// //   const createPaymentMethod = async (paymentMethodCreateDto: PaymentMethodCreateDto) => {
// //     const response = await fetch('/payment/paymentmethod', {
// //       method: 'POST',
// //       headers: {
// //         'Content-Type': 'application/json',
// //       },
// //       body: JSON.stringify(paymentMethodCreateDto),
// //     });

// //     if (!response.ok) {
// //       throw new Error(`Failed to create [payment method](poe://www.poe.com/_api/key_phrase?phrase=payment%20method&prompt=Tell%20me%20more%20about%20payment%20method.): ${response.statusText}`);
// //     }

// //     const data = await response.json();
// //     return data.id;
// //   };

// //   const createPaymentIntent = async (paymentIntentCreateDto: PaymentIntentCreateDto) => {
// //     const response = await fetch('/payment/paymentintent', {
// //       method: 'POST',
// //       headers: {
// //         'Content-Type': 'application/json',
// //       },
// //       body: JSON.stringify(paymentIntentCreateDto),
// //     });

// //     if (!response.ok) {
// //       throw new Error(`Failed to create payment intent: ${response.statusText}`);
// //     }

// //     const data = await response.json();
// //     return data.clientSecret;
// //   };

// //   const completePaymentIntent = async (paymentIntentCompleteDto: PaymentIntentCompleteDto) => {
// //     const response = await fetch('/payment/paymentintent/complete', {
// //       method: 'POST',
// //       headers: {
// //         'Content-Type': 'application/json',
// //       },
// //       body: JSON.stringify(paymentIntentCompleteDto),
// //     });

// //     if (!response.ok) {
// //       throw new Error(`Failed to complete payment intent: ${response.statusText}`);
// //     }

// //     const data = await response.json();
// //     return data.success;
// //   };

// //   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
// //     event.preventDefault();

// //     try {

// //       const paymentMethodId = await createPaymentMethod({
// //         cardNumber,
// //         expiryMonth: parseInt(cardExpiration.split('/')[0], 10),
// //         expiryYear: parseInt(cardExpiration.split('/')[1], 10),
// //         cvc: cardCvc,
// //       });

// //       const clientSecret = await createPaymentIntent({
// //         amount: 20000, // TODO: Replace with actual amount
// //         currency: 'eur', // TODO: Replace with actual currency
// //       });

// //       const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
// //         payment_method: paymentMethodId,
// //       }) as { paymentIntent?: PaymentIntent; error?: any };

// //       if (error) {
// //         console.error(error);
// //       } else if (paymentIntent) {
// //         console.log(paymentIntent);
// //         const success = await completePaymentIntent({
// //           paymentIntentId: paymentIntent.id,
// //         });
// //         console.log(success);
// //       }
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2>Payment</h2>
// //       <form onSubmit={handleSubmit}>
// //         <div>
// //           <label htmlFor="cardNumber">Card number:</label>
// //           <input
// //             type="text"
// //             id="cardNumber"
// //             value={cardNumber}
// //             onChange={(event) => setCardNumber(event.target.value)}
// //             required
// //           />
// //         </div>
// //         <div>
// //           <label htmlFor="cardExpiration">Expiration date:</label>
// //           <input
// //             type="text"
// //             id="cardExpiration"
// //             value={cardExpiration}
// //             onChange={(event) => setCardExpiration(event.target.value)}
// //             placeholder="MM/YY"
// //             required
// //           />
// //         </div>
// //         <div>
// //           <label htmlFor="cardCvc">CVC:</label>
// //           <input
// //             type="text"
// //             id="cardCvc"
// //             value={cardCvc}
// //             onChange={(event) => setCardCvc(event.target.value)}
// //             required
// //           />
// //         </div>
// //         <button type="submit">Pay</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default PaymentStripe;
      

// import React, { useState } from 'react';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import { PaymentIntent } from '@stripe/stripe-js';

// const CheckoutForm = () => {
//   const [loading, setLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');
//   const stripe = useStripe();
//   const elements = useElements();

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setLoading(true);

//     try {
//       // Create a PaymentIntent on the server
//       const response = await fetch('http://localhost:5242/Payment', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           amount: 1000, // amount in cents
//           currency: 'usd',
//         }),
//       });
//       const { clientSecret } = await response.json();

//       // Confirm the PaymentIntent with the card payment method
//       const { error, paymentIntent } = await stripe?.confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: elements?.getElement(CardElement),
//         },
//       }) as { error?: any; paymentIntent?: PaymentIntent };

//       if (error) {
//         setErrorMessage(error.message);
//         setLoading(false);
//       } else {
//         console.log('Payment succeeded:', paymentIntent);
//         setLoading(false);
//       }
//     } catch (error) {
//       console.error(error);
//       setErrorMessage('An error occurred, please try again.');
//       setLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <CardElement />
//       <button type="submit" disabled={!stripe || loading}>
//         Pay
//       </button>
//       {errorMessage && <div>{errorMessage}</div>}
//     </form>
//   );
// };

// export default CheckoutForm;