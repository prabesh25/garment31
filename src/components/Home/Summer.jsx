

// // import React from 'react';



// // const Summer = () => {
// //   return (
// //    <section
// //   className="w-full h-screen cover "
// //   style={{ backgroundImage: `url("zero.jpg")` }}
// // >


// //         {/* <img src="zero.jpg" alt="heroimg" /> */}
// //       {/* Left Bottom Text */}
// //       <div className="absolute bottom-10 left-10">
// //         <h2 className="text-4xl font-bold text-white">Summer 2025</h2>
// //       </div>

// //       {/* Right Bottom Button */}
// //       <div className="absolute bottom-10 right-10">
// //         <button className="bg-white text-black px-6 py-2 font-semibold rounded hover:bg-gray-200 transition">
// //           Shop Now
// //         </button>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Summer;

// import React from 'react';

// const Summer = () => {
//   return (
//     <section
//       className="w-full min-h-screen bg-top bg-no-repeat bg-cover relative"
//       style={{ backgroundImage: `url("zero.jpg")` }}
//     >
//       {/* Left Bottom Text */}
//       <div className="absolute bottom-10 left-10">
//         <h2 className="text-4xl font-bold text-white">Summer 2025</h2>
//       </div>

//       {/* Right Bottom Button */}
//       <div className="absolute bottom-10 right-10">
//         <button className="bg-white text-black px-6 py-2 font-semibold rounded hover:bg-gray-200 transition">
//           Shop Now
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Summer;
import React from 'react';

const Summer = () => {
  return (
    <section className="w-full relative">
      <img
        src="zero.jpg"
        alt="heroimg"
        className="w-full h-auto"
      />
      {/* Text and button absolutely positioned */}
      <div className="absolute bottom-10 left-10">
        <h2 className="text-4xl font-bold text-white">Summer 2025</h2>
      </div>

      <div className="absolute bottom-10 right-10">
        <button className="bg-white text-black px-6 py-2 font-semibold rounded hover:bg-gray-200 transition">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Summer;
