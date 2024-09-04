import React from 'react';
import Card from './components/Card';
import Introduction from './components/Introduction';
import Likes from './components/Likes';
import Dislikes from './components/Dislikes';
import Hobbies from './components/Hobbies';
import './AboutMe.css';
import githubIcon from './assets/github-icon.png';
import linkedinIcon from './assets/linkedin-icon.png';
import instagramIcon from './assets/instagram-icon.png';
import facebookIcon from './assets/facebook-icon.png';

const AboutMe = () => {
  return (
    <div className="max-w-md mx-auto p-4 bg-blue-100 min-h-screen">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-blue-500 h-24"></div>
        <div className="relative px-4 py-5 sm:px-6 -mt-16 text-center">
          <img
            className="mx-auto h-32 w-32 rounded-full border-4 border-white"
            src="/assets/Vaughn Roche de Roda.jpg"
            alt="Vaughn Roche T. de Roda"
          />
          <h1 className="mt-2 text-2xl font-bold text-gray-900">
            Vaughn Roche T. de Roda
          </h1>
          <p className="text-sm text-gray-600">
            Bachelor of Science in Data Science | 1st Year
            <br />
            Birthday: December 22, 2004 | Age: 19
          </p>
        </div>

        <Card title="Introduction" content={<Introduction />} />
        <Card title="Likes" content={<Likes />} />
        <Card title="Dislikes" content={<Dislikes />} />
        <Card title="Hobbies" content={<Hobbies />} />

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