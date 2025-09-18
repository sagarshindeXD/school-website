import React from 'react';
import { useParams } from 'react-router-dom';
import CampusLayout from './CampusLayout';

const OsmanpuraCampus = () => {
  const campus = {
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
  };

  return <CampusLayout campus={campus} />;
};

export default OsmanpuraCampus;
