import React from 'react';
import CompanyLogo from './CompanyLogo';

const VideoPitchCard = () => {
  return (
    <div className="w-full mb-6 bg-dark" style={{ backgroundColor: '#0f172a' }}>
      <div className="container-mobile">
        {/* Featured Badge */}
        <div className="flex items-center gap-2 mb-3 px-1">
          <div className="flex items-center gap-2">
            <div className="w-1 h-4 bg-gradient-to-b from-primary to-primary-dark rounded-full"></div>
            <span className="text-xs font-semibold text-primary uppercase tracking-wide">Featured Pitch</span>
          </div>
        </div>

        <div className="bg-dark-light rounded-3xl overflow-hidden border-2 border-primary/20 shadow-xl relative">
          {/* Gradient Border Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 pointer-events-none"></div>
          
          {/* Header */}
          <div className="p-5 pb-4 relative z-10">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <CompanyLogo initials="ES" author="EcoLoop Systems" size="md" showBorder={true} />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full border-2 border-dark-light flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">EcoLoop Systems</h3>
                  <p className="text-xs text-gray-400 mt-0.5">Seed • CleanTech • San Francisco</p>
                </div>
              </div>
              <button className="touch-target">
                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Video Player - Horizontal Card Style */}
          <div className="relative mx-4 mb-4 rounded-2xl overflow-hidden bg-black shadow-lg border border-primary/10">
            <video
              src="/videos/AI Solar Disruption.mp4"
              className="w-full h-full object-cover"
              controls
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Video Info */}
          <div className="px-5 pb-5 relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full border border-primary/20">30s Pitch</span>
              <span className="px-3 py-1 bg-green-500/10 text-green-400 text-xs font-semibold rounded-full border border-green-500/20">Revenue: $120k</span>
            </div>

            <h4 className="text-lg font-bold text-white mb-5 leading-snug">
              Disrupting the residential solar energy grid with AI.
            </h4>

            {/* Actions - Horizontal Layout */}
            <div className="flex items-center gap-2">
              <button className="flex-1 h-12 bg-dark border-2 border-gray-700 rounded-xl flex items-center justify-center gap-2 text-gray-300 text-sm font-semibold hover:bg-dark-light hover:border-gray-600 transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Pass
              </button>
              <button className="flex-1 h-12 bg-dark border-2 border-gray-700 rounded-xl flex items-center justify-center gap-2 text-gray-300 text-sm font-semibold hover:bg-dark-light hover:border-gray-600 transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
                Save
              </button>
              <button className="flex-1 h-12 bg-dark border-2 border-gray-700 rounded-xl flex items-center justify-center gap-2 text-gray-300 text-sm font-semibold hover:bg-dark-light hover:border-gray-600 transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </button>
              <button className="flex-1.5 h-11 bg-gradient-to-r from-primary to-primary-dark rounded-xl text-white text-sm font-bold px-4 hover:from-primary-dark hover:to-primary transition-all shadow-lg shadow-primary/20">
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

