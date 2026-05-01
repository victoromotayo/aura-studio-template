const Hero = () => {
    return (
        <header className="hero-beauty hidden">
        <div className="hero-beauty-content">
          <p className="eyebrow">Premium Skincare & Hair Studio</p>
          <h1>Reveal Your Natural Radiance.</h1>
          <p className="hero-desc">Bespoke beauty treatments and organic skincare products curated for your unique glow.</p>
          <button className="btn-book">Book an Appointment</button>
        </div>
        <div className="hero-beauty-image">
          <img 
            src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
            alt="Minimalist skincare aesthetics" 
          />
        </div>
      </header>
    );
  };
  
  export default Hero;