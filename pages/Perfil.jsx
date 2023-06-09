import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const Packs = dynamic(() => import('../components/perfil/containers/Packs'));
const Cards = dynamic(() => import('../components/perfil/containers/Cards'));


const buttons = {
  packs: 'Packs',
  cards: 'Cards',
};


const Perfil = () => {
  const [activeComponent, setActiveComponent] = useState('packs');

  const handleComponentChange = (componentName) => {
    setActiveComponent(componentName);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case 'packs':
        return <Packs />;
      case 'cards':
        return <Cards />;
      default:
        return null;
    }
  };

  return (
    <div className="flex">
      <section className="h-screen w-1/12 border-x p-4 bg-orange text-white sticky top-0 z-50 border-white border-b">
        {Object.entries(buttons).map(([key, label]) => (
          <button
            className="block hover:text-navy mb-2"
            key={key}
            onClick={() => handleComponentChange(key)}
          >
            {label}
          </button>
        ))}
      </section>

      <main className="flex w-auto">
        <p className="w-max absolute z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-8xl opacity-50">
        En desarrollo
        </p>
        {renderComponent()}
      </main>
    </div>
  );
};

export default Perfil;
