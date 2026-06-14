"use client"
import { useState } from "react"
import { FadeIn } from "@/components/ui/FadeIn"
import { MagneticButton } from "@/components/ui/MagneticButton"
import { Terminal, Send } from "lucide-react"

export function ContactPortal() {
  const [formData, setFormData] = useState({
    businessName: "",
    industry: "",
    projectGoal: "",
    timeline: "ASAP (Next 2 weeks)",
    budget: "Less than $1k"
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const message = `*NEW PROJECT INITIALIZATION*
*Business Name:* ${formData.businessName || "Not provided"}
*Industry:* ${formData.industry || "Not provided"}
*Timeline:* ${formData.timeline}
*Budget:* ${formData.budget}

*Project Goal:*
${formData.projectGoal || "Not provided"}`

    const whatsappUrl = `https://wa.me/919790019660?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="contact" className="relative py-32 px-6 max-w-4xl mx-auto z-10">
      <FadeIn>
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 text-cyan-400 text-sm font-mono mb-4">
            <Terminal className="w-4 h-4" />
            AI_COMMAND_CONSOLE
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">START A PROJECT</h2>
          <p className="text-slate-400 font-mono text-sm max-w-xl">
            INITIALIZE A NEW DIGITAL TRANSFORMATION PROTOCOL.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="glass p-8 md:p-12 rounded-3xl border-t-4 border-t-cyan-400 relative overflow-hidden">
          <div className="absolute top-0 right-8 p-2 bg-cyan-400/10 rounded-b-lg">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="businessName" className="text-xs font-mono text-slate-400 uppercase tracking-wider">Business Name</label>
                <input id="businessName" value={formData.businessName} onChange={e => setFormData({...formData, businessName: e.target.value})} type="text" className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-sans" placeholder="e.g. Acme Corp" />
              </div>
              <div className="space-y-2">
                <label htmlFor="industry" className="text-xs font-mono text-slate-400 uppercase tracking-wider">Industry</label>
                <input id="industry" value={formData.industry} onChange={e => setFormData({...formData, industry: e.target.value})} type="text" className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-sans" placeholder="e.g. E-commerce, Healthcare" />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="projectGoal" className="text-xs font-mono text-slate-400 uppercase tracking-wider">Project Goal / Requirements</label>
              <textarea id="projectGoal" value={formData.projectGoal} onChange={e => setFormData({...formData, projectGoal: e.target.value})} rows={4} className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-sans resize-none" placeholder="Describe the digital transformation you are seeking..."></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="timeline" className="text-xs font-mono text-slate-400 uppercase tracking-wider">Timeline</label>
                <select id="timeline" value={formData.timeline} onChange={e => setFormData({...formData, timeline: e.target.value})} className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-sans appearance-none [&>option]:bg-slate-900">
                  <option>ASAP (Next 2 weeks)</option>
                  <option>1-2 Months</option>
                  <option>3+ Months</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="budget" className="text-xs font-mono text-slate-400 uppercase tracking-wider">Budget Estimate</label>
                <select id="budget" value={formData.budget} onChange={e => setFormData({...formData, budget: e.target.value})} className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-sans appearance-none [&>option]:bg-slate-900">
                  <option>Less than $1k</option>
                  <option>$1k - $3k</option>
                  <option>$3k - $10k</option>
                  <option>$10k+</option>
                </select>
              </div>
            </div>

            <div className="pt-6 flex justify-center">
              <MagneticButton variant="primary" className="w-full md:w-auto" type="submit">
                INITIALIZE PROJECT <Send className="w-4 h-4 ml-2" />
              </MagneticButton>
            </div>
          </form>
        </div>
      </FadeIn>
    </section>
  )
}
