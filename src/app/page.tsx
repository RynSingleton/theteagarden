'use client'

import { useRouter } from 'next/navigation'

export default function Home() {
  
  const router = useRouter();

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <button onClick={() => router.push('/dash')}> Dashboard </button>
      </main>
    </div>
  );
}