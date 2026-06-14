"use client"
import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import { LoadingSequence } from "@/components/ui/LoadingSequence"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { GlobalBackground } from "@/components/ui/GlobalBackground"

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [loading])

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingSequence key="loading-sequence" onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        {!loading && <GlobalBackground />}
        {!loading && <Navbar />}
        <main className="min-h-screen relative z-10">
          {children}
        </main>
        {!loading && <Footer />}
      </div>
    </>
  )
}
