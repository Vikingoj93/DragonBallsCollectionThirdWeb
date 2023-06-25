import React from "react";

const TokenDescription = () => {
  const whitePaperData = [
    {
      title: "Token",
      description: `Dragon Ball Collection implementará un límite de suministro para el token, lo que significa que una vez que se agoten en la plataforma, no se crearán más tokens. Esto ayudará a mantener la escasez y el valor del token a largo plazo.
      `,
    },
    {
      title: "",
      description: `Además, la plataforma será la única entidad que podrá obtener nuevos tokens a través de la venta de las Esferas del Dragón. Los usuarios podrán adquirir las Esferas del Dragón utilizando el token de la plataforma, y los tokens recolectados de esas ventas se pondrán nuevamente a la venta en la plataforma. Esto permitirá mantener un flujo constante de tokens en la economía de Dragon Ball Collection.`,
    },
    {
      title: "",
      description: `Cuando los tokens se agoten, la plataforma no generará más tokens, el sistema se encargará de  vender los tokens recolectados en las subastas de las Esferas del Dragón, brindando así la oportunidad a nuevos usuarios de unirse y adquirir el token para su participación en la comunidad.`,
    },
    {
      title: "",
      description: `Se determinará un límite máximo por transacción para evitar el abuso de ballenas que perjudiquen la comunidad y el proyecto. el cual será determinado por la demanda de compra de los usuarios, esto brindara la protección con el abuso de ballenas y dará oportunidad a más usuarios a participar en el proyecto
      `,
    },
  ];

  return (
    <section className="py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {whitePaperData.map((containerIndex, index) => (
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
