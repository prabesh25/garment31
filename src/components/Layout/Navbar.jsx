


// import React from "react";

// const Navbar = () => {
//   return (
//     <div className="w-full">
//       {/* Top announcement bar */}
//       <div className="w-full bg-gray-50 py-2 px-5 md:px-12 border-b border-gray-200 flex justify-between items-center">
//         <div className="text-xs font-bold">TOP SELLERS STARTING AT 1399</div>
//         <a href="#" className="text-xs font-bold hover:underline">SHOP NOW +</a>
//       </div>

//       {/* Main navbar */}
//       <nav className="w-full flex items-center justify-between px-5 md:px-12 py-4 border-b border-gray-200">
//         {/* Left side - Logo and menu */}
//         <div className="flex items-center gap-8">
//           <div className="text-2xl font-bold">
//             #<span className="text-rose-500">M</span>
//           </div>
          
//           <div className="hidden md:flex items-center gap-6">
//             <a href="#" className="text-sm font-bold hover:text-rose-500 transition-colors">
//               LADIES
//             </a>
//             <a href="#" className="text-sm font-bold hover:text-rose-500 transition-colors">
//               MEN
//             </a>
//             <a href="#" className="text-sm font-bold hover:text-rose-500 transition-colors">
//               KIDS
//             </a>
//             <a href="#" className="text-sm font-bold hover:text-rose-500 transition-colors">
//               HOME
//             </a>
//           </div>
//         </div>

//         {/* Right side - Icons */}
//         <div className="flex items-center gap-6">
//           <button className="text-gray-700 hover:text-rose-500">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//             </svg>
//           </button>
          
//           <button className="text-gray-700 hover:text-rose-500">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//             </svg>
//           </button>
          
//           <button className="text-gray-700 hover:text-rose-500">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//             </svg>
//           </button>
          
//           <button className="text-gray-700 hover:text-rose-500">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
//             </svg>
//           </button>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;


















import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Top announcement bar */}
      <div className="w-full bg-gray-50 py-2 px-5 md:px-12 border-b border-gray-200 flex justify-between items-center">
        <div className="text-xs font-bold">TOP SELLERS STARTING AT 1399</div>
        <a href="#" className="text-xs font-bold hover:underline">SHOP NOW +</a>
      </div>

      {/* Main navbar */}
      <nav className="w-full flex items-center justify-between px-5 md:px-12 py-4 border-b border-gray-200">
        {/* Left side - Logo and menu */}
        <div className="flex items-center gap-8">
          {/* Mobile menu button - visible only on mobile */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div className="text-2xl font-bold">
            #<span className="text-rose-500">M</span>
          </div>
          
          {/* Desktop menu - hidden on mobile */}
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
        </div>

        {/* Right side - Icons */}
        <div className="flex items-center gap-4 md:gap-6">
          <button className="text-gray-700 hover:text-rose-500 hidden md:block">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          
          <button className="text-gray-700 hover:text-rose-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
          
          <button className="text-gray-700 hover:text-rose-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
          
          <button className="text-gray-700 hover:text-rose-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu - appears when isMenuOpen is true */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-5 space-y-4 border-b border-gray-200">
          <a href="#" className="block text-sm font-bold hover:text-rose-500" onClick={() => setIsMenuOpen(false)}>
            LADIES
          </a>
          <a href="#" className="block text-sm font-bold hover:text-rose-500" onClick={() => setIsMenuOpen(false)}>
            MEN
          </a>
          <a href="#" className="block text-sm font-bold hover:text-rose-500" onClick={() => setIsMenuOpen(false)}>
            KIDS
          </a>
          <a href="#" className="block text-sm font-bold hover:text-rose-500" onClick={() => setIsMenuOpen(false)}>
            HOME
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;