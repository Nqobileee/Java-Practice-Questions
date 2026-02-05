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

        <main className="pt-20 pb-24">
          {children}
        </main>

        {/* Bottom Navigation Bar */}
        <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-[#e8dbce] px-8 py-3 flex justify-between items-center pb-6">
          <a href="/" className="flex flex-col items-center gap-1 text-primary">
            <span className="material-symbols-outlined">home</span>
            <span className="text-[10px] font-bold uppercase">Home</span>
          </a>
          <div className="flex flex-col items-center gap-1 text-[#9c7349]">
            <span className="material-symbols-outlined">analytics</span>
            <span className="text-[10px] font-bold uppercase">Stats</span>
          </div>
          <div className="flex flex-col items-center gap-1 text-[#9c7349]">
            <span className="material-symbols-outlined">book</span>
            <span className="text-[10px] font-bold uppercase">Courses</span>
          </div>
          <div className="flex flex-col items-center gap-1 text-[#9c7349]">
            <span className="material-symbols-outlined">settings</span>
            <span className="text-[10px] font-bold uppercase">Settings</span>
          </div>
        </div>
      </body>
    </html>
  )
}
