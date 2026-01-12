import React from 'react';

const TopPicks = () => {
  const picks = [
    {
      id: 1,
      name: 'Cortex Link',
      category: 'BioTech',
      stage: 'Series A',
      match: 98,
      valuation: '$45M',
      asking: '$5M',
      logo: 'CL',
      logoColor: 'bg-teal',
    },
    {
      id: 2,
      name: 'TechFlow',
      category: 'SaaS',
      stage: 'Seed',
      match: 92,
      valuation: '$12M',
      asking: '$2M',
      logo: 'TF',
      logoColor: 'bg-primary',
    },
    {
      id: 3,
      name: 'DataVault',
      category: 'AI/ML',
      stage: 'Series B',
      match: 89,
      valuation: '$85M',
      asking: '$8M',
      logo: 'DV',
      logoColor: 'bg-purple-500',
    },
    {
      id: 4,
      name: 'CloudSync',
      category: 'SaaS',
      stage: 'Series A',
      match: 87,
      valuation: '$32M',
      asking: '$4M',
      logo: 'CS',
      logoColor: 'bg-blue-500',
    },
    {
      id: 5,
      name: 'HealthTech Pro',
      category: 'HealthTech',
      stage: 'Seed',
      match: 85,
      valuation: '$18M',
      asking: '$3M',
      logo: 'HP',
      logoColor: 'bg-orange-500',
    },
  ];

  return (
    <section className="w-full mb-6 bg-dark" style={{ backgroundColor: '#0f172a' }}>
      <div className="container-mobile">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-white">Top Picks for You</h2>
          <button className="text-primary text-sm font-medium">See All</button>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide scroll-smooth snap-x snap-mandatory">
          {picks.map((pick) => (
            <div
              key={pick.id}
              className="flex-shrink-0 w-72 bg-dark-light rounded-2xl p-4 border border-dark-light snap-start"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 ${pick.logoColor} rounded-lg flex items-center justify-center`}>
                    <span className="text-white text-sm font-bold">{pick.logo}</span>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">{pick.name}</h3>
                    <p className="text-xs text-gray-400">{pick.category} • {pick.stage}</p>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full">
                  {pick.match}% MATCH
                </span>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">VALUATION</span>
                  <span className="text-sm font-semibold text-white">{pick.valuation}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">ASKING</span>
                  <span className="text-sm font-semibold text-white">{pick.asking}</span>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 h-11 bg-dark-light border border-gray-700 rounded-xl flex items-center justify-center gap-2 text-gray-300 text-sm font-medium hover:bg-dark-light/80">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                  Save
                </button>
                <button className="flex-1 h-11 bg-primary rounded-xl text-white text-sm font-semibold hover:bg-primary-dark">
                  Interested
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopPicks;

