import React from 'react';

const InvestmentNotification = () => {
  return (
    <div className="w-full mb-6 bg-dark" style={{ backgroundColor: '#0f172a' }}>
      <div className="container-mobile">
        <button className="w-full bg-dark-light rounded-xl p-4 flex items-center gap-3 hover:bg-dark-light/80">
          <div className="flex -space-x-2">
            <div className="w-10 h-10 rounded-full bg-primary-dark border-2 border-dark flex items-center justify-center">
              <span className="text-white text-xs font-semibold">SJ</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-primary border-2 border-dark flex items-center justify-center">
              <span className="text-white text-xs font-semibold">MJ</span>
            </div>
          </div>
          <div className="flex-1 text-left">
            <p className="text-sm text-white">
              <span className="font-semibold">Sarah & Mike</span> invested in <span className="font-semibold text-primary">EcoLoop</span>
            </p>
          </div>
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default InvestmentNotification;

