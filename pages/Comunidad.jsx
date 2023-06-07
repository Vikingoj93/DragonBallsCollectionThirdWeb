'use client'
import React, { useState } from "react";

const Comunidad = () => {
  const [temas, setTemas] = useState([]);
  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");

  const handleTituloChange = (event) => {
    setTitulo(event.target.value);
  };

  const handleContenidoChange = (event) => {
    setContenido(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nuevoTema = {
      titulo: titulo,
      contenido: contenido,
      votos: 0,
    };
    setTemas([...temas, nuevoTema]);
    setTitulo("");
    setContenido("");
  };

  const handleVotar = (index) => {
    const nuevosTemas = [...temas];
    nuevosTemas[index].votos += 1;
    setTemas(nuevosTemas);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Comunidad</h1>

      <form onSubmit={handleSubmit} className="mb-6">
        <div className="mb-4">
          <label className="block text-xl font-semibold mb-2">
            Título del tema:
          </label>
          <input
            type="text"
            value={titulo}
            onChange={handleTituloChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-xl font-semibold mb-2">
            Contenido del tema:
          </label>
          <textarea
            value={contenido}
            onChange={handleContenidoChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg"
        >
          Crear Tema
        </button>
      </form>

      <h2 className="text-2xl font-bold mb-4">Temas</h2>

      {temas.length === 0 ? (
        <p>No hay temas creados aún.</p>
      ) : (
        <ul className="space-y-4">
          {temas.map((tema, index) => (
            <li key={index} className="bg-white rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2">{tema.titulo}</h3>
              <p>{tema.contenido}</p>
              <div className="flex items-center mt-4">
                <button
                  onClick={() => handleVotar(index)}
                  className="bg-blue-500 hover:bg-blue-600 text-black font-semibold px-4 py-2 rounded-lg mr-2"
                >
                  Votar ({tema.votos})
                </button>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold px-4 py-2 rounded-lg">
                  Ver Detalles
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Comunidad;