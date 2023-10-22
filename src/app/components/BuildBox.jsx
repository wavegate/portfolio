import { motion } from "framer-motion";
import { useMediaQuery } from "usehooks-ts";

export default function BuildBox({ logo, text, className, delay }) {
  const lg = useMediaQuery("(min-width: 1024px)");
  return (
    <motion.div
      animate={
        lg && {
          scale: [null, 1.15, 1],
          x: [`-50%`, `-50%`, `-50%`],
          y: [`-50%`, `-50%`, `-50%`],
        }
      }
      transition={{
        duration: 2,
        times: [0, 0.5, 1.5, 2],
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 16,
        delay: delay,
      }}
      className={`z-10 w-[120px] h-[120px] flex flex-col gap-[8px] rounded-[8px] blue-shadow bg-white justify-center items-center absolute max-[500px]:w-[60px] max-[500px]:h-[60px] ${className}`}
    >
      <div
        className={`w-[60px] h-[60px] max-[500px]:w-[45px] max-[500px]:h-[45px] flex items-center justiy-center`}
      >
        {logo}
      </div>
      <div
        className={`${
          text === "Deployment" ? "text-[18px]" : "text-[20px]"
        } font-medium max-[500px]:hidden`}
      >
        {text}
      </div>
    </motion.div>
  );
}
