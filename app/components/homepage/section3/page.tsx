import Image from "next/image"
import { motion } from "framer-motion";

const Section3 = () => {
  const track = [
    {
      title: "Advanced tracking",
      text: "Go beyond basic metrics with detailed event tracking and custom dimension analysis",
      svg: "/search.svg"
    },
    {
      title: "In-depth monitoring",
      text: "Keep a close eye on key performance indicators and user interactions across all segments of your audience.",
      svg: "/eye.svg"
    }
  ]
  return (
    <section className={`h-screen flex py-20`}>
      <div className={`py-12 relative h-fit`}>
        <motion.div
          initial={{opacity:0, y:-40}}
          whileInView={{opacity:1, y: 0}}
          transition={{duration: .8, ease: "easeOut"}}
          viewport={{ once: false }}
        >
          <Image src={"/overview.avif"} alt={""} width={448} height={100} className={`rounded-lg`}/>
        </motion.div>
        <motion.div
          initial={{opacity:0, y:50}}
          whileInView={{opacity:1, y: 0}}
          transition={{duration: .8, ease: "easeOut"}}
          viewport={{ once: false }}
          className={`absolute right-[-120px] bottom-[-100px]`}
        >
          <Image src={"/statics.avif"} alt={""} width={240} height={100}
          className={`rounded-lg`}
          />
        </motion.div>
      </div>
      <div className={`card py-12 px-8 lg:w-[45%] w-full lg:ml-auto `}>
        <div className={`after:content-[' '] after:bg-white/5 afte:w-full after:mt-12 after:h-px after:block`}>
          <h4 className={`text-white md:text-[min(3vw,36px)] mb-4 font-bold leading-tight`}>We make it easy to track all user analytics</h4>
          <p className={`text-secondary leading-relaxed md\:text-[min(1.44vw,18px)] tracking-wider`}>
            Our platform simplifies complex data into actionable insights, helping you understand user behavior without the hassle  
          </p>
        </div>
        {track.map((trck) => (
          <div key={trck.title} className={`gap-4 relative mt-12`}>
            <Image src={trck.svg} alt={trck.title} width={24} height={24} className={`opacity-70 absolute top-1 left-0`}/>
            <h4 className={`text-white pb-2 pt-0 text-xl font-medium ml-16`}>{trck.title}</h4>
            <p className="text-secondary leading-relaxed tracking-wider ml-16">{trck.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Section3
