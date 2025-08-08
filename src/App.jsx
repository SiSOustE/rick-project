import React, { useState } from 'react';
import { EpisodesContainer } from './components/containers/EpisodesContainer';
import { LocationsContainer } from './components/containers/LocationsContainer';

function App() {
  const [activeSection, setActiveSection] = useState(null); // null, 'episodes', или 'locations'

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="App">
      <h1 className="app-title">Rick and Morty Universe</h1>

      <div className="main-sections">
        {/* Секция Эпизодов */}
        <div className="section">
          <div className="section-header" onClick={() => toggleSection('episodes')}>
            <h2 className="section-title">
              Эпизоды
            </h2>
            <span>{activeSection === 'episodes' ? '[-]' : '[+]'}</span>
          </div>
          {activeSection === 'episodes' && (
            <div className="section-content">
              <EpisodesContainer />
            </div>
          )}
        </div>

        {/* Секция Локаций */}
        <div className="section">
          <div className="section-header" onClick={() => toggleSection('locations')}>
            <h2 className="section-title">
              Локации
            </h2>
            <span>{activeSection === 'locations' ? '[-]' : '[+]'}</span>
          </div>
          {activeSection === 'locations' && (
            <div className="section-content">
              <LocationsContainer />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;