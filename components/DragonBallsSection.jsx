'use client'

import React from 'react';
import Link from 'next/link';

const DragonBallsSection = () => {
  const introContent = [
    {
      title: 'Subasta',
      description: 'Consigue las esferas del dragon, Suma puntos y gana las mejores recompensas...\n \n Proximamente...',
      section: 'src/app/dragonBalls',
      image: 'https://nftevening.com/wp-content/uploads/2023/02/dragon-ball-sandbox.jpg',
    },
    {
      title: 'Torneo',
      description: 'Elige un universo específico y embarcarse en una emocionante aventura para encontrar las esferas legendarias...\n \n Proximamente...',
      section: 'section2',
      image: 'https://album.mediaset.es/eimg/2020/05/07/FAB1goHhR0zDSs7fkmyof2.jpg?w=1200&h=900',
    },
    {
      title: 'Mercado',
      description: 'Comercializa tus NFTs...\n \n Proximamente...',
      section: 'section3',
      image: 'https://a-static.besthdwallpaper.com/beerus-from-dragon-ball-super-tournament-of-power-dragon-ball-legends-art-dragon-ball-legends-art-wallpaper-1440x1080-100968_22.jpg',
    },
  ];

  const handleContainerClick = (section) => {

    window.location.href = `/${section}`;
  };

  return (
    <section className="flex flex-col justify-center items-center bg-gray-100 p-4 border-t border-white">
      <h1 className="text-3xl text-white font-bold text-center mb-8">Esferas del Dragón</h1>
      <div className="flex flex-col md:flex-row justify-center items-start bg-gray-100 p-4">
        {introContent.map((containerIndex) => (
          <div key={containerIndex} className="w-full md:w-1/3 h-80 bg-cover bg-opacity-20 bg-center relative border border-white rounded-xl transition-all duration-300 transform hover:scale-110 focus:outline-none hover:border hover:border-white hover:bg-opacity-50 flex justify-center items-center flex-col" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${containerIndex.image})`, margin: "10px"}} onClick={() => handleContainerClick(`/${containerIndex.section}`)}>
            <h2 className="text-3xl text-white font-bold top-1/2 left-1/2 flex justify-center items-center flex-col">{containerIndex.title}</h2>
            <div className="text-white text-sm bottom-4 left-4 flex justify-center items-center flex-col">
              {containerIndex.description.split('\n').map((line, index) => (
                <p style={{margin: '5px'}} key={index}>
                  {line}
                  <br />
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 hover:scale-110 hover:bg-opacity-50" href="/dragon-balls">
        Más
      </Link>
    </section>
  );
};

export default DragonBallsSection;