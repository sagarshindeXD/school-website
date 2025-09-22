import { useState, useEffect, useRef } from 'react';
import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import './App.css';
import './styles/About.css';
import './styles/CampusLayout.css';
import './styles/GosSocial.css';
import About from './pages/About';
import LifeAtGos from './pages/LifeAtGos';
import Campuses from './pages/Campuses';
import CampusLayout from './pages/campus/CampusLayout';
import Admissions from './pages/Admissions';
import GosSocial from './pages/GosSocial';
import { FaChevronDown, FaChevronUp, FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaTrophy, FaFileAlt } from 'react-icons/fa';
import Accolades from './pages/Accolades';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const location = useLocation();
  const moreMenuRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (moreMenuRef.current && !moreMenuRef.current.contains(event.target)) {
        setIsMoreOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/life-at-gos", label: "Life at GOS" },
    { path: "/campuses", label: "Campuses" },
    { path: "/admissions", label: "Admissions" },
  ];

  const moreLinks = [
    { path: "/gos-social", label: "GOS Social", icon: <FaFacebook className="mr-2" /> },
    { path: "/accolades", label: "Accolades", icon: <FaTrophy className="mr-2" /> },
    { path: "/mandatory-disclosure", label: "Mandatory Public Disclosure", icon: <FaFileAlt className="mr-2" /> },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/" className="logo-wrapper">
            <img 
              src="/logos/gos.png" 
              alt="Gurukul Olympiad School" 
              className="logo-image"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/60x60?text=GOS';
              }}
            />
          </Link>
        </div>

        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <div className="nav-links">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
                <span className="nav-underline"></span>
              </Link>
            ))}
            
            {/* More Dropdown */}
            <div className="nav-dropdown" ref={moreMenuRef}>
              <div 
                className={`nav-link dropdown-toggle ${moreLinks.some(link => location.pathname === link.path) ? 'active' : ''}`}
                onClick={() => setIsMoreOpen(!isMoreOpen)}
                onMouseEnter={() => setIsMoreOpen(true)}
                style={{ cursor: 'pointer' }}
              >
                More
                <span className="dropdown-icon">
                  {isMoreOpen ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
                </span>
                <span className="nav-underline"></span>
              </div>
              <div className={`dropdown-menu ${isMoreOpen ? 'show' : ''}`}>
                  {moreLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`dropdown-item ${location.pathname === link.path ? 'active' : ''}`}
                      onClick={() => {
                        setIsMoreOpen(false);
                        setIsMenuOpen(false);
                      }}
                    >
                      {link.icon}
                      {link.label}
                    </Link>
                  ))}
                </div>
            </div>
          </div>
          
          <div className="nav-actions">
            <Link 
              to="/login" 
              className="primary-button button-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
          </div>
        </div>

        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>
    </nav>
  );
};

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef();
  const leaders = [
    {
      name: "Dr. Satish Tambat",
      position: "Chief Mentor & Principal",
      expertise: "(Expert Career Counsellor)",
      image: "/logos/satish.png",
      message: "Each new day presents fresh challenges, and as the future approaches us at breakneck speed, we must face it with courage and determination. It is with great pleasure that I welcome you to Gurukul Olympiad School, an institution that is progressive and dedicated to delivering quality education while upholding the esteemed values and traditions of the Gurukul system."
    },
    {
      name: "Ms. Rakshanda Tambat",
      position: "Cultural Executive",
      expertise: "(Author, Counsellor, Teacher's Trainer)",
      image: "/logos/rakshanda.png",
      message: "Welcome to the Gurukul family – an institution that consistently shines as a paragon of commitment, resilience, and unparalleled excellence. At Gurukul, we don't just see a cohort of students; we see a tapestry of individual threads, each with its own texture and color. We deeply believe that every child is distinct, each bringing a unique perspective and set of capabilities to the table. This diversity is what makes Gurukul a vibrant community."
    },
    {
      name: "Mr. Ganesh Salunke",
      position: "Expert Mentor",
      expertise: "(Career Counsellor)",
      image: "/logos/ganesh.png",
      message: "In every society, a school stands as the cornerstone of an individual's journey to intellectual and personal growth. It isn't just an institution; it's a sanctuary where both the emotional and intellectual dimensions of a young mind are cultivated and nurtured. Here, the process of learning is not restricted to academics alone. Students immerse themselves in a plethora of activities - they explore and play, they learn from both textbooks and life experiences, and they lay the bricks that will form the foundation of their futures."
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-advance slides
  useEffect(() => {
    const autoAdvance = () => {
      setCurrentSlide((prev) => (prev === leaders.length - 1 ? 0 : prev + 1));
    };

    slideInterval.current = setInterval(autoAdvance, 8000);
    return () => clearInterval(slideInterval.current);
  }, [leaders.length]);

  const goToSlide = (index) => {
    clearInterval(slideInterval.current);
    setCurrentSlide(index);
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev === leaders.length - 1 ? 0 : prev + 1));
    }, 8000);
  };

  const nextSlide = () => {
    clearInterval(slideInterval.current);
    setCurrentSlide((prev) => (prev === leaders.length - 1 ? 0 : prev + 1));
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev === leaders.length - 1 ? 0 : prev + 1));
    }, 8000);
  };

  const prevSlide = () => {
    clearInterval(slideInterval.current);
    setCurrentSlide((prev) => (prev === 0 ? leaders.length - 1 : prev - 1));
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev === leaders.length - 1 ? 0 : prev + 1));
    }, 8000);
  };

  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero" id="home" style={{
        backgroundImage: 'url(/logos/hero.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '8rem 0',
        textAlign: 'center',
        color: '#fff'
      }}>
        <div className="container">
          <div className="hero-content">
            <h1>Welcome to Gurukul Olympiad School</h1>
            <p className="hero-subtitle">Nurturing young minds for a brighter tomorrow</p>
            <Link to="/#admissions" className="btn btn-primary">Join Us Today</Link>
          </div>
        </div>
      </section>

      {/* Modern About Section */}
      <section className="modern-about" id="about">
        <div className="container">
          <div className="modern-about-grid">
            <div className="modern-about-content">
              <h2 className="modern-heading">Where <span className="highlight">Legends</span> Are Made</h2>
              
              <div className="modern-about-text">
                <p className="lead">Welcome to Gurukul Olympiad School, where academic excellence meets holistic development in a nurturing environment that inspires greatness.</p>
                
                <div className="feature-list">
                  <div className="feature-item">
                    <div className="feature-icon">🏆</div>
                    <div>
                      <h4>Proven Excellence</h4>
                      <p>15+ years of academic distinction and student success stories</p>
                    </div>
                  </div>
                  
                  <div className="feature-item">
                    <div className="feature-icon">🌱</div>
                    <div>
                      <h4>Holistic Growth</h4>
                      <p>Balancing academics, sports, arts, and character development</p>
                    </div>
                  </div>
                  
                  <div className="feature-item">
                    <div className="feature-icon">🔬</div>
                    <div>
                      <h4>Future-Ready</h4>
                      <p>Cutting-edge facilities and innovative teaching methodologies</p>
                    </div>
                  </div>
                </div>
                
                <div className="button-group">
                  <Link to="/about" className="primary-button">Our Story</Link>
                  <Link to="/#virtual-tour" className="secondary-button">Virtual Tour</Link>
                </div>
              </div>
            </div>
            
            <div className="modern-about-visual">
              <div className="image-stack">
                <div className="main-image-container">
                  <img src="/logos/about.png" alt="Students at Gurukul Olympiad School" className="main-image" />
                  <div className="floating-badge">
                    <span className="badge-icon">🏆</span>
                    <div className="badge-text">
                      <span className="badge-number">15+</span>
                      <span className="badge-label">Years of Excellence</span>
                    </div>
                  </div>
                </div>
                
                <div className="stats-grid">
                  <div className="stat-card">
                    <span className="stat-number">2000+</span>
                    <span className="stat-label">Students</span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-number">50+</span>
                    <span className="stat-label">Expert Faculty</span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-number">10:1</span>
                    <span className="stat-label">Student-Teacher Ratio</span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-number">100%</span>
                    <span className="stat-label">Parent Satisfaction</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why GOS is Lit - Enhanced Section */}
      <section className="modern-features" id="why-us">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why GOS is <span className="highlight-text">Lit</span> 🔥</h2>
          </div>
          
          <div className="modern-features-grid">
            <div className="modern-feature-card" data-aos="fade-up">
              <div className="feature-icon-wrapper">
                <span className="feature-icon">🎯</span>
                <div className="icon-bg"></div>
              </div>
              <h3>Our Vibe</h3>
              <p>Nurturing each child's unique potential through an integrated approach that blends academics with competitive edge and future readiness.</p>
              <div className="feature-hover-content">
                <ul>
                  <li>Personalized learning paths</li>
                  <li>Future-ready curriculum</li>
                  <li>Holistic development focus</li>
                </ul>
              </div>
            </div>

            <div className="modern-feature-card" data-aos="fade-up" data-aos-delay="100">
              <div className="feature-icon-wrapper">
                <span className="feature-icon">📚</span>
                <div className="icon-bg"></div>
              </div>
              <h3>Smart Learning</h3>
              <p>Pioneering the SWitCh model that seamlessly integrates schooling with competitive exam preparation.</p>
              <div className="feature-hover-content">
                <ul>
                  <li>NCERT + CBSE + Competitive prep</li>
                  <li>Early exposure to national exams</li>
                  <li>Progressive assessment system</li>
                </ul>
              </div>
            </div>

            <div className="modern-feature-card" data-aos="fade-up" data-aos-delay="200">
              <div className="feature-icon-wrapper">
                <span className="feature-icon">👩‍🏫</span>
                <div className="icon-bg"></div>
              </div>
              <h3>Expert Mentors</h3>
              <p>Seasoned educators from India's top coaching institutes, bringing excellence to every classroom.</p>
              <div className="feature-hover-content">
                <ul>
                  <li>Kota's finest educators</li>
                  <li>1:1 mentorship</li>
                  <li>Innovative teaching methods</li>
                </ul>
              </div>
            </div>

            <div className="modern-feature-card" data-aos="fade-up">
              <div className="feature-icon-wrapper">
                <span className="feature-icon">🧠</span>
                <div className="icon-bg"></div>
              </div>
              <h3>Brain Power</h3>
              <p>Comprehensive development of cognitive and emotional intelligence for well-rounded growth.</p>
              <div className="feature-hover-content">
                <ul>
                  <li>EQ + IQ development</li>
                  <li>Critical thinking focus</li>
                  <li>Analytical skills training</li>
                </ul>
              </div>
            </div>

            <div className="modern-feature-card" data-aos="fade-up" data-aos-delay="100">
              <div className="feature-icon-wrapper">
                <span className="feature-icon">⚡</span>
                <div className="icon-bg"></div>
              </div>
              <h3>Beyond Classroom</h3>
              <p>Signature programs and activities that go beyond textbooks to shape confident individuals.</p>
              <div className="feature-hover-content">
                <ul>
                  <li>EduSports program</li>
                  <li>30+ clubs & societies</li>
                  <li>Leadership opportunities</li>
                </ul>
              </div>
            </div>

            <div className="modern-feature-card cta-card" data-aos="fade-up" data-aos-delay="200">
              <div className="cta-card-content">
                <h3>Ready to Join the GOS Family?</h3>
                <p>Schedule a campus tour and see the GOS difference for yourself.</p>
                <div className="button-group">
                  <a href="#contact" className="primary-button">Book a Tour</a>
                  <a href="tel:+919876543210" className="secondary-button">Call Us Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leaders' Messages Section - Compact */}
      <section className="leaders-section" id="leaders">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Straight from the <span className="highlight">Leadership</span></h2>
          </div>
          
          <div className="leaders-container">
            <div className="leaders-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {leaders.map((leader, index) => (
                <div key={index} className="leader-card">
                  <div className="leader-image">
                    <img 
                      src={leader.image} 
                      alt={leader.name}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://via.placeholder.com/200x300?text=Leader+Image';
                      }}
                    />
                  </div>
                  <div className="leader-details">
                    <div className="leader-info">
                      <h3>{leader.name}</h3>
                      <p className="position">{leader.position}</p>
                      <p className="expertise">{leader.expertise}</p>
                    </div>
                    <div className="leader-message">
                      <p>"{leader.message}"</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="leaders-nav">
            <button 
              className="nav-arrow prev" 
              onClick={prevSlide}
              disabled={currentSlide === 0}
              aria-label="Previous leader"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
            
            <div className="nav-dots">
              {leaders.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`View ${leaders[index].name}`}
                  aria-current={index === currentSlide}
                />
              ))}
            </div>
            
            <button 
              className="nav-arrow next"
              onClick={nextSlide}
              disabled={currentSlide === leaders.length - 1}
              aria-label="Next leader"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 id='cta-title'>Ready to Join the GOS Fam?</h2>
          <p id='cta-subtitle'>Join our community of learners and innovators today</p>
          <button className="primary-button">Apply Now</button>
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
    </div>
  );
};

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/life-at-gos" element={<LifeAtGos />} />
          <Route path="/campuses" element={<Campuses />} />
          <Route path="/campuses/:campusId" element={<CampusLayout />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/gos-social" element={<GosSocial />} />
          <Route path="/accolades" element={<Accolades />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
