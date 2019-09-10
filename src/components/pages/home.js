import React from 'react';

import TitleSlide from '../slices/titleSlide';
import Portfolio from '../slices/portfolio';
import Skills from '../slices/skills';
import Contacts from '../slices/contacts';

function Homepage() {
  return (
    <div className="container" >
      <TitleSlide />
      <Portfolio id="portfolio" />
      <Skills id="skills" />
      <Contacts id="contacts" />
    </div>
  )
}

export default Homepage;
