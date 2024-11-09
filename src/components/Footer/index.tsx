import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>Insight Quirks</h3>
          <p>
            We are a student club dedicated to programming and designing. Join us to explore your potential and take on exciting roles and responsibilities.
          </p>
          <div className="social-icons">
            <a href="#"><i className="ri-facebook-circle-line"></i></a>
            <a href="#"><i className="ri-twitter-line"></i></a>
            <a href="#"><i className="ri-linkedin-line"></i></a>
            <a href="#"><i className="ri-instagram-line"></i></a>
          </div>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/articles">Articles</a></li>
            <li><a href="/team">Team</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: info@insightquirks.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 1234 Street Name, City, Country</p>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; 2024 Insight Quirks. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
