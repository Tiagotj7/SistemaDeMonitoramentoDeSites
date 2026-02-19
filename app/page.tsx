'use client';

import { Loading } from '@/components/Loading/Loading';
import { useEffect } from 'react';
import { useRouter } from 'next/dist/client/components/navigation';

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/Home');
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main style={{
      position: 'relative',
      height: '100dvh',
      width: '100%',
      display: 'grid',
      gridTemplateRows: 'repeat(4, 1fr)',
      textAlign: 'center',
      background: 'linear-gradient(135deg, #0c2c57, #150837, #0a1434, #0b0422, #0b0422)'
    }}>
      <Loading />
    </main>
  );
}
