import React from 'react';
import Section from '../../../HOC/Section';

const mapMarker = () => {
  return (
    <Section id='map'>
      <div>
          <iframe
          title='mapMarker'
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=SULTAN%20PRINCE%20RD,%20AN%20NAHDAH%20,%2023423%20JEDDAH+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"        width='100%'
          height='450'
          frameBorder='0'
          style={{ border: 0, marginBottom: '-7px' }}
          allowFullScreen
        />
        <a href="https://www.maps.ie/route-planner.htm"></a>
      </div>
    </Section>
  );
};

export default mapMarker;
 