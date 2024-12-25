import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className='bg-gray-100 py-3'>
      {/* Main Footer */}
      <div className='flex flex-col gap-6 px-4 lg:px-10 text-gray-700'>
        
        {/* Logo and About Section */}
        <div className='text-center'>
          <img className='w-32 mx-auto' src={assets.logo} alt="CureSync Logo" />
          <p className='text-x leading-5'>
            CureSync is your trusted partner in simplifying healthcare management. 
            We bridge the gap between patients and providers with innovative and efficient technology, empowering users to take control of their healthcare journey.
          </p>
        </div>

        {/* Navigation Links */}
        <div className='text-center'>
          <p className='text-base font-semibold mb-3'>Quick Links</p>
          <ul className='flex flex-col gap-1'>
            <li><a href='#' className='hover:text-black transition'>Home</a></li>
            <li><a href='#' className='hover:text-black transition'>About Us</a></li>
            <li><a href='#' className='hover:text-black transition'>Services</a></li>
            <li><a href='#' className='hover:text-black transition'>Contact</a></li>
            <li><a href='#' className='hover:text-black transition'>Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact and Social Media */}
        <div className='text-center'>
          <p className='text-base font-semibold mb-3'>Get in Touch</p>
          <ul className='flex flex-col gap-1 text-sm'>
            <li>Phone: +01-234-555</li>
            <li>Email: <a href='mailto:curesync@gmail.com' className='text-blue-600 hover:underline'>curesync@gmail.com</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className='mt-6'>
        <hr className='border-gray-300' />
        <p className='py-3 text-xs text-center text-gray-600'>
          Copyright © 2024 CureSync.com - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
