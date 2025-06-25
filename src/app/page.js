import Logo from "./components/Logo";
import Work from "./components/Work";
import { Button } from "@/components/ui/button";
import BoxesSection from "./components/BoxesSection";
import FormSection from "./components/FormSection";
import Header from "./components/Header";
import ResMatchLogo from "./components/ResMatchLogo";

export const metadata = {
  title: "Frank Lee | Web Developer",
  description: `Frank Lee's web developer portfolio`,
};

export default function Home() {
  return (
    <>
      <Header />
      <section
        className={`w-full pt-[24dvh] pb-[16dvh] flex justify-center max-lg:pt-[14dvh] max-lg:pb-[8dvh] max-[500px]:pt-[12dvh] max-[500px]:px-[12px]`}
        id="home"
      >
        <div
          className={`flex flex-col gap-[32px] max-w-[700px] items-center max-[500px]:gap-[18px]`}
        >
          <h1
            className={`text-[64px] font-semibold text-center leading-[64px] max-[500px]:text-[48px]`}
          >
            Frank Lee
          </h1>
          <h1
            className={`text-[64px] font-semibold gradient text-center leading-[64px] max-[500px]:text-[48px]`}
          >
            AI + Web Developer
          </h1>
          <div
            className={`text-[20px] font-regular text-center leading-[36px] max-[500px]:text-[16px] max-[500px]:leading-[30px]`}
          >
            Have a project you want to collaborate on, or looking for a talented
            and versatile software developer?
          </div>
          <a href="#contact">
            <Button
              className={`font-medium text-[20px] w-fit max-[500px]:text-[16px]`}
            >
              Get in touch
            </Button>
          </a>
        </div>
      </section>
      <section
        className={`w-full py-[12dvh] flex justify-center bg-[#F9F9FE] scroll-mt-[24px] max-lg:scroll-mt-[64px] max-lg:py-[2dvh]`}
        id="about"
      >
        <div
          className={`w-full max-w-[1120px] py-[60px] px-[60px] max-lg:max-w-[768px] max-[500px]:px-[30px]`}
        >
          <BoxesSection />
        </div>
      </section>
      <section
        className={`w-full pt-[20dvh] pb-[28dvh] flex justify-center relative z-10 bg-[#F9F9FE] -scroll-mt-[24px] max-lg:scroll-mt-[64px] max-lg:py-[10dvh] max-lg:pb-[30dvh]`}
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
          className={`w-full max-w-[1120px] px-[24px] flex flex-col gap-[64px] items-center max-lg:max-w-[768px]`}
        >
          {/* <div className={`grid grid-cols-2 gap-[40px]`}> */}
          <div className={``}>
            <div
              className={`flex flex-col gap-[48px] max-[500px]:gap-[32px] items-center`}
            >
              <h2
                className={`font-semibold text-[48px] leading-[56px] mt-[32px] text-slate-50 max-[500px]:text-[36px]`}
              >
                Projects
              </h2>
              <Work
              image="/resmatch.png"
                title={
                  <div className={`flex gap-[12px] items-center`}>
                    <ResMatchLogo />
                    <div className={`text-[18px]`}>ResMatch</div>
                  </div>
                }
                link={`https://residencymatch.net`}
                badges={[`React`, `Node.js`, `PostgreSQL`,`Prisma`,`Docker`, `OpenAI`]}
                description={`Medical residency community platform used by thousands of applicants.`}
              />
              <Work
                image="/argos_jobs_3.png"
                title={
                  <div className={`flex gap-[12px] items-center`}>
                    <Logo />
                    <div className={`text-[18px]`}>Argos Jobs</div>
                  </div>
                }
                link={`https://mykaraoke.vercel.app/resume`}
                badges={[
                  `React.js`,
                  `Express.js`,
                  `PostgreSQL`,
                  `EC2`,
                  `RDS`,
                  `S3`,
                  `Docker`,
                  `Storybook`,
                  `Puppeteer`,
                  `OpenAI`,
                ]}
                description={`Craft the perfect resume, for web developers, by web developers.`}
              />
             
            </div>
       
  
          </div>
        </div>
      </section>
      <section
        className={`w-full pt-[6dvh] pb-[12dvh] max-[500px]:pt-[3dvh] max-[500px]:pb-[6dvh] flex justify-center bg-[#F9F9FE]`}
        id="contact"
      >
        <div
          className={`w-full max-w-[720px] flex flex-col gap-[64px] items-center max-[500px]:max-w-[368px] max-[500px]:gap-[32px] px-[12px]`}
        >
          <h2
            className={`font-semibold text-[48px] leading-[56px] max-[500px]:text-[36px]`}
          >
            Contact
          </h2>
          <FormSection />
        </div>
      </section>
      <footer
        className={`w-full py-[6dvh] flex justify-center max-lg:py-[3dvh]`}
      >
        <div
          className={`w-full max-w-[1120px] px-[24px] flex gap-[32px] justify-between max-[500px]:justify-center max-lg:max-w-[768px]`}
        >
          <div>© 2023 Frank Lee</div>
          <ul
            className={`grid grid-cols-4 gap-[32px] font-medium max-[500px]:hidden`}
          >
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
