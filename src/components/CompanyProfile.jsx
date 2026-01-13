import React, { useState } from 'react';
import { companies } from '../data/companies';

// PostsTab Component - Instagram-like grid view
const PostsTab = ({ company }) => {
  const [selectedPost, setSelectedPost] = useState(null);

  // Generate sample posts for the company
  const getCompanyPosts = () => {
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
    const titles = [
      `${company.name} Announces Major Partnership`,
      `Watch: ${company.name} Product Demo`,
      `The Future of ${company.industry}: Industry Insights`,
      `Key Takeaways from ${company.stage} Round`,
      `${company.name} Reaches New Milestone`,
      `${company.name} Team Highlights`,
      `Innovation at ${company.name}`,
      `${company.industry} Market Update`,
      `Customer Success Story`,
      `Technology Breakthrough`,
      `Growth Milestone Achieved`,
      `Industry Recognition`,
    ];

    // Generate 18 posts for a nice grid
    return Array.from({ length: 18 }, (_, i) => {
      const type = postTypes[i % postTypes.length];
      const isReel = type === 'reel';
      
      return {
        id: i + 1,
        type: type,
        title: titles[i % titles.length],
        gradient: gradients[i % gradients.length],
        icon: icons[i % icons.length],
        likes: Math.floor(Math.random() * 1000) + 50,
        comments: Math.floor(Math.random() * 100) + 5,
        isVideo: isReel,
        duration: isReel ? `${Math.floor(Math.random() * 3) + 1}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}` : null,
        category: type.charAt(0).toUpperCase() + type.slice(1),
      };
    });
  };

  const posts = getCompanyPosts();

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
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center border-2 border-primary">
                  <span className="text-white text-xs font-semibold">{company.shortName}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{company.name}</h3>
                  <p className="text-xs text-gray-400">{selectedPost.category}</p>
                </div>
              </div>
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
              <h4 className="text-xl font-semibold text-white mb-2">{selectedPost.title}</h4>
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
              <p className="text-gray-300">This is a {selectedPost.category.toLowerCase()} post from {company.name}.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const CompanyProfile = ({ companyId, onBack }) => {
  const [activeTab, setActiveTab] = useState('About');
  const company = companies.find(c => c.id === companyId);

  if (!company) {
    return (
      <div className="min-h-screen bg-dark text-white pb-20" style={{ backgroundColor: '#0f172a' }}>
        <div className="container-mobile py-8">
          <button onClick={onBack} className="mb-4 flex items-center gap-2 text-gray-400 hover:text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
          <p className="text-center text-gray-400">Company not found</p>
        </div>
      </div>
    );
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'ON SALE':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'ON PURCHASE':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'FUND RAISE':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  // Create tabs array with Deals tab
  const tabs = ['Home', 'About', 'Posts', 'Deals', 'Life', 'People'];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Home':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-3">Overview</h3>
              <p className="text-base text-gray-300 leading-relaxed mb-4">
                {company.businessBrief}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-dark-light rounded-xl p-4 border border-dark-light">
                <p className="text-xs text-gray-400 mb-1">Valuation</p>
                <p className="text-xl font-bold text-white">{company.valuation}</p>
              </div>
              <div className="bg-dark-light rounded-xl p-4 border border-dark-light">
                <p className="text-xs text-gray-400 mb-1">Raised</p>
                <p className="text-xl font-bold text-primary">{company.raised}</p>
              </div>
            </div>
          </div>
        );
      case 'About':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-3">Overview</h3>
              <p className="text-base text-gray-300 leading-relaxed mb-4">
                {company.businessBrief}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-3">Company Details</h3>
              <div className="bg-dark-light rounded-xl p-5 border border-dark-light space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Industry</span>
                  <span className="text-white text-sm">{company.industry}</span>
                </div>
                <div className="h-px bg-dark"></div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Founded</span>
                  <span className="text-white text-sm">{company.founded}</span>
                </div>
                <div className="h-px bg-dark"></div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Employees</span>
                  <span className="text-white text-sm">{company.employees}</span>
                </div>
                <div className="h-px bg-dark"></div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Location</span>
                  <span className="text-white text-sm">{company.location}</span>
                </div>
                <div className="h-px bg-dark"></div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Stage</span>
                  <span className="text-white text-sm">{company.stage}</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {company.tags.map((tag, index) => (
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
        return <PostsTab company={company} />;
      case 'Deals':
        return (
          <div className="space-y-6">
            {/* Status Header */}
            <div className="bg-dark-light rounded-xl p-5 border border-dark-light">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${getStatusColor(company.status).split(' ')[0]}`}>
                  {company.status === 'FUND RAISE' && (
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                  {company.status === 'ON SALE' && (
                    <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  )}
                  {company.status === 'ON PURCHASE' && (
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{company.status}</h3>
                  <p className="text-sm text-gray-400">Investment Opportunity</p>
                </div>
              </div>
            </div>

            {/* Financial Details */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Financial Details</h3>
              <div className="bg-dark-light rounded-xl p-5 border border-dark-light space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Current Valuation</span>
                  <span className="text-white text-lg font-semibold">{company.valuation}</span>
                </div>
                <div className="h-px bg-dark"></div>
                {company.status === 'FUND RAISE' && (
                  <>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Amount Raised</span>
                      <span className="text-primary text-lg font-semibold">{company.raised}</span>
                    </div>
                    <div className="h-px bg-dark"></div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Funding Target</span>
                      <span className="text-white text-lg font-semibold">{company.target}</span>
                    </div>
                    <div className="h-px bg-dark"></div>
                    <div className="mt-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-400 text-xs">Progress</span>
                        <span className="text-primary text-xs font-semibold">
                          {Math.round((parseFloat(company.raised.replace('$', '').replace('M', '')) / parseFloat(company.target.replace('$', '').replace('M', ''))) * 100)}%
                        </span>
                      </div>
                      <div className="w-full bg-dark rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all"
                          style={{ 
                            width: `${Math.min((parseFloat(company.raised.replace('$', '').replace('M', '')) / parseFloat(company.target.replace('$', '').replace('M', ''))) * 100, 100)}%` 
                          }}
                        ></div>
                      </div>
                    </div>
                  </>
                )}
                {(company.status === 'ON SALE' || company.status === 'ON PURCHASE') && (
                  <>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Asking Price</span>
                      <span className="text-white text-lg font-semibold">{company.valuation}</span>
                    </div>
                    <div className="h-px bg-dark"></div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Previous Funding</span>
                      <span className="text-gray-300 text-sm">{company.raised}</span>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Investment Terms */}
            {company.status === 'FUND RAISE' && (
              <div>
                <h3 className="text-lg font-bold text-white mb-4">Investment Terms</h3>
                <div className="bg-dark-light rounded-xl p-5 border border-dark-light space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Minimum Investment</span>
                    <span className="text-white text-sm font-medium">$50,000</span>
                  </div>
                  <div className="h-px bg-dark"></div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Equity Offered</span>
                    <span className="text-white text-sm font-medium">10-15%</span>
                  </div>
                  <div className="h-px bg-dark"></div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Expected Close Date</span>
                    <span className="text-white text-sm font-medium">Q2 2024</span>
                  </div>
                  <div className="h-px bg-dark"></div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Use of Funds</span>
                    <span className="text-white text-sm font-medium text-right">Sales expansion, Product development</span>
                  </div>
                </div>
              </div>
            )}

            {/* Sale/Purchase Details */}
            {(company.status === 'ON SALE' || company.status === 'ON PURCHASE') && (
              <div>
                <h3 className="text-lg font-bold text-white mb-4">
                  {company.status === 'ON SALE' ? 'Sale Details' : 'Acquisition Details'}
                </h3>
                <div className="bg-dark-light rounded-xl p-5 border border-dark-light space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Transaction Type</span>
                    <span className="text-white text-sm font-medium">
                      {company.status === 'ON SALE' ? 'Asset Sale' : 'Strategic Acquisition'}
                    </span>
                  </div>
                  <div className="h-px bg-dark"></div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Deal Structure</span>
                    <span className="text-white text-sm font-medium">Cash + Equity</span>
                  </div>
                  <div className="h-px bg-dark"></div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Expected Closing</span>
                    <span className="text-white text-sm font-medium">Q3 2024</span>
                  </div>
                  <div className="h-px bg-dark"></div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Due Diligence Period</span>
                    <span className="text-white text-sm font-medium">60-90 days</span>
                  </div>
                </div>
              </div>
            )}

            {/* Key Highlights */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Key Highlights</h3>
              <div className="bg-dark-light rounded-xl p-5 border border-dark-light space-y-3">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-300 text-sm">Established market presence with {company.employees} employees</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-300 text-sm">Strong growth trajectory in {company.industry} sector</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-300 text-sm">Proven business model with {company.stage} stage validation</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-300 text-sm">Located in {company.location} - prime market location</p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="space-y-3">
              {company.status === 'FUND RAISE' && (
                <>
                  <button className="w-full h-12 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors">
                    Express Interest in Funding
                  </button>
                  <button className="w-full h-12 bg-dark-light border border-gray-700 text-white font-semibold rounded-xl hover:bg-dark-light/80 transition-colors">
                    Download Investment Deck
                  </button>
                </>
              )}
              {(company.status === 'ON SALE' || company.status === 'ON PURCHASE') && (
                <>
                  <button className="w-full h-12 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors">
                    {company.status === 'ON SALE' ? 'Make an Offer' : 'Express Acquisition Interest'}
                  </button>
                  <button className="w-full h-12 bg-dark-light border border-gray-700 text-white font-semibold rounded-xl hover:bg-dark-light/80 transition-colors">
                    Request Due Diligence Package
                  </button>
                </>
              )}
            </div>
          </div>
        );
      case 'Life':
        return (
          <div className="text-center py-12">
            <p className="text-gray-400">Company culture information coming soon</p>
          </div>
        );
      case 'People':
        return (
          <div className="text-center py-12">
            <p className="text-gray-400">Team members information coming soon</p>
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
                value={company.name}
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

      {/* Company Info Section */}
      <div className="container-mobile -mt-16 relative z-10">
        <div className="flex items-start gap-4 mb-4">
          {/* Company Logo */}
          <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center flex-shrink-0 border-4 border-dark shadow-lg">
            <span className="text-white text-3xl font-bold">{company.shortName}</span>
          </div>
          
          <div className="flex-1 pt-2">
            <div className="flex items-center gap-2 mb-1">
              <h1 className="text-2xl font-bold text-white">{company.name}</h1>
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-sm text-gray-300 mb-2">
              {company.industry} • {company.location} • {company.employees} employees
            </p>
            <div className="flex items-center gap-2 mb-3">
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-semibold ${getStatusColor(company.status)}`}>
                {company.status}
              </div>
              <span className="text-xs text-gray-400">{company.stage}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 mb-6">
          <button className="flex-1 h-11 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Visit website
          </button>
          <button className="flex-1 h-11 bg-dark-light border border-gray-700 text-white font-semibold rounded-lg hover:bg-dark-light/80 transition-colors flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Following
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

export default CompanyProfile;

