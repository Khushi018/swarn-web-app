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
import ConsultantProfile from './components/ConsultantProfile';
import Feed from './components/Feed';
import Reels from './components/Reels';
import Analytics from './components/Analytics';
import FeedPreferences from './components/FeedPreferences';
import StoryViewer from './components/StoryViewer';
import SearchPage from './components/SearchPage';
import AICreatePost from './components/AICreatePost';

function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [selectedCompanyId, setSelectedCompanyId] = useState(null);
  const [selectedConsultantId, setSelectedConsultantId] = useState(null);
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const [storyViewer, setStoryViewer] = useState({ isOpen: false, stories: [], initialIndex: 0 });

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

  const handleBackFromSearch = () => {
    setCurrentScreen('home');
  };

  const handleBackFromAICreatePost = () => {
    setCurrentScreen('home');
  };


  const handleConsultantSelect = (consultantId) => {
    setSelectedConsultantId(consultantId);
    setCurrentScreen('consultant');
  };

  const handleBackFromConsultant = () => {
    setSelectedConsultantId(null);
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
        return <ExploreReels onNavigate={setCurrentScreen} onVideoSelect={setSelectedVideoId} />;
      case 'company':
        return <CompanyProfile companyId={selectedCompanyId} onBack={handleBackFromCompany} />;
      case 'profile':
        return <UserProfile onBack={handleBackFromProfile} onNavigate={setCurrentScreen} />;
      case 'consultant':
        return <ConsultantProfile consultantId={selectedConsultantId} onBack={handleBackFromConsultant} isOwnProfile={false} />;
      case 'reels':
        return <Reels initialVideoId={selectedVideoId} />;
      case 'analytics':
        return <Analytics onBack={handleBackFromAnalytics} />;
      case 'feedPreferences':
        return <FeedPreferences onBack={handleBackFromFeedPreferences} />;
      case 'search':
        return <SearchPage onBack={handleBackFromSearch} onCompanySelect={handleCompanySelect} />;
      case 'aiCreatePost':
        return <AICreatePost onBack={handleBackFromAICreatePost} onSubmit={handleCreatePost} />;
      case 'home':
      default:
        return (
          <div className="min-h-screen bg-dark text-white pb-20" style={{ backgroundColor: '#0f172a' }}>
            <Header 
              onCompanySelect={handleCompanySelect}
              onConsultantSelect={handleConsultantSelect}
              onOpenCreatePost={() => setCurrentScreen('aiCreatePost')}
              onNavigate={setCurrentScreen}
              onOpenStory={(stories, initialIndex) => setStoryViewer({ isOpen: true, stories, initialIndex })}
            />
            
            <main className="w-full bg-dark overflow-x-hidden" style={{ backgroundColor: '#0f172a' }}>
              <div className="w-full max-w-4xl mx-auto">
                <TopPicks />
                {/* <InvestmentNotification /> */}
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
        onOpenCreatePost={() => setCurrentScreen('aiCreatePost')}
      />
      {/* Story Viewer */}
      {storyViewer.isOpen && (
        <StoryViewer
          stories={storyViewer.stories}
          initialStoryIndex={storyViewer.initialIndex}
          onClose={() => setStoryViewer({ isOpen: false, stories: [], initialIndex: 0 })}
        />
      )}
    </>
  );
}

export default App;

