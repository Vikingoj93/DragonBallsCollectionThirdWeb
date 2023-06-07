'use client'
import React, { useState } from "react";
import SubastaComponent from "./SubastaComponent";

const Esferas = () => {

    const esferasData = [
        {
            title: 'Esfera de 1 estrellas',
            image: ['https://i.postimg.cc/mZz625pW/Adobe-Express-20230530-2231500-1.png'],
            precioInicial: '--',
            ofertaActual: '--',
            mejorPostor: '--',
            incremento: '--',
            minimoIncremento: '--',
        },
        {
            title: 'Esfera de 2 estrellas',
            image: ['https://i.postimg.cc/DwKNNPgk/Adobe-Express-20230530-2231500-2.png'],
            precioInicial: '--',
            ofertaActual: '--',
            mejorPostor: '--',
            incremento: '--',
            minimoIncremento: '--',
        },
        {
            title: 'Esfera de 3 estrellas',
            image: ['https://i.postimg.cc/FsSyLgmq/Adobe-Express-20230530-2231500-3.png'],
            precioInicial: '--',
            ofertaActual: '--',
            mejorPostor: '--',
            incremento: '--',
            minimoIncremento: '--',
        },
        {
            title: 'Esfera de 4 estrellas',
            image: ['https://i.postimg.cc/TYks7grj/Adobe-Express-20230531-2249390-1.png'],
            precioInicial: '--',
            ofertaActual: '--',
            mejorPostor: '--',
            incremento: '--',
            minimoIncremento: '--',
        },
        {
            title: 'Esfera de 5 estrellas',
            image: ['https://i.postimg.cc/G29gD7cY/Adobe-Express-20230530-2231500-5.png'],
            precioInicial: '--',
            ofertaActual: '--',
            mejorPostor: '--',
            incremento: '--',
            minimoIncremento: '--',
        },
        {
            title: 'Esfera de 6 estrellas',
            image: ['https://i.postimg.cc/yNLrk4zs/Adobe-Express-20230530-2231500-6.png'],
            precioInicial: '--',
            ofertaActual: null,
            mejorPostor: '--',
            incremento: '--',
            minimoIncremento: '--',
        },
        {
            title: 'Esfera de 7 estrellas',
            image: ['https://i.postimg.cc/rmbnN1mH/Adobe-Express-20230530-2231500-7.png'],
            precioInicial: '--',
            ofertaActual: '--',
            mejorPostor: '--',
            incremento: '--',
            minimoIncremento: '--',
        },
    ];

    const [elementoSubastar, setElementoSubastar] = useState(null);

    const handleClickEsfera = (elemento) => {
      setElementoSubastar(elemento);
    };
  
    return (
      <section className="flex flex-col justify-center items-center bg-gray-100 border-white m-0 py-0">
        <div className="flex flex-col md:flex-row justify-center items-start bg-gray-100 px-1">
          {esferasData.map((content, index) => (
            <div
              key={index}
              className="w-full md:w-1/3 h-72 bg-cover bg-opacity-20 bg-center relative border border-white transition-all duration-300 transform hover:scale-110 focus:outline-none hover:border hover:border-white hover:bg-opacity-50 flex justify-end items-center flex-col"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(${content.image})`,
                margin: "4px 4px",
              }}
              onClick={() => handleClickEsfera(content)}
            >
              <h2 className="text-sm text-white font-semibold text-center mb-8">
                {content.title}
              </h2>
            </div>
          ))}
        </div>
              
        {elementoSubastar && <SubastaComponent elementoSubastar={elementoSubastar} />}

      </section>
    );
  };

  export default Esferas;