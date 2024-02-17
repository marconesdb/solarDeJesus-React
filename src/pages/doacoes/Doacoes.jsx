import React from 'react';
import Navbar from '../../Navbar';
import Footer from '../../Footer';

const posters = [
  { src: 'https://via.placeholder.com/300', alt: 'Poster 1', text: 'expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo real. Wikipédia' },
  { src: 'https://via.placeholder.com/300', alt: 'Poster 2', text: 'expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo real. Wikipédia' },
  { src: 'https://via.placeholder.com/300', alt: 'Poster 3', text: 'expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo real. Wikipédia' },
  { src: 'https://via.placeholder.com/300', alt: 'Poster 4', text: 'expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo real. Wikipédia' },
  { src: 'https://via.placeholder.com/300', alt: 'Poster 5', text: 'expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo real. Wikipédia' },
  { src: 'https://via.placeholder.com/300', alt: 'Poster 6', text: ' expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo real. Wikipédia' }
];

export default function Doacoes() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Nossos Posters</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
          {posters.map((poster, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={poster.src} alt={poster.alt} className="w-full mb-2" />
              <p className="text-center text-justify">{poster.text}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
