// Home feed videos dataset (home1.mp4 through home10.mp4)
// Video files live in `public/videos/` and are referenced by absolute paths (e.g. "/videos/home1.mp4").

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
//
const raw = [
   // Home 6
   {
    industry: 'Kirana / Retail Store',
    company: 'LocalKart Solutions',
    caption: `Mukesh Ambani's Strategy to Crush Bisleri!

#mukeshambani`,
    video: '/videos/home6.mp4',
    thumbnail: '/images/stock.png',
  },
  // Home 1
  {
    industry: 'Defence / Security',
    company: 'AegisCore Systems',
    caption: `How Phool built a Luxury Brand from Trash 💐🌷

#phool #recycle #recycling #businesscasestudy #investment #businesstips #stockmarketinvesting #investing #marketing #phoolbrand #circulareconomy♻️ #circulareconomy`,
    video: '/videos/home1.mp4',
    thumbnail: '/images/analytics.png',
  },
  // Home 2
  {
    industry: 'Logistics / Delivery',
    company: 'FlowRoute Logistics',
    caption: `India's traditional drink is now becoming a pan-India franchise opportunity. 🥤🇮🇳

Funtoos Goli Soda is reviving India's forgotten drink using a smart factory franchise model — helping partners scale without compromising quality.

In this short, you'll see:
- How Funtoos cracked beverage distribution
- Why their factory franchise model works
-How they're expanding from East India to North India`,
    video: '/videos/home2.mp4',
    thumbnail: '/images/techflow.png',
  },
  // Home 3
  {
    industry: 'Electronics / Manufacturing',
    company: 'Voltaris Technologies',
    caption:
      'Voltaris Technologies powers innovation through intelligent electronics and precision manufacturing. We focus on building reliable, future-ready components that fuel industries and everyday life. With a commitment to quality, efficiency, and smart design, we transform complex engineering into solutions that drive progress and keep technology moving forward.',
    video: '/videos/home3.mp4',
    thumbnail: '/images/datavault.png',
  },
  // Home 4
  {
    industry: 'Fintech',
    company: 'Finvexa Labs',
    caption:
      'Finvexa Labs is shaping the future of digital finance through secure, scalable, and user-centric solutions. From seamless transactions to data-driven financial intelligence, we empower businesses and individuals to make smarter financial decisions. Our vision is to simplify finance while building trust, transparency, and technology that grows with the digital economy.',
    video: '/videos/home4.mp4',
    thumbnail: '/images/fintech.png',
  },
  // Home 5
  {
    industry: 'Agriculture / Kesar Farming',
    company: 'AgriSaffron Collective',
    caption:
      'AgriSaffron Collective blends tradition with innovation to elevate sustainable farming practices. Supporting farmers with modern techniques, supply chain transparency, and market access, we aim to preserve quality while increasing value. Our work celebrates agriculture not just as an industry, but as a legacy powered by care, science, and community growth.',
    video: '/videos/home5.mp4',
    thumbnail: '/images/agriculture.jpeg',
  },
 
  // Home 7
  {
    industry: 'Nursery / Plants',
    company: 'GreenSprout Nurseries',
    caption: 'send this to someone who thinks boring products can\'t build empires ✨🎀🔋',
    video: '/videos/home7.mp4',
    thumbnail: '/images/greentech.png',
  },
  // Home 8
  {
    industry: 'Cement / Infrastructure',
    company: 'Buildora Materials',
    caption: `How a Son Built a ₹15,000 Crore Empire to Fulfill His Father's Dream

#reelsindia #explore #fyp #reels #business #pencil #doms #stationary #india #reelitfeelit #education #viral #motivation #viralreels #businessmindset #successmindset #story #success #startup #startupindia`,
    video: '/videos/home8.mp4',
    thumbnail: '/images/stock.png',
  },
  // Home 9
  {
    industry: 'Auto Shop / Automobile Services',
    company: 'TorqueLine AutoWorks',
    caption: `A torn milk packet sparked an idea.

After Karnataka's plastic ban, Mohammed Sadiq started Biogreen Bags fully compostable bags that decompose in 180 days.

Today, brands like D-Mart and Myntra use them.

That's how problems become businesses.`,
    video: '/videos/home9.mp4',
    thumbnail: '/images/stock.png',
  },
  // Home 10
  {
    industry: 'Biscuit / Food Manufacturing',
    company: 'BakeNest Foods',
    caption: `To stop unsafe street food from making people sick, two 16-year-old boys from Bihar Jayant Kumar and his friend Kailash started Shuddh Swad in 2022 to sell hygienic, safely packaged thekua online.
Within a year, they crossed ₹1 crore in revenue`,
    video: '/videos/home10.mp4',
    thumbnail: '/images/stock.png',
  },
];

export const homeVideos = raw.map((item, idx) => ({
  id: idx,
  ...item,
  author: item.company,
  authorAvatar: toInitials(item.company),
  metrics: mkMetrics(idx),
}));

