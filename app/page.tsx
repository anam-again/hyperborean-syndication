import Image from 'next/image'

export default function Index() {
  return (
    <section className="min-h-screen bg-slate-50 mx-auto max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0 text-slate-950">
      <div className="w-full bg-yellow-300 p-8 flex flex-row">
        <div className='text-xl'>This website is under construction!!!!</div>
        <div className='text-7xl'>
          <div>( •̀ω•́ )σ</div>
        </div>
      </div>
      <div className="lg:flex lg:justify-between lg:gap-4">
        <header className="lg:sticky lg:top-0 lg:flex lg:w-[48%] lg:flex-col lg:max-w-xl lg:h-fit mt-8">
          <div className="lg:mt-8 hover:bg-slate-300 bg-slate-200 border lg:px-8  lg:py-16">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl">Joshua Petersen</h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-800 sm:text-xl">Software/Frontend Engineer</h2>
              <p className="text-slate-700 mt-4 max-w-xs leading-normal">Building technology and stuff and whatever</p>
            </div>
            <nav className="nav hidden lg:block">
              <ul className="mt-8 w-max">
                <li>About</li>
                <li>Experience</li>
                <li>Projects</li>
              </ul>
            </nav>
            <ul className="ml-1 mt-8 flex items-center">
              <img className="h-8 w-8" src="assets/github.svg" />
              <img className="h-8 w-8" src="assets/linkedin.svg" />
            </ul>
          </div>
        </header>

        <main className="pt-24 lg:w-[52%] lg:py-24">

          <div className="scroll-mt-16 md:mb-24 lg:mb-8 lg:scroll-mt-24 lg:max-w-xl p-12 lg:border hover:lg:bg-slate-100">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-200 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                About
              </h2>
            </div>
            Hello! <b>ᕙ(‾̀◡‾́)ᕗ</b> I am a <b>Software Engineer</b> with Three years of Experience. I got into this field due to my interest in <b>user experiences</b>, and making <b>performant</b> and <b>useful</b> technologies.
            <br /> <br /> I recently got back from one and a half years of thru-hiking and international travelling, and am now seeking my next Software Engineering role at a good company in the <b>Seattle</b> Area.
            <br /> <br /> My main skills are in: <b>Frontend Engineering</b>, <b>Dev-Ops</b>, and <b>Cloud</b>.
          </div>

          <div className="mt-16 group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 border lg:max-w-xl hover:lg:bg-slate-100 [&_h1]:hover:text-slate-950">
            <div className="z-10 my-4 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2 mx-4">
              2024 - Present
            </div>
            <div className="z-10 sm:col-span-6 my-4 mx-4">
              <h1 className="text-slate-600"><b>Thru-hiking</b></h1>
              <div>
                I've spent this time thru-hiking the <a className="text-red-800 active:text-red-200 hover:text-red-500" href="google.com" >Pacific Crest Trail</a>,
                the <a className="text-red-800 active:text-red-200 hover:text-red-500" href="google.com" >Shikoku Henro</a>,
                the <a className="text-red-800 active:text-red-200 hover:text-red-500" href="google.com" >Camino Portugues</a>,
                the <a className="text-red-800 active:text-red-200 hover:text-red-500" href="google.com" >Camino Primitivo</a>,
                and the <a className="text-red-800 active:text-red-200 hover:text-red-500" href="google.com" >Camino Frances</a>.
                <br /> <br /> Over the Winter I lived in Berlin.
              </div>
              <ul className="mt-2 flex flex-wrap">
                <li className="mr-1.5 mt-2"><div className="flex items-center px-3 py-1 text-xs font-medium leading-5 border">Soft Skills</div></li>
              </ul>
            </div>
          </div>

          <div className="mt-8 group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 border lg:max-w-xl hover:lg:bg-slate-100 [&_h1]:hover:text-slate-950">
            <div className="z-10 my-4 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2 mx-4">
              2022 - 2024
            </div>
            <div className="z-10 sm:col-span-6 my-4 mx-4">
              <h1 className="text-slate-600"><b>Amazon ; Frontend Engineer I (AWS)</b></h1>
              <div>
                I worked on the platform team of Sagemaker to integrate partner teams, as well as build out the Core UI of the Sagemaker Product.
                <br /> <br /> I worked on many disparate aspects of the product, and became very skilled at working on an exceptionally fast-moving codebase, with fast-moving organizations, and fast-moving requirements.
                <br /> <br /> My largest project was automating the region build process for our legacy/current deployments of Sagemaker, and then onboarding partner teams to the new system.
              </div>
              <ul className="mt-2 flex flex-wrap">
                <li className="mr-1.5 mt-2"><div className="flex items-center px-3 py-1 text-xs font-medium leading-5 border">Typescript</div></li>
                <li className="mr-1.5 mt-2"><div className="flex items-center px-3 py-1 text-xs font-medium leading-5 border">AWS</div></li>
                <li className="mr-1.5 mt-2"><div className="flex items-center px-3 py-1 text-xs font-medium leading-5 border">CDK/LPT</div></li>
                <li className="mr-1.5 mt-2"><div className="flex items-center px-3 py-1 text-xs font-medium leading-5 border">React</div></li>
              </ul>
            </div>
          </div>

          <div className="mt-8 group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 border lg:max-w-xl hover:lg:bg-slate-100 [&_h1]:hover:text-slate-950">
            <div className="z-10 my-4 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2 mx-4">
              2021 - 2022
            </div>
            <div className="z-10 sm:col-span-6 my-4 mx-4">
              <h1 className="text-slate-600"><b>Microsoft ; Business Intelligence Contractor</b></h1>
              <div>
                At Microsoft I wrote Queries for Business Intelligence in the proprietary Kusteau language.
                <br /> <br /> These were rolled into Power BI slides, and were regularly used in high-level Azure Infrastructure meetings.
                <br /> <br /> I also was able to set up dashboards to automate some of the repetetive parts of this.
              </div>
              <ul className="mt-2 flex flex-wrap">
                <li className="mr-1.5 mt-2"><div className="flex items-center px-3 py-1 text-xs font-medium leading-5 border">Kusteau</div></li>
                <li className="mr-1.5 mt-2"><div className="flex items-center px-3 py-1 text-xs font-medium leading-5 border">Power BI</div></li>
                <li className="mr-1.5 mt-2"><div className="flex items-center px-3 py-1 text-xs font-medium leading-5 border">Databases</div></li>
              </ul>
            </div>
          </div>

        </main>
      </div>
      <div className="flex gap-8 flex-row pb-64 mt-16 flex-wrap">
        <div className="w-2xl h-60 border grid grid-flow-col grid-cols-5 [&_h1]:hover:text-slate-950">
          <div className="border col-span-2">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/Lg1kphuliAM" allowFullScreen />
          </div>
          <div className="border col-span-3 p-4">
            <h1 className="text-slate-600 text-xs"><b>Jump Tower / Must Go Up!</b></h1>
            <div className="text-slate-800 text-sm [&_p]:indent-5 p-4">
              <p>My game on Roblox that earned me four entire US Dollars.</p>
              <p>Development was full-stack game development, which needed Frontend, Backend, CAD, Art Design, and Net-Code</p>
              <ul className="mt-2 flex flex-wrap">
                <li className="mr-1.5 mt-2"><div className="flex items-center px-3 py-1 text-xs font-medium leading-5 border">Typescript</div></li>
                <li className="mr-1.5 mt-2"><div className="flex items-center px-3 py-1 text-xs font-medium leading-5 border">Lua</div></li>
                <li className="mr-1.5 mt-2"><div className="flex items-center px-3 py-1 text-xs font-medium leading-5 border">Various</div></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
