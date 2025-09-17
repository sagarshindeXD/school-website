import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/About.css';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
                <Link to="/#admissions" className="modern-button">Explore Our Programs</Link>
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


      {/* Modern Campus Showcase */}
      <section className="modern-campus-showcase">
        <div className="container">
          <div className="section-header">
            <h2 className="modern-heading">Explore Our <span className="highlight">Learning Environments</span></h2>
            <p>State-of-the-art facilities designed to inspire and nurture young minds across Chhatrapati Sambhajinagar</p>
          </div>

          <div className="campus-tabs">
            <div className="campus-tab active" data-campus="airport">
              <div className="tab-icon">✈️</div>
              <span>Airport Campus</span>
            </div>
            <div className="campus-tab" data-campus="osmanpura">
              <div className="tab-icon">🏛️</div>
              <span>Osmanpura Campus</span>
            </div>
            <div className="campus-tab" data-campus="city">
              <div className="tab-icon">🏙️</div>
              <span>City Campus</span>
            </div>
          </div>

          <div className="campus-content">
            {/* Airport Campus */}
            <div className="campus-pane active" id="airport-campus">
              <div className="campus-hero">
                <div className="campus-main-image">
                  <img src="/logos/hero.png" alt="Airport Campus Aerial View" />
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
                  
                  <div className="campus-features-grid">
                    <div className="feature-card">
                      <div className="feature-icon">🏫</div>
                      <h4>Modern Classrooms</h4>
                      <p>Smart classrooms with interactive whiteboards and ergonomic furniture</p>
                    </div>
                    <div className="feature-card">
                      <div className="feature-icon">🔬</div>
                      <h4>Advanced Labs</h4>
                      <p>State-of-the-art science and computer laboratories</p>
                    </div>
                    <div className="feature-card">
                      <div className="feature-icon">⚽</div>
                      <h4>Sports Complex</h4>
                      <p>Indoor and outdoor sports facilities including basketball, football, and more</p>
                    </div>
                    <div className="feature-card">
                      <div className="feature-icon">🎨</div>
                      <h4>Creative Spaces</h4>
                      <p>Dedicated areas for arts, music, and performing arts</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="campus-gallery">
                <h4>Gallery</h4>
                <div className="gallery-grid">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} className="gallery-item" style={{ backgroundImage: 'url(/logos/hero.png)' }}>
                      <div className="gallery-overlay">
                        <span className="zoom-icon">🔍</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="campus-cta">
                <h4>Schedule a Campus Tour</h4>
                <p>Experience our world-class facilities and learning environment firsthand</p>
                <button className="modern-button">Book a Tour</button>
              </div>
            </div>
            
            {/* Osmanpura Campus (Hidden by default) */}
            <div className="campus-pane" id="osmanpura-campus">
              {/* Similar structure as Airport Campus */}
              <div className="campus-hero">
                <div className="campus-main-image">
                  <img src="/logos/hero.png" alt="Osmanpura Campus View" />
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
                  
                  <div className="campus-features-grid">
                    <div className="feature-card">
                      <div className="feature-icon">📚</div>
                      <h4>Extensive Library</h4>
                      <p>Well-stocked library with a wide range of books and digital resources</p>
                    </div>
                    <div className="feature-card">
                      <div className="feature-icon">🔬</div>
                      <h4>Science Labs</h4>
                      <p>Fully equipped laboratories for Physics, Chemistry, and Biology</p>
                    </div>
                    <div className="feature-card">
                      <div className="feature-icon">🎭</div>
                      <h4>Cultural Center</h4>
                      <p>Spaces for performing arts and cultural activities</p>
                    </div>
                    <div className="feature-card">
                      <div className="feature-icon">🏓</div>
                      <h4>Sports Facilities</h4>
                      <p>Indoor games and outdoor sports facilities</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="campus-gallery">
                <h4>Gallery</h4>
                <div className="gallery-grid">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} className="gallery-item" style={{ backgroundImage: 'url(/logos/hero.png)' }}>
                      <div className="gallery-overlay">
                        <span className="zoom-icon">🔍</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="campus-cta">
                <h4>Schedule a Campus Tour</h4>
                <p>Experience our nurturing learning environment firsthand</p>
                <button className="modern-button">Book a Tour</button>
              </div>
            </div>
            
            {/* City Campus (Hidden by default) */}
            <div className="campus-pane" id="city-campus">
              {/* Similar structure as Airport Campus */}
              <div className="campus-hero">
                <div className="campus-main-image">
                  <img src="/logos/hero.png" alt="City Campus View" />
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
                  
                  <div className="campus-features-grid">
                    <div className="feature-card">
                      <div className="feature-icon">💻</div>
                      <h4>Tech-Enabled</h4>
                      <p>Smart classrooms with digital learning tools</p>
                    </div>
                    <div className="feature-card">
                      <div className="feature-icon">🎨</div>
                      <h4>Creative Labs</h4>
                      <p>Spaces for art, music, and innovation</p>
                    </div>
                    <div className="feature-card">
                      <div className="feature-icon">🎭</div>
                      <h4>Auditorium</h4>
                      <p>Modern auditorium for events and performances</p>
                    </div>
                    <div className="feature-card">
                      <div className="feature-icon">🚌</div>
                      <h4>Transport</h4>
                      <p>Convenient transportation services</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="campus-gallery">
                <h4>Gallery</h4>
                <div className="gallery-grid">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} className="gallery-item" style={{ backgroundImage: 'url(/logos/hero.png)' }}>
                      <div className="gallery-overlay">
                        <span className="zoom-icon">🔍</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="campus-cta">
                <h4>Schedule a Campus Tour</h4>
                <p>Discover our urban learning environment</p>
                <button className="modern-button">Book a Tour</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Gurukul Olympiad School, City Campus</h3>
              <p>Besides Shahanoorwadi Railway Bridge,<br />
              Chhatrapati Sambhajinagar<br />
              Maharashtra 431001</p>
              <p><strong>Email:</strong> info@gurukulolympiadschool.com<br />
              <strong>Phone:</strong> +91 77739 37370 / 77739 37376</p>
            </div>
            
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/#admissions">Admissions</Link></li>
                <li><Link to="/#life-at-gos">Life at GOS</Link></li>
                <li><Link to="/#gallery">Gallery</Link></li>
                <li><Link to="/#contact">Contact</Link></li>
              </ul>
              <div className="social-links">
                <a href="#facebook" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
                <a href="#twitter" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                <a href="#instagram" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                <a href="#youtube" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
            
            <div className="footer-section">
              <h3>Contact Us</h3>
              <form className="contact-form">
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows="3" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
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
    </div>
  );
};

export default About;
