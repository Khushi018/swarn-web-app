import React, { useState, useRef, useEffect } from 'react';
import Sidebar from './Sidebar';
import CompanyLogo from './CompanyLogo';

const ExploreReels = ({ onNavigate, onVideoSelect }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Videos');
  const [searchQuery, setSearchQuery] = useState('');
  const videoRefs = useRef([]);
  const containerRefs = useRef([]);

  // Real videos from public/videos folder - arranged for 2 rows x 3 cols with 3rd col merged
  // Layout: [video1] [video2] [video3 (merged)]
  //         [video4] [video5] [video3 (continues)]
  const videos = [
    {
      id: 1,
      video: '/videos/video1.mp4',
      views: 12500,
      likes: 1247,
      thumbnail: '/videos/video1-thumb.jpg',
      author: 'TechFlow Solutions',
      authorAvatar: 'TF',
    },
    {
      id: 2,
      video: '/videos/video2.mp4',
      views: 8900,
      likes: 892,
      thumbnail: '/videos/video2-thumb.jpg',
      author: 'GreenEnergy Innovations',
      authorAvatar: 'GE',
    },
    {
      id: 3,
      video: '/videos/video3.mp4',
      views: 21600,
      likes: 2156,
      thumbnail: '/videos/video3-thumb.jpg',
      isMerged: true, // This video spans 2 rows in the 3rd column
      author: 'MediCare AI',
      authorAvatar: 'MA',
    },
    {
      id: 4,
      video: '/videos/video4.mp4',
      views: 18300,
      likes: 1834,
      thumbnail: '/videos/video4-thumb.jpg',
      author: 'CloudSync Technologies',
      authorAvatar: 'CS',
    },
    {
      id: 5,
      video: '/videos/video5-fintech.mp4',
      views: 24800,
      likes: 2456,
      thumbnail: '/videos/video5-fintech-thumb.jpg',
      author: 'FinTech Pro',
      authorAvatar: 'FP',
    },
    {
      id: 6,
      video: '/videos/video6-edtech.mp4',
      views: 19200,
      likes: 1867,
      thumbnail: '/videos/video6-edtech-thumb.jpg',
      author: 'EduLearn Platform',
      authorAvatar: 'EL',
    },
    {
      id: 7,
      video: '/videos/video7-indianSweetShop.mp4',
      views: 35700,
      likes: 3456,
      thumbnail: '/videos/video7-indianSweetShop-thumb.jpg',
      author: 'Mithai Express',
      authorAvatar: 'ME',
    },
    {
      id: 8,
      video: '/videos/video8-agritech.mp4',
      views: 22100,
      likes: 2134,
      thumbnail: '/videos/video8-agritech-thumb.jpg',
      author: 'AgriGrow Solutions',
      authorAvatar: 'AG',
    },
  ];

  const news = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Tech Innovation News ${i + 1}`,
    source: ['TechCrunch', 'Forbes', 'Bloomberg', 'The Verge'][i % 4],
    time: `${Math.floor(Math.random() * 24)}h ago`,
    category: ['Funding', 'Product Launch', 'Market Update', 'Partnership'][i % 4],
  }));

  const articles = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    title: `Investment Insights: ${['Series A', 'Seed Funding', 'Venture Capital', 'Startup Growth'][i % 4]}`,
    author: `Author ${i + 1}`,
    readTime: `${Math.floor(Math.random() * 10) + 3} min read`,
    category: ['Analysis', 'Guide', 'Trends', 'Case Study'][i % 4],
  }));

  const tabs = ['Videos', 'News', 'Articles'];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Videos':
        return (
          <div className="w-full">
            {/* Grid Layout - 2 rows x 3 columns with 3rd column merged */}
            <div className="grid grid-cols-3 grid-rows-2 gap-1 md:gap-2" style={{ gridAutoRows: '1fr' }}>
              {videos.map((video, index) => {
                const isMerged = video.isMerged || false;
                
                return (
                  <div
                    key={video.id}
                    ref={(el) => (containerRefs.current[index] = el)}
                    className={`relative bg-dark-light rounded-lg overflow-hidden cursor-pointer group ${
                      isMerged ? 'row-span-2' : ''
                    }`}
                    style={isMerged ? {} : { aspectRatio: '1 / 1' }}
                    onClick={() => {
                      if (onVideoSelect) {
                        onVideoSelect(video.id);
                      }
                      if (onNavigate) {
                        onNavigate('reels');
                      }
                    }}
                  >
                    {/* Video Element */}
                    <video
                      ref={(el) => (videoRefs.current[index] = el)}
                      src={video.video}
                      className="w-full h-full object-cover"
                      loop
                      muted
                      playsInline
                      autoPlay
                      preload="auto"
                    />
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-4 text-white">
                        {/* Views */}
                        <div className="flex items-center gap-1">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm font-semibold">{(video.views / 1000).toFixed(1)}k</span>
                        </div>
                        
                        {/* Likes */}
                        <div className="flex items-center gap-1">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                          </svg>
                          <span className="text-sm font-semibold">{video.likes}</span>
                        </div>
                      </div>
                    </div>

                    {/* Video icon badge (top right) */}
                    <div className="absolute top-2 right-2">
                      <div className="w-6 h-6 rounded-full bg-black/60 flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Video count info */}
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-400">
                {videos.length} {videos.length === 1 ? 'video' : 'videos'}
              </p>
            </div>
          </div>
        );
      case 'News':
        return (
          <div className="space-y-4">
            {news.map((item) => (
              <div
                key={item.id}
                className="bg-dark-light rounded-xl p-4 border border-dark-light hover:bg-dark-light/80 transition-colors cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary/30 to-primary-dark/30 flex-shrink-0 flex items-center justify-center">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs text-primary font-semibold">{item.source}</span>
                      <span className="text-xs text-gray-500">•</span>
                      <span className="text-xs text-gray-400">{item.time}</span>
                    </div>
                    <h3 className="text-base font-semibold text-white mb-2 line-clamp-2">{item.title}</h3>
                    <span className="inline-block px-2 py-1 bg-primary/20 text-primary text-xs font-medium rounded">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      case 'Articles':
        return (
          <div className="space-y-4">
            {articles.map((article) => (
              <div
                key={article.id}
                className="bg-dark-light rounded-xl p-4 border border-dark-light hover:bg-dark-light/80 transition-colors cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary/30 to-primary-dark/30 flex-shrink-0 flex items-center justify-center">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs text-gray-400">{article.author}</span>
                      <span className="text-xs text-gray-500">•</span>
                      <span className="text-xs text-gray-400">{article.readTime}</span>
                    </div>
                    <h3 className="text-base font-semibold text-white mb-2 line-clamp-2">{article.title}</h3>
                    <span className="inline-block px-2 py-1 bg-primary/20 text-primary text-xs font-medium rounded">
                      {article.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} userName="Alex Sterling" />
      
      <div className="min-h-screen bg-dark text-white pb-20" style={{ backgroundColor: '#0f172a' }}>
        {/* Header with Search Bar */}
        <div className="sticky top-0 bg-dark z-50 border-b border-dark-light" style={{ backgroundColor: '#0f172a' }}>
          <div className="container-mobile py-3">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="w-10 h-10 rounded-full bg-primary-dark flex items-center justify-center border-2 border-primary flex-shrink-0 hover:opacity-90 transition-opacity cursor-pointer"
              >
                <span className="text-white text-sm font-semibold">AS</span>
              </button>
              
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-10 px-4 pl-10 bg-dark-light rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              <button className="touch-target relative flex-shrink-0 p-2 hover:bg-dark-light rounded-lg transition-colors">
                <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
            </div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="border-b border-dark-light" style={{ backgroundColor: '#0f172a' }}>
          <div className="container-mobile">
            <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-shrink-0 px-4 py-3 text-sm font-medium transition-colors relative ${
                    activeTab === tab
                      ? 'text-primary'
                      : 'text-gray-400 hover:text-gray-300'
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <main className="w-full bg-dark" style={{ backgroundColor: '#0f172a' }}>
          <div className="container-mobile py-4">
            {renderTabContent()}
          </div>
        </main>
      </div>
    </>
  );
};

export default ExploreReels;

