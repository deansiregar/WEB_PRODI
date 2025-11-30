import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Jadwal = () => {
  const [scheduleData, setScheduleData] = useState({});
  const [loading, setLoading] = useState(true);
  
  // State Filter
  const [selectedBlock, setSelectedBlock] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('');
  const [selectedClass, setSelectedClass] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/jadwal')
      .then(res => {
        const rawData = res.data;
        
        // TRANSFORMASI DATA: Dari Flat Array ke Nested Object
        // Struktur: { "BLOK I": { "SEMESTER 1": { "KELAS 25A": { "Senin": [...] } } } }
        const structuredData = {};

        rawData.forEach(item => {
            if (!structuredData[item.blok]) structuredData[item.blok] = {};
            if (!structuredData[item.blok][item.semester]) structuredData[item.blok][item.semester] = {};
            if (!structuredData[item.blok][item.semester][item.kelas]) structuredData[item.blok][item.semester][item.kelas] = {};
            if (!structuredData[item.blok][item.semester][item.kelas][item.hari]) structuredData[item.blok][item.semester][item.kelas][item.hari] = [];

            structuredData[item.blok][item.semester][item.kelas][item.hari].push({
                time: item.jam,
                subject: item.mataKuliah,
                lecturer: item.dosen,
                room: item.ruangan
            });
        });

        // Sorting jam agar berurutan
        // (Opsional, tapi bagus agar jam 08.00 muncul sebelum 13.00)
        // ...

        setScheduleData(structuredData);
        
        // Set Default Pilihan Filter agar tidak kosong saat pertama load
        const firstBlock = Object.keys(structuredData)[0];
        if (firstBlock) {
            setSelectedBlock(firstBlock);
            const firstSem = Object.keys(structuredData[firstBlock])[0];
            if (firstSem) {
                setSelectedSemester(firstSem);
                const firstClass = Object.keys(structuredData[firstBlock][firstSem])[0];
                if (firstClass) setSelectedClass(firstClass);
            }
        }

        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // Helper untuk mendapatkan list semester berdasarkan blok yang dipilih
  const getSemesters = () => {
      if (!selectedBlock || !scheduleData[selectedBlock]) return [];
      return Object.keys(scheduleData[selectedBlock]);
  };

  // Helper untuk mendapatkan list kelas berdasarkan semester yang dipilih
  const getClasses = () => {
      if (!selectedBlock || !selectedSemester || !scheduleData[selectedBlock]?.[selectedSemester]) return [];
      return Object.keys(scheduleData[selectedBlock][selectedSemester]);
  };

  // Helper untuk mengambil data jadwal final
  const getFinalSchedule = () => {
      try {
          return scheduleData[selectedBlock][selectedSemester][selectedClass] || null;
      } catch (e) {
          return null;
      }
  };

  const schedule = getFinalSchedule();

  const styles = {
    filterContainer: { backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)', marginBottom: '24px', display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center', borderTop: '4px solid var(--primary)' },
    selectGroup: { display: 'flex', flexDirection: 'column', gap: '8px', flex: '1', minWidth: '200px' },
    label: { fontWeight: '600', color: '#2c3e50', fontSize: '0.9rem' },
    select: { padding: '10px 12px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '1rem', color: '#333', outline: 'none', cursor: 'pointer' },
    dayCard: { backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)', marginBottom: '24px', overflow: 'hidden' },
    dayHeader: { backgroundColor: 'var(--primary)', color: 'white', padding: '12px 20px', fontWeight: 'bold', fontSize: '1.2rem', display: 'flex', alignItems: 'center' },
    classItem: { padding: '16px 20px', borderBottom: '1px solid #eee', display: 'grid', gridTemplateColumns: '120px 1fr 150px', gap: '16px', alignItems: 'start' },
    timeBox: { backgroundColor: '#e8f5e9', color: 'var(--primary)', padding: '6px 12px', borderRadius: '20px', fontWeight: '600', fontSize: '0.85rem', textAlign: 'center', display: 'inline-block', whiteSpace: 'nowrap' },
    roomBadge: { display: 'flex', alignItems: 'center', gap: '6px', color: '#3CB371', fontWeight: '600', fontSize: '0.95rem', justifyContent: 'flex-end' }
  };

  if (loading) return <div className="main-content" style={{textAlign: 'center', padding: '50px'}}>Loading Jadwal...</div>;

  return (
    <div className="main-content">
      <div className="header">
        <h1>Jadwal Kuliah</h1>
        <p style={{ color: 'var(--gray)', marginTop: '5px' }}>Semester Ganjil TA. 2025/2026</p>
      </div>
      
      {/* Filter Section */}
      <div style={styles.filterContainer}>
        <div style={styles.selectGroup}>
          <label style={styles.label}>Pilih Blok</label>
          <select style={styles.select} value={selectedBlock} onChange={(e) => {
              setSelectedBlock(e.target.value);
              // Reset bawahnya
              setSelectedSemester(''); 
              setSelectedClass('');
          }}>
            <option value="">-- Pilih Blok --</option>
            {Object.keys(scheduleData).map(blok => (
                <option key={blok} value={blok}>{blok}</option>
            ))}
          </select>
        </div>

        <div style={styles.selectGroup}>
          <label style={styles.label}>Pilih Semester</label>
          <select style={styles.select} value={selectedSemester} onChange={(e) => {
              setSelectedSemester(e.target.value);
              setSelectedClass('');
          }}>
            <option value="">-- Pilih Semester --</option>
            {getSemesters().map(sem => (
              <option key={sem} value={sem}>{sem}</option>
            ))}
          </select>
        </div>

        <div style={styles.selectGroup}>
          <label style={styles.label}>Pilih Kelas</label>
          <select style={styles.select} value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)}>
            <option value="">-- Pilih Kelas --</option>
            {getClasses().map(cls => (
              <option key={cls} value={cls}>{cls}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Schedule Display */}
      <div className="schedule-content">
        {schedule ? (
          Object.keys(schedule).map(day => (
            <div key={day} style={styles.dayCard}>
              <div style={styles.dayHeader}>
                <i className="far fa-calendar-alt" style={{ marginRight: '10px' }}></i>
                {day}
              </div>
              {schedule[day].map((item, idx) => (
                <div key={idx} style={styles.classItem}>
                  <div><span style={styles.timeBox}>{item.time}</span></div>
                  <div>
                    <div style={{fontSize: '1.1rem', fontWeight: 'bold', color: '#2c3e50', marginBottom: '4px'}}>{item.subject}</div>
                    <div style={{color: '#666', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px'}}>
                      <i className="fas fa-chalkboard-teacher"></i> {item.lecturer}
                    </div>
                  </div>
                  <div style={styles.roomBadge}>
                    <i className="fas fa-map-marker-alt"></i> {item.room}
                  </div>
                </div>
              ))}
            </div>
          ))
        ) : (
          <div style={{textAlign: 'center', padding: '40px', color: '#888'}}>
            <i className="fas fa-coffee" style={{ fontSize: '3rem', marginBottom: '16px', display: 'block', color: '#ddd' }}></i>
            <p>Silakan pilih filter untuk melihat jadwal.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Jadwal;