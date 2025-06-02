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
        isSticky ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="font-bold text-lg">LOGO</div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileOpen(!isMobileOpen)}>
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NavLink.map((nav, index) => (
            <Link
              key={index}
              href={nav.path}
              className="text-sm hover:underline"
            >
              {nav.name}
            </Link>
          ))}
          <Link
            href="/get-started"
            className="border border-gray-300 rounded-md px-4 py-2 text-sm hover:bg-gray-100"
          >
            GET STARTED
          </Link>
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden bg-blue-400 ${
          isMobileOpen
            ? "max-h-[500px] opacity-100 py-4"
            : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="flex flex-col items-start px-6 gap-4">
          {NavLink.map((nav, index) => (
            <Link
              key={index}
              href={nav.path}
              className="text-sm w-full hover:bg-gray-100 py-2"
              onClick={() => setIsMobileOpen(false)}
            >
              {nav.name}
            </Link>
          ))}
          <Link
            href="/get-started"
            className="border border-gray-300 rounded-md px-4 py-2 text-sm w-full text-center hover:bg-gray-100"
            onClick={() => setIsMobileOpen(false)}
          >
            GET STARTED
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;

// "use client";

// import React, { useEffect, useState } from "react";
// import { NavLink } from "../utils/navLink";
// import Link from "next/link";
// import { Menu, X } from "lucide-react";

// function Header() {
//   const [isSticky, setIsSticky] = useState(false);
//   const [isMobileOpen, setIsMobileOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsSticky(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`w-full top-0 left-0 z-50 transition-transform duration-300 ${
//         isSticky ? " fixed bg-white shadow-md" : "absolute bg-transparent"
//       }`}
//     >
//       <nav className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
//         {/* Logo */}
//         <div className="font-bold text-lg">LOGO</div>

//         {/* Mobile menu button */}
//         <div className="md:hidden">
//           <button onClick={() => setIsMobileOpen(!isMobileOpen)}>
//             {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Desktop Nav */}
//         <div className="hidden md:flex items-center gap-8">
//           {NavLink.map((nav, index) => (
//             <Link
//               key={index}
//               href={nav.path}
//               className="text-sm hover:underline"
//             >
//               {nav.name}
//             </Link>
//           ))}
//           <Link
//             href="/get-started"
//             className="border border-gray-300 rounded-md px-4 py-2 text-sm hover:bg-gray-100"
//           >
//             GET STARTED
//           </Link>
//         </div>
//       </nav>

//       {/* Mobile menu dropdown */}
//       {isMobileOpen && (
//         <div className="md:hidden bg-blue-400 shadow-md">
//           <div className="flex flex-col items-start px-6 py-4 gap-4">
//             {NavLink.map((nav, index) => (
//               <Link
//                 key={index}
//                 href={nav.path}
//                 className="text-sm w-full hover:bg-gray-100 py-2"
//                 onClick={() => setIsMobileOpen(false)}
//               >
//                 {nav.name}
//               </Link>
//             ))}
//             <Link
//               href="/get-started"
//               className="border border-gray-300 rounded-md px-4 py-2 text-sm w-full text-center hover:bg-gray-100"
//               onClick={() => setIsMobileOpen(false)}
//             >
//               GET STARTED
//             </Link>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

// export default Header;
