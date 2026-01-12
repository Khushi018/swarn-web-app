import React, { useState } from 'react';

const CreatePostModal = ({ isOpen, onClose, onSubmit }) => {
  const [contentType, setContentType] = useState('news'); // 'news', 'ideas', 'videos', 'gallery'
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedFiles, setSelectedFiles] = useState([]);

  if (!isOpen) return null;

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles([...selectedFiles, ...files]);
  };

  const handleRemoveFile = (index) => {
    setSelectedFiles(selectedFiles.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    const postData = {
      type: contentType,
      title,
      content,
      files: selectedFiles,
    };
    
    if (onSubmit) {
      onSubmit(postData);
    }
    
    // Reset form
    setTitle('');
    setContent('');
    setSelectedFiles([]);
    onClose();
  };

  const getContentTypeIcon = (type) => {
    const iconClass = "w-5 h-5";
    switch (type) {
      case 'news':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
        );
      case 'ideas':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        );
      case 'videos':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        );
      case 'gallery':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        );
      default:
        return null;
    }
  };

  const contentTypeOptions = [
    { id: 'news', label: 'News Article' },
    { id: 'ideas', label: 'Ideas' },
    { id: 'videos', label: 'Videos' },
    { id: 'gallery', label: 'Gallery' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-lg mx-4 bg-dark-light rounded-2xl border border-dark-light shadow-2xl max-h-[90vh] overflow-hidden flex flex-col" style={{ backgroundColor: '#1e293b' }}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-dark">
          <h2 className="text-lg font-semibold text-white">Create Post</h2>
          <button
            onClick={onClose}
            className="touch-target text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content Type Selection */}
        <div className="p-4 border-b border-dark">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-2">
            {contentTypeOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setContentType(option.id)}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  contentType === option.id
                    ? 'bg-primary text-white'
                    : 'bg-dark text-gray-300 hover:bg-dark-light'
                }`}
              >
                {getContentTypeIcon(option.id)}
                <span>{option.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* Title Input */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder={`Enter ${contentTypeOptions.find(o => o.id === contentType)?.label.toLowerCase()} title...`}
              className="w-full px-4 py-3 bg-dark rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Content Textarea */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Content
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder={`Write your ${contentTypeOptions.find(o => o.id === contentType)?.label.toLowerCase()} here...`}
              rows={8}
              className="w-full px-4 py-3 bg-dark rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
          </div>

          {/* File Upload Section */}
          {(contentType === 'videos' || contentType === 'gallery') && (
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {contentType === 'videos' ? 'Upload Videos' : 'Upload Images'}
              </label>
              <div className="border-2 border-dashed border-gray-600 rounded-xl p-6 text-center hover:border-primary transition-colors">
                <input
                  type="file"
                  multiple
                  accept={contentType === 'videos' ? 'video/*' : 'image/*'}
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
                    Click to upload {contentType === 'videos' ? 'videos' : 'images'}
                  </span>
                </label>
              </div>

              {/* Selected Files Preview */}
              {selectedFiles.length > 0 && (
                <div className="mt-4 space-y-2">
                  {selectedFiles.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-dark rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                          {contentType === 'videos' ? (
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
                          <p className="text-sm text-white font-medium truncate max-w-xs">
                            {file.name}
                          </p>
                          <p className="text-xs text-gray-400">
                            {(file.size / 1024 / 1024).toFixed(2)} MB
                          </p>
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

        {/* Footer Actions */}
        <div className="p-4 border-t border-dark flex items-center gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-3 bg-dark rounded-xl text-gray-300 font-medium hover:bg-dark-light transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={!title.trim() || !content.trim()}
            className="flex-1 px-4 py-3 bg-primary rounded-xl text-white font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePostModal;

