import Image from "next/image";
import { PLaces } from "@/components/acordion/page";

const Section24 = () => {
  return (
    <section>
      <h1 className="text-white text-center lg:text-[min(3.2vw,40px)] mb-4 font-bold text-[min(7vw,40px)] leading-tight">
        Come and visit our
        <br />
        offices around the world
      </h1>
      <p className="text-secondary text-center leading-relaxed md\:text-[min(1.44vw,18px)] tracking-wider text-[min(2.4vw,14px)]">
        We have a global presence with dedicated teams working
        <br />
        together. Find the Pixelcloud office nearest to you below.
      </p>
      <div className="flex lg:flex-row-reverse flex-col lg:gap-32 my-12 items-center lg:w-full lg:max-w-7xl max-w-[600px] mx-auto">
        <div className="flex items-center flex-1 w-full">
          <PLaces />
        </div>
        <Image
          src={"/office.jpg"}
          alt=""
          width={1000}
          height={1000}
          className="flex-1 rounded-4xl w-full"
        />
      </div>
    </section>
  );
};

export default Section24;
