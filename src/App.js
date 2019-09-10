import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

//component
import Header from './components/fundamentals/header';
import Homepage from './components/pages/home';

function App() {
  return (
    <Router>

      <Header />
      <Homepage />

    </Router>
  );
}

export default App;
