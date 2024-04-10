import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Home.css';
import logo1 from './image/logo1.jpeg';
import logo2 from './image/logo2.jpeg';
import logo3 from './image/logo3.jpeg';
import logo4 from './image/logo4.jpeg';
import logo6 from './image/logo6.jpeg';
import logo7 from './image/logo7.jpeg';
import logo8 from './image/logo8.jpeg';
import logo10 from './image/logo10.jpeg';
import logo11 from './image/logo11.jpeg';
import logo12 from './image/logo12.jpeg';
import logo13 from './image/logo13.jpeg';
import logo14 from './image/logo14.jpeg';
import logo15 from './image/logo15.jpeg';
import logo16 from './image/logo16.jpeg';
import logo17 from './image/logo17.jpeg';
import logo18 from './image/logo18.jpeg';
import logo19 from './image/logo19.jpeg';

const Home = () => {
  const { t } = useTranslation();
  const imageContainerRef = useRef(null);
  const packagesImageContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [packagesCurrentIndex, setPackagesCurrentIndex] = useState(0);
  const [isWaiting, setIsWaiting] = useState(false);

  const images = [logo1, logo2, logo3, logo4];
  const numImages = images.length;
  const imageWidth = 400;
  const transitionDuration = 500;
  const waitDuration = 1000;

  const imagesPackages = [logo13, logo14, logo15, logo16, logo17, logo18, logo19];
  const numPackageImages = imagesPackages.length;
  const imageWidthPackages = 175;
  const transitionDurationPackages = 500;

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isWaiting) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % numImages);
        setIsWaiting(true);
        setTimeout(() => {
          setIsWaiting(false);
        }, waitDuration);
      } else {
        setIsWaiting(false);
      }
    }, transitionDuration + waitDuration);

    return () => clearInterval(interval);
  }, [currentIndex, isWaiting, numImages, waitDuration]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isWaiting) {
        setPackagesCurrentIndex((prevIndex) => (prevIndex + 1) % numPackageImages);
        setIsWaiting(true);
        setTimeout(() => {
          setIsWaiting(false);
        }, waitDuration);
      } else {
        setIsWaiting(false);
      }
    }, transitionDuration + waitDuration);

    return () => clearInterval(interval);
  }, [packagesCurrentIndex, isWaiting, numPackageImages, waitDuration]);

  const scrollLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + numImages) % numImages);
    setIsWaiting(true);
    setTimeout(() => {
      setIsWaiting(false);
    }, waitDuration);
  };

  const scrollRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % numImages);
    setIsWaiting(true);
    setTimeout(() => {
      setIsWaiting(false);
    }, waitDuration);
  };

  const packagesScrollLeft = () => {
    setPackagesCurrentIndex((prevIndex) => (prevIndex - 1 + numPackageImages) % numPackageImages);
    setIsWaiting(true);
    setTimeout(() => {
      setIsWaiting(false);
    }, waitDuration);
  };

  const packagesScrollRight = () => {
    setPackagesCurrentIndex((prevIndex) => (prevIndex + 1) % numPackageImages);
    setIsWaiting(true);
    setTimeout(() => {
      setIsWaiting(false);
    }, waitDuration);
  };

  return (
    <div className="home-container">
      <div className="section" id="image-carousel">
        <div className="image-container" ref={imageContainerRef}>
          <button className="scroll-button prev" onClick={scrollLeft}>&#9664;</button>
          <div className="images" style={{
            transform: `translateX(-${currentIndex * imageWidth}px)`,
            transition: `transform ${transitionDuration}ms ease-in-out`
          }}>
            {images.map((image, index) => (
              <img key={index} src={image} alt={`logo ${index + 1}`} />
            ))}
          </div>
          <button className="scroll-button next" onClick={scrollRight}>&#9654;</button>
        </div>
      </div>

      <div className="section" id="beautiful-places">
        <h2 className="heading">Beautiful Places In Thailand</h2>
        <div className="places">
          <div className="image-with-name">
          <Link to="/bangkok" className="nav-link">
    <img src={logo6} alt="Place 6" />
    <div className="place-name">Bangkok</div>
  </Link>   
          </div>
          <div className="image-with-name">
            <img src={logo12} alt="Place 12" />
            <div className="place-name">Phuket</div>
          </div>
          <div className="image-with-name">
            <img src={logo7} alt="Place 7" />
            <div className="place-name">Chiang Mai</div>
          </div>
          <div className="image-with-name">
            <img src={logo10} alt="Place 10" />
            <div className="place-name">Krabi</div>
          </div>
          <div className="image-with-name">
            <img src={logo11} alt="Place 11" />
            <div className="place-name">Pattaya</div>
          </div>
          <div className="image-with-name">
            <img src={logo8} alt="Place 8" />
            <div className="place-name">Koh Samui</div>
          </div>
        </div>
      </div>
      <div className="section" id="about-us">
        <div className="about-frame">
          <h2 className="aboutheading">About Us</h2>
          <p className="about-text">
            YTRI Travel is a full-service travel agency that specializes in creating custom travel experiences for its clients. Whether you’re looking for a romantic getaway, a family vacation, or an adventurous trip, YTRI Travel can help make it happen. The travel site sets customers up with experienced agents that work to understand your travel goals and budget, and then create a personalized itinerary that includes everything from flights and hotels to activities and dining. ...{' '}
            <Link to="/learn-more" className="learn-more-link">{t('Learn more')}</Link>
          </p>
        </div>
      </div>
      <div className="section" id="our-packages">
  <h2 className="heading">Our Packages</h2>
  <div className="package-image-container" ref={packagesImageContainerRef}>
    <button className="scroll-button prev" onClick={packagesScrollLeft}>&#9664;</button>
    <div className="imagesPackages" style={{
      display: 'flex',
      flexDirection: 'row',
      transform: `translateX(-${packagesCurrentIndex * imageWidthPackages}px)`,
      transition: `transform ${transitionDurationPackages}ms ease-in-out`
    }}>
      {imagesPackages.map((image, index) => (
        <div className="image-container-packages" key={index}>
          <img src={image} alt={`logo ${index + 1}`} />
          <div className="image-description">
            {index === 0 && (<span>
              Daytime Mahanakhon Sky Walk Admission Ticket
      <div style={{ textAlign: 'center' }}>
        <span style={{ color: 'blue', fontSize: '24px', display: 'inline-block' }}>
          &#9733;  &#9733;  &#9733;  &#9733;  &#9733; {/* 5-star rating */}
        </span>
      </div>
      <div>
        <span style={{ color: 'black' }}>1,000 THB Per Person</span>
      </div>
    </span>
  )}
            {index === 1 && (<span>
              Chao Phraya Dinner Cruise
      <div style={{ textAlign: 'center' }}>
        <span style={{ color: 'blue', fontSize: '24px', display: 'inline-block' }}>
          &#9733;  &#9733;  &#9733;  &#9733;  &#9733; {/* 5-star rating */}
        </span>
      </div>
      <div>
        <span style={{ color: 'black' }}>1,200.00 THB Per Person</span>
      </div>
    </span>
  )}
  {index === 2 && (<span>
    Phuket city tour(Private Only)
      <div style={{ textAlign: 'center' }}>
        <span style={{ color: 'blue', fontSize: '24px', display: 'inline-block' }}>
          &#9733;  &#9733;  &#9733;  &#9733;  &#9733; {/* 5-star rating */}
        </span>
      </div>
      <div>
        <span style={{ color: 'black' }}>1,200.00 THB Per Person</span>
      </div>
    </span>
  )}
  {index === 3 && (<span>
    Chiang Rai One day tour from Chiang Mai
      <div style={{ textAlign: 'center' }}>
        <span style={{ color: 'blue', fontSize: '24px', display: 'inline-block' }}>
          &#9733;  &#9733;  &#9733;  &#9733;  &#9733; {/* 5-star rating */}
        </span>
      </div>
      <div>
        <span style={{ color: 'black' }}>1,700.00 THB Per Person</span>
      </div>
    </span>
  )}
  {index === 4 && (<span>
    Doi Inthanon national Park tour
      <div style={{ textAlign: 'center' }}>
        <span style={{ color: 'blue', fontSize: '24px', display: 'inline-block' }}>
          &#9733;  &#9733;  &#9733;  &#9733;  &#9733; {/* 5-star rating */}
        </span>
      </div>
      <div>
        <span style={{ color: 'black' }}>1,700.00 THB Per Person</span>
      </div>
    </span>
  )}
  {index === 5 && (<span>
    James Bond Island by Long Tail Boat
      <div style={{ textAlign: 'center' }}>
        <span style={{ color: 'blue', fontSize: '24px', display: 'inline-block' }}>
          &#9733;  &#9733;  &#9733;  &#9733;  &#9733; {/* 5-star rating */}
        </span>
      </div>
      <div>
        <span style={{ color: 'black' }}>1,500.00 THB Per Person</span>
      </div>
    </span>
  )}
  {index === 6 && (<span>
    Phi Phi island by Big Boat
      <div style={{ textAlign: 'center' }}>
        <span style={{ color: 'blue', fontSize: '24px', display: 'inline-block' }}>
          &#9733;  &#9733;  &#9733;  &#9733;  &#9733; {/* 5-star rating */}
        </span>
      </div>
      <div>
        <span style={{ color: 'black' }}>1430.00 THB Per Person</span>
      </div>
    </span>
  )}  
  
          </div>
        </div>
      ))}
    </div>
    <button className="scroll-button next" onClick={packagesScrollRight}>&#9654;</button>
  </div>
</div>

    </div>
  );
};

export default Home;
