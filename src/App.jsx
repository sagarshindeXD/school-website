import { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
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
      {/* Navigation */}
      <nav className={isScrolled ? 'nav scrolled' : 'nav'}>
        <div className="nav-container">
          <div className="nav-links">
            <a href="#home" className="logo-link">
              <img src="/logos/gos.png" alt="GOS Logo" className="nav-logo" />
            </a>
            <a href="#home" className="active">Home</a>
            <a href="#about">About</a>
            <a href="#life-at-gos">Life at GOS</a>
            
            <div className="dropdown">
              <button className="dropbtn">Campuses</button>
              <div className="dropdown-content">
                <a href="#airport-campus">Airport Campus</a>
                <a href="#city-campus">City Campus</a>
                <a href="#osmanpura-campus">Osmanpura Campus</a>
              </div>
            </div>
            
            <a href="#admissions">Admissions</a>
            <a href="#mandatory-disclosure">Mandatory Public Disclosure</a>
            
            <div className="dropdown">
              <button className="dropbtn">More</button>
              <div className="dropdown-content">
                <a href="#gos-social">GOS Social</a>
                <a href="#accolades">Accolades</a>
              </div>
            </div>
          </div>
          <button className="cta-button">Apply Now</button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero" id="home" style={{ backgroundImage: 'url(/logos/hero.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <div className="hero-content">
          <h1>Level Up Your Future with Next-Gen Learning</h1>
          <p>Join our vibrant learning community where education meets creativity and technology</p>
          <div className="hero-buttons">
            <button className="primary-button">Explore Programs</button>
            <button className="secondary-button">Virtual Tour</button>
          </div>
        </div>
      </header>

      {/* About Us Section */}
      <section className="about" id="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Welcome to GOS - Where Legends are Made</h2>
              <p>Welcome to Gurukul Olympiad School, a harmonious collective of schools dedicated to delivering exceptional education to all. Here, the pursuit of academic brilliance goes hand in hand with the chase of audacious dreams. As a reputable educational institution, we believe in the complete development of our students, creating a balanced platform where rigorous academia converges with myriad opportunities for daring dreams and innovation.</p>
              <p>Gurukul Olympiad School is more than a traditional school; we are a bustling epicenter of knowledge, creativity, and forward-thinking. Our unique approach to education cultivates an ambiance of curiosity and innovation, encouraging our students to morph into proactive, involved learners who excel not just academically but also in navigating real-world challenges.</p>
              <div className="stats-grid">
                <div className="stat-item">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Years of Excellence</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">95%</span>
                  <span className="stat-label">Success Rate</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Expert Educators</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">1000+</span>
                  <span className="stat-label">Successful Alumni</span>
                </div>
              </div>
            </div>
            <div className="about-image">
              <img src="/logos/about.png" alt="About Gurukul Olympiad School" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="features" id="why-us">
        <div className="container">
          <h2>Why GOS is Lit</h2>
          <p className="section-subtitle">Discover what makes Gurukul Olympiad School the perfect choice for your child's future</p>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="card-icon">🎯</div>
              <h3>Our Vibe</h3>
              <p>Nurturing each child's unique potential through an integrated education approach that blends academic learning with competitive preparation and future career readiness.</p>
            </div>

            <div className="feature-card">
              <div className="card-icon">📚</div>
              <h3>How We Do It</h3>
              <p>Pioneering the SWitCh model that integrates schooling with coaching, providing early preparation for national level entrances and competitive exams as per NCERT and CBSE standards.</p>
            </div>

            <div className="feature-card">
              <div className="card-icon">👩‍🏫</div>
              <h3>Brainiac Squad</h3>
              <p>Expert educators from Kota's coaching excellence background, dedicated to nurturing each child's uniqueness through innovative teaching methodologies and personalized attention.</p>
            </div>

            <div className="feature-card">
              <div className="card-icon">🌱</div>
              <h3>More Than Just Books</h3>
              <p>Comprehensive focus on EQ, IQ, reasoning, logical thinking, and analytical skills, preparing students for academic excellence and personal growth.</p>
            </div>

            <div className="feature-card">
              <div className="card-icon">⚽</div>
              <h3>Beyond the Books</h3>
              <p>Diverse opportunities through clubs, societies, and our signature 'EduSports' program for a perfect balance of academics and physical development.</p>
            </div>

            <div className="feature-card">
              <div className="card-icon">👨‍👩‍👧‍👦</div>
              <h3>Squad Goals for Parents</h3>
              <p>Active parent community with regular interactions, workshops, and support systems to foster positive parenting and student success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leaders' Messages Section */}
      <section className="leaders" id="leaders">
        <div className="container">
          <h2>Straight from the Bosses</h2>
          <p className="section-subtitle">Hear from the visionaries shaping the future of Gurukul Olympiad School</p>
          
          <div className="leaders-carousel">
            <div className="leaders-vertical">
              {leaders.map((leader, index) => (
                <div 
                  key={index}
                  className={`leader-vertical-card ${index === currentSlide ? 'active' : ''}`}
                  style={{
                    transform: `translateY(${(index - currentSlide) * 100}%)`,
                    transition: 'transform 0.5s ease-in-out',
                    position: 'absolute',
                    width: '100%',
                    top: 0,
                    left: 0,
                    opacity: index === currentSlide ? 1 : 0,
                    visibility: index === currentSlide ? 'visible' : 'hidden',
                    transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out, visibility 0.5s'
                  }}
                >
                  <div className="leader-vertical-image">
                    <img src={leader.image} alt={leader.name} />
                  </div>
                  <div className="leader-vertical-content">
                    <h3>{leader.name}</h3>
                    <p className="position">{leader.position}</p>
                    <p className="expertise">{leader.expertise}</p>
                    <div className="message">
                      <p>"{leader.message}"</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="leader-navigation">
              <button className="nav-arrow prev" onClick={prevSlide} aria-label="Previous leader">
                <span>&#10094;</span>
              </button>
              <div className="leader-dots">
                {leaders.map((_, index) => (
                  <button 
                    key={index}
                    className={`dot ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                    aria-label={`View ${leaders[index].name}`}
                  ></button>
                ))}
              </div>
              <button className="nav-arrow next" onClick={nextSlide} aria-label="Next leader">
                <span>&#10095;</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Join the GOS Fam?</h2>
          <p>Join our community of learners and innovators today</p>
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
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#admissions">Admissions</a></li>
                <li><a href="#mandatory-disclosure">Mandatory Public Disclosure</a></li>
                <li><a href="#contact">Contact Us</a></li>
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
}

export default App;
