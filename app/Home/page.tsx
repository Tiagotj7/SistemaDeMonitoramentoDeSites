'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Main } from '@/components/Main/Main';
import HeroMonitoring from '@/components/Hero/HeroMonitoring';

export default function Home() {
  return (
    <main>
      <HeroMonitoring />

    </main>
  );
}