import React from 'react';

const MarketWatchDetail = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-dark text-white pb-20" style={{ backgroundColor: '#0f172a' }}>
      {/* Header */}
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
            <div className="flex-1">
              <h1 className="text-lg font-bold text-white">Market Watch</h1>
              <p className="text-xs text-gray-400">SaaS Valuation Insight • Q3</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-mobile py-6 space-y-6">
        <div className="bg-dark-light rounded-2xl p-5 border border-dark-light">
          <div className="flex items-center gap-2 mb-3 text-xs text-gray-400">
            <span>MARKET WATCH</span>
            <span>•</span>
            <span>2H AGO</span>
            <span>•</span>
            <span>4 min read</span>
          </div>

          <h2 className="text-2xl font-bold text-white mb-3">
            Why SaaS Multiples Are Rebounding in Q3
          </h2>

          <p className="text-sm text-gray-300 mb-4">
            Analysts predict a surge in B2B valuations as interest rates stabilize.
          </p>

          <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
            <p>
              SaaS valuation multiples are showing a rebound in Q3 as easing interest-rate volatility and improved
              macro visibility restore investor confidence. Analysts note that stabilizing borrowing costs have reduced
              pressure on discount rates, making predictable, recurring revenues more attractive once again.
            </p>

            <p>
              B2B SaaS companies, in particular, are benefiting from stronger fundamentals—including resilient demand,
              long-term contracts, and improved focus on profitability and cash flows. Increased M&amp;A activity and
              selective return of growth capital have further supported higher revenue and EBITDA multiples, especially
              for AI-enabled and vertical-focused platforms.
            </p>

            <p>
              While valuations remain below the 2021 peak, experts believe the current rebound reflects a more
              disciplined and sustainable pricing environment, favoring high-quality SaaS businesses with strong unit
              economics and clear growth visibility.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketWatchDetail;


