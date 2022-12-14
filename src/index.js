import React from 'react';
import { Container } from './components/base';
import ReactDOM from 'react-dom/client';
import styled from 'styled-components';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import Home from './components/layout/home';
import Downloads from './components/layout/downloads';
import Contact from './components/layout/contact';
import NoPage from './components/layout/NoPage';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import Projects from './components/layout/projects';
import Theme from './styles/index';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Theme>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Theme>
  </React.StrictMode>
);

