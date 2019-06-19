import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import STORE from './dummy-store';
import './index.css';
import App from './App';

ReactDOM.render(
    <BrowserRouter>
        <App store={STORE}/>
    </BrowserRouter>, 
    document.getElementById('root'));
