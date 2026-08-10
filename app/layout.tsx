import type { Metadata } from 'next';
import { Inter, Geist_Mono } from 'next/font/google';
import './globals.css';
import ThemeProvider from '@/components/providers/ThemeProvider';

// Tulis import komponen efek visual kamu di sini (sesuaikan dengan lokasi foldermu)
// Jika belum dibuat, kamu bisa berikan komentar (//) dulu pada baris di bawah ini:
import GridBackground from '@/components/ui/GridBackground';
import Aurora from '@/components/ui/Aurora';
import MouseGlow from '@/components/effects/MouseGlow';
import ScrollProgress from '@/components/ui/ScrollProgress';
import ScrollTop from '@/components/ui/ScrollTop';
// Setup font Inter untuk teks utama
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

// Setup font Geist Mono untuk teks bergaya coding/monospaced
const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://pajarfadilah.my.id'),

  title: {
    default: 'Pajar Fadilah | Full Stack Developer',
    template: '%s | Pajar Fadilah',
  },

  description: 'Portfolio Pajar Fadilah, Full Stack Developer yang berfokus pada pengembangan aplikasi web modern menggunakan Next.js, React, Laravel, TypeScript, dan MySQL.',

  keywords: ['Pajar Fadilah', 'Pajar Fadilah Portfolio', 'Full Stack Developer', 'Web Developer', 'Next.js Developer', 'React Developer', 'Laravel Developer', 'TypeScript Developer', 'Indonesia'],

  authors: [
    {
      name: 'Pajar Fadilah',
      url: 'https://pajarfadilah.my.id',
    },
  ],

  creator: 'Pajar Fadilah',

  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://pajarfadilah.my.id',
    siteName: 'Pajar Fadilah',
    title: 'Pajar Fadilah | Full Stack Developer',
    description: 'Portfolio Pajar Fadilah — Full Stack Developer yang membangun aplikasi web modern dan responsif.',
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable} h-full antialiased scroll-smooth`} suppressHydrationWarning>
      <body className="min-h-full bg-[#0A0E17] text-[#E6E9F0] font-sans antialiased relative overflow-x-hidden">
        <ThemeProvider>
          <GridBackground />
          <Aurora />
          <MouseGlow />
          <ScrollProgress />
          <ScrollTop />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
