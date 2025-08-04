# KET Store Mobile App

A modern, full-stack mobile shopping application built with **React Native (Expo)** and **Node.js (Express)**. KET Store delivers a seamless shopping experience for everyday essentials, featuring secure authentication, intuitive navigation, and a responsive design.

---

## 🚀 Features

- **User Authentication**  
  Secure sign-up & login with CEO-issued access pins.
- **Product Catalog**  
  Browse curated categories: combs, mirrors, pegs, and more.
- **Wishlist & Favorites**  
  Save items for later with one-tap favorites.
- **Order History**  
  Track past purchases and delivery status.
- **Responsive UI**  
  Optimized for iOS, Android, and web with adaptive layouts.
- **FAQ & Support**  
  In-app help center and direct WhatsApp support.

---

## 🛠️ Tech Stack

| Layer        | Technology                     |
|--------------|--------------------------------|
| **Frontend** | React Native (Expo SDK 53)     |
| **Backend**  | Node.js + Express              |
| **Routing**  | Expo Router v5                 |
| **Styling**  | StyleSheet + LinearGradient    |
| **Icons**    | @expo/vector-icons             |
| **Fonts**    | SpaceMono & system fonts       |

---

## 📱 Screenshots

| Welcome Screen | Product List | Wishlist |
|----------------|--------------|----------|
| ![welcome]     | ![products]  | ![wish]  |

---

## 🏁 Quick Start

### Prerequisites
- Node.js ≥ 18
- Expo CLI (`npm i -g expo-cli`)
- Android Studio / Xcode (optional for emulators)

### 1. Clone & Install
```bash
git clone https://github.com/your-org/ket-store-mobile.git
cd ket-store-mobile
```

### 2. Backend Setup
```bash
cd backend
npm install
npm start        # Runs on http://localhost:3000
```

### 3. Frontend Setup
```bash
cd frontend/Ket_Store
npm install
expo start       # Scan QR with Expo Go
```

---

## 🧪 Available Scripts

| Command           | Description               |
|-------------------|---------------------------|
| `expo start`      | Start Metro bundler       |
| `expo android`    | Run on Android emulator   |
| `expo ios`        | Run on iOS simulator      |
| `expo lint`       | Run ESLint                |
| `npm test`        | Backend test placeholder  |

---

## 📁 Project Structure

```
ket-store-mobile/
├── backend/
│   ├── package.json
│   └── index.js
├── frontend/
│   └── Ket_Store/
│       ├── app/
│       │   ├── (tabs)/          # Main navigation
│       │   ├── menu/             # Profile, wishlist, etc.
│       │   ├── shopping/         # Product pages
│       │   └── navigations/      # Header & footer
│       ├── assets/
│       ├── components/
│       └── constants/
├── README.md
```

---

## 🔐 Environment Variables

Create `.env` in `backend/`:

```env
PORT=3000
```

---

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

MIT © [KET Dynasty Enterprise](mailto:info@ketdynasty.com)