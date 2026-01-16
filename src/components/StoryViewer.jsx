import React, { useState, useEffect, useRef } from 'react';
import CompanyLogo from './CompanyLogo';

const StoryViewer = ({ stories, initialStoryIndex = 0, onClose }) => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(initialStoryIndex);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);
  const progressIntervalRef = useRef(null);

  const currentStory = stories[currentStoryIndex];

  const handleNext = () => {
    if (currentStoryIndex < stories.length - 1) {
      setCurrentStoryIndex(currentStoryIndex + 1);
    } else {
      onClose();
    }
  };

  useEffect(() => {
    // Reset progress when story changes
    setProgress(0);

    const video = videoRef.current;
    if (!video) return;

    // Play video
    video.currentTime = 0;
    video.play().catch(() => {});

    // Update progress based on video playback
    const updateProgress = () => {
      if (video.duration) {
        const newProgress = (video.currentTime / video.duration) * 100;
        setProgress(newProgress);
      }
    };

    const handleTimeUpdate = () => {
      updateProgress();
    };

    const handleLoadedMetadata = () => {
      updateProgress();
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);

    // Progress bar update interval
    progressIntervalRef.current = setInterval(() => {
      updateProgress();
    }, 50);

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, [currentStoryIndex, stories.length]);

  const handlePrevious = () => {
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex(currentStoryIndex - 1);
    } else {
      onClose();
    }
  };

  const handleVideoEnd = () => {
    handleNext();
  };

  const handleVideoClick = (e) => {
    const video = e.currentTarget;
    const rect = video.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;

    // Left half = previous, right half = next
    if (clickX < width / 2) {
      handlePrevious();
    } else {
      handleNext();
    }
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        handlePrevious();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentStoryIndex, stories.length]);

  if (!stories || stories.length === 0) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black">
      {/* Video Container - Full Screen with bottom padding for interactions */}
      <div className="relative w-full h-full flex items-center justify-center pb-24">
        <video
          ref={videoRef}
          src={currentStory.video}
          className="w-full h-full object-contain"
          onClick={handleVideoClick}
          onEnded={handleVideoEnd}
          loop={false}
          playsInline
          autoPlay
          muted={false}
        />

        {/* Top Overlay - Progress Bars */}
        <div className="absolute top-0 left-0 right-0 z-10">
          <div className="flex gap-1 p-2 pt-3">
            {stories.map((story, index) => (
              <div
                key={story.id || index}
                className="h-1 flex-1 bg-white/30 rounded-full overflow-hidden"
              >
                <div
                  className={`h-full bg-white rounded-full transition-all duration-75 ${
                    index < currentStoryIndex ? 'w-full' : index === currentStoryIndex ? 'w-full' : 'w-0'
                  }`}
                  style={{
                    width: index < currentStoryIndex ? '100%' : index === currentStoryIndex ? `${progress}%` : '0%',
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Company Info Overlay on Video */}
        <div className="absolute top-6 left-4 z-10 flex items-center gap-3">
          <CompanyLogo initials={currentStory.authorAvatar} author={currentStory.author} size="md" showBorder={true} className="shadow-lg" />
          <div>
            <p className="text-white font-semibold text-sm drop-shadow-lg">{currentStory.author}</p>
            <p className="text-white/90 text-xs drop-shadow-lg">{currentStory.time || 'Just now'}</p>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors shadow-lg"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Bottom Interaction Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm border-t border-white/10 z-10">
          <div className="flex items-center gap-3 p-4">
            {/* Message Input */}
            <input
              type="text"
              placeholder="Send message"
              className="flex-1 px-4 py-2.5 bg-dark-light rounded-full text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              style={{ backgroundColor: '#1e293b' }}
            />
            
            {/* Action Icons */}
            <div className="flex items-center gap-4">
              {/* Like Button */}
              <button className="touch-target">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>

              {/* Comment Button */}
              <button className="touch-target">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </button>

              {/* Share Button */}
              <button className="touch-target">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Hints */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-full cursor-pointer z-10" onClick={handlePrevious} />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full cursor-pointer z-10" onClick={handleNext} />
      </div>
    </div>
  );
};

export default StoryViewer;

