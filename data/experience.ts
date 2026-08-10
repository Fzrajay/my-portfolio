export interface Experience {
  year: string;

  title: string;

  company: string;

  description: string;

  type: 'work' | 'education' | 'certificate';
}

export const experiences: Experience[] = [
  {
    year: '2026',

    title: 'Internship Full Stack Developer',

    company: 'Haida Bakery',

    description: 'Membangun website Company Profile dan Inventory menggunakan Laravel.',

    type: 'work',
  },

  {
    year: '2025',

    title: 'Web Developer',

    company: 'Personal Project',

    description: 'Mengembangkan berbagai aplikasi web menggunakan Laravel dan Next.js.',

    type: 'work',
  },

  {
    year: '2024',

    title: 'Bachelor of Information Systems',

    company: 'Universitas Pamulang',

    description: 'Semester 6 Fakultas Ilmu Komputer.',

    type: 'education',
  },

  {
    year: '2022',

    title: 'SMK',

    company: 'Teknik Komputer dan Jaringan',

    description: 'Mempelajari dasar jaringan komputer dan pemrograman.',

    type: 'education',
  },
];
