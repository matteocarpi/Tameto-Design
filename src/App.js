import React from 'react';

import {
  BrowserRouter as Router
} from 'react-router-dom';

//component
import Footer from './components/fundamentals/footer';
import Header from './components/fundamentals/header';
import Homepage from './components/pages/home';

function App() {
  return (
    <Router>
      <Header />
      <Homepage />
      <Footer />
    </Router>
  );
}

export default App;
