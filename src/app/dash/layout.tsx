'use client';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 flex mx-2">
        <div className="grow py-6">{children}</div>
      </main>
    </div>
  );
} 