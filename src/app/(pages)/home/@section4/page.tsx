"use client"

import Image from "next/image";
import { motion } from "framer-motion";

const Section4 = () => {
  return (
    <section 
      className={`lg:h-screen flex items-center lg:flex-row flex-col lg:m-0 my-24`}
    >
      <div 
        className={`card py-10 px-8 lg:w-[45%] max-w-[560px]`}
      >
        <div 
          className={`after:content-[' '] after:bg-white/5 after:w-full after:mt-12 after:h-px after:block`}
        >
          <h4 
            className={`text-white lg:text-[min(2.8vw,36px)] text-[min(6vw,36px)] mb-4 font-bold leading-tight`}
          >Custom-made reports to make great decisions</h4>
          <p 
            className={`text-secondary leading-relaxed lg:text-[min(1.328vw,17px)] text-[min(2.5vw,16px)] tracking-wider`}
          >
            Build tailored reports focusing on the metrics crucial for your business goals, enabling smarter, data-driven choices.
          </p>
        </div>
        <ul 
          className={`text-secondary flex pt-12 justify-around`}
        >
          <li 
            className="lg:flex-1"
          >
            <h5 
              className={`text-white text-4xl mb-1 font-semibold`}
            >
              40%
            </h5>
            <p>
              Increase in retention
            </p>
          </li>
          <li 
            className="lg:flex-1"
          >
            <h5 
              className={`text-white text-4xl mb-1 font-semibold`}
            >
              2.5X
            </h5>
            <p>
              User base growth
            </p>
          </li>
        </ul>
      </div>
      <div
        className={`pb-12 relative h-fit lg:ml-auto lg:-mt-32 w-[min(95vw,560px)] my-12`}
      >
        <motion.div
          initial={{opacity:0, y:-40}}
          whileInView={{opacity:1, y: 0}}
          transition={{duration: .8, ease: "easeOut"}}
          viewport={{ once: false }}
        >
          <Image
            src={"/section01.png"}
            alt={""}
            width={450}
            height={250}
            className={`rounded-lg lg:max-w-[450px] md:w-[560px] w-[80%] ml-auto`}
          />
        </motion.div>
        <motion.div
          initial={{opacity:0, y:50}}
          whileInView={{opacity:1, y: 0}}
          transition={{duration: .8, ease: "easeOut"}}
          viewport={{ once: false }}
          className={`absolute left-0 md:-left-20 lg:left-0 bottom-[max(-20vw,-130px)] lg:w-[250px] md:w-[280px] w-[45%]`}
        >
          <Image
            src={"/section52.png"}
            alt={""}
            width={250}
            height={100}
            className={`rounded-lg`}
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Section4