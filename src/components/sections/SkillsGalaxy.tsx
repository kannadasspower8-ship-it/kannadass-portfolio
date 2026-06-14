"use client"
import { FadeIn } from "@/components/ui/FadeIn"
import { motion } from "framer-motion"
import { useState } from "react"

const skills = [
  { name: "AI Development", x: 50, y: 15 },
  { name: "SEO", x: 20, y: 35 },
  { name: "Analytics", x: 80, y: 35 },
  { name: "Business Websites", x: 35, y: 55 },
  { name: "Automation", x: 65, y: 55 },
  { name: "UI Design", x: 50, y: 70 },
  { name: "Google Search Console", x: 20, y: 80 },
  { name: "Performance Optimization", x: 80, y: 80 },
  { name: "Digital Strategy", x: 35, y: 95 },
  { name: "Growth Systems", x: 65, y: 95 },
]

// simple connections generator
const connections = [
  [0, 1], [0, 2], [1, 3], [2, 4], [3, 5], [4, 5], 
  [1, 6], [2, 7], [3, 8], [4, 9], [8, 5], [9, 5]
]

export function SkillsGalaxy() {
  const [activeSkill, setActiveSkill] = useState<number | null>(null)

  return (
    <section id="skills" className="relative py-24 px-6 max-w-6xl mx-auto z-10">
      <FadeIn>
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 text-purple-400 text-sm font-mono mb-4">
            <span className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" />
            CAPABILITIES
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">SKILLS GALAXY</h2>
        </div>
      </FadeIn>

      <div className="relative w-full max-w-4xl mx-auto h-[600px] glass rounded-3xl p-8 overflow-hidden group">
        <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
          {connections.map(([a, b], i) => (
            <line
              key={i}
              x1={`${skills[a].x}%`}
              y1={`${skills[a].y}%`}
              x2={`${skills[b].x}%`}
              y2={`${skills[b].y}%`}
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="1.5"
              className={
                activeSkill === a || activeSkill === b 
                  ? "stroke-cyan-400/50 transition-colors duration-300" 
                  : "transition-colors duration-300"
              }
            />
          ))}
        </svg>

        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 cursor-pointer z-10"
            style={{ left: `${skill.x}%`, top: `${skill.y}%` }}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, type: "spring" }}
            onMouseEnter={() => setActiveSkill(i)}
            onMouseLeave={() => setActiveSkill(null)}
          >
            <div className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${activeSkill === i ? 'bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)] scale-150' : 'bg-slate-700 hover:bg-cyan-400'}`} />
            <div className={`text-[10px] md:text-sm font-mono font-medium whitespace-nowrap px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border transition-all duration-300 ${activeSkill === i ? 'border-cyan-400/50 text-cyan-400' : 'border-white/5 text-slate-400'}`}>
              {skill.name}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
