import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDTp17mp34dX47aQBswgGWTyzimOJawrbg",
  authDomain: "tradey-86d5c.firebaseapp.com",
  projectId: "tradey-86d5c",
  storageBucket: "tradey-86d5c.appspot.com",
  messagingSenderId: "1042076341500",
  appId: "1:1042076341500:web:d716dddff66c58e652f379",
  measurementId: "G-YBXWY1GY4D"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function generateSampleItems(count) {
  const items = [];
  const statuses = ['lost', 'found'];
  const types = ['wallet', 'phone', 'keys', 'jewelry', 'laptop', 'backpack', 'glasses', 'watch'];
  const locations = [
    'Main Campus - Building A', 
    'Library - 2nd Floor', 
    'Cafeteria - North Side',
    'Parking Lot - Section B',
    'Sports Complex',
    'Student Center'
  ];
  
  const descriptions = [
    'Black leather wallet containing ID and credit cards',
    'iPhone 13 with blue silicone case - cracked screen',
    'Set of 5 keys on a red keychain with car fob',
    'Silver necklace with heart-shaped pendant',
    'Dell XPS laptop in black case',
    'North Face backpack with books inside',
    'Ray-Ban aviator sunglasses in case',
    'Apple Watch Series 7 - space gray',
    'Brown leather passport holder',
    'Calculus textbook with notes inside',
    'Wireless AirPods Pro in charging case',
    'Umbrella with wooden handle'
  ];

  const emotionalPhrases = [
    'Please help me find this!',
    'Reward offered for return!',
    'This has sentimental value',
    'Desperately need this back',
    'Contains important documents',
    'Would mean the world to me'
  ];

  for (let i = 0; i < count; i++) {
    const status = statuses[Math.floor(Math.random() * statuses.length)];
    const type = types[Math.floor(Math.random() * types.length)];
    const daysAgo = Math.floor(Math.random() * 30);
    const reportDate = new Date();
    reportDate.setDate(reportDate.getDate() - daysAgo);
    
    const formattedDate = `${String(reportDate.getDate()).padStart(2, '0')}/${String(reportDate.getMonth() + 1).padStart(2, '0')}/${reportDate.getFullYear()}`;
    
    // 30% chance to add emotional phrase
    const baseDescription = descriptions[Math.floor(Math.random() * descriptions.length)];
    const fullDescription = Math.random() < 0.3 
      ? `${baseDescription}. ${emotionalPhrases[Math.floor(Math.random() * emotionalPhrases.length)]}` 
      : baseDescription;
    
    items.push({
      title: `${type.charAt(0).toUpperCase() + type.slice(1)} ${status === 'lost' ? 'Lost' : 'Found'} - ${formattedDate}`,
      description: fullDescription,
      status: status,
      item_type: type,
      timestamp: serverTimestamp(),
      report_date: reportDate.toISOString().split('T')[0],
      location_desc: locations[Math.floor(Math.random() * locations.length)],
      contact_info: `user${i+1}@example.com`,
      image_link: Math.random() < 0.4 ? getRandomImageUrl(type) : ''
    });
  }
  return items;
}

function getRandomImageUrl(itemType) {
  const images = {
    wallet: 'https://example.com/images/wallet.jpg',
    phone: 'https://example.com/images/phone.jpg',
    keys: 'https://example.com/images/keys.jpg',
    jewelry: 'https://example.com/images/jewelry.jpg',
    laptop: 'https://example.com/images/laptop.jpg',
    backpack: 'https://example.com/images/backpack.jpg',
    glasses: 'https://example.com/images/glasses.jpg',
    watch: 'https://example.com/images/watch.jpg'
  };
  return images[itemType] || '';
}

async function seedDatabase() {
  try {
    console.log('Starting database seeding...');
    const itemsRef = collection(db, 'items');
    const sampleItems = generateSampleItems(20); // Now generates 20 items
    
    for (const item of sampleItems) {
      const docRef = await addDoc(itemsRef, item);
      console.log(`✅ Added: ${item.title} (ID: ${docRef.id})`);
      
      // Auto-detect urgent items (30% chance)
      if (Math.random() < 0.3) {
        const urgentRef = collection(db, 'urgent');
        await addDoc(urgentRef, {
          ...item,
          sentimentScore: -0.5 - Math.random() * 0.5 // Random score between -0.5 and -1
        });
        console.log(`🚨 Marked as urgent: ${item.title}`);
      }
    }
    
    console.log('🎉 Database seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();