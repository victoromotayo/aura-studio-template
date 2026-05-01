const ServicesMenu = () => {
    return (
      <section id="services" className="services-menu hidden">
        <div className="menu-header">
          <h2>Our Treatments</h2>
          <p>Elevate your self-care routine with our signature services.</p>
        </div>
        
        <div className="menu-container">
          
          {/* Category 1 */}
          <div className="menu-category">
            <h3>Facials & Skincare</h3>
            <div className="menu-item">
              <div className="item-details">
                <h4>Signature Aura Facial</h4>
                <span className="price">$120</span>
              </div>
              <p>A customized 60-minute treatment to hydrate and restore balance.</p>
            </div>
            <div className="menu-item">
              <div className="item-details">
                <h4>Microdermabrasion</h4>
                <span className="price">$150</span>
              </div>
              <p>Advanced exfoliation to reveal smooth, youthful skin.</p>
            </div>
            <div className="menu-item">
              <div className="item-details">
                <h4>Lactic Acid Peel</h4>
                <span className="price">$180</span>
              </div>
              <p>Gentle resurfacing to improve texture and diminish fine lines.</p>
            </div>
          </div>
  
          {/* Category 2 */}
          <div className="menu-category">
            <h3>Massage Therapy</h3>
            <div className="menu-item">
              <div className="item-details">
                <h4>Swedish Relaxation</h4>
                <span className="price">$110</span>
              </div>
              <p>Traditional full-body massage using light to medium pressure.</p>
            </div>
            <div className="menu-item">
              <div className="item-details">
                <h4>Deep Tissue Recovery</h4>
                <span className="price">$140</span>
              </div>
              <p>Targeted therapy to relieve chronic muscle tension and knots.</p>
            </div>
            <div className="menu-item">
              <div className="item-details">
                <h4>Hot Stone Therapy</h4>
                <span className="price">$165</span>
              </div>
              <p>Smooth, heated stones placed on key points to melt away stress.</p>
            </div>
          </div>
  
          {/* Category 3 */}
          <div className="menu-category">
            <h3>Hair Styling & Color</h3>
            <div className="menu-item">
              <div className="item-details">
                <h4>Precision Cut & Blowout</h4>
                <span className="price">$85+</span>
              </div>
              <p>Includes a thorough consultation and relaxing scalp massage.</p>
            </div>
            <div className="menu-item">
              <div className="item-details">
                <h4>Balayage Highlights</h4>
                <span className="price">$220+</span>
              </div>
              <p>Hand-painted highlights for natural, sun-kissed dimension.</p>
            </div>
            <div className="menu-item">
              <div className="item-details">
                <h4>Keratin Smoothing</h4>
                <span className="price">$300+</span>
              </div>
              <p>Frizz-reducing treatment for silky, manageable hair lasting 12 weeks.</p>
            </div>
          </div>
  
          {/* Category 4 */}
          <div className="menu-category">
            <h3>Nail Enhancements</h3>
            <div className="menu-item">
              <div className="item-details">
                <h4>Aura Spa Manicure</h4>
                <span className="price">$45</span>
              </div>
              <p>Shaping, cuticle care, scrub, massage, and polish application.</p>
            </div>
            <div className="menu-item">
              <div className="item-details">
                <h4>Gel Pedicure</h4>
                <span className="price">$70</span>
              </div>
              <p>Long-lasting gel polish with complete foot and heel care.</p>
            </div>
            <div className="menu-item">
              <div className="item-details">
                <h4>Acrylic Sculpting</h4>
                <span className="price">$90+</span>
              </div>
              <p>Custom length and shape with premium strength acrylics.</p>
            </div>
          </div>
  
        </div>
      </section>
    );
  };
  
  export default ServicesMenu;