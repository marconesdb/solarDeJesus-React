import React, { useState } from 'react';
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import imagem1 from './Galeria/WhatsApp Image 2024-02-07 at 19.32.39(1).jpeg';
// Importe as imagens restantes da mesma maneira, substituindo "imagem1" pelos nomes das variáveis correspondentes

const Galeria = () => {
  // Array de URLs das imagens
  const images = [
    imagem1,
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
  ];

  // Estado para controlar a exibição do modal e a URL da imagem selecionada
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  // Função para abrir o modal e definir a imagem selecionada
  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setModalOpen(true);
  };

  // Função para fechar o modal
  const closeModal = () => {
    setSelectedImage('');
    setModalOpen(false);
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Galeria de Fotos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Mapeando as imagens e criando os componentes de imagem */}
          {images.map((imageUrl, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={imageUrl}
                alt={`Image ${index}`}
                className="w-full cursor-pointer"
                onClick={() => openModal(imageUrl)}
              />
            </div>
          ))}
        </div>
      </div>
      {/* Modal */}
      {modalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white rounded-lg overflow-hidden max-w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img src={selectedImage} alt="Imagem em tamanho real" className="w-full" />
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Galeria;
