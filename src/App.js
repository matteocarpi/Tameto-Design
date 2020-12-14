import React from 'react';
import { Helmet } from 'react-helmet';

import {
  BrowserRouter as Router
} from 'react-router-dom';

//component
import Footer from './components/fundamentals/footer';
import Header from './components/fundamentals/header';
import Homepage from './components/pages/home';

import './assets/css/Universal.module.scss';
 
function App() {
  return (
    <Router>
      <Helmet>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-70359938-7"></script>
        <script>{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-70359938-7');
        `}
        </script>
      </Helmet>
      <Header />
      <Homepage />
      <Footer />
    </Router>
  );
}

export default App;
