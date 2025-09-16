"use client";
import React from "react";
import { motion } from "framer-motion";
import type { Variants, TargetAndTransition } from "framer-motion";

import programsData, {
  ProgramSlug,
  defaultProgramData,
} from "@/data/programData";

import Navbar from "../Navbar";
import Footer from "../Footer";

import ProgramInfo from "./ProgramInfo";
import DarkImageGrid from "./DarkPostGrid";
import GreenBanner from "./GreenBanner";
import GreenRocket from "./GreenRocket";
import TrackSection from "./TrackSection";
import Fundamentals from "./Fundamentals";
import BuilderSunday from "./BuilderSunday";
import FoundersFriday from "./FounderFriday";
import ImageGrid from "./Dark-Image-Grid";

function CompleteProgramPage({ slug }: { slug: string }) {
  const programSlug = slug as ProgramSlug;

  // Get program data or use default if not found
  const programData = programsData[programSlug] || defaultProgramData;

  // Animation variants
  const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number): TargetAndTransition => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.2,
      duration: 0.6,
      ease: [0.42, 0, 0.58, 1], // proper easing format
    },
  }),
};

  // Add a safety check to prevent rendering with undefined data
  if (!programData) {
    return (
      <div className="container mx-auto p-8 text-center">
        Program not found or loading...
      </div>
    );
  }

  return (
    <>
      <Navbar currentPage="program" />
      <motion.div
        className="container mx-auto px-4 py-12"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 },
          },
        }}
      >
        <motion.h1
          className="relative mb-12 text-center text-3xl font-bold md:text-4xl lg:text-5xl"
          variants={fadeIn}
          custom={0}
        >
          <span className="relative inline-block">
            Our Programs
            <span className="absolute bottom-0 left-1/2 mt-2 h-1 w-24 -translate-x-1/2 bg-green-600"></span>
          </span>
        </motion.h1>
        <motion.div variants={fadeIn} custom={1}>
          <ProgramInfo programData={programData} />
        </motion.div>
        <motion.div
          className="container mx-auto my-12"
          variants={fadeIn}
          custom={2}
        >
          <FoundersFriday
            title={programData.gallery.title}
            images={programData.gallery.images}
            renderState={slug === "foundersfriday" ? true : false}
          />
          <DarkImageGrid
            title={programData.gallery.title}
            images={programData.gallery.images}
            renderState={
              slug === "edtalk"? true : false}
          />
          <GreenRocket
            title={programData.gallery.title}
            images={programData.gallery.images}
            renderState={slug === "preincubation" ? true : false}
          />
          <Fundamentals
            title={programData.gallery.title}
            images={programData.gallery.images}
            renderState={slug === "incubation" ? true : false}
          />
          <BuilderSunday
            title={programData.gallery.title}
            renderState={slug === "builderssunday" ? true : false}
          />
          <TrackSection
            title={programData.gallery.title}
            images={programData.gallery.images}
            renderState={
              slug === "preincubation" || slug === "incubation" ? true : false
            }
          />
          <ImageGrid
            renderState={slug === "foundersfest" ? true : false}
            images={programData.gallery.images}
            />
        </motion.div>
        <motion.div variants={fadeIn} custom={3}>
          <GreenBanner bannerInfo={programData.banner}
           />
        </motion.div>
      </motion.div>
      <Footer />
    </>
  );
}

export default CompleteProgramPage;
