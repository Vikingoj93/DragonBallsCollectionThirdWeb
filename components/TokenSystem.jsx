import React from 'react';
import Link from 'next/link';

const TokenSystemSection = () => {
  const tokenSystemData = [
    {
      title: 'Token',
      subtitle: 'Descripcion',
      content: 'Dragon Ball Collection implementa un límite de suministro máximo de tokens por temporadas. Al llegar a dicho límite, se cerrará la venta hasta la próxima temporada. El suministro máximo de tokens será determinado en función de la oferta y la demanda de los usuarios.'
    },
    {
      title: 'Exclusividad',
      subtitle: 'Suministro',
      content: 'La plataforma podrá obtener nuevos tokens a través de la venta de las Esferas del Dragón. Los usuarios podrán adquirir las Esferas del Dragón utilizando el token de la plataforma. Los tokens recolectados se volverán a poner a la venta en la siguiente temporada, lo que garantiza un flujo constante de tokens en la economía de Dragon Ball Collection.'
    },
    {
      title: 'Quema | Aumento valor',
      subtitle: '',
      content: ' Este enfoque limitado de suministro y la exclusividad de obtener tokens solo a través  de la plataforma nos asegura tener un token estable añade un elemento adicional de valor y escasez. Los usuarios podrán participar activamente en la economía al adquirir tokens y utilizarlos para diversas actividades en la plataforma.'
    },
  ];

  return (
    <section className="flex flex-col justify-center items-center bg-gray-100 p-4 border-t border-white">
      <h1 className="text-3xl text-white font-bold text-center mb-8">Tokenomics</h1>
      <div className="flex flex-col md:flex-row justify-center items-start bg-gray-100 p-4">
        {tokenSystemData.map((token, index) => (
          <div className="w-full md:w-1/3 bg-gray-200 p-4 m-2 text-white border border-white rounded-lg" key={index}>
            <h2 className="text-xl text-white font-semibold mb-2">{token.title}</h2>
            {token.subtitle && <h3 className="text-white text-base font-semibold mb-2">{token.subtitle}</h3>}
            <p className="text-sm text-white">{token.content}</p>
          </div>
        ))}
      </div>
      <Link className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 hover:scale-110 hover:bg-opacity-50" href="/caracteristicas-token">
        Leer más detalles del token
      </Link>
    </section>
  );
};

export default TokenSystemSection;
