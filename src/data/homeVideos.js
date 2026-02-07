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
 
   
  {
    industry: 'Electronics / Manufacturing',
    company: 'Voltaris Technologies',
    caption:
      'Voltaris Technologies powers innovation through intelligent electronics and precision manufacturing. We focus on building reliable, future-ready components that fuel industries and everyday life. With a commitment to quality, efficiency, and smart design, we transform complex engineering into solutions that drive progress and keep technology moving forward.',
    video: '/videos/home3.mp4',
    thumbnail: '/images/datavault.png',
    //==========
  },
 
  {
    industry: 'Auto Shop / Automobile Services',
    company: 'TorqueLine AutoWorks',
    caption: `A torn milk packet sparked an idea.

After Karnataka's plastic ban, Mohammed Sadiq started Biogreen Bags fully compostable bags that decompose in 180 days.

Today, brands like D-Mart and Myntra use them.

That's how problems become businesses.`,
    video: '/videos/home9.mp4',
    thumbnail: '/images/stock.png',
    ///==========
  },

  {
    industry: 'Technology / Innovation',
    company: 'LocalKart Solutions',
    caption: 'Leading the way in technological advancement and digital transformation.',
    video: '/videos/sidhe4.mp4',
    thumbnail: '/images/stock.png',
    //==========
  },
];

export const homeVideos = raw.map((item, idx) => ({
  id: idx,
  ...item,
  author: item.company,
  authorAvatar: toInitials(item.company),
  metrics: mkMetrics(idx),
}));

