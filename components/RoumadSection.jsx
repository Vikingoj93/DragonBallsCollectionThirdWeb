'use client'

import React, { useState } from 'react';

const roadmapSection = () => {
  const roadmapData = [
    {
      title: 'Fase 1: Desarrollo e Inicio | Q3 - 2023',
      subtitle: [
        '1.1 Implementación de la plataforma: ',
        '1.2 Campaña de marketing inicial: ',
        '1.3 Integración con redes sociales y plataformas populares: ',
        '1.4 Token nativo del proyecto: ',
        '1.5 Espacio interactivo para compartir momentos importantes: ',
        '1.6 Votación comunitaria de momentos destacados: '
      ],
      list: [
        'Desarrollo y lanzamiento de la plataforma de Dragon Ball Collection, que incluirá toda la información y detalles del proyecto.',
        'Lanzamiento de una campaña de marketing para generar conciencia sobre el proyecto y atraer a los primeros usuarios a la plataforma.',
        'Conexión de la plataforma con otras redes sociales y plataformas populares para aumentar la visibilidad y fomentar la participación de la comunidad.',
        'Implementación del token nativo del proyecto en la plataforma para permitir la venta de tokens y ayudar a financiar el proyecto. Los usuarios podrán adquirir y mantener el token.',
        'Creación de un espacio interactivo en la plataforma donde los fanáticos podrán compartir y destacar momentos importantes de Dragon Ball.',
        'Desarrollo de la funcionalidad para que la comunidad pueda votar y seleccionar los momentos más destacados. Los usuarios que aporten las mejores ideas y momentos serán recompensados.'
      ]
    },
    {
      title: 'Fase 2: Construcción de la Comunidad Q4 - 2023',
      subtitle: [
        '2.1 Interfaz de usuario intuitiva:',
        '2.2 Registro y participación de la comunidad: ',
        '2.3 Programas de recompensas: '
      ],
      list: [
        'Desarrollo de una interfaz de usuario intuitiva y amigable que facilite la carga y visualización de momentos importantes de Dragon Ball.',
        'Implementación de un sistema de registro y participación de la comunidad en la plataforma, fomentando la interacción y contribución de los usuarios.',
        'Establecimiento de programas de recompensas para incentivar la participación activa de la comunidad y las contribuciones de los usuarios.'
      ]
    },
    {
      title: 'Fase 3: Expansión y Mejoras | Q1 - 2024',
      subtitle: [
        '3.1 Colaboración con artistas y diseñadores: ',
        '3.2 Mejoras en la escalabilidad y seguridad: ',
        '3.3 Sistema de subasta: '
      ],
      list: [
        'Colaboración con artistas y diseñadores para crear NFTs exclusivos y de edición limitada basados en momentos destacados de Dragon Ball.',
        'Mejora continua de la escalabilidad y seguridad de la plataforma a medida que aumenta el número de usuarios y la demanda.',
        'Implementación de un sistema de subasta para que los usuarios puedan obtener los primeros NFTs y ganar puntos para reclamar sus recompensas.'
      ]
    },
    {
      title: 'Fase 4: Consolidación y Futuro',
      subtitle: [
        '4.1 Evaluación y análisis continuo:',
        '4.2 Implementación del juego de farming "Torneo":',
        '4.3 Expansión de dinámicas en la plataforma:'

        
      ],
      list: [
        'Evaluación y análisis continuo de la comunidad y la retroalimentación de los usuarios para impulsar mejoras y nuevas características.',
        'Desarrollo e implementación del juego de farming "Torneo", donde los usuarios podrán competir en busca de las Super Esferas del Dragón.',
        'Continuar expandiendo las dinámicas en la plataforma, como nuevos juegos, sorteos, farming y otras características impulsadas por la comunidad.'
      ]
    }
  ];

  const [currentParagraphs, setCurrentParagraphs] = useState(Array(roadmapData.length).fill(0));

  const handleNextParagraph = (index) => {
    setCurrentParagraphs((prevParagraphs) => {
      const newParagraphs = [...prevParagraphs];
      if (newParagraphs[index] === roadmapData[index].list.length - 1) {
        newParagraphs[index] = 0; // Volver al primer párrafo
      } else {
        newParagraphs[index] = newParagraphs[index] + 1;
      }
      return newParagraphs;
    });
  };

  const handlePreviousParagraph = (index) => {
    setCurrentParagraphs((prevParagraphs) => {
      const newParagraphs = [...prevParagraphs];
      if (newParagraphs[index] === 0) {
        newParagraphs[index] = roadmapData[index].list.length - 1; // Ir al último párrafo
      } else {
        newParagraphs[index] = newParagraphs[index] - 1;
      }
      return newParagraphs;
    });
  };

  return (
    <section className="flex flex-col justify-center items-center bg-gray-100 p-4 border-t border-white mb-2">
      <h1 className="text-3xl text-white font-bold text-center mb-8">Roadmap</h1>
      <div className="flex flex-col md:flex-row justify-center items-start bg-gray-100 p-4">
        {roadmapData.map((section, index) => (
          <div key={index} className="w-full md:w-1/3 bg-gray-200 p-4 m-2 text-white border border-white rounded-lg">
            <h2 className="text-xl text-white font-semibold mb-2">{section.title}</h2>
            <br />
            <div>
              <h3 className="text-white text-base font-semibold mb-2">{section.subtitle[currentParagraphs[index]]}</h3>
              <p className="text-sm text-white">{section.list[currentParagraphs[index]]}</p>
            </div>
            <div className="flex justify-between mt-4">
              <button
                onClick={() => handlePreviousParagraph(index)}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
              >
                Anterior
              </button>
              <button
                onClick={() => handleNextParagraph(index)}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
              >
                Siguiente
              </button>
            </div>
          </div>
        ))}
      </div>
      <p className="text-sm text-white">Este roadmap es una guía general del desarrollo del proyecto Dragon Ball Collection, sin embargo, cabe destacar que los plazos y las características exactas pueden estar sujetas a cambios y ajustes a medida que avanza el desarrollo y se recibe feedback de la comunidad.</p>
    </section>
  );
};

export default roadmapSection;