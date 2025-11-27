import Link from 'next/link';
import Image from 'next/image';

export default function Section1() {
  return (
    <section className="relative text-white py-40 flex flex-col items-center justify-center">
      <div className={`text-center sm:mb-20 mb-12`}>
        <h1 className={`head1 leading-[1.1] p-0 m-0 w-full`}>
          Unlock The Power of
          <br />
          Website Analytics
        </h1>
        <p
          className={`lg:text-lg mb-10 text-secondary text-pp text-[16px] max-w-[610px]`}
        >
          Understand audience behavior and website performance through
          analytics. Make decisions with clear data
        </p>
        <div
          className={`flex sm:gap-10 gap-2 sm:justify-center sm:flex-row flex-col mx-auto sm:mx-0`}
        >
          <Link
            href={'/sign-up'}
            className="btn-con md:px-6 md:py-3 px-4 py-2 w-fit mx-auto sm:mx-0"
          >
            GET STARTED
          </Link>
          <Link
            href={'/contact'}
            className="btn-out md:px-6 md:py-3 px-4 py-2 w-fit mx-auto sm:mx-0"
          >
            CONTACT US
          </Link>
        </div>
      </div>
      <div className="relative">
        <Image
          src={'/analyzes1.png'}
          alt=""
          width={1000}
          height={1200}
          className="z-0 rounded-xl shadow-2xl scale-z-120 border-[#2c2c2c] border-t-0 border-r-0 border"
        />
        <i className="absolute top-[8%] left-[12%] opacity-60 text-[min(1.385vw,14px)]">
          https//www.analyzer-an.vercel.app/dashboard
        </i>
      </div>
    </section>
  );
}
