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
    industry: 'Technology / Regional Development',
    company: 'runtimebrt and belagavi',
    caption: `This defence laser is made in India.

Belagavi, Karnataka-based Carbine Systems has conducted a series of successful indoor tests of their first DEW prototype. It's called H.A.R.A. Mk 1, short for Hyper Amplification Radiant Array, and it's a 10 kW-class DEW with an effective engagement range of between one and two kilometres. Carbin Systems has been bootstrapped since 2015. In the early days of the business, they operated as a 3D design agency, and now specialise in additive metal manufacturing. They're also working on their own metal 3D printers, which is why they've spent so much time developing lasers. When they realised that lasers can be useful for applications outside of 3D printing, they decided to enter the iDEX challenge and develop lasers for defence. After hearing from the DRDO and the Navy about their requirements, they began working on H.A.R.A.`,
    video: '/feedVideo/Belagavi.mp4',
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
    industry: 'Technology / Security & AI',
    company: 'runtimebrt and guardex.ai',
    caption: `This AI model tracks student attention in class.

It's Friday y'all! Here's what the last 24 hours in Indian tech looked like.

Firstly, Guardex AI built an AI model to monitor student attention and teacher effectiveness in classrooms.

Secondly, Sand Falcon's machine was used to clean Marina Beach in Chennai.

Thirdly, Tarun Sridharan, founder of Odd Compass, dropped the trailer for a new narrative-driven RPG set in India, Rakshasa.`,
    video: '/feedVideo/Guardex-AI.mp4',
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
  
  {
    industry: 'Technology / Innovation',
    company: 'Shyam Gursahani',
    caption: `Most people think India’s pollution problem will be solved by importing cleaner tech. But some of the most practical solutions are being built quietly, using what we already throw away.
Turning garbage into fuel is not just a climate story. It’s an economics story. Coal is cheap, available, and deeply embedded in how India runs. Any alternative that wants to win has to plug into the same system, not fight it.
That’s why waste-based fuel matters. It uses existing waste streams. It works with current boilers and furnaces and it reduces emissions without asking industries to redesign everything.
This is the kind of innovation India needs more of. Not flashy. Not dependent on imports. Just deeply practical.
For founders looking ahead, sustainability is going to be the future and building on that creates massive businesses.`,
    video: '/reel-exploreVideo/shyamgursahani.mp4',
    thumbnail: '/images/stock.png',
  },
  
  {
    industry: 'Technology / Innovation',
    company: 'Rithvik HQ',
    caption: `3w
Two teenagers just turned car pollution into oxygen — while driving.
No billion-dollar lab. No government push. Just a bold idea + climate tech.

A 3D-printed filter. Microalgae. Real-time carbon capture.
If this scales, it could change clean mobility, sustainability, and the auto industry forever.

Save this. Share it. This is what real innovation looks like.

#climateinnovation #cleantech #sustainability #futuretechnology #greeninnovation`,
    video: '/reel-exploreVideo/the.rithvik.hq.mp4',
    thumbnail: '/images/stock.png',
  },
  
  {
    industry: 'Technology / Innovation',
    company: 'theneonation1',
    caption: `1d
Yoga Bar entered a market where snacks were convenient but rarely clean. By focusing on transparent ingredients, protein-rich formats, and everyday nutrition, the brand helped build a new snacking habit in urban India. Its journey shows how solving a simple consumer problem can reshape an entire category over time.`,
    video: '/reel-exploreVideo/theneonation1.mp4',
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

