"use client"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Terminal, Menu, X } from "lucide-react"

export function Navbar() {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("")

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious()
    if (previous !== undefined && latest > 150 && latest > previous) {
      setHidden(true)
    } else {
      setHidden(false)
    }
    setIsScrolled(latest > 20)
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: "-50% 0px -50% 0px" }
    )

    const sections = ["mission-control", "universe", "skills", "contact"]
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-150%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 transition-all duration-300`}
    >
      <div className={`w-full max-w-6xl flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 ${isScrolled ? 'bg-slate-900/60 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]' : 'bg-transparent border-transparent'}`}>
        <Link href="/" className="flex items-center gap-2 group">
          <Terminal className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
          <span className="font-mono font-bold text-sm tracking-widest text-white">KANNADASS<span className="text-cyan-400">_</span>OS</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="#mission-control" isActive={activeSection === "mission-control"}>Dashboard</NavLink>
          <NavLink href="#universe" isActive={activeSection === "universe"}>Universe</NavLink>
          <NavLink href="#skills" isActive={activeSection === "skills"}>Skills</NavLink>
          <NavLink href="#contact" isActive={activeSection === "contact"} highlight>Initialize Project</NavLink>
        </nav>

        <button className="md:hidden text-white" aria-label="Toggle mobile menu" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-4 right-4 mt-2 p-4 bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl md:hidden flex flex-col gap-4">
          <MobileNavLink href="#mission-control" onClick={() => setMobileMenuOpen(false)}>Dashboard</MobileNavLink>
          <MobileNavLink href="#universe" onClick={() => setMobileMenuOpen(false)}>Universe</MobileNavLink>
          <MobileNavLink href="#skills" onClick={() => setMobileMenuOpen(false)}>Skills</MobileNavLink>
          <MobileNavLink href="#contact" onClick={() => setMobileMenuOpen(false)} highlight>Initialize Project</MobileNavLink>
        </div>
      )}
    </motion.header>
  )
}

function NavLink({ href, children, highlight, isActive }: { href: string, children: React.ReactNode, highlight?: boolean, isActive?: boolean }) {
  if (highlight) {
    return (
      <Link href={href} className={`text-sm transition-colors ${isActive ? 'text-cyan-400 font-bold drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]' : 'text-cyan-500/70 hover:text-cyan-400 font-medium'}`}>
        {children}
      </Link>
    )
  }
  return (
    <Link href={href} className={`text-sm transition-colors hover:text-white ${isActive ? 'text-white font-bold' : 'text-slate-400 font-medium'}`}>
      {children}
    </Link>
  )
}

function MobileNavLink({ href, children, highlight, onClick }: { href: string, children: React.ReactNode, highlight?: boolean, onClick: () => void }) {
  return (
    <Link href={href} onClick={onClick} className={`block px-4 py-2 text-sm font-medium transition-colors hover:bg-white/5 rounded-lg ${highlight ? 'text-cyan-400 font-bold' : 'text-slate-300'}`}>
      {children}
    </Link>
  )
}
