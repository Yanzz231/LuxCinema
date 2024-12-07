import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

// COMPONENT
import Navbar from "./components/Navbar";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <div className={"bg-background"}>
                <Navbar/>
                <App/>
            </div>
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
