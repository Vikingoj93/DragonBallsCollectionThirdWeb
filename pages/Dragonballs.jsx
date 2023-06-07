import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const Inicio = dynamic(() => import('../components/dragonBalls/containers/Inicio'));
const Subasta = dynamic(() => import('../components/dragonBalls/containers/Subasta'));
const Farm = dynamic(() => import('../components/dragonBalls/containers/Farm'));
const Puntos = dynamic(() => import('../components/dragonBalls/containers/Puntos'));
const Marketplace = dynamic(() => import('../components/dragonBalls/containers/Marketplace'));
const Canjear = dynamic(() => import('../components/dragonBalls/containers/Canjear'));

const buttons = {
  inicio: 'Inicio',
  subasta: 'Subasta',
  farm: 'Farm',
  puntos: 'Puntos',
  marketplace: 'Marketplace',
  canjear: 'Canjear',
};


const Dragonballs = () => {
  const [activeComponent, setActiveComponent] = useState('inicio');

  const handleComponentChange = (componentName) => {
    setActiveComponent(componentName);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case 'inicio':
        return <Inicio />;
      case 'subasta':
        return <Subasta />;
      case 'farm':
        return <Farm />;
      case 'puntos':
        return <Puntos />;
      case 'marketplace':
        return <Marketplace />;
      case 'canje':
        return <Canjear />;
      default:
        return null;
    }
  };

  return (
    <div className="flex">
      <section className="h-screen w-1/6 border-x p-4 bg-orange text-white sticky top-0 z-50 border-white border-b">
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

export default Dragonballs;
