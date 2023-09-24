import Logo from "./components/Logo";
import DocuAILogo from "./components/DocuAILogo";
import BeaconfireLogo from "./components/BeaconfireLogo";
import Work from "./components/Work";
import Chat from "./components/Chat";
import { GithubIcon, LinkedinIcon, Mail } from "lucide-react";

export const metadata = {
  title: "Frank Lee",
  description: `Frank Lee's web developer portfolio`,
};

export default function Home() {
  return (
    <div className={`relative min-h-[100dvh]`}>
      <div className={`relative flex flex-col items-center gap-[24px]`}>
        <header
          className={`flex items-center flex-col gap-[2px] pt-[40px] px-[24px]`}
        >
          <div className={`text-[64px]`}>Frank Lee</div>
          <div className={`flex flex-col gap-[24px] items-center`}>
            <div>{`Hi, there! I'm a web developer. 👋 Welcome to my showcase.`}</div>
            <div className={`text-gray-700 flex gap-[16px]`}>
              <Mail />
              <GithubIcon />
              <LinkedinIcon />
            </div>
          </div>
        </header>

        <div
          className={`flex flex-wrap gap-[24px] w-full max-w-[1107px] px-[24px] justify-center`}
        >
          <Chat />
          <div
            className={`flex flex-col gap-[12px] max-w-[600px] items-center`}
          >
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
        </div>
      </div>
    </div>
  );
}
