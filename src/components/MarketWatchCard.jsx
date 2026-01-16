import React from 'react';

const MarketWatchCard = () => {
  return (
    <div className="w-full mb-6 bg-dark" style={{ backgroundColor: '#0f172a' }}>
      <div className="w-full px-4">
        <div className="bg-dark-light rounded-2xl p-4 border border-dark-light">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs text-gray-400 font-medium">MARKET WATCH</span>
            <span className="text-xs text-gray-500">•</span>
            <span className="text-xs text-gray-400">2H AGO</span>
          </div>

          <h3 className="text-lg font-semibold text-white mb-2">
            Why SaaS Multiples are Rebounding in Q3
          </h3>

          <p className="text-sm text-gray-400 mb-4 leading-relaxed">
            Analysts predict a surge in B2B valuations as interest rates stabilize...
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-xs text-gray-400">4 min read</span>
              <span className="text-xs text-primary font-semibold">Trending</span>
            </div>
            <div className="w-16 h-12 bg-dark rounded-lg flex items-center justify-center p-2">
              <svg className="w-full h-full text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketWatchCard;

