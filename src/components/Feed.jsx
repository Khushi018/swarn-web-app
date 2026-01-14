import React, { useState } from 'react';
import CompanyLogo from './CompanyLogo';

const Feed = () => {
  const [likedPosts, setLikedPosts] = useState(new Set());
  const [playingVideo, setPlayingVideo] = useState(null);

  // Sample feed data with images and videos
  const feedPosts = [
    {
      id: 1,
      username: 'TechFlow Solutions',
      userAvatar: 'TF',
      time: '2h ago',
      type: 'image',
      gradient: 'from-blue-500/30 via-purple-500/30 to-pink-500/30',
      icon: '💻',
      caption: 'Just launched our new AI-powered workflow automation platform! 🚀 #SaaS #AI #Productivity',
      likes: 1247,
      comments: 89,
      shares: 23,
    },
    {
      id: 2,
      username: 'GreenEnergy Innovations',
      userAvatar: 'GE',
      time: '4h ago',
      type: 'video',
      video: '/videos/video2.mp4',
      caption: 'Our solar panel technology is revolutionizing residential energy! Watch our 30-second pitch ⚡',
      likes: 892,
      comments: 45,
      shares: 67,
      duration: '0:30',
    },
    {
      id: 3,
      username: 'MediCare AI',
      userAvatar: 'MA',
      time: '6h ago',
      type: 'image',
      gradient: 'from-red-500/30 via-pink-500/30 to-rose-500/30',
      icon: '🏥',
      caption: 'Proud to announce 95% accuracy in early disease detection! Healthcare innovation at its finest 🏥',
      likes: 2156,
      comments: 156,
      shares: 34,
    },
    {
      id: 4,
      username: 'FinTech Pro',
      userAvatar: 'FP',
      time: '8h ago',
      type: 'video',
      video: '/videos/video5-fintech.mp4',
      caption: 'Processing over $500M monthly with 99.9% uptime! Here\'s how we do it 💳',
      likes: 1834,
      comments: 112,
      shares: 89,
      duration: '1:15',
    },
    {
      id: 5,
      username: 'EduLearn Platform',
      userAvatar: 'EL',
      time: '12h ago',
      type: 'image',
      gradient: 'from-indigo-500/30 via-blue-500/30 to-cyan-500/30',
      icon: '📚',
      caption: '100,000+ students improving their grades with our adaptive learning system! 📚✨',
      likes: 967,
      comments: 78,
      shares: 45,
    },
    {
      id: 6,
      username: 'CloudSync Technologies',
      userAvatar: 'CS',
      time: '1d ago',
      type: 'video',
      video: '/videos/video4.mp4',
      caption: 'Seamless cloud storage solution trusted by 50,000+ businesses! ☁️',
      likes: 1456,
      comments: 98,
      shares: 56,
      duration: '0:45',
    },
    {
      id: 7,
      username: 'Foodie Express',
      userAvatar: 'FE',
      time: '1d ago',
      type: 'image',
      gradient: 'from-orange-500/30 via-red-500/30 to-pink-500/30',
      icon: '🍽️',
      caption: '500+ premium restaurants now on our platform! Delivering excellence, one meal at a time 🍽️',
      likes: 1123,
      comments: 67,
      shares: 23,
    },
    {
      id: 8,
      username: 'RealEstate Pro',
      userAvatar: 'RE',
      time: '2d ago',
      type: 'video',
      gradient: 'from-amber-500/30 via-yellow-500/30 to-lime-500/30',
      icon: '🏠',
      caption: 'VR property tours are the future! Experience real estate like never before 🏠',
      likes: 2341,
      comments: 189,
      shares: 123,
      duration: '2:00',
    },
  ];

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

  return (
    <div className="w-full bg-dark" style={{ backgroundColor: '#0f172a' }}>
      <div className="container-mobile">
        <div className="space-y-6 py-4">
          {feedPosts.map((post) => {
            const isLiked = likedPosts.has(post.id);
            const isVideo = post.type === 'video';
            const isPlaying = playingVideo === post.id;

            return (
              <div
                key={post.id}
                className="bg-dark-light rounded-2xl border border-dark-light overflow-hidden"
              >
                {/* Post Header */}
                <div className="flex items-center justify-between p-4 pb-3">
                  <div className="flex items-center gap-3">
                    <CompanyLogo initials={post.userAvatar} author={post.username} size="md" showBorder={true} />
                    <div>
                      <h3 className="text-sm font-semibold text-white">{post.username}</h3>
                      <p className="text-xs text-gray-400">{post.time}</p>
                    </div>
                  </div>
                  <button className="touch-target">
                    <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                  </button>
                </div>

                {/* Media */}
                <div className="relative w-full bg-dark aspect-square overflow-hidden">
                  {isVideo && post.video ? (
                    <div className="relative w-full h-full">
                      <video
                        src={post.video}
                        className="w-full h-full object-cover"
                        controls={isPlaying}
                        muted={!isPlaying}
                        loop
                        playsInline
                        onClick={() => setPlayingVideo(isPlaying ? null : post.id)}
                      />
                      {!isPlaying && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 cursor-pointer" onClick={() => setPlayingVideo(post.id)}>
                          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                            <svg className="w-8 h-8 text-dark ml-1" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                            </svg>
                          </div>
                        </div>
                      )}
                      {post.duration && (
                        <div className="absolute top-3 right-3 px-2 py-1 bg-black/60 rounded text-xs text-white font-medium">
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
                  ) : (
                    <div
                      className={`w-full h-full bg-gradient-to-br ${post.gradient} flex items-center justify-center cursor-pointer relative`}
                    >
                      <div className="text-6xl opacity-50">{post.icon}</div>
                      <div className="absolute inset-0 bg-black/10"></div>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="p-4 pt-3">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => toggleLike(post.id)}
                        className="touch-target"
                      >
                        <svg
                          className={`w-6 h-6 ${isLiked ? 'text-red-500 fill-red-500' : 'text-gray-300'}`}
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
                        <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                          />
                        </svg>
                      </button>
                      <button className="touch-target">
                        <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                      <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    <p className="text-sm font-semibold text-white">
                      {formatNumber(isLiked ? post.likes + 1 : post.likes)} likes
                    </p>
                  </div>

                  {/* Caption */}
                  <div className="mb-2">
                    <p className="text-sm text-white">
                      <span className="font-semibold mr-2">{post.username}</span>
                      {post.caption}
                    </p>
                  </div>

                  {/* Comments */}
                  <button className="text-sm text-gray-400 mb-2">
                    View all {post.comments} comments
                  </button>

                  {/* Time */}
                  <p className="text-xs text-gray-500 uppercase">{post.time}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Feed;

