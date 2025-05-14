import React from "react";

import AboutUS from "@/components/about/Intro";
import Navbar from "@/components/Navbar";
import Ceo from "@/components/about/Ceo";
import Culture from "@/components/about/Culture";
import Bod from "@/components/about/Bod";
import Team1 from "@/components/about/Team1";
import Team2 from "@/components/about/Team2";
import Cl from "@/components/about/Cl";
import Footer from "@/components/Footer";

function AboutPage() {
  return (
    <div>
      <Navbar currentPage="about" />
      <AboutUS />
      <Ceo />
      <Culture />
      <Bod />
      <Team1 />
      <Team2 />
      <Cl />
      <Footer />
    </div>

  );
}

export default AboutPage;
