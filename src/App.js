import React from 'react';
import './assets/css/styles.scss';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

//component
import Header from './components/header';
import Homepage from './components/pages/homePage';
import Contacts from './components/pages/contacts';

function App() {
  return (

    <Router>
      <div className="App">
        <Header />
          <Route exact path='/' component={Homepage} />
          <Route exact path='/contact' component={Contacts} />
      </div>
    </Router>

  );
}

export default App;
