// data/portfolioData.ts
export interface PortfolioItem {
  id: number;
  images: string[];
  alt: string;
  width: number;
  height: number;
  title: string;
  description: string;
}

export const portfolioItems: PortfolioItem[] = [
  { 
    id: 1, 
    images: [
      'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?w=1200&q=80',
      'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=1200&q=80',
    ], 
    alt: 'A serene river flowing through a valley at sunrise.', 
    width: 1200, 
    height: 800,
    title: 'Sunrise Over the Valley',
    description: 'This shot was taken during the early morning golden hour, capturing the tranquil beauty of the river as it winds through the misty valley. The challenge was to balance the bright sun with the deep shadows of the landscape, creating a dynamic yet peaceful composition.'
  },
  { 
    id: 2, 
    images: ['https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?w=800&q=80'], 
    alt: 'Sunlight streaming into a modern train station platform.', 
    width: 800, 
    height: 1200,
    title: 'Morning Commute',
    description: 'An exploration of light and architecture, this photo captures the fleeting moment of sunrise in a busy train station. The long lines and reflective surfaces create a sense of movement and anticipation, turning a mundane daily scene into something cinematic.'
   },
  { 
    id: 3, 
    images: ['https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?w=800&q=80'], 
    alt: 'An artistically lit room with hanging plants.', 
    width: 800, 
    height: 1067,
    title: 'Urban Jungle',
    description: 'A project focused on interior spaces that blend nature with modern design. This image highlights the interplay between natural light, artificial light, and greenery, creating a cozy and inviting atmosphere. The goal was to make the space feel alive and vibrant.'
   },
  { 
    id: 4, 
    images: [
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1200&q=80',
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=80',
      'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200&q=80',
    ], 
    alt: 'A winding road through a lush green forest landscape.', 
    width: 1200, 
    height: 800,
    title: 'The Road Less Traveled',
    description: 'This aerial shot captures the feeling of adventure and escape. The winding road serves as a visual guide, leading the viewer\'s eye through the dense, verdant forest. It represents a journey into the unknown and the beauty of nature untouched.'
   },
  { 
    id: 5, 
    images: ['https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80'], 
    alt: 'A breathtaking mountain landscape with a lake reflection.', 
    width: 1200, 
    height: 801,
    title: 'Mountain Mirror',
    description: 'Patience was key for this photograph. Waiting for the perfect moment when the wind died down allowed for a crystal-clear reflection of the majestic mountains in the glacial lake, creating a perfectly symmetrical and awe-inspiring image.'
   },
  { 
    id: 6, 
    images: ['https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?w=800&q=80'], 
    alt: 'Close-up of a vintage camera on a wooden surface.', 
    width: 800, 
    height: 533,
    title: 'Analog Dreams',
    description: 'A tribute to the art of film photography. This still life composition focuses on the textures and timeless design of a vintage camera, evoking a sense of nostalgia and appreciation for the craft. The warm, soft lighting adds to the classic feel.'
   },
  { 
    id: 7, 
    images: ['https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&q=80'], 
    alt: 'A field of bright yellow flowers in full bloom.', 
    width: 800, 
    height: 1200,
    title: 'Field of Gold',
    description: 'This image is all about capturing the vibrancy and energy of nature. The shallow depth of field isolates a single flower, drawing the viewer in, while the sea of yellow in the background creates an overwhelming sense of joy and warmth.'
   },
  { 
    id: 8, 
    images: ['https://images.unsplash.com/photo-1511203369169-633a1a97e174?w=800&q=80'], 
    alt: 'A misty forest path with tall trees shrouded in fog.', 
    width: 800, 
    height: 1200,
    title: 'Into the Mist',
    description: 'A moody and atmospheric shot taken on a foggy morning. The towering trees disappear into the mist, creating a sense of mystery and solitude. The path invites the viewer to step into the frame and explore the quiet, ethereal beauty of the forest.'
   },
];