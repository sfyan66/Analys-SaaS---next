import Image from "next/image";
import { motion } from "framer-motion";

type FeatureArray = {
  title: string;
  text: string;
  svg: string;
};

type Feature = {
  features: FeatureArray[];
};

const Card = ({ features }: Feature) => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 my-16 justify-items-center">
      {features.map((feature) => (
        <div key={feature.title}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.7 }}
          >
            <div className={`card pt-8 pb-10 px-4 max-w-[420px] min-h-[250px]`}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeIn", delay: 0.5 }}
                viewport={{ amount: 0.7, once: true }}
              >
                <Image
                  src={feature.svg}
                  alt={feature.title}
                  width={30}
                  height={30}
                  className={`opacity-70`}
                />
                <h4
                  className={`text-white pb-2 pt-8 text-[24px] font-semibold`}
                >
                  {feature.title}
                </h4>
                <p className="text-secondary leading-relaxed tracking-widest md:text-[1rem]">
                  {feature.text}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Card;
