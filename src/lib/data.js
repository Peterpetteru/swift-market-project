// This file is our "single source of truth" for all product information.
export const coffeeProducts = [
  { 
    id: 1, 
    name: 'Morning Rise Blend', 
    slug: 'morning-rise-blend', 
    description: 'A bright and balanced blend to start your day.', 
    price: '$16.00', 
    // THE CHANGE: Update this path to match your first image in the /public folder
    imageUrl: '/morningriseblend.jpg', 
    detailImageUrl: '/morningriseblend.jpg', 
    tastingNotes: ['Milk Chocolate', 'Citrus', 'Caramel'], 
    origin: 'Sidamo, Ethiopia', 
    roastLevel: 'Medium' 
  },
  { 
    id: 2, 
    name: 'Midnight Espresso', 
    slug: 'midnight-espresso', 
    description: 'A dark, rich roast perfect for a bold espresso shot.', 
    price: '$18.00', 
    // THE CHANGE: Update this path to match your second image
    imageUrl: '/midnightespresso.jpg', 
    detailImageUrl: '/midnightespresso.jpg', 
    tastingNotes: ['Dark Cocoa', 'Molasses', 'Toasted Almond'], 
    origin: 'Serra do Salitre, Brazil', 
    roastLevel: 'Dark' 
  },
  { 
    id: 3, 
    name: 'Sunset Decaf', 
    slug: 'sunset-decaf', 
    description: 'All the flavor without the caffeine. Smooth and mellow.', 
    price: '$17.00', 
    // THE CHANGE: Update this path to match your third image
    imageUrl: '/sunsetdecaf.jpeg', 
    detailImageUrl: '/sunsetdecaf.jpeg', 
    tastingNotes: ['Walnut', 'Brown Sugar', 'Cinnamon'], 
    origin: 'Tolima, Colombia', 
    roastLevel: 'Medium' 
  }
];

// Your blog post data can also live here
export const posts = [
  // ... (blog post data)
];

