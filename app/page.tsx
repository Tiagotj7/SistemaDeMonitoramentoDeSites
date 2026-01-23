import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Loading } from '../components/Loading/Loading';
import { NavBar } from '../components/NavBar/NavBar';

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/home'); // destino
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return <Loading />;
}
