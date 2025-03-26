import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTp17mp34dX47aQBswgGWTyzimOJawrbg",
  authDomain: "tradey-86d5c.firebaseapp.com",
  projectId: "tradey-86d5c",
  storageBucket: "tradey-86d5c.firebasestorage.app",
  messagingSenderId: "1042076341500",
  appId: "1:1042076341500:web:d716dddff66c58e652f379",
  measurementId: "G-YBXWY1GY4D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Sample data generator
function generateSampleItems(count) {
  const items = [];
  const statuses = ['lost', 'found'];
  const types = ['wallet', 'phone', 'keys', 'jewelry', 'clothing', 'other'];
  const locations = ['Main Campus', 'Library', 'Cafeteria', 'Parking Lot'];
  const descriptions = [
    'Black leather wallet with cards inside',
    'iPhone with blue case',
    'Set of keys with keychain',
    'Silver necklace with pendant',
    'Blue hoodie with logo'
  ];

  for (let i = 0; i < count; i++) {
    const status = statuses[Math.floor(Math.random() * statuses.length)];
    const type = types[Math.floor(Math.random() * types.length)];
    const daysAgo = Math.floor(Math.random() * 30);
    const reportDate = new Date();
    reportDate.setDate(reportDate.getDate() - daysAgo);
    
    const formattedDate = `${String(reportDate.getDate()).padStart(2, '0')}/${String(reportDate.getMonth() + 1).padStart(2, '0')}/${reportDate.getFullYear()}`;
    
    items.push({
      title: `${type.charAt(0).toUpperCase() + type.slice(1)} ${status === 'lost' ? 'Lost' : 'Found'} - ${formattedDate}`,
      description: descriptions[Math.floor(Math.random() * descriptions.length)],
      status: status,
      item_type: type,
      timestamp: serverTimestamp(),
      report_date: reportDate.toISOString().split('T')[0],
      location_desc: locations[Math.floor(Math.random() * locations.length)],
      contact_info: `user${i+1}@example.com`,
      image_link: ''
    });
  }
  return items;
}

async function seedDatabase() {
  try {
    console.log('Starting database seeding...');
    const itemsRef = collection(db, 'items');
    const sampleItems = generateSampleItems(5); // Generate 5 sample items
    
    for (const item of sampleItems) {
      const docRef = await addDoc(itemsRef, item);
      console.log(`✅ Added: ${item.title} (ID: ${docRef.id})`);
    }
    
    console.log('🎉 Database seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
}

// Run the seeder
seedDatabase();