import { div } from 'framer-motion/client';
import Image from 'next/image';

type Plan = {
  type: string;
  price: string;
  description: string;
  features: string[];
  active?: boolean;
};

const PricingCard = ({ type, price, description, features, active }: Plan) => {
  return (
    <main
      data-active={active || undefined}
      className={`card text-secondary pt-9 pb-12 px-7 lg:w-[360px] w-[330px] max-w-[400px]
      ${
        type === 'Growth'
          ? 'scale-z-160 scale-x-105 scale-y-102 shadow-[0_0_4px_rgba(255,255,255,.20)] border-white shadow-white text-white/90 hover:scale-x-104 hover:scale-y-101 hover:scale-z-150'
          : 'scale-z-80 hover:scale-y-97 hover:scale-x-97 hover:scale-z-80 scale-x-98 scale-y-98'
      }`}
    >
      <div>
        <div
          className={`after-line text-center after:my-8
            ${type === 'Growth' ? 'after:bg-white/50' : ''}`}
        >
          <h4 className={`text-xl font-semibold`}>{type}</h4>
          <h3 className={`text-4xl font-bold text-white my-4 `}>
            ${price}
            <span className={`text-[16px]`}>/month</span>
          </h3>
          <p className="text-secondary text-pp text-[16px]">{description}</p>
        </div>
        <ul>
          {features.map((feature, i) => (
            <li key={i} className={`mb-2 flex gap-4`}>
              <Image
                src={'/saah.svg'}
                alt={''}
                width={20}
                height={20}
                className="opacity-60"
              />
              <p className="text-pp text-[16px]">{feature}</p>
            </li>
          ))}
        </ul>
      </div>
      <button
        className={`w-full text-center mt-8 hover:bg-white hover:text-black
          ${type === 'Growth' ? 'btn-con' : 'btn-out'}`}
      >
        GET STARTED
      </button>
    </main>
  );
};

export default PricingCard;
