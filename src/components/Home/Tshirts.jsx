// // // import React from "react";

// // // const Tshirts = () => {
// // //   // Sample t-shirt images (replace with your actual image paths)
// // //   const tshirts = [
// // //     "/tshirt1.jpg",
// // //     "/tshirt2.jpg",
// // //     "/tshirt3.jpg",
// // //     "/tshirt4.jpg",
// // //     "/tshirt5.jpg",
// // //     "/tshirt6.jpg",
// // //     "/tshirt7.jpg"
// // //   ];

// // //   return (
// // //     <div className="w-full mx-5  py-8">
// // //       {/* Header section */}
// // //       <div className="flex justify-between items-center mb-6">
// // //         <h2 className="text-2xl font-bold">NEW IN</h2>
// // //         <button className="text-sm font-semibold hover:underline">VIEW ALL</button>
// // //       </div>

// // //       {/* T-shirt grid - seamless display */}
// // //       <div className="grid bg-[#f9f9f9] grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-0">
// // //         {tshirts.map((tshirt, index) => (
// // //           <div key={index} className="aspect-square overflow-hidden">
// // //             <img 
// // //               src={tshirt} 
// // //               alt={`T-shirt ${index + 1}`} 
// // //               className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
// // //             />
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Tshirts;






// // import React from "react";

// // const Tshirts = () => {
// //   // Sample t-shirt images (replace with your actual image paths)
// //   const tshirts = [
// //     "/ts1.jpg",
// //    "/ts2.jpg",
// //    "/ts3.jpg",
// //    "/ts4.jpg",
// //    "/ts5.jpg",
// //    "/ts6.jpg",
// //   ];

// //   return (
// //     <div className="w-full py-8">
// //       {/* Header section with padding */}
// //       <div className="flex justify-between items-center mb-6 px-5 md:px-12">
// //         <h2 className="text-2xl font-bold">NEW IN</h2>
// //         <button className="text-sm font-semibold hover:underline">VIEW ALL</button>
// //       </div>

// //       {/* Full-width container for images */}
// //       <div className="w-full">
// //         {/* T-shirt grid - full width seamless display */}
// //         <div className=" bg-[#f9f9f9] flex ">
// //           {tshirts.map((tshirt, index) => (
// //             <div key={index} className="aspect-square overflow-hidden">
// //               <img 
// //                 src={tshirt} 
// //                 alt={`T-shirt ${index + 1}`} 
// //                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
// //               />
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Tshirts;









// import React from "react";
// import TshirtOne from "./TshirtOne";
// import TshirtTwo from "./TshirtTwo";

// const Tshirts = () => {
//   // Sample t-shirt images (replace with your actual image paths)
//    const tshirts = [
//     "/ts1.jpg",
//     "/ts2.jpg",
//     "/ts3.jpg",
//     "/ts4.jpg",
//     "/ts5.jpg",
//     "/ts6.jpg",
//     "/ts1.jpg",
//     "/ts2.jpg",
//     "/ts3.jpg",
//     "/ts4.jpg",
//     "/ts5.jpg",
//     "/ts6.jpg",
//   ];
 

//   return (
//     <div className="w-full py-8">
//       {/* Header section with responsive padding */}
//       <div className="flex justify-between items-center mb-6 px-5 md:px-12">
//         <h2 className="text-2xl font-bold">NEW IN</h2>
//         <button className="text-sm font-semibold hover:underline">
//           VIEW ALL
//         </button>
//       </div>
//      {/* <TshirtOne/>
//      <TshirtTwo/> */}
//       <div className="w-full bg-[#f9f9f9]">
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
//           {tshirts.map((tshirt, index) => (
//             <div key={index} className="aspect-square overflow-hidden">
//               <img
//                 src={tshirt}
//                 alt={`T-shirt ${index + 1}`}
//                 className="w-full h-full object-cover cursor-pointer  "
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Tshirts;
















import React from "react";

const Tshirts = () => {
  // Sample t-shirt images (replace with your actual image paths)
  const tshirts = [
    "/ts1.jpg",
    "/ts2.jpg",
    "/ts3.jpg",
    "/ts4.jpg",
    "/ts5.jpg",
    "/ts6.jpg",
    "/ts7.jpg",
    "/ts8.jpg",
    "/ts9.jpg",
    "/ts10.jpg",
    "/ts11.jpg",
    "/ts12.jpg",
  ];

  // Split the tshirts array into two parts
  const firstSixTshirts = tshirts.slice(0, 6);
  const remainingTshirts = tshirts.slice(6);

  return (
    <div className="w-full py-8">
      {/* Header section with responsive padding */}
      <div className="flex justify-between items-center mb-6 px-5 md:px-12">
        <h2 className="text-2xl font-bold">NEW IN</h2>
        <button className="text-sm font-semibold hover:underline">
          VIEW ALL
        </button>
      </div>

      <div className="w-full bg-[#f9f9f9]">
        {/* First 6 t-shirts */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {firstSixTshirts.map((tshirt, index) => (
            <div key={index} className="aspect-square overflow-hidden">
              <img
                src={tshirt}
                alt={`T-shirt ${index + 1}`}
                className="w-full h-full object-cover cursor-pointer"
              />
            </div>
          ))}
        </div>

        {/* Second group with margin top */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 mt-30">
          {remainingTshirts.map((tshirt, index) => (
            <div key={index + 6} className="aspect-square overflow-hidden">
              <img
                src={tshirt}
                alt={`T-shirt ${index + 7}`} // Continuing the numbering
                className="w-full h-full object-cover cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tshirts;