// mapview.js

/* Map Variables */
let map = null;
let markers = [];
let addresses = []; // Store full addresses for display
const geocache = new Map(); // In-memory cache for geocoded locations

// Load cached geocoded locations from localStorage
const loadGeocache = () => {
    const cached = localStorage.getItem('geocache');
    if (cached) {
        const parsed = JSON.parse(cached);
        for (const [key, value] of Object.entries(parsed)) {
            geocache.set(key, value.coords);
            addresses.push({ address: key, fullAddress: value.fullAddress, coords: value.coords });
        }
    }
};

// Save geocoded locations to localStorage
const saveGeocache = () => {
    const cacheObject = {};
    geocache.forEach((coords, address) => {
        const addr = addresses.find(a => a.address === address);
        cacheObject[address] = { coords, fullAddress: addr ? addr.fullAddress : address };
    });
    localStorage.setItem('geocache', JSON.stringify(cacheObject));
};

/* Map Initialization */
export function initMap() {
    if (map) return; // Map already initialized

    // Load cached geocoded locations
    loadGeocache();

    // Center on Kigali, Rwanda by default
    map = L.map('map').setView([1.9441, 30.0619], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Initialize address list with a placeholder
    const addressList = document.getElementById('address-list');
    if (addressList) {
        addressList.innerHTML = '<h4>Pinned Locations</h4><p>No locations to display. Perform a search to see pinned locations.</p>';
    }
}

/* Delay Function for Nominatim Rate Limiting */
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

/* Geocoding Function */
async function geocodeAddress(address) {
    if (geocache.has(address)) {
        return geocache.get(address);
    }

    // Try Nominatim first
    try {
        const nominatimUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json&limit=1&addressdetails=1`;
        const nominatimResponse = await fetch(nominatimUrl, {
            headers: {
                'User-Agent': 'LostAndFoundTracker/1.0 (your-email@example.com)' // Replace with your email
            }
        });
        const nominatimData = await nominatimResponse.json();

        if (nominatimData.length > 0) {
            const { lat, lon, display_name } = nominatimData[0];
            const coords = [parseFloat(lat), parseFloat(lon)];
            geocache.set(address, coords);
            addresses.push({ address, fullAddress: display_name, coords });
            saveGeocache();
            return coords;
        }
    } catch (error) {
        console.warn(`Nominatim geocoding failed for "${address}":`, error);
    }

    // Fallback to Mapbox
    try {
        const mapboxApiKey = import.meta.env.VITE_MAPBOX_API_KEY;
        const mapboxUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${mapboxApiKey}`;
        const mapboxResponse = await fetch(mapboxUrl);
        const mapboxData = await mapboxResponse.json();

        if (mapboxData.features && mapboxData.features.length > 0) {
            const [lon, lat] = mapboxData.features[0].center;
            const fullAddress = mapboxData.features[0].place_name;
            const coords = [lat, lon];
            geocache.set(address, coords);
            addresses.push({ address, fullAddress, coords });
            saveGeocache();
            return coords;
        }
    } catch (error) {
        console.error(`Mapbox geocoding failed for "${address}":`, error);
    }

    return null; // Return null if both services fail
}

/* Map Update Function */
export async function updateMap(items) {
    // Clear existing markers
    markers.forEach(marker => marker.remove());
    markers = [];

    // Get unique locations to geocode
    const uniqueLocations = [...new Set(items.map(item => item.location_desc).filter(Boolean))];

    // Geocode all unique locations with rate limiting for Nominatim
    for (let i = 0; i < uniqueLocations.length; i++) {
        const address = uniqueLocations[i];
        await geocodeAddress(address);
        if (i < uniqueLocations.length - 1) {
            await delay(1000); // 1-second delay between Nominatim requests
        }
    }

    // Map items to their geocoded locations
    const locations = new Map(); // Map of coordinates to items (for grouping)
    for (const item of items) {
        const address = item.location_desc;
        if (!address) continue;

        const coords = geocache.get(address);
        if (!coords) continue;

        const key = coords.join(',');
        if (!locations.has(key)) {
            locations.set(key, []);
        }
        locations.get(key).push(item);
    }

    // Add markers for each unique location
    const bounds = [];
    locations.forEach((items, coordsKey) => {
        const [lat, lon] = coordsKey.split(',').map(parseFloat);
        const popupContent = items.map(item => `
            <b>${item.title}</b><br>
            ${item.description || 'No description'}
        `).join('<hr>');
        const marker = L.marker([lat, lon]).addTo(map).bindPopup(popupContent);
        markers.push(marker);
        bounds.push([lat, lon]);
    });

    // Fit map to bounds if there are markers
    if (bounds.length > 0) {
        map.fitBounds(bounds, { padding: [50, 50] });
    } else {
        // Reset to default view if no markers
        map.setView([1.9441, 30.0619], 13);
    }

    // Update address list under the map
    const addressList = document.getElementById('address-list');
    if (addressList) {
        addressList.innerHTML = '<h4>Pinned Locations</h4>';
        if (locations.size === 0) {
            addressList.innerHTML += '<p>No locations to display. Perform a search to see pinned locations.</p>';
        } else {
            const pinnedAddresses = [];
            locations.forEach((_, coordsKey) => {
                const addr = addresses.find(a => a.coords.join(',') === coordsKey);
                if (addr) {
                    pinnedAddresses.push(addr.fullAddress);
                }
            });

            if (pinnedAddresses.length > 0) {
                const ul = document.createElement('ul');
                pinnedAddresses.forEach(fullAddress => {
                    const li = document.createElement('li');
                    li.textContent = fullAddress;
                    ul.appendChild(li);
                });
                addressList.appendChild(ul);
            } else {
                addressList.innerHTML += '<p>No addresses found for the pinned locations.</p>';
            }
        }
    }
}