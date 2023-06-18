import React from 'react';
import Link from 'next/link';

const WhitePaperSection = () => {

  const whitePaperData = [
    {
      title: 'NFTs y Coleccionables:',
      description: `Las Esferas del Dragón serán los primeros NFTs disponibles y se subastarán cada 24 horas en la plataforma.\n
      Los usuarios que obtengan las 7 Esferas del Dragón podrán reclamar premios especiales en forma de NFTs de la saga.
      `,
    },
    {
      title: 'Juego de Farmeo y Competencia entre Universos:',
      description: `Los usuarios pueden participar en un emocionante juego de farmeo en busca de las Super Esferas del Dragón.\n
      Cada universo se enfrentará a enemigos desafiantes y el tiempo de derrota dependerá del poder de batalla de los NFTs.\n
      El universo ganador recibirá un premio especial y los recursos acumulados de la temporada serán distribuidos entre los mejores guerreros.
      `,
    },
    {
      title: 'Participación de la Comunidad:',
      description: `La comunidad puede contribuir con sugerencias y mejoras para el sistema de farmeo y otros aspectos del proyecto.\n
      Los aportes de la comunidad serán considerados para realizar cambios favorables en cada temporada del juego.
      `,
    },
    {
      title: 'Enfoque en la Colección y la Comunidad:',
      description: `El proyecto se centra en el aspecto de colección y en unir a la comunidad global de fanáticos de Dragon Ball.\n
      Se fomentan dinámicas de intercambio, juegos, sorteos, eventos y otras actividades para fortalecer la comunidad.\n
      En resumen, Dragon Ball Collection es un proyecto de criptomoneda basado en la historia de Dragon Ball. A través de NFTs, token, subastas de NFTs, juegos  y la participación activa de la comunidad, buscamos unir a los fanáticos de Dragon Ball a nivel mundial y crear una experiencia única y emocionante.
      
      `,
    }
  ]
  return (
    <section className="py-10">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className="text-3xl font-bold text-center mb-4 text-white">Resumen</h1>
    {whitePaperData.map((containerIndex, index) => (
      <div key={index}>
        <h2 className="text-3xl font-bold text-center mb-4 text-white">{containerIndex.title}</h2>
        <p className="text-lg text-center mb-8 text-white">{containerIndex.description}</p>
        <br />
      </div>
    ))}
        <div className="flex justify-center flex-col">
          <p className="text-lg text-center mb-8 text-white">Quieres saber mas acerca de nuestro proyecto de invitamos a leer nuestro white paper </p>
          <Link href="/files/Dragon-Ball-Collection.pdf" passHref target="_blank" rel="noopener noreferrer" className="text-lg text-center mb-8 text-white font-bold hover:bg-blue-700 hover:scale-110 hover:bg-opacity-50">
            Ver White Paper
          </Link>
        </div>
  </div>
</section>

  );
};

export default WhitePaperSection;