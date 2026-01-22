import React, { useState, useRef, useEffect } from 'react';

const AICreatePost = ({ onBack, onSubmit }) => {
  const [mode, setMode] = useState('ai'); // 'ai' or 'manual'
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [postType, setPostType] = useState('news'); // 'news', 'article', 'reel'
  const [postOnProfile, setPostOnProfile] = useState(false);
  const [hasPremium, setHasPremium] = useState(false); // Set to false to show premium unlock
  const [selectedFiles, setSelectedFiles] = useState([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messages.length > 0) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isGenerating) return;

    // Check for video/reel generation and premium
    const lowerPrompt = input.toLowerCase();
    const isVideoRequest = lowerPrompt.includes('video') || lowerPrompt.includes('reel') || lowerPrompt.includes('short');
    
    if (isVideoRequest && !hasPremium) {
      // Show premium unlock message instead of generating
      const premiumMessage = {
        role: 'assistant',
        content: 'Video generation requires Premium membership. Unlock Premium to generate video content, scripts, and more advanced features.',
        isPremium: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, { role: 'user', content: input, timestamp: new Date() }, premiumMessage]);
      setInput('');
      return;
    }

    const userMessage = {
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsGenerating(true);

    // Simulate AI response (replace with actual API call)
    setTimeout(() => {
      const aiResponse = generateAIResponse(input);
      const aiMessage = {
        role: 'assistant',
        content: aiResponse.content,
        title: aiResponse.title,
        timestamp: new Date(),
        type: aiResponse.type,
      };

      setMessages((prev) => [...prev, aiMessage]);
      setGeneratedContent(aiResponse);
      setTitle(aiResponse.title);
      setContent(aiResponse.content);
      setPostType(aiResponse.type);
      setIsGenerating(false);
    }, 1500);
  };

  const generateAIResponse = (prompt) => {
    const lowerPrompt = prompt.toLowerCase();
    
    // Determine post type from prompt
    let postType = 'news';
    if (lowerPrompt.includes('article') || lowerPrompt.includes('guide') || lowerPrompt.includes('analysis')) {
      postType = 'article';
    } else if (lowerPrompt.includes('video') || lowerPrompt.includes('reel') || lowerPrompt.includes('short')) {
      postType = 'reel';
    }

    // Generate content based on prompt
    const title = generateTitle(prompt, postType);
    const content = generateContent(prompt, postType);
    const hashtags = generateHashtags(prompt, postType);

    return {
      title,
      content,
      hashtags,
      type: postType,
    };
  };

  const generateTitle = (prompt, type) => {
    const words = prompt.split(' ').filter(w => w.length > 2).slice(0, 5);
    const base = words.join(' ');
    
    if (type === 'article') {
      return `Understanding ${base}: A Comprehensive Guide`;
    } else if (type === 'reel') {
      return `${base}: Quick Insights`;
    } else {
      return `${base}: Breaking News Update`;
    }
  };

  const generateContent = (prompt, type) => {
    if (type === 'article') {
      return `In this comprehensive article, we explore ${prompt} and its implications for the modern business landscape.

Introduction
The landscape is constantly evolving, and understanding ${prompt} is crucial for staying ahead.

Key Points
Current trends and developments
Challenges and opportunities
Best practices and recommendations
Future outlook

Conclusion
As we navigate through these exciting times, ${prompt} represents an important aspect of the broader transformation happening across industries.`;
    } else if (type === 'reel') {
      return `Quick insights on ${prompt}:

Key takeaway: This is a game-changer
Why it matters: Significant impact on the industry
What's next: Future opportunities ahead

Watch to learn more!`;
    } else {
      return `We're excited to share breaking news about ${prompt}. This development represents a significant milestone in our industry.

Key Highlights
Major breakthrough announcement
Potential impact on the market
Next steps and future plans

Stay tuned for more updates as we continue to push boundaries and create value for our community.`;
    }
  };

  const generateHashtags = (prompt, type) => {
    const words = prompt.toLowerCase().split(' ').filter(w => w.length > 3).slice(0, 3);
    const typeTags = type === 'news' ? ['News', 'Update', 'Breaking'] :
                     type === 'article' ? ['Article', 'Insights', 'Analysis'] :
                     ['Reel', 'Video', 'QuickTips'];
    return [...words, ...typeTags].map(tag => `#${tag.charAt(0).toUpperCase() + tag.slice(1)}`).join(' ');
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles([...selectedFiles, ...files]);
  };

  const handleRemoveFile = (index) => {
    setSelectedFiles(selectedFiles.filter((_, i) => i !== index));
  };

  const handlePost = () => {
    if (!title.trim() || !content.trim()) return;

    const postData = {
      type: mode === 'ai' ? (generatedContent?.type || postType) : postType,
      title,
      content,
      prompt: mode === 'ai' ? (messages.find(m => m.role === 'user')?.content || '') : '',
      hashtags: mode === 'ai' ? generatedContent?.hashtags : '',
      aiGenerated: mode === 'ai',
      postOnProfile,
      files: selectedFiles,
    };

    if (onSubmit) {
      onSubmit(postData);
    }

    // Reset
    setMessages([]);
    setGeneratedContent(null);
    setTitle('');
    setContent('');
    setInput('');
    setSelectedFiles([]);
    setPostOnProfile(false);
    
    if (onBack) {
      onBack();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (mode === 'ai') {
        handleSend();
      }
    }
  };

  const handleUnlockPremium = () => {
    // Navigate to premium page or show premium modal
    alert('Redirecting to Premium membership page...');
    // You can add navigation here: onNavigate('premium')
  };

  return (
    <div className="min-h-screen bg-dark text-white pb-20 flex flex-col" style={{ backgroundColor: '#0f172a' }}>
      {/* Header */}
      <div className="sticky top-0 z-40 bg-dark-light border-b border-dark" style={{ backgroundColor: '#1e293b' }}>
        <div className="container-mobile px-4">
          <div className="flex items-center gap-3 py-4">
            {onBack && (
              <button
                onClick={onBack}
                className="touch-target text-gray-400 hover:text-white transition-colors flex-shrink-0"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0"></div>
                <h1 className="text-xl font-bold text-white truncate">Create Post</h1>
              </div>
              <p className="text-xs text-gray-400 mt-0.5">Create posts with AI or manually</p>
            </div>
          </div>

          {/* Mode Toggle */}
          <div className="flex items-center gap-2 pb-4">
            <button
              onClick={() => {
                setMode('ai');
                setMessages([]);
                setGeneratedContent(null);
                setTitle('');
                setContent('');
              }}
              className={`flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                mode === 'ai'
                  ? 'bg-primary text-white'
                  : 'bg-dark text-gray-300 hover:bg-dark-light'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>AI Assistant</span>
              </div>
            </button>
            <button
              onClick={() => {
                setMode('manual');
                setMessages([]);
                setGeneratedContent(null);
              }}
              className={`flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                mode === 'manual'
                  ? 'bg-primary text-white'
                  : 'bg-dark text-gray-300 hover:bg-dark-light'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
                <span>Manual</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Content Area */}
      {mode === 'ai' ? (
        <>
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto">
            <div className="container-mobile px-0 py-1 max-w-4xl mx-auto">
              {messages.length === 0 ? (
                <div className="flex flex-col items-center justify-center min-h-[60vh] text-center py-10 px-2">
                 
                  <h3 className="text-2xl font-semibold text-white mb-2">How can help you create a post?</h3>
                  <p className="text-gray-400 text-base max-w-lg mb-8">
                    Describe what you want to post. I can help you create news articles, articles, or video reel scripts.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-2xl mx-auto">
                    <button
                      onClick={() => setInput('Create a news post about TechFlow Solutions raising $15M Series A funding')}
                      className="p-4 bg-dark-light rounded-xl text-left hover:bg-dark transition-colors border border-dark-light"
                    >
                      <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mb-3">
                        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                      </div>
                      <p className="text-sm font-medium text-white mb-1">News Post</p>
                      <p className="text-xs text-gray-400">Create a news post about funding</p>
                    </button>
                    <button
                      onClick={() => setInput('Write an article about the future of SaaS in enterprise automation')}
                      className="p-4 bg-dark-light rounded-xl text-left hover:bg-dark transition-colors border border-dark-light"
                    >
                      <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center mb-3">
                        <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <p className="text-sm font-medium text-white mb-1">Article</p>
                      <p className="text-xs text-gray-400">Write an article about SaaS trends</p>
                    </button>
                    <button
                      onClick={() => setInput('Create a video reel script about startup fundraising tips')}
                      className="p-4 bg-dark-light rounded-xl text-left hover:bg-dark transition-colors border border-dark-light relative"
                    >
                      {!hasPremium && (
                        <div className="absolute top-2 right-2">
                          <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                      )}
                      <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center mb-3">
                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-sm font-medium text-white mb-1">Video Reel</p>
                      <p className="text-xs text-gray-400">
                        {hasPremium ? 'Create a video reel script' : 'Premium required'}
                      </p>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4 pb-4">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex w-full ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[85%] sm:max-w-[75%] rounded-2xl px-4 py-3 ${
                          message.role === 'user'
                            ? 'bg-primary text-white rounded-br-sm'
                            : message.isPremium
                            ? 'bg-yellow-500/20 border-2 border-yellow-500/50 text-white rounded-bl-sm'
                            : 'bg-dark-light text-white rounded-bl-sm'
                        }`}
                        style={message.role === 'assistant' && !message.isPremium ? { backgroundColor: '#1e293b' } : {}}
                      >
                        {message.isPremium ? (
                          <div>
                            <div className="flex items-center gap-2 mb-3">
                              <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <p className="text-sm font-semibold text-yellow-500">Premium Required</p>
                            </div>
                            <p className="text-sm leading-relaxed mb-4">{message.content}</p>
                            <button
                              onClick={handleUnlockPremium}
                              className="w-full px-4 py-2 bg-yellow-500 text-dark font-semibold rounded-lg hover:bg-yellow-400 transition-colors"
                            >
                              Unlock Premium Membership
                            </button>
                          </div>
                        ) : (
                          <>
                            {message.role === 'assistant' && message.title && (
                              <div className="mb-3 pb-3 border-b border-gray-600">
                                <p className="text-xs font-semibold text-primary mb-1">Generated Post:</p>
                                <p className="text-base font-medium">{message.title}</p>
                              </div>
                            )}
                            <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                            {message.role === 'assistant' && (
                              <div className="mt-4 pt-3 border-t border-gray-600">
                                <button
                                  onClick={() => {
                                    setTitle(message.title);
                                    setContent(message.content);
                                    setGeneratedContent({
                                      title: message.title,
                                      content: message.content,
                                      hashtags: generateHashtags(messages[index - 1]?.content || '', message.type || 'news'),
                                      type: message.type || 'news',
                                    });
                                    setPostType(message.type || 'news');
                                  }}
                                  className="text-sm text-primary hover:text-primary-dark transition-colors font-medium"
                                >
                                  Use this content →
                                </button>
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                  {isGenerating && (
                    <div className="flex justify-start">
                      <div className="bg-dark-light rounded-2xl rounded-bl-sm px-5 py-4" style={{ backgroundColor: '#1e293b' }}>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              )}
            </div>
          </div>
        </>
      ) : (
        /* Manual Creation Form */
        <div className="flex-1 overflow-y-auto">
          <div className="container-mobile px-4 py-6 max-w-4xl mx-auto space-y-6">
            {/* Post Type Selection */}
            <div className="bg-dark-light rounded-2xl p-5 border border-dark-light">
              <h3 className="text-base font-semibold text-white mb-4">Post Type</h3>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { 
                    id: 'news', 
                    label: 'News', 
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    )
                  },
                  { 
                    id: 'article', 
                    label: 'Article', 
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    )
                  },
                  { 
                    id: 'reel', 
                    label: 'Video Reel', 
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    )
                  },
                ].map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setPostType(type.id)}
                    className={`p-4 rounded-xl border-2 transition-colors flex flex-col items-center gap-3 ${
                      postType === type.id
                        ? 'bg-primary/20 border-primary text-white'
                        : 'bg-dark border-dark-light text-gray-300 hover:border-gray-600'
                    }`}
                  >
                    <div className={postType === type.id ? 'text-primary' : 'text-gray-400'}>
                      {type.icon}
                    </div>
                    <p className="text-sm font-medium">{type.label}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Title Input */}
            <div className="bg-dark-light rounded-2xl p-5 border border-dark-light">
              <label className="block text-sm font-semibold text-white mb-3">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter post title..."
                className="w-full px-4 py-3 bg-dark rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Content Textarea */}
            <div className="bg-dark-light rounded-2xl p-5 border border-dark-light">
              <label className="block text-sm font-semibold text-white mb-3">Content</label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your post content here..."
                rows={12}
                className="w-full px-4 py-3 bg-dark rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
            </div>

            {/* File Upload */}
            {(postType === 'reel' || postType === 'news') && (
              <div className="bg-dark-light rounded-2xl p-5 border border-dark-light">
                <label className="block text-sm font-semibold text-white mb-3">
                  {postType === 'reel' ? 'Upload Video' : 'Upload Images'}
                </label>
                <div className="border-2 border-dashed border-gray-600 rounded-xl p-6 text-center hover:border-primary transition-colors">
                  <input
                    type="file"
                    multiple
                    accept={postType === 'reel' ? 'video/*' : 'image/*'}
                    onChange={handleFileChange}
                    className="hidden"
                    id="file-upload"
                  />
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer flex flex-col items-center gap-2"
                  >
                    <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    <span className="text-sm text-gray-400">
                      Click to upload {postType === 'reel' ? 'videos' : 'images'}
                    </span>
                  </label>
                </div>

                {selectedFiles.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {selectedFiles.map((file, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-dark rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                            {postType === 'reel' ? (
                              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                              </svg>
                            ) : (
                              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                              </svg>
                            )}
                          </div>
                          <div>
                            <p className="text-sm text-white font-medium truncate max-w-xs">{file.name}</p>
                            <p className="text-xs text-gray-400">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                          </div>
                        </div>
                        <button
                          onClick={() => handleRemoveFile(index)}
                          className="touch-target text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Generated Content Preview (AI mode) or Post Options (Manual mode) */}
      {(mode === 'ai' && generatedContent && title && content) || (mode === 'manual' && (title || content)) ? (
        <div className="border-t border-dark bg-dark-light py-4" style={{ backgroundColor: '#1e293b' }}>
          <div className="container-mobile px-4 max-w-4xl mx-auto">
            {mode === 'ai' && generatedContent && (
              <>
                <div className="mb-4">
                  <p className="text-xs text-gray-400 mb-2 font-medium">Title</p>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-4 py-3 bg-dark rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="mb-4">
                  <p className="text-xs text-gray-400 mb-2 font-medium">Content</p>
                  <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    rows={6}
                    className="w-full px-4 py-3 bg-dark rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>
                {generatedContent.hashtags && (
                  <div className="mb-4">
                    <p className="text-xs text-gray-400 mb-2 font-medium">Suggested Hashtags</p>
                    <p className="text-sm text-gray-300">{generatedContent.hashtags}</p>
                  </div>
                )}
              </>
            )}

            {/* Post on Profile Toggle */}
            <div className="mb-4 flex items-center justify-between p-3 bg-dark rounded-xl">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <div>
                  <p className="text-sm font-medium text-white">Post on your profile</p>
                  <p className="text-xs text-gray-400">Also share this post on your personal profile</p>
                </div>
              </div>
              <button
                onClick={() => setPostOnProfile(!postOnProfile)}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  postOnProfile ? 'bg-primary' : 'bg-gray-600'
                }`}
              >
                <div
                  className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                    postOnProfile ? 'translate-x-6' : 'translate-x-0'
                  }`}
                ></div>
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {/* Input Area */}
      <div className="sticky bottom-0 bg-dark-light border-t border-dark" style={{ backgroundColor: '#1e293b' }}>
        <div className="container-mobile px-4 py-4 max-w-4xl mx-auto">
          {mode === 'ai' ? (
            <div className="flex items-end gap-3">
              <div className="flex-1 relative">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  rows={1}
                  className="w-full px-4 py-3 pr-12 bg-dark rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary resize-none max-h-32"
                  style={{ minHeight: '52px' }}
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isGenerating}
                  className="absolute right-2 bottom-2.5 touch-target text-primary hover:text-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
              {(generatedContent && title && content) && (
                <button
                  onClick={handlePost}
                  disabled={!title.trim() || !content.trim()}
                  className="px-6 py-3 bg-primary rounded-xl text-white font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  Post
                </button>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <button
                onClick={onBack}
                className="flex-1 px-4 py-3 bg-dark rounded-xl text-gray-300 font-medium hover:bg-dark-light transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handlePost}
                disabled={!title.trim() || !content.trim()}
                className="flex-1 px-6 py-3 bg-primary rounded-xl text-white font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Post
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AICreatePost;
