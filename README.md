# Lost & Found Tracker

![Lost & Found Tracker Banner](banner.png)  
*A platform to help you recover lost items, reunite found items with their owners, and access emergency services in Rwanda.*

## 📖 Project Overview

The **Lost & Found Tracker** is a web application designed to address the real-world problem of losing or finding items by providing a platform where users can report lost or found items, search for matches, and visualize item locations on an interactive map. Built with a focus on user experience, the app combines intuitive design with powerful features to connect communities and solve everyday challenges. Additionally, it includes an innovative **Emergency AI** feature that provides real-time assistance by offering emergency contact numbers and locating nearby services (e.g., hospitals, police stations) in Rwanda.

This project was developed as part of a university assignment to create a meaningful application that utilizes external APIs, enables user interaction with data, and is deployed on web servers with a load balancer. The app goes beyond basic functionality by offering practical value, robust error handling, and performance optimizations like API caching.

### ✨ Key Features

- **Report Lost or Found Items**: Easily report items you’ve lost or found with detailed descriptions, including title, date, location, contact info, and optional images.
- **Search and Filter**: Search for items by keyword (e.g., "keys") and filter by status ("lost" or "found") to quickly find matches.
- **Interactive Map**: View item locations on a Leaflet-powered map, with popups showing item details and a list of pinned addresses.
- **Emergency AI**: A real-time chat assistant that provides emergency contact numbers (e.g., police, ambulance) and locates nearby services (e.g., hospitals in Kigali) using the Geoapify API.
- **Responsive Design**: Access the app seamlessly on any device—desktop, tablet, or mobile.
- **Error Handling**: Comprehensive error handling for API failures, with user-friendly feedback via alerts and chat messages.
- **Performance Optimization**: API caching for geocoding requests to reduce load times and respect rate limits.

### 🎥 Demo Video

Watch a demo of the Lost & Found Tracker in action: [Demo Video Link](https://www.youtube.com/watch?v=your-demo-video-link)  


## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Framework**: Vite (for building and bundling)
- **APIs**:
    - Geoapify API (for geocoding and finding emergency services)
    - Nominatim API (for geocoding item locations)
    - Mapbox API (fallback for geocoding)
    - Firebase Firestore (for storing and retrieving lost/found items)
- **Libraries**:
    - Leaflet (for interactive maps)
- **Deployment**: Nginx web servers (Web01, Web02) with a load balancer (Lb01)

## 🚀 Local Setup Instructions

Follow these steps to set up and run the Lost & Found Tracker on your local machine.

### Prerequisites

- **Node.js** (v16 or higher) and **npm** installed on your machine.
- A Firebase project set up with Firestore enabled.
- API keys for:
    - Geoapify (for Emergency AI)
    - Mapbox (for geocoding fallback)

### Steps

1. **Clone the Repository**  
     Clone this repository to your local machine:
     ```bash
     git clone https://github.com/your-username/lost-and-found-tracker.git
     cd lost-and-found-tracker
     ```

2. **Install Dependencies**  
     Install the required npm packages:
     ```bash
     npm install
     ```

3. **Set Up Environment Variables**  
     Create a `.env` file in the project root and add the following environment variables:
     ```env
     VITE_GEOAPIFY_API_KEY=your-geoapify-api-key-here
     VITE_MAPBOX_API_KEY=your-mapbox-api-key-here
     VITE_FIREBASE_API_KEY=your-firebase-api-key-here
     VITE_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
     VITE_FIREBASE_PROJECT_ID=your-firebase-project-id
     VITE_FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
     VITE_FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
     VITE_FIREBASE_APP_ID=your-firebase-app-id
     VITE_FIREBASE_MEASUREMENT_ID=your-firebase-measurement-id
     ```
     Replace the placeholders with your actual API keys and Firebase configuration values.  
     **Note:** Do not commit the `.env` file to GitHub. It’s already included in `.gitignore` to prevent accidental exposure of sensitive information.

4. **Run the Development Server**  
     Start the Vite development server:
     ```bash
     npm run dev
     ```
     The app will be available at `http://localhost:3000`. Open this URL in your browser to interact with the app locally.

5. **Build for Production (Optional)**  
     To create a production-ready build:
     ```bash
     npx vite build
     ```
     The built files will be in the `dist` directory. You can preview the production build locally:
     ```bash
     npx vite preview
     ```

## 🌐 Deployment Instructions

The Lost & Found Tracker is deployed on two web servers (Web01 and Web02) with a load balancer (Lb01) to distribute traffic. Below are the steps to replicate the deployment.

### Prerequisites

- Two web servers (e.g., Web01 and Web02) running Ubuntu with Nginx installed.
- A load balancer (e.g., Lb01) running Ubuntu with Nginx configured for load balancing.
- SSH access to all servers.
- A domain name (e.g., `www.dk0de.tech`) pointing to the load balancer’s IP address.

### Deployment Steps

1. **Build the Project Locally**  
     On your local machine, build the project to generate the `dist` directory:
     ```bash
     npx vite build
     ```

2. **Commit the Built Files to GitHub**  
     The `dist` directory is included in the repository for deployment purposes:
     ```bash
     git add dist
     git commit -m "Add production build for deployment"
     git push origin main
     ```

3. **Deploy to Web01**  
     SSH into Web01 and deploy the app:
     ```bash
     ssh ubuntu@<web01-ip>
     cd /home/ubuntu
     git clone https://github.com/your-username/lost-and-found-tracker.git
     cd lost-and-found-tracker
     sudo cp -r dist/* /var/www/html/
     sudo chmod -R 644 /var/www/html/*
     sudo chown -R www-data:www-data /var/www/html
     ```

4. **Deploy to Web02**  
     Repeat the process on Web02:
     ```bash
     ssh ubuntu@<web02-ip>
     cd /home/ubuntu
     git clone https://github.com/your-username/lost-and-found-tracker.git
     cd lost-and-found-tracker
     sudo cp -r dist/* /var/www/html/
     sudo chmod -R 644 /var/www/html/*
     sudo chown -R www-data:www-data /var/www/html
     ```

5. **Configure the Load Balancer (Lb01)**  
     Update the Nginx configuration on Lb01:
     ```nginx
     upstream backend {
             server <web01-ip>:80;
             server <web02-ip>:80;
     }

     server {
             listen 80;
             server_name www.dk0de.tech;

             location / {
                     proxy_pass http://backend;
                     proxy_set_header Host $host;
                     proxy_set_header X-Real-IP $remote_addr;
                     proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                     proxy_set_header X-Forwarded-Proto $scheme;
             }
     }
     ```
     Test and reload Nginx:
     ```bash
     sudo nginx -t
     sudo systemctl reload nginx
     ```

6. **Test the Deployment**  
     Access the app at `https://www.dk0de.tech`. Verify that all features work as expected.

### Security Notes

- **API Keys**: Restrict API keys to the domain `https://www.dk0de.tech` in their respective dashboards.
- **Firebase Security**: Firestore security rules are set to allow public reads but restrict writes to authenticated users.

## 📜 API and Resource Attribution

The Lost & Found Tracker relies on several external APIs and libraries. We are grateful to the developers and organizations behind these resources:

- **Geoapify API**: Used for geocoding and finding nearby emergency services.
- **Nominatim API**: Used for geocoding item locations.
- **Mapbox API**: Fallback geocoding service.
- **Firebase Firestore**: Cloud database for storing and retrieving lost/found items.
- **Leaflet**: JavaScript library for interactive maps.
- **OpenStreetMap**: Map tiles for the Leaflet map.
- **Vite**: Build tool for bundling and serving the app.

## 📝 License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## 👤 About the Creator

I’m Divine Ifechukwude (Ebitech), a passionate developer and student at ALU, pursuing a Bachelor’s Degree in Software Engineering. With 3 years of experience in full-stack development, UI/UX design, and artificial intelligence, I’m dedicated to building solutions that make a difference. Connect with me:

- **GitHub (ALU Projects)**: [d-k0de](https://github.com/d-k0de)
- **GitHub (Professional Projects)**: [Ebi-Tech](https://github.com/Ebi-Tech)
- **Behance**: [ebitech](https://www.behance.net/ebitech)
- **Instagram**: [drealebitech](https://www.instagram.com/drealebitech)
- **LinkedIn**: [ebi-tech](https://www.linkedin.com/in/ebi-tech)

© 2025 Lost & Found Tracker by ebitech. All rights reserved.
