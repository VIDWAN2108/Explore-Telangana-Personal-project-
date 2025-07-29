const mongoose = require('mongoose');
const Place = require('./models/Place');

mongoose.connect('mongodb://127.0.0.1:27017/yatraDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seedPlaces = [
  {
    name: "Charminar",
    description: "Iconic 16th-century mosque with four grand arches.",
    bestTimeToVisit: "October to March",
    timings: "9:00 AM - 5:30 PM",
    image: "charminar.jpeg",
    location: { lat: 17.3616, lng: 78.4747 }
  },
  {
    name: "Golconda Fort",
    description: "Historic fortress known for acoustic architecture.",
    bestTimeToVisit: "November to February",
    timings: "9:00 AM - 5:30 PM",
    image: "golconda.jpeg",
    location: { lat: 17.3833, lng: 78.4011 }
  },
  {
    name: "Hussain Sagar",
    description: "Heart-shaped lake with a large Buddha statue.",
    bestTimeToVisit: "Evenings throughout the year",
    timings: "8:00 AM - 10:00 PM",
    image: "hussainsagar.jpeg",
    location: { lat: 17.4239, lng: 78.4738 }
  },
  {
    name: "Nagarjuna Sagar Dam",
    description: "Massive dam and reservoir with scenic views.",
    bestTimeToVisit: "August to December",
    timings: "9:00 AM - 6:00 PM",
    image: "nagarjunasagardam.jpeg",
    location: { lat: 16.5401, lng: 79.3187 }
  },
  {
    name: "Warangal Fort",
    description: "Ancient fort with impressive stone architecture.",
    bestTimeToVisit: "October to March",
    timings: "10:00 AM - 5:00 PM",
    image: "warangalfort.jpeg",
    location: { lat: 17.9784, lng: 79.5941 }
  },
  {
    name: "Yadagirigutta",
    description: "Sacred temple town known for the Sri Lakshmi Narasimha Swamy Temple.",
    bestTimeToVisit: "October to March",
    timings: "4:00 AM - 9:45 PM",
    image: "yadagirigutta.jpeg",
    location: { lat: 17.5642, lng: 78.9430 }
  },
  {
    name: "Vemulawada",
    description: "Popular pilgrimage town known for Sri Raja Rajeshwara Swamy temple.",
    bestTimeToVisit: "October to March",
    timings: "4:00 AM - 9:00 PM",
    image: "vemulawada.jpeg",
    location: { lat: 18.4657, lng: 78.8680 }
  },
  {
    name: "Thousand Pillar Temple",
    description: "Historical Kakatiya temple known for its intricately carved pillars and architecture.",
    bestTimeToVisit: "October to March",
    timings: "6:00 AM - 8:00 PM",
    image: "thousandpillar.jpeg",
    location: { lat: 17.9788, lng: 79.5920 }
  },
  {
    name: "Ramoji Film City",
    description: "One of the world’s largest film studio complexes, offering tours and entertainment.",
    bestTimeToVisit: "October to March",
    timings: "9:00 AM - 5:30 PM",
    image: "ramojifilmcity.jpeg",
    location: { lat: 17.2543, lng: 78.6816 }
  },
   {
    name: "Ramappa Temple",
    description: "UNESCO World Heritage Site known for intricate Kakatiya-era architecture.",
    bestTimeToVisit: "October to February",
    timings: "9:00 AM - 5:00 PM",
    image: "ramappa.jpeg",
    location: { lat: 18.2323, lng: 79.9434 }
  },
  {
    name: "Papikondalu",
    description: "Scenic hill range along the Godavari River, best explored via river cruises.",
    bestTimeToVisit: "October to January",
    timings: "6:00 AM - 6:00 PM (cruise timings vary)",
    image: "papikondalu.jpeg",
    location: { lat: 17.4721, lng: 81.0765 }
  },
  {
    name: "Kuntala Falls",
    description: "Telangana’s highest waterfall nestled amidst the Sahyadri mountain range.",
    bestTimeToVisit: "August to December",
    timings: "9:00 AM - 5:00 PM",
    image: "kuntalafalls.jpeg",
    location: { lat: 19.1235, lng: 78.5563 }
  },
    {
    name: "Bhadrachalam Temple",
    description: "A famous Hindu temple dedicated to Lord Rama, located on the banks of River Godavari.",
    bestTimeToVisit: "October to March",
    timings: "5:00 AM - 12:00 PM, 3:00 PM - 9:00 PM",
    image: "bhadrachalam_temple.jpeg",
    location: { lat: 17.6683, lng: 80.8880 }
  },
   {
    name: "Elgandal Fort",
    description: "A historic hilltop fort offering panoramic views and ancient architectural features.",
    bestTimeToVisit: "November to February",
    timings: "9:00 AM - 5:00 PM",
    image: "elgandalfort.jpeg",
    location: { lat: 18.2648, lng: 78.1284 }
  },
  {
    name: "Basar Saraswathi Temple",
    description: "Famous temple dedicated to Goddess Saraswathi, known for Aksharabhyasam ritual.",
    bestTimeToVisit: "October to March",
    timings: "4:00 AM - 8:30 PM",
    image: "basar.jpeg",
    location: { lat: 18.8768, lng: 77.9668 }
  },
  {
    name: "Medak Fort",
    description: "Historic fort offering panoramic views, built during the Kakatiya dynasty.",
    bestTimeToVisit: "October to February",
    timings: "9:00 AM - 5:00 PM",
    image: "medakfort.jpeg",
    location: { lat: 18.0452, lng: 78.2608 }
  },
  {
    name: "Medaram Jatara",
    description: "Asia's largest tribal festival held in Medaram every two years in honor of tribal deities.",
    bestTimeToVisit: "February (during Jatara)",
    timings: "Open during festival days",
    image: "medaram.jpeg",
    location: { lat: 18.4124, lng: 80.4955 }
  },
  {
    name: "Pocharam Wildlife Sanctuary",
    description: "A serene wildlife sanctuary ideal for birdwatching and nature walks.",
    bestTimeToVisit: "November to March",
    timings: "8:30 AM - 5:30 PM",
    image: "pocharam.jpeg",
    location: { lat: 18.0422, lng: 78.0536 }
  },
   {
    name: "Ethipothala Waterfalls",
    description: "Beautiful waterfall formed by Chandravanka River near Nagarjuna Sagar.",
    bestTimeToVisit: "July to December",
    timings: "9:00 AM - 6:00 PM",
    image: "ethipothala.jpeg",
    location: { lat: 16.5364, lng: 79.2411 }
  },
  {
    name: "Birla Mandir",
    description: "Beautiful white marble temple dedicated to Lord Venkateshwara, offering panoramic city views.",
    bestTimeToVisit: "October to March",
    timings: "7:00 AM - 12:00 PM, 3:00 PM - 9:00 PM",
    image: "birlatemple.jpeg",
    location: { lat: 17.4062, lng: 78.4691 }
  },
  {
    name: "Chilkur Balaji Temple",
    description: "Also known as the 'Visa God' temple, it's one of the few temples in India without a donation box.",
    bestTimeToVisit: "October to March",
    timings: "6:00 AM - 6:00 PM",
    image: "chilkur.jpeg",
    location: { lat: 17.3980, lng: 78.3167 }
  },
  {
    name: "Nehru Zoological Park",
    description: "One of India’s largest zoos, home to over 1500 species with safari rides and boating.",
    bestTimeToVisit: "October to March",
    timings: "8:00 AM - 5:00 PM (Closed on Mondays)",
    image: "nehruzoo.jpeg",
    location: { lat: 17.3525, lng: 78.4511 }
  },
  {
    name: "Tank Bund",
    description: "Scenic promenade along Hussain Sagar Lake with statues of Telugu luminaries.",
    bestTimeToVisit: "Evenings, October to March",
    timings: "Open all day",
    image: "tankbund.jpeg",
    location: { lat: 17.4236, lng: 78.4737 }
  },
  {
    name: "Lumbini Park",
    description: "Urban park with musical fountains, boat rides to Buddha statue, and kids' rides.",
    bestTimeToVisit: "October to February",
    timings: "9:00 AM - 9:00 PM",
    image: "lumbini.jpeg",
    location: { lat: 17.4120, lng: 78.4696 }
  },
  {
    name: "Salar Jung Museum",
    description: "One of the largest art museums in India, with a global collection of artifacts and antiques.",
    bestTimeToVisit: "October to March",
    timings: "10:00 AM - 5:00 PM (Closed on Fridays)",
    image: "salarjung.jpeg",
    location: { lat: 17.3713, lng: 78.4804 }
  },
  {
    name: "Snow World",
    description: "India's first snow-themed amusement park with artificial snow, games, and slides.",
    bestTimeToVisit: "All year round",
    timings: "11:00 AM - 9:00 PM",
    image: "snowworld.jpeg",
    location: { lat: 17.4101, lng: 78.4761 }
  },
  {
  name: "Kondagattu Anjaneya Swamy Temple",
  description: "A popular hilltop temple dedicated to Lord Hanuman, surrounded by scenic hills and valleys.",
  bestTimeToVisit: "October to March",
  timings: "6:00 AM - 8:30 PM",
  image: "kondagattu.jpeg",
  location: { lat: 18.7623, lng: 78.8924 }
}
];

async function seedDB() {
  await Place.deleteMany({});
  await Place.insertMany(seedPlaces);
  console.log("Database seeded!");
  mongoose.connection.close();
}

seedDB();
