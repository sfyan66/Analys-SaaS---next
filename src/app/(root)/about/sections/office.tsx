import Image from 'next/image';
import { OfficeLocations } from '@/components/office-acordion';

const Office = () => {
  return (
    <section className="lg:h-screen lg:m-0 my-60">
      <h1 className="text-white text-center subhead">
        Come and visit our
        <br />
        offices around the&nbsp;world
      </h1>
      <p className="text-secondary text-center text-pp text-[16px] max-w-[580px] mx-auto">
        We have a global presence with dedicated teams working together. Find
        the Pixelcloud office nearest to you below.
      </p>
      <div className="relative flex lg:flex-row-reverse flex-col lg:gap-16 xl:gap-32 sm:my-24 items-center lg:w-full lg:max-w-7xl max-w-[600px] mx-auto min-h-[570px]">
        <div className="flex items-center flex-1 w-full">
          <OfficeLocations />
        </div>
        <Image
          src={'/office.jpg'}
          alt=""
          width={1000}
          height={1000}
          className="flex-1 rounded-4xl w-full lg:w-1/2 -z-10 lg:relative absolute top-1/2 -translate-y-1/2 lg:translate-0"
        />
      </div>
    </section>
  );
};

export default Office;
