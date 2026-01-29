# MeScia 26 - Technical Symposium Website

## 🎨 Overview

A modern, animated, high-impact event website built with **React** and **Vite**, featuring a **Breaking Bad** inspired theme with dark cinematic UI, neon green accents, and smooth animations.

## 🚀 Features

### Visual Design
- **Breaking Bad Theme**: Dark cinematic UI with black, deep green, and neon acid-green highlights
- **Chemical Smoke Effects**: Animated floating particles creating a lab atmosphere
- **Glitch Effects**: Periodic glitch animations on key elements
- **Neon Pulses**: Glowing effects on interactive elements
- **Chemical Patterns**: Hex grid background with molecular aesthetics

### Animations
- ✨ Smooth scroll-based animations using Intersection Observer API
- ✨ Staggered card reveals
- ✨ Animated countdown timer
- ✨ Marquee scrolling text
- ✨ Hover effects with neon glow
- ✨ Button pulse animations
- ✨ Timeline animations with glowing nodes

### Sections

#### 1. **Hero Section**
- Large title: "MeScia – 26"
- Subtitle and tagline
- **Live Countdown Timer** (Days, Hours, Minutes, Seconds)
- Animated CTA button: "Explore Events"
- Chemical smoke background effect

#### 2. **Marquee**
- Infinite scrolling text: "MeScia 26 • INNOVATE • CREATE • COMPETE • LEARN •"

#### 3. **About Section**
- Purpose & Goals
- Who Can Participate
- What to Expect
- Event Details (Organizer, Date, Duration)
- Animated cards with hover effects

#### 4. **Events Section**
- **Filterable Tabs**: All, Technical, Non-Technical
- **Technical Events**:
  - Paper Presentation (11:00 AM)
  - Project Presentation (01:30 PM)
  - Coding Challenge (C/C++/Java/Python)
  - Marketing Talks (11:30 AM)
  - Tech Quiz (02:00 PM)
- **Non-Technical Events**:
  - FreeFire Tournament (10:30 AM)
  - IPL Auction (01:00 PM)
  - Carnival Chaos (02:00 PM)
- Each event card shows: Type, Time, Team Size, Description
- Live badge with blinking animation

#### 5. **Schedule Section**
- Vertical timeline with glowing nodes
- Time-based schedule:
  - 08:45 – 09:30: Registration
  - 09:30 – 10:00: Inauguration
  - 10:00 – 01:00: Technical Track
  - 01:00 – 02:00: Lunch Break
  - 02:00 – 04:00: Skills & Innovation Track
  - 04:00 – 05:00: Valedictory
- Animated timeline items

#### 6. **Guidelines Section**
- Terminal-style cards with macOS-like window controls
- 10 important guidelines:
  - Reporting Time
  - ID Card Required
  - Personal Devices
  - Mobile Protocol
  - Code of Conduct
  - Registration Pass
  - Formal Attire
  - Lunch & Refreshments
  - Certificates
  - Technical Support

#### 7. **Team Section**
- Animated profile cards
- Team members:
  - **Rithanya Paramashivam** - Student Coordinator
  - **Naveen Kumar** - Student Coordinator
  - **Prof. Arumugam** - Faculty Mentor & Event Convenor
- Contact icons with hover effects (Email, Phone)

#### 8. **Registration Section**
- Large animated "Register Now" button
- Links to Google Form (placeholder URL)
- Radial gradient background

#### 9. **Footer**
- Event description
- Quick navigation links
- Contact details
- Social media icons
- Copyright notice

### Navigation
- **Sticky Navbar**: Smooth scrolling to sections
- **Mobile Responsive**: Hamburger menu for mobile devices
- **Scroll Effect**: Navbar background changes on scroll

## 🛠️ Tech Stack

- **React 19.2.0** - UI Framework
- **Vite 5.4.11** - Build Tool & Dev Server
- **GSAP 3.14.2** - Animation Library (optional, currently using CSS animations)
- **Vanilla CSS** - Styling with custom properties
- **Google Fonts**: Bebas Neue, Rajdhani, Orbitron

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Color Palette

```css
--bb-black: #0a0a0a          /* Primary background */
--bb-dark: #1a1a1a           /* Secondary background */
--bb-green: #0bda51          /* Primary green */
--bb-acid-green: #39ff14     /* Neon accent */
--bb-deep-green: #004d1a     /* Dark green */
--bb-neon-green: #00ff41     /* Bright neon */
--bb-text: #e0e0e0           /* Primary text */
--bb-text-dim: #a0a0a0       /* Secondary text */
--bb-danger: #ff3333         /* Alert/Live badge */
```

## 📁 Project Structure

```
Website-MeScia/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Marquee.jsx
│   │   ├── About.jsx
│   │   ├── Events.jsx
│   │   ├── Schedule.jsx
│   │   ├── Guidelines.jsx
│   │   ├── Team.jsx
│   │   ├── Registration.jsx
│   │   ├── Footer.jsx
│   │   └── SmokeEffect.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## 🎯 Key Features Implementation

### Countdown Timer
- Real-time countdown to February 27, 2026
- Updates every second
- Formatted with leading zeros
- Orbitron font for digital display aesthetic

### Scroll Animations
- Intersection Observer API for performance
- Fade-in effects on sections
- Staggered card animations
- Slide-in effects for timeline items
- Smooth transitions with CSS

### Responsive Design
- Mobile-first approach
- Breakpoint at 768px
- Hamburger menu for mobile
- Adjusted timeline for mobile view
- Flexible grid layouts

### SEO Optimization
- Proper meta tags
- Open Graph tags
- Descriptive title and description
- Semantic HTML structure
- Unique IDs for all sections

## 🎬 Animations

### CSS Animations
- `pulse` - Hero background pulsing effect
- `buttonPulse` - CTA button glow animation
- `marquee` - Infinite scrolling text
- `blink` - Live badge blinking
- `dotPulse` - Timeline node pulsing
- `float` - Smoke particle floating
- `glitch` - Text glitch effect

### Scroll Animations
- `fade-in` - Opacity and translateY
- `slide-in-left` - Slide from left
- `slide-in-right` - Slide from right
- `stagger-item` - Delayed fade-in

## 🔧 Customization

### Update Event Date
Edit `src/components/Hero.jsx`:
```javascript
const targetDate = new Date('2026-02-27T00:00:00').getTime();
```

### Update Registration Form URL
Edit `src/components/Registration.jsx`:
```javascript
window.open('YOUR_GOOGLE_FORM_URL', '_blank');
```

### Update Team Information
Edit `src/components/Team.jsx` to add/modify team members.

### Update Contact Details
Edit `src/components/Footer.jsx` for contact information.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎨 Typography

- **Bebas Neue**: Headings and titles (bold, blocky, scientific feel)
- **Rajdhani**: Body text (clean, modern, technical)
- **Orbitron**: Countdown timer and special elements (futuristic, digital)

## 🌟 Performance

- Optimized animations using CSS transforms
- Intersection Observer for efficient scroll detection
- Minimal JavaScript for better performance
- Lazy loading of animations
- Efficient CSS with custom properties

## 📝 License

This project is created for MeScia 26 - Department of Computer Technology – PG

## 🎉 Event Details

- **Event Name**: MeScia – 26
- **Type**: One-Day Inter College Technical Symposium
- **Date**: February 27, 2026
- **Time**: 08:45 AM - 05:00 PM
- **Organized By**: Department of Computer Technology – PG
- **Tagline**: Ignite Your Skills. Inspire Your Future.

## 🚀 Deployment

The website can be deployed to:
- **Vercel** (Recommended)
- **Netlify**
- **GitHub Pages**
- **Firebase Hosting**

### Deploy to Vercel
```bash
npm run build
npx vercel --prod
```

## 📞 Support

For any issues or questions, contact:
- Email: mescia26@example.com
- Phone: +91 98765 43210

---

**Built with ❤️ and 💚 for MeScia 26**
