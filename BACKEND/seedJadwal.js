require('dotenv').config();
const mongoose = require('mongoose');
const Jadwal = require('./models/Jadwal'); // Pastikan path model benar

// Data dari Frontend Anda (Raw Data)
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

// ... and so on ...

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Connected to MongoDB');

    // Buat array datar untuk insertion
    const flatData = [];
    for (const blok in scheduleData) {
      for (const sem in scheduleData[blok]) {
        for (const kelas in scheduleData[blok][sem]) {
          for (const hari in scheduleData[blok][sem][kelas]) {
            const items = scheduleData[blok][sem][kelas][hari];
            items.forEach(item => {
              flatData.push({
                blok: blok,
                semester: sem,
                kelas: kelas,
                hari: hari,
                jam: item.time,
                mataKuliah: item.subject,
                dosen: item.lecturer,
                ruangan: item.room
              });
            });
          }
        }
      }
    }

    // Uncomment baris di bawah ini jika ingin menghapus data jadwal lama sebelum insert baru
    // await Jadwal.deleteMany({});
    // console.log('🗑️ Data lama dihapus');

    if (flatData.length > 0) {
        await Jadwal.insertMany(flatData);
        console.log(`🎉 Berhasil menambahkan ${flatData.length} data jadwal!`);
    } else {
        console.log('⚠️ Tidak ada data untuk ditambahkan.');
    }
    
    mongoose.connection.close();
  } catch (err) {
    console.error('❌ Error seeding database:', err);
    mongoose.connection.close();
  }
};

seedDB();