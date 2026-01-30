# MeScia 2k26 - Technical Symposium Website

## 🎨 Overview

**MeScia 2k26** is the official website for the One-Day Inter-College Technical Symposium organized by the *Department of Computer Technology – PG* at *Kongu Engineering College*. The site features an immersive, **Oppenheimer-themed** design with a dark industrial aesthetic, neon orange/yellow signatures, and high-performance 3D animations.

This project uses modern web technologies to deliver a cinematic user experience, including a 3D nuclear core simulation, an interactive dossier flipbook for events, and a seamless star-field background.

---

## 🚀 Key Features

### **1. Immersive Hero Section**
- **3D Nuclear Core**: An interactive React Three Fiber scene featuring a pulsing radioactive core and rotating containment ring.
- **Glitch Text**: Dynamic text effects on the main title ("MeScia – 26") and the "Oppenheimer" quote.
- **Countdown Timer**: A "Detonation Countdown" ticking down to **Feb 27, 2026**.

### **2. Interactive Event Dossier**
- **Virtual Flipbook**: A realistic page-flipping experience (using `react-pageflip`) to browse through technical and non-technical events.
- **Dossier Aesthetic**: Styled like classified files ("CONFIDENTIAL", "TOP SECRET") fitting the theme.
- **Responsive Mobile View**: Automatically switches to a vertical scroll layout on smaller screens for better usability.

### **3. Mobile Optimization**
- **Adaptive 3D Scene**: The 3D background adjusts its complexity, particle count, and resolution based on device capabilities (mobile vs. desktop) to ensure smooth 60fps performance.
- **Touch-Friendly**: Smooth scrolling (`Lenis`) is selectively disabled on mobile for a native, lag-free touch experience.

### **4. General Aesthetics**
- **Star Field Background**: A full-screen field of floating, rotating stars providing depth.
- **Smooth Scrolling**: Implemented with **Lenis** for a premium feel on desktop.
- **Theme Colors**: 
  - 🟠 **Nuclear Orange**: `#ff6700`
  - 🟡 **Radioactive Gold**: `#ffb700`
  - ⚫ **Void Black**: `#0a0a0a`

---

## 🛠️ Tech Stack

### **Core Frameworks**
- **React 19**: Component-based UI architecture.
- **Vite**: Ultra-fast build tool and development server.

### **Graphics & Animations**
- **Three.js** & **React Three Fiber (@react-three/fiber)**: For rendering the 3D nuclear core and star background.
- **@react-three/drei**: Useful helpers for camera controls, geometries, and materials.
- **GSAP (GreenSock)**: Powerful timeline-based animations for the Hero text entrance.
- **Framer Motion**: Smooth enter/exit animations for UI elements.
- **React PageFlip**: For the realistic book-turning effect in the Events section.
- **Lenis**: For buttery smooth inertia scrolling on desktop.

### **Styling**
- **CSS3 / SCSS**: Custom styles with CSS Variables for consistent theming.
- **Google Fonts**:
  - *Bebas Neue*: For bold, industrial headings.
  - *Orbitron*: For digital counters and tech elements.
  - *Rajdhani*: For futuristic body text.

---

## 📂 Project Structure

```
e:\MeScia\MeScia2k26\
├── src\
│   ├── components\
│   │   ├── ThreeScene.jsx       # 3D Nuclear Core animation
│   │   ├── StarBackground.jsx   # Full-screen star particles
│   │   ├── Events.jsx           # Flipbook component
│   │   ├── Hero.jsx             # Main landing section
│   │   ├── Footer.jsx           # Footer with contact info
│   │   └── ... (Other sections)
│   ├── App.jsx                  # Main Layout & lenis scroll setup
│   ├── index.css                # Global styles & animations
│   └── main.jsx                 # Entry point
└── package.json                 # Dependencies
```

---

## ⚡ Performance Optimizations

1.  **Mobile-First 3D**:
    -   Reduced particle counts (500 → 150) on mobile.
    -   Lowered icosahedron geometry detail (15 → 4 segments).
    -   Disabled real-time shadows and expensive lighting on mobile.
    -   Capped pixel ratio (DPR) to 1 on mobile devices.

2.  **Efficient Rendering**:
    -   Use of `React.memo` and `useMemo` to prevent unnecessary re-renders of heavy 3D components.
    -   Conditionals in `App.jsx` to prevent loading smooth scroll libraries on touch devices.

---

## 📦 Installation & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

**Designed with 🧪 by Madhan P**
