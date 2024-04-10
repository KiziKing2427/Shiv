import React, { useState } from 'react';
import { Navbar, Button, Container } from 'react-bootstrap';
import { Navigate, useNavigate, useLocation } from 'react-router-dom';
import logo23 from './image/logo23.jpeg';
import QueryString from 'query-string';
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000"
});

const NavbarComponent = () => {
  const [currentUser, setCurrentUser] = useState(true);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [package_name, setPackageName] = useState(''); // Added package_name state
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = QueryString.parse(location.search);
  const amount = queryParams.totalPrice || 0;
  const date_of_travel = queryParams.selectedDate || '';
  const number_of_people = queryParams.totalPeople || 0;

  const submitLogout = (e) => {
    e.preventDefault();
    setCurrentUser(false);
    navigate('/authenticate');
  };

  const handleCheckout = async () => {
    try {
      const response = await client.post('http://127.0.0.1:8000/api/create-account/', {
        email,
        name,
        amount,
        date_of_travel,
        number_of_people,
        package_name
      });
      // Handle response if needed
      window.open("https://buy.stripe.com/test_14k5og0uzbYH7m0dQR", "_blank");
    } catch (error) {
      console.error('Error during checkout:', error);
    }
  };

  return (
    <>
      {currentUser ? (
        <>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>Welcome</Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                  <Button onClick={submitLogout} variant="light">Log out</Button>
                </Navbar.Text>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <section>
            <div className="image-container">
              <img src={logo23} alt="Place 23" />
              <div className='description'>
                <h4> Grand Pearl Dinner Cruise Bangkok</h4>
                <p style={{fontSize: '1.2em'}}>Total Price Payable: <span style={{fontWeight: 'bold', fontSize: '1.2em'}}>{amount} THB</span></p>
                <p style={{fontSize: '1.2em'}}>Date: <span style={{fontWeight: 'bold', fontSize: '1.2em'}}>{date_of_travel}</span></p>
                <p style={{fontSize: '1.2em'}}>Total People: <span style={{fontWeight: 'bold', fontSize: '1.2em'}}>{number_of_people}</span></p>
                <div><h5>Please Complete:</h5></div>
                <input
                   type="text"
                   placeholder="Please Enter your full name"
                   value={name}
                   onChange={(e) => setName(e.target.value)}
                   required
                   style={{border: '2px solid #007bff',borderRadius: '5px', padding: '10px', fontSize: '16px', outline: 'none', }}
                   className="inputField"
                 />
                 <input
                  type="text"
                  placeholder="Confirm Package name" // Input for package_name
                  value={package_name}
                  onChange={(e) => setPackageName(e.target.value)}
                  required
                  style={{border: '2px solid #007bff',borderRadius: '5px', padding: '10px', fontSize: '16px', outline: 'none', }}
                  className="inputField"
                />
                <input
                  type="email"
                  placeholder="Confirm your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{border: '2px solid #007bff',borderRadius: '5px', padding: '10px', fontSize: '16px', outline: 'none', }}
                  className="inputField"
                />
                <button className='buttonCheckout' onClick={handleCheckout}>
                  Checkout
                </button>
              </div>
            </div>
          </section>
        </>
      ) : (
        <Navigate to="/authenticate" />
      )}
    </>
  );
}

export default NavbarComponent;
