"use client";

import Image from "next/image";

const Section21 = () => {
  return (
    <section
      className={`xl:h-screen flex flex-col xl:flex-row gap-16 xl:gap-0 mt-40 xl:mt-0 text-center xl:text-start items-center justify-between`}
    >
      <div className={`max-w-[510px]`}>
        <h1
          className={`h1 leading-none font-normal sm:text-[min(7vw,72px)] text-4xxl`}
        >
          About our
          <span className="sm:text-[min(6vw,64px)] text-4xl"> Company</span>
        </h1>
        <p className={`text-secondary mb-8 sm:text-[min(1.8vw,16px)] text-sm`}>
          Learn about our journey, dedicated team, and the core mission driving
          us to empower businesses like yours with actionable insights derived
          from clear, concise website analytics.
        </p>
        <div className={`btn-div`}>
          <button className="btn-con">JOIN OUR TEAM</button>
          <button
            onClick={() => window.scrollBy(0, window.innerHeight)}
            className={`btn-out`}
          >
            ABOUT US
          </button>
        </div>
      </div>
      <div className="width md:grid md:grid-cols-2 text-secondary text-center">
        <Image
          src={"/man3.jpg"}
          alt=""
          width={250}
          height={280}
          className="rounded-2xl md:ml-8 w-[350px] md:w-[250px]"
        />
        <div className="py-8 px-12 card md:ml-16 md:size-fit rounded-2xl md:mt-16 w-full mt-8">
          <span className="text-3xl text-white">+100M</span>
          <br />
          Tracked users
        </div>
        <div className="py-8 px-12 card md:mr-auto md:size-fit rounded-2xl md:mt-12 md:-ml-16 w-full mt-8">
          <span className="text-3xl text-white">$10.5M</span>
          <br />
          Capital raised
        </div>
        <Image
          src={"/man5.jpg"}
          alt=""
          width={300}
          height={280}
          className="-ml-20 -mt-18 rounded-2xl hidden md:block"
        />
      </div>
    </section>
  );
};

export default Section21;
