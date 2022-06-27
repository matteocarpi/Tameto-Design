import React from 'react';

import TitleSlide from '../slices/titleSlide';
import Portfolio from '../slices/portfolio';
import Skills from '../slices/skills';
import Contacts from '../slices/contacts';

function Homepage() {
  return (
    <div className="container" >
      <TitleSlide />
      <Skills id="skills" />
      <Portfolio id="portfolio" />
      <Contacts id="contacts" />
    </div>
  )
}

export default Homepage;
