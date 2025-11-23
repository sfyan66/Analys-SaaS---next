"use client";

import { motion } from "framer-motion";
import Card from "@/components/card/page";

const Features = () => {
  const features = [
    {
      title: "Real-time trading",
      text: "Monitor market activities and execute trades instantly with up-to-the-second data.",
      svg: "/first.svg",
    },
    {
      title: "User journey",
      text: "Visualize how visitors navigate your site, identifying key touchpoints and drop-offs.",
      svg: "/second.svg",
    },
    {
      title: "Automated reports",
      text: "Receive scheduled performance summaries and insights directly to your inbox effortlessly.",
      svg: "/third.svg",
    },
    {
      title: "Funnel optimization",
      text: "Analyze conversion paths step-by-step to identify bottlenecks and boost performance.",
      svg: "/fourth.svg",
    },
    {
      title: "A/B testing",
      text: "Easily test variations of your pages or elements to determine which performs better.",
      svg: "/fifth.svg",
    },
    {
      title: "Integrations",
      text: "Connect seamlessly with your existing marketing stack and data tools for efficiency.",
      svg: "/sixth.svg",
    },
  ];
  return (
    <section className="lg:h-screen">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ amount: 1, once: true }}
      >
        <h1 className="text-white text-center subhead">
          A Robust Set of Features
        </h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        viewport={{ amount: 1, once: true }}
      >
        <p className="text-secondary text-center text-pp max-w-[750px] m-auto">
          Explore our comprehensive toolkit designed to empower you with
          detailed tracking, reporting, and optimization capabilities for
          success.
        </p>
      </motion.div>
      <Card features={features} />
    </section>
  );
};

export default Features;
