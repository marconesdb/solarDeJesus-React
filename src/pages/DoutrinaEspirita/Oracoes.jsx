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
import audioEspanol18 from './Audio-Orações/Oración de Esperanza.mp3';
import audioEnglish18 from './Audio-Orações/Prayer of Hope.mp3';
import audioEspanol17 from './Audio-Orações/Oración por los Niños del Mundo-Espanhol.mp3';
import audioEnglish17 from './Audio-Orações/Prayer for the Children of the World - Inglês.mp3';
import audioEspanol19 from './Audio-Orações/Oración por el cultivo del amor.mp3';
import audioEnglish19 from './Audio-Orações/Prayer for the Cultivation of Love.mp3';
import audioEspanol20 from './Audio-Orações/Oración para que el hombre orgulloso supere sus prejuicios.mp3';
import audioEnglish20 from './Audio-Orações/Prayer for the proud man to overcome his prejudices.mp3';
import audioEspanol21 from './Audio-Orações/Oración por un rayo de luz en el mundo-Espanhol.mp3';
import audioEnglish21 from './Audio-Orações/Prayer for a ray of light in the world-Inglês.mp3';
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
           Oração da Esperança

          Deus de esperança, Em um mundo cheio de incertezas, Nós te buscamos.

          Nos dá esperança para o futuro, Força para enfrentar os desafios, E paz para nossos corações.

          Ajuda-nos a ver o bem em cada pessoa, A encontrar beleza no mundo, E a viver com fé e alegria.

          Esta oração é uma forma de expressarmos nossa esperança no futuro. Pedimos a Deus que nos dê força para enfrentar os desafios, paz para nossos corações, e a capacidade de ver o bem em cada pessoa.

          É claro que existem muitas outras maneiras de escrever uma oração dominical. A melhor maneira é encontrar uma oração que expresse sua própria fé e esperança.
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
           <b>Oração pelas Crianças do Mundo</b><br />

          Deus Pai, Nós te louvamos e te agradecemos pelo dom da vida.

          Nós te pedimos por todas as crianças do mundo. Abençoa-as com tua paz, teu amor e tua proteção.

          Guarda-as do mal e da violência. Dá-lhes pais amorosos e responsáveis.

          Dá-lhes professores e educadores que as ajudem a crescer e aprender. Dá-lhes amigos que as amem e as aceitem como são.

          Dá-lhes saúde, alegria e esperança. Que elas possam crescer em sabedoria e graça, E que um dia possam conhecer o teu amor infinito. Amém! 
            <br />

            <b>Prayer in English:</b><br />
            <b>Prayer for the Children of the World</b><br />

            Father God, We praise you and thank you for the gift of life. We ask you for all the children in the world. Bless them with your peace, your love and your protection. Keep them from evil and violence. Give them loving and responsible parents. Give them teachers and educators to help them grow and learn. Give them friends who love and accept them as they are. Give them health, joy and hope. May they grow in wisdom and grace, And may they one day know your infinite love. Amen! 
          </p>
            <b>Oración en español:</b><br />
           

            <p>
               <b>Oración por los niños del mundo:</b><br />

            Padre Dios, te alabamos y te damos gracias por el don de la vida. Te lo pedimos por todos los niños del mundo. Bendícelos con tu paz, tu amor y tu protección. Guárdalos del mal y de la violencia. Dales padres amorosos y responsables. Bríndeles maestros y educadores que los ayuden a crecer y aprender. Dales amigos que los amen y los acepten tal como son. Dales salud, alegría y esperanza. Que crezcan en sabiduría y gracia, y que algún día conozcan tu infinito amor. ¡Amén!  
          </p>

          <p><b><em>Oração em áudio: Português</em></b></p>
          <audio controls>
            <source src={audioPortugues1} type="audio/mp3" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
          <p><b><em>Audio Prayer: English</em></b></p>
          <audio controls>
            <source src={audioEnglish17} type="audio/mp3" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
          <p><b><em>Oración en audio: español</em></b></p>
          <audio controls>
            <source src={audioEspanol17} type="audio/mp3" />
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
              <b>Oração da Esperança</b> <br />

          Deus de esperança, Em um mundo cheio de incertezas, Nós te buscamos.

          Nos dá esperança para o futuro, Força para enfrentar os desafios, E paz para nossos corações.

          Ajuda-nos a ver o bem em cada pessoa, A encontrar beleza no mundo, E a viver com fé e alegria.

          Esta oração é uma forma de expressarmos nossa esperança no futuro. Pedimos a Deus que nos dê força para enfrentar os desafios, paz para nossos corações, e a capacidade de ver o bem em cada pessoa.

          É claro que existem muitas outras maneiras de escrever uma oração dominical. A melhor maneira é encontrar uma oração que expresse sua própria fé e esperança.
            <br />
            <b>Prayer in English:</b> <br />
             <b>Prayer of Hope</b> <br />
          God of hope, In a world full of uncertainty, We seek you. It gives us hope for the future, Strength to face challenges, And peace for our hearts. Help us to see the good in every person, To find beauty in the world, And to live with faith and joy. This prayer is a way of expressing our hope for the future. We ask God to give us strength to face challenges, peace in our hearts, and the ability to see the good in each person. Of course, there are many other ways to write a Sunday prayer. The best way is to find a prayer that expresses your own faith and hope. 
            <br />
          <b>Oración en español:</b> <br />
          <b>Oración de esperanza</b> <br />
          Dios de esperanza, En un mundo lleno de incertidumbre, Te buscamos. Nos da esperanza para el futuro, fuerza para afrontar los desafíos y paz para nuestros corazones. Ayúdanos a ver el bien en cada persona, a encontrar la belleza en el mundo y a vivir con fe y alegría. Esta oración es una manera de expresar nuestra esperanza para el futuro. Le pedimos a Dios que nos dé fuerza para enfrentar los desafíos, paz en nuestro corazón y la capacidad de ver el bien en cada persona. Por supuesto, hay muchas otras formas de escribir una oración dominical. La mejor manera es encontrar una oración que exprese su propia fe y esperanza. 
          </p>

          <p><b><em>Oração em áudio: Português</em></b></p>
          <audio controls>
            <source src={audioPortugues1} type="audio/mp3" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
          <p><b><em>Audio Prayer: English</em></b></p>
          <audio controls>
            <source src={audioEnglish18} type="audio/mp3" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
          <p><b><em>Oración en audio: español</em></b></p>
          <audio controls>
            <source src={audioEspanol18} type="audio/mp3" />
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
              <b>Oração para o cultivo do Amor</b><br />

          Ó Deus, fonte de todo amor, Venho a Ti hoje para pedir a Tua ajuda para cultivar o amor em minha vida.

          Sei que o amor é o caminho para a paz e a felicidade, E eu quero viver uma vida cheia de amor.

          Ajude-me a ser mais compassivo e gentil com os outros, A perdoar aqueles que me feriram, E a ver o bem em todos.

          Dê-me a força para superar os meus medos e preconceitos, E para construir pontes de entendimento com aqueles que são diferentes de mim.

          Ajude-me a ser um instrumento do Teu amor no mundo, E a fazer a diferença na vida das pessoas. Em nome de Jesus, Amém.

          Reflexão: O amor é uma força poderosa que pode transformar o mundo. Quando cultivamos o amor em nossas vidas, estamos contribuindo para a criação de um mundo mais pacífico e harmonioso.

          Esta oração pode nos ajudar a lembrar da importância do amor e a buscar maneiras de cultivá-lo em nossas vidas. Aqui estão algumas ideias específicas para cultivar o amor:

          Seja gentil e atencioso com as pessoas ao seu redor. Perdoe aqueles que o machucaram. Veja o bem em todos, mesmo nas pessoas que são diferentes de você.

          Seja um instrumento de paz e reconciliação no mundo. O amor é uma escolha,mas é uma escolha que vale a pena fazer. 

            <br />
            <b>Prayer in English:</b><br />
            <b>Prayer for the cultivation of Love</b><br />
             O God, source of all love, I come to You today to ask for Your help in cultivating love in my life. I know that love is the path to peace and happiness, and I want to live a life full of love. Help me to be more compassionate and kind to others, To forgive those who have hurt me, And to see the good in everyone. Give me the strength to overcome my fears and prejudices, And to build bridges of understanding with those who are different from me. Help me to be an instrument of Your love in the world, And to make a difference in people's lives. In the name of Jesus, Amen. Reflection: Love is a powerful force that can transform the world. When we cultivate love in our lives, we are contributing to the creation of a more peaceful and harmonious world. This prayer can help us remember the importance of love and look for ways to cultivate it in our lives. Here are some specific ideas for cultivating love: Be kind and considerate to the people around you. Forgive those who hurt you. See the good in everyone, even in people who are different from you. Be an instrument of peace and reconciliation in the world. Love is a choice, but it's a choice worth making. 
            <br />
            <b>Oración en español:</b><br />
                <b>Oración por el cultivo del Amor</b><br />

            Oh Dios, fuente de todo amor, hoy vengo a Ti para pedirte ayuda para cultivar el amor en mi vida. Sé que el amor es el camino hacia la paz y la felicidad y quiero vivir una vida llena de amor. Ayúdame a ser más compasivo y amable con los demás, a perdonar a quienes me han herido y a ver el bien en todos. Dame la fuerza para superar mis miedos y prejuicios, y para tender puentes de entendimiento con quienes son diferentes a mí. Ayúdame a ser un instrumento de Tu amor en el mundo y a marcar una diferencia en la vida de las personas. En el nombre de Jesús, Amén.
            Reflexión: El amor es una fuerza poderosa que puede transformar el mundo. Cuando cultivamos el amor en nuestras vidas, estamos contribuyendo a la creación de un mundo más pacífico y armonioso.

            Esta oración puede ayudarnos a recordar la importancia del amor y buscar formas de cultivarlo en nuestras vidas. Aquí hay algunas ideas específicas para cultivar el amor: Sea amable y considerado con las personas que le rodean. Perdona a quienes te lastimaron. Ve lo bueno en todos, incluso en las personas que son diferentes a ti. Ser un instrumento de paz y reconciliación en el mundo. El amor es una elección, pero vale la pena tomarla. 
          </p>

          <p><b><em>Oração em áudio: Português</em></b></p>
          <audio controls>
            <source src={audioPortugues1} type="audio/mp3" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
          <p><b><em>Audio Prayer: English</em></b></p>
          <audio controls>
            <source src={audioEnglish19} type="audio/mp3" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
          <p><b><em>Oración en audio: español</em></b></p>
          <audio controls>
            <source src={audioEspanol19} type="audio/mp3" />
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
            <b>Oração para o homem orgulhoso superar seus preconceitos</b><br />

            Pai Celestial, Eu venho a Ti, humildemente, Pedir-te que me ajude a superar meus preconceitos.

            Sei que sou um homem orgulhoso, E que isso me impede de ver o mundo com clareza. Eu julgo as pessoas pelas suas aparências, E não pelas suas ações.

            Eu me sinto superior aos outros, E isso me leva a tratar as pessoas com desdém. Eu sei que isso é errado, E eu quero mudar.

            Peço-te que me ajude a ser mais humilde, A ver o mundo com o coração, E a tratar as pessoas com respeito. Ensina-me a amar meus inimigos, E a perdoar aqueles que me ofenderam.

            Dá-me a força para quebrar as minhas barreiras, E para construir um mundo mais justo e fraterno. Amém.

            (Pode-se acrescentar uma súplica específica, por exemplo, pela ajuda a superar o preconceito contra uma determinada raça, etnia, religião, orientação sexual, etc.) 

             <br />
             <b>Oração pessoal:</b> Ó Deus, Eu quero ser um homem melhor.

            Quero ser um homem que ama e respeita a todos, Independentemente de suas diferenças. Dai-me a força para superar meus preconceitos, E para construir um mundo mais justo e fraterno. Amém.

            Essa oração é uma forma de o homem orgulhoso reconhecer seu erro e pedir ajuda a Deus para mudar. Ela começa com uma súplica humilde, pedindo a Deus que o ajude a superar seu orgulho.

            Em seguida, ela reconhece os erros do homem orgulhoso, como julgar as pessoas pelas aparências, sentir-se superior aos outros e tratar as pessoas com desdém. A oração termina com um pedido de ajuda a Deus para ser mais humilde, amar os inimigos e perdoar aqueles que o ofenderam.

            É importante que a oração seja feita com sinceridade e humildade. O homem orgulhoso deve estar disposto a reconhecer seus erros e pedir a ajuda de Deus para mudar.

            <br />
            <b>Prayer in English:</b><br />
             <b>Prayer for the proud man to overcome his prejudices</b> <br />

            Heavenly Father, I come to You, humbly, Asking you to help me overcome my prejudices.

            I know I'm a proud man, And that prevents me from seeing the world clearly. I judge people by their appearances, And not because of your actions.

            I feel superior to others, And that leads me to treat people with disdain. I know this is wrong, And I want to change.

            I ask you to help me to be more humble, Seeing the world with the heart, And treating people with respect. Teach me to love my enemies, And to forgive those who offended me.

            Give me the strength to break my barriers, And to build a more just and fraternal world. Amen.

            (You can add a specific prayer, for example, for help in overcoming prejudice against a certain race, ethnicity, religion, sexual orientation, etc.)

            <br /><b>Personal prayer:</b><br /> O God, I want to be a better man.

            I want to be a man who loves and respects everyone, Regardless of their differences. Give me the strength to overcome my prejudices, And to build a more just and fraternal world. Amen.

            This prayer is a way for a proud man to recognize his mistake and ask God for help to change. She begins with a humble plea, asking God to help him overcome his pride.

            Next, she acknowledges the mistakes of the proud man, such as judging people by appearances, feeling superior to others, and treat people with disdain. The prayer ends with a request to God for help to be more humble, love your enemies and forgive those who offend you.

            It is important that prayer is done with sincerity and humility. A proud man must be willing to recognize his mistakes and ask God for help to change.
            <br />
            <b>Oración en español:</b><br />
             <b>Oración para que el hombre orgulloso supere sus prejuicios</b><br />

            Padre celestial, A Ti vengo, humildemente, Pidiéndote que me ayudes a superar mis prejuicios.

            Sé que soy un hombre orgulloso, Y eso me impide ver el mundo con claridad. Juzgo a las personas por sus apariencias, Y no por tus acciones.

            Me siento superior a los demás, Y eso me lleva a tratar a la gente con desdén. Sé que esto está mal Y quiero cambiar.

            Te pido que me ayudes a ser más humilde, Ver el mundo con el corazón, Y tratar a las personas con respeto. Enséñame a amar a mis enemigos, Y perdonar a los que me ofendieron.

            Dame la fuerza para romper mis barreras, Y para construir un mundo más justo y fraterno. Amén.

            (Puedes añadir una oración específica, por ejemplo, pidiendo ayuda para superar los prejuicios contra una determinada raza, etnia, religión, orientación sexual, etc.)

            <br /><b>Oración personal:</b><br /> Oh Dios, Quiero ser un mejor hombre.

            Quiero ser un hombre que ame y respete a todos, Independientemente de sus diferencias. Dame la fuerza para superar mis prejuicios, Y para construir un mundo más justo y fraterno. Amén.

            Esta oración es una manera para que un hombre orgulloso reconozca su error y pida ayuda a Dios para cambiar. Comienza con una humilde súplica, pidiendo a Dios que le ayude a superar su orgullo.

            A continuación, reconoce los errores del hombre orgulloso, como juzgar a las personas por las apariencias, sentirse superior a los demás y tratar a las personas con desdén. La oración termina con una petición a Dios de ayuda para ser más humilde, amar a tus enemigos y perdonar a quienes te ofenden.

            Es importante que la oración se haga con sinceridad y humildad. Un hombre orgulloso debe estar dispuesto a reconocer sus errores y pedir ayuda a Dios para cambiar.
          </p>

          <p><b><em>Oração em áudio: Português</em></b></p>
          <audio controls>
            <source src={audioPortugues1} type="audio/mp3" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
          <p><b><em>Audio Prayer: English</em></b></p>
          <audio controls>
            <source src={audioEnglish20} type="audio/mp3" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
          <p><b><em>Oración en audio: español</em></b></p>
          <audio controls>
            <source src={audioEspanol20} type="audio/mp3" />
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
            <b>Oração para uma réstia de luz no mundo</b><br />

          Oh, Deus, Em um mundo de escuridão, Peço-te uma réstia de luz.

          Uma luz que ilumine os nossos caminhos, Que nos guie na escuridão, Que nos dê esperança.

          Que esta luz seja uma fonte de amor, De paz, de justiça, De bondade.

          Que ela possa tocar os corações das pessoas, E transformar o mundo.

          Que esta luz seja um sinal de que o bem ainda existe, Que a esperança ainda é possível, Que o amor ainda vence.

          Oh, Deus, Envia-nos uma réstia de luz, Para que possamos construir um mundo melhor. Amém ! 
            <br />
            <b>Prayer in English:</b><br />
          <b>Prayer for a ray of light in the world</b><br />

          Oh God, In a world of darkness, I ask you for a ray of light.

          A light that illuminates our paths, May it guide us in the darkness, May it give us hope.

          May this light be a source of love, Of peace, of justice, Of kindness.

          May she touch people's hearts, And transform the world.

          May this light be a sign that good still exists, That hope is still possible, That love still wins.

          Oh God, Send us a ray of light, So that we can build a better world. Amen ! 
            <br />
            <b>Oración en español:</b><br />
          <b>Oración por un rayo de luz en el mundo</b><br />

          Oh Dios, En un mundo de oscuridad, Te pido un rayo de luz.

          Una luz que ilumina nuestros caminos, Que nos guíe en la oscuridad, Que nos dé esperanza.

          Que esta luz sea fuente de amor, De paz, de justicia, De bondad.

          Que ella toque el corazón de la gente, Y transformar el mundo.

          Que esta luz sea señal de que el bien aún existe, Esa esperanza todavía es posible, Ese amor todavía gana.

          Oh Dios, Envíanos un rayo de luz, Para que podamos construir un mundo mejor. Amén ! 
          </p>

          <p><b><em>Oração em áudio: Português</em></b></p>
          <audio controls>
            <source src={audioPortugues1} type="audio/mp3" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
          <p><b><em>Audio Prayer: English</em></b></p>
          <audio controls>
            <source src={audioEnglish21} type="audio/mp3" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
          <p><b><em>Oración en audio: español</em></b></p>
          <audio controls>
            <source src={audioEspanol21} type="audio/mp3" />
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
