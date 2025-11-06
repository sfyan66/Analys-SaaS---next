import Image from "next/image"

const Features = () => {
  const features = [
    {
      title: "Real-time trading",
      text: "Monitor market activities and execute trades instantly with up-to-the-second data.",
      svg: "/first.svg"
    },
    {
      title: "User journey",
      text: "Visualize how visitors navigate your site, identifying key touchpoints and drop-offs.",
      svg: "/second.svg"
    },
    {
      title: "Automated reports",
      text: "Receive scheduled performance summaries and insights directly to your inbox effortlessly.",
      svg: "/third.svg"
    },
    {
      title: "Funnel optimization",
      text: "Analyze conversion paths step-by-step to identify bottlenecks and boost performance.",
      svg: "/fourth.svg"
    },
    {
      title: "A/B testing",
      text: "Easily test variations of your pages or elements to determine which performs better.",
      svg: "/fifth.svg"
    },
    {
      title: "Integrations",
      text: "Connect seamlessly with your existing marketing stack and data tools for efficiency.",
      svg: "/sixth.svg"
    }
  ]
  return (
    <section className="h-screen">
      <h1 className="text-white text-center md:text-[min(3.2vw,40px)] mb-4 font-bold">A Robust Set of Features</h1>
      <p className="text-secondary text-center leading-relaxed md\:text-[min(1.44vw,18px)] tracking-wider">
        Explore our comprehensive toolkit designed to empower you with detailed<br/>tracking, reporting, and optimization capabilities for success.
      </p>
      <div className="grid grid-cols-3 gap-8 my-16">
        {features.map((feature) => (
          <div key={feature.title} className={`card pt-8 pb-10 px-4`}>
            <Image src={feature.svg} alt={feature.title} width={30} height={30} className={`opacity-70`}/>
            <h4 className={`text-white/95 pb-2 pt-8 text-xl font-medium`}>{feature.title}</h4>
            <p className="text-secondary leading-relaxed tracking-wider">{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
