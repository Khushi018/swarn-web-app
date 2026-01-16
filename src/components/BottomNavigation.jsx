import React from 'react';

const BottomNavigation = ({ currentScreen = 'home', onNavigate, onOpenCreatePost }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: 'home', active: currentScreen === 'home' },
    { id: 'explore', label: 'Explore', icon: 'explore', active: currentScreen === 'explore' },
    { id: 'add', label: 'Post', icon: 'add', active: false, isCenter: true },
    { id: 'reels', label: 'Reels', icon: 'reels', active: currentScreen === 'reels' },
    { id: 'profile', label: 'Profile', icon: 'profile', active: currentScreen === 'profile' },
  ];

  const getIcon = (iconName) => {
    const iconClass = "w-6 h-6";
    
    switch (iconName) {
      case 'home':
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        );
      case 'explore':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        );
      case 'add':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        );
      case 'reels':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        );
      case 'profile':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-dark-light border-t border-dark z-50 safe-area-bottom" style={{ backgroundColor: '#1e293b' }}>
      <div className="container-mobile">
        <div className="flex items-center justify-between h-16 gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                if (item.isCenter && onOpenCreatePost) {
                  onOpenCreatePost();
                } else if (!item.isCenter && onNavigate) {
                  onNavigate(item.id);
                }
              }}
              className={`relative flex flex-col items-center justify-center touch-target ${
                item.isCenter 
                  ? 'flex-1 text-gray-400' 
                  : 'flex-1 text-gray-400'
              } ${item.active && !item.isCenter ? 'text-primary' : ''}`}
            >
              {getIcon(item.icon)}
              {item.label && (
                <span className={`text-xs mt-1 ${item.active && !item.isCenter ? 'text-primary' : 'text-gray-400'}`}>
                  {item.label}
                </span>
              )}
              {item.badge && (
                <span className="absolute top-0 right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default BottomNavigation;

