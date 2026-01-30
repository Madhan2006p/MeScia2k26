import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Events from './components/Events';
import Schedule from './components/Schedule';
import Guidelines from './components/Guidelines';
import Team from './components/Team';
import Registration from './components/Registration';
import Footer from './components/Footer';
import Lenis from '@studio-freight/lenis';

function App() {
  useEffect(() => {
    // Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      section.classList.add('fade-in');
      observer.observe(section);
    });

    // Observe cards with stagger effect
    const cards = document.querySelectorAll('.card, .event-card, .terminal-card, .team-card');
    cards.forEach((card, index) => {
      card.classList.add('stagger-item');
      card.style.transitionDelay = `${index * 0.1}s`;
      observer.observe(card);
    });

    // Observe timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
      if (index % 2 === 0) {
        item.classList.add('slide-in-left');
      } else {
        item.classList.add('slide-in-right');
      }
      observer.observe(item);
    });

    return () => {
      observer.disconnect();
      lenis.destroy();
    };
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Events />
      <Schedule />
      <Guidelines />
      <Team />
      <Registration />
      <Footer />
    </div>
  );
}

export default App;
