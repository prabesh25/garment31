import React from 'react';

const Hero = () => {
  return (
    <section className="w-full h-screen bg-cover bg-center relative" style={{ backgroundImage: `url('/your-hero-image.jpg')` }}>
      <div className="absolute left-10 top-1/2 transform -translate-y-1/2">
        <h1 className="text-6xl font-extrabold" style={{ color: '#e50010' }}>
          STUDIO 31
        </h1>
      </div>
    </section>
  );
};

export default Hero;
