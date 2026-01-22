import React, { useState, useRef, useEffect } from 'react';

const CreatePostModal = ({ isOpen, onClose, onSubmit }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messages.length > 0) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  if (!isOpen) return null;

  const handleSend = async () => {
    if (!input.trim() || isGenerating) return;

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
      };

      setMessages((prev) => [...prev, aiMessage]);
      setGeneratedContent(aiResponse);
      setTitle(aiResponse.title);
      setContent(aiResponse.content);
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

**Introduction**
The landscape is constantly evolving, and understanding ${prompt} is crucial for staying ahead.

**Key Points**
• Current trends and developments
• Challenges and opportunities
• Best practices and recommendations
• Future outlook

**Conclusion**
As we navigate through these exciting times, ${prompt} represents an important aspect of the broader transformation happening across industries.`;
    } else if (type === 'reel') {
      return `Quick insights on ${prompt}:

🎯 Key takeaway: This is a game-changer
💡 Why it matters: Significant impact on the industry
🚀 What's next: Future opportunities ahead

Watch to learn more!`;
    } else {
      return `We're excited to share breaking news about ${prompt}. This development represents a significant milestone in our industry.

**Key Highlights:**
• Major breakthrough announcement
• Potential impact on the market
• Next steps and future plans

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

  const handlePost = () => {
    if (!title.trim() || !content.trim()) return;

    const postData = {
      type: generatedContent?.type || 'news',
      title,
      content,
      prompt: messages.find(m => m.role === 'user')?.content || '',
      hashtags: generatedContent?.hashtags,
      aiGenerated: true,
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
    onClose();
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-2xl mx-4 bg-dark-light rounded-2xl border border-dark-light shadow-2xl max-h-[90vh] overflow-hidden flex flex-col" style={{ backgroundColor: '#1e293b' }}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-dark">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <h2 className="text-lg font-semibold text-white">AI Post Creator</h2>
          </div>
          <button
            onClick={onClose}
            className="touch-target text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-12">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">How can I help you create a post?</h3>
            <p className="text-gray-400 text-sm max-w-md">
              Describe what you want to post about. I can help you create news articles, articles, or video reel scripts.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-2 w-full max-w-md">
              <button
                onClick={() => setInput('Create a news post about TechFlow Solutions raising $15M Series A funding')}
                className="p-3 bg-dark rounded-lg text-left text-sm text-gray-300 hover:bg-dark-light transition-colors"
              >
                💡 Create a news post about funding
              </button>
              <button
                onClick={() => setInput('Write an article about the future of SaaS in enterprise automation')}
                className="p-3 bg-dark rounded-lg text-left text-sm text-gray-300 hover:bg-dark-light transition-colors"
              >
                📝 Write an article about SaaS trends
              </button>
              <button
                onClick={() => setInput('Create a video reel script about startup fundraising tips')}
                className="p-3 bg-dark rounded-lg text-left text-sm text-gray-300 hover:bg-dark-light transition-colors"
              >
                🎥 Create a video reel script
              </button>
            </div>
          </div>
          ) : (
            <>
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      message.role === 'user'
                        ? 'bg-primary text-white rounded-br-sm'
                        : 'bg-dark text-white rounded-bl-sm'
                    }`}
                  >
                    {message.role === 'assistant' && message.title && (
                      <div className="mb-2 pb-2 border-b border-gray-600">
                        <p className="text-sm font-semibold text-primary mb-1">Generated Post:</p>
                        <p className="text-sm font-medium">{message.title}</p>
                      </div>
                    )}
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                    {message.role === 'assistant' && (
                      <div className="mt-3 pt-3 border-t border-gray-600">
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
                          }}
                          className="text-xs text-primary hover:text-primary-dark transition-colors"
                        >
                          Use this content →
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {isGenerating && (
                <div className="flex justify-start">
                  <div className="bg-dark rounded-2xl rounded-bl-sm px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </>
          )}
        </div>

        {/* Generated Content Preview (when content is selected) */}
        {generatedContent && title && content && (
          <div className="border-t border-dark bg-dark p-4">
            <div className="mb-3">
              <p className="text-xs text-gray-400 mb-1">Title</p>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2 bg-dark-light rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="mb-3">
              <p className="text-xs text-gray-400 mb-1">Content</p>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={4}
                className="w-full px-3 py-2 bg-dark-light rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
            </div>
            {generatedContent.hashtags && (
              <div className="mb-3">
                <p className="text-xs text-gray-400 mb-1">Hashtags</p>
                <p className="text-xs text-gray-300">{generatedContent.hashtags}</p>
              </div>
            )}
          </div>
        )}

        {/* Input Area */}
        <div className="p-4 border-t border-dark">
          <div className="flex items-end gap-3">
            <div className="flex-1 relative">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                rows={1}
                className="w-full px-4 py-3 pr-12 bg-dark rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary resize-none max-h-32"
                style={{ minHeight: '48px' }}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isGenerating}
                className="absolute right-2 bottom-2 touch-target text-primary hover:text-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
            {generatedContent && title && content && (
              <button
                onClick={handlePost}
                disabled={!title.trim() || !content.trim()}
                className="px-6 py-3 bg-primary rounded-xl text-white font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Post
              </button>
            )}
          </div>
          {generatedContent && title && content && (
            <button
              onClick={onClose}
              className="w-full mt-2 px-4 py-2 bg-dark rounded-xl text-gray-300 text-sm font-medium hover:bg-dark-light transition-colors"
            >
              Cancel
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreatePostModal;
