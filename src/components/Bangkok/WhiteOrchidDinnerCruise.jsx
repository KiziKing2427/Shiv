import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import logo28 from './image/logo28.jpeg';

const WhiteOrchidDinnerCruise = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0); // State to hold total price
    const navigate = useNavigate(); // Initialize useNavigate

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    const handleAdultsChange = (event) => {
        setAdults(parseInt(event.target.value));
    };

    const handleChildrenChange = (event) => {
        setChildren(parseInt(event.target.value));
    };

    const handleCalculatePrice = () => {
        const pricePerPerson = 1000; // Price per person in Baht
        const calculatedTotalPrice = (adults + children) * pricePerPerson;
        setTotalPrice(calculatedTotalPrice); // Update total price in state
        
        const isConfirmed = window.confirm(`Total Price: ${calculatedTotalPrice} Baht`);
    
        // Scroll down if user confirmed
        if (isConfirmed) {
            window.scroll({
                top: document.body.scrollHeight,
                behavior: 'smooth'
            });
        }
    };

    const handlePayNow = () => {
        // Check if all fields are filled
        if (!selectedDate || adults === 0) {
            alert('Date and at least one person traveling must be filled.');
        } else {
            // Navigate to payment page if all fields are filled
            const totalPricePayable = encodeURIComponent(totalPrice);
            const totalPeopleParam = encodeURIComponent(totalPeople);
            const dateParam = encodeURIComponent(selectedDate);
            const sourceParam = encodeURIComponent('WhiteOrchidDinnerCruise'); // Unique identifier for the source page
            navigate(`/authenticate?totalPrice=${totalPricePayable}&totalPeople=${totalPeopleParam}&date=${dateParam}&source=${sourceParam}`);
        }
    };
    
    useEffect(() => {
        // Scroll to the top of the page when component mounts
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="Thailand-Places">
            <h3> White orchid Dinner cruise</h3>
            <div className="image-with-name">
                <div className="image-container">
                    <img src={logo28} alt="Place 28" />
                </div>
                <div className="price-frame">
                    <p className="price">Price: 1,000.00 Baht</p> <div>&nbsp;</div>
                    <p className="date-label">Select Date to Travel</p><div>&nbsp;</div>
                    <input type="date" value={selectedDate} onChange={handleDateChange} /><div>&nbsp;</div>
                    <p className="date-label">How many People</p>
                    <div className="people-selection">
                        <div className="person-container">
                            <label htmlFor="adults">Adults:</label>
                            <div className="increment-decrement">
                                <button onClick={() => setAdults(adults - 1)} disabled={adults === 1}>-</button>
                                <span>{adults}</span>
                                <button onClick={() => setAdults(adults + 1)}>+</button>
                            </div>
                        </div>
                        <div className="person-container">
                            <label htmlFor="children">Children:</label>
                            <div className="increment-decrement">
                                <button onClick={() => setChildren(children - 1)} disabled={children === 0}>-</button>
                                <span>{children}</span>
                                <button onClick={() => setChildren(children + 1)}>+</button>
                            </div>
                        </div>
                    </div>
                    <div>&nbsp;</div>
                    <button onClick={handleCalculatePrice} className="calculate-button">Calculate Price</button>
                    <p>Check result of Selected Items below</p>
                </div>
                <div className="total-amount">
                    <h5>Total Amount Payable: {totalPrice} THB</h5>
                </div>
                <div className="results">
                    <h4>Your Selection:</h4>
                    <div className="selection-details">
                        <div className="detail-item">
                            <p>Date: {selectedDate}</p>
                        </div>
                        <div className="detail-item">
                            <p>Number of Adults: {adults}</p>
                        </div>
                        <div className="detail-item">
                            <p>Number of Children: {children}</p>
                        </div>
                        <div className="detail-item">
                            <p>Total Price: {totalPrice} Baht</p>
                        </div>
                        <div>&nbsp;</div>
                        <div className="payment-container-button">
                            <button className="pay-now-button" onClick={handlePayNow}>Pay Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhiteOrchidDinnerCruise;
