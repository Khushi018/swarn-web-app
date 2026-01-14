import React, { useState, useEffect, useRef } from 'react';
import CompanyLogo from './CompanyLogo';

const Reels = ({ initialVideoId = null }) => {
  // Sample reels data - videos should be stored in public/videos folder
  const reels = [
    {
      id: 1,
      video: '/videos/video1.mp4', // Video files from public/videos folder
      thumbnail: '/videos/video1-thumb.jpg',
      author: 'TechFlow Solutions',
      authorAvatar: 'TF',
      likes: 1247,
      comments: 89,
      shares: 23,
      views: '12.5k',
      description: 'Just launched our new AI-powered workflow automation platform! 🚀',
    },
    {
      id: 2,
      video: '/videos/video2.mp4',
      thumbnail: '/videos/video2-thumb.jpg',
      author: 'GreenEnergy Innovations',
      authorAvatar: 'GE',
      likes: 892,
      comments: 45,
      shares: 67,
      views: '8.9k',
      description: 'Our solar panel technology is revolutionizing residential energy! ⚡',
    },
    {
      id: 4,
      video: '/videos/video4.mp4',
      thumbnail: '/videos/video4-thumb.jpg',
      author: 'CloudSync Technologies',
      authorAvatar: 'CS',
      likes: 1834,
      comments: 112,
      shares: 89,
      views: '18.3k',
      description: 'Seamless cloud storage solution trusted by 50,000+ businesses! ☁️',
    },
    {
      id: 5,
      video: '/videos/video5-fintech.mp4',
      thumbnail: '/videos/video5-fintech-thumb.jpg',
      author: 'FinTech Pro',
      authorAvatar: 'FP',
      likes: 2456,
      comments: 189,
      shares: 156,
      views: '24.8k',
      description: 'Processing over $500M monthly with 99.9% uptime! Secure banking solutions for the digital age. 💳',
    },
    {
      id: 6,
      video: '/videos/video6-edtech.mp4',
      thumbnail: '/videos/video6-edtech-thumb.jpg',
      author: 'EduLearn Platform',
      authorAvatar: 'EL',
      likes: 1867,
      comments: 134,
      shares: 98,
      views: '19.2k',
      description: '100,000+ students improving their grades with our adaptive learning system! Making education accessible and engaging. 📚✨',
    },
    {
      id: 7,
      video: '/videos/video7-indianSweetShop.mp4',
      thumbnail: '/videos/video7-indianSweetShop-thumb.jpg',
      author: 'Mithai Express',
      authorAvatar: 'ME',
      likes: 3456,
      comments: 267,
      shares: 234,
      views: '35.7k',
      description: 'Authentic Indian sweets delivered fresh! Celebrating traditional recipes with modern convenience. 🍬🍰',
    },
    {
      id: 8,
      video: '/videos/video8-agritech.mp4',
      thumbnail: '/videos/video8-agritech-thumb.jpg',
      author: 'AgriGrow Solutions',
      authorAvatar: 'AG',
      likes: 2134,
      comments: 178,
      shares: 145,
      views: '22.1k',
      description: 'Smart farming technology increasing crop yields by 40%! Empowering farmers with data-driven agriculture. 🌾🚜',
    },
    {
      id: 9,
      video: '/videos/video9-climatetech.mp4',
      thumbnail: '/videos/video9-climatetech-thumb.jpg',
      author: 'ClimateTech Solutions',
      authorAvatar: 'CT',
      likes: 2876,
      comments: 203,
      shares: 167,
      views: '29.4k',
      description: 'Carbon-neutral solutions reducing emissions by 60%! Leading the fight against climate change with innovative technology. 🌍🌿',
    },
  ];

  // Find initial video index based on videoId
  const getInitialVideoIndex = () => {
    if (initialVideoId) {
      const index = reels.findIndex(reel => reel.id === initialVideoId);
      return index >= 0 ? index : 0;
    }
    return 0;
  };

  const [currentVideoIndex, setCurrentVideoIndex] = useState(getInitialVideoIndex());
  const [isPlaying, setIsPlaying] = useState(true);
  const [likedVideos, setLikedVideos] = useState(new Set());
  // Initialize with all video indices so all videos start unmuted
  const [mutedVideos, setMutedVideos] = useState(new Set(Array.from({ length: reels.length }, (_, i) => i)));
  const videoRefs = useRef([]);
  const containerRefs = useRef([]);

  // Scroll to initial video when component mounts with initialVideoId
  useEffect(() => {
    if (initialVideoId) {
      const targetIndex = getInitialVideoIndex();
      if (targetIndex > 0 && containerRefs.current[targetIndex]) {
        setTimeout(() => {
          containerRefs.current[targetIndex]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [initialVideoId]);

  // Intersection Observer to detect which video is in view and auto-play
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Video is considered visible when 50% is in view
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.dataset.index);
          setCurrentVideoIndex(index);
          setIsPlaying(true);
          
          // Pause all videos
          videoRefs.current.forEach((video) => {
            if (video) {
              video.pause();
            }
          });
          
          // Play the current video
          const currentVideo = videoRefs.current[index];
          if (currentVideo) {
            // Check if this video should be muted
            // If video is in Set, it's unmuted; if not, it's muted
            const isMuted = !mutedVideos.has(index);
            currentVideo.muted = isMuted;
            
            // Try to play - if unmuted and fails, it might need user interaction
            const playPromise = currentVideo.play();
            if (playPromise !== undefined) {
              playPromise.catch((error) => {
                console.log('Autoplay prevented:', error);
                // If unmuted video fails to play, mute it for autoplay
                if (!isMuted) {
                  currentVideo.muted = true;
                  currentVideo.play().catch(() => {});
                }
              });
            }
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all video container divs
    containerRefs.current.forEach((container, index) => {
      if (container) {
        container.dataset.index = index;
        observer.observe(container);
      }
    });

    // Play first video on mount (unmuted by default)
    const initialIndex = getInitialVideoIndex();
    const firstVideo = videoRefs.current[initialIndex];
    if (firstVideo) {
      setTimeout(() => {
        firstVideo.muted = false; // Start unmuted
        firstVideo.play().catch((error) => {
          console.log('First video autoplay prevented:', error);
        });
      }, 100);
    }

    return () => {
      observer.disconnect();
    };
  }, [mutedVideos]); // Include mutedVideos in dependencies to update when mute state changes

  const handleVideoClick = () => {
    setIsPlaying(!isPlaying);
    const video = videoRefs.current[currentVideoIndex];
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        // On user click, try to unmute if video is currently muted
        // This helps with desktop browser autoplay policies
        if (video.muted && !mutedVideos.has(currentVideoIndex)) {
          video.muted = false;
          setMutedVideos((prev) => {
            const newSet = new Set(prev);
            newSet.add(currentVideoIndex);
            return newSet;
          });
        }
        video.play().catch((error) => {
          console.log('Play on click prevented:', error);
        });
      }
    }
  };

  const toggleLike = (videoId) => {
    setLikedVideos((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(videoId)) {
        newSet.delete(videoId);
      } else {
        newSet.add(videoId);
      }
      return newSet;
    });
  };

  const toggleMute = (index) => {
    setMutedVideos((prev) => {
      const newSet = new Set(prev);
      const video = videoRefs.current[index];
      
      // If video is currently muted (not in Set means muted by default)
      // Adding to Set means it's unmuted
      if (!newSet.has(index)) {
        // Currently muted, unmute it
        newSet.add(index);
        if (video) {
          video.muted = false;
          // Try to play after unmuting (required for desktop browsers)
          video.play().catch((error) => {
            console.log('Play after unmute prevented:', error);
            // If autoplay fails, user might need to interact with the video first
            // Try playing on next user interaction
          });
        }
      } else {
        // Currently unmuted, mute it
        newSet.delete(index);
        if (video) {
          video.muted = true;
        }
      }
      return newSet;
    });
  };

  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };

  return (
    <div className="fixed inset-0 bottom-16 bg-dark overflow-hidden" style={{ backgroundColor: '#0f172a' }}>
      {/* Reels Container - Full screen on mobile, centered on desktop */}
      <div className="reels-container h-full overflow-y-auto snap-y snap-mandatory">
        {reels.map((reel, index) => {
          const isLiked = likedVideos.has(reel.id);
          const isCurrent = currentVideoIndex === index;

          return (
            <div
              key={reel.id}
              ref={(el) => (containerRefs.current[index] = el)}
              className="h-full w-full snap-start snap-always flex items-center justify-center relative"
            >
              {/* Video Container - Full screen on mobile, centered on desktop */}
              <div className="relative w-full h-full md:max-w-2xl md:mx-auto md:h-auto md:aspect-[9/16] bg-black flex items-center justify-center md:rounded-lg overflow-hidden">
                {/* Video Element */}
                <video
                  ref={(el) => {
                    videoRefs.current[index] = el;
                    if (el) {
                      // Initialize muted state (videos start unmuted by default)
                      // If video is in Set, it's unmuted; if not, it's muted
                      el.muted = !mutedVideos.has(index);
                    }
                  }}
                  src={reel.video}
                  poster={reel.thumbnail}
                  className="w-full h-full object-cover md:object-contain"
                  loop
                  playsInline
                  autoPlay={index === 0}
                  onLoadedData={() => {
                    // Auto-play first video when data is loaded (unmuted by default)
                    if (index === getInitialVideoIndex()) {
                      const firstVideo = videoRefs.current[getInitialVideoIndex()];
                      if (firstVideo) {
                        firstVideo.muted = false; // Start unmuted
                        firstVideo.play().catch(() => {});
                      }
                    }
                  }}
                />

                {/* Fallback Gradient Background (if video doesn't load) */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${
                    index % 4 === 0
                      ? 'from-blue-500/30 via-purple-500/30 to-pink-500/30'
                      : index % 4 === 1
                      ? 'from-green-500/30 via-emerald-500/30 to-teal-500/30'
                      : index % 4 === 2
                      ? 'from-red-500/30 via-pink-500/30 to-rose-500/30'
                      : 'from-yellow-500/30 via-orange-500/30 to-amber-500/30'
                  } flex items-center justify-center opacity-0`}
                >
                </div>

                {/* Overlay Click Area (toggle play/pause) */}
                <div
                  className="absolute inset-0 cursor-pointer"
                  onClick={handleVideoClick}
                />

                {/* Play/Pause Indicator */}
                {!isPlaying && isCurrent && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 pointer-events-none">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </div>
                )}

                {/* Right Side Actions */}
                <div className="absolute right-4 bottom-32 flex flex-col items-center gap-6 z-10">
                  {/* Mute/Unmute Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleMute(index);
                    }}
                    className="flex flex-col items-center gap-2"
                  >
                    <div className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
                      {!mutedVideos.has(index) ? (
                        // Muted icon (video is muted, show unmute button)
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                        </svg>
                      ) : (
                        // Unmuted icon (video has sound, show mute button)
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                        </svg>
                      )}
                    </div>
                  </button>

                  {/* Like Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(reel.id);
                    }}
                    className="flex flex-col items-center gap-2"
                  >
                    <div className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
                      <svg
                        className={`w-6 h-6 ${isLiked ? 'text-red-500 fill-red-500' : 'text-white'}`}
                        fill={isLiked ? 'currentColor' : 'none'}
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </div>
                    <span className="text-white text-xs font-semibold">
                      {formatNumber(isLiked ? reel.likes + 1 : reel.likes)}
                    </span>
                  </button>

                  {/* Comment Button */}
                  <button className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                    </div>
                    <span className="text-white text-xs font-semibold">{formatNumber(reel.comments)}</span>
                  </button>

                  {/* Share Button */}
                  <button className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                        />
                      </svg>
                    </div>
                    <span className="text-white text-xs font-semibold">{formatNumber(reel.shares)}</span>
                  </button>

                  {/* Save Button */}
                  <button className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                        />
                      </svg>
                    </div>
                  </button>
                </div>

                        {/* Bottom Info Section */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 pb-4 bg-gradient-to-t from-black/80 to-transparent">
                          <div className="flex items-start gap-3 mb-3">
                            <CompanyLogo initials={reel.authorAvatar} author={reel.author} size="md" showBorder={true} />
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-semibold text-sm mb-1">{reel.author}</p>
                      <p className="text-white text-sm line-clamp-2">{reel.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-white text-sm mb-2">
                    <span>{reel.views} views</span>
                    <span>•</span>
                    <span>{formatNumber(reel.likes)} likes</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reels;

