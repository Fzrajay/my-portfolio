import { Briefcase, GraduationCap, Rocket } from 'lucide-react';
import { JourneyItem } from '@/types/journey';

export const journey: JourneyItem[] = [
  {
    id: 1,
    year: '2026',
    title: 'Mahasiswa Kerja Praktik',
    organization: 'Haida Bakery',
    description:
      'Melaksanakan kerja praktik pada 1 Maret 2026 – 21 Juni 2026 dengan merancang dan mengembangkan Website Company Profile & Inventory berbasis Laravel. Sistem yang dikembangkan telah selesai dan digunakan oleh perusahaan untuk membantu pengelolaan profil perusahaan serta inventaris.',
    icon: Briefcase,
    category: 'work',
    technologies: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS', 'JavaScript'],
  },

  {
    id: 2,
    year: '2023 - Sekarang',
    title: 'S1 Sistem Informasi',
    organization: 'Universitas Pamulang',
    description: 'Menempuh pendidikan Program Studi Sistem Informasi dengan fokus pada Web Development, Software Engineering, Database, Business Intelligence, dan Data Mining.',
    icon: GraduationCap,
    category: 'education',
  },

  {
    id: 3,
    year: '2020 - 2023',
    title: 'Electrical Avionics',
    organization: 'SMKN 6 Kota Tangerang',
    description: 'Mempelajari sistem kelistrikan pesawat, elektronika, instalasi, troubleshooting, serta membangun dasar kemampuan analisis dan pemecahan masalah di bidang teknik.',
    icon: GraduationCap,
    category: 'education',
  },

  {
    id: 4,
    year: 'Sekarang',
    title: 'Continuous Learning',
    organization: 'Independent Learning',
    description: 'Terus mengembangkan kemampuan di bidang Full Stack Web Development, Business Intelligence, Data Visualization, dan Data Analytics melalui pengembangan berbagai project pribadi.',
    icon: Rocket,
    category: 'work',
    technologies: ['Next.js', 'Laravel', 'TypeScript', 'Power BI', 'Tableau', 'Metabase'],
  },
];
