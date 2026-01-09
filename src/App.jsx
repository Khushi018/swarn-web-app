import React, { useState } from 'react';
import Header from './components/Header';
import TopPicks from './components/TopPicks';
import InvestmentNotification from './components/InvestmentNotification';
import VideoPitchCard from './components/VideoPitchCard';
import MarketWatchCard from './components/MarketWatchCard';
import CompanyUpdateCard from './components/CompanyUpdateCard';
import BottomNavigation from './components/BottomNavigation';
import ExploreReels from './components/ExploreReels';
import CompanyProfile from './components/CompanyProfile';

function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [selectedCompanyId, setSelectedCompanyId] = useState(null);

  const handleCompanySelect = (companyId) => {
    setSelectedCompanyId(companyId);
    setCurrentScreen('company');
  };

  const handleBackFromCompany = () => {
    setSelectedCompanyId(null);
    setCurrentScreen('home');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'explore':
        return <ExploreReels />;
      case 'company':
        return <CompanyProfile companyId={selectedCompanyId} onBack={handleBackFromCompany} />;
      case 'home':
      default:
        return (
          <div className="min-h-screen bg-dark text-white pb-20" style={{ backgroundColor: '#0f172a' }}>
            <Header onCompanySelect={handleCompanySelect} />
            
            <main className="w-full bg-dark" style={{ backgroundColor: '#0f172a' }}>
              <TopPicks />
              <InvestmentNotification />
              <VideoPitchCard />
              <MarketWatchCard />
              <CompanyUpdateCard />
              
              {/* Add some spacing at the bottom for navigation */}
              <div className="h-4 bg-dark" style={{ backgroundColor: '#0f172a' }}></div>
            </main>
          </div>
        );
    }
  };

  return (
    <>
      {renderScreen()}
      <BottomNavigation currentScreen={currentScreen} onNavigate={setCurrentScreen} />
    </>
  );
}

export default App;

