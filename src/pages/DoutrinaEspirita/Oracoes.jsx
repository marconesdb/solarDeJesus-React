import React from 'react';
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import img1 from '../DoutrinaEspirita/img-oracoes/IMG-1.png';
import audioPortugues1 from './Audio-Orações/Ó Deus, nosso Pai.mp3';
import audioEnglish1 from './Audio-Orações/O God, our Father.mp3';
import audioEspanol1 from './Audio-Orações/Oh Dios, Padre nuestro.mp3';
export default function Oracoes() {
  return (
    <div>
      <Navbar />
      <h1 className='mt-32 flex justify-center items-center text-xl md:text-2xl font-bold mb-4'>Orações</h1>
      {/* Oração 1 */}
      <div className="container mx-auto p-4 md:p-8 border border-orange400 rounded-md flex flex-col md:flex-row items-center">
        <img
          src={img1}
          alt="Imagem"
          className="w-32 h-auto md:w-48 md:h-auto rounded mr-4 md:mr-8 mt-4 md:mt-0"
        />
        <div className="text-center md:text-left justify-center items-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Prece</h2>
          <p className="text-justify">
            Ó Deus, nosso Pai,

            Nós Te agradecemos por refrescar nossas almas após o calor da prova, expiação e sofrimento.

            Tu és o Deus da compaixão e do amor. Tu nos conheces e nos entendes. Tu sabes o que passamos e o que sentimos.

            No calor da prova, Tu nos deste forças para perseverar. No calor da expiação, Tu nos deste paz e consolo. No calor do sofrimento, Tu nos deste esperança e renovação.

            Graças a Ti, podemos descansar em Tuas promessas de amor e fidelidade. Podemos confiar em Tua justiça e misericórdia. Podemos saber que Tu estás conosco em todos os momentos, nos bons e nos maus.

            Ó Deus, refresca nossas almas com Tua presença. Dai-nos a Tua paz, a Tua alegria e a Tua esperança. Ajuda-nos a viver em Tua presença, todos os dias de nossas vidas.
            <br />
            <b>Prayer in English:</b>
            O God, our Father, We thank You for refreshing our souls after the heat of trial, atonement and suffering. You are the God of compassion and love. You know us and understand us. You know what we go through and what we feel. In the heat of the test, You gave us strength to persevere. In the heat of atonement, You gave us peace and comfort. In the heat of suffering, You gave us hope and renewal. Thanks to You, we can rest in Your promises of love and faithfulness. We can trust in Your justice and mercy. We can know that You are with us at all times, in the good and the bad. O God, refresh our souls with Your presence. Give us Your peace, Your joy and Your hope. Help us to live in Your presence, every day of our lives.
            <br />
            <b>Oración en español:</b>
            Oh Dios, Padre nuestro, Te damos gracias por refrescar nuestras almas después del calor de la prueba, la expiación y el sufrimiento. Eres el Dios de la compasión y el amor. Tú nos conoces y nos entiendes. Sabes lo que pasamos y lo que sentimos. En el fragor de la prueba, Tú nos diste fuerza para perseverar. En el calor de la expiación, nos diste paz y consuelo. En el calor del sufrimiento, nos diste esperanza y renovación. Gracias a Ti podemos descansar en Tus promesas de amor y fidelidad. Podemos confiar en Tu justicia y misericordia. Podemos saber que Tú estás con nosotros en todo momento, en las buenas y en las malas. Oh Dios, refresca nuestras almas con tu presencia. Danos tu paz, tu alegría y tu esperanza. Ayúdanos a vivir en Tu presencia, todos los días de nuestras vidas.
          </p>

          <p><b><em>Oração em áudio: Português</em></b></p>
          <audio controls>
            <source src={audioPortugues1} type="audio/mp3" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
          <p><b><em>Audio Prayer: English</em></b></p>
          <audio controls>
            <source src={audioEnglish1} type="audio/mp3" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
          <p><b><em>Oración en audio: español</em></b></p>
          <audio controls>
            <source src={audioEspanol1} type="audio/mp3" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
        </div>
      </div>

      {/* Fim - Oração 1 */}


      {/* ========= */}



      {/* Oração 2 */}
      <div className="container mx-auto p-4 md:p-8 border border-orange400 rounded-md flex flex-col md:flex-row items-center mt-8">
        <img
          src={img1}
          alt="Imagem"
          className="w-32 h-auto md:w-48 md:h-auto rounded mr-4 md:mr-8 mt-4 md:mt-0"
        />
        <div className="text-center md:text-left justify-center items-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Prece</h2>
          <p className="text-justify">
            Ó Deus, nosso Pai,

            Nós Te agradecemos por refrescar nossas almas após o calor da prova, expiação e sofrimento.

            Tu és o Deus da compaixão e do amor. Tu nos conheces e nos entendes. Tu sabes o que passamos e o que sentimos.

            No calor da prova, Tu nos deste forças para perseverar. No calor da expiação, Tu nos deste paz e consolo. No calor do sofrimento, Tu nos deste esperança e renovação.

            Graças a Ti, podemos descansar em Tuas promessas de amor e fidelidade. Podemos confiar em Tua justiça e misericórdia. Podemos saber que Tu estás conosco em todos os momentos, nos bons e nos maus.

            Ó Deus, refresca nossas almas com Tua presença. Dai-nos a Tua paz, a Tua alegria e a Tua esperança. Ajuda-nos a viver em Tua presença, todos os dias de nossas vidas.
            <br />
            <b>Prayer in English:</b>
            O God, our Father, We thank You for refreshing our souls after the heat of trial, atonement and suffering. You are the God of compassion and love. You know us and understand us. You know what we go through and what we feel. In the heat of the test, You gave us strength to persevere. In the heat of atonement, You gave us peace and comfort. In the heat of suffering, You gave us hope and renewal. Thanks to You, we can rest in Your promises of love and faithfulness. We can trust in Your justice and mercy. We can know that You are with us at all times, in the good and the bad. O God, refresh our souls with Your presence. Give us Your peace, Your joy and Your hope. Help us to live in Your presence, every day of our lives.
            <br />
            <b>Oración en español:</b>
            Oh Dios, Padre nuestro, Te damos gracias por refrescar nuestras almas después del calor de la prueba, la expiación y el sufrimiento. Eres el Dios de la compasión y el amor. Tú nos conoces y nos entiendes. Sabes lo que pasamos y lo que sentimos. En el fragor de la prueba, Tú nos diste fuerza para perseverar. En el calor de la expiación, nos diste paz y consuelo. En el calor del sufrimiento, nos diste esperanza y renovación. Gracias a Ti podemos descansar en Tus promesas de amor y fidelidad. Podemos confiar en Tu justicia y misericordia. Podemos saber que Tú estás con nosotros en todo momento, en las buenas y en las malas. Oh Dios, refresca nuestras almas con tu presencia. Danos tu paz, tu alegría y tu esperanza. Ayúdanos a vivir en Tu presencia, todos los días de nuestras vidas.
          </p>

          <p><b><em>Oração em áudio: Português</em></b></p>
          <audio controls>
            <source src={audioPortugues1} type="audio/mp3" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
          <p><b><em>Audio Prayer: English</em></b></p>
          <audio controls>
            <source src={audioEnglish1} type="audio/mp3" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
          <p><b><em>Oración en audio: español</em></b></p>
          <audio controls>
            <source src={audioEspanol1} type="audio/mp3" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
        </div>
      </div>

      {/*Fim - Oração 2 */}

      {/* ======== */}


      {/* Oração 3 */}
      <div className="container mx-auto p-4 md:p-8 border border-orange400 rounded-md flex flex-col md:flex-row items-center mt-8">
        <img
          src={img1}
          alt="Imagem"
          className="w-32 h-auto md:w-48 md:h-auto rounded mr-4 md:mr-8 mt-4 md:mt-0"
        />
        <div className="text-center md:text-left justify-center items-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Prece</h2>
          <p className="text-justify">
            Ó Deus, nosso Pai,

            Nós Te agradecemos por refrescar nossas almas após o calor da prova, expiação e sofrimento.

            Tu és o Deus da compaixão e do amor. Tu nos conheces e nos entendes. Tu sabes o que passamos e o que sentimos.

            No calor da prova, Tu nos deste forças para perseverar. No calor da expiação, Tu nos deste paz e consolo. No calor do sofrimento, Tu nos deste esperança e renovação.

            Graças a Ti, podemos descansar em Tuas promessas de amor e fidelidade. Podemos confiar em Tua justiça e misericórdia. Podemos saber que Tu estás conosco em todos os momentos, nos bons e nos maus.

            Ó Deus, refresca nossas almas com Tua presença. Dai-nos a Tua paz, a Tua alegria e a Tua esperança. Ajuda-nos a viver em Tua presença, todos os dias de nossas vidas.
            <br />
            <b>Prayer in English:</b>
            O God, our Father, We thank You for refreshing our souls after the heat of trial, atonement and suffering. You are the God of compassion and love. You know us and understand us. You know what we go through and what we feel. In the heat of the test, You gave us strength to persevere. In the heat of atonement, You gave us peace and comfort. In the heat of suffering, You gave us hope and renewal. Thanks to You, we can rest in Your promises of love and faithfulness. We can trust in Your justice and mercy. We can know that You are with us at all times, in the good and the bad. O God, refresh our souls with Your presence. Give us Your peace, Your joy and Your hope. Help us to live in Your presence, every day of our lives.
            <br />
            <b>Oración en español:</b>
            Oh Dios, Padre nuestro, Te damos gracias por refrescar nuestras almas después del calor de la prueba, la expiación y el sufrimiento. Eres el Dios de la compasión y el amor. Tú nos conoces y nos entiendes. Sabes lo que pasamos y lo que sentimos. En el fragor de la prueba, Tú nos diste fuerza para perseverar. En el calor de la expiación, nos diste paz y consuelo. En el calor del sufrimiento, nos diste esperanza y renovación. Gracias a Ti podemos descansar en Tus promesas de amor y fidelidad. Podemos confiar en Tu justicia y misericordia. Podemos saber que Tú estás con nosotros en todo momento, en las buenas y en las malas. Oh Dios, refresca nuestras almas con tu presencia. Danos tu paz, tu alegría y tu esperanza. Ayúdanos a vivir en Tu presencia, todos los días de nuestras vidas.
          </p>

          <p><b><em>Oração em áudio: Português</em></b></p>
          <audio controls>
            <source src={audioPortugues1} type="audio/mp3" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
          <p><b><em>Audio Prayer: English</em></b></p>
          <audio controls>
            <source src={audioEnglish1} type="audio/mp3" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
          <p><b><em>Oración en audio: español</em></b></p>
          <audio controls>
            <source src={audioEspanol1} type="audio/mp3" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
        </div>
      </div>

      {/*Fim - Oração 3 */}
      
       {/* ========== */}



       
      {/* Oração 4 */}
      <div className="container mx-auto p-4 md:p-8 border border-orange400 rounded-md flex flex-col md:flex-row items-center mt-8">
        <img
          src={img1}
          alt="Imagem"
          className="w-32 h-auto md:w-48 md:h-auto rounded mr-4 md:mr-8 mt-4 md:mt-0"
        />
        <div className="text-center md:text-left justify-center items-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Prece</h2>
          <p className="text-justify">
            Ó Deus, nosso Pai,

            Nós Te agradecemos por refrescar nossas almas após o calor da prova, expiação e sofrimento.

            Tu és o Deus da compaixão e do amor. Tu nos conheces e nos entendes. Tu sabes o que passamos e o que sentimos.

            No calor da prova, Tu nos deste forças para perseverar. No calor da expiação, Tu nos deste paz e consolo. No calor do sofrimento, Tu nos deste esperança e renovação.

            Graças a Ti, podemos descansar em Tuas promessas de amor e fidelidade. Podemos confiar em Tua justiça e misericórdia. Podemos saber que Tu estás conosco em todos os momentos, nos bons e nos maus.

            Ó Deus, refresca nossas almas com Tua presença. Dai-nos a Tua paz, a Tua alegria e a Tua esperança. Ajuda-nos a viver em Tua presença, todos os dias de nossas vidas.
            <br />
            <b>Prayer in English:</b>
            O God, our Father, We thank You for refreshing our souls after the heat of trial, atonement and suffering. You are the God of compassion and love. You know us and understand us. You know what we go through and what we feel. In the heat of the test, You gave us strength to persevere. In the heat of atonement, You gave us peace and comfort. In the heat of suffering, You gave us hope and renewal. Thanks to You, we can rest in Your promises of love and faithfulness. We can trust in Your justice and mercy. We can know that You are with us at all times, in the good and the bad. O God, refresh our souls with Your presence. Give us Your peace, Your joy and Your hope. Help us to live in Your presence, every day of our lives.
            <br />
            <b>Oración en español:</b>
            Oh Dios, Padre nuestro, Te damos gracias por refrescar nuestras almas después del calor de la prueba, la expiación y el sufrimiento. Eres el Dios de la compasión y el amor. Tú nos conoces y nos entiendes. Sabes lo que pasamos y lo que sentimos. En el fragor de la prueba, Tú nos diste fuerza para perseverar. En el calor de la expiación, nos diste paz y consuelo. En el calor del sufrimiento, nos diste esperanza y renovación. Gracias a Ti podemos descansar en Tus promesas de amor y fidelidad. Podemos confiar en Tu justicia y misericordia. Podemos saber que Tú estás con nosotros en todo momento, en las buenas y en las malas. Oh Dios, refresca nuestras almas con tu presencia. Danos tu paz, tu alegría y tu esperanza. Ayúdanos a vivir en Tu presencia, todos los días de nuestras vidas.
          </p>

          <p><b><em>Oração em áudio: Português</em></b></p>
          <audio controls>
            <source src={audioPortugues1} type="audio/mp3" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
          <p><b><em>Audio Prayer: English</em></b></p>
          <audio controls>
            <source src={audioEnglish1} type="audio/mp3" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
          <p><b><em>Oración en audio: español</em></b></p>
          <audio controls>
            <source src={audioEspanol1} type="audio/mp3" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
        </div>
      </div>

      {/*Fim - Oração 4 */}
    

      {/* ================ */}


      {/* Oração 5 */}
      <div className="container mx-auto p-4 md:p-8 border border-orange400 rounded-md flex flex-col md:flex-row items-center mt-8">
        <img
          src={img1}
          alt="Imagem"
          className="w-32 h-auto md:w-48 md:h-auto rounded mr-4 md:mr-8 mt-4 md:mt-0"
        />
        <div className="text-center md:text-left justify-center items-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Prece</h2>
          <p className="text-justify">
            Ó Deus, nosso Pai,

            Nós Te agradecemos por refrescar nossas almas após o calor da prova, expiação e sofrimento.

            Tu és o Deus da compaixão e do amor. Tu nos conheces e nos entendes. Tu sabes o que passamos e o que sentimos.

            No calor da prova, Tu nos deste forças para perseverar. No calor da expiação, Tu nos deste paz e consolo. No calor do sofrimento, Tu nos deste esperança e renovação.

            Graças a Ti, podemos descansar em Tuas promessas de amor e fidelidade. Podemos confiar em Tua justiça e misericórdia. Podemos saber que Tu estás conosco em todos os momentos, nos bons e nos maus.

            Ó Deus, refresca nossas almas com Tua presença. Dai-nos a Tua paz, a Tua alegria e a Tua esperança. Ajuda-nos a viver em Tua presença, todos os dias de nossas vidas.
            <br />
            <b>Prayer in English:</b>
            O God, our Father, We thank You for refreshing our souls after the heat of trial, atonement and suffering. You are the God of compassion and love. You know us and understand us. You know what we go through and what we feel. In the heat of the test, You gave us strength to persevere. In the heat of atonement, You gave us peace and comfort. In the heat of suffering, You gave us hope and renewal. Thanks to You, we can rest in Your promises of love and faithfulness. We can trust in Your justice and mercy. We can know that You are with us at all times, in the good and the bad. O God, refresh our souls with Your presence. Give us Your peace, Your joy and Your hope. Help us to live in Your presence, every day of our lives.
            <br />
            <b>Oración en español:</b>
            Oh Dios, Padre nuestro, Te damos gracias por refrescar nuestras almas después del calor de la prueba, la expiación y el sufrimiento. Eres el Dios de la compasión y el amor. Tú nos conoces y nos entiendes. Sabes lo que pasamos y lo que sentimos. En el fragor de la prueba, Tú nos diste fuerza para perseverar. En el calor de la expiación, nos diste paz y consuelo. En el calor del sufrimiento, nos diste esperanza y renovación. Gracias a Ti podemos descansar en Tus promesas de amor y fidelidad. Podemos confiar en Tu justicia y misericordia. Podemos saber que Tú estás con nosotros en todo momento, en las buenas y en las malas. Oh Dios, refresca nuestras almas con tu presencia. Danos tu paz, tu alegría y tu esperanza. Ayúdanos a vivir en Tu presencia, todos los días de nuestras vidas.
          </p>

          <p><b><em>Oração em áudio: Português</em></b></p>
          <audio controls>
            <source src={audioPortugues1} type="audio/mp3" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
          <p><b><em>Audio Prayer: English</em></b></p>
          <audio controls>
            <source src={audioEnglish1} type="audio/mp3" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
          <p><b><em>Oración en audio: español</em></b></p>
          <audio controls>
            <source src={audioEspanol1} type="audio/mp3" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
        </div>
      </div>

      {/*Fim - Oração 5 */}



      {/* ============== */}



      
      {/* Oração 6 */}
      <div className="container mx-auto p-4 md:p-8 border border-orange400 rounded-md flex flex-col md:flex-row items-center mt-8">
        <img
          src={img1}
          alt="Imagem"
          className="w-32 h-auto md:w-48 md:h-auto rounded mr-4 md:mr-8 mt-4 md:mt-0"
        />
        <div className="text-center md:text-left justify-center items-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Prece</h2>
          <p className="text-justify">
            Ó Deus, nosso Pai,

            Nós Te agradecemos por refrescar nossas almas após o calor da prova, expiação e sofrimento.

            Tu és o Deus da compaixão e do amor. Tu nos conheces e nos entendes. Tu sabes o que passamos e o que sentimos.

            No calor da prova, Tu nos deste forças para perseverar. No calor da expiação, Tu nos deste paz e consolo. No calor do sofrimento, Tu nos deste esperança e renovação.

            Graças a Ti, podemos descansar em Tuas promessas de amor e fidelidade. Podemos confiar em Tua justiça e misericórdia. Podemos saber que Tu estás conosco em todos os momentos, nos bons e nos maus.

            Ó Deus, refresca nossas almas com Tua presença. Dai-nos a Tua paz, a Tua alegria e a Tua esperança. Ajuda-nos a viver em Tua presença, todos os dias de nossas vidas.
            <br />
            <b>Prayer in English:</b>
            O God, our Father, We thank You for refreshing our souls after the heat of trial, atonement and suffering. You are the God of compassion and love. You know us and understand us. You know what we go through and what we feel. In the heat of the test, You gave us strength to persevere. In the heat of atonement, You gave us peace and comfort. In the heat of suffering, You gave us hope and renewal. Thanks to You, we can rest in Your promises of love and faithfulness. We can trust in Your justice and mercy. We can know that You are with us at all times, in the good and the bad. O God, refresh our souls with Your presence. Give us Your peace, Your joy and Your hope. Help us to live in Your presence, every day of our lives.
            <br />
            <b>Oración en español:</b>
            Oh Dios, Padre nuestro, Te damos gracias por refrescar nuestras almas después del calor de la prueba, la expiación y el sufrimiento. Eres el Dios de la compasión y el amor. Tú nos conoces y nos entiendes. Sabes lo que pasamos y lo que sentimos. En el fragor de la prueba, Tú nos diste fuerza para perseverar. En el calor de la expiación, nos diste paz y consuelo. En el calor del sufrimiento, nos diste esperanza y renovación. Gracias a Ti podemos descansar en Tus promesas de amor y fidelidad. Podemos confiar en Tu justicia y misericordia. Podemos saber que Tú estás con nosotros en todo momento, en las buenas y en las malas. Oh Dios, refresca nuestras almas con tu presencia. Danos tu paz, tu alegría y tu esperanza. Ayúdanos a vivir en Tu presencia, todos los días de nuestras vidas.
          </p>

          <p><b><em>Oração em áudio: Português</em></b></p>
          <audio controls>
            <source src={audioPortugues1} type="audio/mp3" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
          <p><b><em>Audio Prayer: English</em></b></p>
          <audio controls>
            <source src={audioEnglish1} type="audio/mp3" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
          <p><b><em>Oración en audio: español</em></b></p>
          <audio controls>
            <source src={audioEspanol1} type="audio/mp3" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
        </div>
      </div>

      {/*Fim - Oração 6 */}


      {/* =============== */}




      
      {/* Oração 7 */}
      <div className="container mx-auto p-4 md:p-8 border border-orange400 rounded-md flex flex-col md:flex-row items-center mt-8">
        <img
          src={img1}
          alt="Imagem"
          className="w-32 h-auto md:w-48 md:h-auto rounded mr-4 md:mr-8 mt-4 md:mt-0"
        />
        <div className="text-center md:text-left justify-center items-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Prece</h2>
          <p className="text-justify">
            Ó Deus, nosso Pai,

            Nós Te agradecemos por refrescar nossas almas após o calor da prova, expiação e sofrimento.

            Tu és o Deus da compaixão e do amor. Tu nos conheces e nos entendes. Tu sabes o que passamos e o que sentimos.

            No calor da prova, Tu nos deste forças para perseverar. No calor da expiação, Tu nos deste paz e consolo. No calor do sofrimento, Tu nos deste esperança e renovação.

            Graças a Ti, podemos descansar em Tuas promessas de amor e fidelidade. Podemos confiar em Tua justiça e misericórdia. Podemos saber que Tu estás conosco em todos os momentos, nos bons e nos maus.

            Ó Deus, refresca nossas almas com Tua presença. Dai-nos a Tua paz, a Tua alegria e a Tua esperança. Ajuda-nos a viver em Tua presença, todos os dias de nossas vidas.
            <br />
            <b>Prayer in English:</b>
            O God, our Father, We thank You for refreshing our souls after the heat of trial, atonement and suffering. You are the God of compassion and love. You know us and understand us. You know what we go through and what we feel. In the heat of the test, You gave us strength to persevere. In the heat of atonement, You gave us peace and comfort. In the heat of suffering, You gave us hope and renewal. Thanks to You, we can rest in Your promises of love and faithfulness. We can trust in Your justice and mercy. We can know that You are with us at all times, in the good and the bad. O God, refresh our souls with Your presence. Give us Your peace, Your joy and Your hope. Help us to live in Your presence, every day of our lives.
            <br />
            <b>Oración en español:</b>
            Oh Dios, Padre nuestro, Te damos gracias por refrescar nuestras almas después del calor de la prueba, la expiación y el sufrimiento. Eres el Dios de la compasión y el amor. Tú nos conoces y nos entiendes. Sabes lo que pasamos y lo que sentimos. En el fragor de la prueba, Tú nos diste fuerza para perseverar. En el calor de la expiación, nos diste paz y consuelo. En el calor del sufrimiento, nos diste esperanza y renovación. Gracias a Ti podemos descansar en Tus promesas de amor y fidelidad. Podemos confiar en Tu justicia y misericordia. Podemos saber que Tú estás con nosotros en todo momento, en las buenas y en las malas. Oh Dios, refresca nuestras almas con tu presencia. Danos tu paz, tu alegría y tu esperanza. Ayúdanos a vivir en Tu presencia, todos los días de nuestras vidas.
          </p>

          <p><b><em>Oração em áudio: Português</em></b></p>
          <audio controls>
            <source src={audioPortugues1} type="audio/mp3" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
          <p><b><em>Audio Prayer: English</em></b></p>
          <audio controls>
            <source src={audioEnglish1} type="audio/mp3" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
          <p><b><em>Oración en audio: español</em></b></p>
          <audio controls>
            <source src={audioEspanol1} type="audio/mp3" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
        </div>
      </div>

      {/*Fim - Oração 7 */}



      {/* ================= */}






      
      {/* Oração 8 */}
      <div className="container mx-auto p-4 md:p-8 border border-orange400 rounded-md flex flex-col md:flex-row items-center mt-8">
        <img
          src={img1}
          alt="Imagem"
          className="w-32 h-auto md:w-48 md:h-auto rounded mr-4 md:mr-8 mt-4 md:mt-0"
        />
        <div className="text-center md:text-left justify-center items-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Prece</h2>
          <p className="text-justify">
            Ó Deus, nosso Pai,

            Nós Te agradecemos por refrescar nossas almas após o calor da prova, expiação e sofrimento.

            Tu és o Deus da compaixão e do amor. Tu nos conheces e nos entendes. Tu sabes o que passamos e o que sentimos.

            No calor da prova, Tu nos deste forças para perseverar. No calor da expiação, Tu nos deste paz e consolo. No calor do sofrimento, Tu nos deste esperança e renovação.

            Graças a Ti, podemos descansar em Tuas promessas de amor e fidelidade. Podemos confiar em Tua justiça e misericórdia. Podemos saber que Tu estás conosco em todos os momentos, nos bons e nos maus.

            Ó Deus, refresca nossas almas com Tua presença. Dai-nos a Tua paz, a Tua alegria e a Tua esperança. Ajuda-nos a viver em Tua presença, todos os dias de nossas vidas.
            <br />
            <b>Prayer in English:</b>
            O God, our Father, We thank You for refreshing our souls after the heat of trial, atonement and suffering. You are the God of compassion and love. You know us and understand us. You know what we go through and what we feel. In the heat of the test, You gave us strength to persevere. In the heat of atonement, You gave us peace and comfort. In the heat of suffering, You gave us hope and renewal. Thanks to You, we can rest in Your promises of love and faithfulness. We can trust in Your justice and mercy. We can know that You are with us at all times, in the good and the bad. O God, refresh our souls with Your presence. Give us Your peace, Your joy and Your hope. Help us to live in Your presence, every day of our lives.
            <br />
            <b>Oración en español:</b>
            Oh Dios, Padre nuestro, Te damos gracias por refrescar nuestras almas después del calor de la prueba, la expiación y el sufrimiento. Eres el Dios de la compasión y el amor. Tú nos conoces y nos entiendes. Sabes lo que pasamos y lo que sentimos. En el fragor de la prueba, Tú nos diste fuerza para perseverar. En el calor de la expiación, nos diste paz y consuelo. En el calor del sufrimiento, nos diste esperanza y renovación. Gracias a Ti podemos descansar en Tus promesas de amor y fidelidad. Podemos confiar en Tu justicia y misericordia. Podemos saber que Tú estás con nosotros en todo momento, en las buenas y en las malas. Oh Dios, refresca nuestras almas con tu presencia. Danos tu paz, tu alegría y tu esperanza. Ayúdanos a vivir en Tu presencia, todos los días de nuestras vidas.
          </p>

          <p><b><em>Oração em áudio: Português</em></b></p>
          <audio controls>
            <source src={audioPortugues1} type="audio/mp3" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
          <p><b><em>Audio Prayer: English</em></b></p>
          <audio controls>
            <source src={audioEnglish1} type="audio/mp3" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
          <p><b><em>Oración en audio: español</em></b></p>
          <audio controls>
            <source src={audioEspanol1} type="audio/mp3" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
        </div>
      </div>

      {/*Fim - Oração 8 */}


      {/* =============== */}


      
      {/* Oração 9 */}
      <div className="container mx-auto p-4 md:p-8 border border-orange400 rounded-md flex flex-col md:flex-row items-center mt-8">
        <img
          src={img1}
          alt="Imagem"
          className="w-32 h-auto md:w-48 md:h-auto rounded mr-4 md:mr-8 mt-4 md:mt-0"
        />
        <div className="text-center md:text-left justify-center items-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Prece</h2>
          <p className="text-justify">
            Ó Deus, nosso Pai,

            Nós Te agradecemos por refrescar nossas almas após o calor da prova, expiação e sofrimento.

            Tu és o Deus da compaixão e do amor. Tu nos conheces e nos entendes. Tu sabes o que passamos e o que sentimos.

            No calor da prova, Tu nos deste forças para perseverar. No calor da expiação, Tu nos deste paz e consolo. No calor do sofrimento, Tu nos deste esperança e renovação.

            Graças a Ti, podemos descansar em Tuas promessas de amor e fidelidade. Podemos confiar em Tua justiça e misericórdia. Podemos saber que Tu estás conosco em todos os momentos, nos bons e nos maus.

            Ó Deus, refresca nossas almas com Tua presença. Dai-nos a Tua paz, a Tua alegria e a Tua esperança. Ajuda-nos a viver em Tua presença, todos os dias de nossas vidas.
            <br />
            <b>Prayer in English:</b>
            O God, our Father, We thank You for refreshing our souls after the heat of trial, atonement and suffering. You are the God of compassion and love. You know us and understand us. You know what we go through and what we feel. In the heat of the test, You gave us strength to persevere. In the heat of atonement, You gave us peace and comfort. In the heat of suffering, You gave us hope and renewal. Thanks to You, we can rest in Your promises of love and faithfulness. We can trust in Your justice and mercy. We can know that You are with us at all times, in the good and the bad. O God, refresh our souls with Your presence. Give us Your peace, Your joy and Your hope. Help us to live in Your presence, every day of our lives.
            <br />
            <b>Oración en español:</b>
            Oh Dios, Padre nuestro, Te damos gracias por refrescar nuestras almas después del calor de la prueba, la expiación y el sufrimiento. Eres el Dios de la compasión y el amor. Tú nos conoces y nos entiendes. Sabes lo que pasamos y lo que sentimos. En el fragor de la prueba, Tú nos diste fuerza para perseverar. En el calor de la expiación, nos diste paz y consuelo. En el calor del sufrimiento, nos diste esperanza y renovación. Gracias a Ti podemos descansar en Tus promesas de amor y fidelidad. Podemos confiar en Tu justicia y misericordia. Podemos saber que Tú estás con nosotros en todo momento, en las buenas y en las malas. Oh Dios, refresca nuestras almas con tu presencia. Danos tu paz, tu alegría y tu esperanza. Ayúdanos a vivir en Tu presencia, todos los días de nuestras vidas.
          </p>

          <p><b><em>Oração em áudio: Português</em></b></p>
          <audio controls>
            <source src={audioPortugues1} type="audio/mp3" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
          <p><b><em>Audio Prayer: English</em></b></p>
          <audio controls>
            <source src={audioEnglish1} type="audio/mp3" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
          <p><b><em>Oración en audio: español</em></b></p>
          <audio controls>
            <source src={audioEspanol1} type="audio/mp3" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
        </div>
      </div>

      {/*Fim - Oração 9 */}

      {/* ================= */}


      
      {/* Oração 10 */}
      <div className="container mx-auto p-4 md:p-8 border border-orange400 rounded-md flex flex-col md:flex-row items-center mt-8">
        <img
          src={img1}
          alt="Imagem"
          className="w-32 h-auto md:w-48 md:h-auto rounded mr-4 md:mr-8 mt-4 md:mt-0"
        />
        <div className="text-center md:text-left justify-center items-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Prece</h2>
          <p className="text-justify">
            Ó Deus, nosso Pai,

            Nós Te agradecemos por refrescar nossas almas após o calor da prova, expiação e sofrimento.

            Tu és o Deus da compaixão e do amor. Tu nos conheces e nos entendes. Tu sabes o que passamos e o que sentimos.

            No calor da prova, Tu nos deste forças para perseverar. No calor da expiação, Tu nos deste paz e consolo. No calor do sofrimento, Tu nos deste esperança e renovação.

            Graças a Ti, podemos descansar em Tuas promessas de amor e fidelidade. Podemos confiar em Tua justiça e misericórdia. Podemos saber que Tu estás conosco em todos os momentos, nos bons e nos maus.

            Ó Deus, refresca nossas almas com Tua presença. Dai-nos a Tua paz, a Tua alegria e a Tua esperança. Ajuda-nos a viver em Tua presença, todos os dias de nossas vidas.
            <br />
            <b>Prayer in English:</b>
            O God, our Father, We thank You for refreshing our souls after the heat of trial, atonement and suffering. You are the God of compassion and love. You know us and understand us. You know what we go through and what we feel. In the heat of the test, You gave us strength to persevere. In the heat of atonement, You gave us peace and comfort. In the heat of suffering, You gave us hope and renewal. Thanks to You, we can rest in Your promises of love and faithfulness. We can trust in Your justice and mercy. We can know that You are with us at all times, in the good and the bad. O God, refresh our souls with Your presence. Give us Your peace, Your joy and Your hope. Help us to live in Your presence, every day of our lives.
            <br />
            <b>Oración en español:</b>
            Oh Dios, Padre nuestro, Te damos gracias por refrescar nuestras almas después del calor de la prueba, la expiación y el sufrimiento. Eres el Dios de la compasión y el amor. Tú nos conoces y nos entiendes. Sabes lo que pasamos y lo que sentimos. En el fragor de la prueba, Tú nos diste fuerza para perseverar. En el calor de la expiación, nos diste paz y consuelo. En el calor del sufrimiento, nos diste esperanza y renovación. Gracias a Ti podemos descansar en Tus promesas de amor y fidelidad. Podemos confiar en Tu justicia y misericordia. Podemos saber que Tú estás con nosotros en todo momento, en las buenas y en las malas. Oh Dios, refresca nuestras almas con tu presencia. Danos tu paz, tu alegría y tu esperanza. Ayúdanos a vivir en Tu presencia, todos los días de nuestras vidas.
          </p>

          <p><b><em>Oração em áudio: Português</em></b></p>
          <audio controls>
            <source src={audioPortugues1} type="audio/mp3" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
          <p><b><em>Audio Prayer: English</em></b></p>
          <audio controls>
            <source src={audioEnglish1} type="audio/mp3" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
          <p><b><em>Oración en audio: español</em></b></p>
          <audio controls>
            <source src={audioEspanol1} type="audio/mp3" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
        </div>
      </div>

      {/*Fim - Oração 10 */}

      {/* =============== */}

      
      {/* Oração 11 */}
      <div className="container mx-auto p-4 md:p-8 border border-orange400 rounded-md flex flex-col md:flex-row items-center mt-8">
        <img
          src={img1}
          alt="Imagem"
          className="w-32 h-auto md:w-48 md:h-auto rounded mr-4 md:mr-8 mt-4 md:mt-0"
        />
        <div className="text-center md:text-left justify-center items-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Prece</h2>
          <p className="text-justify">
            Ó Deus, nosso Pai,

            Nós Te agradecemos por refrescar nossas almas após o calor da prova, expiação e sofrimento.

            Tu és o Deus da compaixão e do amor. Tu nos conheces e nos entendes. Tu sabes o que passamos e o que sentimos.

            No calor da prova, Tu nos deste forças para perseverar. No calor da expiação, Tu nos deste paz e consolo. No calor do sofrimento, Tu nos deste esperança e renovação.

            Graças a Ti, podemos descansar em Tuas promessas de amor e fidelidade. Podemos confiar em Tua justiça e misericórdia. Podemos saber que Tu estás conosco em todos os momentos, nos bons e nos maus.

            Ó Deus, refresca nossas almas com Tua presença. Dai-nos a Tua paz, a Tua alegria e a Tua esperança. Ajuda-nos a viver em Tua presença, todos os dias de nossas vidas.
            <br />
            <b>Prayer in English:</b>
            O God, our Father, We thank You for refreshing our souls after the heat of trial, atonement and suffering. You are the God of compassion and love. You know us and understand us. You know what we go through and what we feel. In the heat of the test, You gave us strength to persevere. In the heat of atonement, You gave us peace and comfort. In the heat of suffering, You gave us hope and renewal. Thanks to You, we can rest in Your promises of love and faithfulness. We can trust in Your justice and mercy. We can know that You are with us at all times, in the good and the bad. O God, refresh our souls with Your presence. Give us Your peace, Your joy and Your hope. Help us to live in Your presence, every day of our lives.
            <br />
            <b>Oración en español:</b>
            Oh Dios, Padre nuestro, Te damos gracias por refrescar nuestras almas después del calor de la prueba, la expiación y el sufrimiento. Eres el Dios de la compasión y el amor. Tú nos conoces y nos entiendes. Sabes lo que pasamos y lo que sentimos. En el fragor de la prueba, Tú nos diste fuerza para perseverar. En el calor de la expiación, nos diste paz y consuelo. En el calor del sufrimiento, nos diste esperanza y renovación. Gracias a Ti podemos descansar en Tus promesas de amor y fidelidad. Podemos confiar en Tu justicia y misericordia. Podemos saber que Tú estás con nosotros en todo momento, en las buenas y en las malas. Oh Dios, refresca nuestras almas con tu presencia. Danos tu paz, tu alegría y tu esperanza. Ayúdanos a vivir en Tu presencia, todos los días de nuestras vidas.
          </p>

          <p><b><em>Oração em áudio: Português</em></b></p>
          <audio controls>
            <source src={audioPortugues1} type="audio/mp3" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
          <p><b><em>Audio Prayer: English</em></b></p>
          <audio controls>
            <source src={audioEnglish1} type="audio/mp3" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
          <p><b><em>Oración en audio: español</em></b></p>
          <audio controls>
            <source src={audioEspanol1} type="audio/mp3" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
        </div>
      </div>

      {/*Fim - Oração 11 */}


      {/* ================= */}


      
      {/* Oração 12 */}
      <div className="container mx-auto p-4 md:p-8 border border-orange400 rounded-md flex flex-col md:flex-row items-center mt-8">
        <img
          src={img1}
          alt="Imagem"
          className="w-32 h-auto md:w-48 md:h-auto rounded mr-4 md:mr-8 mt-4 md:mt-0"
        />
        <div className="text-center md:text-left justify-center items-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Prece</h2>
          <p className="text-justify">
            Ó Deus, nosso Pai,

            Nós Te agradecemos por refrescar nossas almas após o calor da prova, expiação e sofrimento.

            Tu és o Deus da compaixão e do amor. Tu nos conheces e nos entendes. Tu sabes o que passamos e o que sentimos.

            No calor da prova, Tu nos deste forças para perseverar. No calor da expiação, Tu nos deste paz e consolo. No calor do sofrimento, Tu nos deste esperança e renovação.

            Graças a Ti, podemos descansar em Tuas promessas de amor e fidelidade. Podemos confiar em Tua justiça e misericórdia. Podemos saber que Tu estás conosco em todos os momentos, nos bons e nos maus.

            Ó Deus, refresca nossas almas com Tua presença. Dai-nos a Tua paz, a Tua alegria e a Tua esperança. Ajuda-nos a viver em Tua presença, todos os dias de nossas vidas.
            <br />
            <b>Prayer in English:</b>
            O God, our Father, We thank You for refreshing our souls after the heat of trial, atonement and suffering. You are the God of compassion and love. You know us and understand us. You know what we go through and what we feel. In the heat of the test, You gave us strength to persevere. In the heat of atonement, You gave us peace and comfort. In the heat of suffering, You gave us hope and renewal. Thanks to You, we can rest in Your promises of love and faithfulness. We can trust in Your justice and mercy. We can know that You are with us at all times, in the good and the bad. O God, refresh our souls with Your presence. Give us Your peace, Your joy and Your hope. Help us to live in Your presence, every day of our lives.
            <br />
            <b>Oración en español:</b>
            Oh Dios, Padre nuestro, Te damos gracias por refrescar nuestras almas después del calor de la prueba, la expiación y el sufrimiento. Eres el Dios de la compasión y el amor. Tú nos conoces y nos entiendes. Sabes lo que pasamos y lo que sentimos. En el fragor de la prueba, Tú nos diste fuerza para perseverar. En el calor de la expiación, nos diste paz y consuelo. En el calor del sufrimiento, nos diste esperanza y renovación. Gracias a Ti podemos descansar en Tus promesas de amor y fidelidad. Podemos confiar en Tu justicia y misericordia. Podemos saber que Tú estás con nosotros en todo momento, en las buenas y en las malas. Oh Dios, refresca nuestras almas con tu presencia. Danos tu paz, tu alegría y tu esperanza. Ayúdanos a vivir en Tu presencia, todos los días de nuestras vidas.
          </p>

          <p><b><em>Oração em áudio: Português</em></b></p>
          <audio controls>
            <source src={audioPortugues1} type="audio/mp3" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
          <p><b><em>Audio Prayer: English</em></b></p>
          <audio controls>
            <source src={audioEnglish1} type="audio/mp3" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
          <p><b><em>Oración en audio: español</em></b></p>
          <audio controls>
            <source src={audioEspanol1} type="audio/mp3" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
        </div>
      </div>

      {/*Fim - Oração 12 */}

      {/* ================= */}


      
      {/* Oração 13 */}
      <div className="container mx-auto p-4 md:p-8 border border-orange400 rounded-md flex flex-col md:flex-row items-center mt-8">
        <img
          src={img1}
          alt="Imagem"
          className="w-32 h-auto md:w-48 md:h-auto rounded mr-4 md:mr-8 mt-4 md:mt-0"
        />
        <div className="text-center md:text-left justify-center items-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Prece</h2>
          <p className="text-justify">
            Ó Deus, nosso Pai,

            Nós Te agradecemos por refrescar nossas almas após o calor da prova, expiação e sofrimento.

            Tu és o Deus da compaixão e do amor. Tu nos conheces e nos entendes. Tu sabes o que passamos e o que sentimos.

            No calor da prova, Tu nos deste forças para perseverar. No calor da expiação, Tu nos deste paz e consolo. No calor do sofrimento, Tu nos deste esperança e renovação.

            Graças a Ti, podemos descansar em Tuas promessas de amor e fidelidade. Podemos confiar em Tua justiça e misericórdia. Podemos saber que Tu estás conosco em todos os momentos, nos bons e nos maus.

            Ó Deus, refresca nossas almas com Tua presença. Dai-nos a Tua paz, a Tua alegria e a Tua esperança. Ajuda-nos a viver em Tua presença, todos os dias de nossas vidas.
            <br />
            <b>Prayer in English:</b>
            O God, our Father, We thank You for refreshing our souls after the heat of trial, atonement and suffering. You are the God of compassion and love. You know us and understand us. You know what we go through and what we feel. In the heat of the test, You gave us strength to persevere. In the heat of atonement, You gave us peace and comfort. In the heat of suffering, You gave us hope and renewal. Thanks to You, we can rest in Your promises of love and faithfulness. We can trust in Your justice and mercy. We can know that You are with us at all times, in the good and the bad. O God, refresh our souls with Your presence. Give us Your peace, Your joy and Your hope. Help us to live in Your presence, every day of our lives.
            <br />
            <b>Oración en español:</b>
            Oh Dios, Padre nuestro, Te damos gracias por refrescar nuestras almas después del calor de la prueba, la expiación y el sufrimiento. Eres el Dios de la compasión y el amor. Tú nos conoces y nos entiendes. Sabes lo que pasamos y lo que sentimos. En el fragor de la prueba, Tú nos diste fuerza para perseverar. En el calor de la expiación, nos diste paz y consuelo. En el calor del sufrimiento, nos diste esperanza y renovación. Gracias a Ti podemos descansar en Tus promesas de amor y fidelidad. Podemos confiar en Tu justicia y misericordia. Podemos saber que Tú estás con nosotros en todo momento, en las buenas y en las malas. Oh Dios, refresca nuestras almas con tu presencia. Danos tu paz, tu alegría y tu esperanza. Ayúdanos a vivir en Tu presencia, todos los días de nuestras vidas.
          </p>

          <p><b><em>Oração em áudio: Português</em></b></p>
          <audio controls>
            <source src={audioPortugues1} type="audio/mp3" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
          <p><b><em>Audio Prayer: English</em></b></p>
          <audio controls>
            <source src={audioEnglish1} type="audio/mp3" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
          <p><b><em>Oración en audio: español</em></b></p>
          <audio controls>
            <source src={audioEspanol1} type="audio/mp3" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
        </div>
      </div>

      {/*Fim - Oração 13 */}

      {/* ================ */}



      
      {/* Oração 14 */}
      <div className="container mx-auto p-4 md:p-8 border border-orange400 rounded-md flex flex-col md:flex-row items-center mt-8">
        <img
          src={img1}
          alt="Imagem"
          className="w-32 h-auto md:w-48 md:h-auto rounded mr-4 md:mr-8 mt-4 md:mt-0"
        />
        <div className="text-center md:text-left justify-center items-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Prece</h2>
          <p className="text-justify">
            Ó Deus, nosso Pai,

            Nós Te agradecemos por refrescar nossas almas após o calor da prova, expiação e sofrimento.

            Tu és o Deus da compaixão e do amor. Tu nos conheces e nos entendes. Tu sabes o que passamos e o que sentimos.

            No calor da prova, Tu nos deste forças para perseverar. No calor da expiação, Tu nos deste paz e consolo. No calor do sofrimento, Tu nos deste esperança e renovação.

            Graças a Ti, podemos descansar em Tuas promessas de amor e fidelidade. Podemos confiar em Tua justiça e misericórdia. Podemos saber que Tu estás conosco em todos os momentos, nos bons e nos maus.

            Ó Deus, refresca nossas almas com Tua presença. Dai-nos a Tua paz, a Tua alegria e a Tua esperança. Ajuda-nos a viver em Tua presença, todos os dias de nossas vidas.
            <br />
            <b>Prayer in English:</b>
            O God, our Father, We thank You for refreshing our souls after the heat of trial, atonement and suffering. You are the God of compassion and love. You know us and understand us. You know what we go through and what we feel. In the heat of the test, You gave us strength to persevere. In the heat of atonement, You gave us peace and comfort. In the heat of suffering, You gave us hope and renewal. Thanks to You, we can rest in Your promises of love and faithfulness. We can trust in Your justice and mercy. We can know that You are with us at all times, in the good and the bad. O God, refresh our souls with Your presence. Give us Your peace, Your joy and Your hope. Help us to live in Your presence, every day of our lives.
            <br />
            <b>Oración en español:</b>
            Oh Dios, Padre nuestro, Te damos gracias por refrescar nuestras almas después del calor de la prueba, la expiación y el sufrimiento. Eres el Dios de la compasión y el amor. Tú nos conoces y nos entiendes. Sabes lo que pasamos y lo que sentimos. En el fragor de la prueba, Tú nos diste fuerza para perseverar. En el calor de la expiación, nos diste paz y consuelo. En el calor del sufrimiento, nos diste esperanza y renovación. Gracias a Ti podemos descansar en Tus promesas de amor y fidelidad. Podemos confiar en Tu justicia y misericordia. Podemos saber que Tú estás con nosotros en todo momento, en las buenas y en las malas. Oh Dios, refresca nuestras almas con tu presencia. Danos tu paz, tu alegría y tu esperanza. Ayúdanos a vivir en Tu presencia, todos los días de nuestras vidas.
          </p>

          <p><b><em>Oração em áudio: Português</em></b></p>
          <audio controls>
            <source src={audioPortugues1} type="audio/mp3" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
          <p><b><em>Audio Prayer: English</em></b></p>
          <audio controls>
            <source src={audioEnglish1} type="audio/mp3" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
          <p><b><em>Oración en audio: español</em></b></p>
          <audio controls>
            <source src={audioEspanol1} type="audio/mp3" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
        </div>
      </div>

      {/*Fim - Oração 14 */}

      
      {/* Oração 15 */}
      <div className="container mx-auto p-4 md:p-8 border border-orange400 rounded-md flex flex-col md:flex-row items-center mt-8">
        <img
          src={img1}
          alt="Imagem"
          className="w-32 h-auto md:w-48 md:h-auto rounded mr-4 md:mr-8 mt-4 md:mt-0"
        />
        <div className="text-center md:text-left justify-center items-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Prece</h2>
          <p className="text-justify">
            Ó Deus, nosso Pai,

            Nós Te agradecemos por refrescar nossas almas após o calor da prova, expiação e sofrimento.

            Tu és o Deus da compaixão e do amor. Tu nos conheces e nos entendes. Tu sabes o que passamos e o que sentimos.

            No calor da prova, Tu nos deste forças para perseverar. No calor da expiação, Tu nos deste paz e consolo. No calor do sofrimento, Tu nos deste esperança e renovação.

            Graças a Ti, podemos descansar em Tuas promessas de amor e fidelidade. Podemos confiar em Tua justiça e misericórdia. Podemos saber que Tu estás conosco em todos os momentos, nos bons e nos maus.

            Ó Deus, refresca nossas almas com Tua presença. Dai-nos a Tua paz, a Tua alegria e a Tua esperança. Ajuda-nos a viver em Tua presença, todos os dias de nossas vidas.
            <br />
            <b>Prayer in English:</b>
            O God, our Father, We thank You for refreshing our souls after the heat of trial, atonement and suffering. You are the God of compassion and love. You know us and understand us. You know what we go through and what we feel. In the heat of the test, You gave us strength to persevere. In the heat of atonement, You gave us peace and comfort. In the heat of suffering, You gave us hope and renewal. Thanks to You, we can rest in Your promises of love and faithfulness. We can trust in Your justice and mercy. We can know that You are with us at all times, in the good and the bad. O God, refresh our souls with Your presence. Give us Your peace, Your joy and Your hope. Help us to live in Your presence, every day of our lives.
            <br />
            <b>Oración en español:</b>
            Oh Dios, Padre nuestro, Te damos gracias por refrescar nuestras almas después del calor de la prueba, la expiación y el sufrimiento. Eres el Dios de la compasión y el amor. Tú nos conoces y nos entiendes. Sabes lo que pasamos y lo que sentimos. En el fragor de la prueba, Tú nos diste fuerza para perseverar. En el calor de la expiación, nos diste paz y consuelo. En el calor del sufrimiento, nos diste esperanza y renovación. Gracias a Ti podemos descansar en Tus promesas de amor y fidelidad. Podemos confiar en Tu justicia y misericordia. Podemos saber que Tú estás con nosotros en todo momento, en las buenas y en las malas. Oh Dios, refresca nuestras almas con tu presencia. Danos tu paz, tu alegría y tu esperanza. Ayúdanos a vivir en Tu presencia, todos los días de nuestras vidas.
          </p>

          <p><b><em>Oração em áudio: Português</em></b></p>
          <audio controls>
            <source src={audioPortugues1} type="audio/mp3" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
          <p><b><em>Audio Prayer: English</em></b></p>
          <audio controls>
            <source src={audioEnglish1} type="audio/mp3" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
          <p><b><em>Oración en audio: español</em></b></p>
          <audio controls>
            <source src={audioEspanol1} type="audio/mp3" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
        </div>
      </div>

      {/*Fim - Oração 15 */}


      
      {/* Oração 16 */}
      <div className="container mx-auto p-4 md:p-8 border border-orange400 rounded-md flex flex-col md:flex-row items-center mt-8">
        <img
          src={img1}
          alt="Imagem"
          className="w-32 h-auto md:w-48 md:h-auto rounded mr-4 md:mr-8 mt-4 md:mt-0"
        />
        <div className="text-center md:text-left justify-center items-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Prece</h2>
          <p className="text-justify">
            Ó Deus, nosso Pai,

            Nós Te agradecemos por refrescar nossas almas após o calor da prova, expiação e sofrimento.

            Tu és o Deus da compaixão e do amor. Tu nos conheces e nos entendes. Tu sabes o que passamos e o que sentimos.

            No calor da prova, Tu nos deste forças para perseverar. No calor da expiação, Tu nos deste paz e consolo. No calor do sofrimento, Tu nos deste esperança e renovação.

            Graças a Ti, podemos descansar em Tuas promessas de amor e fidelidade. Podemos confiar em Tua justiça e misericórdia. Podemos saber que Tu estás conosco em todos os momentos, nos bons e nos maus.

            Ó Deus, refresca nossas almas com Tua presença. Dai-nos a Tua paz, a Tua alegria e a Tua esperança. Ajuda-nos a viver em Tua presença, todos os dias de nossas vidas.
            <br />
            <b>Prayer in English:</b>
            O God, our Father, We thank You for refreshing our souls after the heat of trial, atonement and suffering. You are the God of compassion and love. You know us and understand us. You know what we go through and what we feel. In the heat of the test, You gave us strength to persevere. In the heat of atonement, You gave us peace and comfort. In the heat of suffering, You gave us hope and renewal. Thanks to You, we can rest in Your promises of love and faithfulness. We can trust in Your justice and mercy. We can know that You are with us at all times, in the good and the bad. O God, refresh our souls with Your presence. Give us Your peace, Your joy and Your hope. Help us to live in Your presence, every day of our lives.
            <br />
            <b>Oración en español:</b>
            Oh Dios, Padre nuestro, Te damos gracias por refrescar nuestras almas después del calor de la prueba, la expiación y el sufrimiento. Eres el Dios de la compasión y el amor. Tú nos conoces y nos entiendes. Sabes lo que pasamos y lo que sentimos. En el fragor de la prueba, Tú nos diste fuerza para perseverar. En el calor de la expiación, nos diste paz y consuelo. En el calor del sufrimiento, nos diste esperanza y renovación. Gracias a Ti podemos descansar en Tus promesas de amor y fidelidad. Podemos confiar en Tu justicia y misericordia. Podemos saber que Tú estás con nosotros en todo momento, en las buenas y en las malas. Oh Dios, refresca nuestras almas con tu presencia. Danos tu paz, tu alegría y tu esperanza. Ayúdanos a vivir en Tu presencia, todos los días de nuestras vidas.
          </p>

          <p><b><em>Oração em áudio: Português</em></b></p>
          <audio controls>
            <source src={audioPortugues1} type="audio/mp3" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
          <p><b><em>Audio Prayer: English</em></b></p>
          <audio controls>
            <source src={audioEnglish1} type="audio/mp3" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
          <p><b><em>Oración en audio: español</em></b></p>
          <audio controls>
            <source src={audioEspanol1} type="audio/mp3" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
        </div>
      </div>

      {/*Fim - Oração 16 */}
      <Footer />
    </div>
  );
}
