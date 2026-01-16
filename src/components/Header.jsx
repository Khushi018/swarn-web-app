import React, { useState, useRef, useEffect } from 'react';
import Sidebar from './Sidebar';
import { companies } from '../data/companies';
import CompanyLogo from './CompanyLogo';

const Header = ({ onCompanySelect, onOpenCreatePost, onNavigate, onOpenStory }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [showLogoDropdown, setShowLogoDropdown] = useState(false);
  const searchRef = useRef(null);
  const resultsRef = useRef(null);
  const logoDropdownRef = useRef(null);

  // Handle search
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    const query = searchQuery.toLowerCase().trim();
    const filtered = companies.filter(company =>
      company.name.toLowerCase().includes(query) ||
      company.industry.toLowerCase().includes(query) ||
      company.tags.some(tag => tag.toLowerCase().includes(query))
    );

    setSearchResults(filtered);
    setShowResults(filtered.length > 0);
  }, [searchQuery]);

  // Close results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target) &&
        resultsRef.current &&
        !resultsRef.current.contains(event.target)
      ) {
        setShowResults(false);
      }
      if (
        logoDropdownRef.current &&
        !logoDropdownRef.current.contains(event.target)
      ) {
        setShowLogoDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleCompanyClick = (companyId) => {
    if (onCompanySelect) {
      onCompanySelect(companyId);
    }
    setSearchQuery('');
    setShowResults(false);
  };

  return (
    <>
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
        userName="Alex Sterling"
        onNavigate={onNavigate}
      />
      
      {/* Sticky Header - Reddit Style */}
      <header className="w-full bg-dark sticky top-0 z-50 border-b border-dark-light" style={{ backgroundColor: '#0f172a' }}>
        <div className="container-mobile py-2">
          <div className="flex items-center gap-2">
            {/* Hamburger Menu with Green Notification */}
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="relative flex-shrink-0 p-1.5 hover:bg-dark-light rounded-lg transition-colors"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 bg-green-500 rounded-full"></span>
            </button>

            {/* Logo with Dropdown */}
            <div className="relative flex-shrink-0" ref={logoDropdownRef}>
              <button
                onClick={() => setShowLogoDropdown(!showLogoDropdown)}
                className="flex items-center gap-1 rounded px-1 py-1 transition-colors active:bg-transparent"
              >
                <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-green-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
                  Swarg
                </span>
                <svg className="w-3 h-3 text-gray-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
             

              {/* Dropdown Menu */}
              {showLogoDropdown && (
                <div className="absolute top-full left-0 mt-2 bg-dark-light rounded-lg border border-dark-light shadow-xl min-w-[180px] z-50" style={{ backgroundColor: '#1e293b' }}>
                  <button
                    onClick={() => {
                      if (onNavigate) onNavigate('home');
                      setShowLogoDropdown(false);
                    }}
                    className="w-full text-left px-4 py-3 text-white hover:bg-dark transition-colors text-sm font-medium"
                  >
                    Home
                  </button>
                  <button
                    onClick={() => {
                      setShowLogoDropdown(false);
                    }}
                    className="w-full text-left px-4 py-3 text-white hover:bg-dark transition-colors text-sm font-medium border-t border-dark"
                  >
                    For Founder
                  </button>
                  <button
                    onClick={() => {
                      setShowLogoDropdown(false);
                    }}
                    className="w-full text-left px-4 py-3 text-white hover:bg-dark transition-colors text-sm font-medium border-t border-dark"
                  >
                    For Investors
                  </button>
                </div>
              )}
            </div>

            {/* Spacer */}
            <div className="flex-1"></div>

            {/* Search Icon */}
            <button className="touch-target flex-shrink-0 p-1 hover:bg-dark-light rounded-lg transition-colors">
              <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Notification Icon */}
            <button className="touch-target relative flex-shrink-0 p-1 hover:bg-dark-light rounded-lg transition-colors -ml-1">
              <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>             
            </button>
          </div>

          {/* Categories */}
          {/* <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
            <button className="flex-shrink-0 flex items-center gap-2 px-4 py-2 bg-primary rounded-full text-white text-sm font-medium">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              For You
            </button>
            <button className="flex-shrink-0 px-4 py-2 bg-dark-light rounded-full text-gray-300 text-sm font-medium hover:bg-dark-light/80">
              Fintech
            </button>
            <button className="flex-shrink-0 px-4 py-2 bg-dark-light rounded-full text-gray-300 text-sm font-medium hover:bg-dark-light/80">
              SaaS
            </button>
            <button className="flex-shrink-0 px-4 py-2 bg-dark-light rounded-full text-gray-300 text-sm font-medium hover:bg-dark-light/80">
              AI
            </button>
          </div> */}
        </div>
      </header>

      {/* Non-Sticky Stories Section - Scrolls with page */}
      <div className="w-full bg-dark" style={{ backgroundColor: '#0f172a' }}>
        <div className="container-mobile py-4">
          <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-hide">
            <button 
              onClick={() => onOpenCreatePost && onOpenCreatePost()}
              className="flex-shrink-0 flex flex-col items-center gap-2"
            >
              <div className="w-16 h-16 rounded-full bg-dark-light flex items-center justify-center border-2 border-dashed border-gray-500">
                <span className="text-white text-2xl">+</span>
              </div>
              <span className="text-xs text-gray-400">Add Story</span>
            </button>
            {[
              // Companies with multiple stories
              { 
                name: 'Quantum Leap', 
                author: 'Quantum Leap', 
                authorAvatar: 'QL',
                stories: [
                  { video: '/videos/ai-solar-story.mp4', description: 'AI Solar disruption is here! Post from startup - revolutionizing renewable energy with artificial intelligence 🌞⚡', id: 1 },
                ]
              },
              { 
                name: 'TechFlow Solutions', 
                author: 'TechFlow Solutions', 
                authorAvatar: 'TF',
                stories: [
                  { video: '/videos/video1.mp4', description: 'Just launched our new AI-powered workflow automation platform! 🚀', id: 1 },
                  { video: '/videos/video4.mp4', description: 'Seamless cloud storage solution trusted by 50,000+ businesses! ☁️', id: 2 },
                ]
              },
              { 
                name: 'GreenEnergy Innovations', 
                author: 'GreenEnergy Innovations', 
                authorAvatar: 'GE',
                stories: [
                  { video: '/videos/video2.mp4', description: 'Our solar panel technology is revolutionizing residential energy! ⚡', id: 1 },
                  { video: '/videos/video8-agritech.mp4', description: 'Smart farming technology increasing crop yields by 40%! 🌾', id: 2 },
                ]
              },
              { 
                name: 'MediCare AI', 
                author: 'MediCare AI', 
                authorAvatar: 'MA',
                stories: [
                  { video: '/videos/video6-edtech.mp4', description: '100,000+ students improving their grades with our adaptive learning system! 📚', id: 1 },
                ]
              },
              { 
                name: 'ClimateTech Solutions', 
                author: 'ClimateTech Solutions', 
                authorAvatar: 'CT',
                stories: [
                  { video: '/videos/video9-climatetech.mp4', description: 'Carbon-neutral solutions reducing emissions by 60%! Leading the fight against climate change with innovative technology. 🌍🌿', id: 1 },
                ]
              },
              // Rest without videos
              'SolarGrid', 
              'Sarah Jenkins', 
              'Vertex AI', 
              'Oper', 
              'TechFlow', 
              'DataVault', 
              'CloudSync', 
              'HealthTech Pro', 
              'FinTech Pro', 
              'EduLearn', 
              'MediCare AI', 
              'GreenEnergy', 
              'Foodie Express', 
              'RealEstate Pro', 
              'LogiChain', 
              'FitLife App', 
              'Quantum Leap', 
              'Cortex Link'
            ].map((item, index) => {
              const isVideoStory = typeof item === 'object' && item.stories;
              const name = isVideoStory ? item.name : item;
              const storyId = isVideoStory ? `story-${index}` : `story-${index}`;

              return (
                <button 
                  key={storyId}
                  onClick={() => {
                    if (isVideoStory && onOpenStory) {
                      // Map company stories to story format with company info
                      const companyStories = item.stories.map(story => ({
                        ...story,
                        author: item.author,
                        authorAvatar: item.authorAvatar,
                        time: 'Just now',
                      }));
                      onOpenStory(companyStories, 0);
                    }
                  }}
                  className="flex-shrink-0 flex flex-col items-center gap-2"
                >
                  <div className="w-16 h-16 rounded-full p-0.5 bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-dark-light flex items-center justify-center">
                      {isVideoStory && item.authorAvatar ? (
                        <CompanyLogo initials={item.authorAvatar} author={item.author} size="lg" className="border-0" />
                      ) : (
                        <span className="text-white text-sm font-semibold">{name.substring(0, 2)}</span>
                      )}
                    </div>
                  </div>
                  <span className="text-xs text-gray-400">{name.length > 8 ? name.substring(0, 8) + '...' : name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

