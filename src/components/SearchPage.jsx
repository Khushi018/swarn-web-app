import React, { useState, useEffect, useMemo } from 'react';
import { companies } from '../data/companies';

const SearchPage = ({ onBack, onCompanySelect }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);

  // Load search history from localStorage on mount
  useEffect(() => {
    const savedHistory = localStorage.getItem('searchHistory');
    if (savedHistory) {
      try {
        setSearchHistory(JSON.parse(savedHistory));
      } catch (e) {
        console.error('Failed to parse search history:', e);
      }
    }
  }, []);

  // Save search history to localStorage whenever it changes
  useEffect(() => {
    if (searchHistory.length > 0) {
      localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    }
  }, [searchHistory]);

  // Trending searches (you can make this dynamic later)
  const trendingSearches = [
    'SaaS',
    'AI',
    'CleanTech',
    'Fintech',
    'HealthTech',
    'D2C',
    'Series A',
    'Seed',
  ];

  // Filter companies based on search query
  const filteredCompanies = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    return companies.filter(
      (company) =>
        company.name.toLowerCase().includes(query) ||
        company.industry.toLowerCase().includes(query) ||
        company.location.toLowerCase().includes(query) ||
        company.tags?.some((tag) => tag.toLowerCase().includes(query))
    );
  }, [searchQuery]);

  // Handle search input change (just updates the query, doesn't save to history)
  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  // Handle search on Enter key (saves to history)
  const handleSearchSubmit = (query) => {
    if (query.trim() && !searchHistory.includes(query)) {
      const newHistory = [query, ...searchHistory].slice(0, 10); // Keep last 10 searches
      setSearchHistory(newHistory);
    }
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      handleSearchSubmit(searchQuery);
    }
  };

  // Clear search history
  const clearHistory = () => {
    setSearchHistory([]);
    localStorage.removeItem('searchHistory');
  };

  // Remove a single history item
  const removeHistoryItem = (item) => {
    setSearchHistory(searchHistory.filter((h) => h !== item));
  };

  // Handle company click
  const handleCompanyClick = (company) => {
    // Save company name to search history
    if (company.name.trim() && !searchHistory.includes(company.name)) {
      const newHistory = [company.name, ...searchHistory].slice(0, 10); // Keep last 10 searches
      setSearchHistory(newHistory);
    }
    
    if (onCompanySelect) {
      onCompanySelect(company.id);
    }
  };

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
            
            {/* Search Input */}
            <div className="flex-1 relative">
              <svg 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search companies..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full h-12 pl-10 pr-4 bg-dark-light rounded-lg text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:border-primary"
                autoFocus
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-mobile py-6">
        {searchQuery.trim() ? (
          // Search Results
          <div>
            {filteredCompanies.length > 0 ? (
              <div className="space-y-3">
                <p className="text-sm text-gray-400 mb-4">
                  Found {filteredCompanies.length} {filteredCompanies.length === 1 ? 'company' : 'companies'}
                </p>
                {filteredCompanies.map((company) => (
                  <div
                    key={company.id}
                    onClick={() => handleCompanyClick(company)}
                    className="p-4 bg-dark-light rounded-xl border border-white/10 hover:bg-white/5 cursor-pointer transition-colors"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-white font-semibold text-base mb-1">{company.name}</h3>
                        <p className="text-sm text-gray-400 mb-2">{company.industry} • {company.location}</p>
                        <p className="text-xs text-gray-500 mb-3 line-clamp-2">{company.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {company.tags?.slice(0, 4).map((tag, idx) => (
                            <span key={idx} className="px-2 py-1 bg-white/5 rounded text-xs text-gray-300">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className="text-xs text-gray-400 mb-1">{company.stage}</p>
                        <p className="text-xs text-primary font-semibold">{company.status}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <svg className="w-16 h-16 text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <p className="text-gray-400 text-base mb-2">No companies found</p>
                <p className="text-gray-500 text-sm">Try searching with different keywords</p>
              </div>
            )}
          </div>
        ) : (
          // Default View: Trending + History
          <div className="space-y-8">
            {/* Trending Searches */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-white">Trending Searches</h2>
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="flex flex-wrap gap-2">
                {trendingSearches.map((term, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      handleSearchChange(term);
                      handleSearchSubmit(term);
                    }}
                    className="px-4 py-2 bg-dark-light rounded-full text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors border border-white/10"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>

            {/* Search History */}
            {searchHistory.length > 0 && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-bold text-white">Recent Searches</h2>
                  <button
                    onClick={clearHistory}
                    className="text-xs text-gray-400 hover:text-white transition-colors"
                  >
                    Clear all
                  </button>
                </div>
                <div className="space-y-2">
                  {searchHistory.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 bg-dark-light rounded-lg border border-white/10 hover:bg-white/5 transition-colors group"
                    >
                      <button
                        onClick={() => {
                          handleSearchChange(item);
                          handleSearchSubmit(item);
                        }}
                        className="flex items-center gap-3 flex-1 text-left"
                      >
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-300 text-sm">{item}</span>
                      </button>
                      <button
                        onClick={() => removeHistoryItem(item)}
                        className="opacity-0 group-hover:opacity-100 p-1 hover:bg-white/10 rounded transition-opacity"
                      >
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Empty State */}
            {searchHistory.length === 0 && (
              <div className="text-center py-12">
                <svg className="w-16 h-16 text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <p className="text-gray-400 text-base mb-2">Start searching for companies</p>
                <p className="text-gray-500 text-sm">Your recent searches will appear here</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;

