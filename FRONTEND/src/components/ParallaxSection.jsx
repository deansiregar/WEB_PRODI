import React from 'react';

const ParallaxSection = ({ backgroundImage, overlayColor, title, content }) => {
  return (
    <div 
      className="parallax-section" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="parallax-overlay" style={{ background: overlayColor }}>
        <div className="parallax-content">
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default ParallaxSection;