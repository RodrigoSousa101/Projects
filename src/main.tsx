import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import Router from './Router.tsx';
import ScrollToTop from './ScrollToTop'; // <--- importa o ScrollToTop aqui
import './index.css';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <ScrollToTop /> {/* <--- adiciona aqui */}
      <Router />
    </HashRouter>
  </React.StrictMode>
);
