const Navbar = () => {
    return (
      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="#services">Treatments</a></li>
          <li><a href="#gallery">Portfolio</a></li>
        </ul>
        <div className="logo">Aura.</div>
        <div className="nav-right">
          <a href="#book" className="btn-outline">Book Now</a>
        </div>
      </nav>
    );
  };
  
  export default Navbar;