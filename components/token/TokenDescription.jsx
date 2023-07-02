import React from "react";

const TokenDescription = () => {
  const tokenData = [
    {
      title: "Tokenomics",
      description: `DBC opera en una red descentralizada y utiliza un modelo de tokens. El suministro total de tokens DBC estará limitado, lo que garantiza la escasez y aumenta su valor potencial con el tiempo.`,
    },
    {
      title: "",
      description: `La plataforma podrá obtener nuevos tokens a través de la venta de las Esferas del Dragón. Los usuarios podrán adquirir las Esferas del Dragón utilizando el token de la plataforma. Los tokens recolectados se volverán a poner a la venta en la siguiente temporada, lo que garantiza un flujo constante de tokens en la economía de Dragon Ball Collection.`,
    },
    {
      title: "",
      description: `Este enfoque limitado de suministro y la exclusividad de obtener tokens solo a través  de la plataforma nos asegura tener un token estable añade un elemento adicional de valor y escasez. Los usuarios podrán participar activamente en la economía al adquirir tokens y utilizarlos para diversas actividades en la plataforma.`,
    },
    {
      title: "",
      description: `Los poseedores de DBC tendrán el poder de influir en las decisiones del proyecto a través de la gobernanza descentralizada. Al apostar y mantener tokens DBC, los miembros de la comunidad podrán participar en procesos de votación, sugerir nuevas iniciativas y dar forma a la dirección del proyecto. Esto garantiza un proyecto verdaderamente democrático e inclusivo impulsado por la comunidad.
      `,
    },
  ];

  return (
    <section className="py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {tokenData.map((containerIndex, index) => (
          <div key={index}>
            <h2 className="text-3xl font-bold text-center mb-4 text-white">
              {containerIndex.title}
            </h2>
            <p className="text-lg text-center mb-8 text-white">
              {containerIndex.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TokenDescription;
