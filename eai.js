const emergencyNumbers = {
    police: "112",
    ambulance: "912",
    fire: "111",
    traffic: "113",
    marine: "110",
    rib: "166",
    gbv: "3512",
    child: "116",
    wildlife: "125"
};

const emergencyContacts = {
    "King Faisal Hospital": "+250 788 123 456",
    "Rwanda Military Hospital": "+250 788 654 321",
    "Kigali Central Police Station": "+250 788 111 222"
};

const GEOAPIFY_API_KEY = import.meta.env.VITE_GEOAPIFY_API_KEY;

const injectEmergencyAi = () => {
    const navbarNav = document.querySelector(".navbar-nav");
    if (navbarNav) {
        const navItem = document.createElement("li");
        navItem.classList.add("nav-item");
        navItem.innerHTML = `<a class="nav-link" href="#" id="emergency-ai-toggle">Emergency AI</a>`;
        navbarNav.appendChild(navItem);
    }

    const modalContainer = document.createElement("div");
    modalContainer.innerHTML = `
        <div class="modal" id="emergencyAiModal" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header emergency-header">
                        <h5 class="modal-title">Emergency AI</h5>
                        <button type="button" class="modal-close" id="emergency-ai-close">&times;</button>
                    </div>
                    <div class="modal-body">
                        <div class="chat-body" id="emergency-ai-messages">
                            <div class="message bot-message">
                                Hello! I can help you find emergency numbers or addresses in Rwanda. Ask me something like "police number" or "hospital in Kigali".
                            </div>
                        </div>
                        <div class="chat-footer">
                            <div class="input-group">
                                <input type="text" class="form-input" id="emergency-ai-input" placeholder="Type your query...">
                                <button type="button" class="btn btn-danger" id="emergency-ai-submit">Send</button>
                            </div>
                            <div id="emergency-ai-input-error" class="invalid-feedback"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modalContainer);

    const toggle = document.getElementById("emergency-ai-toggle");
    const modal = document.getElementById("emergencyAiModal");
    const close = document.getElementById("emergency-ai-close");
    toggle.addEventListener("click", (e) => {
        e.preventDefault();
        modal.classList.add("show");
    });
    close.addEventListener("click", () => modal.classList.remove("show"));
};

function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
              Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

async function getUserLocation() {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) reject(new Error("Geolocation not supported"));
        navigator.geolocation.getCurrentPosition(
            position => resolve({ lat: position.coords.latitude, lon: position.coords.longitude }),
            error => reject(new Error(`Location access denied: ${error.message}`))
        );
    });
}

async function fetchEmergencyUnits(category, location, userCoords = null) {
    try {
        if (!GEOAPIFY_API_KEY) throw new Error("Geoapify API key missing");
        const geocodeUrl = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(location)}&apiKey=${GEOAPIFY_API_KEY}`;
        const geocodeResponse = await fetch(geocodeUrl);
        if (!geocodeResponse.ok) throw new Error(`Geocoding failed: ${await geocodeResponse.text()}`);
        const geocodeData = await geocodeResponse.json();
        if (!geocodeData.features.length) throw new Error(`Location "${location}" not found`);
        
        const [lon, lat] = geocodeData.features[0].geometry.coordinates;
        const placesUrl = `https://api.geoapify.com/v2/places?categories=${category}&filter=circle:${lon},${lat},10000&limit=5&apiKey=${GEOAPIFY_API_KEY}`;
        const placesResponse = await fetch(placesUrl);
        if (!placesResponse.ok) throw new Error(`Places API failed: ${await placesResponse.text()}`);
        const placesData = await placesResponse.json();

        if (!placesData.features.length) return [];
        return placesData.features.map(feature => {
            const props = feature.properties;
            const distance = userCoords ? calculateDistance(userCoords.lat, userCoords.lon, props.lat, props.lon) : null;
            return {
                name: props.name || "Unnamed",
                lat: props.lat,
                lon: props.lon,
                address: props.formatted || "Address not available",
                phone: emergencyContacts[props.name] || null,
                distance
            };
        }).sort((a, b) => a.distance - b.distance);
    } catch (error) {
        console.error("Error fetching emergency units:", error);
        throw error;
    }
}

function addChatMessage(content, isUser = false) {
    const messagesContainer = document.getElementById("emergency-ai-messages");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", isUser ? "user-message" : "bot-message");
    messageDiv.innerHTML = content;
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

async function handleEmergencyQuery(query) {
    const lowerQuery = query.toLowerCase().trim();
    if (lowerQuery.includes("number") || lowerQuery.includes("phone")) {
        for (const [key, number] of Object.entries(emergencyNumbers)) {
            if (lowerQuery.includes(key)) {
                addChatMessage(`The ${key} number in Rwanda is ${number}. <a href="tel:${number}" class="contact-link">Call Now</a>`);
                return;
            }
        }
        addChatMessage("I can provide numbers for police, ambulance, fire, etc. Specify a service or ask for 'all emergency numbers'.");
        return;
    }

    let category = null;
    let location = "Kigali, Rwanda";
    if (lowerQuery.includes("hospital") || lowerQuery.includes("clinic")) category = "healthcare.hospital";
    else if (lowerQuery.includes("police")) category = "amenity.police";
    else if (lowerQuery.includes("fire")) category = "amenity.fire_station";

    const locationMatch = lowerQuery.match(/(?:in|near|at)\s+([a-zA-Z\s,]+)/i);
    if (locationMatch) location = locationMatch[1].trim();
    else if (lowerQuery.includes("near me")) {
        try {
            const userLocation = await getUserLocation();
            const units = await fetchEmergencyUnits(category, "Kigali, Rwanda", userLocation);
            addChatMessage(units.length ? units.map(u => `<b>${u.name}</b>: ${u.address} (${u.distance.toFixed(1)} km)`).join("<br>") : "No results found.");
            return;
        } catch (error) {
            addChatMessage("Location access needed or specify a place (e.g., 'hospital in Kigali').");
            return;
        }
    }

    if (category) {
        const units = await fetchEmergencyUnits(category, location);
        addChatMessage(units.length ? units.map(u => `<b>${u.name}</b>: ${u.address}${u.phone ? `, <a href="tel:${u.phone}" class="contact-link">${u.phone}</a>` : ''}`).join("<br>") : `No ${category.split('.').pop()}s found in ${location}.`);
    } else {
        addChatMessage("Ask about emergency numbers or locations (e.g., 'police number', 'hospital in Kigali').");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    injectEmergencyAi();
    const emergencyAiModal = document.getElementById("emergencyAiModal");
    const emergencyAiInput = document.getElementById("emergency-ai-input");
    const emergencyAiSubmit = document.getElementById("emergency-ai-submit");
    const emergencyAiInputError = document.getElementById("emergency-ai-input-error");

    emergencyAiModal.addEventListener('click', (e) => {
        if (e.target === emergencyAiModal) emergencyAiModal.classList.remove("show");
    });

    emergencyAiSubmit.addEventListener("click", async () => {
        const query = emergencyAiInput.value.trim();
        if (!query) {
            emergencyAiInput.classList.add("is-invalid");
            emergencyAiInputError.textContent = "Please type something.";
            return;
        }
        emergencyAiInput.classList.remove("is-invalid");
        emergencyAiInputError.textContent = "";
        addChatMessage(query, true);
        emergencyAiInput.value = "";
        emergencyAiSubmit.disabled = true;
        emergencyAiSubmit.classList.add("loading");
        await handleEmergencyQuery(query);
        emergencyAiSubmit.disabled = false;
        emergencyAiSubmit.classList.remove("loading");
    });

    emergencyAiInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") emergencyAiSubmit.click();
    });
});