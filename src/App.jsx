import React from 'react';
import './App.css';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { RouterProvider } from 'react-router-dom';
import router from './Router';
import LanguageSelector from './languageSelector';

// Load Stripe with your publishable key
const stripePromise = loadStripe('your_stripe_publishable_key');

function App() {
  return (
    <Elements stripe={stripePromise}>
      <>
        <LanguageSelector />
        <RouterProvider router={router} />
      </>
    </Elements>
  );
}

export default App;
