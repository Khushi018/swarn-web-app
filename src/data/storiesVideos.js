// Stories videos dataset
// Extra videos from industries (beyond the first primary video) + manual story additions
// Edit the 'raw' array below to change which videos appear in Stories

// Edit this array to change story videos
// Each entry represents a company/user with one or more story videos
const raw = [
  {
    name: 'gen.e_in',
    author: 'gen.e_in',
    authorAvatar: 'GE',
    profileImage: '/images/gen.e_in-logo.jpg',
    stories: [
      {
        id: 1,
        video: '/feedVideo/Apratima.mp4',
        description: 'Apratima Biosolutions is developing enzymes that can degrade PET plastic within hours. Turning waste into opportunity.',
      },
    ],
  },
  // Extra videos from industries (beyond primary Reels video)
  {
    name: 'runtimebrt',
    author: 'runtimebrt',
    authorAvatar: 'RB',
    profileImage: '/images/runtimelogo.jpg',
    stories: [
     
     
      {
        id: 8,
        video: '/feedVideo/Voxelgrids.mp4',
        description: 'This MRI machine is made in India and 40% cheaper to build. India\'s first domestically developed MRI scanner.',
      },
    ],
  },
  {
    name: 'ChaiMetrics',
    author: 'ChaiMetrics',
    authorAvatar: 'CM',
    profileImage: '/images/chai-logo.png',
    stories: [
      {
        id: 3,
        video: '/videos/chai-cafe.mp4',
        description: 'Sometimes the biggest ideas start with the smallest needs.',
      },
      {
        id: 1,
        video: '/videos/chai-analyisis.mp4',
        description: `Every sip of chai powers a trillion-rupee industry and supports millions. On International Tea Day,
here's how your morning cup brews economic growth — and investment opportunities.

Follow Pickright for more finance stories steeped in everyday life.`,
      },
     
     
    ],
  },
  {
    name: 'BrightRoots Early Care',
    author: 'BrightRoots Early Care',
    authorAvatar: 'BE',
    profileImage: '/images/bright-root-dp.png',
    stories: [
      {
        id: 1,
        video: '/videos/child-care2.mp4',
        description: 'BrightRoots Early Care focuses on holistic child development during the most important years of growth. By combining safety, learning, and emotional well-being, we support children in exploring, learning, and thriving. Our approach values trust, care, and consistency—helping young minds grow strong from the very beginning.',
      },
    ],
  },
  {
    name: 'AutoServe Systems',
    author: 'AutoServe Systems',
    authorAvatar: 'AS',
    profileImage: '/images/stock.png',
    stories: [
      {
        id: 1,
        video: '/videos/vending-xerox2.mp4',
        description: 'AutoServe Systems is redefining self-service through intelligent vending and automated solutions. Built for high-traffic environments, our technology delivers convenience, accuracy, and uptime. We help organizations streamline operations while improving user experience—because smart automation is the future of efficient service delivery.',
      },
    ],
  },

  
  
  // Manual story additions (defence2, defence3, delivering-flowers)
  {
    name: 'AegisCore Systems',
    author: 'AegisCore Systems',
    authorAvatar: 'AS',
    stories: [
      {
        id: 2,
        video: '/videos/defence3.mp4',
        description: 'Advanced defence capabilities in action.',
      },
    ],
  },
  {
    name: 'FlowRoute Logistics',
    author: 'FlowRoute Logistics',
    authorAvatar: 'FL',
    stories: [
      {
        id: 1,
        video: '/videos/delivering-flowers.mp4',
        description: 'Fast, reliable flower deliveries across the city.',
      },
    ],
  },
 
  
];

export const storiesVideos = raw;
