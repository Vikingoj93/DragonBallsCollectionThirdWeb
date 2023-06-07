import React, { useState } from "react";

const SubastaComponent = ({ elementoSubastar }) => {
  const [ofertaDeseada, setOfertaDeseada] = useState("");
  const [ofertaAutomatica, setOfertaAutomatica] = useState("");

  const handleOfertaDeseadaChange = (event) => {
    setOfertaDeseada(event.target.value);
  };

  const handleOfertaAutomaticaClick = () => {
    // Lógica para enviar oferta automática
    const nuevaOfertaAutomatica =
      Number(elementoSubastar.ofertaActual) +
      Number(elementoSubastar.minimoIncremento);
    setOfertaAutomatica(nuevaOfertaAutomatica.toString());
  };

  const renderizarCamposPersonalizados = () => {
    const camposPersonalizados = [
      {
        label: "Oferta Deseada",
        tipo: "input",
        valor: ofertaDeseada,
        onChange: handleOfertaDeseadaChange,
      },
      {
        label: "Oferta Automática",
        tipo: "button",
        onClick: handleOfertaAutomaticaClick,
        texto: "Oferta Automática",
        valor: ofertaAutomatica,
      },
      // Agrega más campos personalizados aquí
    ];

    return camposPersonalizados.map((campo, index) => {
      if (campo.tipo === "input") {
        return (
          <div className="flex items-center m-1" key={index}>
            <label className="text-white font-semibold mr-2">
              {campo.label}:
            </label>
          </div>
        );
      } else if (campo.tipo === "button") {
        return (
          <button
            className="border border-white text-white font-bold w-48 py-2 px-4 rounded mt-2"
            key={index}
            onClick={campo.onClick}
          >
            {campo.texto}
          </button>
        );
      } else {
        return null;
      }
    });
  };

  return (
    <div className="relative">
      
      {elementoSubastar && (
        <div className="flex p-1 m-1">
          <div>
            <img
              src={elementoSubastar.image}
              alt={elementoSubastar.title}
              className="w-32 h-auto"
            />
          </div>
          <div className="flex flex-col justify-center ml-4">
            <h2 className="text-white font-semibold text-left mb-2">
              {elementoSubastar.title}
            </h2>
            <p className="text-white font-semibold text-left m-1">
              Precio Inicial: ${elementoSubastar.precioInicial}
            </p>
            <p className="text-white font-semibold text-left m-1">
              Oferta Actual: ${elementoSubastar.ofertaActual}
            </p>
            <p className="text-white font-semibold text-left m-1">
              Mejor Postor: {elementoSubastar.mejorPostor}
            </p>
            <p className="text-white font-semibold text-left m-1">
              Incremento: ${elementoSubastar.incremento}
            </p>

            {renderizarCamposPersonalizados()}
          </div>
        </div>
      )}
    </div>
  );
};

export default SubastaComponent;

