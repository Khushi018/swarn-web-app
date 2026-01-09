import React, { useState } from 'react';
import Sidebar from './Sidebar';

const ExploreReels = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Videos');
  const [searchQuery, setSearchQuery] = useState('');

  // Generate sample data
  const videos = Array.from({ length: 24 }, (_, i) => ({
    id: i + 1,
    title: `Startup Pitch ${i + 1}`,
    views: Math.floor(Math.random() * 10000) + 1000,
    likes: Math.floor(Math.random() * 500) + 50,
    thumbnail: `reel-${i + 1}`,
  }));

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
          <div className="grid grid-cols-3 gap-1">
            {videos.map((video) => (
              <div
                key={video.id}
                className="aspect-[9/16] bg-dark-light rounded-lg overflow-hidden relative group cursor-pointer"
              >
                <div className="w-full h-full bg-gradient-to-br from-primary/20 via-purple-500/20 to-blue-500/20 flex items-center justify-center relative">
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                    <svg className="w-8 h-8 text-white opacity-80" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                  <div className="absolute top-2 right-2 px-1.5 py-0.5 bg-black/60 rounded text-xs text-white font-medium">
                    {Math.floor(Math.random() * 60) + 15}s
                  </div>
                  <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-white text-xs">
                    <div className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                      <span className="font-semibold">{(video.views / 1000).toFixed(1)}k</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.834a1 1 0 001.8.6l2.7-3.6-2.7-3.6a1 1 0 00-1.8.6zM12.326 7.4a1 1 0 00-1.152 1.152l1.224 4.652a1 1 0 001.152.776l4.652-1.224a1 1 0 00.776-1.152l-1.224-4.652a1 1 0 00-1.152-.776l-4.652 1.224z" />
                      </svg>
                      <span className="font-semibold">{video.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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

