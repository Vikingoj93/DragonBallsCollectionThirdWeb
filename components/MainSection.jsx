'use client'

import React, { useState, useEffect, useRef } from 'react';

const MainSection = () => {
  const [visibleContainers, setVisibleContainers] = useState([0, 1]);
  const containerData = [
    {
      title: 'NFTs y Coleccionables',
      description: 'Los usuarios pueden adquirir NFTs únicos que representan momentos importantes de Dragon Ball.\n \n Las Esferas del Dragón serán los primeros NFTs disponibles y se subastarán cada 24 horas en la plataforma.\n \n Los usuarios que obtengan las 7 Esferas del Dragón podrán reclamar premios especiales en forma de NFTs de la saga.',
      enlace: '',
    },
    {
      title: 'Juego de Farmeo y Competencia entre Universos',
      description: 'Los usuarios pueden participar en un emocionante juego de farmeo en busca de las Super Esferas del Dragón.\n \n Cada universo se enfrentará a enemigos desafiantes y el tiempo de derrota dependerá del poder de batalla de los NFTs.\n \n El universo ganador recibirá un premio especial y los recursos en BNB acumulados de la temporada serán distribuidos entre los mejores guerreros.',
      enlace: '',
    },
    {
      title: 'Participación de la Comunidad',
      description:'La comunidad puede contribuir con sugerencias y mejoras para el sistema de farmeo y otros aspectos del proyecto.\n \n Los aportes de la comunidad serán considerados para realizar cambios favorables en cada temporada del juego.',
      enlace: '',
    },{
      title: 'Enfoque en la Colección y la Comunidad',
      description:'El proyecto se centra en el aspecto de colección y en unir a la comunidad global de fanáticos de Dragon Ball. \n \n Se fomentan dinámicas de intercambio, juegos, sorteos, eventos y otras actividades para fortalecer la comunidad. \n \n En resumen, Dragon Ball Collection es un proyecto de criptomoneda basado en la historia de Dragon Ball. A través de NFTs, token, subastas de NFTs, juegos  y la participación activa de la comunidad, buscamos unir a los fanáticos de Dragon Ball a nivel mundial y crear una experiencia única y emocionante.',
      enlace: '',
    },{
      title: 'Mas sobre nosotros',
      description:'Si quieres saber mas acerca de nuestro proyecto te invito a leer nuestro white paper completo...\n \n',
      enlace: '\n \n<a href="/whitepaper" target="_blank">Ver White Paper</a>'
    },
  ];

  const intervalRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setVisibleContainers((prevVisibleContainers) => {
        const nextVisibleContainers = [...prevVisibleContainers];
        nextVisibleContainers.shift();
        nextVisibleContainers.push(
          (nextVisibleContainers[nextVisibleContainers.length - 1] + 1) % containerData.length
        );
        return nextVisibleContainers;
      });
    }, 5000);

    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Ajusta el ancho de acuerdo a tus necesidades
    };

    handleResize(); // Verificar el tamaño inicial de la pantalla

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      const updateContainerHeight = () => {
        const maxTextHeight = Math.max(
          ...visibleContainers.map((containerIndex) => {
            const containerElement = document.getElementById(`container-${containerIndex}`);
            return containerElement.scrollHeight;
          })
        );

        setContainerHeight(maxTextHeight);
      };

      updateContainerHeight();

      window.addEventListener('resize', updateContainerHeight);

      return () => window.removeEventListener('resize', updateContainerHeight);
    } else {
      setContainerHeight(null);
    }
  }, [visibleContainers, isMobile]);

  const handleContainerMouseEnter = () => {
    clearInterval(intervalRef.current);
  };

  const handleContainerMouseLeave = () => {
    intervalRef.current = setInterval(() => {
      setVisibleContainers((prevVisibleContainers) => {
        const nextVisibleContainers = [...prevVisibleContainers];
        nextVisibleContainers.shift();
        nextVisibleContainers.push(
          (nextVisibleContainers[nextVisibleContainers.length - 1] + 1) % containerData.length
        );
        return nextVisibleContainers;
      });
    }, 10000);
  };

  const handlePrevButtonClick = () => {
    setVisibleContainers((prevVisibleContainers) => {
      const nextVisibleContainers = [...prevVisibleContainers];
      nextVisibleContainers.pop();
      nextVisibleContainers.unshift(
        (nextVisibleContainers[0] - 1 + containerData.length) % containerData.length
      );
      return nextVisibleContainers;
    });
  };

  const handleNextButtonClick = () => {
    setVisibleContainers((prevVisibleContainers) => {
      const nextVisibleContainers = [...prevVisibleContainers];
      nextVisibleContainers.shift();
      nextVisibleContainers.push(
        (nextVisibleContainers[nextVisibleContainers.length - 1] + 1) % containerData.length
      );
      return nextVisibleContainers;
    });
  };

  return (
    <section className="py-5 border-t border-white" style={{ margin: '5px' }}>
      <h2 className="text-3xl text-white font-bold text-center mb-8">Introduccion</h2>

      <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} justify-center items-center overflow-hidden relative`}>
        {visibleContainers.map((containerIndex) => (
          <div
            key={containerIndex}
            id={`container-${containerIndex}`}
            className="rounded-lg p-6 mb-6 mx-4 "
            style={{ width: '400px', minHeight: containerHeight }}
            onMouseEnter={handleContainerMouseEnter}
            onMouseLeave={handleContainerMouseLeave}
          >
            <h3 className="text-lg text-white font-semibold mb-2">{containerData[containerIndex].title}</h3>
            <p className="text-sm text-white">
              {containerData[containerIndex].description.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
            {containerData[containerIndex].enlace && (
              <p className="text-sm text-white font-bold">
                <span dangerouslySetInnerHTML={{ __html: containerData[containerIndex].enlace }}></span>
              </p>
            )}
          </div>
        ))}
        <button
          className="text-white absolute left-0 top-1/2 transform -translate-y-1/2 bg-none px-2 py-1 rounded hidden sm:block"
          onClick={handlePrevButtonClick}
        >
          Anterior
        </button>
        <button
          className="text-white absolute right-0 top-1/2 transform -translate-y-1/2 bg-none px-2 py-1 rounded hidden sm:block"
          onClick={handleNextButtonClick}
        >
          Siguiente
        </button>
      </div>
    </section>
  );
};

export default MainSection;