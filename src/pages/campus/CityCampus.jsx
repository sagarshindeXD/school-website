import React from 'react';
import { useParams } from 'react-router-dom';
import CampusLayout from './CampusLayout';

const CityCampus = () => {
  const campus = {
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
  };

  return <CampusLayout campus={campus} />;
};

export default CityCampus;
