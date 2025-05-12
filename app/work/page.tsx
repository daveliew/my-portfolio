'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function WorkPage() {
  const router = useRouter();
  
  useEffect(() => {
    router.replace('/skills-experience');
  }, [router]);
  
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <p className="text-lg">Redirecting to Skills & Experience...</p>
    </div>
  );
} 