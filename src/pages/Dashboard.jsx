import React from 'react';
import Carousel from '../components/Carousel';
import StatsCards from '../components/StatsCards';
import DashboardContent from '../components/DashboardContent';
import Highlights from '../components/Highlights';
import VisionMission from '../components/VisionMission';
import ParallaxSection from '../components/ParallaxSection';

const Dashboard = () => {
  const BASE = import.meta.env.BASE_URL;
  return (
    <div className="main-content">
    
      <Carousel />
      <StatsCards />
      <DashboardContent />
      <Highlights />
        <ParallaxSection 
        backgroundImage={`${BASE}parallax.png`}
        overlayColor="rgba(46, 139, 87, 0.8)" 
        title="Siap Menjadi Talenta Digital?"
        content="Kami mencetak lulusan yang tidak hanya pandai coding, tetapi juga mampu menganalisis masalah dan menciptakan solusi cerdas melalui teknologi. Mari wujudkan masa depan digital bersama Ilmu Komputer UNIMED."
      />
      <VisionMission />
        <ParallaxSection 
        backgroundImage={`${BASE}parallax.png`}
        overlayColor="rgba(44, 62, 80, 0.85)" 
        title="Lingkungan Belajar Kolaboratif"
        content="Bergabunglah dalam ekosistem akademik yang mendukung kreativitas. Di sini, kami belajar, berinovasi, dan tumbuh bersama untuk memberikan dampak positif bagi bangsa melalui sains dan teknologi."
      />
    </div>
  );
};

export default Dashboard;