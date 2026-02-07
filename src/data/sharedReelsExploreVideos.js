// Shared video dataset for Reels and Explore pages
// Video files live in `public/reel-exploreVideo/` and are referenced by absolute paths (e.g. "/reel-exploreVideo/chaayos.mp4").

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

// Edit this array to change which videos appear in Reels and Explore
const raw = [
  {
    industry: 'Agriculture / AgriTech',
    company: 'AgriLeaf',
    caption:
      `There are millions of food orders placed every single day in India resulting in tonnes of single use plastic-waste. These plastic containers are slowly contaminating our natural resources, and even our bodies by releasing toxic chemicals and microplastics.

@agrileafdinnerware - a startup from Karnataka wants to replace these food containers and more with fallen areca palm leaves. They can be used to deliver biryani, burgers, pasta and much more. They are a 100% natural alternative and work well with both hot and cold food.

They have made fallen leaves functional by engineering them like modern packaging.
Agrileaf uses a bio-based coating and heat sealing to make containers leak-proof, tamper-proof, and resistant to sogginess for hours.

This could potentially make our food packaging free of microplastics.`,
    video: '/reel-exploreVideo/agrileaf.mp4',
    thumbnail: '/images/stock.png',
  },
 
  {
    industry: 'Electronics / Home Appliances',
    company: 'Atomberg',
    caption:
      `Ceiling fans existed in Indian homes for decades, yet no one questioned their inefficiency. Atomberg did. By introducing BLDC technology, the brand reduced power consumption, improved performance, and changed how consumers think about everyday appliances. Its journey proves that even the most ordinary products can be reinvented through focused innovation.`,
    video: '/reel-exploreVideo/Atomberg.mp4',
    thumbnail: '/images/stock.png',
  },
  
  {
    industry: 'Food & Beverage / Traditional Sweets',
    company: 'Bengali Sweet House',
    caption:
      `Legacy doesn't disappear.
It becomes undiscovered.

That's why even long-running Indian businesses like Bengali Sweet House are using simple tools like Boost Post Feature on Instagram not to change their identity, but to make sure the right people see what already exists. Sometimes, it's literally one tap that helps your story travel further.

If iconic businesses can find new growth this way, imagine what any business can do.

Send this to someone who is building businesses and is seeking new ways to reach their audiences.

[legacy businesses in India, Bengali Sweet House Delhi, family business India, Indian small businesses, Instagram for business, Meta Boost, boosting reels, word of mouth marketing, business discovery, Gen Z audience, brand relevance, digital growth for businesses, entrepreneurship India, traditional businesses going digital]`,
    video: '/reel-exploreVideo/Bengali-Sweet-House.mp4',
    thumbnail: '/images/stock.png',
  },
  
  {
    industry: 'Food & Restaurant / Fast Food',
    company: 'Burger Singh',
    caption:
      `Burger Singh

While global burger brands focused on uniform taste, Burger Singh focused on Indian cravings. Born from a simple observation during an MBA in the UK, the brand blended Western burgers with desi flavours. Today, it stands as a strong example of how understanding local taste can outperform big budgets and global names.`,
    video: '/reel-exploreVideo/burger-king.mp4',
    thumbnail: '/images/stock.png',
  },
  
  {
    industry: 'Food & Beverage / Café Chain',
    company: 'Chaayos',
    caption:
      `Chai was always part of Indian life, but Chaayos turned it into an organised experience. By allowing customers to personalise every cup, the brand blended tradition with modern retail. From a simple idea to a nationwide café chain, Chaayos shows how everyday habits can become scalable businesses when built around choice and consistency`,
    video: '/reel-exploreVideo/chaayos.mp4',
    thumbnail: '/images/stock.png',
  },
  
  {
    industry: 'Electronics / Sustainable Technology',
    company: 'Fairphone',
    caption:
      `The Fairphone is designed to be fairer, faster, and more sustainable than ever before. It's built with over 70% fair or recycled materials, including recycled plastics, Fairtrade gold, and conflict-free minerals. The Fairphone 5 is also 100% e-waste neutral, meaning that for every phone produced, 212 grams of electronic waste is responsibly collected and recycled.

But that's not all! The Fairphone 5 comes with a five-year warranty and eight years of software support so your phones can last longer.

Should all our phones be more sustainable?`,
    video: '/reel-exploreVideo/Fairphone.mp4',
    thumbnail: '/images/stock.png',
  },
  
  {
    industry: 'Consumer Goods / Home Products',
    company: 'Simba',
    caption:
      `Simba didn't beat Kingfisher by making "better beer."
It beat them by refusing to compete on beer.

Instead of spending on mass ads + discount wars, Simba built cultural proof — music, art, community — so the brand felt like identity, not a commodity.

Key takeaway: In markets dominated by giants, don't outspend them.
Change what people are buying.
Make them buy belonging.

[indian brand, indian startup story, business success story, brand strategy, premium branding, culture marketing, community led brand, fmcg marketing, indian d2c case study, how to build a brand in india]`,
    video: '/reel-exploreVideo/Simba.mp4',
    thumbnail: '/images/stock.png',
  },
  
  {
    industry: 'Healthcare / Beauty & Wellness',
    company: 'Skin Sight',
    caption:
      `This new patch can PREDICT how your face will age!`,
    video: '/reel-exploreVideo/skin-sight.mp4',
    thumbnail: '/images/stock.png',
  },
  
  {
    industry: 'Technology / Innovation',
    company: 'Adi Arora',
    caption:
      `A small-scale biomass pellet plant can be set up with an investment starting from around 5 lakhs, while a larger, advanced facility could require an investment of 5 crores or more.

The Ministry of New and Renewable Energy (MNRE) offers financial assistance through its “Biomass Programme”, providing subsidies based on the production capacity of the pellet plant.

Under the scheme, the government can provide up to Rs. 9 lakh per metric ton per hour of production capacity, with a maximum limit of Rs. 45 lakhs per plant.

[biomass, agri, pellets, Startups, investment, opportunity, startup, business, success, pellets]

#agriculture #biomass #pellets #sustainability #investment #startups`,
    video: '/reel-exploreVideo/adi__arora.mp4',
    thumbnail: '/images/stock.png',
  },
  
  {
    industry: 'Social Impact / National Development',
    company: 'India Impact',
    caption:
      `India is taking a new approach to road building.

When roads are constructed, materials like stone, sand, and concrete need something to bind them together. This role is played by bitumen, a thick black material made from crude oil. At present, around 50% of India’s bitumen requirement is imported.

To reduce this dependence, Indian scientists have developed bio-bitumen, also known as Krishi Bind. Instead of crude oil, it is made using farm waste such as rice straw, cotton stalks, and weeds. India has now become the first country in the world to produce bio-bitumen at a commercial scale, with private companies already licensed in multiple states.

Bio-bitumen is made through a process called pyrolysis. In this process, crop waste is heated without oxygen, so it does not burn or produce smoke. The material breaks down and is then refined into bio-bitumen.

This new material has been tested for 1.5 to 2 years in real highway conditions, including extreme heat and heavy rainfall, on road stretches in Meghalaya, Nagpur, and Gujarat.

India spends around ₹30,000 crore every year on importing bitumen. According to the government, even replacing 15% of this with bio-bitumen could lead to savings of about ₹4,500 crore annually in the initial phase.

There is also an environmental benefit. The same farm waste that is often burned in parts of North India, causing seasonal air pollution, can now be sold by farmers. This allows farmers to earn around ₹2,000 to ₹2,500 per tonne instead of burning the residue.

If adopted at scale, this approach could mean cleaner air, lower imports, and more sustainable roads.

Share this with someone who is interested in how India is building for the future, and follow along for everything around public policies.

[PublicPolicies, IndianRoads, SustainableInfrastructure, BioBitumen, KrishiBind, FarmWaste, ClimateAction, MakeInIndia]

@morthindia @gadkari.nitin @nhai_official @nhairogujarat`,
    video: '/reel-exploreVideo/india-changed.mp4',
    thumbnail: '/images/stock.png',
  },
  
  {
    industry: 'Heritage / Religious Tourism',
    company: 'Shri Mandir',
    caption:
      `India's spiritual tech market is exploding!.`,
    video: '/reel-exploreVideo/shri-mandir.mp4',
    thumbnail: '/images/stock.png',
  },
  
  {
    industry: 'Energy / Solar Technology',
    company: 'Surya Sparks',
    caption:
      `this Indian tech the future of solar energy?

It's Tuesday! Here are the latest developments from India's tech industry.

Firstly, SuryaSparks has launched their LSC solar window that can charge a laptop twice from one day of solar collection.

Next, Sarla Aviation has begun ground testing for their eVTOL, SYLLA SYL-X1.

Finally, VR startup anomaly has built an AR pothole detection app running a custom YOLO model with a Kaggle dataset.

There has never been a better time to build in India!`,
    video: '/reel-exploreVideo/SuryaSparksIs.mp4',
    thumbnail: '/images/stock.png',
  },
  
  {
    industry: 'Technology / Artificial Intelligence',
    company: 'Urji AI',
    caption:
      `This Mumbai company built a hydrogen-powered drone.

It's Thursday! Here's what happened in Indian tech in the last 24 hours.

Firstly, Time Technoplast tested their hydrogen-powered drone.

Next, Yog Panjarale and his team built a cubesat at the Hardware Hackathon 2.0 in Bengaluru.

Then, Ranok CNC Systems installed their fourth in-house proprietary CNC machine on their shop floor.

Finally, Hind Aerospace revealed Urji AI for powerline inspection.

It's Christmas and Indian startups are delivering tech innovations like they're presents under the tree!`,
    video: '/reel-exploreVideo/Urji-AI.mp4',
    thumbnail: '/images/stock.png',
  },
  
  {
    industry: 'Technology / Robotics',
    company: 'ARROBOT',
    caption:
      `They just launched 5 UAVs like it's nothing.

Meet ARROBOT, a subsidiary company of Hyderabad-based Raghu Vamsi Aerospace. Back in October they showed off their new Indra series micro turbojet engines, and now they've launched a number of UAVs including RV Rudra, a hybrid long-range UAV developed for extended-range missions. Apart from this they've also launched RV Maya, a twin jet-powered UAV developed for autonomous missions and payload delivery. Next we’ve got RV Astra, a jet-powered UAV designed for high-speed precision missions. After that there’s RV Lakshya, a jet-powered drone designed to support evaluation and training exercises. And then finally there’s RV Drishti and RV Yodha which is a system that combines tethered aerial surveillance via a drone with an autonomous ground platform.`,
    video: '/reel-exploreVideo/ARROBOT.mp4',
    thumbnail: '/images/stock.png',
  },
  
  {
    industry: 'Technology / Innovation',
    company: 'Tintessa',
    caption:
      `
How did Tanisha Rathi, a 24-year-old young entrepreneur from Delhi build a skincare-first Indian makeup brand that generated Rs 15 lakh within four months of its launch?

This is the Tintessa story. 

Website - https://www.tintessa.com/ 

#startup #startupfounder #startuppedia #youngentrepreneur #womanentrepreneur skincare makeupbrand delhi delhistartup`,
    video: '/reel-exploreVideo/Tintessa.mp4',
    thumbnail: '/images/stock.png',
  },
];

// Helper function to transform raw data into video objects
export const transformVideos = (rawData) => {
  return rawData.map((item, idx) => ({
    id: idx,
    ...item,
    author: item.company,
    authorAvatar: toInitials(item.company),
    metrics: mkMetrics(idx),
  }));
};

// Export raw data and helpers
export { raw, toInitials, mkMetrics };

