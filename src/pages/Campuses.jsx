import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Campuses.css';
import Footer from '../components/Footer';

const Campuses = () => {
  const campuses = [
    {
      id: 1,
      name: 'Airport Campus',
      location: 'Near Airport, Aurangabad',
      image: '/campuses/airport-campus.jpg',
      path: '/campus/airport',
      features: ['State-of-the-art Labs', 'Digital Classrooms', 'Sports Complex', 'Library'],
      description: 'Our Airport Campus offers a modern learning environment with easy access to transportation hubs. Featuring cutting-edge facilities and a focus on academic excellence, this campus provides students with a dynamic educational experience.'
    },
    {
      id: 2,
      name: 'Osmanpura Campus',
      location: 'Osmanpura, Aurangabad',
      image: '/campuses/osmanpura-campus.jpg',
      path: '/campus/osmanpura',
      features: ['Research Center', 'Innovation Hub', 'Auditorium', 'Cafeteria'],
      description: 'Located in the heart of Osmanpura, our campus is known for its vibrant academic community and state-of-the-art facilities. The campus fosters innovation and creativity while providing a nurturing environment for students to excel.'
    },
    {
      id: 3,
      name: 'City Campus',
      location: 'City Center, Aurangabad',
      image: '/campuses/city-campus.jpg',
      path: '/campus/city',
      features: ['Central Location', 'Modern Facilities', 'Computer Labs', 'Library'],
      description: 'Our City Campus, situated in the bustling city center, offers students the perfect blend of academic rigor and urban convenience. With its central location and comprehensive facilities, students have access to all the resources they need for success.'
    }
  ];

  return (
    <div className="campuses-page" style={{ paddingTop: '100px' }}>

      {/* Campuses Grid */}
      <section className="campuses-container">
        <div className="campus-grid">
          {campuses.map((campus) => (
            <div key={campus.id} className="campus-card">
              <img 
                src={campus.image} 
                alt={campus.name} 
                className="campus-image"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://images.unsplash.com/photo-1523050853548-5201e3a935f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80';
                }}
              />
              <div className="campus-info">
                <h2>{campus.name}</h2>
                <div className="campus-location">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                  </svg>
                  <span>{campus.location}</span>
                </div>
                <p className="campus-description">{campus.description}</p>
                <div className="campus-features">
                  {campus.features.map((feature, index) => (
                    <span key={index} className="feature-tag">{feature}</span>
                  ))}
                </div>
                <Link to={campus.path} className="cta-button">
                  Explore More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section style={{
        padding: '4rem 2rem',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%)'
      }}>
        <h2 style={{ color: '#2c3e50', marginBottom: '1rem' }}>Experience Our Campuses in 360°</h2>
        <p style={{ color: '#7f8c8d', maxWidth: '700px', margin: '0 auto 2rem' }}>
          Can't visit in person? Take a virtual tour of our state-of-the-art facilities from the comfort of your home.
        </p>
        <button style={{
          background: '#e74c3c',
          color: 'white',
          border: 'none',
          padding: '0.8rem 2rem',
          borderRadius: '30px',
          fontSize: '1rem',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }} onMouseOver={(e) => {
          e.target.style.background = '#c0392b';
          e.target.style.transform = 'translateY(-2px)';
        }} onMouseOut={(e) => {
          e.target.style.background = '#e74c3c';
          e.target.style.transform = 'translateY(0)';
        }}>
          Start Virtual Tour
        </button>
      </section>
      <Footer />
    </div>
  );
};

export default Campuses;
