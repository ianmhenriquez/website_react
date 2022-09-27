import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, Router } from 'react-router-dom';

import Home from './components/layout/home';
import Downloads from './components/layout/downloads';
import Contact from './components/layout/contact';
import NoPage from './components/layout/NoPage';
import Header from './components/layout/header';
import Footer from './components/layout/footer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="*" element={<NoPage />} />
        <Route path="/contact"  element={<Contact />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
