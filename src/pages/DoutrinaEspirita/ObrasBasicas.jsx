import React from 'react';
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import img1 from '../DoutrinaEspirita/ObrasBasicas/O Evangelho Segundo o Espiritismo/O Evangelho Segundo o Espiritismo -Espanhol.png'
import img2 from '../DoutrinaEspirita/ObrasBasicas/O Evangelho Segundo o Espiritismo/O Evangelho Segundo o Espiritismo -Inglês.png'
import img3 from '../DoutrinaEspirita/ObrasBasicas/O Evangelho Segundo o Espiritismo/O Evangelho Segundo o Espiritismo -Português.png'
function BasicWorks() {
  return (
    <div>
      {/* Descrição das Obras Básicas do Espiritismo */}
      <div className="bg-black100 container mx-auto mt-24 rounded-lg md:py-8 md:px-12 lg:px-24 xl:px-32">
        <div className="text-center">
          <h1 className="text-4xl text-white font-bold mx-4">Obras Básicas do Espiritismo</h1>
        </div>
        <div className="md:w-2/3 mx-auto text-white py-4">
          <p className="text-justify mx-4">
            As obras básicas do espiritismo constituem um conjunto fundamental de textos que servem como alicerce doutrinário para os adeptos dessa filosofia espiritualista. Elas foram codificadas por Allan Kardec, pseudônimo do educador e escritor francês Hippolyte Léon Denizard Rivail, no século XIX. Essas obras, compreendendo cinco livros, são consideradas as bases do espiritismo, oferecendo ensinamentos sobre a natureza, origem e destino dos espíritos, assim como a relação entre o mundo material e o espiritual.
          </p>
          <div className="text-center py-4">
            <p className="font-bold">1. O Livro dos Espíritos:</p>
            <p className="text-justify mx-4">Publicado em 1857, é a obra inaugural da codificação. Neste livro, Kardec apresenta uma série de questões aos espíritos por meio de médiuns, explorando temas como Deus, a alma, a reencarnação e a evolução espiritual.</p>
            <p className="font-bold">2. O Livro dos Médiuns:</p>
            <p className="text-justify mx-4">Lançado em 1861, dedica-se ao estudo das manifestações mediúnicas. Kardec explora os diferentes tipos de mediunidade, suas características e os cuidados necessários para a prática mediúnica responsável.</p>
            <p className="font-bold">3. O Evangelho Segundo o Espiritismo:</p>
            <p className="text-justify mx-4">Publicado em 1864, é uma compilação de ensinamentos morais de Jesus à luz do espiritismo. Propõe reflexões sobre temas como caridade, perdão e amor ao próximo, estimulando a prática do Evangelho no cotidiano.</p>
            <p className="font-bold">4. O Céu e o Inferno:</p>
            <p className="text-justify mx-4">Escrito em 1865, aborda a questão da vida após a morte, apresentando uma análise sobre as diferentes situações espirituais vivenciadas pelos espíritos após o desencarne.</p>
            <p className="font-bold">5. A Gênese:</p>
            <p className="text-justify mx-4">Publicado em 1868, explora a origem do planeta Terra e dos seres vivos à luz da doutrina espírita. Kardec aborda temas como a pluralidade dos mundos habitados, a criação e a influência dos espíritos na evolução da humanidade.</p>
          </div>
          <p className="text-justify mx-4">
            Essas obras, ao serem estudadas de forma conjunta, proporcionam uma compreensão abrangente dos princípios espiritas. Elas estimulam o desenvolvimento moral e intelectual dos praticantes, além de fornecerem orientações para uma vida mais plena, baseada na fraternidade, solidariedade e no aprimoramento espiritual.
          </p>
        </div>

        {/* Inglês */}
        <div className="text-center">
          <h1 className="text-4xl text-white font-bold mx-4">Basic Works of Spiritism</h1>
        </div>
        <div className="md:w-2/3 mx-auto text-white py-4">
          {/* Seu texto em inglês aqui */}
          <p className='text-justify mx-4'>The basic works of spiritualism constitute a fundamental set of texts that serve as a doctrinal foundation for followers of this spiritualist philosophy... The basic works of spiritualism constitute a fundamental set of texts that serve as a doctrinal foundation for followers of this spiritualist philosophy. They were codified by Allan Kardec, pseudonym of the French educator and writer Hippolyte Léon Denizard Rivail, in the 19th century. These works, comprising five books, are considered the foundations of spiritualism, offering teachings on the nature, origin and destiny of spirits, as well as the relationship between the material and spiritual world. 1. **The Spirits' Book:** Published in 1857, it is the inaugural work of codification. In this book, Kardec presents a series of questions to spirits through mediums, exploring themes such as God, the soul, reincarnation and spiritual evolution. 2. **The Book of Mediums:** Launched in 1861, it is dedicated to the study of mediumistic manifestations. Kardec explores the different types of mediumship, their characteristics and the care necessary for responsible mediumistic practice. 3. **The Gospel According to Spiritism:** Published in 1864, it is a compilation of Jesus' moral teachings in the light of spiritualism. It proposes reflections on topics such as charity, forgiveness and love for others, encouraging the practice of the Gospel in everyday life. 4. **Heaven and Hell:** Written in 1865, it addresses the issue of life after death, presenting an analysis of the different spiritual situations experienced by spirits after disembodiment. 5. **The Genesis:** Published in 1868, it explores the origin of planet Earth and living beings in the light of spiritist doctrine. Kardec addresses topics such as the plurality of inhabited worlds, creation and the influence of spirits on the evolution of humanity. These works, when studied together, provide a comprehensive understanding of spiritual principles. They stimulate the moral and intellectual development of practitioners, in addition to providing guidance for a fuller life, based on fraternity, solidarity and spiritual improvement.</p>
        </div>

        {/* Espanhol */}
        <div className="text-center">
          <h1 className="text-4xl text-white font-bold">Obras Básicas del Espiritismo</h1>
        </div>
        <div className="md:w-2/3 mx-auto text-white py-4">
          {/* Seu texto em espanhol aqui */}
          <p className='text-justify mx-4' >... Las obras básicas del espiritismo constituyen un conjunto fundamental de textos que sirven de fundamento doctrinal a los seguidores de esta filosofía espiritista... Las obras básicas del espiritismo constituyen un conjunto fundamental de textos que sirven de fundamento doctrinal a los seguidores de esta filosofía espiritista. Fueron codificados por Allan Kardec, seudónimo del educador y escritor francés Hippolyte Léon Denizard Rivail, en el siglo XIX. Estas obras, compuestas por cinco libros, son consideradas los fundamentos del espiritismo, ofreciendo enseñanzas sobre la naturaleza, origen y destino de los espíritus, así como la relación entre el mundo material y espiritual. 1. **El Libro de los Espíritus:** Publicado en 1857, es la obra inaugural de codificación. En este libro, Kardec presenta una serie de preguntas a los espíritus a través de médiums, explorando temas como Dios, el alma, la reencarnación y la evolución espiritual. 2. **El Libro de los Médiums:** Lanzado en 1861, está dedicado al estudio de las manifestaciones mediúmnicas. Kardec explora los diferentes tipos de mediumnidad, sus características y los cuidados necesarios para una práctica mediúmnica responsable. 3. **El Evangelio según el Espiritismo:** Publicado en 1864, es una recopilación de las enseñanzas morales de Jesús a la luz del espiritismo. Propone reflexiones sobre temas como la caridad, el perdón y el amor al prójimo, fomentando la práctica del Evangelio en la vida cotidiana. 4. **Cielo e Infierno:** Escrito en 1865, aborda el tema de la vida después de la muerte, presentando un análisis de las diferentes situaciones espirituales que viven los espíritus después de la desencarnación. 5. **El Génesis:** Publicado en 1868, explora el origen del planeta Tierra y de los seres vivos a la luz de la doctrina espírita. Kardec aborda temas como la pluralidad de mundos habitados, la creación y la influencia de los espíritus en la evolución de la humanidad. Estas obras, cuando se estudian juntas, proporcionan una comprensión integral de los principios espirituales. Estimulan el desarrollo moral e intelectual de los practicantes, además de brindar orientación para una vida más plena, basada en la fraternidad, la solidaridad y la superación espiritual.</p>
        </div>
        
      </div>
     
     <h1 className='text-center mt-4'>O Evangelho Segundo o Espiritismo</h1>
{/* Container com imagens e texto */}
<div className="flex flex-col md:flex-row md:justify-between items-center py-8 container mx-auto border-orange300 border-2 mt-4">
  <div className="md:w-1/2 text-center md:text-left">
    <div className="flex flex-wrap justify-center md:justify-start">
      <img src={img1} alt="Imagem 1" className="w-48 h-48   mx-2 mb-2" />
      <img src={img2} alt="Imagem 2" className="w-48 h-48   mx-2 mb-2" />
      <img src={img3} alt="Imagem 3" className="w-48 h-48   mx-2 mb-2" />
    </div>
  </div>
  <div className="md:w-1/2 text-black text-center md:text-left mt-4 md:mt-0">
    
  <div className="content">
      <div className="message-text">
        <p><b>O Evangelho Segundo O Espiritismo - Português</b></p>
        <p><i>Download do Arquivo</i></p>
        <p>Clique no link abaixo para baixar o arquivo:</p>

        <p><b>The gospel According to spiritism - English</b></p>
        <p><i>File Download</i></p>
        <p>Click on the link below to download the file:</p>
        <a href="../documents/O Evangelho Segundo o Espiritismo/O Evangelho Segundo O Espiritismo - Inglês.pdf" className="bg-black100 text-white rounded" download="The gospel According to spiritism - English.pdf">File Download</a>
        
        



        <p><b> El evangelio según el espiritismo - Español</b></p>
        <p><i>Descarga de archivos</i></p>
        <p>Haga clic en el siguiente enlace para descargar el archivo:</p>
        <a href="../documents/O Evangelho Segundo o Espiritismo/O Evangelho Segundo O Espiritismo - Espanhol.pdf" className="" download="El evangelio según el espiritismo - Español.pdf">Descarga de archivos</a>
      </div>
    </div>






  </div>
</div>






    </div>
  );
}

export default function ObrasBasicas() {
  return (
    <div>
      <Navbar />
      <BasicWorks />
      <Footer />
    </div>
  );
}
