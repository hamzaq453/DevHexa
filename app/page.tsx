'use client'

import Hero from "@/components/Hero"
import { ScrollBasedVelocityDemo } from "@/components/Scroll2"
import { TimelineDemo } from "@/components/Timeline"
import { BentoGridDemo } from "@/components/Projects"
import { RetroGridDemo } from "@/components/RetroGrid"
export default function SplineSceneBasic() {
  return (
    <div className="flex flex-col min-h-screen bg-black"> 
      <section className="w-full">  
        <Hero/>
      </section>
      
      <section className="w-full mt-16">
        <ScrollBasedVelocityDemo/>
      </section>

      <section className="w-full mt-16">
        <TimelineDemo/>
      </section>

      <section className="w-full mt-10">
        <BentoGridDemo/>
      </section>

      <section className="w-full mt-10">
        <RetroGridDemo/>
      </section>
    </div>
  )
}