// Explore page videos dataset
// All available videos displayed in a grid layout on the Explore page
// Edit the 'raw' array below to change videos, captions, company names, etc.

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
  views: 4800 + id * 615,
});

// Edit this array to change videos, captions, company names, etc.
const raw = [
  {
    industry: 'Defence / Security',
    company: 'AegisCore Systems',
    caption: 'At AegisCore Systems, we build technology that strengthens national resilience and operational readiness. From advanced surveillance to intelligent defense solutions, our focus is on precision, reliability, and innovation. Every system is designed with responsibility and excellence at its core—because security isn\'t just protection, it\'s trust built through technology that performs when it matters most.',
    video: '/videos/defence.mp4',
    thumbnail: '/images/analytics.png',
  },
  {
    industry: 'Logistics / Delivery',
    company: 'FlowRoute Logistics',
    caption: 'FlowRoute Logistics is redefining how goods move across cities and borders. With smart routing, real-time tracking, and reliable last-mile delivery, we help businesses deliver faster and smarter. Our mission is simple—connect people, products, and possibilities through logistics that are efficient, scalable, and built for the pace of modern commerce.',
    video: '/videos/flowers-transportations-logistics.mp4',
    thumbnail: '/images/techflow.png',
  },
  {
    industry: 'Electronics / Manufacturing',
    company: 'Voltaris Technologies',
    caption: 'Voltaris Technologies powers innovation through intelligent electronics and precision manufacturing. We focus on building reliable, future-ready components that fuel industries and everyday life. With a commitment to quality, efficiency, and smart design, we transform complex engineering into solutions that drive progress and keep technology moving forward.',
    video: '/videos/electronics.mp4',
    thumbnail: '/images/datavault.png',
  },
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
  {
    industry: 'Kirana / Retail Store',
    company: 'LocalKart Solutions',
    caption: 'LocalKart Solutions empowers neighborhood retail by bringing digital efficiency to traditional stores. From inventory management to customer engagement, we help kirana businesses grow without losing their personal touch. Our goal is to strengthen local commerce through simple, scalable tools that keep small businesses competitive in a fast-changing retail world.',
    video: '/videos/kirana-store.mp4',
    thumbnail: '/images/stock.png',
  },
  {
    industry: 'Nursery / Plants',
    company: 'GreenSprout Nurseries',
    caption: 'GreenSprout Nurseries is dedicated to nurturing greener spaces and healthier lifestyles. From seedlings to mature plants, we promote sustainability through responsible cultivation and eco-friendly practices. Every plant we grow reflects our commitment to nature, patience, and growth—helping communities reconnect with the environment, one leaf at a time.',
    video: '/videos/nursery.mp4',
    thumbnail: '/images/greentech.png',
  },
  {
    industry: 'Cement / Infrastructure',
    company: 'Buildora Materials',
    caption: 'At Buildora Materials, we lay the foundation for progress. From infrastructure to urban development, our solutions are built for strength, durability, and scale. Every structure tells a story of precision, trust, and long-term vision. We believe strong nations are built on stronger materials—and we\'re proud to support growth that lasts for generations.',
    video: '/videos/adani-cement.mp4',
    thumbnail: '/images/stock.png',
  },
  {
    industry: 'Auto Shop / Automobile Services',
    company: 'TorqueLine AutoWorks',
    caption: 'TorqueLine AutoWorks delivers precision, performance, and reliability under one roof. From diagnostics to complete servicing, we blend skilled craftsmanship with modern automotive technology. Our focus is on safety, efficiency, and trust—ensuring every vehicle leaves our shop ready for the road ahead with confidence and care.',
    video: '/videos/autoshop.mp4',
    thumbnail: '/images/stock.png',
  },
  {
    industry: 'Biscuit / Food Manufacturing',
    company: 'BakeNest Foods',
    caption: 'BakeNest Foods brings together taste, consistency, and quality in every bite. Crafted with care and powered by efficient production, our products are designed to delight customers while meeting modern food standards. We believe great food is built on trust, tradition, and innovation—served fresh from our ovens to everyday moments.',
    video: '/videos/biscuit-food.mp4',
    thumbnail: '/images/stock.png',
  },
  {
    industry: 'Chai Analysis / Business Insight',
    company: 'ChaiMetrics',
    caption: `Every sip of chai powers a trillion-rupee industry and supports millions. On International Tea Day,
here's how your morning cup brews economic growth — and investment opportunities.

Follow Pickright for more finance stories steeped in everyday life.`,
    video: '/videos/chai-analyisis.mp4',
    thumbnail: '/images/analytics.png',
  },
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
  {
    industry: 'Chai + Food',
    company: 'Cup & Crumb Co.',
    caption: 'Cup & Crumb Co. pairs comforting chai with thoughtfully crafted food. Built for everyday indulgence, we focus on quality ingredients, efficient service, and flavors that connect people. Our goal is simple—turn small breaks into memorable moments through food that feels homely, reliable, and deeply satisfying.',
    video: '/videos/chai-food.mp4',
    thumbnail: '/images/stock.png',
  },
  {
    industry: 'Child Care',
    company: 'LittleSteps Care',
    caption: 'LittleSteps Care is dedicated to creating safe, nurturing environments where children can grow with confidence. Through attentive care, structured learning, and emotional support, we help families build strong foundations for their children\'s future. Every child deserves care rooted in patience, responsibility, and genuine compassion.',
    video: '/videos/child-care.mp4',
    thumbnail: '/images/stock.png',
  },
  {
    industry: 'Child Care – Early Development',
    company: 'BrightRoots Early Care',
    caption: 'BrightRoots Early Care focuses on holistic child development during the most important years of growth. By combining safety, learning, and emotional well-being, we support children in exploring, learning, and thriving. Our approach values trust, care, and consistency—helping young minds grow strong from the very beginning.',
    video: '/videos/child-care2.mp4',
    thumbnail: '/images/stock.png',
  },
  {
    industry: 'Solar Panels / Renewable Energy',
    company: 'Solarion GridWorks',
    caption: 'At Solarion GridWorks, we design energy solutions that power a sustainable future. By combining efficient solar infrastructure with smart deployment, we help communities and businesses reduce costs and carbon impact. Our mission is to turn sunlight into reliable progress—building cleaner systems today for a stronger, energy-independent tomorrow.',
    video: '/videos/solar-panel.mp4',
    thumbnail: '/images/solar.png',
  },
  {
    industry: 'Vehicle Mechanic / Auto Services',
    company: 'DriveCraft AutoCare',
    caption: 'DriveCraft AutoCare stands for precision, trust, and performance. From routine maintenance to complex repairs, our skilled technicians ensure every vehicle receives expert attention. We blend hands-on craftsmanship with modern diagnostics to keep you moving safely and confidently. Because reliable service is the backbone of every smooth journey.',
    video: '/videos/vehicle-machanic.mp4',
    thumbnail: '/images/stock.png',
  },
  {
    industry: 'Vending + Xerox / Office Services',
    company: 'PrintEase Solutions',
    caption: 'PrintEase Solutions simplifies everyday office and public-space needs through smart vending and printing services. Designed for speed, reliability, and convenience, our systems support businesses, institutions, and communities. We focus on efficiency that saves time while delivering consistent quality—making essential services accessible whenever and wherever they\'re needed.',
    video: '/videos/vending-xerox.mp4',
    thumbnail: '/images/analytics.png',
  },
  {
    industry: 'Vending / Automated Services',
    company: 'AutoServe Systems',
    caption: 'AutoServe Systems is redefining self-service through intelligent vending and automated solutions. Built for high-traffic environments, our technology delivers convenience, accuracy, and uptime. We help organizations streamline operations while improving user experience—because smart automation is the future of efficient service delivery.',
    video: '/videos/vending-xerox2.mp4',
    thumbnail: '/images/analytics.png',
  },
];

export const exploreVideos = raw.map((item, idx) => ({
  id: idx,
  ...item,
  author: item.company,
  authorAvatar: toInitials(item.company),
  metrics: mkMetrics(idx),
}));
