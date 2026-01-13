import React, { useState } from 'react';

const FeedPreferences = ({ onBack }) => {
  const [preferences, setPreferences] = useState({
    contentTypes: {
      news: true,
      articles: true,
      videos: true,
      notes: true,
      reels: true,
    },
    sortBy: 'recent',
    showVerifiedOnly: false,
    industryFilters: {
      SaaS: true,
      AI: true,
      CleanTech: true,
      HealthTech: true,
      FinTech: true,
      EdTech: false,
    },
    stageFilters: {
      Seed: true,
      'Series A': true,
      'Series B': true,
      'Series C': false,
    },
    notifications: {
      newPosts: true,
      trending: true,
      recommendations: false,
    },
  });

  const handleToggle = (category, key) => {
    if (category === 'filters' && key === 'showVerifiedOnly') {
      setPreferences((prev) => ({
        ...prev,
        showVerifiedOnly: !prev.showVerifiedOnly,
      }));
    } else {
      setPreferences((prev) => ({
        ...prev,
        [category]: {
          ...prev[category],
          [key]: !prev[category][key],
        },
      }));
    }
  };

  const handleSortChange = (value) => {
    setPreferences((prev) => ({
      ...prev,
      sortBy: value,
    }));
  };

  const PreferenceSection = ({ title, children, description }) => (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
        {description && (
          <p className="text-sm text-gray-400">{description}</p>
        )}
      </div>
      {children}
    </div>
  );

  const ToggleItem = ({ label, checked, onChange, description }) => (
    <div className="flex items-center justify-between py-3 border-b border-dark">
      <div className="flex-1">
        <p className="text-sm font-medium text-white">{label}</p>
        {description && (
          <p className="text-xs text-gray-400 mt-0.5">{description}</p>
        )}
      </div>
      <button
        onClick={onChange}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
          checked ? 'bg-primary' : 'bg-gray-600'
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            checked ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  );

  const SelectItem = ({ label, value, options, onChange, description }) => (
    <div className="py-3 border-b border-dark">
      <div className="flex items-center justify-between mb-2">
        <div className="flex-1">
          <p className="text-sm font-medium text-white">{label}</p>
          {description && (
            <p className="text-xs text-gray-400 mt-0.5">{description}</p>
          )}
        </div>
      </div>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 bg-dark border border-dark-light rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );

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
              <h1 className="text-lg font-bold text-white">Feed Preferences</h1>
              <p className="text-xs text-gray-400">Customize your feed experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-mobile py-6">
        <div className="space-y-8">
          {/* Content Types */}
          <div className="bg-dark-light rounded-xl p-5 border border-dark-light">
            <PreferenceSection title="Content Types" description="Choose which types of content appear in your feed">
              {Object.entries(preferences.contentTypes).map(([key, value]) => (
                <ToggleItem
                  key={key}
                  label={key.charAt(0).toUpperCase() + key.slice(1)}
                  checked={value}
                  onChange={() => handleToggle('contentTypes', key)}
                  description={`Show ${key} in your feed`}
                />
              ))}
            </PreferenceSection>
          </div>

          {/* Sort Options */}
          <div className="bg-dark-light rounded-xl p-5 border border-dark-light">
            <PreferenceSection title="Sort Feed By" description="Choose how posts are organized in your feed">
              <SelectItem
                label="Default Sort Order"
                value={preferences.sortBy}
                options={[
                  { value: 'recent', label: 'Most Recent' },
                  { value: 'trending', label: 'Trending' },
                  { value: 'popular', label: 'Most Popular' },
                  { value: 'relevance', label: 'Relevance' },
                ]}
                onChange={handleSortChange}
                description="Posts will be sorted by your selected criteria"
              />
            </PreferenceSection>
          </div>

          {/* Filters */}
          <div className="bg-dark-light rounded-xl p-5 border border-dark-light">
            <PreferenceSection title="Feed Filters" description="Filter content based on your preferences">
              <ToggleItem
                label="Verified Companies Only"
                checked={preferences.showVerifiedOnly}
                onChange={() => handleToggle('filters', 'showVerifiedOnly')}
                description="Show posts only from verified companies"
              />
            </PreferenceSection>
          </div>

          {/* Industry Filters */}
          <div className="bg-dark-light rounded-xl p-5 border border-dark-light">
            <PreferenceSection title="Industry Preferences" description="Select industries you want to see in your feed">
              {Object.entries(preferences.industryFilters).map(([key, value]) => (
                <ToggleItem
                  key={key}
                  label={key}
                  checked={value}
                  onChange={() => handleToggle('industryFilters', key)}
                />
              ))}
            </PreferenceSection>
          </div>

          {/* Stage Filters */}
          <div className="bg-dark-light rounded-xl p-5 border border-dark-light">
            <PreferenceSection title="Company Stage" description="Filter companies by funding stage">
              {Object.entries(preferences.stageFilters).map(([key, value]) => (
                <ToggleItem
                  key={key}
                  label={key}
                  checked={value}
                  onChange={() => handleToggle('stageFilters', key)}
                />
              ))}
            </PreferenceSection>
          </div>

          {/* Notifications */}
          <div className="bg-dark-light rounded-xl p-5 border border-dark-light">
            <PreferenceSection title="Feed Notifications" description="Choose what notifications you receive">
              {Object.entries(preferences.notifications).map(([key, value]) => (
                <ToggleItem
                  key={key}
                  label={key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                  checked={value}
                  onChange={() => handleToggle('notifications', key)}
                  description={`Get notified about ${key.toLowerCase()}`}
                />
              ))}
            </PreferenceSection>
          </div>

          {/* Save Button */}
          <div className="space-y-3 pb-6">
            <button className="w-full h-12 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors">
              Save Preferences
            </button>
            <button className="w-full h-12 bg-dark-light border border-gray-700 text-white font-semibold rounded-xl hover:bg-dark-light/80 transition-colors">
              Reset to Default
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedPreferences;

