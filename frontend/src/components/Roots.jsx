import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Roots.css';
import logo from './image/logo.jpeg';


const Root = () => {
  const { t } = useTranslation();
  

  return (
    <div style={{ backgroundColor: '', padding: '20px' }}>
      <header className="header">
        <div className="header-content">
          <div className="search-bar">
            <div>
              <img src={logo} alt="" height="80px" width="80px" style={{
                borderRadius: '80%',
                position: 'relative',
                top: '-30px',
                right: '-10px'
              }} />
            </div>
            
          </div>
          <nav>
            <div className="nav-links">
              <Link to="/" className="nav-link">{t('home')}</Link> 
              <Link to="/showProducts" className="nav-link">{t('showProducts')}</Link> 
              <Link to="/createAccount" className="nav-link">{t('createAccount')}</Link> 
              <Link to="/authenticate" className="nav-link">{t('authenticate')}</Link> 
              <i className="fa fa-user" style={{ fontSize: '20px', color: 'blue' }}></i>
            </div>
          </nav>
        </div>
      </header>
      <main>
      
        <Outlet />
      </main>
      <footer>
        <p className="footer-text">{t('footerText')}</p> 
      </footer>
    </div>
  );
}

export default Root;
