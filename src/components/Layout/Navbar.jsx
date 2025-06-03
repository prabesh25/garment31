// import React from 'react'

// const Navbar = () => {
//   return (
//     <>
//     <nav className="bg-blue-300">
//       <div>
//         <img src="" alt="" />
//         <div id='logo'></div>
//         <ul>
//           <li>Ladies</li>
//           <li>Men</li>
//           <li>Kids</li>

//           <li>Home</li>
//         </ul>
//       </div>
//       <div>
//         {/* <div></div> */}
//         <button id='search'></button>
//         <div id='signin icon'></div>
//         <div id='fav-icon'></div>
//         <div>SHop icon</div>
//       </div>
//     </nav>
//     </>
//   )
// }

// export default Navbarimport React from 'react';

// const Navbar = () => {
//   return (
//     <nav className="bg-blue-300 p-4 fixed w-full top-0 shadow-md z-50">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Left: Logo */}
//         <div className="flex items-center gap-2">
//           <img src="/logo.png" alt="Logo" className="h-10 w-10 object-cover" />
//           <span className="text-xl font-bold">GarmentCo</span>
//         </div>

//         {/* Center: Links */}
//         <ul className="hidden md:flex gap-6 text-lg font-medium">
//           <li className="hover:text-white cursor-pointer">Ladies</li>
//           <li className="hover:text-white cursor-pointer">Men</li>
//           <li className="hover:text-white cursor-pointer">Kids</li>
//           <li className="hover:text-white cursor-pointer">Home</li>
//         </ul>

//         {/* Right: Icons */}
//         <div className="flex items-center gap-4">
//           <button id="search" className="bg-white p-2 rounded">🔍</button>
//           <div className="cursor-pointer">👤</div>
//           <div className="cursor-pointer">❤️</div>
//           <div className="cursor-pointer">🛒</div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full">
      {/* Top announcement bar */}
      <div className="w-full bg-gray-50 py-2 text-center text-xs font-bold border-b border-gray-200">
        TOP SELLERS STARTING AT 1399
      </div>

      {/* Main navbar */}
      <nav className="w-full flex items-center justify-between px-5 md:px-12 py-4 border-b border-gray-200">
        {/* Logo */}
        <div className="text-2xl font-bold">
          #<span className="text-rose-500">M</span>
        </div>

        {/* Navigation links - hidden on mobile */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#" className="text-sm font-bold hover:text-rose-500 transition-colors">
            LADIES
          </a>
          <a href="#" className="text-sm font-bold hover:text-rose-500 transition-colors">
            MEN
          </a>
          <a href="#" className="text-sm font-bold hover:text-rose-500 transition-colors">
            KIDS
          </a>
          <a href="#" className="text-sm font-bold hover:text-rose-500 transition-colors">
            HOME
          </a>
        </div>

        {/* Shop now button */}
        <a
          href="#"
          className="bg-black text-white text-xs font-bold px-4 py-2 rounded hover:bg-rose-500 transition-colors"
        >
          SHOP NOW +
        </a>

        {/* Mobile menu button - would need state to toggle */}
        <button className="md:hidden text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;