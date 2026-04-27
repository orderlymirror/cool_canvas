const products = [
  {
    id: 1,
    title: "Vibrant Cosmos",
    artist: "Elena Rivers",
    price: 15000,
    category: "abstract",
    image: "images/painting_abstract1.png",
    isNew: true,
    isSold: false,
    featured: true,
    trending: true,
    desc: "A mesmerizing abstract piece capturing the chaos and beauty of the cosmos using vibrant blues, purples, and gold."
  },
  {
    id: 2,
    title: "Golden Hour Forest",
    artist: "Marcus Chen",
    price: 22500,
    category: "landscape",
    image: "images/painting_landscape1.png",
    isNew: false,
    isSold: false,
    featured: true,
    trending: false,
    desc: "A stunning watercolor landscape painting of a magical forest with glowing flowers and misty mountains in the background."
  },
  {
    id: 3,
    title: "Floral Muse",
    artist: "Sarah Jennings",
    price: 18000,
    category: "portrait",
    image: "images/painting_portrait1.png",
    isNew: true,
    isSold: false,
    featured: true,
    trending: true,
    desc: "An elegant impressionist style portrait of a woman surrounded by colorful flowers, featuring rich warm colors."
  },
  {
    id: 4,
    title: "Vintage Bloom",
    artist: "David Thompson",
    price: 12000,
    category: "still-life",
    image: "images/painting_still_life1.png",
    isNew: false,
    isSold: true,
    featured: false,
    trending: true,
    desc: "A beautiful still life oil painting with colorful flowers in a vase, inspired by classic Dutch masters."
  },
  {
    id: 5,
    title: "Geometric Dream",
    artist: "Alex Vance",
    price: 9500,
    category: "abstract",
    image: "images/painting_abstract2.png",
    isNew: false,
    isSold: false,
    featured: false,
    trending: true,
    desc: "Vibrant geometric abstract painting with bold shapes and color blocking in pink, teal, yellow and deep purple."
  },
  {
    id: 6,
    title: "Crashing Waves",
    artist: "Nina Patel",
    price: 28000,
    category: "landscape",
    image: "images/painting_landscape2.png",
    isNew: true,
    isSold: false,
    featured: true,
    trending: false,
    desc: "A dramatic oil painting of crashing ocean waves at sunset, featuring deep cobalt blue and warm orange-red skies."
  },
  {
    id: 7,
    title: "Feline Fantasy",
    artist: "Yuki Tanaka",
    price: 8500,
    category: "modern",
    image: "images/painting_modern1.png",
    isNew: false,
    isSold: false,
    featured: false,
    trending: true,
    desc: "A whimsical modern art painting with a cute cat and flowers in a surrealist dreamy style with soft pastel colors."
  },
  {
    id: 8,
    title: "Fauvist Youth",
    artist: "James Wilson",
    price: 16500,
    category: "portrait",
    image: "images/painting_portrait2.png",
    isNew: true,
    isSold: false,
    featured: false,
    trending: false,
    desc: "A colorful expressive portrait painting with bold outlines and saturated colors inspired by Fauvism."
  },
  {
    id: 9,
    title: "Neon Pulse",
    artist: "Ravi K.",
    price: 35000,
    category: "digital",
    image: "images/painting_digital1.png",
    isNew: true,
    isSold: false,
    featured: true,
    trending: true,
    desc: "A stunning digital art painting of a futuristic cyberpunk city at night with neon lights reflecting on wet streets."
  },
  {
    id: 10,
    title: "Cosmic Isle",
    artist: "Luna Blue",
    price: 42000,
    category: "digital",
    image: "images/painting_digital2.png",
    isNew: true,
    isSold: false,
    featured: false,
    trending: false,
    desc: "A surreal digital art painting of a floating island in a cosmic sky with nebula clouds."
  },
  {
    id: 11,
    title: "Wisdom Lines",
    artist: "Samuel Grey",
    price: 14000,
    category: "sketch",
    image: "images/painting_sketch1.png",
    isNew: false,
    isSold: false,
    featured: false,
    trending: true,
    desc: "A professional charcoal sketch portrait of an elderly person with expressive wrinkles and deep-set eyes."
  },
  {
    id: 12,
    title: "Old Town Echo",
    artist: "Samuel Grey",
    price: 18500,
    category: "sketch",
    image: "images/painting_sketch2.png",
    isNew: true,
    isSold: false,
    featured: false,
    trending: false,
    desc: "A detailed pencil sketch of a narrow European cobblestone street with old buildings and flowers on balconies."
  },
  {
    id: 13,
    title: "Silent Path",
    artist: "Elena Rivers",
    price: 11000,
    category: "minimalist",
    image: "images/painting_minimalist1.png",
    isNew: false,
    isSold: false,
    featured: true,
    trending: false,
    desc: "A minimalist fine art painting with simple elegant black brushstrokes on a warm off-white canvas."
  },
  {
    id: 14,
    title: "Horizon Split",
    artist: "Alex Vance",
    price: 13500,
    category: "minimalist",
    image: "images/painting_minimalist2.png",
    isNew: true,
    isSold: false,
    featured: false,
    trending: true,
    desc: "A color field minimalist painting with two large blocks of soothing colors: sage green and soft terracotta."
  },
  {
    id: 15,
    title: "Electric Smile",
    artist: "Pop Guru",
    price: 26000,
    category: "pop-art",
    image: "images/painting_popart1.png",
    isNew: true,
    isSold: false,
    featured: true,
    trending: true,
    desc: "A vibrant pop art portrait of a smiling person with bold black outlines and bright flat colors."
  },
  {
    id: 16,
    title: "Cobalt Dreams",
    artist: "Nina Kraviz",
    price: 18500,
    category: "abstract",
    image: "images/painting_abstract3.png",
    isNew: true,
    isSold: false,
    featured: false,
    trending: true,
    desc: "A mesmerizing abstract piece dominated by deep cobalt blues and shimmering silver accents."
  },
  {
    id: 17,
    title: "Mountain Retreat",
    artist: "David O. Silva",
    price: 32000,
    category: "landscape",
    image: "images/painting_landscape3.png",
    isNew: false,
    isSold: false,
    featured: true,
    trending: false,
    desc: "A stunningly realistic landscape showing a serene mountain cabin nestled between autumn trees."
  },
  {
    id: 18,
    title: "Vintage Gaze",
    artist: "Clara Monét",
    price: 45000,
    category: "portrait",
    image: "images/painting_portrait3.png",
    isNew: false,
    isSold: true,
    featured: false,
    trending: true,
    desc: "A classical style portrait of a woman looking away, capturing a profound sense of nostalgia."
  },
  {
    id: 19,
    title: "Morning Bloom",
    artist: "Emma Stoneart",
    price: 12000,
    category: "still-life",
    image: "images/painting_still_life2.png",
    isNew: true,
    isSold: false,
    featured: false,
    trending: false,
    desc: "A delicate still life of freshly picked morning flowers in a rustic clay vase."
  },
  {
    id: 20,
    title: "Geometric Chaos",
    artist: "Ian Wright",
    price: 21500,
    category: "modern",
    image: "images/painting_modern2.png",
    isNew: true,
    isSold: false,
    featured: true,
    trending: true,
    desc: "A strikingly modern composition where chaotic splashes of color are contained within strict geometric boundaries."
  },
  {
    id: 21,
    title: "Vaporwave Nights",
    artist: "Synth Lord",
    price: 19500,
    category: "digital",
    image: "images/painting_digital3.png",
    isNew: true,
    isSold: false,
    featured: true,
    trending: true,
    desc: "A nostalgic retro-futuristic digital painting with 80s vaporwave aesthetics, neon grids, and a glowing sunset."
  },
  {
    id: 22,
    title: "Enchanted Koi",
    artist: "Mei Lin",
    price: 31000,
    category: "watercolor",
    image: "images/painting_watercolor1.png",
    isNew: true,
    isSold: false,
    featured: false,
    trending: true,
    desc: "A fluid and peaceful watercolor painting of koi fishes swimming gracefully amongst glowing lotus flowers."
  },
  {
    id: 23,
    title: "Urban Grit",
    artist: "J.D. Banks",
    price: 27500,
    category: "modern",
    image: "images/painting_streetart1.png",
    isNew: false,
    isSold: true,
    featured: false,
    trending: false,
    desc: "A raw and powerful modern art piece blending street art styles with traditional oil painting techniques."
  },
  {
    id: 24,
    title: "Soft Solitude",
    artist: "Clara Monét",
    price: 15000,
    category: "minimalist",
    image: "images/painting_minimalist3.png",
    isNew: true,
    isSold: false,
    featured: true,
    trending: false,
    desc: "A beautiful minimalist exploration of space using soft gradients and a single bold focal point."
  },
  {
    id: 25,
    title: "Golden Horizon",
    artist: "William Turner Jr.",
    price: 32000,
    category: "landscape",
    image: "images/painting_landscape4.png",
    isNew: true,
    isSold: false,
    featured: false,
    trending: true,
    desc: "A breathtakingly realistic oil painting of a golden sunset over a calm ocean, warm golden hour lighting."
  },
  {
    id: 26,
    title: "Neon Genesis",
    artist: "Ryu Cyber",
    price: 18500,
    category: "digital",
    image: "images/painting_digital4.png",
    isNew: true,
    isSold: false,
    featured: true,
    trending: false,
    desc: "A striking cyberpunk digital painting of a futuristic city alleyway lit by neon lights, vibrant pinks and cyan."
  },
  {
    id: 27,
    title: "Velvet Silence",
    artist: "Elena Rostova",
    price: 29000,
    category: "abstract",
    image: "images/painting_abstract4.png",
    isNew: true,
    isSold: false,
    featured: false,
    trending: true,
    desc: "A rich and moody abstract painting with deep velvet reds and dark maroons blending into black, highly textured impasto style."
  }
];

function getProducts() {
  return products;
}

function getFeaturedProducts() {
  return products.filter(p => p.featured);
}

function getTrendingProducts() {
  return products.filter(p => p.trending);
}

function getProductsByCategory(cat) {
  if (!cat || cat === 'all') return products;
  return products.filter(p => p.category === cat);
}

function getProductById(id) {
  return products.find(p => p.id === parseInt(id));
}

function searchProducts(query) {
  const q = query.toLowerCase();
  return products.filter(p => 
    p.title.toLowerCase().includes(q) || 
    p.artist.toLowerCase().includes(q) || 
    p.category.toLowerCase().includes(q)
  );
}

// Format currency
function formatPrice(price) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(price);
}
