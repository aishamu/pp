import React, { useState, useEffect } from 'react';

import Link from '../Link/Link';
import logo from '../../../assets/img/logo1.png';

const Nav = () => {
  const [navClass, setNavClass] = useState('');
  const [toggeledNav, settoggeledNav] = useState(false);

  const toggleNav = () => {
    settoggeledNav(!toggeledNav);
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      let navClass = '';
      if (window.scrollY >= 200) {
        navClass = 'scrolled';
      }
      setNavClass(navClass);
    });
  }, []);
  return (
    <nav className={`navbar navbar-expand-md bg-light ${navClass}`}>
      <div className='container'>
 <a className='navbar-brand order-md-last order-0' href='!#'>
          <span>    <img src={logo} alt="team member" class="img-responsive" height='100px'width='210px'/></span>
       
         </a>
        <div
          className={`navbar-toggler nav-icon ${(() => {
            if (toggeledNav) return 'open';
            return '';
          })()}`}
          onClick={toggleNav}
        >
          <span />
          <span />
          <span />
        </div>

        <div
          className={`collapse navbar-collapse  navbar-expand-sm  ${(() => {
            if (toggeledNav) return 'show';
            return '';
          })()}`} dir='rtl'
        >




          <ul className='navbar-nav ml-auto '>

          <li className='nav-item'>
              <Link target='home' offset={-120} classes='nav-link'>
                الصفحة الرئيسية
              </Link>
            </li>
            <li className='nav-item'>
              <Link target='about' classes='nav-link'>
              عن استشارة
              </Link>
            </li>
      
            <li className='nav-item'>
              <Link target='services' classes='nav-link'>
                حلولنا الاستشارية
              </Link>
            </li>
            <li className='nav-item'>
              <Link target='Advisors' classes='nav-link'>
              المستشارين
              </Link>
            </li>

            <li className='nav-item'>
              <Link target='blog' classes='nav-link'>
              عملاؤنا
              </Link>
            </li>
    
            <li className='nav-item'>
              <Link target='Vers' classes='nav-link'>
               اصداراتنا 
              </Link>
            </li>
 
 
          <li className='nav-item'>
              <Link target='contact' classes='nav-link'>
                اتصل بنا
              </Link>
            </li>


       
        
        
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
