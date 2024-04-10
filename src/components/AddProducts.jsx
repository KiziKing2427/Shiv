import React, { useState } from 'react';
import { Navbar, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Navigate } from 'react-router-dom'; // Import Navigate
import BangkokMSWPay from './Bangkok/BangkokMSWPay'; // Import BangkokMSWPay component

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000"
});

const NavbarComponent = () => {
  const [currentUser, setCurrentUser] = useState(true); // Example initial state, adjust as needed
  const navigate = useNavigate();

  function submitLogout(e) {
    e.preventDefault();
    client.post(
      "/api/logout",
      null, // remove this if no data needs to be sent in the request body
      { withCredentials: true }
    ).then(function(res) {
      setCurrentUser(false);
      navigate('/authenticate'); // Redirect to login page after logout
    });
  }

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
                  <form onSubmit={submitLogout}>
                    <Button type="submit" variant="light">Log out</Button>
                  </form>
                </Navbar.Text>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <BangkokMSWPay /> {/* Include BangkokMSWPay component */}
        </>
      ) : (
        <Navigate to="/authenticate" />
      )}
      <div>Hello</div>
    </>
  );
}

export default NavbarComponent;
