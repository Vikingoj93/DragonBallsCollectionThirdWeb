'use client'

import React, { useState, useEffect } from 'react';

const HomeImages = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    'https://sergiomadrigal.com/wp-content/uploads/2015/05/blog_dragonball.jpg',
    'https://www.einerd.com.br/wp-content/uploads/2017/07/Dragon-Ball-Super-Animacao-Feia.jpg',
    'https://sergiomadrigal.com/wp-content/uploads/2015/05/img_dragonball.jpg'
  ];

  const sectionLinks = [
    '/token',
    '/whitepaper',
    '/seccion3'
  ];

  const previousImage = () => {
    setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1));
  };

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleImageClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div style={{ margin: '5px' }}>
      <div className="flex flex-col items-center md:flex-row justify-center">
        <button
          onClick={previousImage}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all duration-300 transform hover:scale-110 focus:outline-none mb-4 md:mb-0 md:mr-2"
        >
          Anterior
        </button>
        <img
          src={images[currentImage]}
          alt={`Image ${currentImage + 1}`}
          className="h-64 w-64 md:h-[300px] md:w-[500px] rounded-xl cursor-pointer"
          style={{ margin: '20px' }}
          onClick={() => handleImageClick(sectionLinks[currentImage])}
        />
        <button
          onClick={nextImage}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all duration-300 transform hover:scale-110 focus:outline-none mb-4 md:mb-0 md:mr-2"
          style={{ padding: '0' }}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default HomeImages;
