import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import './i18n.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // Import your i18n configuration

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>,
  document.getElementById('root')
);
