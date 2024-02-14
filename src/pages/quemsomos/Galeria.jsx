import React from 'react';
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import imagem1 from '../../public/Galeria/WhatsApp Image 2024-02-07 at 19.32.39(1).jpeg';
import imagem2 from '../../public/Galeria/WhatsApp Image 2024-02-07 at 19.32.40(1).jpeg';

const images = [
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

const Galeria = () => {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto px-4 py-8">
                <h2 className="text-2xl font-bold mb-4">Galeria de Fotos</h2>
                <div className="hidden sm:block"> {/* Esconder para dispositivos móveis */}
                    <ImageGallery items={images} />
                </div>
                <div className="sm:hidden"> {/* Esconder para dispositivos desktop */}
                    <ImageGallery items={images} showThumbnails={false} />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Galeria;
