import React, { useState } from 'react';

const Jadwal = () => {
  // State untuk filter
  const [selectedBlock, setSelectedBlock] = useState('BLOK I');
  const [selectedSemester, setSelectedSemester] = useState('SEMESTER 1');
  const [selectedClass, setSelectedClass] = useState('KELAS 25A');

  const scheduleData = {
    'BLOK I': {
      'SEMESTER 1': {
        'KELAS 25A': {
          Senin: [
            { time: '13:50 – 15:30', subject: 'Fisika Dasar', lecturer: 'PUR/TUH', room: '192.2.11' },
            { time: '15:30 – 17:10', subject: 'Matematika Dasar (R)', lecturer: 'NRR', room: 'ONLINE' },
          ],
          Rabu: [
            { time: '08:00 – 09:40', subject: 'Matematika Dasar (T)', lecturer: 'SWN', room: '12.1.10' },
            { time: '13:50 – 15:30', subject: 'Fisika Dasar', lecturer: 'PUR/TUH', room: '192.2.11' },
            { time: '15:30 – 17:10', subject: 'Kepemimpinan', lecturer: 'SIA', room: '192.4.01' },
          ],
          Kamis: [
            { time: '13:00 – 14:40', subject: 'Teknologi Informasi dan Literasi Data', lecturer: 'SRD', room: '192.2.02' },
            { time: '15:30 – 17:10', subject: 'Matematika Dasar (R)', lecturer: 'NRR', room: 'ONLINE' },
          ],
          Jumat: [
            { time: '08:00 – 09:40', subject: 'Kepemimpinan', lecturer: 'SIA', room: '77.1.01' },
            { time: '10:30 – 12:10', subject: 'Teknologi Informasi dan Literasi Data', lecturer: 'SRD', room: '12.1.10' },
            { time: '13:50 – 15:30', subject: 'Matematika Dasar (T)', lecturer: 'SWN', room: '12.1.10' },
          ],
        },
        'KELAS 25B': {
          Senin: [
            { time: '13:50 – 15:30', subject: 'Fisika Dasar', lecturer: 'KHA/SHU', room: '77.1.08' },
            { time: '15:30 – 17:10', subject: 'Matematika Dasar (R)', lecturer: 'SWN', room: 'ONLINE' },
          ],
          Selasa: [
            { time: '13:00 – 14:40', subject: 'Teknologi Informasi dan Literasi Data', lecturer: 'SRD', room: '192.2.01' },
          ],
          Rabu: [
            { time: '10:30 – 12:10', subject: 'Kepemimpinan', lecturer: 'SIA', room: '192.4.01' },
            { time: '13:50 – 15:30', subject: 'Fisika Dasar', lecturer: 'KHA/SHU', room: '77.1.08' },
            { time: '15:30 – 17:10', subject: 'Matematika Dasar (T)', lecturer: 'NRR', room: '192.4.01' },
          ],
          Kamis: [
            { time: '13:50 – 15:30', subject: 'Matematika Dasar (R)', lecturer: 'SWN', room: 'ONLINE' },
            { time: '15:30 – 17:10', subject: 'Teknologi Informasi dan Literasi Data', lecturer: 'SRD', room: '77.1.01' },
          ],
          Jumat: [
            { time: '10:30 – 12:10', subject: 'Kepemimpinan', lecturer: 'SIA', room: '77.1.01' },
            { time: '15:30 – 17:10', subject: 'Matematika Dasar (T)', lecturer: 'NRR', room: '192.3.01' },
          ],
        },
        'KELAS 25C': {
          Senin: [
            { time: '10:30 – 12:10', subject: 'Kepemimpinan', lecturer: 'SIA', room: '12.1.10' },
            { time: '13:50 – 15:30', subject: 'Fisika Dasar', lecturer: 'JUH/TUH', room: '192.3.02' },
            { time: '15:30 – 17:10', subject: 'Matematika Dasar (R)', lecturer: 'ELF', room: 'ONLINE' },
          ],
          Selasa: [
            { time: '09:40 – 11:20', subject: 'Teknologi Informasi dan Literasi Data', lecturer: 'SRD', room: '192.2.01' },
          ],
          Rabu: [
            { time: '08:00 – 09:40', subject: 'Matematika Dasar (T)', lecturer: 'PPG', room: '192.3.02' },
            { time: '13:50 – 15:30', subject: 'Fisika Dasar', lecturer: 'JUH/TUH', room: '192.3.02' },
            { time: '15:30 – 17:10', subject: 'Teknologi Informasi dan Literasi Data', lecturer: 'SRD', room: '192.2.01' },
          ],
          Kamis: [
            { time: '10:30 – 12:10', subject: 'Matematika Dasar (R)', lecturer: 'ELF', room: 'ONLINE' },
            { time: '13:00 – 14:40', subject: 'Kepemimpinan', lecturer: 'SIA', room: '192.2.01' },
          ],
          Jumat: [
            { time: '09:40 – 11:20', subject: 'Matematika Dasar (T)', lecturer: 'PPG', room: '192.3.02' },
          ],
        },
        'KELAS 25D': {
          Senin: [
             { time: '15:30 – 17:10', subject: 'Kepemimpinan', lecturer: 'SIA', room: '12.1.10' },
          ],
          Selasa: [
             { time: '13:50 – 15:30', subject: 'Matematika Dasar (R)', lecturer: 'PPG', room: 'ONLINE' },
             { time: '15.30 – 17:10', subject: 'Teknologi Informasi dan Literasi Data', lecturer: 'SRD', room: '192.2.01' },
          ],
          Rabu: [
             { time: '13:50 – 15:30', subject: 'Fisika Dasar', lecturer: 'ABR/SHU', room: '192.3.11' },
             { time: '15:30 – 17:10', subject: 'Matematika Dasar (T)', lecturer: 'ELF', room: '192.3.02' },
          ],
          Kamis: [
             { time: '08:00 – 09:40', subject: 'Teknologi Informasi dan Literasi Data', lecturer: 'SRD', room: '12.1.10' },
             { time: '10:30 – 12:10', subject: 'Kepemimpinan', lecturer: 'SIA', room: '12.1.9' },
             { time: '15:30 – 17:10', subject: 'Matematika Dasar (R)', lecturer: 'PPG', room: 'ONLINE' },
          ],
          Jumat: [
             { time: '13:50 – 15:30', subject: 'Fisika Dasar', lecturer: 'ABR/SHU', room: '192.3.11' },
             { time: '15:30 – 17:10', subject: 'Matematika Dasar (T)', lecturer: 'ELF', room: '192.2.11' },
          ],
        }
      },
      'SEMESTER 3': {
        'KELAS 24A': {
          Senin: [
            { time: '08:00 – 10:30', subject: 'Organisasi dan Arsitektur Komputer', lecturer: 'DEB', room: '12.1.10' },
            { time: '13:00 – 15:30', subject: 'Sistem Operasi', lecturer: 'ZUI', room: '77.3.08' },
          ],
          Selasa: [
            { time: '08:00 – 10:30', subject: 'Struktur Data', lecturer: 'FAR', room: '12.1.10' },
            { time: '11:20 – 13:00', subject: 'Kewarganegaraan', lecturer: 'Waliyul Maulana Siregar', room: '05.2.03B' },
          ],
          Rabu: [
            { time: '10:30 – 13:00', subject: 'Organisasi dan Arsitektur Komputer', lecturer: 'DEB', room: '12.1.10' },
            { time: '13:50 – 16:20', subject: 'Matematika Diskrit', lecturer: 'MIC', room: '05.1.01B' },
          ],
          Kamis: [
            { time: '08:00 – 10:30', subject: 'Sistem Operasi', lecturer: 'ZUI', room: '77.2.07' },
            { time: '11:20 – 13:00', subject: 'Kewarganegaraan', lecturer: 'Waliyul Maulana Siregar', room: '05.1.04B' },
            { time: '13:00 – 15:30', subject: 'Struktur Data', lecturer: 'FAR', room: '77.1.01' },
          ],
          Jumat: [
             { time: '13:50 – 16:20', subject: 'Matematika Diskrit', lecturer: 'MIC', room: '05.1.01B' },
          ]
        },
        'KELAS 24B': {
          Senin: [
             { time: '13:00 – 15:30', subject: 'Organisasi dan Arsitektur Komputer', lecturer: 'DEB', room: '05.1.02B' },
             { time: '15:30 – 18:00', subject: 'Struktur Data', lecturer: 'FAR', room: '77.1.01' },
          ],
          Selasa: [
             { time: '09:40 – 11:20', subject: 'Kewarganegaraan', lecturer: 'Andry Anshari', room: '192.3.02' },
             { time: '13:00 – 15:30', subject: 'Sistem Operasi', lecturer: 'ZUI', room: '77.2.07' },
             { time: '15:30 – 18:00', subject: 'Matematika Diskrit', lecturer: 'RIZ', room: '77.3.01 B' },
          ],
          Rabu: [
             { time: '08:00 – 10:30', subject: 'Struktur Data', lecturer: 'FAR', room: '77.1.01' },
          ],
          Kamis: [
             { time: '09:40 – 11:20', subject: 'Kewarganegaraan', lecturer: 'Andry Anshari', room: '192.3.02' },
             { time: '13:00 – 15:30', subject: 'Matematika Diskrit', lecturer: 'RIZ', room: '77.3.01 B' },
             { time: '15:30 – 18:00', subject: 'Organisasi dan Arsitektur Komputer', lecturer: 'DEB', room: '12.1.10' },
          ],
          Jumat: [
             { time: '08:00 – 10:30', subject: 'Sistem Operasi', lecturer: 'ZUI', room: '77.3.08' },
          ]
        },
        'KELAS 24C': {
          Senin: [
            { time: '15:30 – 18:00', subject: 'Sistem Operasi', lecturer: 'ZUI', room: '77.2.07' },
          ],
          Selasa: [
            { time: '08:00 – 09:40', subject: 'Kewarganegaraan', lecturer: 'Olnes Yosefa Hutajulu', room: '192.3.01' },
            { time: '10:30 – 13:00', subject: 'Organisasi dan Arsitektur Komputer', lecturer: 'DEB', room: '12.1.10' },
          ],
          Rabu: [
            { time: '08:00 – 10:30', subject: 'Struktur Data', lecturer: 'SRD', room: '77.1.08' },
            { time: '13:50 – 16:20', subject: 'Matematika Diskrit', lecturer: 'RIZ', room: '05.1.02B' },
          ],
          Kamis: [
            { time: '08:00 – 09:40', subject: 'Kewarganegaraan', lecturer: 'Olnes Yosefa Hutajulu', room: '05.1.02B' },
            { time: '10:30 – 13:00', subject: 'Organisasi dan Arsitektur Komputer', lecturer: 'DEB', room: '12.1.10' },
            { time: '13:00 – 15:30', subject: 'Sistem Operasi', lecturer: 'ZUI', room: '77.2.07' },
          ],
          Jumat: [
             { time: '08:00 – 10:30', subject: 'Struktur Data', lecturer: 'SRD', room: '77.1.08' },
             { time: '15:30 – 18:00', subject: 'Matematika Diskrit', lecturer: 'RIZ', room: '12.1.10' },
          ]
        },
        'KELAS 24D': {
          Senin: [
             { time: '13:00 – 15:30', subject: 'Struktur Data', lecturer: 'SRD', room: '77.3.01A' },
          ],
          Selasa: [
             { time: '09:40 – 11:20', subject: 'Kewarganegaraan', lecturer: 'Tri Andri Hutapea', room: '192.2.02' },
             { time: '13:00 – 15:30', subject: 'Organisasi dan Arsitektur Komputer', lecturer: 'DEB', room: '12.1.09' },
             { time: '15:30 – 18:00', subject: 'Matematika Diskrit', lecturer: 'ERW', room: '77.3.01A' },
          ],
          Rabu: [
             { time: '10:30 – 13:00', subject: 'Struktur Data', lecturer: 'SRD', room: '77.3.01A' },
             { time: '15:30 – 18:00', subject: 'Sistem Operasi', lecturer: 'ZUI', room: '77.3.08' },
          ],
          Kamis: [
             { time: '09:40 – 11:20', subject: 'Kewarganegaraan', lecturer: 'Tri Andri Hutapea', room: '192.2.02' },
             { time: '15:30 – 18:00', subject: 'Matematika Diskrit', lecturer: 'ERW', room: '77.3.01B' },
          ],
          Jumat: [
             { time: '08:00 – 10:30', subject: 'Organisasi dan Arsitektur Komputer', lecturer: 'DEB', room: '12.1.9' },
             { time: '13:50 – 16:20', subject: 'Sistem Operasi', lecturer: 'ZUI', room: '77.3.08' },
          ]
        },
      },
      'SEMESTER 5': {
        'KELAS 23A': {
          Senin: [
            { time: '13:00 – 15:30', subject: 'Metodologi Penelitian dan Penulisan Karya Ilmiah', lecturer: 'ARN', room: '77.3.01B' },
          ],
          Selasa: [
            { time: '08:00 – 10:30', subject: 'Pemrograman Mobile', lecturer: 'INS', room: '77.3.08' },
            { time: '15:30 – 18:00', subject: 'Pemodelan dan Simulasi', lecturer: 'IMK', room: '12.1.09' },
          ],
          Rabu: [
            { time: '08:00 – 10:30', subject: 'Keamanan Data dan Jaringan', lecturer: 'DEK', room: '77.2.07' },
            { time: '13:00 – 15:30', subject: 'Metodologi Penelitian dan Penulisan Karya Ilmiah', lecturer: 'ARN', room: '77.3.01 B' },
          ],
          Kamis: [
            { time: '08:00 – 10:30', subject: 'Pemrograman Mobile', lecturer: 'INS', room: '77.3.08' },
            { time: '15:30 – 18:00', subject: 'Pemodelan dan Simulasi', lecturer: 'IMK', room: '12.1.09' },
          ],
          Jumat: [
            { time: '08:00 – 10:30', subject: 'Keamanan Data dan Jaringan', lecturer: 'DEK', room: '77.2.07' },
          ]
        },
        'KELAS 23B': {
          Senin: [
            { time: '08:00 – 10:30', subject: 'Keamanan Data dan Jaringan', lecturer: 'DEK', room: '77.2.07' },
            { time: '10:30 – 13:00', subject: 'Pemrograman Mobile', lecturer: 'INS', room: '77.2.07' },
          ],
          Selasa: [
            { time: '08:00 – 10:30', subject: 'Pemodelan dan Simulasi', lecturer: 'IMK', room: '12.1.09' },
            { time: '10:30 – 13:00', subject: 'Metodologi Penelitian dan Penulisan Karya Ilmiah', lecturer: 'ARN', room: '77.3.01B' },
          ],
          Rabu: [
            { time: '10:30 – 13:00', subject: 'Keamanan Data dan Jaringan', lecturer: 'DEK', room: '77.2.07' },
            { time: '13:00 – 15:30', subject: 'Pemrograman Mobile', lecturer: 'INS', room: '77.2.07' },
          ],
          Kamis: [
            { time: '08:00 – 10:30', subject: 'Pemodelan dan Simulasi', lecturer: 'IMK', room: '12.1.09' },
            { time: '10:30 – 13:00', subject: 'Metodologi Penelitian dan Penulisan Karya Ilmiah', lecturer: 'ARN', room: '77.3.01B' },
          ]
        },
        'KELAS 23C': {
          Senin: [
            { time: '08:00 – 10:30', subject: 'Pemodelan dan Simulasi', lecturer: 'SUV', room: '12.1.09' },
            { time: '10:30 – 13:00', subject: 'Metodologi Penelitian dan Penulisan Karya Ilmiah', lecturer: 'MAN', room: '12.1.09' },
          ],
          Selasa: [
            { time: '08:00 – 10:30', subject: 'Keamanan Data dan Jaringan', lecturer: 'DEK', room: '77.2.01' },
            { time: '10:30 – 13:00', subject: 'Pemrograman Mobile', lecturer: 'ADT', room: '77.2.07' },
          ],
          Rabu: [
            { time: '08:00 – 10:30', subject: 'Pemodelan dan Simulasi', lecturer: 'SUV', room: '12.1.09' },
            { time: '10:30 – 13:00', subject: 'Metodologi Penelitian dan Penulisan Karya Ilmiah', lecturer: 'MAN', room: '12.1.09' },
          ],
          Kamis: [
            { time: '08:00 – 10:30', subject: 'Keamanan Data dan Jaringan', lecturer: 'DEK', room: '77.2.01' },
            { time: '15:30 – 18:00', subject: 'Pemrograman Mobile', lecturer: 'ADT', room: '77.2.07' },
          ]
        },
        'KELAS 23D': {
          Senin: [
            { time: '08:00 – 10:30', subject: 'Pemrograman Mobile', lecturer: 'ADT', room: '77.2.01' },
            { time: '10:30 – 13:00', subject: 'Keamanan Data dan Jaringan', lecturer: 'DEK', room: '77.3.08' },
          ],
          Selasa: [
            { time: '08:00 – 10:30', subject: 'Pemodelan dan Simulasi', lecturer: 'ZUI', room: '77.3.01B' },
          ],
          Rabu: [
            { time: '13:00 - 15.30', subject: 'Keamanan Data dan Jaringan', lecturer: 'DEK', room: '77.3.08' },
            { time: '15:30 – 18:00', subject: 'Metodologi Penelitian dan Penulisan Karya Ilmiah', lecturer: 'MAN', room: '12.1.09' },
          ],
          Kamis: [
            { time: '15:30 – 18:00', subject: 'Pemodelan dan Simulasi', lecturer: 'ZUI', room: '77.1.08' },
          ],
          Jumat: [
            { time: '08:00 – 10:30', subject: 'Pemrograman Mobile', lecturer: 'ADT', room: '77.2.01' },
            { time: '13:50 – 15:30', subject: 'Metodologi Penelitian dan Penulisan Karya Ilmiah', lecturer: 'MAN', room: '12.1.09' },
          ]
        },
      },
      'SEMESTER 7': {
        'KELAS 22A': {
           Senin: [ { time: '08:00 – 10:30', subject: 'NLP (Natural Language Programming)', lecturer: 'IMK', room: '77.3.01A' } ],
           Selasa: [
             { time: '08:00 – 10:30', subject: 'Machine Learning', lecturer: 'KAN', room: '77.1.08' },
             { time: '13:00 – 15:30', subject: 'Computer Vision', lecturer: 'MAN', room: '77.3.01 A' },
           ],
           Rabu: [ { time: '08:00 – 10:30', subject: 'NLP (Natural Language Programming)', lecturer: 'IMK', room: '77.3.01A' } ],
           Kamis: [
             { time: '08:00 – 10:30', subject: 'Machine Learning', lecturer: 'KAN', room: '77.1.08' },
             { time: '13:00 – 15:30', subject: 'Computer Vision', lecturer: 'MAN', room: '77.3.01 A' },
           ],
           Jumat: [ { time: '16:20 – 18:00', subject: 'KKN (Kuliah Kerja Nyata)', lecturer: 'SUS', room: '192.4.14' } ],
        },
        'KELAS 22B': {
           Senin: [ { time: '10:30 – 13:00', subject: 'NLP (Natural Language Programming)', lecturer: 'IMK', room: '77.3.01B' } ],
           Selasa: [
              { time: '08:00 – 10:30', subject: 'Computer Vision', lecturer: 'MAN', room: '77.3.01 A' },
              { time: '10:30 – 13:00', subject: 'Machine Learning', lecturer: 'KAN', room: '77.1.08' },
           ],
           Rabu: [ { time: '10:30 – 13:00', subject: 'NLP (Natural Language Programming)', lecturer: 'IMK', room: '77.3.01B' } ],
           Kamis: [
              { time: '08:00 – 10:30', subject: 'Computer Vision', lecturer: 'MAN', room: '77.3.01 A' },
              { time: '10:30 – 13:00', subject: 'Machine Learning', lecturer: 'KAN', room: '77.1.08' },
              { time: '16:20 – 18:00', subject: 'KKN (Kuliah Kerja Nyata)', lecturer: 'SUV', room: '192.4.16' },
           ],
        },
        'KELAS 22C': {
           Senin: [
              { time: '08:00 – 10:30', subject: 'Computer Vision', lecturer: 'MAN', room: '77.3.01 B' },
              { time: '10:30 – 13:00', subject: 'Machine Learning', lecturer: 'KAN', room: '77.3.01 A' },
           ],
           Selasa: [
              { time: '08:00 – 10:30', subject: 'NLP (Natural Language Programming)', lecturer: 'HSY', room: '77.1.01' },
              { time: '16:20 – 18:00', subject: 'KKN (Kuliah Kerja Nyata)', lecturer: 'SIA', room: '77.1.01' },
           ],
           Kamis: [
              { time: '13:00 – 15:30', subject: 'NLP (Natural Language Programming)', lecturer: 'HSY', room: '05.1.02B' },
              { time: '15:30 – 18:00', subject: 'Machine Learning', lecturer: 'KAN', room: '77.3.01 A' },
           ],
           Jumat: [ { time: '08:00 – 10:30', subject: 'Computer Vision', lecturer: 'MAN', room: '77.3.01 B' } ],
        }
      },
    },
    'BLOK II': {
      'SEMESTER 1': {
        'KELAS 25A': {
          Senin: [
             { time: '08:00 - 10:30', subject: 'Kalkulus Diferensial', lecturer: 'ABM/SUV', room: '77.1.01' },
             { time: '10:30 - 12:10', subject: 'Logika Informatika', lecturer: 'FAR', room: '77.2.07' },
             { time: '13:50 - 15:30', subject: 'Bahasa Inggris', lecturer: 'Budi Halomoan Siregar', room: '192.2.01' },
          ],
          Selasa: [
             { time: '10:30 - 13:00', subject: 'Algoritma dan Pemrograman', lecturer: 'SIA', room: '77.2.01' },
          ],
          Rabu: [
             { time: '10:30 - 13:00', subject: 'Kalkulus Diferensial', lecturer: 'ABM/SUV', room: '77.1.01' },
             { time: '13:50 - 15:30', subject: 'Bahasa Inggris', lecturer: 'Budi Halomoan Siregar', room: '192.1.10' },
             { time: '15:30 - 17:10', subject: 'Logika Informatika', lecturer: 'FAR', room: '77.1.01' },
          ],
          Kamis: [
             { time: '13:50 - 16:20', subject: 'Algoritma dan Pemrograman', lecturer: 'SIA', room: '77.2.01' },
          ]
        },
        'KELAS 25B': {
          Senin: [ { time: '10:30 - 13:00', subject: 'Kalkulus Diferensial', lecturer: 'ABM/SUV', room: '12.1.09' } ],
          Selasa: [
             { time: '08:00 - 09:40', subject: 'Logika Informatika', lecturer: 'FAR', room: '77.1.08' },
             { time: '10:30 - 12:10', subject: 'Bahasa Inggris', lecturer: 'HDH', room: '77.1.01' },
             { time: '13:50 - 16:20', subject: 'Algoritma dan Pemrograman', lecturer: 'SIA', room: '77.2.07' },
          ],
          Rabu: [ { time: '13:50 - 16:20', subject: 'Kalkulus Diferensial', lecturer: 'ABM', room: '12.1.09' } ],
          Kamis: [ { time: '09:40 - 11:20', subject: 'Logika Informatika', lecturer: 'FAR', room: '77.3.01 B' } ],
          Jumat: [
             { time: '08:00 - 09:40', subject: 'Bahasa Inggris', lecturer: 'HDH', room: '12.1.10' },
             { time: '09:40 - 12:10', subject: 'Algoritma dan Pemrograman', lecturer: 'SIA', room: '192.3.11' },
          ],
        },
        'KELAS 25C': {
          Selasa: [
             { time: '08:00 - 10:30', subject: 'Algoritma dan Pemrograman', lecturer: 'SIA', room: '77.3.08' },
             { time: '10:30 - 13:00', subject: 'Kalkulus Diferensial', lecturer: 'ABM/SUV', room: '77.1.08' },
             { time: '13:50 - 15:30', subject: 'Logika Informatika', lecturer: 'FAR', room: '77.3.01 A' },
          ],
          Rabu: [ { time: '08:00 - 09:40', subject: 'Bahasa Inggris', lecturer: 'KAI', room: '12.1.10' } ],
          Kamis: [
             { time: '08:00 - 09:40', subject: 'Bahasa Inggris', lecturer: 'KAI', room: '192.1.14' },
             { time: '10:30 - 13:00', subject: 'Kalkulus Diferensial', lecturer: 'ABM/SUV', room: '77.1.08' },
          ],
          Jumat: [
             { time: '10:30 - 12:10', subject: 'Logika Informatika', lecturer: 'FAR', room: '77.1.08' },
             { time: '13:50 - 16:20', subject: 'Algoritma dan Pemrograman', lecturer: 'SIA', room: '77.3.08' },
          ]
        },
        'KELAS 25D': {
           Senin: [ { time: '10:30 - 13:00', subject: 'Algoritma dan Pemrograman', lecturer: 'SIA', room: '77.3.08' } ],
           Selasa: [
              { time: '09:40 - 11:20', subject: 'Bahasa Inggris', lecturer: 'CHA', room: '192.2.01' },
              { time: '13:50 - 16:20', subject: 'Kalkulus Diferensial', lecturer: 'ABM/SUV', room: '12.1.09' },
           ],
           Rabu: [
              { time: '10:30 - 12:10', subject: 'Logika Informatika', lecturer: 'FAR', room: '77.1.08' },
              { time: '13:50 - 16:20', subject: 'Algoritma dan Pemrograman', lecturer: 'SIA', room: '77.3.08' },
           ],
           Kamis: [
              { time: '08:00 - 09:40', subject: 'Bahasa Inggris', lecturer: 'CHA', room: '12.1.10' },
              { time: '13:50 - 16:20', subject: 'Kalkulus Diferensial', lecturer: 'ABM/SUV', room: '12.1.09' },
           ],
           Jumat: [ { time: '08:00 - 09:40', subject: 'Logika Informatika', lecturer: 'FAR', room: '77.3.01 B' } ]
        }
      },
      'SEMESTER 3': {
        'KELAS 24A': {
           Senin: [ { time: '08:00 - 10:30', subject: 'Pemrograman Web', lecturer: 'ADP', room: '12.1.09' } ],
           Selasa: [
              { time: '09:40 - 11:20', subject: 'ISBD', lecturer: 'Octaviana Br. Tobing', room: '05.2.03A' },
              { time: '13:50 - 15:30', subject: 'Pancasila', lecturer: 'Jamaludin', room: '192.4.02' },
           ],
           Rabu: [
              { time: '08:00 - 10:30', subject: 'Pemrograman Web', lecturer: 'ADP', room: '12.1.09' },
              { time: '10:30 - 13:00', subject: 'Metode Numerik', lecturer: 'YMR', room: '12.1.10' },
           ],
           Kamis: [
              { time: '09:40 - 11:20', subject: 'ISBD', lecturer: 'Octaviana Br. Tobing', room: '12.1.09' },
              { time: '13:50 - 15:30', subject: 'Pancasila', lecturer: 'Jamaludin', room: '192.4.02' },
           ],
           Jumat: [ { time: '13:50 - 16:20', subject: 'Metode Numerik', lecturer: 'YMR', room: '77.1.08' } ]
        },
        'KELAS 24B': {
           Senin: [ { time: '15:30 - 18:00', subject: 'Pemrograman Web', lecturer: 'ADP', room: '77.1.01' } ],
           Selasa: [
              { time: '09:40 - 11:20', subject: 'ISBD', lecturer: 'Drs. Nelson Tarigan', room: '192.3.11' },
              { time: '11:20 - 13:00', subject: 'Pancasila', lecturer: 'Oksari Anastasya Sihaloho', room: '192.4.02' },
           ],
           Rabu: [ { time: '13:50 - 16:20', subject: 'Metode Numerik', lecturer: 'DEB', room: '77.1.08' } ],
           Kamis: [
              { time: '09:40 - 11:20', subject: 'ISBD', lecturer: 'Drs. Nelson Tarigan', room: '192.3.11' },
              { time: '11:20 - 13:00', subject: 'Pancasila', lecturer: 'Oksari Anastasya Sihaloho', room: '05.2.03 B' },
              { time: '13:50 - 16:20', subject: 'Pemrograman Web', lecturer: 'ADP', room: '77.3.01 A' },
           ],
           Jumat: [ { time: '08:00 - 10:30', subject: 'Metode Numerik', lecturer: 'DEB', room: '77.1.08' } ]
        },
        'KELAS 24C': {
           Senin: [ { time: '10:30 - 13:00', subject: 'Metode Numerik', lecturer: 'IMK', room: '77.3.01 B' } ],
           Selasa: [
              { time: '09:40 - 11:20', subject: 'ISBD', lecturer: 'Izuddinsyah Siregar', room: '05.2.03 A' },
              { time: '11:20 - 13:50', subject: 'Pemrograman Web', lecturer: 'ADP', room: '77.3.01 A' },
              { time: '13:50 - 15:30', subject: 'Pancasila', lecturer: 'Poniman', room: '192.5.01' },
           ],
           Rabu: [ { time: '10:30 - 13:00', subject: 'Metode Numerik', lecturer: 'IMK', room: '77.3.01 B' } ],
           Kamis: [
              { time: '09:40 - 11:20', subject: 'ISBD', lecturer: 'Izuddinsyah Siregar', room: '05.2.03 A' },
              { time: '11:20 - 13:50', subject: 'Pemrograman Web', lecturer: 'ADP', room: '77.3.01 A' },
              { time: '13:50 - 15:30', subject: 'Pancasila', lecturer: 'Poniman', room: '05.2.03 A' },
           ]
        },
        'KELAS 24D': {
           Selasa: [
              { time: '09:40 - 11:20', subject: 'ISBD', lecturer: 'Dr. Osberth Sinaga', room: '12.1.09' },
              { time: '13:50 - 15:30', subject: 'Pancasila', lecturer: 'Maulana Ibrahim', room: '05.2.03 B' },
              { time: '15:30 - 18:00', subject: 'Metode Numerik', lecturer: 'IMK', room: '77.3.01 A' },
           ],
           Rabu: [ { time: '10:30 - 13:00', subject: 'Pemrograman Web', lecturer: 'ADP', room: '12.1.09' } ],
           Kamis: [
              { time: '08:00 - 10:30', subject: 'Metode Numerik', lecturer: 'IMK', room: '77.3.01 A' },
              { time: '10:30 - 12:10', subject: 'ISBD', lecturer: 'Dr. Osberth Sinaga', room: '192.3.01' },
              { time: '13:50 - 15:30', subject: 'Pancasila', lecturer: 'Maulana Ibrahim', room: '192.4.02' },
           ],
           Jumat: [ { time: '08:00 - 10:30', subject: 'Pemrograman Web', lecturer: 'ADP', room: '77.1.08' } ]
        }
      },
      'SEMESTER 5': {
         'KELAS 23A': {
            Senin: [
               { time: '08:00 - 10:30', subject: 'Algoritma Optimasi dan Metaheuritik', lecturer: 'FAR', room: '77.3.01 B' },
               { time: '15:30 - 18:00', subject: 'Pengembangan Web Modern', lecturer: 'INS', room: '77.2.07' },
            ],
            Selasa: [
               { time: '08:00 - 10:30', subject: 'Internet of Things', lecturer: 'KAN', room: '77.2.07' },
               { time: '13:50 - 16:20', subject: 'Pengenalan Pola', lecturer: 'HSY', room: '77.3.01 B' },
            ],
            Rabu: [ { time: '08:00 - 10:30', subject: 'Algoritma Optimasi dan Metaheuritik', lecturer: 'FAR', room: '77.3.01 B' } ],
            Kamis: [ { time: '08:00 - 10:30', subject: 'Pengembangan Web Modern', lecturer: 'INS', room: '77.2.07' } ],
            Jumat: [
               { time: '08:00 - 10:30', subject: 'Pengenalan Pola', lecturer: 'HSY', room: '77.3.08' },
               { time: '13:50 - 16:20', subject: 'Internet of Things', lecturer: 'KAN', room: '77.1.01' },
            ]
         },
         'KELAS 23B': {
            Senin: [
               { time: '08:00 - 10:30', subject: 'Algoritma Optimasi dan Metaheuritik', lecturer: 'SRD', room: '77.1.08' },
               { time: '10:30 - 13:00', subject: 'Pengembangan Web Modern', lecturer: 'INS', room: '77.3.01 A' },
               { time: '13:50 - 16:20', subject: 'Pengenalan Pola', lecturer: 'HSY', room: '77.3.08' },
            ],
            Selasa: [ { time: '10:30 - 13:00', subject: 'Internet of Things', lecturer: 'KAN', room: '77.2.07' } ],
            Rabu: [ { time: '08:00 - 10:30', subject: 'Algoritma Optimasi dan Metaheuritik', lecturer: 'SRD', room: '77.1.08' } ],
            Kamis: [
               { time: '08:00 - 10:30', subject: 'Internet of Things', lecturer: 'KAN', room: '77.2.01' },
               { time: '10:30 - 13:00', subject: 'Pengembangan Web Modern', lecturer: 'INS', room: '77.2.07' },
            ],
            Jumat: [ { time: '13:50 - 16:20', subject: 'Pengenalan Pola', lecturer: 'HSY', room: '77.2.07' } ]
         },
         'KELAS 23C': {
            Senin: [
               { time: '10:30 - 13:00', subject: 'Internet of Things', lecturer: 'DEB/DEK', room: '77.2.01' },
               { time: '13:50 - 16:20', subject: 'Algoritma Optimasi dan Metaheuritik', lecturer: 'ADP', room: '77.3.01 B' },
            ],
            Selasa: [ { time: '10:30 - 13:00', subject: 'Pengenalan Pola', lecturer: 'HSY', room: '77.3.08' } ],
            Rabu: [
               { time: '08:00 - 10:30', subject: 'Pengembangan Web Modern', lecturer: 'INS', room: '77.3.01 A' },
               { time: '13:50 - 16:20', subject: 'Algoritma Optimasi dan Metaheuritik', lecturer: 'ADP', room: '77.3.01 B' },
            ],
            Kamis: [
               { time: '08:00 - 10:30', subject: 'Internet of Things', lecturer: 'DEB/DEK', room: '77.3.08' },
               { time: '10:30 - 13:00', subject: 'Pengenalan Pola', lecturer: 'HSY', room: '77.3.08' },
               { time: '15:30 - 18:00', subject: 'Pengembangan Web Modern', lecturer: 'INS', room: '77.2.07' },
            ]
         },
         'KELAS 23D': {
            Senin: [ { time: '08:00 - 10:30', subject: 'Algoritma Optimasi dan Metaheuritik', lecturer: 'IMK', room: '77.3.01 A' } ],
            Selasa: [
               { time: '08:00 - 10:30', subject: 'Pengembangan Web Modern', lecturer: 'INS', room: '77.2.01' },
               { time: '13:50 - 16:20', subject: 'Pengenalan Pola', lecturer: 'HSY', room: '77.3.08' },
            ],
            Rabu: [
               { time: '08:00 - 10:30', subject: 'Internet of Things', lecturer: 'DEK', room: '77.3.08' },
               { time: '10:30 - 13:00', subject: 'Algoritma Optimasi dan Metaheuritik', lecturer: 'IMK', room: '77.3.01 A' },
               { time: '13:50 - 16:20', subject: 'Pengenalan Pola', lecturer: 'HSY', room: '77.2.07' },
            ],
            Kamis: [ { time: '13:50 - 16:20', subject: 'Internet of Things', lecturer: 'DEK', room: '77.3.08' } ],
            Jumat: [ { time: '08:00 - 10:30', subject: 'Pengembangan Web Modern', lecturer: 'INS', room: '77.2.01' } ]
         }
      }
    }
  };

  const getClassSchedule = () => {
    try {
      return scheduleData[selectedBlock][selectedSemester][selectedClass] || null;
    } catch (e) {
      return null;
    }
  };

  const schedule = getClassSchedule();

  // Style untuk komponen (Inline style agar praktis tanpa edit file CSS terpisah)
  const styles = {
    filterContainer: {
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
      marginBottom: '24px',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '16px',
      alignItems: 'center',
      borderTop: '4px solid var(--primary, #2E8B57)'
    },
    selectGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      flex: '1',
      minWidth: '200px'
    },
    label: {
      fontWeight: '600',
      color: 'var(--dark, #2c3e50)',
      fontSize: '0.9rem'
    },
    select: {
      padding: '10px 12px',
      borderRadius: '6px',
      border: '1px solid #ddd',
      fontSize: '1rem',
      color: '#333',
      outline: 'none',
      cursor: 'pointer',
      transition: 'border-color 0.3s',
    },
    dayCard: {
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
      marginBottom: '24px',
      overflow: 'hidden'
    },
    dayHeader: {
      backgroundColor: 'var(--primary, #2E8B57)',
      color: 'white',
      padding: '12px 20px',
      fontWeight: 'bold',
      fontSize: '1.2rem',
      display: 'flex',
      alignItems: 'center'
    },
    classItem: {
      padding: '16px 20px',
      borderBottom: '1px solid #eee',
      display: 'grid',
      gridTemplateColumns: '120px 1fr 150px',
      gap: '16px',
      alignItems: 'start',
      transition: 'background-color 0.2s'
    },
    timeBox: {
      backgroundColor: '#e8f5e9',
      color: 'var(--primary, #2E8B57)',
      padding: '6px 12px',
      borderRadius: '20px',
      fontWeight: '600',
      fontSize: '0.85rem',
      textAlign: 'center',
      display: 'inline-block',
      whiteSpace: 'nowrap'
    },
    subjectTitle: {
      fontSize: '1.1rem',
      fontWeight: 'bold',
      color: 'var(--dark, #2c3e50)',
      marginBottom: '4px'
    },
    lecturer: {
      color: '#666',
      fontSize: '0.9rem',
      display: 'flex',
      alignItems: 'center',
      gap: '6px'
    },
    roomBadge: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      color: 'var(--secondary, #3CB371)',
      fontWeight: '600',
      fontSize: '0.95rem',
      justifyContent: 'flex-end'
    },
    emptyState: {
      textAlign: 'center',
      padding: '40px',
      color: '#888',
      fontSize: '1.1rem'
    }
  };

  // List Semester dan Kelas untuk dropdown
  const semesters = ['SEMESTER 1', 'SEMESTER 3', 'SEMESTER 5', 'SEMESTER 7'];
  const classes = {
    'SEMESTER 1': ['KELAS 25A', 'KELAS 25B', 'KELAS 25C', 'KELAS 25D'],
    'SEMESTER 3': ['KELAS 24A', 'KELAS 24B', 'KELAS 24C', 'KELAS 24D'],
    'SEMESTER 5': ['KELAS 23A', 'KELAS 23B', 'KELAS 23C', 'KELAS 23D'],
    'SEMESTER 7': ['KELAS 22A', 'KELAS 22B', 'KELAS 22C']
  };

  return (
    <div className="main-content">
      <div className="header">
        <h1>Jadwal Kuliah Semester Ganjil TA. 2025/2026</h1>
      </div>
      
      {/* Filter Section */}
      <div style={styles.filterContainer}>
        <div style={styles.selectGroup}>
          <label style={styles.label}>Pilih Blok</label>
          <select 
            style={styles.select}
            value={selectedBlock} 
            onChange={(e) => setSelectedBlock(e.target.value)}
          >
            <option value="BLOK I">BLOK I</option>
            <option value="BLOK II">BLOK II</option>
          </select>
        </div>

        <div style={styles.selectGroup}>
          <label style={styles.label}>Pilih Semester</label>
          <select 
            style={styles.select}
            value={selectedSemester} 
            onChange={(e) => {
              setSelectedSemester(e.target.value);
              // Reset kelas ke yang pertama tersedia di semester baru
              setSelectedClass(classes[e.target.value][0]);
            }}
          >
            {semesters.map(sem => (
              <option key={sem} value={sem}>{sem}</option>
            ))}
          </select>
        </div>

        <div style={styles.selectGroup}>
          <label style={styles.label}>Pilih Kelas</label>
          <select 
            style={styles.select}
            value={selectedClass} 
            onChange={(e) => setSelectedClass(e.target.value)}
          >
            {classes[selectedSemester]?.map(cls => (
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
                <div key={idx} style={styles.classItem} className="class-item-hover">
                  <div>
                    <span style={styles.timeBox}>{item.time}</span>
                  </div>
                  <div>
                    <div style={styles.subjectTitle}>{item.subject}</div>
                    <div style={styles.lecturer}>
                      <i className="fas fa-chalkboard-teacher"></i>
                      {item.lecturer}
                    </div>
                  </div>
                  <div style={styles.roomBadge}>
                    <i className="fas fa-map-marker-alt"></i>
                    {item.room}
                  </div>
                </div>
              ))}
            </div>
          ))
        ) : (
          <div style={styles.emptyState}>
            <i className="fas fa-coffee" style={{ fontSize: '3rem', marginBottom: '16px', display: 'block', color: '#ddd' }}></i>
            <p>Jadwal tidak ditemukan untuk filter yang dipilih.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Jadwal;