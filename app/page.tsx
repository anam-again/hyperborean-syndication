import Link from "next/link";
import FullWidthStickyTab from "./components/FullWidthStickyTab";
import MainExperienceCard from "./components/MainExperienceCard";
import { ImageProjectCard, YoutubeProjectCard } from "./components/ProjectCard";
import AppearTransitionComponent from "./components/AppearTransitionComponent";
import SVGIconElement from "./components/SVGIconElement";

const SECTION_IDS = {
  ABOUT: "ABOUT",
  EXPERIENCE: "EXPERIENCE",
  PROJECTS: "PROJECTS",
}

export default function Index() {
  return (
    <section className="min-h-screen bg-slate-50 mx-auto max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0 text-slate-950">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <header className="lg:sticky lg:top-0 lg:flex lg:w-[48%] lg:flex-col lg:max-w-xl lg:h-fit mt-8">
          <AppearTransitionComponent delay={500}>
            <div className="lg:mt-8 hover:bg-slate-300 bg-slate-200 border px-8 py-8 lg:py-16 sm:p-4">
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl">Joshua Petersen</h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-800 sm:text-xl">Software/Frontend Engineer</h2>
                <p className="text-slate-700 mt-4 max-w-xs leading-normal">Building technology and stuff and whatever</p>
              </div>
              <nav className="nav lg:block">
                <ul className="mt-8 w-max">
                  {[["01. About", SECTION_IDS.ABOUT], ["02. Experience", SECTION_IDS.EXPERIENCE], ["03. Projects", SECTION_IDS.PROJECTS]].map(([text, id]) => {
                    return <li><Link className="text-red-800 active:text-red-200 hover:text-red-500" href={`#${id}`}>{text}</Link></li>
                  })}
                </ul>
              </nav>
              <ul className="ml-1 mt-8 flex items-center">
                <SVGIconElement alt="Github Logo" href="https://www.github.com/anam-again" svg={'Github'} />
                <SVGIconElement alt="LinkedIn Logo" href="https://www.linkedin.com/in/joshua-petersen-7a7680194/" svg={'LinkedIn'} />
              </ul>
            </div>
          </AppearTransitionComponent>
        </header>

        <main className="pt-24 lg:w-[52%] lg:py-24">

          <FullWidthStickyTab id={SECTION_IDS.ABOUT}>
            About
          </FullWidthStickyTab>
          <AppearTransitionComponent delay={700}>
            <div className="mb-16 lg:mb-8 lg:max-w-xl lg:border hover:lg:bg-slate-100 p-6">
              Hello! <b>ᕙ(‾̀◡‾́)ᕗ</b> I am a <b>Software Engineer</b> with three years of experience. I got into this field due to my interest in <b>user experiences</b> and making <b>performant</b> and <b>useful</b> technologies.
              <br /> <br /> I recently got back from one and a half years of thru-hiking and international travelling and am now seeking a long-term Software Engineering position.
              <br /> <br /> My main skills are in: <b>Frontend Engineering</b>, <b>Dev-Ops</b>, and <b>Cloud</b>.
            </div>
          </AppearTransitionComponent>

          <FullWidthStickyTab id={SECTION_IDS.EXPERIENCE}>
            Experience
          </FullWidthStickyTab>

          <MainExperienceCard dates="2024 - Present" title="Thru-Hiking" tags={["Soft Skills"]}>
            <div>
              I've spent this time thru-hiking the <a className="text-red-800 active:text-red-200 hover:text-red-500" href="https://en.wikipedia.org/wiki/Pacific_Crest_Trail" >Pacific Crest Trail</a>,
              the <a className="text-red-800 active:text-red-200 hover:text-red-500" href="https://en.wikipedia.org/wiki/Shikoku_Pilgrimage" >Shikoku Henro</a>,
              the <a className="text-red-800 active:text-red-200 hover:text-red-500" href="https://en.wikipedia.org/wiki/Portuguese_Way" >Camino Portugues</a>,
              the <a className="text-red-800 active:text-red-200 hover:text-red-500" href="https://en.wikipedia.org/wiki/Camino_Primitivo" >Camino Primitivo</a>,
              and the <a className="text-red-800 active:text-red-200 hover:text-red-500" href="https://en.wikipedia.org/wiki/French_Way" >Camino Frances</a>.
              <br /> <br /> Over the winter I lived in Berlin.
            </div>
          </MainExperienceCard>

          <MainExperienceCard dates="2022 - 2024" title="Amazon ; Frontend Engineer I (AWS)" tags={["Typescript", "AWS", "CDK/LPT", "React"]}>
            <div>
              I worked on the platform team of Sagemaker to integrate partner teams, as well as build out the Core UI of the Sagemaker Product.
              <br /> <br /> I worked on many disparate aspects of the product and became very skilled at working on an exceptionally fast-moving codebase, with fast-moving organizations and fast-moving requirements.
              <br /> <br /> My largest project was automating the region build process for our legacy/current deployments of Sagemaker, and then onboarding partner teams to the new system.
            </div>
          </MainExperienceCard>

          <MainExperienceCard dates="2021 - 2022" title="Microsoft ; Business Intelligence Contractor" tags={["Kusteau", "Power BI", "Databases"]}>
            <div>
              At Microsoft I wrote Queries for Business Intelligence in the proprietary Kusteau language.
              <br /> <br /> These were rolled into Power BI slides and were regularly used in high-level Azure Infrastructure meetings.
              <br /> <br /> I also was able to set up dashboards to automate some of the repetetive parts of this.
            </div>
          </MainExperienceCard>
          <MainExperienceCard dates="2015 - 2021" title="Various" tags={["Various"]}>
            <div>
              Before my professional experience, I had worked very many other jobs. However, I'm not including them here, as they are not as relevant.
            </div>
          </MainExperienceCard>

        </main>
      </div>
      <div className="mt-16">
        <FullWidthStickyTab id={SECTION_IDS.PROJECTS}>
          Projects
        </FullWidthStickyTab>
        <div className="flex gap-8 flex-row pb-64 mt-6 flex-wrap justify-center">
          <YoutubeProjectCard title="Jump Tower / Must Go Up! (github)" youtubeSrc="https://www.youtube.com/embed/Lg1kphuliAM" linkTo="https://github.com/anam-again/jumptower" tags={["Typescript", "Lua", "Various"]}>
            <p>My game on Roblox which earned me four entire US Dollars.</p>
            <p>Development was full-stack game development, which needed Frontend, Backend, CAD, Art Design, and Net-Code</p>
          </YoutubeProjectCard>
          <ImageProjectCard title="Hyperborean-Syndication (github)" imgSrc="/assets/hyperborean.png" alt="Hyperborean-Syndication Image" linkTo="https://github.com/anam-again/hyperborean-syndication" tags={["React", "Typescript"]}>
            <p>This website on Github ٩(◕‿◕｡)۶</p>
          </ImageProjectCard>
          <ImageProjectCard title="Youtube Cuteify (github)" imgSrc="/assets/cuteify.png" alt="Youtube Cuteify Image" linkTo="https://github.com/anam-again/youtube-cuteify" tags={["Javascript", "Mozilla"]}>
            <p>A small Firefox extension that replaces all of the images on youtube with a less distracting/engaging version.</p>
          </ImageProjectCard>
        </div>
      </div>

    </section>
  )
}
