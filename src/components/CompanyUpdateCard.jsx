import React from 'react';
import CompanyLogo from './CompanyLogo';

const CompanyUpdateCard = ({ isWhiteTheme = false, onViewDeck }) => {
  const handleViewDeck = () => {
    if (onViewDeck) onViewDeck();
  };
  return (
    <div className={`w-full mb-6 ${isWhiteTheme ? 'bg-white' : 'bg-dark'}`} style={isWhiteTheme ? { backgroundColor: '#ffffff' } : { backgroundColor: '#0f172a' }}>
      <div className="w-full px-4">
        <div className={`rounded-2xl p-4 border ${isWhiteTheme ? 'bg-white border-gray-200 shadow-sm' : 'bg-dark-light border-dark-light'}`}>
          {/* Header */}
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <CompanyLogo initials="QL" author="Quantum Leap" size="md" />
              <div>
                <h3 className={`text-base font-semibold ${isWhiteTheme ? 'text-gray-900' : 'text-white'}`}>Quantum Leap</h3>
                <p className={`text-xs ${isWhiteTheme ? 'text-gray-600' : 'text-gray-400'}`}>Series B • Hardware • Boston</p>
              </div>
            </div>
            <span className={`px-3 py-1 text-xs font-semibold rounded-full ${isWhiteTheme ? 'bg-yellow-500/20 text-yellow-500' : 'bg-primary/20 text-primary'}`}>
              Hot Deal
            </span>
          </div>

          {/* Content */}
          <p className={`text-base mb-4 leading-relaxed ${isWhiteTheme ? 'text-gray-900' : 'text-white'}`}>
            Just shipped our V2 prototype. 50% lighter, 200% faster. Ready for mass production. 🚀
          </p>

          {/* Images */}
          <div className="flex gap-2 mb-4 overflow-x-auto pb-2 scrollbar-hide">
            <div className="flex-shrink-0 w-48 h-32 rounded-xl overflow-hidden">
              <img src="/images/quantum.png" alt="Quantum Leap prototype" className="w-full h-full object-cover" />
            </div>
            <div className="flex-shrink-0 w-48 h-32 rounded-xl overflow-hidden">
              <img src="/images/biotech.png" alt="Quantum Leap hardware" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Footer */}
          <div className={`flex items-center justify-between pt-3 border-t ${isWhiteTheme ? 'border-gray-200' : 'border-dark'}`}>
            <span className={`text-sm font-medium ${isWhiteTheme ? 'text-gray-700' : 'text-gray-300'}`}>
              <span className={isWhiteTheme ? 'text-yellow-500' : 'text-primary'}>$15M</span> Raised / <span className={isWhiteTheme ? 'text-gray-900' : 'text-white'}>$20M</span> Target
            </span>
            <div className="flex items-center gap-2">
              <button className={`touch-target p-2 rounded-lg ${isWhiteTheme ? 'hover:bg-gray-100' : 'hover:bg-dark'}`}>
                <svg className={`w-5 h-5 ${isWhiteTheme ? 'text-yellow-500' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </button>
              <button
                className={`h-9 px-4 text-sm font-semibold rounded-lg ${isWhiteTheme ? 'bg-gray-900 text-white hover:bg-gray-800' : 'bg-white text-dark hover:bg-gray-100'}`}
                onClick={handleViewDeck}
              >
                View Deck
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyUpdateCard;

