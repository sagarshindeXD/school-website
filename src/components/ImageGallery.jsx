import React from 'react';
import '../styles/ImageGallery.css';

// Sample images - replace these with your actual image paths
const galleryImages = [
  '/gallery/image1.jpg',
  '/gallery/image2.jpg',
  '/gallery/image3.jpg',
  '/gallery/image4.jpg',
  '/gallery/image5.jpg',
  '/gallery/image6.jpg',
  '/gallery/image7.jpg',
  '/gallery/image8.jpg',
  '/gallery/image9.jpg',
  '/gallery/image10.jpg',
  '/gallery/image11.jpg',
  '/gallery/image12.jpg',
  '/gallery/image13.jpg',
  '/gallery/image14.jpg',
];

const ImageGallery = () => {
  // Duplicate the images array to create a continuous loop effect
  const duplicatedImages = [...galleryImages, ...galleryImages];

  return (
    <section className="image-gallery-section" id="gallery">
      <div className="section-header">
        <h2>Glimpses of Gurukul</h2>
        <p>Experience the vibrant life at Gurukul Olympiad School through our gallery</p>
      </div>
      
      {/* First Row */}
      <div className="gallery-container">
        <div className="gallery-track">
          {duplicatedImages.map((image, index) => (
            <div key={`first-${index}`} className="gallery-item">
              <img 
                src={image} 
                alt={`Gallery item ${index + 1}`}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://source.unsplash.com/random/400x300/?school,education,${index}`;
                }}
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Second Row - Offset */}
      <div className="gallery-container second-row">
        <div className="gallery-track" style={{ animationDirection: 'reverse' }}>
          {duplicatedImages.map((image, index) => (
            <div key={`second-${index}`} className="gallery-item">
              <img 
                src={image} 
                alt={`Gallery item ${index + 1}`}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://source.unsplash.com/random/400x300/?student,classroom,${index}`;
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
