import React, { useState, useEffect } from 'react';
import image1 from './img-carousel/Captura de Tela (4035).png';
import image2 from './img-carousel/Captura de Tela (4036).png';
import image3 from './img-carousel/Captura de Tela (4037).png';

export default function Carousel() {
  const images = [image1, image2, image3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const prevImage = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000); // Altere este valor para ajustar o intervalo de tempo entre os slides (em milissegundos)

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <div className="container mx-auto h-screen flex items-start justify-center pt-10 ">
      <div className="relative h-96 w-full">
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white px-3 py-1 rounded-l focus:outline-none"
          onClick={prevImage}
        >
          
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-r focus:outline-none"
          onClick={nextImage}
        >
          
        </button>
        <img
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex + 1}`}
          className="w-full h-full object-cover mt-20"
        />
      </div>
    </div>
  );
}
