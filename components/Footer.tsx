import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaUser } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className='p-[12px] md:p-[24px] lg:p-[45px]' style={{ backgroundColor: 'black', color: 'white' }}>
      {/* Header Section */}
      <div className='flex flex-col md:flex-row md:justify-between lg:justify-between'>
        <div className='p-[12px] text-white md:p-0' style={{ fontFamily: 'Poppins' }}>
          <p>Have any questions?</p>
          <p>Let's connect!</p>
        </div>
        <div className='flex flex-col items-center font-[Poppins] md:flex-row'>
          <div className='flex items-center rounded-full border border-gray-600 bg-black p-2'>
            <FaUser className="size-4" />
            <input 
              type="text" 
              className="w-full rounded-full bg-black px-2 text-white focus:outline-none"
              placeholder='Enter your email' 
            />
          </div>
          <button className='ml-2 mt-2 rounded-full bg-[#169D53] px-4 py-2 text-white md:mt-0'>Connect</button>
        </div>
      </div>
      {/* Divider */}
      <div className='py-6'>
        <hr className='border-gray-400 opacity-50' />
      </div>
      {/* Main Content */}
      <div className='grid grid-cols-1 gap-4 md:grid-cols-12'>
        <div className='flex items-center justify-center text-center md:col-span-4 md:items-start md:text-left' style={{ fontFamily: 'Poppins' }}>
          <div>
            <Image width={500} height={500} src={'/assets/newevplogo.png'} alt="EVP Logo" className="size-auto max-w-[80%] object-contain md:w-80" />
            <p className="mt-4">Incubating India - for the world!</p>
          </div>
        </div>
        <div className='flex flex-wrap justify-center space-x-4 font-[Poppins] md:col-span-8 md:space-x-8'>
          <div className='p-4'>
            <ul className='space-y-2'>
              <li>About Us</li>
              <li>Our companies</li>
              <li>Job openings</li>
              <li>Internships</li>
              <li>News</li>
            </ul>
          </div>
          <div className='p-4'>
            <ul className='space-y-2'>
              <li>Events</li>
              <li>Founders' Friday</li>
              <li>Builders' Sunday</li>
              <li>IMF</li>
            </ul>
          </div>
          <div className='p-4'>
            <ul className='space-y-2'>
              <li>Programs</li>
              <li>Pre-Incubation Program</li>
              <li>Incubation Program</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Divider */}
      <div className='py-6'>
        <hr className='border-gray-400 opacity-50' />
      </div>
      {/* Footer Bottom Section */}
      <div className='grid grid-cols-1 items-center gap-4 text-center md:grid-cols-3 md:text-left' style={{ fontFamily: 'Poppins' }}>
        {/* Copyright */}
        <div className='order-2 md:order-1'>
          © Copyright Edventure Park. All Rights Reserved
        </div>
        <div className='order-1 text-center md:order-2 md:text-center'>
          Developed and Refactored By <Link href={"https://www.linkedin.com/in/syedadnanali99/"}>Adnan</Link>
        </div>
        {/* Social Icons */}
        <div className='order-3 flex justify-center space-x-4 md:justify-end'>
          <Link href="https://www.instagram.com/edventurepark/" aria-label="Instagram">
            <FaInstagram className="size-6" />
          </Link>
          <Link href="https://m.facebook.com/EdVenP" aria-label="Facebook">
            <FaFacebookF className="size-6" />
          </Link>
          <Link href="https://twitter.com/EdventurePark" aria-label="Twitter">
            <FaTwitter className="size-6" />
          </Link>
          <Link href="https://m.youtube.com/channel/UCJE19g3yFV5aKsf8n4pTz3Q/featured" aria-label="YouTube">
            <FaYoutube className="size-6" />
          </Link>
        </div>
      </div>
    </div>
  );
}