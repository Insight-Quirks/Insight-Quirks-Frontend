import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Insight Quirks Community</div>
      <ul className="nav-links">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/articles" className={({ isActive }) => (isActive ? 'active' : '')}>
            Articles
          </NavLink>
        </li>
        <li>
          <NavLink to="/team1" className={({ isActive }) => (isActive ? 'active' : '')}>
            Team
          </NavLink>
        </li>
        <li>
          <NavLink to="/join">
            <h5>Join Us</h5>
            <div id="green"></div>
          </NavLink>
        </li>
      </ul>
      <div className="hamburger">
        <i className="ri-menu-line"></i>
      </div>
    </nav>
  );
};

export default Navbar;
