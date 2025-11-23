"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Section22 = () => {
  return (
    <main className="my-40 flex items-center">
      <div className="lg:grid lg:grid-cols-2 gap-y-40 overflow-hidden lg:max-w-7xl max-w-[600px] mx-auto">
        <motion.div
          initial={{ x: `100%` }}
          whileInView={{ x: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0 }}
        >
          <Image
            src={"/men1.jpg"}
            alt=""
            width={1000}
            height={280}
            className="rounded-4xl"
          />
        </motion.div>
        <div className="lg:my-auto lg:pl-24 my-8">
          <h2 className="subhead text-white mb-8">
            A great story always starts with a great team
          </h2>
          <p className="text-secondary text-pp text-[16px]">
            Behind every success is a group of passionate individuals. Discover
            the talented people who collaborate daily, bringing expertise and
            dedication to make Pixelcloud a leader in analytics.
          </p>
        </div>
        <motion.div
          initial={{ x: `-100%` }}
          whileInView={{ x: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0 }}
          className="mt-32 lg:mt-0"
        >
          <Image
            src={"/men2.jpg"}
            alt=""
            width={600}
            height={280}
            className="rounded-4xl lg:col-start-2 lg:row-start-2 w-full "
          />
        </motion.div>
        <div className="lg:my-auto lg:pr-24 lg:col-start-1 lg:row-start-2 my-8">
          <h2 className="subhead text-white mb-8">
            Our mission is to help you grow your business
          </h2>
          <p className="text-secondary text-pp text-[16px]">
            We strive to simplify complex data, providing clear, actionable
            insights that enable smarter marketing decisions, optimize user
            experience and drive sustainable business growth for you.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Section22;
