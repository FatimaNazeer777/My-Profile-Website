"use client";
import { useState } from "react";
import Image from "next/image";
import me from "./NavImg.png";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/skills", label: "Skills" },
    { href: "/projects", label: "Projects" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-900 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-4">
            <div className="relative h-14 w-14 overflow-hidden rounded-full ring-2 ring-pink-500">
              <Image src={me} alt="Logo" layout="fill" objectFit="cover" />
            </div>
            <h1 className="text-3xl font-semibold text-white">
              <span className="text-pink-500">P</span>ortfolio
            </h1>
          </Link>

          {/* Desktop Navigation - Centered and Larger */}
          <nav className="hidden md:flex items-center justify-center flex-1 px-8">
            <div className="flex items-center justify-center space-x-12">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-pink-500 transition-colors duration-200 text-lg font-medium hover:scale-105 transform"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-pink-500 transition-colors duration-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-gray-300 hover:text-pink-500 transition-colors duration-200 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default NavBar;