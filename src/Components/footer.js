import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { SlSocialDribbble } from 'react-icons/sl';
import {
  TiSocialTwitter,
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialPinterest,
} from 'react-icons/ti';
import './footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <div className='footer-containera'>
      <div className='px-8a'>
        <img src={logo} alt='logo' className='logoa' />
      </div>
      <div className='flex flex-col gap-3 px-8a'>
        <div className='flex flex-row gap-8 font-semibold p-4a'>
          <Link to='/aboutus' className='nav-linka'>
            About
          </Link>
        </div>
        <div className='flex flex-row gap-3 p-4 social-iconsa'>
          <SlSocialDribbble />
          <TiSocialTwitter />
          <TiSocialFacebook />
          <TiSocialInstagram />
          <TiSocialPinterest />
        </div>
        <div className='p-4 copyrighta'>
          <p>
            Designed By ©Danith Randula.
            <br />
            All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
