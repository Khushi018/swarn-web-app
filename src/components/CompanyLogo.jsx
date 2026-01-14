import React from 'react';

// Map company names/initials to logo images
const getLogoImage = (author, initials) => {
  const logoMap = {
    'TechFlow Solutions': '/images/techflow.png',
    'TF': '/images/techflow.png',
    'GreenEnergy Innovations': '/images/greentech.png',
    'GE': '/images/greentech.png',
    'MediCare AI': '/images/medicare.png',
    'MA': '/images/medicare.png',
    'FinTech Pro': '/images/fintech.png',
    'FP': '/images/fintech.png',
    'DataVault': '/images/datavault.png',
    'DV': '/images/datavault.png',
    'CloudSync Technologies': '/images/stock.png',
    'CS': '/images/stock.png',
    'EcoLoop Systems': '/images/ecoloops.png',
    'ES': '/images/ecoloops.png',
    'Quantum Leap': '/images/quantum.png',
    'QL': '/images/quantum.png',
  };

  return logoMap[author] || logoMap[initials] || null;
};

// Color gradients for different company initials (fallback when no image)
const getLogoGradient = (initials) => {
  const gradients = {
    'TF': 'from-blue-500 to-purple-600',
    'GE': 'from-green-500 to-emerald-600',
    'MA': 'from-red-500 to-pink-600',
    'CS': 'from-cyan-500 to-blue-600',
    'FP': 'from-indigo-500 to-purple-600',
    'EL': 'from-orange-500 to-yellow-600',
    'ME': 'from-rose-500 to-pink-600',
    'AG': 'from-lime-500 to-green-600',
    'CT': 'from-teal-500 to-cyan-600',
    'SG': 'from-yellow-500 to-orange-600',
    'SJ': 'from-purple-500 to-indigo-600',
    'VA': 'from-teal-500 to-cyan-600',
    'OP': 'from-violet-500 to-purple-600',
    'DV': 'from-slate-500 to-gray-600',
    'HP': 'from-red-500 to-rose-600',
    'FE': 'from-amber-500 to-orange-600',
    'RE': 'from-blue-500 to-indigo-600',
    'LC': 'from-emerald-500 to-teal-600',
    'FA': 'from-pink-500 to-rose-600',
    'QL': 'from-indigo-500 to-blue-600',
    'CL': 'from-cyan-500 to-teal-600',
  };

  return gradients[initials] || 'from-primary to-primary-dark';
};

const CompanyLogo = ({ initials, author, size = 'md', className = '', showBorder = false }) => {
  const sizeClasses = {
    xs: 'w-6 h-6 text-xs',
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
    xl: 'w-16 h-16 text-lg',
    '2xl': 'w-20 h-20 text-xl',
  };

  const logoImage = getLogoImage(author, initials);
  const gradient = getLogoGradient(initials);
  const sizeClass = sizeClasses[size] || sizeClasses.md;

  return (
    <div
      className={`${sizeClass} rounded-full ${logoImage ? 'bg-dark-light' : `bg-gradient-to-br ${gradient}`} flex items-center justify-center flex-shrink-0 ${showBorder ? 'border-2 border-white' : ''} ${className} overflow-hidden`}
    >
      {logoImage ? (
        <img src={logoImage} alt={author || initials} className="w-full h-full object-cover" />
      ) : (
        <span className="text-white font-bold">{initials}</span>
      )}
    </div>
  );
};

export default CompanyLogo;
