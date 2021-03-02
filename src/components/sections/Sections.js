import React, { Fragment } from 'react';

import Home from './Home/Home';
import Advisors from './Advisors/Advisors';
import Vers from './Vers/Vers';

import About from './About/About';
import Service from './Service/Service';
 import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
import MapMarker from './MapMarker/MapMarker';

const sections = () => {
  return (
    <Fragment>
      <Home />
      <About />
      <Service />
      <Advisors/>
      <Blog />
       <Vers/>
      <Contact />
      <MapMarker />
    </Fragment>
  );
};

export default sections;
