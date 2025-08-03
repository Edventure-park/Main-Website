"use client";
import Link from 'next/link';
import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';

// import { AnimatedTooltip } from '../ui/animated-tooltip';
import { AnimatedTooltip } from './ui/animated-tooltip';

// Team members data for EdVenture Park
const teamMembers = [
  {
    id: 1,
    name: "Rajesh Kumar",
    designation: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 3,
    name: "Arjun Reddy",
    designation: "Technology Lead",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 4,
    name: "Sneha Patel",
    designation: "Community Manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Vikram Singh",
    designation: "Operations Head",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 6,
    name: "Kavya Nair",
    designation: "Design Lead",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
];

export default function Footer() {
  return (
    <div className="relative z-10 border-t border-gray-300 bg-white px-8 py-12 font-[Poppins] text-base text-black sm:px-12 md:px-20 lg:px-32 xl:px-40">

      {/* Top Section: Address + Links + Newsletter */}
      <div className="mb-12 flex w-full flex-col items-start justify-between gap-10 md:flex-row">

        {/* Address */}
        <div className="w-full space-y-2 leading-relaxed md:w-1/3">
          <h2 className="text-2xl font-semibold text-black">EdVenture Park</h2>
          <p className="text-base text-gray-600">MS Corporate Office</p>
          <p className="text-base text-gray-600">NMDC, Masab Tank</p>
          <p className="text-base text-gray-600">Hyderabad, Telangana</p>
          <p className="mt-2 text-base text-gray-600">
            <strong className="text-black">Phone:</strong> +91 63098 06633
          </p>
          <p className="text-base text-gray-600">
            <strong className="text-black">Email:</strong>{' '}
            <a href="mailto:ceo@edventurepark.com" className="hover:underline">
              ceo@edventurepark.com
            </a>
          </p>
        </div>
        {/* Company Links */}
        <div className="w-full md:w-1/3">
          <h3 className="mb-3 text-xl font-semibold">Company</h3>
          <ul className="space-y-2 text-lg text-gray-700">
            <li><Link href="/" className="transition-colors hover:text-[#169D53]">Home</Link></li>
            <li><Link href="/about" className="transition-colors hover:text-[#169D53]">About Us</Link></li>
            <li><Link href="/programs/preincubation" className="transition-colors hover:text-[#169D53]">Programs</Link></li>
            <li><Link href="/portfolio" className="transition-colors hover:text-[#169D53]">Portfolio</Link></li>
            <li><Link href="/events" className="transition-colors hover:text-[#169D53]">Events</Link></li>
          </ul>
        </div>
        {/* Newsletter */}
        <div className="w-full md:w-1/3">
          <div className="mb-3">
            <p className="text-xl font-semibold">Join Our Newsletter</p>
            <p className="text-base text-gray-700">
              Get monthly updates from EdVenture Park in your inbox.
            </p>
          </div>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full rounded-l-full border border-gray-300 px-4 py-3 text-base text-black focus:outline-none focus:ring-2 focus:ring-[#169D53]"
            />
            <button className="rounded-r-full bg-[#169D53] px-6 py-3 text-base text-white transition hover:bg-green-600">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      {/* Divider */}
      <div className="my-6 border-t border-gray-200" />
      {/* Bottom Section */}
      <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
        {/* Left Side: Copyright + Team Tooltips */}
        <div className="order-2 flex flex-col items-center space-y-4 text-center md:order-1 md:items-start md:text-left">
          <p className="text-lg">© EdVenture Park. All Rights Reserved</p>
          {/* Team Members with Animated Tooltips */}
          <div className="flex flex-col items-center space-y-2 md:items-start">
            <p className="text-base text-gray-600">Designed by our amazing team:</p>
            <div className="flex items-center justify-center md:justify-start">
              <AnimatedTooltip items={teamMembers} />
            </div>
          </div>
        </div>
        {/* Right Side: Social Links */}
        <div className="order-1 flex space-x-5 text-gray-700 md:order-3">
          <Link href="https://www.instagram.com/edventurepark/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-3xl transition hover:text-pink-500" />
          </Link>
          <Link href="https://m.facebook.com/EdVenP" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="text-3xl transition hover:text-blue-600" />
          </Link>
          <Link href="https://twitter.com/EdventurePark" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-3xl transition hover:text-sky-400" />
          </Link>
          <Link href="https://m.youtube.com/channel/UCJE19g3yFV5aKsf8n4pTz3Q/featured" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="text-3xl transition hover:text-red-600" />
          </Link>
        </div>
      </div>
    </div>
  );
}