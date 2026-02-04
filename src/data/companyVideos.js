// Shared video dataset used by Home feed, Explore, and Reels.
// Video files live in `public/videos/` and are referenced by absolute paths (e.g. "/videos/defence.mp4").

const toInitials = (name = '') =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() || '')
    .join('');

const mkMetrics = (id) => ({
  likes: 900 + id * 73,
  comments: 45 + id * 7,
  shares: 12 + id * 3,
  views: 4800 + id * 615, // number; format per UI
});

const raw = [
  // Defence / Security
  {
    industry: 'Defence / Security',
    company: 'AegisCore Systems',
    caption:
      'At AegisCore Systems, we build technology that strengthens national resilience and operational readiness. From advanced surveillance to intelligent defense solutions, our focus is on precision, reliability, and innovation. Every system is designed with responsibility and excellence at its core—because security isn’t just protection, it’s trust built through technology that performs when it matters most.',
    video: '/videos/defence.mp4',
    thumbnail: '/images/analytics.png',
  },
  // Logistics / Delivery
  {
    industry: 'Logistics / Delivery',
    company: 'FlowRoute Logistics',
    caption:
      'FlowRoute Logistics is redefining how goods move across cities and borders. With smart routing, real-time tracking, and reliable last-mile delivery, we help businesses deliver faster and smarter. Our mission is simple—connect people, products, and possibilities through logistics that are efficient, scalable, and built for the pace of modern commerce.',
    video: '/videos/flowers-transportations-logistics.mp4',
    thumbnail: '/images/techflow.png',
  },
  // Electronics / Manufacturing
  {
    industry: 'Electronics / Manufacturing',
    company: 'Voltaris Technologies',
    caption:
      'Voltaris Technologies powers innovation through intelligent electronics and precision manufacturing. We focus on building reliable, future-ready components that fuel industries and everyday life. With a commitment to quality, efficiency, and smart design, we transform complex engineering into solutions that drive progress and keep technology moving forward.',
    video: '/videos/electronics.mp4',
    thumbnail: '/images/datavault.png',
  },
  // Fintech
  {
    industry: 'Fintech',
    company: 'Finvexa Labs',
    caption: `The Podcast with @yashorajtyagi is out now on our YouTube channel. This one is packed with all the insights of the fintech industry. Check this podcast -> Link is in the bio.
.
.
.
.
Podcast fintech cashe 13karat marketing starting startups startup India nifty investing`,
    video: '/videos/fintech.mp4',
    thumbnail: '/images/fintech.png',
  },
  // Agriculture / Kesar Farming
  {
    industry: 'Agriculture / Kesar Farming',
    company: 'AgriSaffron Collective',
    caption: `Retirement ke baad ₹3.5 lakh/month? 🤯

This 65-year-old engineer figured out how to grow Kashmiri saffron at home — inside a small room.
No soil. Fully controlled setup. Predictable yield.

India consumes far more saffron than Kashmir produces, and climate change is shrinking supply.
He spotted the gap, used indoor controlled farming, and turned the world's most expensive spice into a serious income stream.

Today, he earns from saffron cultivation + training + YouTube — all from home.

Real Dhande Ki Baat:
Opportunities don't retire. People do.

[Kashmiri saffron farming, indoor farming India, saffron business model, retirement income ideas, high value crops]

#DhandeKiBaat #SaffronFarming #IndoorFarming #BusinessIdeas #retirementplanning`,
    video: '/videos/kesar-farmin-in-india.mp4',
    thumbnail: '/images/agriculture.jpeg',
  },
  // Kirana / Retail Store
  {
    industry: 'Kirana / Retail Store',
    company: 'LocalKart Solutions',
    caption:
      'LocalKart Solutions empowers neighborhood retail by bringing digital efficiency to traditional stores. From inventory management to customer engagement, we help kirana businesses grow without losing their personal touch. Our goal is to strengthen local commerce through simple, scalable tools that keep small businesses competitive in a fast-changing retail world.',
    video: '/videos/kirana-store.mp4',
    thumbnail: '/images/stock.png',
  },
  // Nursery / Plants
  {
    industry: 'Nursery / Plants',
    company: 'GreenSprout Nurseries',
    caption:
      'GreenSprout Nurseries is dedicated to nurturing greener spaces and healthier lifestyles. From seedlings to mature plants, we promote sustainability through responsible cultivation and eco-friendly practices. Every plant we grow reflects our commitment to nature, patience, and growth—helping communities reconnect with the environment, one leaf at a time.',
    video: '/videos/nursery.mp4',
    thumbnail: '/images/greentech.png',
  },

  // Cement / Infrastructure
  {
    industry: 'Cement / Infrastructure',
    company: 'Buildora Materials',
    caption:
      'At Buildora Materials, we lay the foundation for progress. From infrastructure to urban development, our solutions are built for strength, durability, and scale. Every structure tells a story of precision, trust, and long-term vision. We believe strong nations are built on stronger materials—and we’re proud to support growth that lasts for generations.',
    video: '/videos/adani-cement.mp4',
    thumbnail: '/images/stock.png',
  },
  // AI + Solar Energy
  {
    industry: 'AI + Solar Energy',
    company: 'HelioMind AI',
    caption:
      'HelioMind AI is transforming the solar energy landscape with intelligent, data-driven innovation. By combining artificial intelligence with renewable infrastructure, we unlock higher efficiency, smarter grids, and sustainable power at scale. Our mission is simple—make clean energy smarter, accessible, and impactful for a future powered by intelligence and sustainability.',
    video: '/videos/AI Solar Disruption.mp4',
    thumbnail: '/images/solar.png',
  },
  // AI Solar – Story / Vision
  {
    industry: 'AI Solar – Story / Vision',
    company: 'Sunlytix Labs',
    caption:
      'Sunlytix Labs is reimagining how the world generates and manages solar energy. Through AI-driven insights, predictive analytics, and smart automation, we help solar systems perform better every day. Innovation, sustainability, and responsibility guide our journey as we build technology that accelerates the global shift toward clean energy.',
    video: '/videos/ai-solar-story.mp4',
    thumbnail: '/images/greenenergy.png',
  },
  // Auto Shop / Automobile Services
  {
    industry: 'Auto Shop / Automobile Services',
    company: 'TorqueLine AutoWorks',
    caption:
      'TorqueLine AutoWorks delivers precision, performance, and reliability under one roof. From diagnostics to complete servicing, we blend skilled craftsmanship with modern automotive technology. Our focus is on safety, efficiency, and trust—ensuring every vehicle leaves our shop ready for the road ahead with confidence and care.',
    video: '/videos/autoshop.mp4',
    thumbnail: '/images/stock.png',
  },
  // Biscuit / Food Manufacturing
  {
    industry: 'Biscuit / Food Manufacturing',
    company: 'BakeNest Foods',
    caption: `A ₹300 biscuit just became ₹10 in India 🤯

Lotus Biscoff has completely changed its India strategy — and the market will never be the same.
Here's the real Dhande Ki Baat ↓

[Lotus Biscoff India, Mondelez partnership, Cadbury India, premium to mass strategy, FMCG case study, Indian consumer market, pricing strategy India, manufacturing in India]

#DhandeKiBaat #LotusBiscoff #BrandStrategy #FMCGIndia #IndiaBusiness #MondelezIndia #MarketingCaseStudy #ConsumerBehaviour #IndianMarket #casestudy #businesscasestudy #business`,
    video: '/videos/biscuit-food.mp4',
    thumbnail: '/images/stock.png',
  },
  // Chai Analysis / Business Insight
  {
    industry: 'Chai Analysis / Business Insight',
    company: 'ChaiMetrics',
    caption: `Every sip of chai powers a trillion-rupee industry and supports millions. On International Tea Day,
here’s how your morning cup brews economic growth — and investment opportunities.

Follow ChaiMetrics for more finance stories steeped in everyday life.`,
    video: '/videos/chai-analyisis.mp4',
    thumbnail: '/images/analytics.png',
  },
  // Chai Café
  {
    industry: 'Chai Café',
    company: 'BrewBharat Café',
    caption: `Sometimes the biggest ideas start with the smallest needs. ✨

📍Melbourne, Australia

(Chaiwala, Business, Dropout Chaiwala, Chai cafe, Melbourne, Chai story, Australia)

#dropoutchaiwala #chaicafe #australiachaicafe #chaistories #chailover #business`,
    video: '/videos/chai-cafe.mp4',
    thumbnail: '/images/stock.png',
  },
  // Chai + Food
  {
    industry: 'Chai + Food',
    company: 'Cup & Crumb Co.',
    caption: `Drop-Out Chaiwala 🔥🔥
Follow @spiregrowth For More Interesting Stories.
@spiregrowth
@spiregrowth
.
.
.
.
.
.

#dropoutchaiwala #dropoutchaiwalastartup #dropoutchaiwalaaustralia
#hindibusiness #spiregrowth #business #chaishop #mbachaiwala #startup #startupstory #chaiwala
@dropout_chai_wala @sanjithkondahouse
@spiregrowth`,
    video: '/videos/chai-food.mp4',
    thumbnail: '/images/stock.png',
  },
  // Child Care
  {
    industry: 'Child Care',
    company: 'LittleSteps Care',
    caption:
      'LittleSteps Care is dedicated to creating safe, nurturing environments where children can grow with confidence. Through attentive care, structured learning, and emotional support, we help families build strong foundations for their children’s future. Every child deserves care rooted in patience, responsibility, and genuine compassion.',
    video: '/videos/child-care.mp4',
    thumbnail: '/images/stock.png',
  },
  // Child Care – Early Development
  {
    industry: 'Child Care – Early Development',
    company: 'BrightRoots Early Care',
    caption:
      'BrightRoots Early Care focuses on holistic child development during the most important years of growth. By combining safety, learning, and emotional well-being, we support children in exploring, learning, and thriving. Our approach values trust, care, and consistency—helping young minds grow strong from the very beginning.',
    video: '/videos/child-care2.mp4',
    thumbnail: '/images/stock.png',
  },

  // Solar Panels / Renewable Energy
  {
    industry: 'Solar Panels / Renewable Energy',
    company: 'Solarion GridWorks',
    caption: `Future of Solar Energy in India🔋 | भारत में सोलर एनर्जी का भविष्य

📌Keywords
[Goldi Solar ,Solar Energy, Solar Manufacturing India, Renewable Energy Growth, Green Power, Solar Panels, Clean Energy India, Solar Industry, Energy Independence]

#goldisolar#SolarEnergy #IndiaSolar #RenewableEnergy #SolarPower #GreenEnergy #MakeInIndia #SolarRevolution #CleanEnergy`,
    video: '/videos/solar-panel.mp4',
    thumbnail: '/images/solar.png',
  },
  // Vehicle Mechanic / Auto Services
  {
    industry: 'Vehicle Mechanic / Auto Services',
    company: 'DriveCraft AutoCare',
    caption:
      'DriveCraft AutoCare stands for precision, trust, and performance. From routine maintenance to complex repairs, our skilled technicians ensure every vehicle receives expert attention. We blend hands-on craftsmanship with modern diagnostics to keep you moving safely and confidently. Because reliable service is the backbone of every smooth journey.',
    video: '/videos/vehicle-machanic.mp4',
    thumbnail: '/images/stock.png',
  },
  // Vending + Xerox / Office Services
  {
    industry: 'Vending + Xerox / Office Services',
    company: 'PrintEase Solutions',
    caption:
      'PrintEase Solutions simplifies everyday office and public-space needs through smart vending and printing services. Designed for speed, reliability, and convenience, our systems support businesses, institutions, and communities. We focus on efficiency that saves time while delivering consistent quality—making essential services accessible whenever and wherever they’re needed.',
    video: '/videos/vending-xerox.mp4',
    thumbnail: '/images/analytics.png',
  },
  // Vending / Automated Services
  {
    industry: 'Vending / Automated Services',
    company: 'AutoServe Systems',
    caption:
      'AutoServe Systems is redefining self-service through intelligent vending and automated solutions. Built for high-traffic environments, our technology delivers convenience, accuracy, and uptime. We help organizations streamline operations while improving user experience—because smart automation is the future of efficient service delivery.',
    video: '/videos/vending-xerox2.mp4',
    thumbnail: '/images/analytics.png',
  },
  // Business / Process Workflow
  {
    industry: 'Business / Process Workflow',
    company: 'CoreFlow Operations',
    caption:
      'CoreFlow Operations helps businesses optimize processes and scale with clarity. By focusing on efficiency, coordination, and execution, we turn everyday workflows into growth enablers. Our approach combines technology with operational insight—supporting teams to work smarter, faster, and with measurable impact across their operations.',
    video: '/videos/post-from-startup.mp4',
    thumbnail: '/images/analytics.png',
  },
  // Business / Industrial Operations
  {
    industry: 'Business / Industrial Operations',
    company: 'StrataEdge Industries',
    caption:
      'StrataEdge Industries delivers solutions built for modern industrial demands. With a focus on quality, scalability, and performance, we support businesses across production and operations. Every system we develop is designed to meet real-world challenges—ensuring stability today while enabling growth for tomorrow.',
    video: '/videos/video4.mp4',
    thumbnail: '/images/stock.png',
  },
  // Technology / Innovation
  {
    industry: 'Technology / Innovation',
    company: 'NexScale Technologies',
    caption:
      'NexScale Technologies empowers businesses through scalable digital innovation. From automation to data-driven systems, we build tools that adapt to change and accelerate growth. Our vision is to help organizations stay ahead by combining smart technology with practical execution in a fast-evolving digital landscape.',
    video: '/videos/video1.mp4',
    thumbnail: '/images/techflow.png',
  },
  // Fintech
  {
    industry: 'Fintech',
    company: 'Paynexa Labs',
    caption:
      'Paynexa Labs is building secure, intuitive financial technology for a digital-first world. We focus on simplifying transactions, enhancing trust, and enabling smarter financial decisions. Through innovation and compliance-driven design, we help businesses and users move money with confidence, transparency, and speed.',
    video: '/videos/video5-fintech.mp4',
    thumbnail: '/images/fintech.png',
  },

  // EdTech / Learning
  {
    industry: 'EdTech / Learning',
    company: 'EduNova Labs',
    caption:
      'EduNova Labs is reimagining learning through technology-driven education. By blending interactive content, practical skills, and accessible platforms, we help learners grow with confidence in a digital-first world. Our focus is on building knowledge that translates into real outcomes—empowering students, educators, and institutions to shape a smarter future together.',
    video: '/videos/video6-edtech.mp4',
    thumbnail: '/images/techflow.png',
  },
  // Indian Sweet Shop / Food Business
  {
    industry: 'Indian Sweet Shop / Food Business',
    company: 'MithraDelights',
    caption:
      'MithraDelights celebrates the richness of Indian sweets crafted with tradition and care. From time-tested recipes to consistent quality, we bring flavors that connect generations. Every sweet reflects authenticity, hygiene, and love for the craft—turning everyday moments and celebrations into memories filled with taste and trust.',
    video: '/videos/video7-indianSweetShop.mp4',
    thumbnail: '/images/stock.png',
  },
  // AgriTech
  {
    industry: 'AgriTech',
    company: 'AgroPulse Innovations',
    caption:
      'AgroPulse Innovations supports farmers through smart agricultural technology and data-driven insights. By improving productivity, supply chains, and sustainability, we help agriculture evolve without losing its roots. Our mission is to empower rural growth by combining innovation with on-ground realities—creating stronger farms and resilient food systems.',
    video: '/videos/video8-agritech.mp4',
    thumbnail: '/images/agriculture.jpeg',
  },
  // ClimateTech / Sustainability
  {
    industry: 'ClimateTech / Sustainability',
    company: 'EcoVanta Systems',
    caption:
      'EcoVanta Systems is dedicated to building climate-positive solutions for a sustainable future. Through clean technology, impact-driven design, and responsible innovation, we help organizations reduce environmental footprints. Our work focuses on long-term resilience—because addressing climate challenges today defines the world we pass on tomorrow.',
    video: '/videos/video9-climatetech.mp4',
    thumbnail: '/images/climate.png',
  },
];

// Only keep entries whose videos actually exist in /public/videos
// (prevents broken videos in Reels, Explore, Feed, Stories)
// This list mirrors the actual files present in `public/videos` (excluding home reels).
const existingVideoPaths = new Set([
  '/videos/adani-cement.mp4',
  '/videos/autoshop.mp4',
  '/videos/biscuit-food.mp4',
  '/videos/chai-analyisis.mp4',
  '/videos/chai-cafe.mp4',
  '/videos/chai-food.mp4',
  '/videos/child-care.mp4',
  '/videos/child-care2.mp4',
  '/videos/defence.mp4',
  '/videos/delivering-flowers.mp4', // used by stories, not dataset entries
  '/videos/defence2.mp4', // used by stories, not dataset entries
  '/videos/defence3.mp4', // used by stories, not dataset entries
  '/videos/electronics.mp4',
  '/videos/fintech.mp4',
  '/videos/flowers-transportations-logistics.mp4',
  '/videos/kesar-farmin-in-india.mp4',
  '/videos/kirana-store.mp4',
  '/videos/nursery.mp4',
  '/videos/solar-panel.mp4',
  '/videos/vehicle-machanic.mp4',
  '/videos/vending-xerox.mp4',
  '/videos/vending-xerox2.mp4',
]);

const filteredRaw = raw.filter((item) => existingVideoPaths.has(item.video));

export const companyVideos = filteredRaw.map((item, idx) => ({
  id: idx,
  ...item,
  author: item.company,
  authorAvatar: toInitials(item.company),
  metrics: mkMetrics(idx),
}));


