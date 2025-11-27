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
import { usePathname } from 'next/navigation';

const Header = () => {
  const [active, setActive] = useState(false);
  const pathname = usePathname();
  return (
    <header
      className={`backdrop:blur-2xl shadow-2xl text-white fixed top-0 w-full left-0 backdrop-blur-lg z-100 px-4 md:px-6 xl:p-0`}
    >
      <nav
        className={`flex xl:max-w-7xl mx-auto justify-between items-center py-4 relative`}
      >
        <a href="">
          <h4 className={`text-[min(10vw,28px)] font-serif font-bold`}>
            Analyzer
          </h4>
        </a>
        <ul className={`hidden lg:flex gap-3 items-center text-secondary`}>
          <li>
            <Link
              href={'/home'}
              className={`nav-btn headernav ${
                pathname === '/' || pathname === '/home' ? 'nav-btn-active' : ''
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={'/about'}
              className={`nav-btn headernav ${
                pathname === '/about' ? 'nav-btn-active' : ''
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href={'/pricing'}
              className={`nav-btn headernav ${
                pathname === '/pricing' ? 'nav-btn-active' : ''
              }`}
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              href={'/contact'}
              className={`nav-btn headernav ${
                pathname === '/contact' ? 'nav-btn-active' : ''
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="ml-auto mr-6 lg:m-0">
          <SignedOut>
            <ul className={`flex gap-6 items-center`}>
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
        </div>
        <SignedIn>
          <div className="absolute -translate-y-1/2 top-1/2 scale-y-125 scale-x-125 size-7 md:translate-0 right-14 md:relative md:right-0">
            <UserButton />
          </div>
        </SignedIn>
        <div
          className="lg:hidden flex w-12 h-12 cursor-pointer"
          onClick={() => setActive(!active)}
        >
          {active ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 690 690"
              fill="white"
            >
              <path d="M504.6 148.5C515.9 134.9 514.1 114.7 500.5 103.4C486.9 92.1 466.7 93.9 455.4 107.5L320 270L184.6 107.5C173.3 93.9 153.1 92.1 139.5 103.4C125.9 114.7 124.1 134.9 135.4 148.5L278.3 320L135.4 491.5C124.1 505.1 125.9 525.3 139.5 536.6C153.1 547.9 173.3 546.1 184.6 532.5L320 370L455.4 532.5C466.7 546.1 486.9 547.9 500.5 536.6C514.1 525.3 515.9 505.1 504.6 491.5L361.7 320L504.6 148.5z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              fill="white"
            >
              <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z" />
            </svg>
          )}

          <div
            className={`${
              active ? 'flex' : 'hidden'
            } flex-col card bg-primary w-full mt-2 absolute z-100 right-0 top-16 py-8 px-4  shadow-2xl gap-8`}
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
              <ul className={`flex flex-col gap-4 w-full`}>
                <li>
                  <SignInButton>
                    <button className={`btn-out py-3 sm:py-2 w-full sm:hidden`}>
                      LOG IN
                    </button>
                  </SignInButton>
                </li>
                <li>
                  <SignUpButton>
                    <button className={`btn-con py-3 w-full sm:hidden`}>
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
