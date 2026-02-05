import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Java Practice Questions - OCP 1Z0-829',
  description: 'Master Java programming with practice exams for the OCP 1Z0-829 certification',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
      </head>
      <body className="bg-background-light font-display text-[#1c140d] min-h-screen selection:bg-primary/30">
        {/* Floating Translucent Top Bar */}
        <nav className="fixed top-0 left-0 right-0 z-50 glass-nav px-4 py-3 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="bg-primary p-1.5 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-[20px]">terminal</span>
            </div>
            <span className="font-mono font-bold tracking-tight text-lg text-primary">JavaPractice</span>
          </a>
          <div className="flex gap-4 items-center">
            <button className="text-[#1c140d] hover:text-primary transition-colors">
              <span className="material-symbols-outlined">search</span>
            </button>
            <button className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
              <span className="material-symbols-outlined text-primary text-[20px]">person</span>
            </button>
          </div>
        </nav>

        <main className="pt-20 pb-8">
          {children}
        </main>
      </body>
    </html>
  )
}
