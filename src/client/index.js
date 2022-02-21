import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import ContactUs from './pages/ContactUs';
import FAQ from './pages/FAQ';
import Home from './pages/Home';

ReactDOM.render(
<BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} >
            <Route path="" element={<Home />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="faq" element={<FAQ />} />
        </Route>
        
    </Routes>
</BrowserRouter>,
document.getElementById('root')
);
