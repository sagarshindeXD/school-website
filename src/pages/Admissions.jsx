import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import '../styles/Admissions.css';

const Admissions = () => {
  const admissionProcess = [
    {
      step: 1,
      title: 'Inquiry',
      description: 'Submit an online inquiry form or visit our campus for more information.',
      icon: '📝'
    },
    {
      step: 2,
      title: 'Campus Tour',
      description: 'Schedule a personalized tour to experience our facilities and meet our faculty.',
      icon: '🏫'
    },
    {
      step: 3,
      title: 'Application',
      description: 'Complete the application form and submit required documents.',
      icon: '📋'
    },
    {
      step: 4,
      title: 'Assessment',
      description: 'Students may be required to take an assessment test.',
      icon: '✏️'
    },
    {
      step: 5,
      title: 'Interview',
      description: 'An interview with the admission committee may be scheduled.',
      icon: '💬'
    },
    {
      step: 6,
      title: 'Enrollment',
      description: 'Complete the enrollment process and secure your seat.',
      icon: '✅'
    }
  ];

  const facilities = [
    {
      id: 1,
      title: 'Modern Classrooms',
      image: '/images/classroom.jpg',
      description: 'Spacious and technology-enabled learning spaces'
    },
    {
      id: 2,
      title: 'Science Labs',
      image: '/images/lab.jpg',
      description: 'Well-equipped laboratories for hands-on learning'
    },
    {
      id: 3,
      title: 'Library',
      image: '/images/library.jpg',
      description: 'Extensive collection of books and digital resources'
    },
    {
      id: 4,
      title: 'Sports Facilities',
      image: '/images/sports.jpg',
      description: 'Indoor and outdoor sports facilities'
    },
    {
      id: 5,
      title: 'Art & Music',
      image: '/images/art.jpg',
      description: 'Creative spaces for artistic expression'
    },
    {
      id: 6,
      title: 'Cafeteria',
      image: '/images/cafeteria.jpg',
      description: 'Healthy and hygienic dining options'
    }
  ];

  return (
    <div className="admissions-page">
      {/* Main Content */}
      <div className="main-content">

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <div className="container">
          <h2>Why Choose GOS?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🏆</div>
              <h3>Academic Excellence</h3>
              <p>Consistently outstanding board results and olympiad achievements</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👩‍🏫</div>
              <h3>Expert Faculty</h3>
              <p>Highly qualified and experienced teaching staff</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌍</div>
              <h3>Global Outlook</h3>
              <p>International curriculum and exchange programs</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💡</div>
              <h3>Holistic Development</h3>
              <p>Focus on academics, sports, arts, and life skills</p>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section id="admission-process" className="admission-process">
        <div className="container">
          <h2>Admission Process</h2>
          <div className="process-steps">
            {admissionProcess.map((step, index) => (
              <div key={step.step} className="process-step">
                <div className="step-number">{step.step}</div>
                <div className="step-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Showcase */}
      <section className="facilities-showcase">
        <div className="container">
          <h2>Our Facilities</h2>
          <div className="facilities-grid">
            {facilities.map((facility) => (
              <div key={facility.id} className="facility-card">
                <div className="facility-image">
                  <img 
                    src={facility.image} 
                    alt={facility.title}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/logos/hero.png';
                    }}
                  />
                </div>
                <div className="facility-content">
                  <h3>{facility.title}</h3>
                  <p>{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      </div>
      
      {/* CTA Section */}
      <section className="enroll-cta">
        <div className="container">
          <div className="enroll-content">
            <h2>Ready to Begin Your Child's Journey?</h2>
            <p>Secure your child's future with quality education at Gurukul Olympiad School</p>
            <div className="button-group">
              <Link to="/contact" className="primary-button">Enroll Now</Link>
              <Link to="/campuses" className="secondary-button">Visit Our Campuses</Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Admissions;
