"use client";

import OpenAILogo from "./OpenAILogo";
import ReactLogo from "./ReactLogo";
import BuildBox from "./BuildBox";
import EC2Logo from "./EC2Logo";
import FigmaLogo from "./FigmaLogo";
import NodeLogo from "./NodeLogo";
import JestLogo from "./JestLogo";
import { motion } from "framer-motion";

export default function BoxesSection() {
  return (
    <div
      className={`flex flex-col items-center gap-[16px] relative w-full py-[140px] max-[500px]:py-[100px] max-lg:px-[60px] max-lg:py-[170px] px-[160px] max-[500px]:px-0`}
    >
      <BuildBox
        logo={<FigmaLogo />}
        text="Design"
        className={`top-1/2 left-0 max-lg:top-0`}
        delay={0}
      />
      <BuildBox
        logo={<ReactLogo />}
        text="Frontend"
        className={`top-0 left-1/3 max-lg:left-1/2 max-lg:-translate-x-1/2`}
        delay={3}
      />
      <BuildBox
        logo={<NodeLogo />}
        text="Backend"
        className={`top-0 left-2/3 max-lg:right-0 max-lg:left-full max-lg:-translate-x-full`}
        delay={6}
      />
      <BuildBox
        logo={<EC2Logo />}
        text="Deployment"
        className={`top-1/2 left-full max-lg:top-full max-lg:-translate-y-full max-lg:-translate-x-full`}
        delay={9}
      />
      <BuildBox
        logo={<JestLogo />}
        text="Testing"
        className={`top-full left-2/3 max-lg:-translate-y-full max-lg:left-1/2 max-lg:-translate-x-1/2`}
        delay={12}
      />
      <BuildBox
        logo={<OpenAILogo />}
        text="AI/ML"
        className={`top-full left-1/3 max-lg:-translate-y-full max-lg:left-0`}
        delay={15}
      />
      <motion.svg
        className={`absolute left-0 top-0 max-lg:hidden`}
        id="line"
        xmlns="http://www.w3.org/2000/svg"
        width="272"
        height="206"
        viewBox="0 0 272 206"
        fill="none"
      >
        <motion.path
          animate={{ pathLength: [0, 1, 1], pathOffset: [0, 0, 1] }}
          transition={{
            delay: 1,
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 14,
          }}
          d="M1 206V119.5V60.2504C1 60.2504 0.999973 33.3232 17.5001 16.9886C34.0001 0.654062 57.75 1.00057 57.75 1.00057H114.5H272"
          stroke="url(#paint0_linear_221_5)"
          strokeWidth="2"
        />
        <defs>
          <linearGradient
            id="paint0_linear_221_5"
            x1="94.2958"
            y1="609.568"
            x2="404.47"
            y2="516.351"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#14397d" />
            <stop offset="1" stopColor="#d7eaf3" />
          </linearGradient>
        </defs>
      </motion.svg>

      <motion.svg
        className={`absolute top-0 max-lg:hidden`}
        xmlns="http://www.w3.org/2000/svg"
        width="213"
        height="2"
        viewBox="0 0 213 2"
        fill="none"
      >
        <motion.path
          animate={{ pathLength: [0, 1, 1], pathOffset: [0, 0, 1] }}
          transition={{
            delay: 4,
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 14,
          }}
          d="M0 1H304.5"
          stroke="url(#paint0_linear_221_12)"
          strokeWidth="2"
        />
        <defs>
          <linearGradient
            id="paint0_linear_221_12"
            x1="125.148"
            y1="3.5678"
            x2="125.198"
            y2="-1.17979"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#14397d" />
            <stop offset="1" stopColor="#d7eaf3" />
          </linearGradient>
        </defs>
      </motion.svg>

      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        className={`absolute top-0 left-full -translate-x-full max-lg:hidden`}
        width="273"
        height="206"
        viewBox="0 0 273 206"
        fill="none"
      >
        <motion.path
          animate={{ pathLength: [0, 1, 1], pathOffset: [0, 0, 1] }}
          transition={{
            duration: 4,
            delay: 7,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 14,
          }}
          d="M1.84848e-06 0.999988L136 0.999994L204 0.999997C204 0.999997 234.903 0.99997 253.65 18.2269C272.397 35.4539 271.999 60.25 271.999 60.25L271.999 119.5L271.999 206"
          stroke="url(#paint0_linear_221_8)"
          strokeWidth="2"
        />
        <defs>
          <linearGradient
            id="paint0_linear_221_8"
            x1="-426.441"
            y1="98.4057"
            x2="-336.622"
            y2="426.936"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#14397d" />
            <stop offset="1" stopColor="#d7eaf3" />
          </linearGradient>
        </defs>
      </motion.svg>

      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="274"
        height="206"
        viewBox="0 0 274 206"
        fill="none"
        className={`absolute left-full -translate-x-full top-full -translate-y-full max-lg:hidden`}
      >
        <motion.path
          animate={{ pathLength: [0, 1, 1], pathOffset: [0, 0, 1] }}
          transition={{
            duration: 4,
            delay: 10,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 14,
          }}
          d="M273 4.70681e-06L273 102.5L273 153.75C273 153.75 273 177.041 253.156 191.17C233.313 205.299 204.75 204.999 204.75 204.999L136.5 204.999L-3.6867e-05 204.999"
          stroke="url(#paint0_linear_221_10)"
          strokeWidth="2"
        />
        <defs>
          <linearGradient
            id="paint0_linear_221_10"
            x1="160.798"
            y1="-321.398"
            x2="-185.465"
            y2="-176.712"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#14397d" />
            <stop offset="1" stopColor="#d7eaf3" />
          </linearGradient>
        </defs>
      </motion.svg>

      <motion.svg
        className={`absolute top-full -translate-y-full max-lg:hidden`}
        xmlns="http://www.w3.org/2000/svg"
        width="213"
        height="2"
        viewBox="0 0 213 2"
        fill="none"
      >
        <motion.path
          animate={{ pathLength: [0, 1, 1], pathOffset: [0, 0, 1] }}
          transition={{
            delay: 13,
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 14,
          }}
          d="M304.5 1L0 0.999973"
          stroke="url(#paint0_linear_221_7)"
          strokeWidth="2"
        />
        <defs>
          <linearGradient
            id="paint0_linear_221_7"
            x1="179.352"
            y1="-1.56781"
            x2="179.302"
            y2="3.17978"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#14397d" />
            <stop offset="1" stopColor="#d7eaf3" />
          </linearGradient>
        </defs>
      </motion.svg>

      <motion.svg
        className={`absolute top-full -translate-y-full left-0 max-lg:hidden`}
        xmlns="http://www.w3.org/2000/svg"
        width="273"
        height="206"
        viewBox="0 0 273 206"
        fill="none"
      >
        <motion.path
          animate={{ pathLength: [0, 1, 1], pathOffset: [0, 0, 1] }}
          transition={{
            duration: 4,
            delay: 16,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 14,
          }}
          d="M273 205L137 205L69.0005 205C69.0005 205 38.0967 205 19.3498 190.099C0.602973 175.198 1.00066 153.75 1.00066 153.75L1.00065 102.5L1.00065 2.0802e-05"
          stroke="url(#paint0_linear_221_9)"
          strokeWidth="2"
        />
        <defs>
          <linearGradient
            id="paint0_linear_221_9"
            x1="699.441"
            y1="120.746"
            x2="631.041"
            y2="-168.491"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#14397d" />
            <stop offset="1" stopColor="#d7eaf3" />
          </linearGradient>
        </defs>
      </motion.svg>

      <h2
        className={`font-semibold text-[48px] text-center max-[500px]:text-[36px]`}
      >
        About Me
      </h2>
      <p
        className={`text-[20px] leading-[36px] max-[500px]:text-[16px] max-[500px]:leading-[30px]`}
      >
        I currently specialize in{" "}
        <span className={`gradient-accent font-bold`}>
          frontend development
        </span>
        , but my passion lies in building full-stack websites from initial idea
        to product delivery.
      </p>
      <p
        className={`text-[20px] leading-[36px] max-[500px]:text-[16px] max-[500px]:leading-[30px]`}
      >
        My primary tech stack includes{" "}
        <span className={`font-medium`}>HTML/CSS</span>,{" "}
        <span className={`font-medium`}>TypeScript</span>,{" "}
        <span className={`font-medium`}>React.js</span>,{" "}
        <span className={`font-medium`}>Redux</span>,{" "}
        <span className={`font-medium`}>Node.js</span>,{" "}
        <span className={`font-medium`}>Express.js</span>,{" "}
        <span className={`font-medium`}>Python</span>,{" "}
        <span className={`font-medium`}>PostgreSQL</span>,{" "}
        <span className={`font-medium`}>Docker</span>, and{" "}
        <span className={`font-medium`}>AWS</span>.
      </p>
    </div>
  );
}
