import React from 'react';

import Section from '../../../HOC/Section';
import ff from '../../../assets/pdf_files/ff.pdf';
import ver1 from '../../../assets/img/ver1.png';

 

const Vers = () => {
  return (
    <Section id='Vers'>
         <div className='container pt-2 pb-5'>
         <div className='section-header pt-5 pb-5 text-center'>
          <h3 className='section-title'>
            <span>  </span>اصداراتنا
          </h3>
   
          <h3 >
            <br></br>
          <a href={ff} > 
           <img width="320" height="400" border="0" align="center"  alt=""src={ver1}/> 

          </a>
          </h3>
        </div>
   
        </div>
    </Section>
  );
};

export default Vers;
