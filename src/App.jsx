import React from 'react';
import Hero from './components/Hero';
import SDGHighlights from './components/SDGHighlights';
import FeatureTimeline from './components/FeatureTimeline';
import FooterCTA from './components/FooterCTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      <Hero />
      <SDGHighlights />
      <FeatureTimeline />
      <FooterCTA />
    </div>
  );
}

export default App;
