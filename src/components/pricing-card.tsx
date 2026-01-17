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
      className={`card text-secondary pt-9 pb-12 md:pb-18 xl:pt-9 xl:pb-12 px-7 xl:w-[360px] md:w-[720px] w-[330px]
      ${
        type === 'Growth'
          ? 'xl:scale-z-160 xl:scale-x-105 xl:scale-y-102 shadow-[0_0_4px_rgba(255,255,255,.20)] border-white shadow-white text-white/90 xl:hover:scale-x-104 xl:hover:scale-y-101 xl:hover:scale-z-150 hover:scale-99'
          : 'hover:scale-y-99 hover:scale-x-99'
      }`}
    >
      <div className="flex flex-col md:grid md:grid-cols-2 gap-x-24 xl:flex">
        <div
          className={`relative md:row-span-2 after-line  md:after:h-full md:after:w-px md:after:absolute xl:after:relative md:after:-right-10 xl:after:right-0 md:after:top-0 xl:after-line after:my-8 md:after:my-0 xl:after:my-8  text-center md:text-start xl:text-center
            ${
              type === 'Growth'
                ? 'after:bg-white/50 xl:after:bg-white/50'
                : 'after:bg-white/10 md:after:bg-white/20 xl:after:bg-white/10'
            }`}
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
        <button
          className={`w-full text-center mt-8 hover:bg-white col-start-2 hover:text-black
            ${type === 'Growth' ? 'btn-con' : 'btn-out'}`}
        >
          GET STARTED
        </button>
      </div>
    </main>
  );
};

export default PricingCard;
