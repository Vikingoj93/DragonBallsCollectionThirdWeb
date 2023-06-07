import React from 'react';
import HomeImages from '../components/HomeImages';
import MainSection from '../components/MainSection';
import RoumadSection from '../components/RoumadSection';
import TokenSystem from '../components/TokenSystem';
import DragonBallsSection from '../components/DragonBallsSection';

export default function Home() {
  return (
    <div>
        <HomeImages />
        <MainSection />
        <RoumadSection />
        <DragonBallsSection />
        <TokenSystem />
    </div>
  );
}
