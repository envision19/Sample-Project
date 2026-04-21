import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // This looks for App.jsx
import './index.css';    // This connects your Tailwind styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);