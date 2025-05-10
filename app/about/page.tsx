import React from 'react'

import AboutUS from "@/components/aboutus/AboutUS";
import Navbar from '@/components/Navbar';

function AboutPage() {
  return (
    <div>
      <Navbar currentPage='about'/>
      <AboutUS/>
    </div>
  )
}

export default AboutPage
