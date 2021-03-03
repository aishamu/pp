import React from 'react';

import Section from '../../../HOC/Section';

 

import Image1 from '../../../assets/img/jed.png';
import Image2 from '../../../assets/img/janed.png';
import Image3 from '../../../assets/img/star.png';
import Image4 from '../../../assets/img/Kurkan.jpg';
import Image5 from '../../../assets/img/laffah.png';
import Image6 from '../../../assets/img/sama.png';
import Image7 from '../../../assets/img/ma.png';



const Blog = () => {
  return (
    <Section id='blog'>
      <div className='container '>
        <div className='section-header pt-5 pb-5 text-center'>
          <h3 className='section-title'>
            <span> عملاؤنا </span>
          </h3>
          <h6 className='section-subtitle mr-auto ml-auto'>
     
          </h6>
        </div>
        <div className='section-content'>
 
 

          <div className='row' dir='rtl'>

          <div className='col-lg-2 mb-2'>
              <div className='card rounded-0'>
                <img src={Image1} className='card-img-top' alt='Blog 3' />
 
              </div>
            </div>
            <div className='col-lg-2 mb-2'>
              <div className='card rounded-0'>
                <img src={Image2} className='card-img-top' alt='Blog 3'/>
 
              </div>
            </div>
  
 
            <div className='col-lg-2 mb-2'>
              <div className='card rounded-0'>
                <img src={Image7} className='card-img-top' alt='Blog 2' />
 
              </div>
            </div>
            <div className='col-lg-2 mb-2'>
              <div className='card rounded-0'>
                <img src={Image3} className='card-img-top' alt='Blog 1' />
 
              </div>
            </div>
            <div className='col-lg-2 mb-2'>
              <div className='card rounded-0'>
                <img src={Image4} className='card-img-top' alt='Blog 1' />
   
              </div>
            </div>
 
            <div className='col-lg-2 mb-2'>
              <div className='card rounded-0'>
                <img src={Image6} className='card-img-top' alt='Blog 2' />
    
              </div>
            </div>
          </div>


          <div className='row ' dir='rtl'>
 

            <div className='col-lg-2 mb-2'>
              <div className='card rounded-0'>
                <img src={Image5} className='card-img-top' alt='Blog 3' />
 
              </div>
            </div>

 
          </div>
          
          
        </div>
      </div>
    </Section>
  );
};

export default Blog;
