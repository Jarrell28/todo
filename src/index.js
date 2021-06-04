import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import SettingsProvider from './context/settings';
import App from './app.js';


function Main() {
  return <SettingsProvider><App /></SettingsProvider>;
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
