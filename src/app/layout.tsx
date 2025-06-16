import './globals.css'
import { cn } from '~/lib/utils'
import type { Metadata } from 'next'
import { Syne, Plus_Jakarta_Sans } from 'next/font/google'
import SmoothCursor from '~/components/miscellaneous/cursor'
import Navbar from '~/components/navigation/navbar'

const syne = Syne({
  variable: '--font-syne',
  subsets: ['latin'],
})

const plus_jaka = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'FORWARD25 | Audacity to Lead',
  description:
    'Join a global movement of emerging leaders at FORWARD Conference 2025. Empowering transformation through connection, strategy, and vision. Hosted by REO.',
  keywords: [
    'FORWARD 2025',
    'Leadership Conference',
    'Emerging Leaders',
    'REO',
    'Transformational Leadership',
    'Personal Development',
    'Business Growth',
    'Leadership Strategy',
    'Global Speakers',
    'Youth Empowerment',
  ],
  authors: [
    {
      name: 'Rotiba Emmanuel Olugbenga (REO)',
      url: 'https://forwardliveconference.org',
    },
  ],
  creator: 'D.Y.L Global',
  publisher: 'D.Y.L Global',
  openGraph: {
    title: 'FORWARD Conference 2025 | Audacity to Lead',
    description:
      'Build. Inspire. Transform. Be part of FORWARD 2025 and unlock your leadership potential with global thought leaders.',
    url: 'https://forwardliveconference.org',
    siteName: 'FORWARD LIVE CONFERENCE',
    images: [
      {
        url: 'https://forwardliveconference.org/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FORWARD 2025 Hero Banner',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FORWARD Conference 2025 | Audacity to Lead',
    description:
      'A global gathering for emerging leaders. Transform your leadership journey with insight from global experts.',
    images: ['https://forwardliveconference.org/twitter-banner.jpg'],
    creator: '@forwardliveconferencewithreo',
  },
  metadataBase: new URL('https://forwardliveconference.org'),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'scroll-smooth antialiased',
          syne.variable,
          plus_jaka.variable
        )}
      >
        <main className="font-syne">
          <Navbar />
          {children}
        </main>
        <SmoothCursor />
      </body>
    </html>
  )
}
