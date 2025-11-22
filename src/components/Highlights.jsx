import React from 'react';

const Highlights = () => {
  const highlights = [
    {
      icon: "fas fa-laptop-code",
      title: "Lorem, ipsum.",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, debitis."
    },
    {
      icon: "fas fa-chalkboard-teacher",
      title: "Lorem, ipsum.",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, magni!"
    },
    {
      icon: "fas fa-flask",
      title: "Lorem, ipsum.",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, consequuntur."
    }
  ];

  return (
    <div className="highlights-section">
      <div className="section-title">
        <h2>Keunggulan Program Studi</h2>
      </div>
      <div className="highlights-grid">
        {highlights.map((highlight, index) => (
          <div key={index} className="highlight-card">
            <div className="highlight-icon">
              <i className={highlight.icon}></i>
            </div>
            <h3>{highlight.title}</h3>
            <p>{highlight.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Highlights;