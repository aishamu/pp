import React from 'react';

import Section from '../../../HOC/Section';

 

import Image1 from '../../../assets/img/jed.png';
import Image2 from '../../../assets/img/janed.png';
import Image3 from '../../../assets/img/star.png';
import Image4 from '../../../assets/img/Kurkan.jpg';
import Image5 from '../../../assets/img/laffah.png';
import Image6 from '../../../assets/img/sama.png';
import Image7 from '../../../assets/img/ma.png';
 import Image10 from '../../../assets/img/Adaa.png';
 import Image11 from '../../../assets/img/AMANAHJEDDAH.png';
 import Image13 from '../../../assets/img/RI3y.jpg';

 import Image12 from '../../../assets/img/maz.jpeg';
 import Image14 from '../../../assets/img/bnaa.png';




const Blog = () => {
  return (
    <Section id='blog'>
      <div className='container '>
        <div className='section-header pt-5 pb-5 text-center'>
          <h3 className='section-title '>
            <span> عملاؤنا </span>
          </h3>
          <h6 className='section-subtitle mr-auto ml-auto'>
     
          </h6>
        </div>
        <div className='section-content ' >
 
 
           <div className='row tt' dir='rtl'>

           <div  className='text-center'>
                <img src={Image10}   height='90px' width='100px' hspace="20"/>
   
              </div>  
               <div  className='text-center'>
                <img src={Image11}   height='110px' width='160px' hspace="20"/>
   
              </div>   
              <div  className='text-center'>
                <img src={Image13}   height='110px' width='110px' hspace="20"/>
   
              </div>
              <div  className='text-center'>
                <img src={Image1}    height='110px' width='110px' hspace="20"/>
 
              </div>
             
     
            <div  className='text-center'>
                <img src={Image2}  height='110px' width='110px' hspace="20"/>
 
              </div>
          
  
 
    
            <div  className='text-center'>
                <img src={Image7}   height='110px' width='110px' hspace="20"/>
 
              </div>
          
       
            <div  className='text-center'>
                <img src={Image3}   height='110px' width='110px' hspace="20"/>
 
              </div>
          
     
            <div  className='text-center'>
                <img src={Image4}   height='110px' width='110px' hspace="20"/>
   
              </div>
              <div  className='text-center'>
                <img src={Image14}   height='110px' width='110px' hspace="20"/>
   
              </div>
 
         
            <div  className='text-center'>
                <img src={Image6}  height='110px' width='110px'  hspace="20"/>
    
              </div>
              <div  className='text-center'>
                <img src={Image5}   height='110px' width='110px' hspace="20"/>
 
              </div>

              <div  className='text-center'>
                <img src={Image12}   height='110px' width='110px' hspace="20"/>
   
              </div>
              </div>
            
  
          
        </div>
      </div>
    </Section>
  );
};

export default Blog;
