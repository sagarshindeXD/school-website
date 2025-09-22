import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/LifeAtGos.css';
import Footer from '../components/Footer';

const AnimatedCounter = ({ value, duration = 2000 }) => {
  const counterRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            animateValue(counterRef.current, 0, value, duration);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [value, duration]);

  const animateValue = (element, start, end, duration) => {
    const range = end - start;
    const startTime = performance.now();
    
    const updateCounter = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentValue = Math.floor(progress * range + start);
      
      if (element) {
        element.textContent = currentValue.toLocaleString();
      }
      
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else if (element) {
        element.textContent = end.toLocaleString();
      }
    };
    
    requestAnimationFrame(updateCounter);
  };

  return <span ref={counterRef}>0</span>;
};

const LifeAtGos = () => {
  return (
    <div className="life-at-gos">
      {/* Life at GOS Section */}
      <section className="life-section">
        <div className="container">
          <h2 className="section-title">Life at GOS</h2>
          <p className="section-description">
            At Gurukul Olympiad School, we create an ecosystem where learning extends beyond classrooms, 
            fostering holistic development through innovation, creativity, and community engagement.
          </p>
          
          <div className="life-highlights">
            <div className="highlight-card">
              <div className="highlight-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3>Academic Excellence</h3>
              <p>Consistently achieving outstanding board results with 100% first-class distinctions</p>
            </div>
            
            <div className="highlight-card">
              <div className="highlight-icon">
                <i className="fas fa-trophy"></i>
              </div>
              <h3>Champions in Making</h3>
              <p>State and national level achievements in sports and co-curricular activities</p>
            </div>
            
            <div className="highlight-card">
              <div className="highlight-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Vibrant Community</h3>
              <p>Diverse student body with a strong sense of belonging and school spirit</p>
            </div>
            
            <div className="highlight-card">
              <div className="highlight-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3>Innovation Hub</h3>
              <p>State-of-the-art facilities for research, creativity, and technological advancement</p>
            </div>
          </div>
          
          <div className="life-stats">
            <div className="stat-item">
              <div className="stat-number">
                <AnimatedCounter value={100} duration={1500} />
              </div>
              <div className="stat-label">% Results</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">
                <AnimatedCounter value={50} duration={2000} />+
              </div>
              <div className="stat-label">Activities</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">
                <AnimatedCounter value={20} duration={1800} />+
              </div>
              <div className="stat-label">Years of Excellence</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">
                <AnimatedCounter value={1000} duration={2500} />+
              </div>
              <div className="stat-label">Successful Alumni</div>
            </div>
          </div>
        </div>
      </section>

      {/* Academics Section */}
      <section className="academics-section" id="academics">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Academic Excellence</h2>
          </div>
          
          <div className="academics-content">
            <div className="academics-main">
              <div className="academics-text">
                <h3>Excellence in Education</h3>
                <p>At GOS, we provide a holistic learning experience that goes beyond textbooks. Our innovative teaching methodologies and state-of-the-art facilities ensure every student reaches their full potential.</p>
                
                <div className="academics-stats">
                  <div className="stat-item">
                    <div className="stat-number"><AnimatedCounter value={98} duration={1500} />%</div>
                    <div className="stat-label">Board Results</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number"><AnimatedCounter value={90} duration={2000} />%</div>
                    <div className="stat-label">First Class</div>
                  </div>
                </div>
                
                <button className="primary-button">Explore Our Programs <i className="fas fa-arrow-right"></i></button>
              </div>
              
              <div className="academics-image">
                <img src="/logos/hero.png" alt="Students learning" />
              </div>
            </div>
            
          </div>
          
          <div className="academic-programs">
            <h3>Our Programs</h3>
            <div className="programs-grid">
              <div className="program-card">
                <div className="program-icon">
                  <i className="fas fa-child"></i>
                </div>
                <h4>Primary School</h4>
                <p>Nurturing curiosity and foundational skills in a supportive environment.</p>
                <span className="grade">Grade 1 - 5</span>
              </div>
              
              <div className="program-card">
                <div className="program-icon">
                  <i className="fas fa-user-graduate"></i>
                </div>
                <h4>Middle School</h4>
                <p>Encouraging exploration and building strong academic fundamentals.</p>
                <span className="grade">Grade 6 - 8</span>
              </div>
              
              <div className="program-card">
                <div className="program-icon">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <h4>High School</h4>
                <p>Preparing students for board examinations and future academic pursuits.</p>
                <span className="grade">Grade 9 - 12</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Co-curricular Activities */}
      <section className="activities-section">
        <div className="container">
          <div className="activities-header">
            <h2>Beyond the Classroom</h2>
            <p>Developing well-rounded individuals through diverse co-curricular programs</p>
          </div>
          
          <div className="activities-grid">
            <div className="activity-category">
              <div className="activity-icon">
                <i className="fas fa-futbol"></i>
              </div>
              <h3>Sports & Athletics</h3>
              <ul className="activity-list">
                <li>Athletics</li>
                <li>Basketball</li>
                <li>Badminton</li>
                <li>Table Tennis</li>
                <li>Chess</li>
                <li>Yoga</li>
              </ul>
            </div>
            
            <div className="activity-category">
              <div className="activity-icon">
                <i className="fas fa-music"></i>
              </div>
              <h3>Performing Arts</h3>
              <ul className="activity-list">
                <li>Western & Indian Music</li>
                <li>Classical & Contemporary Dance</li>
                <li>Drama & Theater</li>
                <li>Public Speaking</li>
                <li>Debate & Elocution</li>
              </ul>
            </div>
            
            <div className="activity-category">
              <div className="activity-icon">
                <i className="fas fa-atom"></i>
              </div>
              <h3>Clubs & Societies</h3>
              <ul className="activity-list">
                <li>Science & Innovation Club</li>
                <li>Math Olympiad Club</li>
                <li>Literary & Debate Society</li>
                <li>Eco Club</li>
                <li>Robotics Club</li>
                <li>Quiz Club</li>
              </ul>
            </div>
            
            <div className="activity-category">
              <div className="activity-icon">
                <i className="fas fa-paint-brush"></i>
              </div>
              <h3>Visual Arts</h3>
              <ul className="activity-list">
                <li>Drawing & Painting</li>
                <li>Clay Modeling</li>
                <li>Pottery</li>
                <li>Photography</li>
                <li>Digital Art</li>
              </ul>
            </div>
          </div>
          
          <div className="activities-cta">
            <p>Our students regularly participate in inter-school competitions and have won numerous accolades at district and state levels.</p>
            <button className="primary-button">View Gallery <i className="fas fa-images"></i></button>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="facilities-section">
        <div className="container">
          <div className="facilities-header">
            <h2>World-Class Facilities</h2>
            <p>State-of-the-art infrastructure designed to inspire and support academic excellence</p>
          </div>
          
          <div className="facilities-grid">
            <div className="facility-card">
              <div className="facility-image">
                <img src="/logos/hero.png" alt="State-of-the-art Campus" />
                <div className="facility-overlay"></div>
              </div>
              <div className="facility-content">
                <div className="facility-icon">
                  <i className="fas fa-school"></i>
                </div>
                <h3>State-of-the-art Campus</h3>
                <p>Our centrally located campus features modern classrooms equipped with advanced educational technology, facilitating an engaging and interactive learning environment.</p>
              </div>
            </div>
            
            <div className="facility-card">
              <div className="facility-image">
                <img src="/logos/about.png" alt="Laboratories" />
                <div className="facility-overlay"></div>
              </div>
              <div className="facility-content">
                <div className="facility-icon">
                  <i className="fas fa-flask"></i>
                </div>
                <h3>Laboratories</h3>
                <p>We house well-equipped laboratories for various science and technology subjects. These labs provide practical exposure and hands-on learning experiences, enhancing students' understanding of theoretical concepts.</p>
              </div>
            </div>
            
            <div className="facility-card">
              <div className="facility-image">
                <img src="/images/library.jpg" alt="Library" />
                <div className="facility-overlay"></div>
              </div>
              <div className="facility-content">
                <div className="facility-icon">
                  <i className="fas fa-book-reader"></i>
                </div>
                <h3>Library</h3>
                <p>Our well-resourced library hosts a vast collection of books, journals, and digital resources across diverse disciplines, fostering a culture of reading, research, and self-study among students.</p>
              </div>
            </div>
            
            <div className="facility-card">
              <div className="facility-image">
                <img src="/logos/about-2.png" alt="Sports Facilities" />
                <div className="facility-overlay"></div>
              </div>
              <div className="facility-content">
                <div className="facility-icon">
                  <i className="fas fa-running"></i>
                </div>
                <h3>Sports Facilities</h3>
                <p>GOS features extensive sports facilities as part of our 'EduSports' program. From playgrounds for outdoor games to well-maintained indoor sports arenas, we offer ample opportunities for students to engage in physical activities and sports.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LifeAtGos;
