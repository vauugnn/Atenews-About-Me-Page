import React from 'react';
import Card from './components/Card';
import Introduction from './components/Introduction';
import Likes from './components/Likes';
import Dislikes from './components/Dislikes';
import Hobbies from './components/Hobbies';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div className="profile-card">
        <div className="profile-header"></div>
        <div className="profile-content">
          <div className="profile-image-container">
            <img
              className="profile-image"
              src="/assets/Vaughn Roche de Roda.jpg"
              alt="Vaughn Roche T. de Roda"
            />
          </div>
          <div className="profile-info">
            <h1 className="profile-name">Vaughn Roche T. de Roda</h1>
            <p className="profile-details">
              Bachelor of Science in Data Science | 1st Year
              <br />
              Birthday: December 22, 2004 | Age: 19
            </p>
          </div>
        </div>

        <div className="profile-section">
          <Card title="Introduction" content={<Introduction />} />
        </div>
        <div className="profile-section">
          <Card title="Likes" content={<Likes />} />
        </div>
        <div className="profile-section">
          <Card title="Dislikes" content={<Dislikes />} />
        </div>
        <div className="profile-section">
          <Card title="Hobbies" content={<Hobbies />} />
        </div>

        <div className="social-links-container">
            <div className="social-links">
              <a href="https://github.com/vauugnn" className="social-link">
                <img src="/assets/socmed/github.png" alt="GitHub" className="social-icon" />
              </a>
              <a href="https://www.linkedin.com/in/vaughn-roche-de-roda-92a4752ab/" className="social-link">
                <img src="/assets/socmed/linkedin.png" alt="LinkedIn" className="social-icon" />
              </a>
              <a href="https://www.instagram.com/vauugnn/" className="social-link">
                <img src="/assets/socmed/instagram.png" alt="Instagram" className="social-icon" />
              </a>
              <a href="https://www.facebook.com/vaughnderoda" className="social-link">
              <img src="/assets/socmed/Facebook.png" alt="Facebook" className="social-icon" />
              </a>
            </div>
          </div>
      </div>    
    </div>
  );
};

export default AboutMe;