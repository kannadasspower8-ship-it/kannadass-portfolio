import Link from "next/link"
import { Terminal } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-slate-950 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <Terminal className="w-5 h-5 text-cyan-400" />
          <span className="font-mono font-bold text-sm tracking-widest text-slate-300">KANNADASS<span className="text-cyan-400">_</span>OS™</span>
        </div>
        
        <div className="text-xs font-mono text-slate-500">
          SYSTEM_STATUS: <span className="text-cyan-400">ONLINE</span> | v2.0.26
        </div>
        
        <div className="flex items-center gap-6 text-sm text-slate-400">
          <Link href="https://www.linkedin.com/in/kannadass" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">LinkedIn</Link>
          <Link href="https://github.com/kannadasspower8-ship-it" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">GitHub</Link>
          <Link href="https://wa.me/919790019660" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">WhatsApp</Link>
        </div>
      </div>
    </footer>
  )
}
