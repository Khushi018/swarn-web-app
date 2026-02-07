// Home feed videos dataset
// Video files live in `public/videos/` and `public/feedVideo/` and are referenced by absolute paths.

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
    industry: 'Technology / Ecosystem',
    company: 'Ecosystem',
    caption: `♻️🌍 Recycling is the NEW Wealth Trend! 💰🚀

From metal recycling to e-waste, plastic, tyres & water treatment, India's recycling ecosystem is not just saving the planet 🌱— it's also creating multi-bagger stock opportunities 📈🔥

Top players to watch:
✅ NILE – ₹1,946 (Metal/Lead)
✅ Ganesha Ecosphere – ₹1,296 (Plastic PET)
✅ Tinna Rubber – ₹822 (Rubber/Tyres)
✅ Antony Waste – ₹593 (Waste Management)
✅ VA Tech Wabag – ₹1,538 (Water Treatment)
…and more eco-champions building a sustainable + profitable future 🌏✨

♻️ Recycling = Green profits + Green planet 🌿💵

👉 Would you invest in green stocks for long-term wealth?
💾 Save this post to track future winners
🔗 Share with your circle & spread awareness 🌱

#GreenStocks #RecyclingEcosystem #EcoFriendlyInvesting #SustainableGrowth #StockMarketIndia #WealthCreation #FinanceReels #EcoInvesting #MultibaggerStocks #StockMarket2025 #InvestSmart #ClimateAction #MoneyTalks #SustainableFinance #financialfreedom`,
    image: '/feedVideo/ecosystem.jpeg',
    thumbnail: '/images/stock.png',
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
    industry: 'Technology / Regional Development',
    company: 'Belagavi',
    caption: `This defence laser is made in India.

Belagavi, Karnataka-based Carbine Systems has conducted a series of successful indoor tests of their first DEW prototype. It's called H.A.R.A. Mk 1, short for Hyper Amplification Radiant Array, and it's a 10 kW-class DEW with an effective engagement range of between one and two kilometres. Carbin Systems has been bootstrapped since 2015. In the early days of the business, they operated as a 3D design agency, and now specialise in additive metal manufacturing. They're also working on their own metal 3D printers, which is why they've spent so much time developing lasers. When they realised that lasers can be useful for applications outside of 3D printing, they decided to enter the iDEX challenge and develop lasers for defence. After hearing from the DRDO and the Navy about their requirements, they began working on H.A.R.A.`,
    video: '/feedVideo/Belagavi.mp4',
    thumbnail: '/images/stock.png',
  },  
  {
    industry: 'Technology / Education',
    company: 'CRACKIT',
    caption: `This lighter is made in India.

We made it to Saturday! Here's what the last 24 hours in Indian tech looked like.

Firstly, CRACKIT is indigenising Indian lighter manufacturing.

Secondly, Paras Chopra built a tool to save your life using Claude.

Thirdly, IITM Global is taking IIT Madras global.

Finally, Bhavish Aggarwal said Ola Shakti is coming soon.`,
    video: '/feedVideo/CRACKIT.mp4',
    thumbnail: '/images/stock.png',
  },
  
  {
    industry: 'Technology / Security & AI',
    company: 'Guardex AI',
    caption: `This AI model tracks student attention in class.

It's Friday y'all! Here's what the last 24 hours in Indian tech looked like.

Firstly, Guardex AI built an AI model to monitor student attention and teacher effectiveness in classrooms.

Secondly, Sand Falcon's machine was used to clean Marina Beach in Chennai.

Thirdly, Tarun Sridharan, founder of Odd Compass, dropped the trailer for a new narrative-driven RPG set in India, Rakshasa.`,
    video: '/feedVideo/Guardex-AI.mp4',
    thumbnail: '/images/stock.png',
  },
  
  {
    industry: 'Technology / Innovation',
    company: 'Lakshveer Rao',
    caption: `This 8-year-old is India's youngest hardware founder.

It's Tech Tuesday, so here's everything that's happening in India.

Firstly, Lakshveer Rao, Darshan Savaliya, and Joe Daniel created a wrist-mounted companion tool for Indian astronauts on Mars at the Hardware Hackathon 2.0 hosted by LionCircuits and PCB Cupid at the Param Foundation PARSEC in Bengaluru.

Next, Anveshak from IIT Madreas is prepping their rover for the Caterpillar Autonomy Challenge at Shaastra 2026. They won first place at CAC 2025 and hope to win again at CAC 2026. Shaastra is Asia student-led tech fest. You can learn more about Shaastra at @shaastra_iitm

Finally, General Autonomy introduced their robot dog PARAM to real dogs in Bengaluru.

Only one day left of 2025, let's make it count! 🇮🇳`,
    video: '/feedVideo/Lakshveer-Rao.mp4',
    thumbnail: '/images/stock.png',
  },
  
  {
    industry: 'Technology / Logistics',
    company: 'LogiXair',
    caption: `Indian freight will never be the same.

Hyderabad-based LogiXair is building sky trucks to dramatically reduce delivery times between India's logistics hubs.

As a fully bootstrapped startup, LogiXair is currently in the R&D phase of their journey. They've developed a hybrid-powered fixed-wing technology baseline cargo aircraft, WingHead, but their long-term goal is to build a commercial aircraft with a payload capacity of ~300 kg and a range of 600 km.

LogiXair began their journey in the Netherlands founder Bhanu Teja Chidura was based. Soon, he realised that building a startup in the Netherlands was expensive, so he shifted back to India and continued his journey in Telangana, where he has been bootstrapping his company in Hyderabad. LogiXair is planning to raise a round of capital in 2026, and by 2030 he hopes the company can expand beyond local Indian logistics to tackle international transport and logistics for defence use cases.`,
    video: '/feedVideo/LogiXair.mp4',
    thumbnail: '/images/stock.png',
  },
  
  {
    industry: 'Technology / Semiconductors',
    company: 'Raana Semiconductors',
    caption: `This is the future of Indian silicon.

Bengaluru-based Raana Semiconductors, or RSPL, has raised a $3M seed round to build indigenous silicon ingot growth systems. Currently there is no other private Indian firm working exclusively on Czochralski-based crystal growth equipment and single-crystal development. With Czochralski ingot pulling, silicon is melted in a crucible. Then a crystal seed is lowered into the melt and a crystal begins to nucleate at the seed. That seed is then slowly pulled from the melt, which grows a single crystalline ingot. The tails of the ingot are then removed, and diamond-coated wires cut through the ingot to create the thin wafers that are used for semiconductors and solar panels. Currently, this process is not happening in India with Indian machines, but Raana Semiconductors wants to change that. RSPL plans to commercialise their indigenous crystal growth systems specifically for the solar industry within the next 18 months. In the future they also aim to build machines that can do semiconductor-grade wafer production too.`,
    video: '/feedVideo/Raana-Semiconductors.mp4',
    thumbnail: '/images/stock.png',
  },
  
  {
    industry: 'Technology / Aerospace',
    company: 'TX Infiniti Aerospace',
    caption: `This startup is building unmanned helicopters.

Bengaluru-based X-infiniti Aerospace uses a process called M2UC, or manned-to-uncrewed conversion, to turn Chetak and Cheetah helicopters into autonomous vehicles. The founder of X-infiniti Aerospace, Vishal Kumar Verma, used to work at The ePlane Company as a Senior Test Pilot before starting X-infiniti Aerospace in July of 2025. X-infiniti Aerospace has also already built a helicopter emergency floatation system which they successfully tested.`,
    video: '/feedVideo/TX-infinitiAerospace .mp4',
    thumbnail: '/images/stock.png',
  },
  
  {
    industry: 'Technology / Medical Imaging',
    company: 'Voxelgrids',
    caption: `This MRI machine is made in India and 40% cheaper to build.

Bengaluru-based Voxelgrids has built India's first domestically developed MRI scanner. Their machine has been installed at the Chandrapur Cancer Care Foundation near Nagpur after 12 years of in-house development, and this MRI design eliminates liquid helium which reduces the cost of building one of these machines by 40%, and it's also a cheaper machine to run compared to non-Indian alternatives because the MRI's magnet electronics are tightly integrated while maintaining the same bore size, which means that power usage is reduced. Voxelgrids can manufacture 20 to 25 scanners per year at their Bengaluru factory. So far they've raised $5M from Zoho.`,
    video: '/feedVideo/Voxelgrids.mp4',
    thumbnail: '/images/stock.png',
  },
  
  {
    industry: 'Technology / Innovation',
    company: 'Apratima',
    caption: `Apratima Biosolutions
Bengaluru-based biotechnology startup, Apratima Biosolutions, is working on a breakthrough that could change how we deal with PET plastic waste. This startup founded by Dr. Kavyasree Manjunath is developing enzymes that can degrade PET plastic within hours, a process that would otherwise take over 450 years. Once broken down, the chemicals extracted can be repurposed to create new, virgin-quality plastic, making the cycle truly circular.
Incubated at NSCREL, IIM-Bangalore, Apratima secured grants to fuel its R&D, and today, the startup operates out of C-CAMP, Bengaluru’s leading biotech hub.
With their enzyme-powered innovation, Apratima is showing that the future of plastic, might be reimagining it.
#sustainablestories #sustainability`,
    video: '/feedVideo/Apratima.mp4',
    thumbnail: '/images/stock.png',
  },
  
  {
    industry: 'Technology / Environmental Solutions',
    company: 'Ecoverva',
    caption: `Every year, we upgrade our gadgets, appliances, and tech. But what happens to the old ones? India’s e-waste is piling up faster than ever, with a 70% surge between 2019 and 2024. Most of it ends up forgotten in our homes or dumped in landfills. That’s where recyclers like @recycling_ecoverva come in, turning this growing challenge into an opportunity. They’re recycling e-waste responsibly, recovering valuable metals, and keeping every step transparent and traceable. By spreading e-waste awareness and organising India’s recycling ecosystem, they’re helping build a sustainable circular economy where nothing truly goes to waste.`,
    video: '/feedVideo/ecoverva.mp4',
    thumbnail: '/images/stock.png',
  },
  
  {
    industry: 'Consumer Goods / Health Products',
    company: 'Good Gum',
    caption: `Most chewing gums available in the supermarkets are made of plastic. It is hidden under the term ‘gum base’. So Bengaluru brothers Mayank and Bhuvan decided to come up with the Gud Gum. This made-in-india brand makes plastic-free, all-natural chewing gum from chicle (tree sap) which is flavoured with real fruits powder. Unlike regular gums that pollute sidewalks and harm wildlife, Gud Gum is biodegradable making it a guilt-free, eco-friendly way to freshen your breath. The Good Gum is also incubated at NSRCEL in the circular economy program. The program helped them gain financial access and also suppor in scaling up.`,
    video: '/feedVideo/Good-Gum.mp4',
    thumbnail: '/images/stock.png',
  },
  
  {
    industry: 'Agriculture / Farming',
    company: 'Hosachiguru',
    caption: `Most of us dream of owning a farm.
Very few of us know how to actually run one.
That’s where @hosachiguru comes in. They help people own farmland that’s professionally managed, transparently run, and rooted in regenerative practices.
You own the land. A dedicated team manages soil health, water systems, crops, and on-ground operations.

What that gives you:
* No daily farming stress
* Better land productivity over time
* Responsible water and soil management
* A real asset you can visit, use, and pass on`,
    video: '/feedVideo/hosachiguru.mp4',
    thumbnail: '/images/stock.png',
  },
  
  {
    industry: 'Technology / Innovation',
    company: 'NIR NALS',
    caption: `
In India, millions still don’t have access to safe drinking water. For many families, that means depending on expensive bottled water or relying on unsafe sources. That’s the problem Niranjan from Belagavi set out to solve.

He began with a simple idea which is to build small, affordable filters that could fit onto any bottle, making clean water accessible for travelers, students, and even the Indian Army and CRPF. But he didn’t stop there.

Most RO purifiers waste three litres of water for every one litre they clean. Niranjan wanted to change that. His new RO system is designed to save up to seventy percent of that wasted water, with a smart storage container so the reject water can be reused for washing and cleaning. It’s a solution not just for homes, but for offices and even large-scale commercial use.`,
    video: '/feedVideo/NIR-NALS .mp4',
    thumbnail: '/images/stock.png',
  },
  
  {
    industry: 'Energy / Solar Technology',
    company: 'Sunday Grid',
    caption: `@sundaygrids is making solar energy accessible to everyone, even if you live in an apartment or rented house with no roof for panels. The platform lets you reserve solar panels in large solar projects and offset your electricity bill from anywhere by using credits.
This way every Indian gets access to clean energy and helps contribute to India’s renewable energy mission.
#cleanenergy@sundaygrids is making solar energy accessible to everyone, even if you live in an apartment or rented house with no roof for panels. The platform lets you reserve solar panels in large solar projects and offset your electricity bill from anywhere by using credits.
This way every Indian gets access to clean energy and helps contribute to India’s renewable energy mission.
#cleanenergy@sundaygrids is making solar energy accessible to everyone, even if you live in an apartment or rented house with no roof for panels. The platform lets you reserve solar panels in large solar projects and offset your electricity bill from anywhere by using credits.
This way every Indian gets access to clean energy and helps contribute to India’s renewable energy mission.
#cleanenergy is making solar energy accessible to everyone, even if you live in an apartment or rented house with no roof for panels. The platform lets you reserve solar panels in large solar projects and offset your electricity bill from anywhere by using credits.
This way every Indian gets access to clean energy and helps contribute to India’s renewable energy mission.
#cleanenergy`,
    video: '/feedVideo/sundaygrid.mp4',
    thumbnail: '/images/stock.png',
  },
  
  {
    industry: 'Consumer Goods / Traditional Products',
    company: 'Tribal Veda',
    caption: `TribalVeda is a startup founded by Rajesh Oza and Pooja Oza. Their mission is to transform wild Jamun (Indian blackberry) into shelf-stable wellness products while uplifting tribal communities. The brand sources Jamun fruits from tribal women, processes them into preservative-free products like jam, strips, cubes, teas, seed powder, vinegar, and frozen pulp, and in turn supports sustainable livelihoods for thousands of tribal women.
Jamun is a super fruit but tons of it goes to waste because not many know how to preserve it. @tribalveda_official is doing this while empowering women and creating jobs for them`,
    video: '/feedVideo/TribalVeda .mp4',
    thumbnail: '/images/stock.png',
  },
  
  {
    industry: 'Technology / Innovation',
    company: 'Without',
    caption: `Sourcing materials that are truly sustainable and ethically produced has become one of the biggest challenges for modern brands. Certifications are confusing, supply chains are opaque, and most “green” materials don’t hold up under scrutiny.
Without aims to close that gap.
The company transforms low-value, traditionally unrecyclable waste into high-quality, premium materials. From multilayered plastics to textile waste that can’t be reused - @shop.without is helping turn the most difficult waste to recycle into many lives.
Special thanks to @diamirzaofficial for helping us tell this story 💚💚`,
    video: '/feedVideo/Without.mp4',
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

