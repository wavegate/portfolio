"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function Work({ title, link, badges, description }) {
  const cardVariants = {
    offscreen: {
      opacity: 0.5,
      y: 75,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.6,
        duration: 0.8,
      },
    },
  };
  return (
    <motion.div
      className={`w-full`}
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
    >
      <Card className={`w-full shadow-xl rounded-[8px]`}>
        <div className={`h-[300px] w-full bg-[#d7eaf3] rounded-t-[8px]`}></div>
        <CardHeader className={`flex flex-col gap-[8px]`}>
          <CardTitle className={`flex justify-between items-center`}>
            {title}
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger>
                  <Button variant="link" asChild>
                    <a href={link} target="_blank">
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
                        className="lucide lucide-external-link"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" x2="21" y1="14" y2="3" />
                      </svg>
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>View in new tab</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </CardTitle>
          <CardDescription className={`text-[18px] leading-[36px]`}>
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className={`flex flex-wrap gap-[2px] gap-y-[6px]`}>
          {badges.map((badge) => (
            <Badge variant="outline" key={badge}>
              {badge}
            </Badge>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
}
