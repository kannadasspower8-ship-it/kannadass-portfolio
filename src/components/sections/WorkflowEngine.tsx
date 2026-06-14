"use client"
import { FadeIn } from "@/components/ui/FadeIn"

const workflowSteps = [
  "Client Vision",
  "Business Discovery",
  "AI Planning",
  "Research Intelligence",
  "UI/UX Design",
  "Website Development",
  "SEO Optimization",
  "Google Search Console",
  "Google Analytics",
  "Performance Testing",
  "Deployment",
  "Business Growth"
]

export function WorkflowEngine() {
  return (
    <section className="relative py-24 px-6 max-w-6xl mx-auto z-10">
      <FadeIn>
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 text-cyan-400 text-sm font-mono mb-4">
            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
            PROCESS_ARCHITECTURE
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">AI WORKFLOW ENGINE</h2>
          <p className="text-slate-400 font-mono text-sm max-w-xl">
            SYSTEMATIC END-TO-END EXECUTION FRAMEWORK.
          </p>
        </div>
      </FadeIn>

      <div className="relative max-w-3xl mx-auto">
        {/* Animated vertical line */}
        <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent md:-translate-x-1/2" />
        
        <div className="space-y-8 relative py-10">
          {workflowSteps.map((step, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className={`flex flex-col md:flex-row items-center gap-6 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`w-full md:w-1/2 ${i % 2 === 0 ? 'md:pl-12 text-left' : 'md:pr-12 md:text-right'} pl-20`}>
                  <div className="p-6 rounded-2xl glass border-white/5 hover:border-cyan-500/30 transition-colors group relative overflow-hidden">
                    <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/5 transition-colors duration-500" />
                    <div className="text-cyan-400 font-mono text-xs mb-2 opacity-60">STEP_{String(i + 1).padStart(2, '0')}</div>
                    <h4 className="text-xl font-bold text-white tracking-wide">{step}</h4>
                  </div>
                </div>
                
                <div className="absolute left-[24px] md:left-1/2 w-4 h-4 rounded-full bg-[#030712] border-2 border-cyan-400 md:-translate-x-1/2 flex items-center justify-center shadow-[0_0_10px_rgba(34,211,238,0.5)] z-10">
                  <div className="w-1 h-1 rounded-full bg-cyan-400" />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
