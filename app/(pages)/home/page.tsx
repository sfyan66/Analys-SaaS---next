"use client"

import Hero from "../../components/homepage/hero/page";
import Features from "../../components/homepage/features/page";
import Section3 from "../../components/homepage/section3/page";
import Section4 from "../../components/homepage/section4/page";
import Section5 from "../../components/homepage/section5/page";

const Home = () => {
  return (
    <main 
    className="cont">
      <Hero />
      <Features />
      <Section3 />
      <Section4 />
      <Section5 />
    </main>
  )
}

export default Home

