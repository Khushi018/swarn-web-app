// Stories videos dataset
// Extra videos from industries (beyond the first primary video) + manual story additions
// Edit the 'raw' array below to change which videos appear in Stories

// Edit this array to change story videos
// Each entry represents a company/user with one or more story videos
const raw = [
  // Extra videos from industries (beyond primary Reels video)
  {
    name: 'ChaiMetrics',
    author: 'ChaiMetrics',
    authorAvatar: 'CM',
    profileImage: '/images/chai-dp.jpg',
    stories: [
      {
        id: 1,
        video: '/videos/chai-analyisis.mp4',
        description: `Every sip of chai powers a trillion-rupee industry and supports millions. On International Tea Day,
here's how your morning cup brews economic growth — and investment opportunities.

Follow Pickright for more finance stories steeped in everyday life.`,
      },
      {
        id: 2,
        video: '/videos/chai-food.mp4',
        description: 'Cup & Crumb Co. pairs comforting chai with thoughtfully crafted food. Built for everyday indulgence, we focus on quality ingredients, efficient service, and flavors that connect people. Our goal is simple—turn small breaks into memorable moments through food that feels homely, reliable, and deeply satisfying.',
      },
      {
        id: 3,
        video: '/videos/chai-cafe.mp4',
        description: 'Sometimes the biggest ideas start with the smallest needs.',
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
        id: 1,
        video: '/videos/defence2.mp4',
        description: 'Operational readiness in the field.',
      },
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
