import React from 'react';
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import imagem1 from '../../public/Galeria/Biblioteca/WhatsApp Image 2024-02-07 at 19.32.39(1).jpeg';
import imagem2 from '../../public/Galeria/Biblioteca/WhatsApp Image 2024-02-07 at 19.32.40(1).jpeg';
import img1 from '../../public/Galeria/Biblioteca/WhatsApp Image 2024-02-07 at 19.32.41(1).jpeg'
import img2 from '../../public/Galeria/Biblioteca/WhatsApp Image 2024-02-07 at 19.32.42(1).jpeg'
import img3 from '../../public/Galeria/Biblioteca/WhatsApp Image 2024-02-07 at 19.32.42.jpeg'

const images1 = [
    {
        original: imagem1,
        thumbnail: imagem1,
        description: 'Biblioteca'
    },
    {
        original: imagem2,
        thumbnail: imagem2,
        description: 'Biblioteca'
    }
    // Adicione mais imagens conforme necessário
];

// const images2 = [
//     {
//         original: img1,
//         thumbnail: img1,
//         description: 'Salão de Palestras'
//     },

//     {
//       original: img2,
//       thumbnail: img2,
//       description: 'Biblioteca'
//   },

//   {
//     original: img3,
//     thumbnail: img3,
//     description: 'Biblioteca'
// },
//     // Adicione mais imagens conforme necessário
// ];

const Galeria = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="container mx-auto px-4 py-8 flex-grow">
                <h2 className="text-2xl font-bold mb-4">Galeria de Fotos Solar de Jesus</h2>
                <div className="sm:hidden"> {/* Visível apenas em dispositivos móveis */}
                    <ImageGallery items={images1} showThumbnails={false} />
                </div>
                <div className="hidden sm:block"> {/* Visível apenas em dispositivos desktop */}
                    <ImageGallery items={images1} />
                </div>

                <h2 className="text-2xl font-bold my-8"></h2>
                <div className="sm:hidden"> {/* Visível apenas em dispositivos móveis */}
                    <ImageGallery items={images2} showThumbnails={false} />
                </div>
                <div className="hidden sm:block"> {/* Visível apenas em dispositivos desktop */}
                    <ImageGallery items={images2} />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Galeria;
