import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <footer className="footer">
    <div className="container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Gurukul Olympiad School, City Campus</h3>
          <p>Besides Shahanoorwadi Railway Bridge,<br />
          Chhatrapati Sambhajinagar<br />
          <strong>Mob.</strong> 9373937363 / 9372937242</p>
          
          <h3 className="mt-4">Gurukul Olympiad School, Airport Campus</h3>
          <p>Behind Airport, Old Beed Road,<br />
          Chhatrapati Sambhajinagar<br />
          <strong>Mob.</strong> 7773937370 / 7773937376</p>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/#admissions">Admissions</Link></li>
            <li><Link to="/#mandatory-disclosure">Mandatory Public Disclosure</Link></li>
            <li><Link to="/#contact">Contact Us</Link></li>
          </ul>
          
          <div className="social-links mt-4">
            <h3>Join the Community</h3>
            <div className="social-icons">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
              <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        
        <div className="footer-section">
          <h3>Contact Us</h3>
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" required />
            </div>
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Leave us a message..." rows="4" required></textarea>
            <button type="submit" className="primary-button">Submit</button>
          </form>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2025 by Gurukul Olympiad School. 
          <span>Powered and secured by StartupSurge | <a href="#privacy-policy">Privacy Policy</a></span>
        </p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
