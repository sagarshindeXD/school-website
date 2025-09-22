import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/About.css';
import Footer from '../components/Footer';

const About = () => {
  const [activeCampus, setActiveCampus] = useState('airport');
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleTabClick = (campus) => {
    setActiveCampus(campus);
  };

  const openImageModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  return (
    <div className="about-page">
      {/* Our Story Section - Modern Design */}
      <section className="modern-story">
        <div className="container">
          <div className="modern-story-grid">
            <div className="modern-story-image">
              <div className="image-wrapper">
                <img src="/logos/about-2.png" alt="Gurukul Olympiad School" className="main-image" />
                <div className="floating-shape shape-1"></div>
                <div className="floating-shape shape-2"></div>
              </div>
            </div>
            <div className="modern-story-content">
              <h2 className="modern-heading">Redefining <span className="highlight">Education</span> for the Modern World</h2>
              
              <div className="story-highlight">
                <div className="highlight-icon">🏫</div>
                <div>
                  <h3>Our Foundation</h3>
                  <p>Gurukul Olympiad School in Ch. Sambhaji Nagar bridges ancient wisdom with contemporary teaching methodologies, creating a nurturing environment where every student's potential is unlocked.</p>
                </div>
              </div>
              
              <div className="pillars-grid">
                <div className="pillar-card">
                  <div className="pillar-icon">👤</div>
                  <h4>Personalized Learning</h4>
                  <p>Tailored education that adapts to each student's unique learning style and pace.</p>
                </div>
                <div className="pillar-card">
                  <div className="pillar-icon">🎯</div>
                  <h4>Integrated Approach</h4>
                  <p>Seamless blend of academics and competitive exam preparation.</p>
                </div>
                <div className="pillar-card">
                  <div className="pillar-icon">🌟</div>
                  <h4>Holistic Development</h4>
                  <p>Nurturing well-rounded individuals through diverse programs.</p>
                </div>
                <div className="pillar-card">
                  <div className="pillar-icon">🚀</div>
                  <h4>Future Ready</h4>
                  <p>Equipping students with skills for tomorrow's challenges.</p>
                </div>
              </div>
              
              <div className="story-cta">
                <p>Join us in shaping the future of education, where tradition meets innovation.</p>
                <Link to="/#admissions" className="primary-button">Explore Our Programs</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Mission & Vision */}
      <section className="modern-mission-vision">
        <div className="container">
          <div className="section-header">
            <h2 className="modern-heading">Guiding Principles for <span className="highlight">Excellence</span></h2>
            <p>Our mission and vision form the foundation of everything we do at Gurukul Olympiad School</p>
          </div>
          
          <div className="mv-grid">
            <div className="mv-card mission">
              <div className="mv-card-inner">
                <div className="mv-icon-wrapper">
                  <div className="mv-icon-bg"></div>
                  <div className="mv-icon">🎯</div>
                </div>
                <div className="mv-content">
                  <h3>Our Mission</h3>
                  <p>To empower students with knowledge, skills, and values that prepare them for global citizenship while preserving our rich cultural heritage. We are committed to nurturing well-rounded individuals who can thrive in an ever-changing world.</p>
                  <div className="mv-features">
                    <div className="mv-feature">
                      <span className="check-icon">✓</span>
                      <span>Holistic Development</span>
                    </div>
                    <div className="mv-feature">
                      <span className="check-icon">✓</span>
                      <span>Cultural Preservation</span>
                    </div>
                    <div className="mv-feature">
                      <span className="check-icon">✓</span>
                      <span>Global Perspective</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mv-accent-line"></div>
            </div>
            
            <div className="mv-card vision">
              <div className="mv-card-inner">
                <div className="mv-icon-wrapper">
                  <div className="mv-icon-bg"></div>
                  <div className="mv-icon">🔭</div>
                </div>
                <div className="mv-content">
                  <h3>Our Vision</h3>
                  <p>To be a beacon of academic excellence, fostering innovation, leadership, and social responsibility in every student. We envision a future where our graduates lead with integrity and make meaningful contributions to society.</p>
                  <div className="mv-features">
                    <div className="mv-feature">
                      <span className="check-icon">✓</span>
                      <span>Academic Excellence</span>
                    </div>
                    <div className="mv-feature">
                      <span className="check-icon">✓</span>
                      <span>Innovation & Leadership</span>
                    </div>
                    <div className="mv-feature">
                      <span className="check-icon">✓</span>
                      <span>Social Responsibility</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mv-accent-line"></div>
            </div>
          </div>
        </div>
      </section>



      {/* Campus Showcase Section */}
      <section className="campus-showcase">
        <div className="container">
          <div className="section-header">
            <h2 className="modern-heading">Our <span className="highlight">Campuses</span></h2>
            <p>Explore our state-of-the-art learning environments across Chhatrapati Sambhajinagar</p>
          </div>

          <div className="campus-tabs">
            <div 
              className={`campus-tab ${activeCampus === 'airport' ? 'active' : ''}`} 
              onClick={() => handleTabClick('airport')}
            >
              <div className="tab-icon">✈️</div>
              <span>Airport Campus</span>
            </div>
            <div 
              className={`campus-tab ${activeCampus === 'osmanpura' ? 'active' : ''}`}
              onClick={() => handleTabClick('osmanpura')}
            >
              <div className="tab-icon">🏛️</div>
              <span>Osmanpura Campus</span>
            </div>
            <div 
              className={`campus-tab ${activeCampus === 'city' ? 'active' : ''}`}
              onClick={() => handleTabClick('city')}
            >
              <div className="tab-icon">🏙️</div>
              <span>City Campus</span>
            </div>
          </div>

          <div className="campus-content">
            {/* Airport Campus */}
            <div className={`campus-pane ${activeCampus === 'airport' ? 'active' : ''}`} id="airport-campus">
              <div className="campus-hero">
                <div className="campus-main-image">
                  <img src="/logos/hero.png" alt="Airport Campus" />
                  <div className="campus-badge">
                    <span className="badge-icon">🏆</span>
                    <span>Flagship Campus</span>
                  </div>
                </div>
                <div className="campus-highlights">
                  <h3>Airport Campus</h3>
                  <div className="campus-meta">
                    <span className="meta-item">
                      <i className="fas fa-map-marker-alt"></i> Near Chhatrapati Sambhajinagar Airport
                    </span>
                    <span className="meta-item">
                      <i className="fas fa-expand"></i> 5 Acre Campus
                    </span>
                    <span className="meta-item">
                      <i className="fas fa-graduation-cap"></i> Pre-Nursery to 12th Grade
                    </span>
                  </div>
                  <p>Our flagship campus combines modern architecture with sustainable design, offering students an inspiring environment for holistic development. The spacious campus features cutting-edge facilities and lush green spaces that stimulate learning and creativity.</p>
                </div>
              </div>
            </div>

            {/* Osmanpura Campus */}
            <div className={`campus-pane ${activeCampus === 'osmanpura' ? 'active' : ''}`} id="osmanpura-campus">
              <div className="campus-hero">
                <div className="campus-main-image">
                  <img src="/logos/hero.png" alt="Osmanpura Campus" />
                  <div className="campus-badge">
                    <span className="badge-icon">🌳</span>
                    <span>Green Campus</span>
                  </div>
                </div>
                <div className="campus-highlights">
                  <h3>Osmanpura Campus</h3>
                  <div className="campus-meta">
                    <span className="meta-item">
                      <i className="fas fa-map-marker-alt"></i> Osmanpura, Chhatrapati Sambhajinagar
                    </span>
                    <span className="meta-item">
                      <i className="fas fa-expand"></i> 3.5 Acre Campus
                    </span>
                    <span className="meta-item">
                      <i className="fas fa-graduation-cap"></i> Pre-Nursery to 10th Grade
                    </span>
                  </div>
                  <p>Nestled in a peaceful neighborhood, our Osmanpura Campus offers a serene learning environment with modern facilities and dedicated faculty, perfect for focused academic growth and personal development.</p>
                </div>
              </div>
            </div>

            {/* City Campus */}
            <div className={`campus-pane ${activeCampus === 'city' ? 'active' : ''}`} id="city-campus">
              <div className="campus-hero">
                <div className="campus-main-image">
                  <img src="/logos/hero.png" alt="City Campus" />
                  <div className="campus-badge">
                    <span className="badge-icon">🏙️</span>
                    <span>City Center</span>
                  </div>
                </div>
                <div className="campus-highlights">
                  <h3>City Campus</h3>
                  <div className="campus-meta">
                    <span className="meta-item">
                      <i className="fas fa-map-marker-alt"></i> City Center, Chhatrapati Sambhajinagar
                    </span>
                    <span className="meta-item">
                      <i className="fas fa-expand"></i> 2.5 Acre Campus
                    </span>
                    <span className="meta-item">
                      <i className="fas fa-graduation-cap"></i> Pre-Nursery to 8th Grade
                    </span>
                  </div>
                  <p>Located in the heart of the city, our City Campus offers convenience without compromising on quality education. The campus features modern amenities and easy accessibility for urban families.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compact Gallery Section */}
      <section className="compact-gallery">
        <div className="container">
          <h3 className="section-title">Campus Gallery</h3>
          <div className="gallery-grid">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div 
                key={item}
                className="gallery-item"
                onClick={() => openImageModal(`/logos/hero.png`)}
                style={{ '--delay': `${(item * 0.1)}s` }}
              >
                <img 
                  src={`/logos/hero.png`}
                  alt={`Campus ${item}`}
                  loading="lazy"
                />
                <div className="overlay">
                  <span>View</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="image-modal">
          <div className="modal-overlay" onClick={closeImageModal}></div>
          <div className="modal-content">
            <button className="close-button" onClick={closeImageModal}>&times;</button>
            <img src={selectedImage} alt="Enlarged view" />
          </div>
        </div>
      )}
<Footer/>
    </div>
  );
};

export default About;
