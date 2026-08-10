import { LucideIcon } from 'lucide-react';

// 1. Definisikan interface Project secara mandiri dan aman di sini
export interface Project {
  id: number;
  title: string;
  description: string;
  cover: string;
  gallery: string[]; // <-- Diubah menjadi array string untuk menampung banyak gambar
  technologies: string[];
  github: string;
  demo: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,

    title: 'Company Profile & Inventory',

    description: 'Website company profile dan inventory management untuk Haida Bakery.',

    cover: '/projects/haida/Dashboard.webp',

    gallery: [
      '/projects/haida/Home.webp',
      '/projects/haida/Produk.webp',
      '/projects/haida/Dashboard.webp',
      '/projects/haida/Produksi.webp',
      '/projects/haida/BahanBaku.webp',
      '/projects/haida/StokProduk.webp',
      '/projects/haida/Dokumentasi1.webp',
      '/projects/haida/Dokumentasi2.webp',
    ],

    technologies: ['Laravel', 'MySQL', 'Tailwind CSS', 'JavaScript'],

    github: '...',

    demo: '...',

    featured: true,
  },
  {
    id: 2,

    title: 'Data Analytics & Business Intelligence',

    description:
      'Dashboard ini menganalisis tren penjualan retail berdasarkan faktor musiman, hari libur, dan indikator makro seperti suhu serta CPI. Dilengkapi fitur forecast untuk memproyeksikan performa toko demi strategi bisnis yang optimal.',

    cover: '/projects/visualisasi/tableu.webp',

    gallery: ['/projects/visualisasi/tableu.webp'],

    technologies: ['Tableau'],

    github: '...',

    demo: '...',

    featured: true,
  },
];
