// components/LatencyChart.tsx
'use client';

import { useEffect, useState } from 'react';

const BAR_COUNT = 30;

const randomHeight = (): number => Math.floor(Math.random() * 70) + 15;
const initialHeights = (): number[] => Array.from({ length: BAR_COUNT }, () => randomHeight());

export default function LatencyChart() {
  const [heights, setHeights] = useState<number[]>(initialHeights);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeights((prev) => {
        const idx = Math.floor(Math.random() * BAR_COUNT);
        const next = [...prev];
        next[idx] = randomHeight();
        return next;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-end justify-between h-20 gap-1">
      {heights.map((h, i) => (
        <div
          key={i}
          className="w-full bg-blue-500/40 hover:bg-blue-400 rounded-t transition-all duration-300 cursor-pointer"
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  );
}