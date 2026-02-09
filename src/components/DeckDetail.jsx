import React from 'react';

const DeckDetail = ({ onBack }) => {
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
              <h1 className="text-lg font-bold text-white">Quantum Leap • Deck</h1>
              <p className="text-xs text-gray-400">Prototype V2 Update</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-mobile py-6 space-y-6">
        <div className="bg-dark-light rounded-2xl p-5 border border-dark-light">
          <div className="flex items-center gap-2 mb-3 text-xs text-gray-400">
            <span>COMPANY UPDATE</span>
            <span>•</span>
            <span>Deck Highlight</span>
          </div>

          <h2 className="text-2xl font-bold text-white mb-3">
            V2 Prototype: 50% Lighter, 200% Faster
          </h2>

          <div className="space-y-4 text-sm text-gray-300 leading-relaxed mb-4">
            <p>
              Just shipped our V2 prototype. 50% lighter, 200% faster, and ready for mass production. This marks a major
              leap from the first version, engineered with smarter design choices, improved efficiency, and performance
              gains that matter at scale.
            </p>

            <p>
              Every iteration was guided by real-world feedback and a focus on reliability. With validation complete and
              systems optimized, the team is stepping confidently into the mass production phase—excited for what's next
              and ready to move fast.
            </p>
          </div>

          {/* Images */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <div className="flex-shrink-0 w-48 h-32 rounded-xl overflow-hidden">
              <img src="/images/quantum.png" alt="Quantum Leap prototype" className="w-full h-full object-cover" />
            </div>
            <div className="flex-shrink-0 w-48 h-32 rounded-xl overflow-hidden">
              <img src="/images/biotech.png" alt="Quantum Leap hardware" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeckDetail;


