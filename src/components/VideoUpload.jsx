import React, { useState, useRef, useEffect } from 'react';
import { companies } from '../data/companies';

const VideoUpload = ({ uploadType = 'feed', onBack, onSubmit, isWhiteTheme = false }) => {
  const [companyName, setCompanyName] = useState('');
  const [selectedCompanyId, setSelectedCompanyId] = useState(null);
  const [videoFile, setVideoFile] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);
  const [caption, setCaption] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const fileInputRef = useRef(null);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowCompanyDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Filter companies based on search query
  const filteredCompanies = companies.filter(company =>
    company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    company.industry.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCompanySelect = (company) => {
    setCompanyName(company.name);
    setSelectedCompanyId(company.id);
    setShowCompanyDropdown(false);
    setSearchQuery('');
  };

  const handleVideoSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check file type
      if (!file.type.startsWith('video/')) {
        alert('Please select a video file');
        return;
      }

      // Check file size (100MB limit for Vercel Pro, 4.5MB for Hobby)
      const maxSize = 100 * 1024 * 1024; // 100MB
      if (file.size > maxSize) {
        alert(`Video file is too large. Maximum size is ${(maxSize / 1024 / 1024).toFixed(0)}MB. Your file is ${(file.size / 1024 / 1024).toFixed(2)}MB.`);
        return;
      }

      setVideoFile(file);
      // Create preview URL
      const previewUrl = URL.createObjectURL(file);
      setVideoPreview(previewUrl);
    }
  };

  const handleRemoveVideo = () => {
    if (videoPreview) {
      URL.revokeObjectURL(videoPreview);
    }
    setVideoFile(null);
    setVideoPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleUpload = async () => {
    if (!companyName.trim()) {
      alert('Please enter or select a company name');
      return;
    }
    if (!videoFile) {
      alert('Please select a video file');
      return;
    }
    if (!caption.trim()) {
      alert('Please enter a caption');
      return;
    }

    setIsUploading(true);

    try {
      // Create FormData for multipart/form-data upload
      const formData = new FormData();
      formData.append('video', videoFile);
      formData.append('videoType', uploadType);
      formData.append('companyName', companyName);
      if (selectedCompanyId) {
        formData.append('companyId', selectedCompanyId.toString());
      }
      formData.append('caption', caption);

      // Get API URL - use environment variable or default to relative path
      const apiUrl = import.meta.env.VITE_API_URL || '/api/upload-video';

      // Upload to API
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: formData,
      });

      // Get response text once
      const responseText = await response.text();
      
      // Check if response is empty
      if (!responseText || responseText.trim() === '') {
        throw new Error('Empty response from server. Check Vercel function logs.');
      }

      // Check content type
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error(`Server returned non-JSON response: ${responseText.substring(0, 200)}`);
      }

      // Parse JSON
      let result;
      try {
        result = JSON.parse(responseText);
      } catch (parseError) {
        console.error('JSON parse error:', parseError);
        console.error('Response text:', responseText);
        throw new Error(`Failed to parse server response: ${parseError.message}`);
      }

      if (!response.ok) {
        throw new Error(result.error || result.details || 'Failed to upload video');
      }

      // Success - call onSubmit callback with the response data
      if (onSubmit) {
        onSubmit({
          ...result.data,
          type: uploadType,
        });
      }

      // Reset form
      setCompanyName('');
      setSelectedCompanyId(null);
      setVideoFile(null);
      if (videoPreview) {
        URL.revokeObjectURL(videoPreview);
      }
      setVideoPreview(null);
      setCaption('');
      setIsUploading(false);

      // Show success message
      alert(`${uploadType.charAt(0).toUpperCase() + uploadType.slice(1)} video uploaded successfully!`);
      
      // Navigate back if callback provided
      if (onBack) {
        onBack();
      }
    } catch (error) {
      console.error('Upload error:', error);
      setIsUploading(false);
      alert(`Failed to upload video: ${error.message}`);
    }
  };

  const getTypeLabel = () => {
    switch (uploadType) {
      case 'feed':
        return 'Feed Video';
      case 'reel':
        return 'Reel Video';
      case 'story':
        return 'Story Video';
      default:
        return 'Video';
    }
  };

  const getTypeIcon = () => {
    switch (uploadType) {
      case 'feed':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        );
      case 'reel':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        );
      case 'story':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`min-h-screen pb-20 ${isWhiteTheme ? 'bg-white text-gray-900' : 'bg-dark text-white'}`} style={isWhiteTheme ? { backgroundColor: '#ffffff' } : { backgroundColor: '#0f172a' }}>
      {/* Header */}
      <div className={`sticky top-0 z-40 border-b ${isWhiteTheme ? 'bg-white border-gray-200' : 'bg-dark border-dark-light'}`} style={isWhiteTheme ? { backgroundColor: '#ffffff' } : { backgroundColor: '#0f172a' }}>
        <div className="w-full px-4 py-3 md:max-w-4xl md:mx-auto">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className={`touch-target p-1 rounded-lg transition-colors ${isWhiteTheme ? 'hover:bg-gray-100' : 'hover:bg-dark-light'}`}
            >
              <svg className={`w-6 h-6 ${isWhiteTheme ? 'text-gray-900' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex items-center gap-2">
              {getTypeIcon()}
              <h1 className={`text-lg font-semibold ${isWhiteTheme ? 'text-gray-900' : 'text-white'}`}>
                Upload {getTypeLabel()}
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <main className={`w-full ${isWhiteTheme ? 'bg-white' : 'bg-dark'}`} style={isWhiteTheme ? { backgroundColor: '#ffffff' } : { backgroundColor: '#0f172a' }}>
        <div className="w-full max-w-2xl mx-auto px-4 py-6 space-y-6">
          {/* Company Name Section */}
          <div className={`rounded-2xl p-5 border ${isWhiteTheme ? 'bg-gray-50 border-gray-200' : 'bg-dark-light border-dark-light'}`}>
            <label className={`block text-sm font-semibold mb-3 ${isWhiteTheme ? 'text-gray-900' : 'text-white'}`}>
              Company Name <span className="text-red-500">*</span>
            </label>
            <div className="relative" ref={dropdownRef}>
              <input
                type="text"
                value={companyName}
                onChange={(e) => {
                  setCompanyName(e.target.value);
                  setSearchQuery(e.target.value);
                  setShowCompanyDropdown(true);
                  if (!e.target.value) {
                    setSelectedCompanyId(null);
                  }
                }}
                onFocus={() => setShowCompanyDropdown(true)}
                placeholder="Search or enter company name..."
                className={`w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary ${
                  isWhiteTheme 
                    ? 'bg-white border border-gray-300 text-gray-900 placeholder-gray-500' 
                    : 'bg-dark border border-gray-600 text-white placeholder-gray-500'
                }`}
              />
              
              {/* Company Dropdown */}
              {showCompanyDropdown && searchQuery && filteredCompanies.length > 0 && (
                <div className={`absolute z-10 w-full mt-2 rounded-xl shadow-lg max-h-60 overflow-y-auto ${
                  isWhiteTheme ? 'bg-white border border-gray-200' : 'bg-dark-light border border-gray-600'
                }`}>
                  {filteredCompanies.slice(0, 5).map((company) => (
                    <button
                      key={company.id}
                      onClick={() => handleCompanySelect(company)}
                      className={`w-full text-left px-4 py-3 hover:bg-opacity-50 transition-colors ${
                        isWhiteTheme ? 'hover:bg-gray-100' : 'hover:bg-dark'
                      }`}
                    >
                      <p className={`text-sm font-medium ${isWhiteTheme ? 'text-gray-900' : 'text-white'}`}>
                        {company.name}
                      </p>
                      <p className={`text-xs ${isWhiteTheme ? 'text-gray-600' : 'text-gray-400'}`}>
                        {company.industry}
                      </p>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Video Upload Section */}
          <div className={`rounded-2xl p-5 border ${isWhiteTheme ? 'bg-gray-50 border-gray-200' : 'bg-dark-light border-dark-light'}`}>
            <label className={`block text-sm font-semibold mb-3 ${isWhiteTheme ? 'text-gray-900' : 'text-white'}`}>
              Video <span className="text-red-500">*</span>
            </label>
            
            {!videoPreview ? (
              <div className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
                isWhiteTheme 
                  ? 'border-gray-300 hover:border-yellow-500 bg-white' 
                  : 'border-gray-600 hover:border-primary bg-dark'
              }`}>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="video/*"
                  onChange={handleVideoSelect}
                  className="hidden"
                  id="video-upload"
                />
                <label
                  htmlFor="video-upload"
                  className="cursor-pointer flex flex-col items-center gap-3"
                >
                  <svg className={`w-12 h-12 ${isWhiteTheme ? 'text-gray-400' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className={`text-sm font-medium mb-1 ${isWhiteTheme ? 'text-gray-900' : 'text-white'}`}>
                      Click to upload video
                    </p>
                    <p className={`text-xs ${isWhiteTheme ? 'text-gray-600' : 'text-gray-400'}`}>
                      MP4, MOV, AVI up to 100MB
                    </p>
                  </div>
                </label>
              </div>
            ) : (
              <div className="relative">
                <video
                  src={videoPreview}
                  controls
                  className="w-full rounded-xl max-h-96 bg-black"
                />
                <button
                  onClick={handleRemoveVideo}
                  className={`absolute top-2 right-2 p-2 rounded-full ${isWhiteTheme ? 'bg-white/90' : 'bg-dark-light/90'} hover:opacity-80 transition-opacity`}
                >
                  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className={`mt-2 px-3 py-2 rounded-lg ${isWhiteTheme ? 'bg-gray-100' : 'bg-dark'}`}>
                  <p className={`text-sm font-medium ${isWhiteTheme ? 'text-gray-900' : 'text-white'}`}>
                    {videoFile.name}
                  </p>
                  <p className={`text-xs ${isWhiteTheme ? 'text-gray-600' : 'text-gray-400'}`}>
                    {(videoFile.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Caption Section */}
          <div className={`rounded-2xl p-5 border ${isWhiteTheme ? 'bg-gray-50 border-gray-200' : 'bg-dark-light border-dark-light'}`}>
            <label className={`block text-sm font-semibold mb-3 ${isWhiteTheme ? 'text-gray-900' : 'text-white'}`}>
              Caption <span className="text-red-500">*</span>
            </label>
            <textarea
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="Write a caption for your video..."
              rows={6}
              className={`w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary resize-none ${
                isWhiteTheme 
                  ? 'bg-white border border-gray-300 text-gray-900 placeholder-gray-500' 
                  : 'bg-dark border border-gray-600 text-white placeholder-gray-500'
              }`}
            />
            <p className={`text-xs mt-2 ${isWhiteTheme ? 'text-gray-600' : 'text-gray-400'}`}>
              {caption.length} characters
            </p>
          </div>

          {/* Upload Button */}
          <div className="sticky bottom-4 pb-4">
            <button
              onClick={handleUpload}
              disabled={!companyName.trim() || !videoFile || !caption.trim() || isUploading}
              className={`w-full py-4 rounded-xl font-semibold text-white transition-opacity disabled:opacity-50 disabled:cursor-not-allowed ${
                isWhiteTheme ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-primary hover:bg-primary-dark'
              }`}
            >
              {isUploading ? (
                <div className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Uploading...
                </div>
              ) : (
                `Upload ${getTypeLabel()}`
              )}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VideoUpload;

