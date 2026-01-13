import React, { useState } from 'react';

const Chat = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [message, setMessage] = useState('');

  // Sample conversations data
  const conversations = [
    {
      id: 1,
      name: 'Sarah Jenkins',
      avatar: 'SJ',
      lastMessage: 'Thanks for the investment opportunity!',
      time: '2m ago',
      unread: 2,
      online: true,
    },
    {
      id: 2,
      name: 'TechFlow Solutions',
      avatar: 'TF',
      lastMessage: 'We\'d love to schedule a follow-up meeting.',
      time: '1h ago',
      unread: 0,
      online: false,
    },
    {
      id: 3,
      name: 'GreenEnergy Innovations',
      avatar: 'GE',
      lastMessage: 'The pitch deck is ready for review.',
      time: '3h ago',
      unread: 1,
      online: true,
    },
    {
      id: 4,
      name: 'MediCare AI',
      avatar: 'MA',
      lastMessage: 'Looking forward to our partnership!',
      time: '5h ago',
      unread: 0,
      online: false,
    },
    {
      id: 5,
      name: 'FinTech Pro',
      avatar: 'FP',
      lastMessage: 'Can we discuss the terms next week?',
      time: '1d ago',
      unread: 0,
      online: false,
    },
    {
      id: 6,
      name: 'EduLearn Platform',
      avatar: 'EL',
      lastMessage: 'The demo is ready for your review.',
      time: '2d ago',
      unread: 0,
      online: true,
    },
  ];

  // Sample messages for selected chat
  const getMessages = (chatId) => {
    const messagesByChat = {
      1: [
        { id: 1, text: 'Hi! I saw your investment profile and I think we might be a good fit.', sender: 'other', time: '10:30 AM' },
        { id: 2, text: 'Hello! I\'d love to learn more about your startup.', sender: 'me', time: '10:32 AM' },
        { id: 3, text: 'Great! We\'re working on an AI-powered solution for healthcare.', sender: 'other', time: '10:33 AM' },
        { id: 4, text: 'That sounds interesting. Can you share more details?', sender: 'me', time: '10:35 AM' },
        { id: 5, text: 'Thanks for the investment opportunity!', sender: 'other', time: '2m ago' },
      ],
      2: [
        { id: 1, text: 'Hello, we wanted to follow up on our previous discussion.', sender: 'other', time: '1h ago' },
        { id: 2, text: 'We\'d love to schedule a follow-up meeting.', sender: 'other', time: '1h ago' },
      ],
    };
    return messagesByChat[chatId] || [
      { id: 1, text: 'Start of conversation', sender: 'other', time: 'Recently' },
    ];
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      // Here you would typically send the message to your backend/API
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  const selectedConversation = conversations.find(c => c.id === selectedChat);

  if (selectedChat) {
    const messages = getMessages(selectedChat);
    
    return (
      <div className="min-h-screen bg-dark text-white pb-20 flex flex-col" style={{ backgroundColor: '#0f172a' }}>
        {/* Chat Header */}
        <div className="sticky top-0 z-40 bg-dark-light border-b border-dark" style={{ backgroundColor: '#1e293b' }}>
          <div className="container-mobile">
            <div className="flex items-center gap-3 py-4">
              <button
                onClick={() => setSelectedChat(null)}
                className="touch-target text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center border-2 border-primary">
                  <span className="text-white text-xs font-semibold">{selectedConversation?.avatar}</span>
                </div>
                {selectedConversation?.online && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-dark-light"></div>
                )}
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-white">{selectedConversation?.name}</h3>
                <p className="text-xs text-gray-400">
                  {selectedConversation?.online ? 'Online' : 'Offline'}
                </p>
              </div>
              <button className="touch-target text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto">
          <div className="container-mobile py-4 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[75%] rounded-2xl px-4 py-2 ${
                    msg.sender === 'me'
                      ? 'bg-primary text-white rounded-br-sm'
                      : 'bg-dark-light text-white rounded-bl-sm'
                  }`}
                  style={msg.sender === 'other' ? { backgroundColor: '#1e293b' } : {}}
                >
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                  <p className={`text-xs mt-1 ${msg.sender === 'me' ? 'text-white/70' : 'text-gray-400'}`}>
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Message Input */}
        <div className="sticky bottom-0 bg-dark-light border-t border-dark" style={{ backgroundColor: '#1e293b' }}>
          <div className="container-mobile py-3">
            <div className="flex items-center gap-3">
              <button className="touch-target text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                </svg>
              </button>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type a message..."
                className="flex-1 px-4 py-3 bg-dark rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                onClick={handleSendMessage}
                disabled={!message.trim()}
                className="touch-target bg-primary rounded-xl px-4 py-3 text-white hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Conversations List View
  return (
    <div className="min-h-screen bg-dark text-white pb-20" style={{ backgroundColor: '#0f172a' }}>
      {/* Header */}
      <div className="sticky top-0 z-40 bg-dark-light border-b border-dark" style={{ backgroundColor: '#1e293b' }}>
        <div className="container-mobile">
          <div className="flex items-center justify-between py-4">
            <h1 className="text-xl font-bold text-white">Messages</h1>
            <button className="touch-target text-gray-400 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="container-mobile py-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search conversations..."
            className="w-full h-11 px-4 pl-12 bg-dark-light rounded-xl text-base text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
            style={{ backgroundColor: '#1e293b' }}
          />
          <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Conversations List */}
      <div className="container-mobile">
        <div className="space-y-1">
          {conversations.map((conversation) => (
            <button
              key={conversation.id}
              onClick={() => setSelectedChat(conversation.id)}
              className="w-full flex items-center gap-3 p-4 hover:bg-dark-light rounded-xl transition-colors"
              style={{ backgroundColor: selectedChat === conversation.id ? '#1e293b' : 'transparent' }}
            >
              <div className="relative flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center border-2 border-primary">
                  <span className="text-white text-sm font-semibold">{conversation.avatar}</span>
                </div>
                {conversation.online && (
                  <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-dark"></div>
                )}
              </div>
              <div className="flex-1 text-left min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-base font-semibold text-white truncate">{conversation.name}</h3>
                  <span className="text-xs text-gray-500 flex-shrink-0 ml-2">{conversation.time}</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-400 truncate">{conversation.lastMessage}</p>
                  {conversation.unread > 0 && (
                    <span className="ml-2 flex-shrink-0 w-5 h-5 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {conversation.unread}
                    </span>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chat;

