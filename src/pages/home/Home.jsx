import React from 'react'
import  Navbar from '../../Navbar'
import  Footer from '../../Footer'
import Carousel from './Carousel'
import bannerVoluntariosDaAlegria from '../quemsomos/img-nossostrabalhos/Voluntários da Alegria.jpeg'
import Modal from '../home/Modal'

export default function Home() {

  
  return (
    <div>
      <Navbar/>
      <Carousel/>
      {/* Banner Voluntários da Alegria */}
      <div className="container mx-auto px-4 py-8 md:flex md:items-center md:justify-between   -mt-96">
      <div className="md:w-1/2 md:pr-4 mb-4 md:mb-0">
        <img
          className=" object-center w-full h-64 md:h-auto md:w-full"
          src={bannerVoluntariosDaAlegria}
          alt="Imagem"
        />
      </div>
      <div className="md:w-1/2 md:pl-4  bg-orange500 text-white rounded-bl-3xl rounded-tr-3xl">
        <h2 className="text-2xl font-bold mb-4">"Seja um Voluntário da Alegria:</h2>
        <p className=" ml-4 text-lg flex justify-center items-center">
        ofereça seu amor ao próximo, doando seu tempo e proporcionando consolo moral e espiritual." 
        </p>
      </div>
    </div>

    {/* Fim- Banner Voluntários da Alegria */}


    {/* ========== */}

    <Modal/>
     

    {/* IMG - Oração */}


    {/* Fim - IMG Oração */}

    {/* ========== */}
 

    {/* Localização */}



    {/* Fim - Localização */}



    {/* ============ */}
      <Footer/>
    </div>
  )
}