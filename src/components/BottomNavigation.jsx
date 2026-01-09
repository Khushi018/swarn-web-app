import React from 'react';

const BottomNavigation = ({ currentScreen = 'home', onNavigate }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: 'home', active: currentScreen === 'home' },
    { id: 'explore', label: 'Explore', icon: 'explore', active: currentScreen === 'explore' },
    { id: 'add', label: '', icon: 'add', active: false, isCenter: true },
    { id: 'chat', label: 'Chat', icon: 'chat', active: currentScreen === 'chat', badge: 2 },
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
          <svg className={iconClass} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
        );
      case 'chat':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
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
        <div className="flex items-center justify-around h-16">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => !item.isCenter && onNavigate && onNavigate(item.id)}
              className={`relative flex flex-col items-center justify-center touch-target ${
                item.isCenter 
                  ? 'w-14 h-14 bg-gradient-to-br from-green-400 via-green-500 to-green-600 rounded-full text-white -mt-6 shadow-xl shadow-green-500/50' 
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

