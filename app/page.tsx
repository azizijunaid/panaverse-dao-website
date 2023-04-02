import { Inter } from 'next/font/google';

import Hero from '@/components/hero';
import CoreCourses from '@/components/core-courses';
import Specialize from '@/components/specialize';
import Footer from '@/components/footer';

// import styles from './page.module.css';
import { Header } from '@/components/layout/header';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <CoreCourses />
      <Specialize />
      <Footer />
    </>
  );
}
