"use client";

import { motion } from "framer-motion";

import Card from "@/components/card/page";

const features = [
  {
    title: "Innovation",
    text: "We are exploring new technologies and methods to enhance our platform, ensuring you have cutting-edge tools.",
    svg: "/first2.svg",
  },
  {
    title: "Accountability",
    text: "We take ownership of our commitments, providing reliable data and transparent reporting to build trust with every client.",
    svg: "/second2.svg",
  },
  {
    title: "Commitment",
    text: "Dedicated to your success, we ensure our platform delivers value, our support team is always ready to assist you.",
    svg: "/third2.svg",
  },
  {
    title: "Team Work",
    text: "Collaboration is key. We foster an environment where talents unite to solve challenges and build solutions.",
    svg: "/forth2.svg",
  },
  {
    title: "Transparency",
    text: "Open and clear processes define our approach, ensuring you understand how our platform works.",
    svg: "/fifth2.svg",
  },
  {
    title: "Security",
    text: "Protecting your data is paramount. We employ measures and practices to ensure platform and data integrity.",
    svg: "/sixth2.svg",
  },
];

const Section23 = () => {
  return (
    <section className="lg:h-screen">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ amount: 1, once: true }}
      >
        <h1 className="text-white text-center subhead">
          The values that drive
          <br />
          everything we do
        </h1>
      </motion.div>
      <Card features={features} />
    </section>
  );
};

export default Section23;
