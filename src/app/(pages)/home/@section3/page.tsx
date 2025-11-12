"use client"

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
    <section
      className={`lg:h-screen flex py-20 flex-col`}
    >
      <div
        className={``}
      >
        <h4
          className={`text-white lg:text-[min(2.8vw,36px)] text-[min(6vw,36px)] mb-4 font-bold leading-tight`}
        >
          We make it easy<br/>to track all user analytics
        </h4>
        <p
          className={`text-secondary leading-relaxed lg:text-[min(2.8vw,16px)] text-[min(2.6vw,16px)] tracking-wider`}
        >
          Our platform simplifies complex data intoactionable insights,<br/>helping you understand user behavior without the hassle  
        </p>
      </div>
      <div
        className={`flex justify-between gap-8`}
      >
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8, ease: "easeOut" }}
          viewport={{ once: false, amount: .6 }}
          className={`card p-2 flex-1 rounded-4xl`}
        >
          <Image
            src={"/section31.png"}
            alt={""}
            width={800}
            height={100}
            className={`rounded-lg w-[60%]`}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8, ease: "easeOut" }}
          viewport={{ once: false }}
          className={`card p-2 flex-1`}
        >
          <Image
            src={"/section4.png"}
            alt={""}
            width={600}
            height={150}
            className={`rounded-lg w-[60%] m-auto`}
          />
        </motion.div>
      </div>
      <div
        className={`flex justify-between`}
      >
          {track.map((trck) => (
            <div
              key={trck.title}
              className={`gap-4 relative mt-12 flex-1 ml-12`}
            >
              <Image
                src={trck.svg}
                alt={trck.title}
                width={24}
                height={24}
                className={`opacity-70 mb-4 ml-1`}
              />
              <h4
                className={`text-white pb-4 pt-0 text-xl font-medium`}
              >
                {trck.title}
              </h4>
              <p
                className="text-secondary leading-relaxed tracking-wider text-[min(2.3vw, 16px)]  max-w-[320px]"
              >
                {trck.text}
              </p>
            </div>
          ))}
      </div>
    </section>
  )
}

export default Section3
