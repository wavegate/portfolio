import Logo from "./components/Logo";
import DocuAILogo from "./components/DocuAILogo";
import BeaconfireLogo from "./components/BeaconfireLogo";
import Work from "./components/Work";
import Chat from "./components/Chat";
import { GithubIcon, LinkedinIcon, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import BoxesSection from "./components/BoxesSection";
import FormSection from "./components/FormSection";

export const metadata = {
  title: "Frank Lee",
  description: `Frank Lee's web developer portfolio`,
};

export default function Home() {
  return (
    <>
      <header
        className={`w-full py-[18px] justify-center flex text-[18px] font-semibold fixed bg-white z-20`}
      >
        <div className={`w-full max-w-[1120px] flex justify-between`}>
          <div className={`font-bold`}>Frank Lee</div>
          <nav>
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
        </div>
      </header>
      <section
        className={`w-full pt-[24dvh] pb-[16dvh] flex justify-center`}
        id="home"
      >
        <div className={`flex flex-col gap-[32px] max-w-[570px] items-center`}>
          <h1
            className={`text-[64px] font-semibold text-center leading-[64px]`}
          >
            Frank Lee
          </h1>
          <h1
            className={`text-[64px] font-semibold gradient text-center leading-[64px]`}
          >
            Web Developer
          </h1>
          <div className={`text-[20px] font-medium text-center leading-[36px]`}>
            Have a project you want to collaborate on, or looking for a talented
            and versatile software developer?
          </div>
          <Button className={`font-semibold text-[20px] w-fit`}>
            Get in touch
          </Button>
        </div>
      </section>
      <section
        className={`w-full py-[15dvh] flex justify-center bg-[#FAFAFF]`}
        id="about"
      >
        <div className={`w-full max-w-[1120px] py-[60px] px-[60px]`}>
          <BoxesSection />
        </div>
      </section>
      <section
        className={`w-full py-[30dvh] flex justify-center purple-section relative z-10 bg-[#FAFAFF]`}
        id="projects"
      >
        <div
          className={`w-full max-w-[1120px] flex flex-col gap-[64px] items-center`}
        >
          <div className={`flex gap-[40px]`}>
            <div className={`flex flex-col gap-[48px] items-center`}>
              <h2
                className={`font-semibold text-[48px] leading-[56px] mt-[32px] text-white`}
              >
                Projects
              </h2>
              <Work
                title={
                  <div className={`flex gap-[12px] items-center`}>
                    <Logo />
                    <div className={`text-[20px]`}>Project 1</div>
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
                description={`Data warehouse for job market intelligence.`}
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
                description={`Data warehouse for job market intelligence.`}
              />
            </div>
            <div className={`flex flex-col gap-[40px]`}>
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
                description={`Data warehouse for job market intelligence.`}
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
                description={`Data warehouse for job market intelligence.`}
              />
            </div>
          </div>
        </div>
      </section>
      <section
        className={`w-full py-[12dvh] flex justify-center bg-[#FAFAFF]`}
        id="contact"
      >
        <div
          className={`w-full max-w-[720px] flex flex-col gap-[64px] items-center`}
        >
          <h2 className={`font-semibold text-[48px] leading-[56px]`}>
            Contact
          </h2>

          <FormSection />
        </div>
      </section>
      <footer className={`w-full py-[6dvh] flex justify-center`}>
        <div className={`w-full max-w-[720px] flex gap-[32px] justify-between`}>
          <div>© 2023 Frank Lee</div>
          <ul className={`grid grid-cols-4 gap-[32px] font-semibold`}>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
      </footer>
    </>
  );
}
