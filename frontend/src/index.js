import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import FollowPage from './followPage';
//import MynearPage from './myNearPage';
import InfoPage from './infoPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <InfoPage />
  </React.StrictMode>
);

reportWebVitals();
