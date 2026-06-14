"use client"
import { GlassPanel } from "@/components/ui/GlassPanel"
import { FadeIn } from "@/components/ui/FadeIn"
import { ArrowRight, ExternalLink } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "ROXY Interiors & Exteriors",
    category: "Architecture & Design",
    description: "Complete digital transformation for a premium interior design firm. Implemented high-performance Next.js website, SEO architecture, and lead generation systems.",
    metrics: ["Organic Traffic: +150%", "Lighthouse: 99", "Ranking: #1 for 'Premium Interiors'"],
    link: "https://roxyinterior.in",
    image: "/images/roxy-interior.png"
  },
  {
    title: "Thangaraj Catering",
    category: "Food & Hospitality",
    description: "Modernized brand identity and digital presence for a traditional catering business. Built with Next.js, optimized for mobile reservations and local SEO.",
    metrics: ["Mobile Bookings: +200%", "Load Time: 0.8s", "Local Pack: Dominance"],
    link: "https://thangarajcatering.com",
    image: "/images/thangaraj-catering.png"
  },
  {
    title: "Iris Interiors",
    category: "Architecture & Design",
    description: "A visually stunning digital portfolio for a modern interior design studio. Focused on high-fidelity imagery and seamless user experience.",
    metrics: ["Conversion Rate: +85%", "Bounce Rate: -40%", "Core Web Vitals: Passed"],
    link: "https://irishinterior.com/",
    image: "/images/irishinterior.png"
  }
]

export function ProjectUniverse() {
  return (
    <section id="universe" className="relative py-24 px-6 max-w-6xl mx-auto z-10">
      <FadeIn>
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 text-cyan-400 text-sm font-mono mb-4">
            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
            CASE_STUDIES
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white">PROJECT UNIVERSE</h2>
        </div>
      </FadeIn>

      <div className="space-y-12">
        {projects.map((project, i) => (
          <FadeIn key={i} delay={i * 0.2}>
            <GlassPanel intensity="low" className="group border-white/5 hover:border-cyan-500/30 transition-all duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                <div className="lg:col-span-5 aspect-video lg:aspect-auto relative overflow-hidden bg-slate-900 border-b lg:border-b-0 lg:border-r border-white/5">
                   <div className="absolute inset-0 bg-slate-950 flex items-center justify-center overflow-hidden">
                     <Image src={project.image} alt={project.title} fill className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" sizes="(max-width: 1024px) 100vw, 50vw" />
                   </div>
                </div>
                <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-center">
                  <div className="text-cyan-400 text-xs font-mono mb-3 uppercase tracking-wider">{project.category}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{project.title}</h3>
                  <p className="text-slate-400 mb-8 leading-relaxed">{project.description}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    {project.metrics.map((metric, j) => {
                      const [label, value] = metric.split(': ');
                      return (
                        <div key={j} className="border-l-2 border-cyan-500/30 pl-4 py-1">
                          <div className="text-sm font-medium text-white">{value}</div>
                          <div className="text-xs text-slate-500">{label}</div>
                        </div>
                      )
                    })}
                  </div>

                  <div className="flex items-center gap-6">
                    <button className="flex items-center gap-2 text-sm font-medium text-white hover:text-cyan-400 transition-colors group/btn">
                      Explore Case Study 
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-300 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      Live Site
                    </a>
                  </div>
                </div>
              </div>
            </GlassPanel>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
