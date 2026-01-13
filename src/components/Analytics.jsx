import React, { useState } from 'react';

const Analytics = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = ['Overview', 'Performance', 'Pipeline', 'Notes'];

  // Capital Allocation Data
  const capitalAllocation = {
    invested: { amount: '$4.2M', change: '+12%', trend: 'up' },
    committed: { amount: '$1.5M', label: 'Allocated' },
    available: { amount: '$14.3M', label: 'For Deals' },
  };

  // Performance Data
  const performance = {
    unrealizedIRR: '+24.5%',
    totalExits: { count: 2, value: '$1.2M' },
    activePortfolio: 14,
    quarterlyData: [
      { quarter: 'Q1', value: 45 },
      { quarter: 'Q2', value: 52 },
      { quarter: 'Q3', value: 58 },
      { quarter: 'Q4', value: 75 },
    ],
  };

  // Deal Pipeline Data
  const dealPipeline = [
    { stage: 'Interested', count: 12, percentage: 85, color: 'bg-blue-500' },
    { stage: 'In Discussion', count: 5, percentage: 45, color: 'bg-yellow-500' },
    { stage: 'Due Diligence', count: 2, percentage: 20, color: 'bg-orange-500' },
    { stage: 'Invested (YTD)', count: 8, percentage: 70, color: 'bg-green-500' },
  ];

  // Activity Data
  const activity = {
    viewed: 142,
    saved: 28,
    engaged: 9,
  };

  // Top Sectors Data
  const topSectors = [
    { name: 'Fintech', percentage: 85, color: 'bg-blue-500' },
    { name: 'AI/ML', percentage: 65, color: 'bg-purple-500' },
    { name: 'SaaS', percentage: 55, color: 'bg-green-500' },
    { name: 'Health', percentage: 35, color: 'bg-orange-500' },
  ];

  // Portfolio Companies
  const portfolioCompanies = [
    {
      id: 1,
      name: 'Cortex Link',
      logo: 'CL',
      stage: 'Series A',
      industry: 'BioTech',
      status: 'Active',
      invested: '$500k',
      equity: '5.2%',
      currentVal: '$2.1M',
      moic: '4.2x',
    },
    {
      id: 2,
      name: 'PayF',
      logo: 'PF',
      stage: 'Seed',
      industry: 'Fintech',
      status: 'Active',
      invested: '$150k',
      return: '$600k',
    },
    {
      id: 3,
      name: 'TechFlow Solutions',
      logo: 'TF',
      stage: 'Series A',
      industry: 'SaaS',
      status: 'Active',
      invested: '$800k',
      equity: '8.5%',
      currentVal: '$3.2M',
      moic: '4.0x',
    },
  ];

  // Recent Notes
  const recentNotes = [
    {
      id: 1,
      title: 'Meeting with Cortex CEO',
      content: 'Discussed Q4 expansion plans into Asian market. Need to introduce them to potential partners in Singapore.',
      tags: ['Follow-up', 'Strategy'],
      time: '2h ago',
    },
    {
      id: 2,
      title: 'EcoLoop Due Diligence',
      content: 'Technical review pending. The new battery tech looks promising but need validation from external consultant.',
      time: 'Yesterday',
    },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Overview':
        return (
          <div className="space-y-6">
            {/* Capital Allocation */}
            <div className="bg-dark-light rounded-2xl p-5 border border-dark-light">
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <h3 className="text-lg font-semibold text-white">Capital Allocation</h3>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-dark rounded-xl p-4">
                  <p className="text-xs text-gray-400 mb-1">INVESTED</p>
                  <div className="flex items-center gap-2">
                    <p className="text-xl font-bold text-white">{capitalAllocation.invested.amount}</p>
                    <div className="flex items-center gap-1 text-green-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                      </svg>
                      <span className="text-xs font-semibold">{capitalAllocation.invested.change}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-dark rounded-xl p-4">
                  <p className="text-xs text-gray-400 mb-1">COMMITTED</p>
                  <p className="text-xl font-bold text-white">{capitalAllocation.committed.amount}</p>
                  <p className="text-xs text-gray-500 mt-1">{capitalAllocation.committed.label}</p>
                </div>
                <div className="bg-dark rounded-xl p-4 border-2 border-green-500">
                  <p className="text-xs text-gray-400 mb-1">AVAILABLE</p>
                  <p className="text-xl font-bold text-green-500">{capitalAllocation.available.amount}</p>
                  <p className="text-xs text-gray-500 mt-1">{capitalAllocation.available.label}</p>
                </div>
              </div>
            </div>

            {/* Performance */}
            <div className="bg-dark-light rounded-2xl p-5 border border-dark-light">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">Performance</h3>
                  <p className="text-sm text-gray-400">IRR Tracking & Gains</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-green-500">{performance.unrealizedIRR}</p>
                  <p className="text-xs text-gray-400">UNREALIZED IRR</p>
                </div>
              </div>
              
              {/* Quarterly Bar Chart */}
              <div className="flex items-end justify-between gap-2 h-32 mb-4">
                {performance.quarterlyData.map((q, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full flex items-end justify-center" style={{ height: '100%' }}>
                      <div
                        className={`w-full rounded-t ${
                          index === 3 ? 'bg-green-500' : 'bg-gray-700'
                        }`}
                        style={{ height: `${q.value}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-400">{q.quarter}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-6 pt-4 border-t border-dark">
                <div>
                  <p className="text-xs text-gray-400">TOTAL EXITS</p>
                  <p className="text-base font-semibold text-white">
                    {performance.totalExits.count} ({performance.totalExits.value})
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-400">ACTIVE PORTFOLIO</p>
                  <p className="text-base font-semibold text-white">{performance.activePortfolio} Startups</p>
                </div>
              </div>
            </div>

            {/* Deal Pipeline */}
            <div className="bg-dark-light rounded-2xl p-5 border border-dark-light">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <h3 className="text-lg font-semibold text-white">Deal Pipeline</h3>
                </div>
                <button className="px-3 py-1.5 bg-dark rounded-lg text-sm text-gray-300 hover:bg-dark-light transition-colors">
                  This Month
                </button>
              </div>
              <div className="space-y-4">
                {dealPipeline.map((deal, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-300">{deal.stage}</span>
                      <span className="text-sm font-semibold text-white">{deal.count} Deals</span>
                    </div>
                    <div className="w-full bg-dark rounded-full h-2.5">
                      <div
                        className={`${deal.color} h-2.5 rounded-full transition-all`}
                        style={{ width: `${deal.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Activity & Top Sectors */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-dark-light rounded-2xl p-5 border border-dark-light">
                <h3 className="text-base font-semibold text-white mb-4">Activity</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Viewed</p>
                      <p className="text-lg font-bold text-white">{activity.viewed}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Saved</p>
                      <p className="text-lg font-bold text-white">{activity.saved}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Engaged</p>
                      <p className="text-lg font-bold text-white">{activity.engaged}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-dark-light rounded-2xl p-5 border border-dark-light">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base font-semibold text-white">Top Sectors</h3>
                  <button className="text-xs text-primary hover:text-primary-dark transition-colors">
                    View All
                  </button>
                </div>
                <div className="space-y-3">
                  {topSectors.map((sector, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-gray-300">{sector.name}</span>
                      </div>
                      <div className="w-full bg-dark rounded-full h-2">
                        <div
                          className={`${sector.color} h-2 rounded-full`}
                          style={{ width: `${sector.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Portfolio Overview */}
            <div className="bg-dark-light rounded-2xl p-5 border border-dark-light">
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14-7H5m14 14H5" />
                </svg>
                <h3 className="text-lg font-semibold text-white">Portfolio Overview</h3>
              </div>
              <div className="space-y-4">
                {portfolioCompanies.map((company) => (
                  <div key={company.id} className="bg-dark rounded-xl p-4 border border-dark-light">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                          <span className="text-white text-sm font-bold">{company.logo}</span>
                        </div>
                        <div>
                          <h4 className="text-base font-semibold text-white">{company.name}</h4>
                          <p className="text-xs text-gray-400">
                            {company.stage} • {company.industry}
                          </p>
                        </div>
                      </div>
                      <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded">
                        {company.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <p className="text-xs text-gray-400">INVESTED</p>
                        <p className="text-sm font-semibold text-white">{company.invested}</p>
                      </div>
                      {company.equity && (
                        <div>
                          <p className="text-xs text-gray-400">EQUITY</p>
                          <p className="text-sm font-semibold text-white">{company.equity}</p>
                        </div>
                      )}
                      {company.currentVal && (
                        <div>
                          <p className="text-xs text-gray-400">CURRENT VAL</p>
                          <p className="text-sm font-semibold text-white">{company.currentVal}</p>
                        </div>
                      )}
                      {company.moic ? (
                        <div>
                          <p className="text-xs text-gray-400">MOIC</p>
                          <p className="text-sm font-semibold text-green-500">{company.moic}</p>
                        </div>
                      ) : (
                        <div>
                          <p className="text-xs text-gray-400">RETURN</p>
                          <p className="text-sm font-semibold text-green-500">{company.return}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Notes */}
            <div className="bg-dark-light rounded-2xl p-5 border border-dark-light">
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
                <h3 className="text-lg font-semibold text-white">Recent Notes</h3>
              </div>
              <div className="space-y-4">
                {recentNotes.map((note) => (
                  <div key={note.id} className="bg-dark rounded-xl p-4 border border-dark-light">
                    <h4 className="text-base font-semibold text-white mb-2">{note.title}</h4>
                    <p className="text-sm text-gray-300 mb-3 leading-relaxed">{note.content}</p>
                    {note.tags && (
                      <div className="flex items-center gap-2 mb-2">
                        {note.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-primary/20 text-primary text-xs rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <p className="text-xs text-gray-500">{note.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'Performance':
        return (
          <div className="space-y-6">
            <div className="bg-dark-light rounded-2xl p-5 border border-dark-light">
              <h3 className="text-lg font-semibold text-white mb-4">Performance Metrics</h3>
              <p className="text-gray-400">Detailed performance analysis coming soon...</p>
            </div>
          </div>
        );

      case 'Pipeline':
        return (
          <div className="space-y-6">
            <div className="bg-dark-light rounded-2xl p-5 border border-dark-light">
              <h3 className="text-lg font-semibold text-white mb-4">Deal Pipeline</h3>
              <p className="text-gray-400">Detailed pipeline view coming soon...</p>
            </div>
          </div>
        );

      case 'Notes':
        return (
          <div className="space-y-6">
            <div className="bg-dark-light rounded-2xl p-5 border border-dark-light">
              <h3 className="text-lg font-semibold text-white mb-4">All Notes</h3>
              <p className="text-gray-400">Notes management coming soon...</p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-dark text-white pb-20" style={{ backgroundColor: '#0f172a' }}>
      {/* Header */}
      <div className="sticky top-0 z-40 bg-dark-light border-b border-dark" style={{ backgroundColor: '#1e293b' }}>
        <div className="container-mobile">
          <div className="py-4">
            {onBack && (
              <button
                onClick={onBack}
                className="mb-3 flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back
              </button>
            )}
            <div className="mb-2">
              <p className="text-xs text-gray-400 uppercase tracking-wide">PORTFOLIO DASHBOARD</p>
              <h1 className="text-2xl font-bold text-white">Analytics & Insights</h1>
            </div>
            
            {/* Tabs */}
            <div className="flex items-center gap-1 mt-4 overflow-x-auto scrollbar-hide">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === tab
                      ? 'bg-green-500 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-dark'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-mobile py-6">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default Analytics;

