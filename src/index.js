import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import AppContextProvider from './context/AppContext';

console.log(process.env.REACT_APP_OPEN_WEATHER_API_URL);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppContextProvider>
        <App />
    </AppContextProvider>

);
