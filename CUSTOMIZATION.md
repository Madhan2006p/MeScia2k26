# Quick Customization Guide

## 🎯 Common Customizations

### 1. Change Event Date
**File**: `src/components/Hero.jsx`
```javascript
// Line 11
const targetDate = new Date('2026-02-27T00:00:00').getTime();
// Change to your event date
```

### 2. Update Registration Form
**File**: `src/components/Registration.jsx`
```javascript
// Line 4
window.open('https://forms.google.com/your-form-url', '_blank');
// Replace with your actual Google Form URL
```

### 3. Modify Team Members
**File**: `src/components/Team.jsx`
```javascript
// Lines 2-22
const teamMembers = [
  {
    name: 'Your Name',
    role: 'Your Role',
    initial: 'Y',
    email: 'your@email.com',
    phone: '+91 XXXXXXXXXX'
  },
  // Add more team members
];
```

### 4. Update Contact Information
**File**: `src/components/Footer.jsx`
```javascript
// Lines 27-31
<p>📧 your-email@example.com</p>
<p>📞 +91 XXXXXXXXXX</p>
<p>📍 Your Location</p>
<p>📅 Your Event Date</p>
<p>⏰ Your Event Time</p>
```

### 5. Change Color Scheme
**File**: `src/index.css`
```css
/* Lines 3-15 */
:root {
  --bb-black: #0a0a0a;
  --bb-green: #0bda51;
  --bb-acid-green: #39ff14;
  /* Modify these colors */
}
```

### 6. Add/Remove Events
**File**: `src/components/Events.jsx`
```javascript
// Lines 6-50
const events = [
  {
    id: 1,
    title: 'Event Name',
    type: 'technical', // or 'non-technical'
    time: '10:00 AM',
    teamSize: '2-4 members',
    description: 'Event description'
  },
  // Add more events
];
```

### 7. Modify Schedule
**File**: `src/components/Schedule.jsx`
```javascript
// Lines 2-9
const scheduleItems = [
  { 
    time: '08:45 – 09:30', 
    title: 'Registration', 
    description: 'Check-in and badge collection' 
  },
  // Add more schedule items
];
```

### 8. Update Guidelines
**File**: `src/components/Guidelines.jsx`
```javascript
// Lines 2-37
const guidelines = [
  {
    title: '⏰ Guideline Title',
    content: 'Guideline description'
  },
  // Add more guidelines
];
```

### 9. Change Social Media Links
**File**: `src/components/Footer.jsx`
```javascript
// Lines 40-45
<a href="https://facebook.com/yourpage" className="social-icon">📘</a>
<a href="https://twitter.com/yourhandle" className="social-icon">🐦</a>
<a href="https://instagram.com/yourhandle" className="social-icon">📷</a>
<a href="https://linkedin.com/company/yourpage" className="social-icon">💼</a>
```

### 10. Modify Hero Text & Glitch Effect
**File**: `src/components/Hero.jsx`
```javascript
// Lines 37-39
// vital: keep data-text same as content for glitch to work
<h1 className="hero-title glitch" data-text="Your Event Name">Your Event Name</h1>
<h2 className="hero-subtitle">Your Event Subtitle</h2>
```

### 11. Customizing Marquee Hazard
**File**: `src/index.css`
```css
/* Change hazard colors */
.marquee {
  border-top: 2px solid var(--bb-acid-green);
  /* ... */
}
```

## 🎨 Styling Tips

### Change Font
**File**: `src/index.css`
```css
/* Line 1 - Import new Google Font */
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap');

/* Apply to body */
body {
  font-family: 'YourFont', sans-serif;
}
```

### Adjust Animation Speed
**File**: `src/index.css`
```css
/* Find animation duration and modify */
animation: marquee 30s linear infinite;
/* Change 30s to your preferred speed */
```

### Disable Smoke Effect
**File**: `src/App.jsx`
```javascript
// Comment out or remove this line
<SmokeEffect />
```

## 🚀 Quick Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Install new dependency
npm install package-name

# Update dependencies
npm update
```

## 📝 Notes

- Always test changes in development mode before building
- Keep backups of original files before major changes
- Use browser DevTools to inspect and debug CSS
- Check console for any JavaScript errors
- Test on multiple devices and browsers

## 🎯 Best Practices

1. **Images**: Add images to `public/` folder and reference as `/image.jpg`
2. **Components**: Keep components small and focused
3. **CSS**: Use CSS variables for consistent theming
4. **Performance**: Minimize animations on mobile devices
5. **Accessibility**: Ensure proper contrast ratios and alt text

## 🔧 Troubleshooting

### Site not loading?
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Animations not working?
- Check browser compatibility
- Ensure JavaScript is enabled
- Clear browser cache

### Styling issues?
- Check CSS syntax
- Verify custom property names
- Inspect element in DevTools

---

**Need Help?** Check the main README.md for detailed documentation.
