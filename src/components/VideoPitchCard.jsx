import React from 'react';
import CompanyLogo from './CompanyLogo';

const VideoPitchCard = () => {
  return (
    <div className="w-full mb-6 bg-dark" style={{ backgroundColor: '#0f172a' }}>
      <div className="container-mobile">
        <div className="bg-dark-light rounded-2xl overflow-hidden border border-dark-light">
          {/* Header */}
          <div className="p-4 pb-3">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-3">
                <CompanyLogo initials="ES" author="EcoLoop Systems" size="md" />
                <div>
                  <h3 className="text-base font-semibold text-white">EcoLoop Systems</h3>
                  <p className="text-xs text-gray-400">Seed • CleanTech • San Francisco</p>
                </div>
              </div>
              <button className="touch-target">
                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Video Player */}
          <div className="relative bg-gradient-to-br from-blue-900/50 to-green-900/50 aspect-video flex items-center justify-center">
            <button className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40">
              <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-dark ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </div>
            </button>
            <div className="absolute top-3 right-3">
              <button className="touch-target bg-black/50 rounded-full p-2">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </svg>
              </button>
            </div>
          </div>

          {/* Video Info */}
          <div className="p-4 pt-3">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs text-gray-400">30s Pitch</span>
              <span className="px-2 py-1 bg-primary/20 text-primary text-xs font-semibold rounded">Revenue: $120k</span>
            </div>

            <h4 className="text-base font-semibold text-white mb-4">
              Disrupting the residential solar energy grid with AI.
            </h4>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button className="flex-1 h-11 bg-dark border border-gray-700 rounded-xl flex items-center justify-center gap-2 text-gray-300 text-sm font-medium hover:bg-dark-light">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Pass
              </button>
              <button className="flex-1 h-11 bg-dark border border-gray-700 rounded-xl flex items-center justify-center gap-2 text-gray-300 text-sm font-medium hover:bg-dark-light">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
                Save
              </button>
              <button className="flex-1 h-11 bg-dark border border-gray-700 rounded-xl flex items-center justify-center gap-2 text-gray-300 text-sm font-medium hover:bg-dark-light">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </button>
              <button className="flex-2 h-11 bg-primary rounded-xl text-white text-sm font-semibold px-4 hover:bg-primary-dark">
                I'm Interested →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPitchCard;

