import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesMenu from './components/ServicesMenu';
import Gallery from './components/Gallery';
import Booking from './components/Booking';
import Footer from './components/Footer';
import './App.css';

function App() {
  // JavaScript: Intersection Observer for modern scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <ServicesMenu />
        <Gallery />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}

export default App;