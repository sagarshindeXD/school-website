import React from 'react';
import { useParams } from 'react-router-dom';
import CampusLayout from './CampusLayout';

const AirportCampus = () => {
  const campus = {
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
  };

  return <CampusLayout campus={campus} />;
};

export default AirportCampus;
