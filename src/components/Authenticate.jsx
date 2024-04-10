import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000"
});

function Authenticate() {
  const [currentUser, setCurrentUser] = useState(null);
  const [registrationToggle, setRegistrationToggle] = useState(false);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalPeople, setTotalPeople] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const totalPriceParam = queryParams.get('totalPrice');
    const dateParam = queryParams.get('selectedDate'); // Retrieve date from query parameters
    const totalPeopleParam = queryParams.get('totalPeople'); // Retrieve total people from query parameters
    if (totalPriceParam) {
      setTotalPrice(parseFloat(totalPriceParam));
    }
    if (dateParam) {
      setSelectedDate(dateParam); // Update date state
    }
    if (totalPeopleParam) {
      setTotalPeople(parseInt(totalPeopleParam)); // Update total people state
    }
}, [location.search]);

  function update_form_btn() {
    if (registrationToggle) {
      document.getElementById("form_btn").innerHTML = "Register";
      setRegistrationToggle(false);
    } else {
      document.getElementById("form_btn").innerHTML = "Log in";
      setRegistrationToggle(true);
    }
  }

  function submitRegistration(e) {
    e.preventDefault();
    setFormSubmitted(true);
    client.post(
      "/api/register",
      {
        email: email,
        username: username,
        password: password
      }
    ).then(function (res) {
      setUsername(res.data.username);
      setRegistrationSuccess(true);
    });
  }
  function submitLogin(e) {
    e.preventDefault();
    setFormSubmitted(true);
    client.post(
        "/api/login",
        {
            email: email,
            password: password
        }
    ).then(function (res) {
        setCurrentUser(true);
        const queryParams = new URLSearchParams(window.location.search);
        const sourceParam = queryParams.get('source');
        const dateParam = queryParams.get('date');
        const totalPeopleParam = queryParams.get('totalPeople');
        if (sourceParam) {
            if (sourceParam === 'BangkokMSW') {
                navigate(`/bangkokMSWPay?totalPrice=${totalPrice}&selectedDate=${dateParam}&totalPeople=${totalPeopleParam}`);
            } else if (sourceParam === 'OneDayKanchnaBridgeKwai') {
                navigate(`/oneDayKanchanaBridgeKwaiPay?totalPrice=${totalPrice}&selectedDate=${dateParam}&totalPeople=${totalPeopleParam}`); 
            } else if (sourceParam === 'ChaoPDCruise') {
                navigate(`/chaoPDCruisePay?totalPrice=${totalPrice}&selectedDate=${dateParam}&totalPeople=${totalPeopleParam}`);
            } else if (sourceParam === 'ThreeTempleAndGPTB') {
                navigate(`/threeTempleAndGPTBPay?totalPrice=${totalPrice}&selectedDate=${dateParam}&totalPeople=${totalPeopleParam}`);
            } else if (sourceParam === 'GrandPearlDinnerCruiseB') {
                navigate(`/grandPearlDinnerCruiseBPay?totalPrice=${totalPrice}&selectedDate=${dateParam}&totalPeople=${totalPeopleParam}`);
            } else if (sourceParam === 'BangkokAncientCityAndEM') {
                navigate(`/bangkokAncientCityAndEMPay?totalPrice=${totalPrice}&selectedDate=${dateParam}&totalPeople=${totalPeopleParam}`); 
            } else if (sourceParam === 'BangkokCityTT') {
                navigate(`/bangkokCityTTPay?totalPrice=${totalPrice}&selectedDate=${dateParam}&totalPeople=${totalPeopleParam}`);
            } else if (sourceParam === 'BangkokCityShoppingT') {
                navigate(`/bangkokCityShoppingTPay?totalPrice=${totalPrice}&selectedDate=${dateParam}&totalPeople=${totalPeopleParam}`); 
            } else if (sourceParam === 'SafariWorldAndMPB') {
                navigate(`/safariWorldAndMPBPay?totalPrice=${totalPrice}&selectedDate=${dateParam}&totalPeople=${totalPeopleParam}`);
            } else if (sourceParam === 'WhiteOrchidDinnerCruise') {
                navigate(`/whiteOrchidDinnerCruisePay?totalPrice=${totalPrice}&selectedDate=${dateParam}&totalPeople=${totalPeopleParam}`); 
            } else if (sourceParam === 'DamnoenSadukAndMRMB') {
                navigate(`/damnoenSadukAndMRMBPay?totalPrice=${totalPrice}&selectedDate=${dateParam}&totalPeople=${totalPeopleParam}`);
            } else if (sourceParam === 'SiamAmazingThemePark') {
                navigate(`/siamAmazingThemeParkPay?totalPrice=${totalPrice}&selectedDate=${dateParam}&totalPeople=${totalPeopleParam}`);
            } else if (sourceParam === 'SamphranElephantZoo') {
                navigate(`/samphranElephantZooPay?totalPrice=${totalPrice}&selectedDate=${dateParam}&totalPeople=${totalPeopleParam}`); 
            } else if (sourceParam === 'AmphawaFloatingMarketBangkok') {
                navigate(`/amphawaFloatingMarketBangkokPay?totalPrice=${totalPrice}&selectedDate=${dateParam}&totalPeople=${totalPeopleParam}`);
            } else if (sourceParam === 'BangkokDreamWorldPark') {
                navigate(`/bangkokDreamWorldParkPay?totalPrice=${totalPrice}&selectedDate=${dateParam}&totalPeople=${totalPeopleParam}`);
            } else if (sourceParam === 'EveningFoodTourTukTuk') {
                navigate(`/eveningFoodTourTukTukPay?totalPrice=${totalPrice}&selectedDate=${dateParam}&totalPeople=${totalPeopleParam}`);
            } else if (sourceParam === 'EveningWalkingCityTourBangkok') {
                navigate(`/eveningWalkingCityTourBangkokPay?totalPrice=${totalPrice}&selectedDate=${dateParam}&totalPeople=${totalPeopleParam}`);
            } else if (sourceParam === 'SealifeOceanWorldMTB') {
                navigate(`/sealifeOceanWorldMTBPay?totalPrice=${totalPrice}&selectedDate=${dateParam}&totalPeople=${totalPeopleParam}`);
            } else {
                // Handle navigation for other sources if needed
            }
        }
    });
}

  if (currentUser) {
    return (
      <div>
        <div className="center">
          {registrationSuccess && (
            <div className="alert alert-success" role="alert">
              Registration successful! Please log in.
            </div>
          )}
          {username && (
            <div>
              <p>Registered Username: {username}</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Authentication App</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Button id="form_btn" onClick={update_form_btn} variant="light">{registrationToggle ? 'Register' : 'Log in'}</Button>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="center">
        {registrationSuccess && (
          <div className="alert alert-success" role="alert">
            Registration successful! Please log in.
          </div>
        )}
        <Form onSubmit={registrationToggle ? submitRegistration : submitLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          {registrationToggle && (
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" value={username} onChange={e => setUsername(e.target.value)} />
            </Form.Group>
          )}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
          </Form.Group>
          <Button variant="primary" type="submit">
            {registrationToggle ? 'Register' : 'Log in'}
          </Button>
        </Form>
      </div>
      {totalPrice > 0 && (
        <div className="center">
        </div>
      )}
    </div>
  );
}

export default Authenticate;
