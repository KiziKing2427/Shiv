import React, { useState } from 'react';

function CreateAccount() {
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'date') {
      setDate(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(import.meta.env.VITE_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, date }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Handle success
    } catch (error) {
      console.error('Error sending email:', error);
      // Handle error
    }
  };

  return (
    <div>
      <h1>Please enter your email and date:</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={date}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Send Email</button>
      </form>
    </div>
  );
}

export default CreateAccount;
