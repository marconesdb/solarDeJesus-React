import React from 'react';
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import img1 from '../DoutrinaEspirita/img-oracoes/IMG-1.png';
import img2 from '../DoutrinaEspirita/img-oracoes/IMG-2.png'
import img3 from '../DoutrinaEspirita/img-oracoes/IMG-3.png'
import img4 from '../DoutrinaEspirita/img-oracoes/IMG-4.png'
import img5 from '../DoutrinaEspirita/img-oracoes/IMG-5.png'
import img6 from '../DoutrinaEspirita/img-oracoes/IMG-6.png'
import img7 from '../DoutrinaEspirita/img-oracoes/IMG-7.png'
import img8 from '../DoutrinaEspirita/img-oracoes/IMG-8.png'
import img9 from '../DoutrinaEspirita/img-oracoes/IMG-9.png'
import img10 from '../DoutrinaEspirita/img-oracoes/IMG-10.png'
import img11 from '../DoutrinaEspirita/img-oracoes/IMG-11.png';
import img12 from '../DoutrinaEspirita/img-oracoes/IMG-12.png'
import img13 from '../DoutrinaEspirita/img-oracoes/IMG-13.png'
import img14 from '../DoutrinaEspirita/img-oracoes/IMG-14.png'
import img15 from '../DoutrinaEspirita/img-oracoes/IMG-15.png'
import img16 from '../DoutrinaEspirita/img-oracoes/IMG-16.png'
import img17 from '../DoutrinaEspirita/img-oracoes/IMG-17.png'
import img18 from '../DoutrinaEspirita/img-oracoes/IMG-18.png'
import img19 from '../DoutrinaEspirita/img-oracoes/IMG-19.png'
import img20 from '../DoutrinaEspirita/img-oracoes/IMG-20.png'
import img21 from '../DoutrinaEspirita/img-oracoes/IMG-21.png'
import img22 from '../DoutrinaEspirita/img-oracoes/IMG-22.png'
import img23 from '../DoutrinaEspirita/img-oracoes/IMG-23.png'
import img24 from '../DoutrinaEspirita/img-oracoes/IMG-24.png'



import audioPortugues1 from './Audio-Orações/Ó Deus, nosso Pai.mp3';
import audioEnglish1 from './Audio-Orações/O God, our Father.mp3';
import audioEspanol1 from './Audio-Orações/Oh Dios, Padre nuestro.mp3';
import audioEnglish2 from './Audio-Orações/O Great Creator of the Universe.mp3';
import audioEspanol2 from './Audio-Orações/Oh Gran Creador del Universo.mp3';

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
          src={img2}
          alt="Imagem"
          className="w-32 h-auto md:w-48 md:h-auto rounded mr-4 md:mr-8 mt-4 md:mt-0"
        />
        <div className="text-center md:text-left justify-center items-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Prece</h2>
          <p className="text-justify">
          Ó Grande Criador do Universo,

          hoje, em humildade, voltamos nossos corações para Ti, reconhecendo Tua grandiosidade e amor infinito. Pedimos que guies cada passo de nossas vidas, entendendo as necessidades únicas de cada filho Teu neste vasto mundo.

          Para aqueles que enfrentam desafios financeiros, pedimos Tua provisão generosa, para que a abundância possa fluir em suas vidas e as preocupações financeiras se dissipem como a névoa ao amanhecer.

          Aos que enfrentam dificuldades na saúde, imploramos Tua cura compassiva, para que sintam Teu toque restaurador e encontrem conforto nos momentos de dor.

          Para os que estão perdidos na escuridão da solidão, pedimos Tua presença calorosa, para que sintam Teu amor envolvendo-os e trazendo-lhes consolo.

          Aos que buscam sabedoria, conceda-lhes discernimento em suas escolhas, iluminando o caminho à frente e guiando-os nas decisões que moldarão seus destinos.

          Para aqueles que lutam por paz interior, ofereça-lhes tranquilidade em meio à agitação do mundo, permitindo que encontrem serenidade em Tua graça.

          Aos que enfrentam desafios familiares, derrama Tua bênção sobre seus lares, promovendo a compreensão, o perdão e o amor incondicional entre os entes queridos.

          Senhor, conheces os anseios secretos de cada coração, e confiamos que, através de Tua misericórdia, atenderás a cada necessidade única.

          Que Tua luz divina brilhe sobre todos os cantos da Terra, unindo-nos em compaixão e solidariedade. Fortaleça-nos para enfrentar os desafios diários e inspire-nos a sermos instrumentos de Tua paz e amor neste mundo.

          Em Teu nome, oramos, confiantes de que Tu és a fonte de todo bem e que, em Tua infinita sabedoria, atenderás às preces daqueles que buscam Teu auxílio.
            <br />
            <b>Prayer in English:</b>
            O Great Creator of the Universe, Today, in humility, we turn our hearts to You, recognizing Your greatness and infinite love. We ask that You guide each step of our lives, understanding the unique needs of each of Your children in this vast world. For those facing financial challenges, we ask for Your generous provision so that abundance can flow into their lives and financial worries dissipate like mist at dawn. To those who face health difficulties, we implore Your compassionate healing, so that they may feel Your restorative touch and find comfort in times of pain. For those who are lost in the darkness of loneliness, we ask for Your warm presence, so that they may feel Your love enveloping them and bringing them comfort. To those who seek wisdom, grant them discernment in their choices, illuminating the path ahead and guiding them in the decisions that will shape their destinies. For those who struggle for inner peace, offer them tranquility amidst the hustle and bustle of the world, allowing them to find serenity in Your grace. To those facing family challenges, pour Your blessing upon their homes, promoting understanding, forgiveness and unconditional love among loved ones. Lord, You know the secret longings of every heart, and we trust that through Your mercy You will meet each unique need. May Your divine light shine upon every corner of the Earth, uniting us in compassion and solidarity. Strengthen us to face daily challenges and inspire us to be instruments of Your peace and love in this world. In Your name, we pray, confident that You are the source of all good and that, in Your infinite wisdom, You will answer the prayers of those who seek Your help.
          </p>
            <b>Oración en español:</b>
            <p>Oh Gran Creador del Universo, Hoy, con humildad, volvemos nuestro corazón hacia Ti, reconociendo Tu grandeza y tu infinito amor. Te pedimos que guíes cada paso de nuestras vidas, entendiendo las necesidades únicas de cada uno de Tus hijos en este vasto mundo. Para aquellos que enfrentan desafíos financieros, te pedimos Tu generosa provisión para que la abundancia pueda fluir en sus vidas y las preocupaciones financieras se disipen como la niebla al amanecer. A aquellos que enfrentan dificultades de salud, imploramos Tu sanación compasiva, para que puedan sentir Tu toque restaurador y encontrar consuelo en momentos de dolor. Por aquellos que están perdidos en la oscuridad de la soledad, te pedimos Tu cálida presencia, para que sientan Tu amor envolviéndolos y brindándoles consuelo. A quienes buscan sabiduría, concédeles discernimiento en sus elecciones, iluminando el camino a seguir y guiándolos en las decisiones que moldearán sus destinos. Para aquellos que luchan por la paz interior, ofréceles tranquilidad en medio del ajetreo del mundo, permitiéndoles encontrar la serenidad en Tu gracia. A quienes enfrentan desafíos familiares, derrama Tu bendición sobre sus hogares, promoviendo la comprensión, el perdón y el amor incondicional entre sus seres queridos. Señor, Tú conoces los anhelos secretos de cada corazón y confiamos en que a través de Tu misericordia satisfarás cada necesidad única. Que Tu luz divina brille sobre cada rincón de la Tierra, uniéndonos en compasión y solidaridad. Fortalécenos para enfrentar los desafíos diarios e inspíranos a ser instrumentos de Tu paz y amor en este mundo. En Tu nombre oramos, confiados en que Tú eres la fuente de todo bien y que, en Tu infinita sabiduría, responderás las oraciones de quienes buscan Tu ayuda.
          </p>

          <p><b><em>Oração em áudio: Português</em></b></p>
          <audio controls>
            <source src={audioPortugues1} type="audio/mp3" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
          <p><b><em>Audio Prayer: English</em></b></p>
          <audio controls>
            <source src={audioEnglish2} type="audio/mp3" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
          <p><b><em>Oración en audio: español</em></b></p>
          <audio controls>
            <source src={audioEspanol2} type="audio/mp3" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
        </div>
      </div>

      {/*Fim - Oração 2 */}

      {/* ======== */}


      {/* Oração 3 */}
      <div className="container mx-auto p-4 md:p-8 border border-orange400 rounded-md flex flex-col md:flex-row items-center mt-8">
        <img
          src={img3}
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
          src={img4}
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
          src={img5}
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
          src={img6}
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
          src={img7}
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
          src={img8}
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
          src={img9}
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
          src={img10}
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
          src={img11}
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
          src={img12}
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
          src={img13}
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
          src={img14}
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
          src={img15}
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
          src={img16}
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


      
      {/* Oração 17 */}
      <div className="container mx-auto p-4 md:p-8 border border-orange400 rounded-md flex flex-col md:flex-row items-center mt-8">
        <img
          src={img17}
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

      {/*Fim - Oração 17 */}


      
      {/* Oração 18 */}
      <div className="container mx-auto p-4 md:p-8 border border-orange400 rounded-md flex flex-col md:flex-row items-center mt-8">
        <img
          src={img18}
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

      {/*Fim - Oração 18 */}


      
      {/* Oração 19 */}
      <div className="container mx-auto p-4 md:p-8 border border-orange400 rounded-md flex flex-col md:flex-row items-center mt-8">
        <img
          src={img19}
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

      {/*Fim - Oração 19 */}


      
      {/* Oração 20 */}
      <div className="container mx-auto p-4 md:p-8 border border-orange400 rounded-md flex flex-col md:flex-row items-center mt-8">
        <img
          src={img20}
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

      {/*Fim - Oração 20 */}


      
      {/* Oração 21 */}
      <div className="container mx-auto p-4 md:p-8 border border-orange400 rounded-md flex flex-col md:flex-row items-center mt-8">
        <img
          src={img21}
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

      {/*Fim - Oração 21 */}


      {/* Oração 22 */}
      <div className="container mx-auto p-4 md:p-8 border border-orange400 rounded-md flex flex-col md:flex-row items-center mt-8">
        <img
          src={img22}
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

      {/*Fim - Oração 22 */}



      {/* Oração 23 */}
      <div className="container mx-auto p-4 md:p-8 border border-orange400 rounded-md flex flex-col md:flex-row items-center mt-8">
        <img
          src={img23}
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

      {/*Fim - Oração 23 */}


      
      {/* Oração 24 */}
      <div className="container mx-auto p-4 md:p-8 border border-orange400 rounded-md flex flex-col md:flex-row items-center mt-8">
        <img
          src={img24}
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

      {/*Fim - Oração 24 */}

      <Footer />
    </div>
  );
}
