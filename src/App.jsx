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
import MarketWatchDetail from './components/MarketWatchDetail';
import DeckDetail from './components/DeckDetail';
import StoryViewer from './components/StoryViewer';
import SearchPage from './components/SearchPage';
import AICreatePost from './components/AICreatePost';
import VideoUpload from './components/VideoUpload';
import { storiesVideos } from './data/storiesVideos';

function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [selectedCompanyId, setSelectedCompanyId] = useState(null);
  const [selectedConsultantId, setSelectedConsultantId] = useState(null);
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const [storyViewer, setStoryViewer] = useState({ isOpen: false, stories: [], initialIndex: 0, initialCompanyIndex: 0 });
  const [isWhiteTheme, setIsWhiteTheme] = useState(false);

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

  const handleBackFromMarketWatch = () => {
    setCurrentScreen('home');
  };

  const handleBackFromDeck = () => {
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

  const handleBackFromVideoUpload = () => {
    setCurrentScreen('home');
  };

  const handleVideoUpload = (uploadData) => {
    console.log('Video uploaded:', uploadData);
    // Here you would typically send the upload data to your backend/API
    // For now, we'll just log it
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
      case 'marketWatch':
        return <MarketWatchDetail onBack={handleBackFromMarketWatch} />;
      case 'deck':
        return <DeckDetail onBack={handleBackFromDeck} />;
      case 'search':
        return <SearchPage onBack={handleBackFromSearch} onCompanySelect={handleCompanySelect} />;
      case 'aiCreatePost':
        return <AICreatePost onBack={handleBackFromAICreatePost} onSubmit={handleCreatePost} />;
      case 'feedUpload':
        return <VideoUpload uploadType="feed" onBack={handleBackFromVideoUpload} onSubmit={handleVideoUpload} isWhiteTheme={isWhiteTheme} />;
      case 'reelUpload':
        return <VideoUpload uploadType="reel" onBack={handleBackFromVideoUpload} onSubmit={handleVideoUpload} isWhiteTheme={isWhiteTheme} />;
      case 'storyUpload':
        return <VideoUpload uploadType="story" onBack={handleBackFromVideoUpload} onSubmit={handleVideoUpload} isWhiteTheme={isWhiteTheme} />;
      case 'home':
      default:
        return (
          <div className={`min-h-screen pb-20 ${isWhiteTheme ? 'bg-white text-gray-900' : 'bg-dark text-white'}`} style={isWhiteTheme ? { backgroundColor: '#ffffff' } : { backgroundColor: '#0f172a' }}>
            <Header 
              onCompanySelect={handleCompanySelect}
              onConsultantSelect={handleConsultantSelect}
              onOpenCreatePost={() => setCurrentScreen('aiCreatePost')}
              onNavigate={setCurrentScreen}
              onOpenStory={(stories, initialIndex) => {
                // Find which company index this is in all stories
                const allStories = storiesVideos;
                const companyIndex = allStories.findIndex(company => 
                  company.stories && company.stories.some(s => s.video === stories[0]?.video)
                );
                setStoryViewer({ 
                  isOpen: true, 
                  stories: allStories, 
                  initialIndex, 
                  initialCompanyIndex: companyIndex >= 0 ? companyIndex : 0 
                });
              }}
              isWhiteTheme={isWhiteTheme}
              onThemeToggle={setIsWhiteTheme}
            />
            
            <main className={`w-full overflow-x-hidden ${isWhiteTheme ? 'bg-white' : 'bg-dark'}`} style={isWhiteTheme ? { backgroundColor: '#ffffff' } : { backgroundColor: '#0f172a' }}>
              <div className="w-full max-w-4xl mx-auto">
                <TopPicks isWhiteTheme={isWhiteTheme} />
                {/* <InvestmentNotification /> */}
                <MarketWatchCard
                  isWhiteTheme={isWhiteTheme}
                  onOpen={() => setCurrentScreen('marketWatch')}
                />
                <CompanyUpdateCard
                  isWhiteTheme={isWhiteTheme}
                  onViewDeck={() => setCurrentScreen('deck')}
                />
                
                {/* Instagram-like Feed */}
                <Feed isWhiteTheme={isWhiteTheme} />
                
                {/* Add some spacing at the bottom for navigation */}
                <div className={`h-4 ${isWhiteTheme ? 'bg-white' : 'bg-dark'}`} style={isWhiteTheme ? { backgroundColor: '#ffffff' } : { backgroundColor: '#0f172a' }}></div>
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
        isWhiteTheme={currentScreen === 'home' ? isWhiteTheme : false}
      />
      {/* Story Viewer */}
      {storyViewer.isOpen && (
        <StoryViewer
          allCompanies={storyViewer.stories}
          initialCompanyIndex={storyViewer.initialCompanyIndex}
          initialStoryIndex={storyViewer.initialIndex}
          onClose={() => setStoryViewer({ isOpen: false, stories: [], initialIndex: 0, initialCompanyIndex: 0 })}
        />
      )}
    </>
  );
}

export default App;

