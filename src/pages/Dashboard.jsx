import React from 'react';
import Carousel from '../components/Carousel';
import StatsCards from '../components/StatsCards';
import DashboardContent from '../components/DashboardContent';
import Highlights from '../components/Highlights';
import VisionMission from '../components/VisionMission';
import ParallaxSection from '../components/ParallaxSection';

const Dashboard = () => {
  return (
    <div className="main-content">
    
      <Carousel />
      <StatsCards />
      <DashboardContent />
      <Highlights />
      <ParallaxSection 
        backgroundImage="parallax.png"
        overlayColor="rgba(46, 139, 87, 0.7)"
        title="Lorem ipsum dolor sit amet."
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dolorem quo eius incidunt laudantium in, numquam error doloribus. Modi, illum."
      />
      <VisionMission />
      <ParallaxSection 
        backgroundImage="parallax.png"
        overlayColor="rgba(44, 62, 80, 0.7)"
        title="Lorem ipsum dolor sit amet."
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur pariatur quaerat placeat voluptas odio, voluptate veniam in qui fuga deleniti!"
      />
    </div>
  );
};

export default Dashboard;