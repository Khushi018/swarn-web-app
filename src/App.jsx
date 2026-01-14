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
import UserProfile from './components/UserProfile';
import Feed from './components/Feed';
import CreatePostModal from './components/CreatePostModal';
import Reels from './components/Reels';
import Analytics from './components/Analytics';
import FeedPreferences from './components/FeedPreferences';

function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [selectedCompanyId, setSelectedCompanyId] = useState(null);
  const [isCreatePostModalOpen, setIsCreatePostModalOpen] = useState(false);

  const handleCompanySelect = (companyId) => {
    setSelectedCompanyId(companyId);
    setCurrentScreen('company');
  };

  const handleBackFromCompany = () => {
    setSelectedCompanyId(null);
    setCurrentScreen('home');
  };

  const handleBackFromProfile = () => {
    setCurrentScreen('home');
  };

  const handleBackFromAnalytics = () => {
    setCurrentScreen('home');
  };

  const handleBackFromFeedPreferences = () => {
    setCurrentScreen('home');
  };

  const handleCreatePost = (postData) => {
    console.log('New post created:', postData);
    // Here you would typically send the post data to your backend/API
    // For now, we'll just log it
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'explore':
        return <ExploreReels />;
      case 'company':
        return <CompanyProfile companyId={selectedCompanyId} onBack={handleBackFromCompany} />;
      case 'profile':
        return <UserProfile onBack={handleBackFromProfile} />;
      case 'reels':
        return <Reels />;
      case 'analytics':
        return <Analytics onBack={handleBackFromAnalytics} />;
      case 'feedPreferences':
        return <FeedPreferences onBack={handleBackFromFeedPreferences} />;
      case 'home':
      default:
        return (
          <div className="min-h-screen bg-dark text-white pb-20" style={{ backgroundColor: '#0f172a' }}>
            <Header 
              onCompanySelect={handleCompanySelect} 
              onOpenCreatePost={() => setIsCreatePostModalOpen(true)}
              onNavigate={setCurrentScreen}
            />
            
            <main className="w-full bg-dark overflow-x-hidden" style={{ backgroundColor: '#0f172a' }}>
              <div className="w-full max-w-4xl mx-auto">
                <TopPicks />
                <InvestmentNotification />
                <VideoPitchCard />
                <MarketWatchCard />
                <CompanyUpdateCard />
                
                {/* Instagram-like Feed */}
                <Feed />
                
                {/* Add some spacing at the bottom for navigation */}
                <div className="h-4 bg-dark" style={{ backgroundColor: '#0f172a' }}></div>
              </div>
            </main>
          </div>
        );
    }
  };

  return (
    <>
      {renderScreen()}
      <BottomNavigation 
        currentScreen={currentScreen} 
        onNavigate={setCurrentScreen}
        onOpenCreatePost={() => setIsCreatePostModalOpen(true)}
      />
      {/* Create Post Modal - Available on all screens */}
      <CreatePostModal
        isOpen={isCreatePostModalOpen}
        onClose={() => setIsCreatePostModalOpen(false)}
        onSubmit={handleCreatePost}
      />
    </>
  );
}

export default App;

