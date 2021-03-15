import React from 'react';

import Section from '../../../HOC/Section';

const contact = () => {
  return (
    <Section id='contact'>
      <div className='container pt-2 pb-5'>
        <div className='section-header pt-5 pb-5 text-center'>
          <h3 className='section-title'>
            <span>اتصل </span>  بنا
          </h3>
   
        </div>
        <div className='section-content'>
          <div className='row'>
            <div className='col-md-9 col-lg-7 mr-auto ml-auto'>
 



            <div class="info-bar">
    <div class="container">
 
      <div class="row" dir='rtl'>



      <div class="col-md">
          <div class="email text-center">
          <h3  style={{float : 'center'}} > <i class='fa fa-wifi	
'></i></h3>
            
      <h5>www.esttishara.com</h5>   
                        <i  class='fa fa-envelope
'> info@esttishara.com</i> 
                        <br></br>
                        <a href='https://twitter.com/esttishara?s=21
'  >
                        Esttishara  <i   className='fab fa-twitter'
                          /> 
</a>
<br></br>
<a href='https://www.linkedin.com/company/istishara-consulting' >


Esttishara      <i   className='fab fa-linkedin'
                          /> 
</a>


 
          </div>
        </div>

        <div class="col-md">
          <div class="phone text-center">
          <br></br>
          <h3  style={{float : 'center'}} > <i class='fa fa-phone'></i></h3>
             <h5>012-612-5731
            <br></br>
              055-673-7325
              <br></br>
              ص.ب: 23523-4256
            </h5>
          </div>
        </div>


        <div class="col-md">
          <div class="location text-center">
            <h3  style={{float : 'center'}} > <i class='fas fa-map-marker-alt'></i></h3>
            
            <h5>طريق الأمير سلطان، حي النهضة ،<br></br> مبنى تاج السلطان للأعمال - الدور الثاني 
<br></br>
              جدة،المملكة العربية السعودية
            </h5>
          
 
</div>
        </div>
 

 



 
      </div>
    </div>
  </div>
 
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default contact;
