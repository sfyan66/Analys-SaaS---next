'use client';

import { motion } from 'framer-motion';

import Card from '@/components/feature-card';

const features = [
  {
    title: 'Innovation',
    text: 'We are exploring new technologies and methods to enhance our platform, ensuring you have cutting-edge tools.',
    svg: '/innovation.svg',
  },
  {
    title: 'Accountability',
    text: 'We take ownership of our commitments, providing reliable data and transparent reporting to build trust with every client.',
    svg: '/accountability.svg',
  },
  {
    title: 'Commitment',
    text: 'Dedicated to your success, we ensure our platform delivers value, our support team is always ready to assist you.',
    svg: '/commitment.svg',
  },
  {
    title: 'Team Work',
    text: 'Collaboration is key. We foster an environment where talents unite to solve challenges and build solutions.',
    svg: '/teamwork.svg',
  },
  {
    title: 'Transparency',
    text: 'Open and clear processes define our approach, ensuring you understand how our platform works.',
    svg: '/transparency.svg',
  },
  {
    title: 'Security',
    text: 'Protecting your data is paramount. We employ measures and practices to ensure platform and data integrity.',
    svg: '/security.svg',
  },
];

const AboutFeatures = () => {
  return (
    <section className="lg:h-screen">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
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

export default AboutFeatures;
