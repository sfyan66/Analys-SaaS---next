'use client';

import AcountsIcons from './acount-icons';
import { addEmail, FormState } from '@/actions/emails';
import Form from 'next/form';
import Link from 'next/link';
import { useActionState, useState } from 'react';
import Image from 'next/image';

const Footer = () => {
  const initialState: FormState = {
    errors: {},
  };
  const [state, formAction] = useActionState(addEmail, initialState);
  const [email, setEmail] = useState('');

  return (
    <footer className={`relative h-screen footer-line mt-80`}>
      <main className="cont">
        <section className="flex flex-col lg:flex-row justify-between gap-24 lg:items-end lg:text-start text-center">
          <div>
            <div className="text-white text-[min(12vw,36px)] font-bold font-serif mb-8 flex gap-4 lg:justify-start justify-center">
              <Image
                src={'/full-logo.png'}
                alt=""
                width={50}
                height={50}
                className="size-9  my-auto"
              ></Image>
              <h2>Analyzer</h2>
            </div>
            <p className="text-secondary text-pp text-[18px] opacity-95 leading-[1.8] max-w-[420px] lg:m-0 mx-auto">
              Empowering businesses with clear website analytics for smarter
              decisions and growth.
            </p>
          </div>
          <Form
            action={formAction}
            className=" max-w-[420px] w-full lg:m-0 mx-auto"
          >
            <h3 className="text-white subhead text-lg ">
              Subscribe to our newsletter
            </h3>
            <div className="relative">
              <input
                type="text"
                name="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`placeholder:text-secondary placeholder:opacity-70 rounded-lg border border-borderColor px-4 py-3 w-full bg-white/3 outline-none text-white text-lg font-bold`}
              />
              <button
                className={`absolute top-[15%] right-2.5 h-[70%] btn-con py-0 px-3 sm:block hidden`}
              >
                GET STARTED
              </button>
              <button className={`btn-con sm:hidden w-full py-4 mt-4`}>
                GET STARTED
              </button>
            </div>
            {state.errors?.email && (
              <p className={`text-center text-red-900 mt-4`}>
                {state.errors?.email}
              </p>
            )}
          </Form>
        </section>
        <section className="relative flex flex-col footer-line mt-32 mb-64">
          <div className="mb-12 mt-32">
            <Image
              src={'/full-logo.png'}
              alt=""
              width={180}
              height={180}
              className="rounded-4xl mx-auto translate-y-1.5 shadow-white shade"
            />
          </div>

          <h1 className="text-[48px] leading-none text-white text-center mb-4">
            Transform your
            <br />
            business experience
          </h1>
          <p className="text-pp text-[18px] text-secondary max-w-[520px] text-center mx-auto">
            Using data-driven tools that help you
            <br />
            work smarter every day.
          </p>
          <div className=" w-full mt-8 flex flex-col md:gap-8 gap-4 justify-center  md:flex-row text-center max-w-[300px] md:max-w-[600px] mx-auto">
            <Link
              href={'/sign-up'}
              className="btn-con scale-110 hover:scale-107"
            >
              Get Started
            </Link>
            <Link
              href={'/pricing'}
              className="btn-out scale-110 hover:scale-107"
            >
              Explore Plans
            </Link>
          </div>
        </section>
        <section className="mt-32 relative footer-line after:-mt-6 md:justify-between md:flex">
          <div className="flex justify-center md:block">
            <p className="text-secondary text-pp text-[18px] opacity-95 inline text-center">
              Copyright © Analyzer&nbsp;&nbsp;|&nbsp;&nbsp;Developed by&nbsp;
              <a href="/home" className="text-white text-xl inline underline">
                Sfyan
              </a>
            </p>
          </div>
          <div className="flex justify-center md:block my-2 md:m-0">
            <AcountsIcons />
          </div>
        </section>
      </main>
    </footer>
  );
};

export default Footer;
