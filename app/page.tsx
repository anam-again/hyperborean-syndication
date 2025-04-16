import Image from 'next/image'

export default function Page() {
  return (
    <section className="space-y-8">
      <h1 className="text-2xl font-semibold tracking-tighter relative flex items-center gap-2">
        <Image src="/assets/guy.png" alt="Guy icon" width={16} height={16} />
        Hello!
        <div className="flex-1 h-[1px] bg-white ml-4"></div>
        <Image src="/assets/guy.png" alt="Guy icon" width={16} height={16} />
      </h1>

      <p>
        My name is Joshua Petersen, I am a software developer from Seattle, Washington.
      </p>

      <div className="flex justify-center items-center gap-4">
        <p>
          Here is me:
        </p>
        <Image
          src="/assets/lowresguy.jpg"
          alt="Profile picture"
          width={100}
          height={100}
          className="rounded-lg"
        />
      </div>

      <div>
        <p className="mb-4">
          Here is what I would look like if I worked for your company:
        </p>
        <div className="bg-white dark:bg-neutral-800 rounded-lg p-4 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <Image
                src="/assets/lowresguy.jpg"
                alt="Profile picture"
                width={48}
                height={48}
                className="rounded-lg"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-lg font-bold text-neutral-900 dark:text-white">
                Joshua Petersen
                <span className="ml-2 text-sm font-normal text-neutral-500">
                  @joshtp
                </span>
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">
                Software Developer
              </p>
              <div className="mt-2 flex items-center space-x-2">
                <span className="inline-flex items-center rounded-full bg-green-100 dark:bg-green-900 px-2 py-1 text-xs font-medium text-green-700 dark:text-green-300">
                  Active
                </span>
                <span className="text-sm text-neutral-500">
                  Seattle, WA
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-8"></div>

      <div>
        <h1 className="text-2xl font-semibold tracking-tighter relative flex items-center gap-2">
          <Image src="/assets/guy.png" alt="Guy icon" width={16} height={16} />
          Here's where you can contact me:
          <div className="flex-1 h-[1px] bg-white ml-4"></div>
          <Image src="/assets/guy.png" alt="Guy icon" width={16} height={16} />
        </h1>
        <div className="mt-4 space-y-4">
          <div className="bg-white dark:bg-neutral-800 rounded-lg p-4 shadow-lg hover:shadow-xl transition-all">
            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <p className="text-lg font-medium text-neutral-900 dark:text-white">
                  📧 Email
                </p>
                <a
                  href="mailto:jtannerpetsen01@gmail.com"
                  className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  jtannerpetsen01@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-neutral-800 rounded-lg p-4 shadow-lg hover:shadow-xl transition-all">
            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <p className="text-lg font-medium text-neutral-900 dark:text-white flex items-center gap-2">
                  <Image src="/assets/liin.png" alt="LinkedIn icon" width={24} height={24} />
                  LinkedIn
                </p>
                <a
                  href="https://www.linkedin.com/in/joshua-petersen-7a7680194/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  linkedin.com/in/joshua-petersen
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-neutral-800 rounded-lg p-4 shadow-lg hover:shadow-xl transition-all">
            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <p className="text-lg font-medium text-neutral-900 dark:text-white flex items-center gap-2">
                  <Image src="/assets/gub.png" alt="Github Icon" width={24} height={24} />
                  Github
                </p>
                <a
                  href="https://github.com/anam-again"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  github.com/anam-again
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-neutral-800 rounded-lg p-4 shadow-lg hover:shadow-xl transition-all">
            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <p className="text-lg font-medium text-neutral-900 dark:text-white flex items-center gap-2">
                  <Image src="/assets/llegend.png" alt="LinkedIn icon" width={24} height={24} />
                  League of Legends
                </p>
                <a
                  href="https://op.gg/summoners/na/Walk%20Down%20Mid-admin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  https://op.gg/summoners/na/Walk-Down-Mid#admin
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-8"></div>

      <div className="mt-8">
        <h1 className="text-2xl font-semibold tracking-tighter relative flex items-center gap-2">
          <Image src="/assets/guy.png" alt="Guy icon" width={16} height={16} />
          Here are the companies I've worked at before:
          <div className="flex-1 h-[1px] bg-white ml-4"></div>
          <Image src="/assets/guy.png" alt="Guy icon" width={16} height={16} />
        </h1>
        <div className="space-y-4">
          <div className="bg-white/50 dark:bg-neutral-800/50 rounded-lg p-6 border border-transparent bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 hover:from-blue-500/20 hover:via-purple-500/20 hover:to-pink-500/20 transition-all">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-lg">Frontend Engineer</h3>
                <p className="text-neutral-600 dark:text-neutral-300 flex items-center gap-2">
                  <Image src="/assets/aws.png" alt="Amazon logo" width={20} height={20} />
                  Amazon Web Services, Sagemaker
                </p>
              </div>
              <span className="text-sm text-neutral-500">2022 - 2024</span>
            </div>
            <p className="mt-2 text-neutral-600 dark:text-neutral-400">
              🌸 Worked on all aspects of Sagemaker! This included simple frontend tasks such as replacing the icon on the tab, to complex ones such as building out the kernel selector workflow, which is business critical, and is used by all users of the service.
            </p>
            <p className="mt-2 text-neutral-600 dark:text-neutral-400">
              🌎 Additionally, I spearheaded the automatic region build deployment, which cut the time taken to deploy Sagemaker to new regions from a month, to only a week.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-xs font-medium text-blue-700 dark:text-blue-300">
                React
              </span>
              <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-xs font-medium text-blue-700 dark:text-blue-300">
                AWS
              </span>
              <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-xs font-medium text-blue-700 dark:text-blue-300">
                Devops/CICD
              </span>
              <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-xs font-medium text-blue-700 dark:text-blue-300">
                Typescript
              </span>
              <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-xs font-medium text-blue-700 dark:text-blue-300">
                CDK / LPT
              </span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-full bg-gray-100 dark:bg-gray-900/30 px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-300">
                Ruby
              </span>
              <span className="inline-flex items-center rounded-full bg-gray-100 dark:bg-gray-900/30 px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-300">
                Python
              </span>
              <span className="inline-flex items-center rounded-full bg-gray-100 dark:bg-gray-900/30 px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-300">
                JupyterLabs
              </span>
            </div>
          </div>

          <div className="bg-white/50 dark:bg-neutral-800/50 rounded-lg p-6 border border-transparent bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 hover:from-blue-500/20 hover:via-purple-500/20 hover:to-pink-500/20 transition-all">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-lg">Software Developer</h3>
                <p className="text-neutral-600 dark:text-neutral-300 flex items-center gap-2">
                  <Image src="/assets/msoft.png" alt="Microsoft logo" width={20} height={20} />
                  Microsoft, Collabera Contractorship
                </p>
              </div>
              <span className="text-sm text-neutral-500">2021 - 2022</span>
            </div>
            <p className="mt-2 text-neutral-600 dark:text-neutral-400">
              📊 I worked to build mission critical dashboards which were used by management to make decisions about hardware resources in Azure Datacenters.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-xs font-medium text-blue-700 dark:text-blue-300">
                Kusteau
              </span>
              <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-xs font-medium text-blue-700 dark:text-blue-300">
                Power BI
              </span>
            </div>
          </div>

          <div className="bg-white/50 dark:bg-neutral-800/50 rounded-lg p-6 border border-transparent bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 hover:from-blue-500/20 hover:via-purple-500/20 hover:to-pink-500/20 transition-all">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-lg">IT End User Support</h3>
                <p className="text-neutral-600 dark:text-neutral-300">Snohomish County PUD</p>
              </div>
              <span className="text-sm text-neutral-500">2019</span>
            </div>
            <p className="mt-2 text-neutral-600 dark:text-neutral-400">
              I did IT 😎. This was working directly with non-technical internal employees to help them with their computer issues.
            </p>
          </div>
        </div>
      </div>
      <div className="h-8"></div>

      <div className="mt-8">
      <h1 className="text-2xl font-semibold tracking-tighter relative flex items-center gap-2">
          <Image src="/assets/guy.png" alt="Guy icon" width={16} height={16} />
          Here is my education:
          <div className="flex-1 h-[1px] bg-white ml-4"></div>
          <Image src="/assets/guy.png" alt="Guy icon" width={16} height={16} />
        </h1>
        <div className="flex flex-col space-y-4">
          <div className="bg-white/30 dark:bg-neutral-800/30 rounded-lg p-6 border border-transparent bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 hover:from-blue-500/10 hover:via-purple-500/10 hover:to-pink-500/10 transition-all">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <Image 
                  src="/assets/cwu.png" 
                  alt="CWU Logo" 
                  width={128} 
                  height={128}
                  className="rounded-lg"
                />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-lg">🎓 Bachelors, Computer Science</h3>
                    <h4 className="font-medium text-lg text-neutral-200">🎓 Minor, Mathematics</h4>
                    <p className="text-neutral-600 dark:text-neutral-300">Central Washington University</p>
                  </div>
                  <span className="text-sm text-neutral-500">2017 - 2021</span>
                </div>
                <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                  Graduated with honors. Focused on software engineering, data structures, and algorithms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
