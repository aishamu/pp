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
          <h3 className='section-title '>
            <span> عملاؤنا </span>
          </h3>
          <h6 className='section-subtitle mr-auto ml-auto'>
     
          </h6>
        </div>
        <div className='section-content ' >
 
 
           <div className='row tt' dir='rtl'>

      
              <div  className='text-center'>
                <img src={Image1}  alt='Blog 3'  height='140px' width='140px'/>
 
              </div>
             
     
            <div  className='text-center'>
                <img src={Image2} height='140px' width='140px'/>
 
              </div>
          
  
 
    
            <div  className='text-center'>
                <img src={Image7}  height='140px' width='140px'/>
 
              </div>
          
       
            <div  className='text-center'>
                <img src={Image3}  height='140px' width='140px'/>
 
              </div>
          
     
            <div  className='text-center'>
                <img src={Image4}  height='140px' width='140px'/>
   
              </div>
            
 
         
            <div  className='text-center'>
                <img src={Image6}  height='140px' width='140px'/>
    
              </div>
      
              </div>
            
 
          <div className='row tt ' dir='rtl'>
 

        
            <div  className='text-center'>
                <img src={Image5}   height='140px' width='140px'/>
 
              </div>
 

 
          </div>
          
          
        </div>
      </div>
    </Section>
  );
};

export default Blog;
