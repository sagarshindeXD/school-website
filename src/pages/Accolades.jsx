import React from 'react';
import { FaTrophy, FaAward, FaMedal, FaGraduationCap } from 'react-icons/fa';
import Footer from '../components/Footer';
import '../styles/Accolades.css';

const Accolades = () => {
  const accolades = [
    {
      id: 1,
      title: 'Top School Award 2024',
      description: 'Recognized as one of the top 10 schools in the state for academic excellence and holistic development.',
      icon: <FaTrophy className="accolade-icon" />,
      year: '2024'
    },
    {
      id: 2,
      title: 'Best STEM Program',
      description: 'Awarded for outstanding contributions to STEM education and innovation in teaching methodologies.',
      icon: <FaAward className="accolade-icon" />,
      year: '2023'
    },
    {
      id: 3,
      title: 'Sports Excellence',
      description: 'State champions in basketball and athletics for three consecutive years.',
      icon: <FaMedal className="accolade-icon" />,
      year: '2022-2024'
    },
    {
      id: 4,
      title: '100% Board Results',
      description: 'Consistent 100% pass rate in board examinations with 85% students scoring distinction.',
      icon: <FaGraduationCap className="accolade-icon" />,
      year: '2023'
    }
  ];

  return (
    <div className="accolades-page">
      <section className="accolades-container">
        <div className="container">
          <div className="section-header">
            <h1>Our Accolades</h1>
            <p>Celebrating excellence in education and beyond</p>
          </div>
          <div className="accolades-grid">
            {accolades.map((accolade) => (
              <div key={accolade.id} className="accolade-card">
                <div className="accolade-icon-container">
                  {accolade.icon}
                </div>
                <div className="accolade-content">
                  <h3>{accolade.title}</h3>
                  <p>{accolade.description}</p>
                  <span className="accolade-year">{accolade.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Accolades;
