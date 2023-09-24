import Logo from "./components/Logo";
import DocuAILogo from "./components/DocuAILogo";
import BeaconfireLogo from "./components/BeaconfireLogo";
import Work from "./components/Work";
import Chat from "./components/Chat";
import { GithubIcon, LinkedinIcon, Mail } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function Home() {
  return (
    <div className={`relative min-h-[100dvh]`}>
      <div className={`relative`}>
        <header
          className={`w-full flex justify-between px-[120px] relative h-[160px] items-center`}
        >
          <div></div>
          <div
            className={`flex items-center flex-col gap-[2px] absolute left-[50%] translate-x-[-50%]`}
          >
            <div className={`text-[64px]`}>Frank Lee</div>
            <div>{`Hi, there! I'm a web developer. 👋 Welcome to my showcase.`}</div>
          </div>
          <div className={`text-gray-700 flex gap-[16px]`}>
            <Mail />
            <GithubIcon />
            <LinkedinIcon />
          </div>
        </header>
        <div className={`grid grid-cols-3 gap-[24px] w-full px-[120px]`}>
          <div className={`flex flex-col gap-[12px]`}>
            <Work
              title={<DocuAILogo />}
              link={`https://docuapp.beaconfireinc.com`}
              badges={[`React`, `Nest`, `Redis`, `MongoDB`, `LangChain`]}
              description={`ChatGPT-powered OpenAPI documentation manager providing developers with an interactive and intuitive frontend interface for streamlined API design.`}
            />
            <Work
              title={<BeaconfireLogo />}
              link={`https://beaconfiresolution.com`}
              badges={[`React`, `Next`, `Framer Motion`, `Amplify`]}
              description={`Official website for an IT solutions company.`}
            />
            <Work
              title={
                <div className={`flex gap-[12px] items-center`}>
                  <Logo />
                  <div className={`text-[18px]`}>Argos Jobs</div>
                </div>
              }
              link={`https://mykaraoke.vercel.app`}
              badges={[
                `React`,
                `Storybook`,
                `Puppeteer`,
                `Express`,
                `PostgreSQL`,
                `OpenAI`,
                `EC2`,
                `RDS`,
                `S3`,
              ]}
              description={`Data warehouse for job market intelligence, with automated crawlers and text-to-speech interview preparation.`}
            />
          </div>
          <Chat />
          <div>
            <Work
              title={<DocuAILogo />}
              link={`https://docuapp.beaconfireinc.com`}
              badges={[`React`, `Nest`, `Redis`, `MongoDB`, `LangChain`]}
              description={`ChatGPT-powered OpenAPI documentation manager providing developers with an interactive and intuitive frontend interface for streamlined API design.`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
