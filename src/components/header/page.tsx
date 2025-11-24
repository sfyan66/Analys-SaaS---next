'use client';

import Link from 'next/link';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from '@clerk/nextjs';
import { useState } from 'react';

const Header = () => {
  const [active, setActive] = useState(false);
  return (
    <header
      className={`backdrop:blur-2xl shadow-2xl text-white fixed top-0 w-full left-0 backdrop-blur-lg z-100 px-6`}
    >
      <nav
        className={`flex max-w-5xl xl:max-w-7xl mx-auto justify-between items-center py-4 relative`}
      >
        <a href="">
          <h4 className={`text-[min(10vw,24px)] font-serif font-bold`}>
            Analyzer
          </h4>
        </a>
        <ul className={`hidden md:flex gap-3 items-center text-secondary`}>
          <li>
            <Link href={'/home'} className="nav-btn pt-2 pb-2.5 px-5">
              Home
            </Link>
          </li>
          <li>
            <Link href={'/about'} className="nav-btn pt-2 pb-2.5 px-5">
              About
            </Link>
          </li>
          <li>
            <Link href={'/pricing'} className="nav-btn pt-2 pb-2.5 px-5">
              Pricing
            </Link>
          </li>
          <li>
            <Link href={'/contact'} className="nav-btn pt-2 pb-2.5 px-5">
              Contact
            </Link>
          </li>
        </ul>
        <SignedOut>
          <ul className={`flex gap-6 items-center ml-auto md:m-0`}>
            <li>
              <SignInButton>
                <button className={`btn-out py-2 hidden sm:block`}>
                  LOG IN
                </button>
              </SignInButton>
            </li>
            <li>
              <SignUpButton>
                <button className={`btn-con py-2 md:block hidden`}>
                  GET STARTED
                </button>
              </SignUpButton>
            </li>
          </ul>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <div
          className="md:hidden block w-12 h-12 cursor-pointer"
          onClick={() => setActive(!active)}
        >
          <SignedIn>
            <UserButton />
          </SignedIn>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            fill="white"
          >
            <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z" />
          </svg>
          <div
            className={`${
              active ? 'flex' : 'hidden'
            } flex-col backdrop-blur-md card bg-primary w-full mt-2 absolute z-100 right-0 py-8 px-4  shadow-2xl gap-8`}
          >
            <ul className={`flex flex-col gap-4 text-secondary w-full`}>
              <Link href={'/home'}>
                <li className="navbtn">Home</li>
              </Link>
              <Link href={'/about'}>
                <li className="navbtn">About</li>
              </Link>
              <Link href={'/pricing'}>
                <li className="navbtn">Pricing</li>
              </Link>
              <Link href={'/contact'}>
                <li className="navbtn">Contact</li>
              </Link>
            </ul>
            <SignedOut>
              <ul className={`flex flex-col gap-2 w-full`}>
                <li>
                  <SignInButton>
                    <button className={`btn-out py-2 w-full sm:hidden`}>
                      LOG IN
                    </button>
                  </SignInButton>
                </li>
                <li>
                  <SignUpButton>
                    <button className={`btn-con py-2 w-full`}>
                      GET STARTED
                    </button>
                  </SignUpButton>
                </li>
              </ul>
            </SignedOut>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
