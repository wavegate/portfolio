import { motion } from "framer-motion";

export default function BuildBox({ logo, text, className, delay }) {
  return (
    <motion.div
      animate={{
        scale: [null, 1.15, 1],
        x: [`-50%`, `-50%`, `-50%`],
        y: [`-50%`, `-50%`, `-50%`],
      }}
      transition={{
        duration: 2,
        times: [0, 0.5, 1.5, 2],
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 16,
        delay: delay,
      }}
      className={`z-10 w-[120px] h-[120px] flex flex-col gap-[8px] rounded-[8px] blue-shadow bg-white justify-center items-center absolute ${className}`}
    >
      <div className={`w-[60px] h-[60px] flex items-center justiy-center`}>
        {logo}
      </div>
      <div
        className={`${
          text === "Deployment" ? "text-[18px]" : "text-[20px]"
        } font-medium`}
      >
        {text}
      </div>
    </motion.div>
  );
}
