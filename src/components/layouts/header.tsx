"use client";

import React, { useEffect, useState } from "react";
import { NavLink } from "../utils/navLink";
import Link from "next/link";
import { Menu, X } from "lucide-react";

function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full top-0 left-0 z-50 fixed transition-all duration-300 ${
        isSticky ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-screen-xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="font-bold text-xl text-primary-900">
            AutoExpert
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NavLink.map((nav, index) => (
              <Link
                key={index}
                href={nav.path}
                className="text-sm font-medium text-neutral-700 hover:text-primary-600 transition-colors"
              >
                {nav.name}
              </Link>
            ))}
            <Link
              href="/get-started"
              className="btn btn-primary"
            >
              Commencer
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden p-2 text-neutral-700 hover:text-primary-600 transition-colors"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-4">
            {NavLink.map((nav, index) => (
              <Link
                key={index}
                href={nav.path}
                className="block text-neutral-700 hover:text-primary-600 transition-colors py-2"
                onClick={() => setIsMobileOpen(false)}
              >
                {nav.name}
              </Link>
            ))}
            <Link
              href="/get-started"
              className="btn btn-primary w-full justify-center"
              onClick={() => setIsMobileOpen(false)}
            >
              Commencer
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;