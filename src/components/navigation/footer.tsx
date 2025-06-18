import Link from 'next/link'
import BlurImage from '../miscellaneous/blur-image'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-black py-16 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-6">
          <BlurImage
            src="/logo-white.png"
            alt="Triangle Logo"
            width={447}
            height={154}
            className="mx-auto"
          />
        </div>

        {/* Navigation Links */}
        <nav className="mb-12">
          <ul className="flex flex-wrap justify-center gap-8 text-sm font-medium tracking-wider">
            <li>
              <Link href="#" className="transition-colors hover:text-gray-300">
                Venue
              </Link>
            </li>
            <li>
              <Link href="#" className="transition-colors hover:text-gray-300">
                Socials
              </Link>
            </li>
            <li>
              <Link href="#" className="transition-colors hover:text-gray-300">
                PRIVACY POLICY
              </Link>
            </li>
            <li>
              <Link href="#" className="transition-colors hover:text-gray-300">
                EVENT T&CS
              </Link>
            </li>
          </ul>
        </nav>

        <div className="text-sm tracking-wider text-gray-400">
          © {year} VERCEL. ALL RIGHTS RESERVED
        </div>
      </div>
    </footer>
  )
}
