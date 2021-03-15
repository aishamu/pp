import React from 'react';

import Section from '../../../HOC/Section';
import aboutImage1 from '../../../assets/img/b1.png';
import aboutImage2 from '../../../assets/img/b2.png';
import aboutImage3 from '../../../assets/img/b4.jpg';

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
                <img src={aboutImage1} alt='about company' />
              </div>
            </div>
            <div className='col-md-12 col-lg-6'>
              <h3 className='about-title text-right'>عن استشارة</h3>
              <div className='about-description'>
              <p className='text-right' dir="rtl">
 
                تتخصص استشارة في تقديم الحلول الاستشارية المهنية وتشمل خدمات الاستشارات الهندسية والصناعية والادارية بالتعاون مع قيادات ومستشارين من أصحاب الخبرات العلمية والعملية في مختلف المجالات.
<br></br>


نطمح في استشارة بأن نكون جهة موثوقة ذات رأي سديد ومرجع مهم وناصح أمين للراغبين في تحصيل استشارة مبنية على علم ودرايةوتهتم بأدق التفاصيل.
<br></br>          
نحن نؤمن في استشارة بأن الدور الأكاديمي المتخصص والمدعوم بالخبرات العملية يعزز فعالية الاعمال ويساهم في تقليص التكاليف وفتح آفاق تطور الاعمال واختصار المسافات وتذليل العقبات.      </p>

               </div>

              
            </div>
            
          </div>
          <br></br>
          <div className='row'>
    
            <div className='col-md-12 col-lg-6'>
              <h3 className='about-title text-right' >رؤيتنا</h3>
              <div className='about-description'>
              <p className='text-right' dir="rtl">
                

                ان نكون أفضل جهة استشارية في المملكة في تقديم الاستشارات والحلول المهنية التي تتعلق بالمجالات الهندسية والصناعية والادارية بكل مصداقية واحترافية.

</p>
 
              <h3 className='about-title text-right'>رسالتنا</h3>
              <div className='about-description'>
              <p className='text-right' dir="rtl">
          
              توفير اكبر شبكة استشارية في ظل ادارة وبيئة محترفة تتيح لعملائنا اقصى استفادة يوفرها العلم في المجالات الهندسية والصناعية والادارية وتساهم في اطلاق امكانياتهم وتطويرها.            </p>
        
               </div>

              
 
               </div>

              
            </div>
            <div className='col-md-12 col-lg-6 mb-3'>
              <div className='aboutImage'>
                <img src={aboutImage2} alt='about company' />
              </div>
            </div>
          </div>
 
        </div>
      </div>
    </Section>
  );
};

export default about;



