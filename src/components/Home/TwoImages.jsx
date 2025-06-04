import React from 'react';

const TwoImages = () => {
  return (
    <section className="flex w-full h-full">
      {/* Left Block */}
      <div className="w-1/2 flex flex-col">
        <div className="flex-1">
          <img
            src="twoImg1.jpg"
            alt="T-shirt"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex items-center justify-between py-3 px-7">
          <h2 className="text-xl font-semibold">T-shirt</h2>
          <button className="mt-2 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition">
            Order Now
          </button>
        </div>
      </div>

      {/* Right Block */}
      <div className="w-1/2 flex flex-col">
        <div className="flex-1">
          <img
            src="twoImg2.jpg"
            alt="T-shirt"
            className="w-full h-full object-cover"
          />
        </div>
        {/* <div className="text-center py-4"> */}
                <div className="flex items-center justify-between py-3 px-7">

          <h2 className="text-xl font-semibold">T-shirt</h2>
          <button className="mt-2 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition">
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default TwoImages;
