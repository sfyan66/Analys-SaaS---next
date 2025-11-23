"use client";

import { motion } from "framer-motion";
import IncomeRadial from "@/components/analytics/increase";
import UsersGrowthBar from "@/components/analytics/baseGrowth";

const Section4 = () => {
  return (
    <section
      className={`xl:h-screen flex items-center xl:flex-row flex-col my-80`}
    >
      <div className={`py-10 pr-8 -mt-12 xl:w-[48%] w-full`}>
        <div
          className={`after:content-[' '] after:bg-white/10 after:w-full after:mt-18 after:mb-6 after:h-px xl:after:block after:hidden`}
        >
          <h4 className={`text-white subhead`}>
            Custom-made reports to
            <br />
            make great decisions
          </h4>
          <p className={`text-secondary text-pp max-w-[530px]`}>
            Build tailored reports focusing on the metrics crucial for your
            business goals, enabling smarter, data-driven choices.
          </p>
        </div>
        <ul className={`text-secondary xl:flex pt-12 justify-around hidden`}>
          <li>
            <h5 className={`text-white text-4xl mb-1 font-semibold`}>20%</h5>
            <p>Increase in retention</p>
          </li>
          <li>
            <h5 className={`text-white text-4xl mb-1 font-semibold`}>2.5X</h5>
            <p>User base growth</p>
          </li>
        </ul>
      </div>
      <div
        className={`pb-12 relative h-fit xl:ml-auto my-12 xl:block lg:grid-cols-2 md:grid-cols-[30%_70%] md:gap-y-16 lg:gap-y-0 sm:ml-16 sm:grid sm:w-fit w-[95vw]`}
      >
        <div className="ul-li">
          <h5 className={`text-white text-4xl mb-1 font-semibold`}>2.5X</h5>
          <p>User base growth</p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -120 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 1 }}
          className="xl:mb-[-180px]"
        >
          <UsersGrowthBar />
        </motion.div>
        <div className="ul-li lg:mt-40 lg:col-start-2 mt-24 md:mt-0">
          <h5 className={`text-white text-4xl mb-1 font-semibold`}>20%</h5>
          <p>Increase in retention</p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 80, x: 210 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className={`w-full max-w-[450px] xl:ml-[-210px] lg:col-start-1 lg:row-start-2`}
        >
          <IncomeRadial />
        </motion.div>
      </div>
    </section>
  );
};

export default Section4;
