import React, { useState } from 'react';
import CompanyLogo from './CompanyLogo';

const GlassCard = ({ children, className = '' }) => (
  <div
    className={[
      'rounded-2xl border border-white/10 bg-white/5 backdrop-blur',
      'shadow-[0_10px_30px_rgba(0,0,0,0.25)]',
      className,
    ].join(' ')}
  >
    {children}
  </div>
);

const Chip = ({ children }) => (
  <span className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-gray-200">
    {children}
  </span>
);

const SectionTitle = ({ title, right }) => (
  <div className="flex items-end justify-between gap-3 mb-3">
    <h3 className="text-sm font-semibold text-white tracking-wide uppercase">{title}</h3>
    {right ? <div className="text-xs text-gray-300">{right}</div> : null}
  </div>
);

const ConsultantProfile = ({ consultantId, onBack, isOwnProfile = false }) => {
  const [activeTab, setActiveTab] = useState('Home');
  const [profilePicError, setProfilePicError] = useState(false);
  const [bannerError, setBannerError] = useState(false);

  // Sample consultant data
  const consultant = {
    id: consultantId || 1,
    name: 'Sarah Jenkins',
    username: 'sarahjenkins',
    avatar: 'SJ',
    profilePicture: '/images/consultant-profile-pic.png', // Profile picture image path
    bannerImage: '/images/consultant-banner.png', // Banner image path
    title: 'Strategic Business Consultant',
    firm: 'Jenkins Advisory Group',
    experience: '12 years',
    location: 'New York, NY',
    bio: 'Expert in helping startups scale from Seed to Series B. Specialized in go-to-market strategy, fundraising, and operational excellence.',
    verified: true,
    clients: 45,
    companiesAssisted: 67,
    followers: 1240,
    profileViews: 3420,
    expertise: ['Strategy', 'Fundraising', 'Go-to-Market', 'Operations', 'Scaling'],
    industries: ['SaaS', 'FinTech', 'HealthTech', 'AI/ML', 'E-commerce'],
    certifications: ['MBA - Harvard Business School', 'Certified Business Advisor'],
    services: [
      'Strategic Planning',
      'Fundraising Advisory',
      'Go-to-Market Strategy',
      'Operational Excellence',
      'Board Advisory',
    ],
    stats: {
      clients: 45,
      companiesAssisted: 67,
      articlesPublished: 28,
      avgClientRating: 4.9,
    },
  };

  const tabs = ['Home', 'About', 'Services', 'Content', 'Clients', 'Analytics'];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Home':
        return (
          <div className="space-y-6">
            {/* Portfolio Summary Card */}
            <GlassCard className="p-5">
              <SectionTitle title="Professional Portfolio" />
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-xs text-gray-400 mb-1">Total Clients</p>
                  <p className="text-2xl font-bold text-white">{consultant.stats.clients}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Companies Assisted</p>
                  <p className="text-2xl font-bold text-primary">{consultant.stats.companiesAssisted}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-400 mb-1">Articles Published</p>
                  <p className="text-lg font-semibold text-white">{consultant.stats.articlesPublished}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Avg Rating</p>
                  <p className="text-lg font-semibold text-yellow-500">{consultant.stats.avgClientRating} ⭐</p>
                </div>
              </div>
            </GlassCard>

            {/* Expertise Areas */}
            <GlassCard className="p-5">
              <SectionTitle title="Expertise Areas" />
              <div className="flex flex-wrap gap-2">
                {consultant.expertise.map((area, index) => (
                  <Chip key={index}>{area}</Chip>
                ))}
              </div>
            </GlassCard>

            {/* Industry Focus */}
            <GlassCard className="p-5">
              <SectionTitle title="Industry Focus" />
              <div className="flex flex-wrap gap-2">
                {consultant.industries.map((industry, index) => (
                  <Chip key={index}>{industry}</Chip>
                ))}
              </div>
            </GlassCard>
          </div>
        );

      case 'About':
        return (
          <div className="space-y-6">
            <GlassCard className="p-5">
              <SectionTitle title="Professional Background" />
              <p className="text-sm text-gray-200/90 leading-relaxed mb-4">{consultant.bio}</p>
            </GlassCard>

            <GlassCard className="p-5">
              <SectionTitle title="Professional Details" />
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Consulting Firm</span>
                  <span className="text-white text-sm text-right">{consultant.firm}</span>
                </div>
                <div className="h-px bg-white/10"></div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Experience</span>
                  <span className="text-white text-sm text-right">{consultant.experience}</span>
                </div>
                <div className="h-px bg-white/10"></div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Location</span>
                  <span className="text-white text-sm text-right">{consultant.location}</span>
                </div>
                <div className="h-px bg-white/10"></div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Professional Title</span>
                  <span className="text-white text-sm text-right">{consultant.title}</span>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-5">
              <SectionTitle title="Certifications & Credentials" />
              <div className="space-y-2">
                {consultant.certifications.map((cert, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-200/90 text-sm">{cert}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        );

      case 'Services':
        return (
          <div className="space-y-6">
            <GlassCard className="p-5">
              <SectionTitle title="Service Offerings" />
              <div className="space-y-3">
                {consultant.services.map((service, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-dark rounded-xl">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-white text-sm font-medium">{service}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="p-5">
              <SectionTitle title="Service Areas" />
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-gray-400 mb-2">Company Stages</p>
                  <div className="flex flex-wrap gap-2">
                    <Chip>Seed</Chip>
                    <Chip>Series A</Chip>
                    <Chip>Series B</Chip>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-2">Service Types</p>
                  <div className="flex flex-wrap gap-2">
                    {consultant.expertise.map((exp, index) => (
                      <Chip key={index}>{exp}</Chip>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        );

      case 'Content':
        return (
          <div className="space-y-6">
            <GlassCard className="p-5">
              <SectionTitle title="Published Articles" right={`${consultant.stats.articlesPublished} articles`} />
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="bg-dark rounded-xl p-4 border border-dark-light">
                    <h4 className="text-base font-semibold text-white mb-2">
                      How to Scale Your Startup from Seed to Series A
                    </h4>
                    <p className="text-sm text-gray-300 mb-3 line-clamp-2">
                      Key strategies and insights for startups looking to raise their Series A round...
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-xs text-gray-400">
                        <span>1.2k views</span>
                        <span>•</span>
                        <span>156 likes</span>
                        <span>•</span>
                        <span>2d ago</span>
                      </div>
                      <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded">Strategy</span>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        );

      case 'Clients':
        if (!isOwnProfile) {
          return (
            <div className="text-center py-12">
              <p className="text-gray-400">Client information is private</p>
            </div>
          );
        }
        return (
          <div className="space-y-6">
            <GlassCard className="p-5">
              <SectionTitle title="Client Management" right={`${consultant.stats.clients} clients`} />
              <div className="space-y-4">
                {['TechFlow Solutions', 'GreenEnergy Innovations', 'MediCare AI', 'FinTech Pro'].map((client, index) => (
                  <div key={index} className="bg-dark rounded-xl p-4 border border-dark-light">
                    <div className="flex items-center gap-3 mb-3">
                      <CompanyLogo initials={client.substring(0, 2)} author={client} size="md" showBorder={true} />
                      <div className="flex-1">
                        <h4 className="text-base font-semibold text-white">{client}</h4>
                        <p className="text-xs text-gray-400">Active • Series A</p>
                      </div>
                      <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">Active</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-400">Last engagement</span>
                        <span className="text-white">2 days ago</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-400">Services provided</span>
                        <span className="text-white">Strategy, Fundraising</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        );

      case 'Analytics':
        if (!isOwnProfile) {
          return (
            <div className="text-center py-12">
              <p className="text-gray-400">Analytics are private</p>
            </div>
          );
        }
        return (
          <div className="space-y-6">
            <GlassCard className="p-5">
              <SectionTitle title="Profile Analytics" />
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-dark rounded-xl p-4">
                  <p className="text-xs text-gray-400 mb-1">Profile Views</p>
                  <p className="text-2xl font-bold text-white">{consultant.profileViews}</p>
                  <p className="text-xs text-green-500 mt-1">+12% this month</p>
                </div>
                <div className="bg-dark rounded-xl p-4">
                  <p className="text-xs text-gray-400 mb-1">Content Views</p>
                  <p className="text-2xl font-bold text-white">8.4k</p>
                  <p className="text-xs text-green-500 mt-1">+8% this month</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-dark rounded-xl p-4">
                  <p className="text-xs text-gray-400 mb-1">New Inquiries</p>
                  <p className="text-xl font-semibold text-white">12</p>
                </div>
                <div className="bg-dark rounded-xl p-4">
                  <p className="text-xs text-gray-400 mb-1">Conversion Rate</p>
                  <p className="text-xl font-semibold text-primary">35%</p>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-5">
              <SectionTitle title="Content Performance" />
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-gray-300">Total Views</span>
                    <span className="text-sm font-semibold text-white">8,420</span>
                  </div>
                  <div className="w-full bg-dark rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-gray-300">Engagement Rate</span>
                    <span className="text-sm font-semibold text-white">12.5%</span>
                  </div>
                  <div className="w-full bg-dark rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-dark text-white pb-20" style={{ backgroundColor: '#0f172a' }}>
      {/* Header */}
      <div className="sticky top-0 bg-dark z-50 border-b border-dark-light" style={{ backgroundColor: '#0f172a' }}>
        <div className="container-mobile py-3">
          <div className="flex items-center gap-3">
            <button 
              onClick={onBack} 
              className="touch-target p-2 hover:bg-dark-light rounded-lg transition-colors flex-shrink-0"
            >
              <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-white truncate">{consultant.name}</p>
              <p className="text-xs text-gray-400 truncate">{consultant.title} • Consultant profile</p>
            </div>
            <button className="touch-target p-2 hover:bg-dark-light rounded-lg transition-colors flex-shrink-0">
              <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <button className="touch-target p-2 hover:bg-dark-light rounded-lg transition-colors flex-shrink-0">
              <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="relative w-full h-32 overflow-hidden">
        {consultant.bannerImage && !bannerError ? (
          <>
            <img 
              src={consultant.bannerImage} 
              alt={`${consultant.name} banner`}
              className="w-full h-full object-cover"
              onError={() => setBannerError(true)}
            />
            <div className="absolute inset-0 bg-dark/40"></div>
          </>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-pink-500/30"></div>
        )}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-dark to-transparent"></div>
      </div>

      {/* Consultant Info Section */}
      <div className="container-mobile -mt-12 relative z-10">
        <div className="flex items-start gap-4 mb-4">
          {/* Profile Picture */}
          <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0 border-4 border-dark shadow-lg overflow-hidden">
            {consultant.profilePicture && !profilePicError ? (
              <img 
                src={consultant.profilePicture} 
                alt={consultant.name}
                className="w-full h-full object-cover"
                onError={() => setProfilePicError(true)}
              />
            ) : (
              <span className="text-white text-3xl font-bold">{consultant.avatar}</span>
            )}
          </div>
          
          <div className="flex-1 pt-2">
            <div className="flex items-center gap-2 mb-1">
              <h1 className="text-2xl font-bold text-white">{consultant.name}</h1>
              {consultant.verified && (
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              )}
            </div>
            <p className="text-sm text-gray-300 mb-2">
              {consultant.title} • {consultant.firm}
            </p>
            <p className="text-xs text-gray-400 mb-2">
              {consultant.location} • {consultant.experience} experience
            </p>
          </div>
        </div>

        {/* Profile Statistics */}
        <div className="flex items-center justify-around py-4 mb-4 border-y border-dark-light">
          <div className="flex flex-col items-center">
            <span className="text-lg font-bold text-white">{consultant.stats.clients}</span>
            <span className="text-xs text-gray-400">Clients</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-lg font-bold text-white">{consultant.stats.companiesAssisted}</span>
            <span className="text-xs text-gray-400">Companies</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-lg font-bold text-white">{consultant.followers}</span>
            <span className="text-xs text-gray-400">Followers</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-lg font-bold text-white">{consultant.stats.articlesPublished}</span>
            <span className="text-xs text-gray-400">Articles</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 mb-6">
          {isOwnProfile ? (
            <button className="flex-1 h-11 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              Edit Profile
            </button>
          ) : (
            <button className="flex-1 h-11 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Connect
            </button>
          )}
          <button className="flex-1 h-11 bg-dark-light border border-gray-700 text-white font-semibold rounded-lg hover:bg-dark-light/80 transition-colors flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Following
          </button>
          <button className="h-11 w-11 bg-dark-light border border-gray-700 rounded-lg hover:bg-dark-light/80 transition-colors flex items-center justify-center">
            <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>
        </div>

        {/* Tabs Navigation */}
        <div className="border-b border-dark-light mb-6">
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-shrink-0 px-4 py-3 text-sm font-medium transition-colors relative ${
                  activeTab === tab
                    ? 'text-primary'
                    : 'text-gray-400 hover:text-gray-300'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="pb-8">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default ConsultantProfile;

