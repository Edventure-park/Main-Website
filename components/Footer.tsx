import Image from 'next/image';
import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube , FaUser } from 'react-icons/fa'; // Import required icons
// import image from '../assets/images/footer/newevplogo.png'

export default function Home() {
  return (
    <div className='p-[12px] md:p-[24px] lg:p-[45px]' style={{ backgroundColor: 'black', color: 'white' }}>
      {/* Header Section */}
      <div className='flex flex-col md:flex-row md:justify-between lg:flex-row lg:justify-between'>
        <div className='p-[12px] text-[white] md:p-0 lg:p-0' style={{ fontFamily: 'Poppins' }}>
          <p>Have any questions?</p>
          <p>Let's connect!</p>
        </div>
        <div className='flex flex-col items-center font-[Poppins] md:flex-row lg:flex-row'>
          <div className='flex items-center rounded-full border border-gray-600 bg-black p-2'>
            <FaUser className="size-4" />
            <input 
              type="text" 
              className="w-full rounded-full bg-black px-2 text-white focus:outline-none"
              placeholder='Enter your email' 
            />
          </div>
          <button className='ml-2 rounded-full bg-[#169D53] px-4 py-2 text-white'>Connect</button>
        </div>
      </div>
      {/* Divider */}
      <div className='py-6'>
        <hr className='border-gray-400 opacity-50' />
      </div>
      {/* Main Content */}
      <div className='grid grid-cols-1 gap-4 md:grid-cols-12 lg:grid-cols-12'>
        <div className='flex justify-center text-center md:col-span-4 md:text-left lg:col-span-4' style={{ fontFamily: 'Poppins' }}>
          <div>
            <Image width={500} height={500} src={'/images.png'} alt="EVP Logo" className="h-auto w-80 object-contain" />
            <p className="mt-4">Incubating India - for the world!</p>
          </div>
        </div>
        <div className='flex justify-center space-x-8 font-[Poppins] md:col-span-8 lg:col-span-8'>
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
      {/* Footer Section */}
      <div className='grid grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-2'>
        <div className='order-last text-center md:order-first md:text-left lg:order-first lg:text-left' style={{ fontFamily: 'Poppins' }}>
          © Copyright Edventure Park. All Rights Reserved
        </div>
        <div className='flex justify-center space-x-4 md:justify-end lg:justify-end'>
          <a href="https://www.instagram.com/edventurepark/">
            <FaInstagram className="size-6" />
          </a>
          <a href="https://m.facebook.com/EdVenP">
            <FaFacebookF className="size-6" />
          </a>
          <a href="https://twitter.com/EdventurePark">
            <FaTwitter className="size-6" />
          </a>
          <a href="https://m.youtube.com/channel/UCJE19g3yFV5aKsf8n4pTz3Q/featured">
            <FaYoutube className="size-6" />
          </a>
        </div>
      </div>
    </div>
  );
}
