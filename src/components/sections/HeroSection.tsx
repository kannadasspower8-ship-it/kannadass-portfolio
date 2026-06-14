"use client"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { MagneticButton } from "@/components/ui/MagneticButton"
import { FadeIn } from "@/components/ui/FadeIn"
import { ArrowRight, Terminal } from "lucide-react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-[100dvh] pt-32 pb-20 overflow-hidden flex items-center">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Typography Block */}
        <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
          <FadeIn delay={3.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-cyan-400 text-xs font-mono mb-8 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
              KANNADASS_OS // BUILD_VER_2.0
            </div>
          </FadeIn>
          
          <FadeIn delay={3.2}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-[5.5rem] font-heading font-black tracking-tighter leading-[0.9] mb-8 text-white uppercase mix-blend-difference">
              Digital <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Growth</span> <br/>
              Architect.
            </h1>
          </FadeIn>

          <FadeIn delay={3.3}>
            <p className="text-lg md:text-xl text-slate-400 max-w-xl font-sans leading-relaxed mb-10 border-l-2 border-cyan-500/50 pl-6">
              Transforming local businesses into high-performance digital brands through 
              <span className="text-white font-medium"> Next.js</span>, 
              <span className="text-white font-medium"> Local SEO</span>, and 
              <span className="text-white font-medium"> Growth Architecture</span>.
            </p>
          </FadeIn>

          <FadeIn delay={3.4} className="flex flex-wrap items-center gap-4">
            <MagneticButton onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} variant="primary" className="rounded-md rounded-tl-2xl rounded-br-2xl text-sm font-bold tracking-widest px-8 md:px-10 py-4">
              INITIATE
            </MagneticButton>
            <MagneticButton onClick={() => document.getElementById('mission-control')?.scrollIntoView({ behavior: 'smooth' })} variant="ghost" className="text-sm font-mono flex items-center gap-2 px-6 py-4 rounded-md">
              VIEW_LOGS <ArrowRight className="w-4 h-4" />
            </MagneticButton>
          </FadeIn>
        </div>

        {/* Right Abstract Visual Widget */}
        <div className="lg:col-span-5 relative mt-12 lg:mt-0 lg:block flex justify-center w-full z-10">
          <FadeIn delay={3.5} className="relative w-full max-w-sm lg:max-w-none aspect-[3/4] lg:aspect-[4/5]">
            {/* Base Glass Pane */}
            <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden lg:translate-x-4 lg:translate-y-4">
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent" />
            </div>
            
            {/* Front Interactive Panel */}
            <div className="absolute inset-0 bg-slate-950 border border-white/5 rounded-3xl p-6 shadow-2xl flex flex-col justify-between group overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl group-hover:bg-cyan-400/30 transition-colors duration-700" />
               
               <div className="flex justify-between items-center relative z-10">
                 <Terminal className="text-slate-500 w-5 h-5" />
                 <div className="flex gap-1.5">
                   <div className="w-3 h-3 rounded-full bg-slate-800" />
                   <div className="w-3 h-3 rounded-full bg-slate-800" />
                   <div className="w-3 h-3 rounded-full bg-cyan-500/50" />
                 </div>
               </div>

               <div className="relative z-10 font-mono text-xs md:text-sm text-slate-400 mt-6 flex-grow flex flex-col h-full">
                 {/* Large Card Photo Display */}
                 <div className="w-full flex-grow relative mb-6 min-h-[200px]">
                   <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-cyan-400/50 to-blue-600/50 shadow-[0_0_30px_rgba(34,211,238,0.15)] group-hover:shadow-[0_0_40px_rgba(34,211,238,0.3)] transition-all duration-500">
                     <div className="w-full h-full relative rounded-2xl overflow-hidden bg-slate-900">
                       <img src="/images/myphoto.jpeg" alt="Kannadass T" className="w-full h-full object-cover object-top" />
                       
                       {/* Gradient overlay for readability */}
                       <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                       
                       <div className="absolute bottom-4 left-4 z-10">
                         <div className="text-cyan-400 font-bold tracking-wider text-xl drop-shadow-md">KANNADASS T</div>
                         <div className="text-slate-300 text-xs font-mono drop-shadow-md mt-1">AI Web Developer</div>
                       </div>
                     </div>
                   </div>
                 </div>

                 {/* Stats */}
                 <div className="space-y-3 mt-auto">
                   <div className="flex justify-between border-b border-white/5 pb-2">
                     <span>Performance</span>
                     <span className="text-white font-medium">99 Lighthouse</span>
                   </div>
                   <div className="flex justify-between border-b border-white/5 pb-2">
                     <span>SEO Rank</span>
                     <span className="text-white font-medium">Top 3 Local</span>
                   </div>
                   <div className="flex justify-between pt-1 items-center">
                     <span>Status</span>
                     <span className="flex items-center gap-2 text-cyan-400"><span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" /> Ready</span>
                   </div>
                 </div>
               </div>
            </div>
            
            {/* Floating Element */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -left-6 lg:-left-12 bottom-12 p-4 bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl flex items-center gap-3 z-20"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-[10px]">AI</span>
              </div>
              <div className="text-[10px] md:text-xs font-mono">
                <div className="text-slate-400">Optimization</div>
                <div className="text-cyan-400 font-bold">Enabled</div>
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
