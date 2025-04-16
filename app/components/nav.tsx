import Link from 'next/link'
import Image from 'next/image'

const navItems = {
  '/': {
    name: 'home',
  },
}

export function Navbar() {
  return (
    <aside className="mb-16 tracking-tight w-full">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-center justify-between relative w-full h-[100px] pb-0 fade md:overflow-auto scroll-pr-6 md:relative bg-gradient-to-r from-blue-800 via-purple-800 to-pink-800"
          id="nav"
        >
          <div className="flex items-center h-full">
            <Image
              src="/assets/cat.png"
              alt="Cat Logo"
              width={100}
              height={100}
              className="h-full w-auto object-cover"
            />
          </div>
          <div className="flex flex-row space-x-4 py-4 mr-6">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all text-white font-medium flex align-middle relative py-2 px-6 rounded-lg bg-black/20 hover:bg-white/30 shadow-lg hover:shadow-xl"
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}
