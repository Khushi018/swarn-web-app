# Swarn Platform - Functional Requirements Document

## 1. Overview

**Swarn** is a mobile-first startup investing and venture capital discovery platform that connects investors with startups, facilitates deal discovery, and provides social networking features for the investment community. The platform serves five primary user types: **Investors**, **Investees (Startups/Companies)**, **Consultants**, **Influencers**, and **Casual Viewers**, each with tailored features and benefits.

---

## 2. Core Functional Requirements

### 2.1 User Authentication & Profile Management

#### 2.1.1 User Registration & Login
- **FR-001**: Users must be able to register with email/phone number
- **FR-002**: Users must be able to log in securely
- **FR-003**: Users must be able to reset forgotten passwords
- **FR-004**: Users must be able to view and edit their profile information
- **FR-005**: Users must be able to upload profile pictures/avatars
- **FR-006**: Users must be able to set their investment preferences and interests

#### 2.1.2 User Profile
- **FR-007**: Users must be able to view their own profile with portfolio summary
- **FR-008**: Users must be able to view other users' profiles
- **FR-009**: Users must be able to follow/unfollow other users
- **FR-010**: Users must be able to see their activity history (viewed companies, saved deals, etc.)

---

### 2.2 Company Discovery & Browsing

#### 2.2.1 Home Feed
- **FR-011**: Users must be able to view a personalized home feed with:
  - Top Picks (curated company recommendations with match percentages)
  - Market Watch (industry news and trends)
  - Company Updates (startup updates with funding progress)
  - Social Feed (Instagram-like posts from companies)
  - Investment Notifications (social investment activity)

#### 2.2.2 Company Profiles
- **FR-012**: Users must be able to view detailed company profiles with tabs:
  - **Home Tab**: Company snapshot, valuation, raised amount, business brief
  - **About Tab**: Overview, company details (industry, founded, employees, location, stage, website), tags
  - **Posts Tab**: Instagram-like grid view of company posts (news, articles, notes, reels)
  - **Deals Tab**: Investment opportunity details including:
    - Status (FUND RAISE, ON SALE, ON PURCHASE)
    - Financial details (valuation, raised amount, funding target, progress)
    - Investment terms (minimum investment, equity offered, expected close date, use of funds)
    - Sale/Purchase details (transaction type, deal structure, expected closing, due diligence period)
    - Key highlights
    - Call-to-action buttons (Express Interest, Download Deck, Make Offer, etc.)
  - **Life Tab**: Company culture information (coming soon)
  - **People Tab**: Team members information (coming soon)

#### 2.2.3 Company Actions
- **FR-013**: Users must be able to follow/unfollow companies
- **FR-014**: Users must be able to save companies to their watchlist
- **FR-015**: Users must be able to express interest in funding opportunities
- **FR-016**: Users must be able to download investment decks
- **FR-017**: Users must be able to make offers for companies on sale
- **FR-018**: Users must be able to request due diligence packages

#### 2.2.4 Top Picks & Recommendations
- **FR-019**: System must display personalized company recommendations with match percentages
- **FR-020**: Each recommendation must show: company name, category, stage, match percentage, valuation, asking price
- **FR-021**: Users must be able to save or express interest in recommended companies

---

### 2.3 Content Consumption

#### 2.3.1 Video Reels
- **FR-022**: Users must be able to browse video reels in full-screen vertical format
- **FR-023**: Videos must auto-play when scrolled into view
- **FR-024**: Users must be able to:
  - Play/pause videos by tapping
  - Like/unlike videos
  - Comment on videos
  - Share videos
  - Save videos
  - Mute/unmute videos
- **FR-025**: Each reel must display: company name, description, views count, likes count, comments count
- **FR-026**: Users must be able to navigate between reels by swiping/scrolling

#### 2.3.2 Explore Section
- **FR-027**: Users must be able to explore content through tabs:
  - **Videos Tab**: Grid layout with 2-2-merged pattern (alternating merged columns)
  - **News Tab**: List of industry news with source, time, category
  - **Articles Tab**: List of investment insights with author, read time, category
- **FR-028**: Videos in explore grid must show: views, likes, company name overlay
- **FR-029**: Users must be able to click videos to open in full-screen reels view

#### 2.3.3 Social Feed
- **FR-030**: Users must be able to view Instagram-like feed with:
  - Company posts (images and videos)
  - Post captions
  - Like, comment, share, save actions
  - View comments count
  - View likes count
- **FR-031**: Video posts must have play/pause controls
- **FR-032**: Users must be able to view full-screen media

#### 2.3.4 Stories
- **FR-033**: Users must be able to view company stories in horizontal scroll
- **FR-034**: Users must be able to create their own stories
- **FR-035**: Stories must display in full-screen viewer with navigation
- **FR-036**: Stories must auto-advance or allow manual navigation

---

### 2.4 Search & Discovery

#### 2.4.1 Search Functionality
- **FR-037**: Users must be able to search for companies by:
  - Company name
  - Industry
  - Tags
- **FR-038**: Search must provide real-time results as user types
- **FR-039**: Users must be able to navigate to dedicated search page
- **FR-040**: Search results must be clickable to view company profiles

#### 2.4.2 Filtering & Sorting
- **FR-041**: Users must be able to filter companies by:
  - Industry/category
  - Stage (Seed, Series A, Series B, etc.)
  - Status (FUND RAISE, ON SALE, ON PURCHASE)
  - Location
- **FR-042**: Users must be able to sort companies by:
  - Match percentage
  - Valuation
  - Recently added
  - Popularity

---

### 2.5 Investment Analytics & Portfolio Management

#### 2.5.1 Analytics Dashboard
- **FR-043**: Users must be able to view analytics dashboard with tabs:
  - **Overview Tab**:
    - Capital Allocation (Invested, Committed, Available)
    - Performance metrics (Unrealized IRR, Total Exits, Active Portfolio)
    - Quarterly performance charts
    - Deal Pipeline (Interested, In Discussion, Due Diligence, Invested)
    - Activity metrics (Viewed, Saved, Engaged)
    - Top Sectors (with percentage breakdowns)
    - Portfolio Overview (list of portfolio companies with details)
    - Recent Notes
  - **Performance Tab**: Detailed performance analysis
  - **Pipeline Tab**: Detailed deal pipeline view
  - **Notes Tab**: Notes management

#### 2.5.2 Portfolio Tracking
- **FR-044**: Users must be able to view their investment portfolio
- **FR-045**: Portfolio view must show:
  - Company name, logo, stage, industry
  - Investment amount
  - Equity percentage
  - Current valuation
  - MOIC (Multiple on Invested Capital)
  - Return on investment
  - Status (Active, Exited, etc.)

#### 2.5.3 Notes & Tracking
- **FR-046**: Users must be able to create notes about companies
- **FR-047**: Notes must support tags/categories
- **FR-048**: Users must be able to view, edit, and delete notes
- **FR-049**: Notes must be timestamped

---

### 2.6 Communication & Messaging

#### 2.6.1 Messaging System
- **FR-050**: Users must be able to send and receive messages
- **FR-051**: Users must be able to view conversation list
- **FR-052**: Conversations must show:
  - Contact name and avatar
  - Last message preview
  - Timestamp
  - Unread message count
  - Online/offline status
- **FR-053**: Users must be able to search conversations
- **FR-054**: Users must be able to start new conversations

#### 2.6.2 Chat Features
- **FR-055**: Users must be able to send text messages
- **FR-056**: Users must be able to attach files/documents
- **FR-057**: Messages must display with timestamps
- **FR-058**: Users must see read receipts and delivery status

---

### 2.7 Content Creation

#### 2.7.1 Post Creation
- **FR-059**: Users must be able to create posts with:
  - Images
  - Videos
  - Captions
- **FR-060**: Users must be able to publish posts to their profile/feed
- **FR-061**: Users must be able to edit/delete their own posts

#### 2.7.2 Story Creation
- **FR-062**: Users must be able to create stories with:
  - Images
  - Videos
  - Text overlays
- **FR-063**: Stories must expire after 24 hours (standard story behavior)

---

### 2.8 Notifications

#### 2.8.1 Notification Types
- **FR-064**: Users must receive notifications for:
  - New investment opportunities matching preferences (Investors)
  - Messages from other users
  - Comments on their posts
  - Likes on their content
  - Company updates from followed companies
  - Investment activity from connections
  - New companies matching consulting expertise (Consultants)
  - Service requests from companies (Consultants)
  - Client activity and updates (Consultants)
  - Investor interest in their companies (Investees)
  - New followers and profile views
- **FR-065**: Users must see notification count badge
- **FR-066**: Users must be able to view notification history
- **FR-067**: Users must be able to mark notifications as read

---

### 2.9 Feed Preferences

#### 2.9.1 Personalization
- **FR-068**: Users must be able to customize their feed preferences
- **FR-069**: Users must be able to select preferred industries
- **FR-070**: Users must be able to set investment stage preferences
- **FR-071**: Users must be able to adjust content type preferences (videos, articles, news)

---

### 2.10 Consultant-Specific Features

#### 2.10.1 Consultant Profile & Verification
- **FR-080**: Consultants must be able to create a professional consultant profile with:
  - Specialization areas and expertise
  - Years of experience
  - Certifications and credentials
  - Service offerings
  - Portfolio of past clients (with permission)
  - Professional bio and background
- **FR-081**: Consultants must be able to apply for verified consultant badge
- **FR-082**: Consultants must be able to showcase their expertise through tags and categories
- **FR-083**: Consultants must be able to display their consulting firm/company affiliation

#### 2.10.2 Client Management
- **FR-084**: Consultants must be able to manage client relationships through the platform
- **FR-085**: Consultants must be able to create client portfolios and organize companies by client
- **FR-086**: Consultants must be able to add private notes for each client
- **FR-087**: Consultants must be able to track client engagement and activity
- **FR-088**: Consultants must be able to share documents and recommendations with clients via messaging
- **FR-089**: Consultants must be able to view client company profiles (with permission)

#### 2.10.3 Service Discovery & Outreach
- **FR-090**: Consultants must be able to discover companies that may need consulting services based on:
  - Company stage (early-stage companies needing guidance)
  - Funding status (companies raising funds may need advisory)
  - Industry and sector
  - Company size and growth stage
- **FR-091**: Consultants must be able to identify investors who may need due diligence support
- **FR-092**: Consultants must be able to send connection requests to potential clients
- **FR-093**: Consultants must be able to view companies seeking consulting services (if companies opt-in)

#### 2.10.4 Thought Leadership & Content
- **FR-094**: Consultants must be able to publish articles and insights
- **FR-095**: Consultants must be able to create educational content (videos, posts, stories)
- **FR-096**: Consultants must be able to share industry analysis and market trends
- **FR-097**: Consultants must be able to tag their content with relevant topics and industries
- **FR-098**: Consultants must be able to track content performance (views, engagement, shares)

#### 2.10.5 Consulting Services Marketplace (Future)
- **FR-099**: Consultants must be able to list their services and pricing (future feature)
- **FR-100**: Consultants must be able to receive service requests from companies (future feature)
- **FR-101**: Consultants must be able to manage service proposals and contracts (future feature)

#### 2.10.6 Analytics & Reporting
- **FR-102**: Consultants must be able to view analytics on:
  - Profile views and engagement
  - Content performance
  - Client acquisition metrics
  - Industry trends relevant to their expertise
- **FR-103**: Consultants must be able to track which companies have viewed their profile
- **FR-104**: Consultants must be able to see engagement with their content and insights

#### 2.10.7 Networking & Collaboration
- **FR-105**: Consultants must be able to connect with other consultants for collaboration
- **FR-106**: Consultants must be able to join or create consultant groups by specialization
- **FR-107**: Consultants must be able to refer clients to other consultants when appropriate
- **FR-108**: Consultants must be able to participate in industry discussions and forums

---

### 2.11 Navigation & User Interface

#### 2.11.1 Bottom Navigation
- **FR-109**: Users must have fixed bottom navigation with:
  - Home icon
  - Explore/Discover icon
  - Create Post icon
  - Analytics icon
  - Profile icon
- **FR-110**: Navigation must show active state for current screen
- **FR-111**: Navigation must be accessible from all screens

#### 2.11.2 Sidebar Menu
- **FR-112**: Users must be able to access sidebar menu with:
  - User profile information
  - Navigation options
  - Owned companies list (for investees)
  - Client list (for consultants)
  - Settings
  - Logout

#### 2.11.3 Responsive Design
- **FR-113**: Platform must be mobile-first (optimized for 360-390px screens)
- **FR-114**: Platform must be responsive for tablet and desktop views
- **FR-115**: All interactive elements must meet minimum touch target size (44px)
- **FR-116**: Platform must support both portrait and landscape orientations

---

### 2.12 Dashboard & Profile Requirements

#### 2.12.1 Company Profile Dashboard

##### Profile Header Section
- **FR-117**: Company profile must display:
  - Company logo/avatar (large, prominent)
  - Company name and verified badge (if applicable)
  - Industry, location, employee count
  - Investment status badge (FUND RAISE, ON SALE, ON PURCHASE)
  - Company stage (Seed, Series A, etc.)
  - Follow/Following button
  - Action buttons (Visit Website, Following, More Options)

##### Hero Banner Section
- **FR-118**: Company profile must have a hero banner section:
  - Gradient background or company image
  - Overlay with company branding
  - Visual appeal for first impression

##### Tab Navigation
- **FR-119**: Company profile must have tabbed navigation with:
  - **Home Tab**: Company snapshot and overview
  - **About Tab**: Detailed company information
  - **Posts Tab**: Company content grid
  - **Deals Tab**: Investment opportunities
  - **Life Tab**: Company culture (future)
  - **People Tab**: Team members (future)
  - Active tab indicator (underline or highlight)

##### Home Tab Content
- **FR-120**: Home tab must display:
  - Company snapshot card with:
    - Current valuation
    - Amount raised (or previous funding)
    - Company stage
  - Business brief/description
  - Key metrics at a glance
  - Recent highlights or milestones

##### About Tab Content
- **FR-121**: About tab must include:
  - **Overview Section**:
    - Business brief/description
    - Mission and vision
    - Value proposition
  - **Company Details Section**:
    - Industry
    - Founded date
    - Number of employees
    - Location (city, country)
    - Company stage
    - Website URL (clickable link)
  - **Tags Section**:
    - Industry tags
    - Technology tags
    - Market tags
    - Clickable tags for filtering

##### Posts Tab Content
- **FR-122**: Posts tab must display:
  - Instagram-like 3-column grid layout
  - Post thumbnails with:
    - Image or video thumbnail
    - Post type indicator (news, article, note, reel)
    - Video duration badge (for video posts)
    - Hover overlay showing likes and comments
  - Post count display
  - Clickable posts that open in modal or detail view
  - Post categories/types clearly labeled

##### Deals Tab Content
- **FR-123**: Deals tab must show:
  - **Investment Opportunity Header**:
    - Status badge (FUND RAISE, ON SALE, ON PURCHASE)
    - Status icon and description
  - **Financial Details Card**:
    - Current valuation
    - Amount raised (for FUND RAISE)
    - Funding target (for FUND RAISE)
    - Progress bar showing funding progress
    - Previous funding (for ON SALE/ON PURCHASE)
  - **Investment Terms Card** (for FUND RAISE):
    - Minimum investment amount
    - Equity offered percentage
    - Expected close date
    - Use of funds breakdown
  - **Sale/Purchase Details Card** (for ON SALE/ON PURCHASE):
    - Transaction type
    - Deal structure
    - Expected closing date
    - Due diligence period
  - **Key Highlights Section**:
    - Bullet points of company strengths
    - Market position
    - Growth metrics
  - **Call-to-Action Buttons**:
    - "Express Interest in Funding" (for FUND RAISE)
    - "Download Investment Deck" (for FUND RAISE)
    - "Make an Offer" (for ON SALE)
    - "Express Acquisition Interest" (for ON PURCHASE)
    - "Request Due Diligence Package"

##### Profile Statistics
- **FR-124**: Company profile must display:
  - Number of followers
  - Number of posts
  - Profile views (for company owners)
  - Engagement metrics (for company owners)

---

#### 2.12.2 User Profile Dashboard (Investors)

##### Profile Header Section
- **FR-125**: User profile must display:
  - User avatar/profile picture
  - User name
  - Verified investor badge (if applicable)
  - Bio/description
  - Location
  - Investment focus areas
  - Follow/Following button
  - Edit Profile button (for own profile)
  - Settings/More options button

##### Profile Statistics
- **FR-126**: User profile must show:
  - Number of companies followed
  - Number of saved companies
  - Number of investments (portfolio size)
  - Number of posts/content shared
  - Number of followers
  - Number of following

##### Portfolio Summary Card
- **FR-127**: User profile must include portfolio summary:
  - Total invested amount
  - Portfolio value
  - Number of active investments
  - Number of exits
  - Average IRR or return percentage
  - Quick link to full analytics dashboard

##### Activity Feed
- **FR-128**: User profile must display:
  - Recent activity (companies viewed, saved, engaged with)
  - Recent posts and content shared
  - Investment activity timeline
  - Comments and interactions

##### Content Tabs
- **FR-129**: User profile must have tabs:
  - **Posts Tab**: User's shared content (posts, articles, insights)
  - **Saved Tab**: Saved companies and deals
  - **Portfolio Tab**: Active investments and portfolio companies
  - **Activity Tab**: Recent activity and interactions

##### Investment Preferences Display
- **FR-130**: User profile must show:
  - Preferred industries
  - Preferred investment stages
  - Investment size range
  - Geographic preferences
  - Investment focus areas

##### Edit Profile Capabilities
- **FR-131**: Users must be able to edit:
  - Profile picture/avatar
  - Name and bio
  - Location
  - Investment preferences
  - Contact information
  - Privacy settings
  - Notification preferences

---

#### 2.12.3 Consultant Profile Dashboard

##### Profile Header Section
- **FR-132**: Consultant profile must display:
  - Consultant avatar/profile picture
  - Consultant name
  - Verified consultant badge (if applicable)
  - Professional title/role
  - Consulting firm/company affiliation (if applicable)
  - Years of experience
  - Bio and professional background
  - Location
  - Follow/Connect button
  - Edit Profile button (for own profile)

##### Expertise & Specialization
- **FR-133**: Consultant profile must show:
  - **Specialization Areas**:
    - Industry expertise (tags/chips)
    - Service types (Strategy, Finance, Operations, etc.)
    - Company stage focus (Seed, Series A, etc.)
  - **Certifications & Credentials**:
    - Professional certifications
    - Educational background
    - Awards and recognition
  - **Skills & Expertise Tags**:
    - Clickable tags
    - Visual representation of expertise areas

##### Professional Portfolio
- **FR-134**: Consultant profile must include:
  - **Client Portfolio** (with permission):
    - Number of clients served
    - Client testimonials (if available)
    - Success stories (anonymized if needed)
    - Industries served
  - **Service Offerings**:
    - List of consulting services
    - Service descriptions
    - Pricing information (optional)

##### Profile Statistics
- **FR-135**: Consultant profile must display:
  - Number of clients
  - Number of companies assisted
  - Number of followers
  - Profile views
  - Content engagement metrics
  - Articles/posts published

##### Content & Thought Leadership
- **FR-136**: Consultant profile must show:
  - **Published Articles Tab**:
    - List of published insights
    - Industry analysis
    - Expert opinions
    - Educational content
  - **Content Performance**:
    - Views, likes, shares
    - Engagement metrics
    - Top performing content

##### Client Management Section (Private)
- **FR-137**: Consultant profile dashboard must include (for own profile):
  - **Client List**:
    - Active clients
    - Past clients
    - Client company names (with permission)
    - Client engagement status
  - **Client Notes**:
    - Private notes per client
    - Meeting notes
    - Recommendations given
  - **Service Delivery Tracking**:
    - Active projects
    - Completed projects
    - Upcoming engagements

##### Analytics Dashboard (Private)
- **FR-138**: Consultant profile must provide analytics:
  - **Profile Analytics**:
    - Profile views over time
    - Profile view sources
    - Engagement with profile
  - **Content Analytics**:
    - Content performance metrics
    - Top performing articles
    - Audience engagement
  - **Client Acquisition Metrics**:
    - New client inquiries
    - Conversion rate
    - Client sources

##### Networking & Connections
- **FR-139**: Consultant profile must display:
  - Connections with other consultants
  - Connections with investors
  - Connections with companies
  - Industry groups joined
  - Collaborative projects

##### Edit Profile Capabilities
- **FR-140**: Consultants must be able to edit:
  - Profile picture/avatar
  - Professional information
  - Expertise areas and specializations
  - Certifications and credentials
  - Service offerings
  - Bio and background
  - Contact information
  - Privacy settings
  - Client portfolio visibility settings

##### Verification Badge Application
- **FR-141**: Consultant profile must allow:
  - Application for verified consultant badge
  - Submission of credentials for verification
  - Verification status tracking
  - Re-application if rejected

---

#### 2.12.4 Common Profile Features

##### Follow/Unfollow Functionality
- **FR-142**: All profiles must support:
  - Follow/unfollow button
  - Follower count display
  - Following count display
  - Mutual connections indicator
  - Follow status persistence

##### Profile View Tracking
- **FR-143**: Profile owners must be able to see:
  - Profile view count
  - Recent profile visitors (if privacy allows)
  - View trends over time
  - View sources (search, direct link, etc.)

##### Share Profile
- **FR-144**: All profiles must support:
  - Share profile link
  - Share to social media
  - Copy profile link
  - Generate QR code for profile

##### Report/Block
- **FR-145**: All profiles must have:
  - Report profile option
  - Block user/company option
  - Privacy controls
  - Content moderation tools

##### Responsive Design
- **FR-146**: All profiles must be:
  - Mobile-optimized (360-390px screens)
  - Responsive for tablet and desktop
  - Touch-friendly navigation
  - Fast loading with lazy loading for images

---

## 3. Business Logic Requirements

### 3.1 Investment Matching
- **BR-001**: System must calculate match percentage based on:
  - User investment preferences
  - Company industry
  - Company stage
  - User's portfolio composition
  - User's past investment behavior

### 3.2 Deal Status Management
- **BR-002**: Companies must be able to set their status:
  - **FUND RAISE**: Actively raising capital
  - **ON SALE**: Company is for sale
  - **ON PURCHASE**: Company is seeking acquisition
- **BR-003**: Deal status must determine available actions and information displayed

### 3.3 Content Moderation
- **BR-004**: System must have content moderation capabilities
- **BR-005**: Users must be able to report inappropriate content
- **BR-006**: System must filter spam and abusive content

---

## 4. Data Requirements

### 4.1 Company Data
- Company name, short name, logo
- Industry, category, tags
- Location, founded date, employee count
- Stage (Seed, Series A, B, etc.)
- Valuation, raised amount, funding target
- Business brief/description
- Website URL
- Status (FUND RAISE, ON SALE, ON PURCHASE)
- Investment terms (minimum investment, equity offered, etc.)

### 4.2 User Data
- Profile information (name, email, avatar)
- Investment preferences
- Portfolio companies
- Saved companies
- Notes
- Activity history

### 4.3 Content Data
- Posts (images, videos, captions, metadata)
- Stories (videos, images, timestamps)
- Comments, likes, shares
- News articles
- Investment insights/articles

---

## 5. Performance Requirements

### 5.1 Performance
- **PR-001**: Page load time must be under 3 seconds
- **PR-002**: Video playback must start within 2 seconds
- **PR-003**: Search results must appear within 500ms
- **PR-004**: Images must be optimized and lazy-loaded

### 5.2 Scalability
- **PR-005**: System must support 10,000+ concurrent users
- **PR-006**: System must handle 100,000+ companies
- **PR-007**: System must support millions of posts and videos

---

## 6. Security Requirements

### 6.1 Authentication & Authorization
- **SR-001**: All user data must be encrypted in transit (HTTPS)
- **SR-002**: Passwords must be hashed and salted
- **SR-003**: Users must only access their own data
- **SR-004**: Role-based access control for different user types

### 6.2 Data Privacy
- **SR-005**: User data must comply with GDPR/privacy regulations
- **SR-006**: Users must be able to delete their account and data
- **SR-007**: Financial information must be handled with extra security

---

## 7. Integration Requirements

### 7.1 External Services
- **IR-001**: System must integrate with payment gateways for investments
- **IR-002**: System must support file storage (images, videos, documents)
- **IR-003**: System must integrate with email service for notifications
- **IR-004**: System must support push notifications

---

## 8. Accessibility Requirements

### 8.1 Accessibility
- **AR-001**: Platform must support screen readers
- **AR-002**: All interactive elements must be keyboard navigable
- **AR-003**: Color contrast must meet WCAG AA standards
- **AR-004**: Text must be readable (minimum 16px base font size)

---

## 9. Future Enhancements (Coming Soon)

- **FE-001**: Company Life tab (company culture information)
- **FE-002**: People tab (team members information)
- **FE-003**: Detailed Performance analytics
- **FE-004**: Detailed Pipeline view
- **FE-005**: Enhanced Notes management
- **FE-006**: Video conferencing integration
- **FE-007**: Document signing integration
- **FE-008**: Advanced analytics and reporting

---

## 10. User Roles & Benefits

### 10.1 Investors

#### Core Capabilities
- Browse and discover investment opportunities
- View comprehensive company profiles and deal details
- Express interest in funding rounds
- Track portfolio performance and analytics
- Communicate directly with startups
- Create and share investment insights
- Save and organize potential deals

#### Key Benefits
1. **Deal Discovery & Matching**
   - AI-powered personalized recommendations with match percentages
   - Filter by industry, stage, valuation, location, and investment preferences
   - Real-time notifications for new opportunities matching their criteria
   - Top Picks feature highlighting best-fit companies

2. **Comprehensive Due Diligence Tools**
   - Access to detailed company profiles (financials, team, traction, market analysis)
   - Download investment decks and due diligence packages
   - View company posts, updates, and video pitches
   - Track company progress and milestones
   - Save companies to watchlist for later review

3. **Portfolio Management & Analytics**
   - Real-time portfolio dashboard with performance metrics
   - Track IRR (Internal Rate of Return), MOIC (Multiple on Invested Capital)
   - Monitor deal pipeline (Interested, In Discussion, Due Diligence, Invested)
   - Capital allocation tracking (Invested, Committed, Available)
   - Quarterly performance charts and trends
   - Activity metrics (companies viewed, saved, engaged with)

4. **Efficient Deal Flow Management**
   - Notes and tracking system for deal evaluation
   - Tag and categorize companies for easy organization
   - Communication tools to engage with startups
   - Express interest in funding rounds with one click
   - Make offers for companies on sale

5. **Market Intelligence**
   - Market Watch section with industry trends and analysis
   - News and articles on investment insights
   - Sector performance tracking
   - Competitive landscape analysis

6. **Networking & Community**
   - Connect with other investors
   - Share investment insights and experiences
   - Follow industry influencers and thought leaders
   - Participate in investment discussions

---

### 10.2 Investees (Startups/Companies)

#### Core Capabilities
- Create and manage company profile
- Post updates, news, and content
- Manage investment opportunities and deal status
- Communicate with potential investors
- Share pitch videos and investment decks
- Track engagement and investor interest

#### Key Benefits
1. **Investor Discovery & Outreach**
   - Showcase company to qualified investors actively seeking opportunities
   - Reach investors based on their investment preferences and portfolio
   - Get discovered through personalized matching algorithm
   - Featured in Top Picks for relevant investors

2. **Professional Company Showcase**
   - Comprehensive company profile with all key information
   - Multiple tabs to organize information (Home, About, Posts, Deals, Life, People)
   - Upload pitch videos, product demos, and company updates
   - Share investment decks and due diligence materials
   - Display company culture and team through Stories and Posts

3. **Deal Management**
   - Set investment status (FUND RAISE, ON SALE, ON PURCHASE)
   - Display funding requirements, valuation, and terms
   - Show funding progress with visual indicators
   - Manage multiple funding rounds simultaneously
   - Track expressions of interest from investors

4. **Content Marketing & Brand Building**
   - Share company updates, milestones, and achievements
   - Post video content (reels, product demos, team highlights)
   - Create Stories for time-sensitive announcements
   - Build brand awareness and thought leadership
   - Engage with community through comments and interactions

5. **Investor Engagement Analytics**
   - Track profile views and engagement metrics
   - See which investors have saved your company
   - Monitor expressions of interest
   - Analyze content performance (likes, views, shares)
   - Understand investor behavior and preferences

6. **Direct Communication**
   - Messaging system to communicate with interested investors
   - Respond to investor inquiries in real-time
   - Schedule meetings and follow-ups
   - Share additional materials and updates

7. **Fundraising Efficiency**
   - Streamlined process from discovery to deal closing
   - Reduced time to find qualified investors
   - Better investor-company fit through matching
   - Transparent deal terms and progress tracking

---

### 10.3 Consultants

#### Core Capabilities
- Access to platform for client services
- View companies and investment opportunities
- Provide advisory services through platform
- Connect with investors and startups
- Share industry insights and expertise

#### Key Benefits
1. **Client Acquisition & Networking**
   - Discover startups needing advisory services
   - Connect with investors seeking consulting support
   - Build network of potential clients
   - Showcase expertise through content and insights

2. **Market Intelligence & Research**
   - Access to comprehensive company database
   - Industry trends and market analysis
   - Deal flow visibility across sectors
   - Competitive landscape insights
   - Funding trends and patterns

3. **Service Delivery Platform**
   - Direct communication with clients
   - Share documents and recommendations
   - Provide strategic advice through messaging
   - Track client engagement and needs
   - Organize client portfolios and notes

4. **Thought Leadership & Branding**
   - Share industry insights and analysis
   - Post articles and expert opinions
   - Build reputation as industry expert
   - Engage with community through content
   - Attract clients through valuable content

5. **Business Development**
   - Identify consulting opportunities
   - Track companies at different stages needing support
   - Connect with investors who may need due diligence support
   - Build relationships with both investors and startups

---

### 10.4 Influencers (Promotion & Awareness Partners)

#### Core Capabilities
- Create and share content
- Access to platform features for promotion
- Engage with community
- Track content performance
- Partner with companies for campaigns

#### Key Benefits
1. **Content Creation & Distribution**
   - Access to video reels feature for engaging content
   - Stories feature for time-sensitive promotions
   - Post images, videos, and articles
   - Share company highlights and investment opportunities
   - Create educational content about investing

2. **Audience Engagement**
   - Build and grow follower base
   - Engage with comments and messages
   - Share investment insights and market trends
   - Create viral content through reels and stories
   - Drive traffic to featured companies

3. **Partnership Opportunities**
   - Partner with startups for promotional campaigns
   - Collaborate with investors for content
   - Sponsored posts and featured content
   - Affiliate opportunities with investment deals
   - Brand ambassador programs

4. **Monetization Channels**
   - Sponsored content from companies
   - Commission from investor referrals
   - Affiliate marketing opportunities
   - Paid partnerships and collaborations
   - Content creator revenue sharing

5. **Analytics & Performance Tracking**
   - Track content performance (views, likes, shares, engagement)
   - Monitor follower growth and engagement rates
   - Analyze which content types perform best
   - Understand audience demographics and interests
   - Measure campaign effectiveness

6. **Platform Benefits**
   - Early access to new features
   - Verified influencer badge
   - Priority support
   - Featured placement in explore section
   - Access to exclusive events and opportunities

---

### 10.5 Casual Viewers (Traffic, Engagement & Monetization)

#### Core Capabilities
- Browse content without registration (limited)
- View public company profiles
- Watch videos and consume content
- Register for full access
- Engage with content through likes and shares

#### Key Benefits
1. **Free Content Access**
   - Browse company profiles and updates
   - Watch video reels and stories
   - Read industry news and articles
   - Explore investment opportunities
   - Learn about startups and innovation

2. **Educational Value**
   - Learn about investing and venture capital
   - Understand startup ecosystem
   - Discover innovative companies and technologies
   - Access educational content and insights
   - Stay updated with industry trends

3. **Entertainment & Discovery**
   - Engaging video content (reels)
   - Interesting startup stories
   - Behind-the-scenes company content
   - Market trends and analysis
   - Success stories and case studies

4. **Conversion Path to Active Users**
   - Easy registration process
   - Incentives to create account (save companies, follow updates)
   - Upgrade to investor or company account
   - Access to exclusive content after registration
   - Personalized recommendations after signup

5. **Platform Value Contribution**
   - Generate traffic and engagement metrics
   - Increase content views and shares
   - Create network effects (more users = more value)
   - Social proof through engagement
   - Word-of-mouth marketing

6. **Monetization Opportunities for Platform**
   - Ad revenue from casual viewers
   - Data insights from browsing behavior
   - Conversion to paid users (investors/companies)
   - Sponsored content views
   - Premium feature subscriptions

---

### 10.6 Admin

#### Core Capabilities
- Manage users and companies
- Moderate content
- Configure system settings
- View platform analytics
- Manage deals and transactions
- Oversee user roles and permissions

---

## 11. Platform Value Proposition by User Type

### 11.1 Value Matrix

| User Type | Primary Value | Secondary Value | Monetization Model |
|-----------|--------------|-----------------|-------------------|
| **Investors** | Deal discovery & portfolio management | Market intelligence, networking | Subscription fees, transaction fees |
| **Investees** | Investor access & fundraising | Brand building, market visibility | Listing fees, success fees |
| **Consultants** | Client acquisition & market insights | Thought leadership, networking | Commission, referral fees |
| **Influencers** | Content platform & audience growth | Partnerships, monetization | Sponsored content, affiliate revenue |
| **Casual Viewers** | Free content & education | Entertainment, discovery | Ad revenue, conversion to paid users |

### 11.2 Feature Access Matrix

| Feature | Investors | Investees | Consultants | Influencers | Casual Viewers |
|---------|-----------|-----------|-------------|-------------|----------------|
| **Browse Companies** | ✅ Full | ✅ Full | ✅ Full | ✅ Full | ⚠️ Limited |
| **View Company Profiles** | ✅ Full | ✅ Full | ✅ Full | ✅ Full | ⚠️ Public Only |
| **Express Investment Interest** | ✅ Yes | ❌ No | ❌ No | ❌ No | ❌ No |
| **Create Company Profile** | ❌ No | ✅ Yes | ❌ No | ❌ No | ❌ No |
| **Post Content** | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ❌ No |
| **Create Stories** | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ❌ No |
| **Portfolio Analytics** | ✅ Full | ⚠️ Own Only | ⚠️ Client Only | ❌ No | ❌ No |
| **Deal Management** | ✅ View | ✅ Manage | ⚠️ View Only | ❌ No | ❌ No |
| **Messaging** | ✅ Full | ✅ Full | ✅ Full | ✅ Full | ❌ No |
| **Save Companies** | ✅ Yes | ❌ No | ✅ Yes | ✅ Yes | ❌ No |
| **Notes & Tracking** | ✅ Yes | ⚠️ Own Only | ✅ Yes | ❌ No | ❌ No |
| **Search & Filter** | ✅ Full | ✅ Full | ✅ Full | ✅ Full | ⚠️ Basic |
| **Video Reels** | ✅ View/Create | ✅ View/Create | ✅ View/Create | ✅ View/Create | ✅ View Only |
| **Market Watch** | ✅ Full | ✅ Full | ✅ Full | ✅ Full | ✅ Full |
| **Top Picks** | ✅ Personalized | ⚠️ View Only | ⚠️ View Only | ⚠️ View Only | ⚠️ View Only |
| **Analytics Dashboard** | ✅ Full | ⚠️ Engagement Only | ⚠️ Limited | ⚠️ Content Only | ❌ No |
| **Download Investment Decks** | ✅ Yes | ❌ No | ⚠️ With Permission | ❌ No | ❌ No |
| **Upload Investment Decks** | ❌ No | ✅ Yes | ⚠️ For Clients | ❌ No | ❌ No |
| **Follow Users/Companies** | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ❌ No |
| **Consultant Profile** | ❌ No | ❌ No | ✅ Yes | ❌ No | ❌ No |
| **Client Management** | ❌ No | ❌ No | ✅ Yes | ❌ No | ❌ No |
| **Service Discovery** | ❌ No | ❌ No | ✅ Yes | ❌ No | ❌ No |
| **Publish Articles/Insights** | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ❌ No |
| **Verified Badge** | ⚠️ Investor Badge | ⚠️ Company Badge | ✅ Consultant Badge | ✅ Influencer Badge | ❌ No |

**Legend:**
- ✅ Full Access
- ⚠️ Limited Access
- ❌ No Access

### 11.3 Cross-User Benefits

#### Network Effects
- **More Investors** → More value for Investees (more funding opportunities)
- **More Investees** → More value for Investors (more deal flow)
- **More Casual Viewers** → More engagement and social proof
- **More Influencers** → More awareness and traffic
- **More Consultants** → Better ecosystem support

#### Data & Intelligence
- All users benefit from aggregated market data
- Industry trends visible to all user types
- Performance metrics help all stakeholders make better decisions

#### Community Building
- All users contribute to vibrant ecosystem
- Cross-user interactions create value
- Shared knowledge benefits entire community

### 11.4 User Journey Examples

#### Investor Journey
1. **Discovery**: Browse Top Picks → View matched companies → Save interesting deals
2. **Evaluation**: Review company profile → Download deck → Check analytics
3. **Engagement**: Express interest → Message company → Schedule meeting
4. **Investment**: Track in portfolio → Monitor performance → Manage exits

#### Investee Journey
1. **Setup**: Create company profile → Upload pitch videos → Set deal status
2. **Promotion**: Post updates → Create stories → Share content
3. **Engagement**: Respond to investor interest → Share materials → Communicate
4. **Fundraising**: Track expressions of interest → Manage deal pipeline → Close round

#### Influencer Journey
1. **Content Creation**: Create reels → Post stories → Share insights
2. **Engagement**: Build audience → Interact with community → Partner with companies
3. **Monetization**: Sponsored content → Affiliate deals → Brand partnerships
4. **Growth**: Track analytics → Optimize content → Expand reach

#### Consultant Journey
1. **Profile Setup**: Create consultant profile → Add expertise areas → Get verified badge
2. **Content & Thought Leadership**: Publish articles → Share insights → Build reputation
3. **Client Discovery**: Identify companies needing services → Connect with potential clients → Track opportunities
4. **Service Delivery**: Manage client relationships → Share recommendations → Provide advisory through platform
5. **Growth**: Track profile views → Analyze content performance → Expand client base

---

## 12. Success Metrics

- User engagement (daily active users, time spent)
- Deal discovery rate (companies viewed per user)
- Investment interest rate (expressions of interest per deal)
- Content consumption (videos watched, posts viewed)
- User retention rate
- Portfolio growth rate
- Message response rate

---

*This document should be updated as new features are added or requirements change.*

