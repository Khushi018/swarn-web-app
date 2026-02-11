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
    company: 'anujmohanty_',
    caption: `A torn milk packet sparked an idea.

After Karnataka's plastic ban, Mohammed Sadiq started Biogreen Bags fully compostable bags that decompose in 180 days.

Today, brands like D-Mart and Myntra use them.

That's how problems become businesses.`,
    video: '/videos/home9.mp4',
    thumbnail: '/images/stock.png',
    ///==========
  },  
  //============
  {
    industry: 'Agriculture / AgriTech',
    company: 'gen.e_in and agrileaf',
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
    industry: 'Technology / Education',
    company: 'runtimebrt and crackit',
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
    industry: 'Food & Beverage / Traditional Sweets',
    company: 'socho.abhi',
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
    industry: 'Food & Beverage / Café Chain',
    company: 'Chaayos',
    caption:
      `Chai was always part of Indian life, but Chaayos turned it into an organised experience. By allowing customers to personalise every cup, the brand blended tradition with modern retail. From a simple idea to a nationwide café chain, Chaayos shows how everyday habits can become scalable businesses when built around choice and consistency`,
    video: '/reel-exploreVideo/chaayos.mp4',
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
    industry: 'Technology / Semiconductors',
    company: 'runtimebrt and rspl',
    caption: `This is the future of Indian silicon.

Bengaluru-based Raana Semiconductors, or RSPL, has raised a $3M seed round to build indigenous silicon ingot growth systems. Currently there is no other private Indian firm working exclusively on Czochralski-based crystal growth equipment and single-crystal development. With Czochralski ingot pulling, silicon is melted in a crucible. Then a crystal seed is lowered into the melt and a crystal begins to nucleate at the seed. That seed is then slowly pulled from the melt, which grows a single crystalline ingot. The tails of the ingot are then removed, and diamond-coated wires cut through the ingot to create the thin wafers that are used for semiconductors and solar panels. Currently, this process is not happening in India with Indian machines, but Raana Semiconductors wants to change that. RSPL plans to commercialise their indigenous crystal growth systems specifically for the solar industry within the next 18 months. In the future they also aim to build machines that can do semiconductor-grade wafer production too.`,
    video: '/feedVideo/Raana-Semiconductors.mp4',
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
    industry: 'Technology / Aerospace',
    company: 'runtimebrt and tx_infiniti_aerospace',
    caption: `This startup is building unmanned helicopters.

Bengaluru-based X-infiniti Aerospace uses a process called M2UC, or manned-to-uncrewed conversion, to turn Chetak and Cheetah helicopters into autonomous vehicles. The founder of X-infiniti Aerospace, Vishal Kumar Verma, used to work at The ePlane Company as a Senior Test Pilot before starting X-infiniti Aerospace in July of 2025. X-infiniti Aerospace has also already built a helicopter emergency floatation system which they successfully tested.`,
    video: '/feedVideo/TX-infinitiAerospace .mp4',
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
    industry: 'Technology / Medical Imaging',
    company: 'runtimebrt and voxelgrids',
    caption: `This MRI machine is made in India and 40% cheaper to build.
Bengaluru-based Voxelgrids has built India's first domestically developed MRI scanner. Their machine has been installed at the Chandrapur Cancer Care Foundation near Nagpur after 12 years of in-house development, and this MRI design eliminates liquid helium which reduces the cost of building one of these machines by 40%, and it's also a cheaper machine to run compared to non-Indian alternatives because the MRI's magnet electronics are tightly integrated while maintaining the same bore size, which means that power usage is reduced. Voxelgrids can manufacture 20 to 25 scanners per year at their Bengaluru factory. So far they've raised $5M from Zoho.`,
    video: '/feedVideo/Voxelgrids.mp4',
    thumbnail: '/images/stock.png',
  },
  
  {
    industry: 'Technology / Innovation',
    company: 'gen.e_in and diamirzaofficial',
    caption: `Apratima Biosolutions
Bengaluru-based biotechnology startup, Apratima Biosolutions, is working on a breakthrough that could change how we deal with PET plastic waste. This startup founded by Dr. Kavyasree Manjunath is developing enzymes that can degrade PET plastic within hours, a process that would otherwise take over 450 years. Once broken down, the chemicals extracted can be repurposed to create new, virgin-quality plastic, making the cycle truly circular.
Incubated at NSCREL, IIM-Bangalore, Apratima secured grants to fuel its R&D, and today, the startup operates out of C-CAMP, Bengaluru’s leading biotech hub.
With their enzyme-powered innovation, Apratima is showing that the future of plastic, might be reimagining it.
#sustainablestories #sustainability`,
    video: '/feedVideo/Apratima.mp4',
    thumbnail: '/images/stock.png',
  },
  {
    industry: 'Technology / Innovation',
    company: 'runtimebrt and lakshveerrao',

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
    industry: 'Feed Video',
    company: 'lucentglobe',
    caption: `Thoughts guys?!?

#smallbusiness #ecofriendly #cleaning #aussie #sustainableliving #savetheplanet`,
    video: '/feedVideo/lucentglobe.mp4',
    thumbnail: '/images/stock.png',
  },
  
  {
    industry: 'Technology / Environmental Solutions',
    company: 'gen.e_in and ecoverva',
    caption: `Every year, we upgrade our gadgets, appliances, and tech. But what happens to the old ones? India’s e-waste is piling up faster than ever, with a 70% surge between 2019 and 2024. Most of it ends up forgotten in our homes or dumped in landfills. That’s where recyclers like @recycling_ecoverva come in, turning this growing challenge into an opportunity. They’re recycling e-waste responsibly, recovering valuable metals, and keeping every step transparent and traceable. By spreading e-waste awareness and organising India’s recycling ecosystem, they’re helping build a sustainable circular economy where nothing truly goes to waste.`,
    video: '/feedVideo/ecoverva.mp4',
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
    industry: 'Consumer Goods / Health Products',
    company: 'gen.e_in and goodgum',
    caption: `Most chewing gums available in the supermarkets are made of plastic. It is hidden under the term ‘gum base’. So Bengaluru brothers Mayank and Bhuvan decided to come up with the Gud Gum. This made-in-india brand makes plastic-free, all-natural chewing gum from chicle (tree sap) which is flavoured with real fruits powder. Unlike regular gums that pollute sidewalks and harm wildlife, Gud Gum is biodegradable making it a guilt-free, eco-friendly way to freshen your breath. The Good Gum is also incubated at NSRCEL in the circular economy program. The program helped them gain financial access and also suppor in scaling up.`,
    video: '/feedVideo/Good-Gum.mp4',
    thumbnail: '/images/stock.png',
  }, 
  
  {
    industry: 'Feed Video',
    company: 'rowancheung',
    caption: `A new startup called Pickle has unveiled Pickle 1, AI-powered AR glasses the company calls a “soul computer.”

The device claims to use cameras and sensors to capture a user’s surroundings, organizing moments into searchable “memory bubbles” while learning habits and predicting needs.

Priced at $799 with a $200 refundable deposit, U.S. shipping is expected in Q4 2026 (accidentally said Q2 in the video).

However, industry experts have raised concerns about the feasibility of Pickle’s claims, noting that the stated specifications — dual waveguide displays, 12-hour battery life, and 68-gram weight — would surpass what established companies like Meta have achieved. 

No working hardware demo has been publicly shown.

Only time will tell if this is just vaporware or a real breakthrough.

#ai #smartglasses #technology #augmentedreality #vr`,
    video: '/feedVideo/rowancheung.mp4',
    thumbnail: '/images/stock.png',
  },
   
  {
    industry: 'Agriculture / Farming',
    company: 'gen.e_in and hosachiguru',
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
    industry: 'Feed Video',
    company: 'sudeepsrivastavaai',
    caption: `A huge part of India’s air pollution doesn’t come from vehicles or factories, it comes from open burning of reject waste.

When waste is treated right where it’s generated, there’s no transport, no landfill dumping, and no toxic smoke. Decentralized processing tackles pollution at the source, making waste management cheaper, cleaner, and far more effective.

If solutions like this scale nationwide, clean air becomes a system.`,
    video: '/feedVideo/sudeepsrivastavaai.mp4',
    thumbnail: '/images/stock.png',
  },
  {
    industry: 'Technology / Innovation',
    company: 'gen.e_in and nirnalwatersolutions',
    caption: `
In India, millions still don’t have access to safe drinking water. For many families, that means depending on expensive bottled water or relying on unsafe sources. That’s the problem Niranjan from Belagavi set out to solve.

He began with a simple idea which is to build small, affordable filters that could fit onto any bottle, making clean water accessible for travelers, students, and even the Indian Army and CRPF. But he didn’t stop there.

Most RO purifiers waste three litres of water for every one litre they clean. Niranjan wanted to change that. His new RO system is designed to save up to seventy percent of that wasted water, with a smart storage container so the reject water can be reused for washing and cleaning. It’s a solution not just for homes, but for offices and even large-scale commercial use.`,
    video: '/feedVideo/NIR-NALS .mp4',
    thumbnail: '/images/stock.png',
  },

  {
    industry: 'Feed Video',
    company: 'altdwater',
    caption: `If you buy water delivery on a monthly basis and you’re drinking out of plastic, I just want you to know you’re not doing it the right way.

From the emissions that transport that water to your house to the microplastics that are actively in the water, it’s objectively not sustainable.

Creating your own water at your home is the most sustainable way to consume water.

Our water has natural alkalinity and we use ozone to oxygenate the water—so naturally, this is some of the cleanest, pure water that you can possibly find. Period.

This may seem like a very foreign concept, but it’s really not.

We capture the moisture out of the air, put it through a rigorous filtration system, and re-mineralize it with calcium and potassium to make sure you’re getting all the essential minerals that you need.`,
    video: '/feedVideo/altdwater.mp4',
    thumbnail: '/images/stock.png',
  },
  
  
  {
    industry: 'Energy / Solar Technology',
    company: 'gen.e_in and sundaygrids',
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
    industry: 'Feed Video',
    company: 'sudeepsrivastavaai',
    caption: `A huge part of India’s air pollution doesn’t come from vehicles or factories, it comes from open burning of reject waste.

When waste is treated right where it’s generated, there’s no transport, no landfill dumping, and no toxic smoke. Decentralized processing tackles pollution at the source, making waste management cheaper, cleaner, and far more effective.

If solutions like this scale nationwide, clean air becomes a system.`,
    video: '/feedVideo/sudeepsrivastavaai.mp4',
    thumbnail: '/images/stock.png',
  },
  
  {
    industry: 'Consumer Goods / Traditional Products',
    company: 'gen.e_in and tribalVeda',
    caption: `TribalVeda is a startup founded by Rajesh Oza and Pooja Oza. Their mission is to transform wild Jamun (Indian blackberry) into shelf-stable wellness products while uplifting tribal communities. The brand sources Jamun fruits from tribal women, processes them into preservative-free products like jam, strips, cubes, teas, seed powder, vinegar, and frozen pulp, and in turn supports sustainable livelihoods for thousands of tribal women.
Jamun is a super fruit but tons of it goes to waste because not many know how to preserve it. @tribalveda_official is doing this while empowering women and creating jobs for them`,
    video: '/feedVideo/TribalVeda .mp4',
    thumbnail: '/images/stock.png',
  },

  {
    industry: 'Technology / Logistics',
    company: 'runtimebrt and caleb_friesen',
    caption: `Indian freight will never be the same.

Hyderabad-based LogiXair is building sky trucks to dramatically reduce delivery times between India's logistics hubs.

As a fully bootstrapped startup, LogiXair is currently in the R&D phase of their journey. They've developed a hybrid-powered fixed-wing technology baseline cargo aircraft, WingHead, but their long-term goal is to build a commercial aircraft with a payload capacity of ~300 kg and a range of 600 km.

LogiXair began their journey in the Netherlands founder Bhanu Teja Chidura was based. Soon, he realised that building a startup in the Netherlands was expensive, so he shifted back to India and continued his journey in Telangana, where he has been bootstrapping his company in Hyderabad. LogiXair is planning to raise a round of capital in 2026, and by 2030 he hopes the company can expand beyond local Indian logistics to tackle international transport and logistics for defence use cases.`,
    video: '/feedVideo/LogiXair.mp4',
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
    industry: 'Technology / Innovation',
    company: 'gen.e_in and diamirzaofficial',
    caption: `Sourcing materials that are truly sustainable and ethically produced has become one of the biggest challenges for modern brands. Certifications are confusing, supply chains are opaque, and most “green” materials don’t hold up under scrutiny.
Without aims to close that gap.
The company transforms low-value, traditionally unrecyclable waste into high-quality, premium materials. From multilayered plastics to textile waste that can’t be reused - @shop.without is helping turn the most difficult waste to recycle into many lives.
Special thanks to @diamirzaofficial for helping us tell this story 💚💚`,
    video: '/feedVideo/Without.mp4',
    thumbnail: '/images/stock.png',
  }
 

];

export const homeVideos = raw.map((item, idx) => ({
  id: idx,
  ...item,
  author: item.company,
  authorAvatar: toInitials(item.company),
  metrics: mkMetrics(idx),
}));

