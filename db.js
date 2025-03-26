import { db } from './firebase.js';
import { serverTimestamp, collection, addDoc, getDocs, query, orderBy } from "firebase/firestore";

// Add a new item to the "items" collection
export async function addItem(item) {
    try {
        const docRef = await addDoc(collection(db, 'items'), {
            ...item,
            timestamp: serverTimestamp()
        });
        return docRef.id;
    } catch (error) {
        throw new Error("Error adding item: " + error.message);
    }
}

// Fetch all items from the "items" collection
export async function getItems() {
    const q = query(collection(db, 'items'), orderBy('timestamp', 'desc'));
    try {
        const querySnapshot = await getDocs(q);
        const items = [];
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            items.push({
                id: doc.id,
                ...data,
                timestamp: data.timestamp?.toDate?.() || new Date()
            });
        });
        return items;
    } catch (error) {
        throw new Error("Error fetching items: " + error.message);
    }
}