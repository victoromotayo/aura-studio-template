const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2 className="logo">Aura.</h2>
            <p>Revealing your natural radiance through bespoke treatments and expert care.</p>
          </div>
          
          <div className="footer-links">
            <h4>Studio</h4>
            <ul>
              <li><a href="#services">Treatments</a></li>
              <li><a href="#gallery">Portfolio</a></li>
              <li><a href="#book">Book Online</a></li>
            </ul>
          </div>
  
          <div className="footer-contact">
            <h4>Visit Us</h4>
            <p>123 Elegance Boulevard<br />Suite 200<br />Metropolis, NY 10001</p>
            <p className="phone">+1 (555) 867-5309</p>
          </div>
  
          <div className="footer-newsletter">
            <h4>Join the List</h4>
            <p>Exclusive offers and skincare tips directly to your inbox.</p>
            <div className="subscribe-box">
              <input type="email" placeholder="Email address" />
              <button>&rarr;</button>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Aura Studio. All rights reserved.</p>
          <div className="socials">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;