import React from 'react';
import HeroBanner from './components/HeroBanner';
import MediaCarousel from './components/MediaCarousel';
import SecondCarousel from './components/SecondCarousel';
import Navigation from './components/Navigation';
import ThirdCarousel from './components/ThirdCarousel';
import './styles/globals.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <Navigation />
      <div className="content">
        <HeroBanner />
        <MediaCarousel />
        <SecondCarousel />
        <ThirdCarousel />
      </div>
    </div>
  );
};

export default App;
