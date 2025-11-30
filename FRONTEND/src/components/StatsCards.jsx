import React from 'react';

const StatsCards = () => {
  const stats = [
    {
      icon: "fas fa-user-graduate",
      type: "student",
      value: "Gak tau aku cuk",
      label: "Total Mahasiswa"
    },
    {
      icon: "fas fa-chalkboard-teacher",
      type: "lecturer",
      value: "15",
      label: "Dosen & Tenaga Pendidik"
    },
    {
      icon: "fas fa-book",
      type: "course",
      value: "?",
      label: "Mata Kuliah"
    }
  ];

  return (
    <div className="stats-container">
      {stats.map((stat, index) => (
        <div key={index} className="stat-card">
          <div className={`stat-icon ${stat.type}`}>
            <i className={stat.icon}></i>
          </div>
          <div className="stat-info">
            <h3>{stat.value}</h3>
            <p>{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;