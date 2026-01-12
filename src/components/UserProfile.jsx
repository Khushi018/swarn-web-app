import React, { useState } from 'react';

const UserProfile = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('About');
  
  // User data
  const user = {
    name: 'Alex Sterling',
    username: 'alexsterling',
    avatar: 'AS',
    role: 'Angel Investor',
    bio: 'Passionate about investing in innovative startups that are changing the world. Focus on SaaS, AI, and CleanTech sectors.',
    location: 'San Francisco, CA',
    joined: '2020',
    investments: 24,
    portfolioValue: '$2.5M',
    following: 156,
    followers: 892,
    verified: true,
    tags: ['Angel Investor', 'SaaS', 'AI', 'CleanTech', 'Early Stage'],
    stats: {
      totalInvestments: 24,
      activeDeals: 8,
      portfolioValue: '$2.5M',
      avgReturn: '18.5%',
    },
  };

  const tabs = ['Home', 'About', 'Posts', 'Deals', 'Portfolio', 'Activity'];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Home':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-3">Overview</h3>
              <p className="text-base text-gray-300 leading-relaxed mb-4">
                {user.bio}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-dark-light rounded-xl p-4 border border-dark-light">
                <p className="text-xs text-gray-400 mb-1">Total Investments</p>
                <p className="text-xl font-bold text-white">{user.stats.totalInvestments}</p>
              </div>
              <div className="bg-dark-light rounded-xl p-4 border border-dark-light">
                <p className="text-xs text-gray-400 mb-1">Portfolio Value</p>
                <p className="text-xl font-bold text-primary">{user.stats.portfolioValue}</p>
              </div>
            </div>
          </div>
        );
      case 'About':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-3">Bio</h3>
              <p className="text-base text-gray-300 leading-relaxed mb-4">
                {user.bio}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-3">Profile Details</h3>
              <div className="bg-dark-light rounded-xl p-5 border border-dark-light space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Location</span>
                  <span className="text-white text-sm">{user.location}</span>
                </div>
                <div className="h-px bg-dark"></div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Joined</span>
                  <span className="text-white text-sm">{user.joined}</span>
                </div>
                <div className="h-px bg-dark"></div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Role</span>
                  <span className="text-white text-sm">{user.role}</span>
                </div>
                <div className="h-px bg-dark"></div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Total Investments</span>
                  <span className="text-white text-sm">{user.stats.totalInvestments}</span>
                </div>
                <div className="h-px bg-dark"></div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Portfolio Value</span>
                  <span className="text-white text-sm">{user.stats.portfolioValue}</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-3">Interests</h3>
              <div className="flex flex-wrap gap-2">
                {user.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-dark-light rounded-full text-gray-300 text-sm border border-dark-light"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      case 'Posts':
        return (
          <div className="text-center py-12">
            <p className="text-gray-400">No posts available</p>
          </div>
        );
      case 'Deals':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Active Deals</h3>
              <div className="bg-dark-light rounded-xl p-5 border border-dark-light space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Active Investments</span>
                  <span className="text-white text-lg font-semibold">{user.stats.activeDeals}</span>
                </div>
                <div className="h-px bg-dark"></div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Total Portfolio Value</span>
                  <span className="text-primary text-lg font-semibold">{user.stats.portfolioValue}</span>
                </div>
                <div className="h-px bg-dark"></div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Average Return</span>
                  <span className="text-white text-lg font-semibold">{user.stats.avgReturn}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-4">Investment Preferences</h3>
              <div className="bg-dark-light rounded-xl p-5 border border-dark-light space-y-3">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-300 text-sm">Focus on Seed and Series A stage companies</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-300 text-sm">Preferred sectors: SaaS, AI, CleanTech, HealthTech</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-300 text-sm">Typical investment range: $50K - $500K</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-300 text-sm">Actively seeking new opportunities in emerging markets</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <button className="w-full h-12 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors">
                View Investment Portfolio
              </button>
              <button className="w-full h-12 bg-dark-light border border-gray-700 text-white font-semibold rounded-xl hover:bg-dark-light/80 transition-colors">
                Download Investment Report
              </button>
            </div>
          </div>
        );
      case 'Portfolio':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Portfolio Summary</h3>
              <div className="bg-dark-light rounded-xl p-5 border border-dark-light space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Total Investments</span>
                  <span className="text-white text-lg font-semibold">{user.stats.totalInvestments}</span>
                </div>
                <div className="h-px bg-dark"></div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Active Deals</span>
                  <span className="text-primary text-lg font-semibold">{user.stats.activeDeals}</span>
                </div>
                <div className="h-px bg-dark"></div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Portfolio Value</span>
                  <span className="text-white text-lg font-semibold">{user.stats.portfolioValue}</span>
                </div>
                <div className="h-px bg-dark"></div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Average Return</span>
                  <span className="text-white text-lg font-semibold">{user.stats.avgReturn}</span>
                </div>
              </div>
            </div>
            <div className="text-center py-12">
              <p className="text-gray-400">Portfolio companies list coming soon</p>
            </div>
          </div>
        );
      case 'Activity':
        return (
          <div className="text-center py-12">
            <p className="text-gray-400">Activity feed coming soon</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-dark text-white pb-20" style={{ backgroundColor: '#0f172a' }}>
      {/* Header with Search Bar */}
      <div className="sticky top-0 bg-dark z-50 border-b border-dark-light" style={{ backgroundColor: '#0f172a' }}>
        <div className="container-mobile py-3">
          <div className="flex items-center gap-3">
            <button 
              onClick={onBack} 
              className="touch-target p-2 hover:bg-dark-light rounded-lg transition-colors flex-shrink-0"
            >
              <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex-1 relative">
              <input
                type="text"
                value={user.name}
                readOnly
                className="w-full h-10 px-4 pl-10 bg-dark-light rounded-lg text-sm text-white"
              />
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <button className="touch-target p-2 hover:bg-dark-light rounded-lg transition-colors flex-shrink-0">
              <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <button className="touch-target p-2 hover:bg-dark-light rounded-lg transition-colors flex-shrink-0">
              <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Hero Banner Section */}
      <div className="relative w-full h-48 bg-gradient-to-br from-primary/30 via-primary-dark/30 to-primary/20 overflow-hidden">
        <div className="absolute inset-0 bg-dark/40"></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-dark to-transparent"></div>
      </div>

      {/* User Info Section */}
      <div className="container-mobile -mt-16 relative z-10">
        <div className="flex items-start gap-4 mb-4">
          {/* User Avatar */}
          <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center flex-shrink-0 border-4 border-dark shadow-lg">
            <span className="text-white text-3xl font-bold">{user.avatar}</span>
          </div>
          
          <div className="flex-1 pt-2">
            <div className="flex items-center gap-2 mb-1">
              <h1 className="text-2xl font-bold text-white">{user.name}</h1>
              {user.verified && (
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              )}
            </div>
            <p className="text-sm text-gray-300 mb-2">
              {user.role} • {user.location}
            </p>
            <div className="flex items-center gap-4 mb-3">
              <div>
                <span className="text-sm font-semibold text-white">{user.investments}</span>
                <span className="text-xs text-gray-400 ml-1">Investments</span>
              </div>
              <div>
                <span className="text-sm font-semibold text-white">{user.following}</span>
                <span className="text-xs text-gray-400 ml-1">Following</span>
              </div>
              <div>
                <span className="text-sm font-semibold text-white">{user.followers}</span>
                <span className="text-xs text-gray-400 ml-1">Followers</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 mb-6">
          <button className="flex-1 h-11 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Edit Profile
          </button>
          <button className="flex-1 h-11 bg-dark-light border border-gray-700 text-white font-semibold rounded-lg hover:bg-dark-light/80 transition-colors flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            Share
          </button>
          <button className="h-11 w-11 bg-dark-light border border-gray-700 rounded-lg hover:bg-dark-light/80 transition-colors flex items-center justify-center">
            <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>
        </div>

        {/* Tabs Navigation */}
        <div className="border-b border-dark-light mb-6">
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

        {/* Tab Content */}
        <div className="pb-8">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

