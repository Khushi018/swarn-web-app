import React, { useState, useEffect, useRef } from 'react';
import CompanyLogo from './CompanyLogo';
import { homeVideos } from '../data/homeVideos';

const Feed = ({ isWhiteTheme = false }) => {
  const [likedPosts, setLikedPosts] = useState(new Set());
  const [playingVideo, setPlayingVideo] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [expandedCaptions, setExpandedCaptions] = useState(new Set());
  const videoRefs = useRef({});

  // Use dedicated home videos dataset for the Home feed
  const feedPosts = homeVideos.map((item) => ({
    id: item.id,
    username: item.company,
    userAvatar: item.authorAvatar,
    time: '2h ago',
    type: item.image ? 'image' : 'video',
    video: item.video,
    image: item.image,
    caption: item.caption,
    likes: item.metrics?.likes ?? 0,
    comments: item.metrics?.comments ?? 0,
    shares: item.metrics?.shares ?? 0,
    duration: undefined,
  }));

  // Initialize some posts as liked by default (every 2nd or 3rd post)
  useEffect(() => {
    const initialLiked = new Set();
    feedPosts.forEach((post, index) => {
      // Like every 2nd or 3rd post to show variety
      if (index % 3 === 0 || index % 4 === 0) {
        initialLiked.add(post.id);
      }
    });
    setLikedPosts(initialLiked);
  }, [feedPosts.length]);

  // Handle scroll to show/hide scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      // Show button when scrolled down more than 300px
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for auto-playing videos on scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Play when 50% of video container is visible
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        const videoId = entry.target.dataset.videoId;
        const videoElement = videoRefs.current[videoId];

        if (!videoElement || !videoId) return;

        if (entry.isIntersecting) {
          // Play this video and stop others
          setPlayingVideo(parseInt(videoId));
          videoElement.muted = false; // Unmute for audio
          videoElement.play().catch((error) => {
            console.log('Auto-play prevented:', error);
          });
          
          // Pause all other videos and mute them
          Object.keys(videoRefs.current).forEach((id) => {
            if (id !== videoId && videoRefs.current[id]) {
              videoRefs.current[id].pause();
              videoRefs.current[id].currentTime = 0;
              videoRefs.current[id].muted = true;
            }
          });
        } else {
          // Pause video when it goes out of view and mute it
          if (videoElement && playingVideo === parseInt(videoId)) {
            videoElement.pause();
            videoElement.muted = true;
            setPlayingVideo(null);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all video container divs
    const videoContainers = document.querySelectorAll('[data-video-id]');
    videoContainers.forEach((container) => {
      observer.observe(container);
    });

    return () => {
      observer.disconnect();
    };
  }, [feedPosts.length, playingVideo]);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const toggleLike = (postId) => {
    setLikedPosts((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
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

  const toggleCaption = (postId) => {
    setExpandedCaptions((prev) => {
      const next = new Set(prev);
      if (next.has(postId)) {
        next.delete(postId);
      } else {
        next.add(postId);
      }
      return next;
    });
  };

  return (
    <div className={`w-full ${isWhiteTheme ? 'bg-white' : 'bg-dark'}`} style={isWhiteTheme ? { backgroundColor: '#ffffff' } : { backgroundColor: '#0f172a' }}>
      <div className="w-full">
        <div className="space-y-0">
          {feedPosts.map((post) => {
            const isLiked = likedPosts.has(post.id);
            const isVideo = post.type === 'video';
            const isPlaying = playingVideo === post.id;
            const isCaptionExpanded = expandedCaptions.has(post.id);

            return (
              <div
                key={post.id}
                className="overflow-hidden"
              >
                {/* Post Header - Full width */}
                <div className="flex items-center justify-between px-4 pt-4 pb-3">
                  <div className="flex items-center gap-3">
                    <CompanyLogo initials={post.userAvatar} author={post.username} size="md" showBorder={true} />
                    <div>
                      <h3 className={`text-sm font-semibold ${isWhiteTheme ? 'text-gray-900' : 'text-white'}`}>{post.username}</h3>
                      <p className={`text-xs ${isWhiteTheme ? 'text-gray-500' : 'text-gray-400'}`}>{post.time}</p>
                    </div>
                  </div>
                  <button className="touch-target">
                    <svg className={`w-5 h-5 ${isWhiteTheme ? 'text-yellow-500' : 'text-gray-400'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                  </button>
                </div>

                {/* Horizontal Line */}
                <div className={`w-full border-t ${isWhiteTheme ? 'border-gray-200' : 'border-gray-700'}`}></div>

                {/* Media Container - Full width, video centered at 1/2 width */}
                <div className="w-full flex items-center justify-center">
                  <div className={`relative w-full md:w-1/2 overflow-hidden ${isWhiteTheme ? 'bg-gray-50' : 'bg-dark'} ${isVideo ? 'aspect-[9/16] md:aspect-auto md:h-screen' : 'aspect-square'}`}>
                  {isVideo && post.video ? (
                    <div 
                      className="relative w-full h-full"
                      data-video-id={post.id}
                    >
                      <video
                        ref={(el) => {
                          if (el) {
                            videoRefs.current[post.id] = el;
                          }
                        }}
                        src={post.video}
                        poster={post.image || undefined}
                        className="w-full h-full object-cover"
                        controls={isPlaying}
                        muted={!isPlaying}
                        loop
                        playsInline
                        data-video-id={post.id}
                        onClick={() => {
                          const videoElement = videoRefs.current[post.id];
                          if (isPlaying) {
                            videoElement?.pause();
                            videoElement.muted = true;
                            setPlayingVideo(null);
                          } else {
                            // Pause all other videos and mute them
                            Object.keys(videoRefs.current).forEach((id) => {
                              if (id !== post.id && videoRefs.current[id]) {
                                videoRefs.current[id].pause();
                                videoRefs.current[id].currentTime = 0;
                                videoRefs.current[id].muted = true;
                              }
                            });
                            videoElement.muted = false; // Unmute for audio
                            videoElement?.play();
                            setPlayingVideo(post.id);
                          }
                        }}
                      />
                      {!isPlaying && (
                        <div 
                          className="absolute inset-0 flex items-center justify-center bg-black/20 cursor-pointer z-10" 
                          onClick={() => {
                            const videoElement = videoRefs.current[post.id];
                            // Pause all other videos and mute them
                            Object.keys(videoRefs.current).forEach((id) => {
                              if (id !== post.id && videoRefs.current[id]) {
                                videoRefs.current[id].pause();
                                videoRefs.current[id].currentTime = 0;
                                videoRefs.current[id].muted = true;
                              }
                            });
                            videoElement.muted = false; // Unmute for audio
                            videoElement?.play();
                            setPlayingVideo(post.id);
                          }}
                        >
                          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                            <svg className="w-8 h-8 text-dark ml-1" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                            </svg>
                          </div>
                        </div>
                      )}
                      {post.duration && (
                        <div className="absolute top-3 right-3 px-2 py-1 bg-black/60 rounded text-xs text-white font-medium z-20">
                          {post.duration}
                        </div>
                      )}
                    </div>
                  ) : isVideo ? (
                    <div className="relative w-full h-full">
                      <div
                        className={`w-full h-full bg-gradient-to-br ${post.gradient || 'from-gray-500/30 via-slate-500/30 to-zinc-500/30'} flex items-center justify-center cursor-pointer relative`}
                        onClick={() => setPlayingVideo(isPlaying ? null : post.id)}
                      >
                        <div className="text-6xl opacity-50">{post.icon}</div>
                        {!isPlaying && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                            <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                              <svg className="w-8 h-8 text-dark ml-1" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                              </svg>
                            </div>
                          </div>
                        )}
                        {isPlaying && post.duration && (
                          <div className="absolute top-3 right-3 px-2 py-1 bg-black/60 rounded text-xs text-white font-medium">
                            {post.duration}
                          </div>
                        )}
                      </div>
                    </div>
                  ) : post.image ? (
                    <img
                      src={post.image}
                      alt={post.caption}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div
                      className={`w-full h-full bg-gradient-to-br ${post.gradient || 'from-gray-500/30 via-slate-500/30 to-zinc-500/30'} flex items-center justify-center cursor-pointer relative`}
                    >
                      <div className="text-6xl opacity-50">{post.icon}</div>
                      <div className="absolute inset-0 bg-black/10"></div>
                    </div>
                  )}
                  </div>
                </div>

                {/* Horizontal Line */}
                <div className={`w-full border-t ${isWhiteTheme ? 'border-gray-200' : 'border-gray-700'}`}></div>

                {/* Actions Footer - Full width */}
                <div className="p-4 pt-3">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => toggleLike(post.id)}
                        className="touch-target"
                      >
                        <svg
                          className={`w-8 h-8 ${isLiked ? 'text-red-500 fill-red-500' : isWhiteTheme ? 'text-gray-600' : 'text-gray-300'}`}
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
                      </button>
                      <button className="touch-target">
                        <svg className={`w-8 h-8 ${isWhiteTheme ? 'text-yellow-500' : 'text-gray-300'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                          />
                        </svg>
                      </button>
                      <button className="touch-target">
                        <svg className={`w-8 h-8 ${isWhiteTheme ? 'text-yellow-500' : 'text-gray-300'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                          />
                        </svg>
                      </button>
                    </div>
                    <button className="touch-target">
                      <svg className={`w-6 h-6 ${isWhiteTheme ? 'text-yellow-500' : 'text-gray-300'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Likes Count */}
                  <div className="mb-2">
                    <p className={`text-sm font-semibold ${isWhiteTheme ? 'text-gray-900' : 'text-white'}`}>
                      {formatNumber(isLiked ? post.likes + 1 : post.likes)} likes
                    </p>
                  </div>

                  {/* Caption */}
                  <div className="mb-2">
                    <p className={`text-sm ${isWhiteTheme ? 'text-gray-900' : 'text-white'} ${isCaptionExpanded ? '' : 'line-clamp-2'}`}>
                      <span className="font-semibold mr-2">{post.username}</span>
                      {post.caption}
                    </p>
                    {post.caption && post.caption.length > 140 && (
                      <button
                        type="button"
                        className={`mt-1 text-xs font-semibold ${isWhiteTheme ? 'text-yellow-500 hover:text-yellow-600' : 'text-primary hover:text-primary/80'}`}
                        onClick={() => toggleCaption(post.id)}
                      >
                        {isCaptionExpanded ? 'Show less' : 'Show more'}
                      </button>
                    )}
                  </div>

                  {/* Comments */}
                  <button className={`text-sm mb-2 ${isWhiteTheme ? 'text-gray-600' : 'text-gray-400'}`}>
                    View all {post.comments} comments
                  </button>

                  {/* Time */}
                  <p className={`text-xs uppercase ${isWhiteTheme ? 'text-gray-400' : 'text-gray-500'}`}>{post.time}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-20 right-8 z-50 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 ${isWhiteTheme ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-primary hover:bg-primary-dark'}`}
          aria-label="Scroll to top"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Feed;

