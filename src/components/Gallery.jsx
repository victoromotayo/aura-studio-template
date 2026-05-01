const Gallery = () => {
    return (
      <section id="gallery" className="gallery hidden">
        <div className="gallery-header">
          <h2>The Studio Portfolio</h2>
          <p>A glimpse into our sanctuary of beauty and relaxation.</p>
        </div>
        
        <div className="gallery-grid">
          {/* Row 1 */}
          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Skincare application" />
          </div>
          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Salon interior design" />
          </div>
          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Hair styling session" />
          </div>
          
          {/* Row 2 */}
          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1616394584738-fc6e612e71c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Luxury spa products" />
          </div>
          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1516975080661-46bfa20224b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Nail enhancement treatment" />
          </div>
          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Facial treatment" />
          </div>
        </div>
      </section>
    );
  };
  
  export default Gallery;