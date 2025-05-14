// This Navbar component is configured only for light theme.
// Need to configure for the Dark theme to proper visuals
"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const logo = "/assets/newevplogo.png";

interface HamburgerProps {
  onClick: () => void;
}

// Hamburger component
const Hamburger = ({ onClick }: HamburgerProps) => (
  <button onClick={onClick} className="p-2 focus:outline-none">
    <span className="mb-1 block h-1 w-6 bg-black"></span>
    <span className="mb-1 block h-1 w-6 bg-black"></span>
    <span className="block h-1 w-6 bg-black"></span>
  </button>
);

function Navbar({ currentPage }: { currentPage: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    // Add event listener when menu is open
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="relative w-full shadow-sm">
      {/* Mobile view */}
      <div className="flex items-center justify-between p-4 md:hidden lg:hidden">
        <Link href="/">
          <Image
            width={200}
            height={200}
            className="w-[40vw] max-w-[200px]"
            src={logo}
            alt="EVP Logo"
          />
        </Link>
        <div className="flex items-center space-x-3">
          <Link
            href="https://edventurepark.incubators.app/register"
            className="align-center flex"
          >
            <button className="font-inter rounded bg-[#169D53] px-3 py-1 text-lg text-white">
              Apply Now
            </button>
          </Link>
          <div ref={hamburgerRef}>
            {isOpen ? (
              <button onClick={toggleMenu} className="p-2 focus:outline-none">
                <FaTimes className="size-6" />
              </button>
            ) : (
              <Hamburger onClick={toggleMenu} />
            )}
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div
          ref={menuRef}
          className="absolute inset-x-0 top-full z-50 mt-1 bg-white p-5 shadow-lg md:hidden"
        >
          <ul className="flex flex-col space-y-4">
            <li
              className={`text-lg transition-colors hover:text-[#169D53] ${currentPage === "home" ? "font-bold text-[#169D53]" : "text-black"}`}
            >
              <Link href="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li
              className={`text-lg transition-colors hover:text-[#169D53] ${currentPage === "aboutus" ? "font-bold text-[#169D53]" : "text-black"}`}
            >
              <Link href="/desktop1" onClick={toggleMenu}>
                About Us
              </Link>
            </li>
            <li
              className={`text-lg transition-colors hover:text-[#169D53] ${currentPage === "portfolio" ? "font-bold text-[#169D53]" : "text-black"}`}
            >
              <Link href="/desktop2" onClick={toggleMenu}>
                Portfolio
              </Link>
            </li>
            <li
              className={`text-lg transition-colors hover:text-[#169D53] ${currentPage === "programs" ? "font-bold text-[#169D53]" : "text-black"}`}
            >
              <Link href="/desktop3" onClick={toggleMenu}>
                Programs
              </Link>
            </li>
          </ul>
        </div>
      )}
      {/* Desktop view */}
      <div className="hidden w-full items-center justify-between p-4 md:flex lg:flex">
        <Link href="/">
          <Image
            width={200}
            height={200}
            className="w-48 max-w-[200px]"
            src={logo}
            alt="EVP Logo"
          />
        </Link>
        <div className="flex items-center space-x-6">
          <ul className="flex space-x-6">
            <li
              className={`text-lg transition-colors hover:text-[#169D53] ${currentPage === "home" ? "font-bold text-[#169D53]" : "text-black"}`}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className={`text-lg transition-colors hover:text-[#169D53] ${currentPage === "about" ? "font-bold text-[#169D53]" : "text-black"}`}
            >
              <Link href="/about">About Us</Link>
            </li>
            <li
              className={`text-lg transition-colors hover:text-[#169D53] ${currentPage === "portfolio" ? "font-bold text-[#169D53]" : "text-black"}`}
            >
              <Link href="/desktop2">Portfolio</Link>
            </li>
            <li
              className={`text-lg transition-colors hover:text-[#169D53] ${currentPage === "programs" ? "font-bold text-[#169D53]" : "text-black"}`}
            >
              <Link href="/desktop3">Programs</Link>
            </li>
          </ul>
          <Link
            href="https://edventurepark.incubators.app/register"
            className="align-center flex"
          >
            <button className="font-inter rounded bg-[#169D53] px-4 py-2 text-lg text-white transition-colors hover:bg-[#0e7c40]">
              Apply Now
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
