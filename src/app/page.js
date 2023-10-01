import Logo from "./components/Logo";
import Work from "./components/Work";
import { Button } from "@/components/ui/button";
import BoxesSection from "./components/BoxesSection";
import FormSection from "./components/FormSection";

export const metadata = {
  title: "Frank Lee | Web Developer",
  description: `Frank Lee's web developer portfolio`,
};

export default function Home() {
  return (
    <>
      <header
        className={`w-full py-[18px] justify-center flex text-[18px] font-semibold fixed bg-white z-20`}
      >
        <div className={`w-full max-w-[1120px] flex justify-between`}>
          <a href="#home" className={`font-bold`}>
            Frank Lee
          </a>
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
          <div
            className={`text-[20px] font-regular text-center leading-[36px]`}
          >
            Have a project you want to collaborate on, or looking for a talented
            and versatile software developer?
          </div>
          <a href="#contact">
            <Button className={`font-medium text-[20px] w-fit`}>
              Get in touch
            </Button>
          </a>
        </div>
      </section>
      <section
        className={`w-full py-[12dvh] flex justify-center bg-[#F9F9FE] scroll-mt-[24px]`}
        id="about"
      >
        <div className={`w-full max-w-[1120px] py-[60px] px-[60px]`}>
          <BoxesSection />
        </div>
      </section>
      <section
        className={`w-full pt-[20dvh] pb-[28dvh] flex justify-center relative z-10 bg-[#F9F9FE] -scroll-mt-[24px]`}
        id="projects"
      >
        <div className={`skewed-background`}>
          <div className={`tertiary-rectangle`}></div>
          <div className={`secondary-rectangle`}></div>
          <div className={`primary-rectangle`}></div>
          <div className={`secondary-rectangle--end`}></div>
          <div className={`tertiary-rectangle--end`}></div>
        </div>
        <div
          className={`w-full max-w-[1120px] flex flex-col gap-[64px] items-center`}
        >
          <div className={`grid grid-cols-2 gap-[40px]`}>
            <div className={`flex flex-col gap-[48px] items-center`}>
              <h2
                className={`font-semibold text-[48px] leading-[56px] mt-[32px] text-slate-50`}
              >
                Projects
              </h2>

              <Work
                title={
                  <div className={`flex gap-[12px] items-center`}>
                    <Logo />
                    <div className={`text-[18px]`}>Coming soon...</div>
                  </div>
                }
                link={``}
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
                    <div className={`text-[18px]`}>Coming soon...</div>
                  </div>
                }
                link={`https://mykaraoke.vercel.app`}
                badges={[`React`]}
                description={`Coming soon...`}
              />
            </div>
          </div>
        </div>
      </section>
      <section
        className={`w-full pt-[6dvh] pb-[12dvh] flex justify-center bg-[#F9F9FE]`}
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
          <ul className={`grid grid-cols-4 gap-[32px] font-medium`}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
