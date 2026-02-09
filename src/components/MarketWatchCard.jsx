import React from 'react';

const MarketWatchCard = ({ isWhiteTheme = false, onOpen }) => {
  const handleClick = () => {
    if (onOpen) onOpen();
  };

  return (
    <div
      className={`w-full mb-6 ${isWhiteTheme ? 'bg-white' : 'bg-dark'}`}
      style={isWhiteTheme ? { backgroundColor: '#ffffff' } : { backgroundColor: '#0f172a' }}
    >
      <div className="w-full px-4">
        <button
          type="button"
          onClick={handleClick}
          className={`w-full text-left rounded-2xl p-4 border transition-colors touch-target ${
            isWhiteTheme
              ? 'bg-white border-gray-200 shadow-sm hover:bg-gray-50'
              : 'bg-dark-light border-dark-light hover:bg-dark'
          }`}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className={`text-xs font-medium ${isWhiteTheme ? 'text-gray-600' : 'text-gray-400'}`}>MARKET WATCH</span>
            <span className={`text-xs ${isWhiteTheme ? 'text-gray-400' : 'text-gray-500'}`}>•</span>
            <span className={`text-xs ${isWhiteTheme ? 'text-gray-600' : 'text-gray-400'}`}>2H AGO</span>
          </div>

          <h3 className={`text-lg font-semibold mb-2 ${isWhiteTheme ? 'text-gray-900' : 'text-white'}`}>
            Why SaaS Multiples Are Rebounding in Q3
          </h3>

          <p className={`text-sm mb-4 leading-relaxed ${isWhiteTheme ? 'text-gray-600' : 'text-gray-400'}`}>
            SaaS valuation multiples are showing a rebound in Q3 as easing interest-rate volatility and improved macro
            visibility restore investor confidence...
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className={`text-xs ${isWhiteTheme ? 'text-gray-600' : 'text-gray-400'}`}>4 min read</span>
              <span className={`text-xs font-semibold ${isWhiteTheme ? 'text-yellow-500' : 'text-primary'}`}>Trending</span>
            </div>
            <div className={`w-16 h-12 rounded-lg flex items-center justify-center p-2 ${isWhiteTheme ? 'bg-gray-50' : 'bg-dark'}`}>
              <svg className={`w-full h-full ${isWhiteTheme ? 'text-yellow-500' : 'text-primary'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default MarketWatchCard;

