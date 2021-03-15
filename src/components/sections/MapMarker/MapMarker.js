import React from 'react';
import Section from '../../../HOC/Section';

const mapMarker = () => {
  return (
    <Section id='map'>
      <div>
          <iframe
          title='mapMarker'
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Taj%20Sultan%20Building%20Prince%20Sultan%20Branch%20Rd,%20An%20Nahdah,%20Jeddah%2023523+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"       width='100%'
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
 