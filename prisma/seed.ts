// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.listing.deleteMany();

  const userIds = [
    '67c7396eb9a503dc055a3687',
    '67de79e5c86df6f235b6623c',
    '67de7aa759dbeb0672dd45fc'
  ];

  const listings = [
    {
      title: 'Beachfront Villa in Malibu',
      description: 'Luxury oceanfront property with breathtaking views.',
      imageSrc: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511',
      category: 'Beach',
      locationValue: 'US',
      guestCount: 6,
      roomCount: 3,
      bathroomCount: 2,
      price: 950,
      userId: userIds[0]
    },
    {
      title: 'Ski Chalet in Aspen',
      description: 'Cozy wooden lodge nestled in the snowy mountains.',
      imageSrc: 'https://res.cloudinary.com/diw78exzl/image/upload/v1742639801/5_eneqdk.avif',
      category: 'Skiing',
      locationValue: 'US',
      guestCount: 5,
      roomCount: 3,
      bathroomCount: 2,
      price: 850,
      userId: userIds[1]
    },
    {
      title: 'Jungle Treehouse in Costa Rica',
      description: 'A unique stay high up in the treetops.',
      imageSrc: 'https://res.cloudinary.com/diw78exzl/image/upload/v1742639799/6_dsj17v.webp',
      category: 'Forest',
      locationValue: 'CR',
      guestCount: 2,
      roomCount: 1,
      bathroomCount: 1,
      price: 320,
      userId: userIds[2]
    },
    {
      title: 'Private Island Getaway',
      description: 'An entire island to yourself with stunning beaches.',
      imageSrc: 'https://res.cloudinary.com/diw78exzl/image/upload/v1742639798/7_y4l8ng.webp',
      category: 'Islands',
      locationValue: 'PH',
      guestCount: 10,
      roomCount: 5,
      bathroomCount: 4,
      price: 1400,
      userId: userIds[0]
    },
    {
      title: 'Santorini Cliffside Villa',
      description: 'Romantic views over the caldera with a private pool.',
      imageSrc: 'https://res.cloudinary.com/diw78exzl/image/upload/v1742639796/8_m1djme.jpg',
      category: 'Lux',
      locationValue: 'GR',
      guestCount: 4,
      roomCount: 2,
      bathroomCount: 2,
      price: 670,
      userId: userIds[1]
    },
    {
      title: 'Countryside Farmhouse in Tuscany',
      description: 'Charming estate surrounded by vineyards.',
      imageSrc: 'https://res.cloudinary.com/diw78exzl/image/upload/v1742639796/9_mgcfdv.jpg',
      category: 'Vineyards',
      locationValue: 'IT',
      guestCount: 5,
      roomCount: 3,
      bathroomCount: 2,
      price: 540,
      userId: userIds[2]
    },
    {
      title: 'Lake Cabin in British Columbia',
      description: 'Peaceful lakeside retreat with a hot tub.',
      imageSrc: 'https://res.cloudinary.com/diw78exzl/image/upload/v1742639795/10_yivfj9.jpg',
      category: 'Lake',
      locationValue: 'CA',
      guestCount: 3,
      roomCount: 2,
      bathroomCount: 1,
      price: 350,
      userId: userIds[0]
    },
    {
      title: 'Modern Penthouse in Tokyo',
      description: 'City views from a sleek and spacious high-rise.',
      imageSrc: 'https://res.cloudinary.com/diw78exzl/image/upload/v1742639792/13_qabdkt.jpg',
      category: 'Modern',
      locationValue: 'JP',
      guestCount: 4,
      roomCount: 2,
      bathroomCount: 2,
      price: 770,
      userId: userIds[1]
    },
    {
      title: 'Barn Loft in the Midwest',
      description: 'Rustic living in a beautifully converted barn.',
      imageSrc: 'https://res.cloudinary.com/diw78exzl/image/upload/v1742639433/Bamboo-Home-Bali-Airbnb-Off-Grid-889x592_a70qvc.jpg',
      category: 'Barn',
      locationValue: 'US',
      guestCount: 2,
      roomCount: 1,
      bathroomCount: 1,
      price: 290,
      userId: userIds[2]
    },
    {
      title: 'Bohemian Hideout in Morocco',
      description: 'Colorful retreat with authentic vibes.',
      imageSrc: 'https://res.cloudinary.com/diw78exzl/image/upload/v1742639792/14_anct4z.avif',
      category: 'Countryside',
      locationValue: 'MA',
      guestCount: 4,
      roomCount: 2,
      bathroomCount: 2,
      price: 410,
      userId: userIds[0]
    },
  
      {
        title: "Countryside Farmhouse in Nice",
        description: "Adventure and comfort combined.",
        imageSrc: "https://res.cloudinary.com/diw78exzl/image/upload/v1742639433/57a113aa-57a6-4a54-b0ec-1c4e6ef70164.jpg_n1lh1s.avif",
        category: "Castles",
        locationValue: "FR",
        guestCount: 7,
        roomCount: 2,
        bathroomCount: 3,
        price: 790,
        userId: "67c7396eb9a503dc055a3687"
      },
      {
        title: "Mountain Retreat in Santorini",
        description: "Modern amenities in a rustic setting.",
        imageSrc: "https://res.cloudinary.com/diw78exzl/image/upload/v1742639794/11_miae5o.avif",
        category: "Lake",
        locationValue: "GR",
        guestCount: 8,
        roomCount: 1,
        bathroomCount: 3,
        price: 747,
        userId: "67de79e5c86df6f235b6623c"
      },
      {
        title: "Treehouse Stay in Nice",
        description: "Luxury stay with stunning views.",
        imageSrc: "https://res.cloudinary.com/diw78exzl/image/upload/v1742639798/7_y4l8ng.webp",
        category: "Barn",
        locationValue: "FR",
        guestCount: 6,
        roomCount: 1,
        bathroomCount: 2,
        price: 626,
        userId: "67de7aa759dbeb0672dd45fc"
      },
  ];
  

  for (const listing of listings) {
    await prisma.listing.create({ data: listing });
  }
}

main()
  .then(() => {
    console.log('Seeded listings!');
    return prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
