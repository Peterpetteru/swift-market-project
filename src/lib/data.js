export const coffeeProducts = [
  // ... your product data remains unchanged ...
  { id: 1, name: 'Morning Rise Blend', slug: 'morning-rise-blend', description: 'A bright and balanced blend to start your day.', price: '$16.00', imageUrl: '/morningriseblend.jpg', detailImageUrl: '/morningriseblend.jpg', tastingNotes: ['Milk Chocolate', 'Citrus', 'Caramel'], origin: 'Sidamo, Ethiopia', roastLevel: 'Medium' },
  { id: 2, name: 'Midnight Espresso', slug: 'midnight-espresso', description: 'A dark, rich roast perfect for a bold espresso shot.', price: '$18.00', imageUrl: '/midnightespresso.jpg', detailImageUrl: '/midnightespresso.jpg', tastingNotes: ['Dark Cocoa', 'Molasses', 'Toasted Almond'], origin: 'Serra do Salitre, Brazil', roastLevel: 'Dark' },
  { id: 3, name: 'Sunset Decaf', slug: 'sunset-decaf', description: 'All the flavor without the caffeine. Smooth and mellow.', price: '$17.00', imageUrl: '/sunsetdecaf.jpeg', detailImageUrl: '/sunsetdecaf.jpeg', tastingNotes: ['Walnut', 'Brown Sugar', 'Cinnamon'], origin: 'Tolima, Colombia', roastLevel: 'Medium' }
];

// THE CHANGE: All 'imageUrl' paths now point to your local images in the /public folder.
export const posts = [
  {
    id: 1,
    title: 'A Beginner’s Guide to Choosing the Perfect Coffee Beans',
    slug: 'choosing-perfect-coffee-beans',
    imageUrl: '/sunsetdecaf.jpeg', // <-- UPDATED
    excerpt: 'Stepping into the world of artisan coffee can be overwhelming. Arabica or Robusta? Light or dark roast? Let us demystify the process for you.',
    author: 'Petteru, Founder',
    date: 'October 3, 2025',
    readTime: '6 min read',
    content: `...` // Content remains the same
  },
  {
    id: 2,
    title: 'The 5 Most Popular Coffee Brewing Methods, Explained',
    slug: 'popular-coffee-brewing-methods',
    imageUrl: '/roastery-bg.jpg', // <-- UPDATED
    excerpt: 'From the classic French Press to the meticulous Pour-Over, the way you brew has a huge impact on the final taste. Let’s explore the most popular methods.',
    author: 'Petteru, Founder',
    date: 'September 28, 2025',
    readTime: '7 min read',
    content: `...` // Content remains the same
  },
  {
    id: 3,
    title: 'What Does "Single Origin" Actually Mean?',
    slug: 'what-is-single-origin-coffee',
    imageUrl: '/midnightespresso.jpg', // <-- UPDATED
    excerpt: 'You see it on bags in every specialty coffee shop, but what is single-origin coffee, and why does it matter for flavor?',
    author: 'Petteru, Founder',
    date: 'September 20, 2025',
    readTime: '4 min read',
    content: `...` // Content remains the same
  },
  {
    id: 4,
    title: '3 Easy & Delicious At-Home Coffee Recipes',
    slug: 'at-home-coffee-recipes',
    imageUrl: '/morningriseblend.jpg', // <-- UPDATED
    excerpt: 'Elevate your morning routine with these simple recipes that turn your daily brew into a café-quality treat.',
    author: 'Petteru, Founder',
    date: 'September 15, 2025',
    readTime: '5 min read',
    content: `...` // Content remains the same
  },
  {
    id: 5,
    title: 'A Brief History of Espresso',
    slug: 'brief-history-of-espresso',
    imageUrl: '/blog.jpeg', // <-- UPDATED
    excerpt: 'How a quest for speed in 19th-century Italy led to the creation of the world’s most iconic coffee beverage.',
    author: 'Petteru, Founder',
    date: 'September 10, 2025',
    readTime: '4 min read',
    content: `...` // Content remains the same
  }
];

