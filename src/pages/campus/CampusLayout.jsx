import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Footer from '../../components/Footer';
import '../../styles/CampusLayout.css';

// Add this at the top of your file, outside the component
const campusData = {
  airport: {
    id: 1,
    name: 'Airport Campus',
    location: 'Near Airport, Aurangabad',
    image: '/campuses/airport-campus.jpg',
    heroImage: '/campuses/airport-hero.jpg',
    established: '2010',
    students: '1200+',
    faculty: '85+',
    area: '5 Acres',
    features: [
      'State-of-the-art Computer Labs',
      'Digital Smart Classrooms',
      'Extensive Library',
      'Indoor Sports Complex',
      'Cafeteria & Dining Hall',
      'Transportation Services',
      '24/7 Security',
      'Medical Facilities'
    ],
    overview: 'Our Airport Campus is a modern educational hub located in close proximity to Aurangabad Airport, offering students a dynamic learning environment with cutting-edge facilities. The campus is designed to foster academic excellence, creativity, and innovation while providing a safe and nurturing atmosphere for all students.',
    virtualTour: 'https://example.com/virtual-tour/airport-campus',
    gallery: [
      '/campuses/airport-gallery-1.jpg',
      '/campuses/airport-gallery-2.jpg',
      '/campuses/airport-gallery-3.jpg',
      '/campuses/airport-gallery-4.jpg'
    ]
  },
  osmanpura: {
    id: 2,
    name: 'Osmanpura Campus',
    location: 'Osmanpura, Aurangabad',
    image: '/campuses/osmanpura-campus.jpg',
    heroImage: '/campuses/osmanpura-hero.jpg',
    established: '2015',
    students: '950+',
    faculty: '65+',
    area: '3.5 Acres',
    features: [
      'Advanced Science Labs',
      'Innovation and Research Center',
      'Auditorium with 500+ Capacity',
      'Art and Music Rooms',
      'Cafeteria with Healthy Menu',
      'Sports Facilities',
      'Computer Center',
      'Career Counseling Center'
    ],
    overview: 'Located in the heart of Osmanpura, our campus is renowned for its focus on innovation and research. The campus provides a stimulating environment that encourages creativity and critical thinking, with modern facilities designed to support both academic and extracurricular excellence.',
    virtualTour: 'https://example.com/virtual-tour/osmanpura-campus',
    gallery: [
      '/campuses/osmanpura-gallery-1.jpg',
      '/campuses/osmanpura-gallery-2.jpg',
      '/campuses/osmanpura-gallery-3.jpg',
      '/campuses/osmanpura-gallery-4.jpg'
    ]
  },
  city: {
    id: 3,
    name: 'City Campus',
    location: 'City Center, Aurangabad',
    image: '/campuses/city-campus.jpg',
    heroImage: '/campuses/city-hero.jpg',
    established: '2018',
    students: '800+',
    faculty: '55+',
    area: '4 Acres',
    features: [
      'Modern Classrooms with Smart Boards',
      'Well-equipped Computer Labs',
      'Central Library with Digital Resources',
      'Cafeteria with Healthy Food Options',
      'Sports Facilities',
      'Transportation Services',
      'Medical Room with Full-time Nurse',
      'Career Guidance Cell'
    ],
    overview: 'Our City Campus, located in the bustling city center of Aurangabad, offers students the perfect blend of academic rigor and urban convenience. The campus is designed to provide a holistic educational experience with a focus on academic excellence, personal development, and community engagement.',
    virtualTour: 'https://example.com/virtual-tour/city-campus',
    gallery: [
      '/campuses/city-gallery-1.jpg',
      '/campuses/city-gallery-2.jpg',
      '/campuses/city-gallery-3.jpg',
      '/campuses/city-gallery-4.jpg'
    ]
  }
};

const CampusLayout = () => {
  const navigate = useNavigate();
  const { campusId } = useParams();
  
  // Get campus data based on the ID from URL
  const campus = campusData[campusId];
  
  // If campus not found, redirect to campuses page
  useEffect(() => {
    if (!campus) {
      navigate('/campuses');
    }
  }, [campus, navigate]);
  
  if (!campus) {
    return null; // or a loading spinner
  }

  return (
    <div className="campus-page">
      <section className="campus-hero" style={{ backgroundImage: `url(${campus.heroImage || campus.image})` }}>
        <div className="hero-overlay">
          <div className="container">
            <h1>{campus.name}</h1>
            <p className="location">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" style={{ marginRight: '8px' }}>
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
              </svg>
              {campus.location}
            </p>
          </div>
        </div>
      </section>

      <section className="campus-overview">
        <div className="container">
          <div className="overview-content">
            <div className="overview-text">
              <h2>Overview</h2>
              <p>{campus.overview || campus.description}</p>
              
              <div className="quick-facts">
                <h3>Quick Facts</h3>
                <div className="facts-grid">
                  {campus.established && (
                    <div className="fact-item">
                      <span className="fact-label">Established</span>
                      <span className="fact-value">{campus.established}</span>
                    </div>
                  )}
                  {campus.students && (
                    <div className="fact-item">
                      <span className="fact-label">Students</span>
                      <span className="fact-value">{campus.students}</span>
                    </div>
                  )}
                  {campus.faculty && (
                    <div className="fact-item">
                      <span className="fact-label">Faculty</span>
                      <span className="fact-value">{campus.faculty}</span>
                    </div>
                  )}
                  {campus.area && (
                    <div className="fact-item">
                      <span className="fact-label">Campus Area</span>
                      <span className="fact-value">{campus.area}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="campus-highlights">
              <h3>Key Features</h3>
              <ul className="features-list">
                {campus.features.map((feature, index) => (
                  <li key={index} className="feature-item">
                    <span className="feature-icon">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              {campus.virtualTour && (
                <a 
                  href={campus.virtualTour} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="virtual-tour-btn"
                >
                  Take Virtual Tour
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {campus.gallery && campus.gallery.length > 0 && (
        <section className="campus-gallery">
          <div className="container">
            <h2>Campus Gallery</h2>
            <div className="gallery-grid">
              {campus.gallery.map((img, index) => (
                <div key={index} className="gallery-item">
                  <img 
                    src={img} 
                    alt={`${campus.name} - ${index + 1}`} 
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/400x300?text=Campus+Image';
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="campus-cta">
        <div className="container">
          <h2>Ready to Join Our Community?</h2>
          <p>Experience the difference of learning at {campus.name}.</p>
          <div className="cta-buttons">
            <Link to="/admissions" className="btn btn-primary">Apply Now</Link>
            <Link to="/contact" className="btn btn-outline">Schedule a Visit</Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CampusLayout;
