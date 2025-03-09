'use client'

import { NavBarDemo } from "@/components/Navbar"
import Hero from "@/components/Hero"
import VerticalScroll from "@/components/VerticalScroll"
import { ScrollBasedVelocityDemo } from "@/components/Scroll2"
export default function SplineSceneBasic() {
  return (
    <div className="flex flex-col min-h-screen"> 
      <section className="w-full">  
        <Hero/>
      </section>
      
      <section className="w-full mt-2">
        <ScrollBasedVelocityDemo/>
      </section>
    </div>
  )
}