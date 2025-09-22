import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaHeart, FaComment, FaShare, FaPlay } from 'react-icons/fa';
import Footer from '../components/Footer';
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
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GosSocial;
