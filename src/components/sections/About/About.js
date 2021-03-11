import React from 'react';

import Section from '../../../HOC/Section';
import aboutImage from '../../../assets/img/about.jpg';

const about = () => {
  return (
    <Section id='about'>
      <div className='container pt-2 pb-5'>
        <div className='section-header pt-5 pb-5 text-center'>
          <h3 className='section-title'>
            <span>عن </span>استشارة
          </h3>
    
        </div>
        <div className='section-content'>
          <div className='row'>
            <div className='col-md-12 col-lg-6 mb-3'>
              <div className='aboutImage'>
                <img src={aboutImage} alt='about company' />
              </div>
            </div>
            <div className='col-md-12 col-lg-6'>
              <h3 className='about-title text-right'>عن استشارة</h3>
              <div className='about-description'>
              <p className='text-right'>
 
                تتخصص استشارة في تقديم الحلول الاستشارية المهنية وتشمل خدمات الاستشارات الهندسية والصناعية والادارية بالتعاون مع قيادات ومستشارين من أصحاب الخبرات العلمية والعملية في مختلف المجالات.



نطمح في استشارة بأن نكون جهة موثوقة ذات رأي سديد ومرجع مهم وناصح أمين للراغبين في تحصيل استشارة مبنية على علم ودرايةوتهتم بأدق التفاصيل.          
نحن نؤمن في استشارة بأن الدور الأكاديمي المتخصص والمدعوم بالخبرات العملية يعزز فعالية الاعمال ويساهم في تقليص التكاليف وفتحآفاق تطور الاعمال واختصار المسافات وتذليل العقبات.      </p>
        
               </div>

              
            </div>
            
          </div>
          <br></br>
          <div className='row'>
    
            <div className='col-md-12 col-lg-6'>
              <h3 className='about-title text-right' >رؤيتنا</h3>
              <div className='about-description'>
                <p className='text-right'>
                

                ان نكون أفضل جهة استشارية في المملكة في تقديم الاستشارات والحلول المهنية التي تتعلق بالمجالات الهندسية والصناعية والادارية بكل مصداقية واحترافية.

</p>
      
               </div>

              
            </div>
            <div className='col-md-12 col-lg-6 mb-3'>
              <div className='aboutImage'>
                <img src={aboutImage} alt='about company' />
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 col-lg-6 mb-3'>
              <div className='aboutImage'>
                <img src={aboutImage} alt='about company' />
              </div>
            </div>
            <div className='col-md-12 col-lg-6'>
              <h3 className='about-title text-right'>رسالتنا</h3>
              <div className='about-description'>
              <p className='text-right'>
          
              توفير اكبر شبكة استشارية في ظل ادارة وبيئة محترفة تتيح لعملائنا اقصى استفادة يوفرها العلم في المجالات الهندسية والصناعية والادارية وتساهم في اطلاق امكانياتهم وتطويرها.            </p>
        
               </div>

              
            </div>
            
          </div>
        </div>
      </div>
    </Section>
  );
};

export default about;



