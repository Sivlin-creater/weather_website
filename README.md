# 🌤️ Sivlin's Weather Dashboard

A modern, responsive weather dashboard built with **HTML, CSS, and JavaScript**. It displays real-time weather information for multiple cities around the world and provides weather-related news updates.

The application also includes **PWA (Progressive Web App)** functionality, allowing users to install it on supported devices and use cached weather data when offline.

## 🌍 Live Demo

🚀 Hosted with Vercel:

https://weather-website-eta-gules.vercel.app


## ✨ Features

- 🌡️ Real-time weather information
- 🌍 Weather for multiple cities
- 💨 Wind speed information
- 💧 Humidity information
- ☀️ Dynamic weather icons
- 🌧️ Weather condition descriptions
- 📰 Weather news and updates
- 🔄 Manual refresh button
- ⏱️ Automatic weather refresh every 30 minutes
- 💾 Local weather data caching
- 📡 Offline mode
- 📱 Responsive design for mobile and desktop
- 📲 PWA installation support
- 🌐 Works directly in modern web browsers

## 🏙️ Supported Cities

The dashboard currently displays weather information for:

| City | Country |
|---|---|
| Siem Reap | 🇰🇭 Cambodia |
| Phnom Penh | 🇰🇭 Cambodia |
| New York | 🇺🇸 USA |
| Beijing | 🇨🇳 China |
| Sydney | 🇦🇺 Australia |

## 🛠️ Technologies Used

- **HTML5** – Website structure
- **CSS3** – Styling and responsive layout
- **JavaScript** – Application logic and API requests
- **Open-Meteo API** – Weather data
- **RSS2JSON API** – Weather news feed
- **LocalStorage** – Offline weather data caching
- **Service Worker** – PWA and offline support
- **Web App Manifest** – PWA installation
- **Git & GitHub** – Version control
- **Vercel** – Website hosting

## 📁 Project Structure

```text
weather/
│
├── index.html       # Main application
├── manifest.json    # PWA configuration
└── sw.js            # Service Worker for offline support
