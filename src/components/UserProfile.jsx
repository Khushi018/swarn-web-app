import React, { useState } from 'react';

// PostsGrid Component - Instagram-like grid view
const PostsGrid = ({ user }) => {
  const [selectedPost, setSelectedPost] = useState(null);

  // Generate sample posts for the user
  const getUserPosts = () => {
    const gradients = [
      'from-blue-500/30 via-purple-500/30 to-pink-500/30',
      'from-green-500/30 via-emerald-500/30 to-teal-500/30',
      'from-red-500/30 via-pink-500/30 to-rose-500/30',
      'from-yellow-500/30 via-orange-500/30 to-amber-500/30',
      'from-indigo-500/30 via-blue-500/30 to-cyan-500/30',
      'from-purple-500/30 via-pink-500/30 to-red-500/30',
      'from-teal-500/30 via-cyan-500/30 to-blue-500/30',
      'from-orange-500/30 via-red-500/30 to-pink-500/30',
      'from-blue-500/30 via-indigo-500/30 to-purple-500/30',
      'from-green-500/30 via-teal-500/30 to-cyan-500/30',
      'from-red-500/30 via-orange-500/30 to-yellow-500/30',
      'from-purple-500/30 via-indigo-500/30 to-blue-500/30',
    ];

    const postTypes = ['news', 'article', 'note', 'reel'];
    const icons = ['📰', '📝', '📋', '🎬', '💡', '📊', '🎯', '🚀', '💼', '🌟', '📈', '✨'];

    // Generate 18 posts for a nice grid
    return Array.from({ length: 18 }, (_, i) => {
      const type = postTypes[i % postTypes.length];
      const isReel = type === 'reel';
      
      return {
        id: i + 1,
        type: type,
        title: `Post ${i + 1}`,
        gradient: gradients[i % gradients.length],
        icon: icons[i % icons.length],
        likes: Math.floor(Math.random() * 1000) + 50,
        comments: Math.floor(Math.random() * 100) + 5,
        isVideo: isReel,
        duration: isReel ? `${Math.floor(Math.random() * 3) + 1}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}` : null,
      };
    });
  };

  const posts = getUserPosts();

  const getTypeIcon = (type) => {
    switch (type) {
      case 'news':
        return '📰';
      case 'article':
        return '📝';
      case 'note':
        return '📋';
      case 'reel':
        return '🎬';
      default:
        return '📄';
    }
  };

  return (
    <div className="w-full">
      {/* Grid Layout - 3 columns like Instagram */}
      <div className="grid grid-cols-3 gap-1 md:gap-2">
        {posts.map((post) => (
          <div
            key={post.id}
            className="relative aspect-square bg-dark-light rounded-lg overflow-hidden cursor-pointer group"
            onClick={() => setSelectedPost(post)}
          >
            {/* Post Thumbnail */}
            <div className={`w-full h-full bg-gradient-to-br ${post.gradient} flex items-center justify-center relative`}>
              <div className="text-4xl opacity-40">{post.icon}</div>
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-4 text-white">
                  {/* Likes */}
                  <div className="flex items-center gap-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                    <span className="text-sm font-semibold">{post.likes}</span>
                  </div>
                  
                  {/* Comments */}
                  <div className="flex items-center gap-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span className="text-sm font-semibold">{post.comments}</span>
                  </div>
                </div>
              </div>

              {/* Video/Reel indicator */}
              {post.isVideo && (
                <div className="absolute top-2 left-2 flex items-center gap-1 text-white bg-black/50 rounded px-2 py-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"/>
                  </svg>
                  {post.duration && (
                    <span className="text-xs font-medium">{post.duration}</span>
                  )}
                </div>
              )}

              {/* Type badge (top right) */}
              <div className="absolute top-2 right-2">
                <div className="w-6 h-6 rounded-full bg-black/50 flex items-center justify-center text-xs">
                  {getTypeIcon(post.type)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Post count info */}
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-400">
          {posts.length} {posts.length === 1 ? 'post' : 'posts'}
        </p>
      </div>

      {/* Modal for post details (optional - can be enhanced later) */}
      {selectedPost && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPost(null)}
        >
          <div 
            className="bg-dark-light rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-dark-light flex justify-between items-center">
              <h3 className="text-lg font-semibold text-white">Post {selectedPost.id}</h3>
              <button
                onClick={() => setSelectedPost(null)}
                className="text-gray-400 hover:text-white"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className={`aspect-video bg-gradient-to-br ${selectedPost.gradient} flex items-center justify-center`}>
              <div className="text-8xl opacity-50">{selectedPost.icon}</div>
            </div>
            <div className="p-4">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1 text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                  <span className="font-semibold">{selectedPost.likes}</span>
                </div>
                <div className="flex items-center gap-1 text-white">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span className="font-semibold">{selectedPost.comments}</span>
                </div>
              </div>
              <p className="text-white">This is a {selectedPost.type} post.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

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
            {/* Portfolio Summary Card */}
            <div className="bg-dark-light rounded-2xl p-5 border border-dark-light">
              <h3 className="text-lg font-semibold text-white mb-4">Portfolio Summary</h3>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-xs text-gray-400 mb-1">Total Invested</p>
                  <p className="text-2xl font-bold text-white">{user.stats.portfolioValue}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Portfolio Value</p>
                  <p className="text-2xl font-bold text-primary">$3.2M</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-400 mb-1">Active Investments</p>
                  <p className="text-lg font-semibold text-white">{user.stats.activeDeals}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Exits</p>
                  <p className="text-lg font-semibold text-white">2</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-dark">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">Average IRR</span>
                  <span className="text-lg font-semibold text-green-500">{user.stats.avgReturn}</span>
                </div>
              </div>
              <button className="w-full mt-4 h-11 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors">
                View Full Analytics
              </button>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-3">Overview</h3>
              <p className="text-base text-gray-300 leading-relaxed mb-4">
                {user.bio}
              </p>
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
        return <PostsGrid user={user} />;
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
        const activities = [
          { id: 1, type: 'viewed', company: 'TechFlow Solutions', time: '2h ago', icon: '👁️' },
          { id: 2, type: 'saved', company: 'GreenEnergy Innovations', time: '5h ago', icon: '💾' },
          { id: 3, type: 'interested', company: 'MediCare AI', time: '1d ago', icon: '💡' },
          { id: 4, type: 'commented', company: 'FinTech Pro', time: '2d ago', icon: '💬' },
          { id: 5, type: 'shared', company: 'EduLearn Platform', time: '3d ago', icon: '📤' },
          { id: 6, type: 'viewed', company: 'CloudSync Technologies', time: '4d ago', icon: '👁️' },
        ];

        return (
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white mb-4">Recent Activity</h3>
            {activities.map((activity) => (
              <div key={activity.id} className="bg-dark-light rounded-xl p-4 border border-dark-light">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-xl">
                    {activity.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-white">
                      <span className="font-semibold">You</span> {activity.type} <span className="font-semibold">{activity.company}</span>
                    </p>
                    <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
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
      <div className="relative w-full h-32 bg-gradient-to-br from-primary/30 via-primary-dark/30 to-primary/20 overflow-hidden">
        <div className="absolute inset-0 bg-dark/40"></div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-dark to-transparent"></div>
      </div>

      {/* User Info Section */}
      <div className="container-mobile -mt-12 relative z-10">
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
          </div>
        </div>

        {/* Profile Statistics */}
        <div className="flex items-center justify-around py-4 mb-4 border-y border-dark-light">
          <div className="flex flex-col items-center">
            <span className="text-lg font-bold text-white">{user.investments}</span>
            <span className="text-xs text-gray-400">Investments</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-lg font-bold text-white">18</span>
            <span className="text-xs text-gray-400">Saved</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-lg font-bold text-white">{user.following}</span>
            <span className="text-xs text-gray-400">Following</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-lg font-bold text-white">{user.followers}</span>
            <span className="text-xs text-gray-400">Followers</span>
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

