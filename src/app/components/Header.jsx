"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <header
        className={`w-full py-[18px] max-[500px]:py-[10px] justify-center flex text-[18px] font-semibold fixed bg-white z-30`}
      >
        <div
          className={`w-full max-w-[1120px] flex justify-between px-[24px] max-lg:max-w-[768px] max-xs:max-w-[768px] max-[500px]:max-w-[400px] max-[500px]:px-[12px]`}
        >
          <a href="#home" className={`font-bold`}>
            Frank Lee
          </a>
          <nav className={`max-[500px]:hidden`}>
            <ul className={`flex gap-[40px]`}>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About Me</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>

          {!showMenu && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu hidden max-[500px]:block cursor-pointer"
              onClick={() => setShowMenu(true)}
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          )}
          {showMenu && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-x cursor-pointer"
              onClick={() => setShowMenu(false)}
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          )}
        </div>
      </header>
      <AnimatePresence>
        {showMenu && (
          <motion.nav
            className={`bg-white pt-[4dvh] fixed w-full origin-top z-20`}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{
              duration: 0.3,
            }}
          >
            <ul
              className={`flex flex-col gap-[18px] w-full items-center py-[18px] font-medium`}
            >
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About Me</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
