import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaHeart, FaComment, FaShare, FaPlay } from 'react-icons/fa';
import '../styles/GosSocial.css';

const GosSocial = () => {
  // Sample social media posts data
  const socialPosts = [
    {
      id: 1,
      platform: 'Facebook',
      username: 'GurukulOlympiadSchool',
      content: 'Our students participated in the National Science Exhibition and won the first prize! 🎉 #GOSPride #ScienceFair2024',
      time: '2 hours ago',
      likes: 124,
      comments: 28,
      shares: 15,
      image: '/images/events/science-fair.jpg'
    },
    {
      id: 2,
      platform: 'Twitter',
      username: 'GOS_Updates',
      content: 'Exciting news! Our school has been ranked among the top 10 schools in the state for academic excellence. Thank you to our amazing students and faculty! #GOSExcellence',
      time: '1 day ago',
      likes: 356,
      comments: 42,
      shares: 87,
      image: '/images/achievements/top-school.jpg'
    },
    {
      id: 3,
      platform: 'Instagram',
      username: 'GurukulOlympiadSchool',
      content: 'Annual Sports Day was a grand success! 🏆 Students showcased incredible talent and sportsmanship. Swipe to see the highlights! #GOSSportsDay',
      time: '3 days ago',
      likes: 512,
      comments: 67,
      shares: 34,
      image: '/images/events/sports-day.jpg',
      isVideo: true
    }
  ];

  return (
    <div className="gos-social">
      <main className="social-container">
        <div className="container">
          <h1 className="page-title">Gurukul Olympiad School Social Feed</h1>
          <div className="social-feed">
            {socialPosts.map((post) => (
              <div key={post.id} className="social-card">
                <div className="post-header">
                  <div className="platform-icon">
                    {post.platform === 'Facebook' && <FaFacebook />}
                    {post.platform === 'Twitter' && <FaTwitter />}
                    {post.platform === 'Instagram' && <FaInstagram />}
                  </div>
                  <div className="post-meta">
                    <span className="username">@{post.username}</span>
                    <span className="platform">on {post.platform}</span>
                    <span className="time">{post.time}</span>
                  </div>
                </div>
                <div className="post-content">
                  <p>{post.content}</p>
                  {post.image && (
                    <div className="post-media">
                      {post.isVideo ? (
                        <div className="video-thumbnail">
                          <img src={post.image} alt="Video thumbnail" />
                          <div className="play-button">
                            <FaPlay />
                          </div>
                        </div>
                      ) : (
                        <img src={post.image} alt="Post content" />
                      )}
                    </div>
                  )}
                </div>
                <div className="post-actions">
                  <button className="action-btn">
                    <FaHeart /> {post.likes}
                  </button>
                  <button className="action-btn">
                    <FaComment /> {post.comments}
                  </button>
                  <button className="action-btn">
                    <FaShare /> {post.shares}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <aside className="social-sidebar">
            <div className="sidebar-widget connect-widget">
              <h3>Connect With Us</h3>
              <p className="connect-description">Stay updated with our latest news, events, and achievements by following us on social media or reaching out directly.</p>
              
              <div className="social-links">
                <a href="https://facebook.com/gurukulolympiadschool" target="_blank" rel="noopener noreferrer" className="social-link facebook">
                  <span className="social-icon"><FaFacebook /></span>
                  <span className="social-text">/gurukulolympiadschool</span>
                  <span className="social-follow">Follow</span>
                </a>
                <a href="https://twitter.com/gurukuloschool" target="_blank" rel="noopener noreferrer" className="social-link twitter">
                  <span className="social-icon"><FaTwitter /></span>
                  <span className="social-text">@gurukuloschool</span>
                  <span className="social-follow">Follow</span>
                </a>
                <a href="https://instagram.com/gurukulolympiadschool" target="_blank" rel="noopener noreferrer" className="social-link instagram">
                  <span className="social-icon"><FaInstagram /></span>
                  <span className="social-text">@gurukulolympiadschool</span>
                  <span className="social-follow">Follow</span>
                </a>
                <a href="https://youtube.com/gurukulolympiadschool" target="_blank" rel="noopener noreferrer" className="social-link youtube">
                  <span className="social-icon"><FaYoutube /></span>
                  <span className="social-text">Gurukul Olympiad School</span>
                  <span className="social-follow">Subscribe</span>
                </a>
              </div>
              
              <div className="contact-info">
                <h4>Contact Information</h4>
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <span>info@gurukulolympiad.edu</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <span>+91 98765 43210</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>123 Knowledge Street, Education Hub, City - 123456</span>
                </div>
              </div>
            </div>

            <div className="sidebar-widget">
              <h3>Latest Events</h3>
              <ul className="event-list">
                <li>Annual Science Fair - Oct 15, 2024</li>
                <li>Sports Day - Nov 5, 2024</li>
                <li>Cultural Fest - Dec 20, 2024</li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default GosSocial;
