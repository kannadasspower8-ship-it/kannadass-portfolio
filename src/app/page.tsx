import { HeroSection } from "@/components/sections/HeroSection"
import { DashboardSection } from "@/components/sections/DashboardSection"
import { ProjectUniverse } from "@/components/sections/ProjectUniverse"
import { WorkflowEngine } from "@/components/sections/WorkflowEngine"
import { GrowthEngine } from "@/components/sections/GrowthEngine"
import { TransformationLab } from "@/components/sections/TransformationLab"
import { SkillsGalaxy } from "@/components/sections/SkillsGalaxy"
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline"
import { TrustSection } from "@/components/sections/TrustSection"
import { FutureVision } from "@/components/sections/FutureVision"
import { ContactPortal } from "@/components/sections/ContactPortal"

export default function Home() {
  return (
    <>
      <HeroSection />
      <DashboardSection />
      <ProjectUniverse />
      <WorkflowEngine />
      <GrowthEngine />
      <TransformationLab />
      <SkillsGalaxy />
      <ExperienceTimeline />
      <TrustSection />
      <FutureVision />
      <ContactPortal />
    </>
  )
}
