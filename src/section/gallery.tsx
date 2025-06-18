'use client'

import { cn } from '~/lib/utils'
import { Button } from 'ui/button'
import { ExternalLink } from 'lucide-react'
import BlurImage from '~/components/miscellaneous/blur-image'

const eventImages = [
  { id: 1, src: '/203A4990.jpg', alt: 'Event image 1', className: 'h-80 w-80' },
  { id: 2, src: '/203A4995.jpg', alt: 'Event image 2', className: 'h-80 w-80' },
  { id: 3, src: '/203A5016.jpg', alt: 'Event image 3', className: 'h-80 w-80' },
  { id: 4, src: '/203A5017.jpg', alt: 'Event image 4', className: 'h-80 w-80' },
  { id: 5, src: '/203A5618.jpg', alt: 'Event image 5', className: 'h-80 w-80' },
  {
    id: 6,
    src: '/203A5622(1).jpg',
    alt: 'Event image 6',
    className: 'h-80 w-80',
  },
  { id: 7, src: '/203A5630.jpg', alt: 'Event image 7', className: 'h-80 w-80' },
  { id: 8, src: '/DSC_1788.jpg', alt: 'Event image 8', className: 'h-80 w-80' },
  { id: 9, src: '/DSC_1824.jpg', alt: 'Event image 9', className: 'h-80 w-80' },
  {
    id: 10,
    src: '/DSC_1842.jpg',
    alt: 'Event image 10',
    className: 'h-80 w-80',
  },
  {
    id: 11,
    src: '/DSC_1851.jpg',
    alt: 'Event image 11',
    className: 'h-80 w-80',
  },
  {
    id: 12,
    src: '/DSC_1874.jpg',
    alt: 'Event image 12',
    className: 'h-80 w-80',
  },
  {
    id: 13,
    src: '/DSC_1878.jpg',
    alt: 'Event image 13',
    className: 'h-80 w-80',
  },
  {
    id: 14,
    src: '/DSC_2085.jpg',
    alt: 'Event image 14',
    className: 'h-80 w-80',
  },
  {
    id: 15,
    src: '/DSC_2086.jpg',
    alt: 'Event image 15',
    className: 'h-80 w-80',
  },
  {
    id: 16,
    src: '/DSC_2087.jpg',
    alt: 'Event image 16',
    className: 'h-80 w-80',
  },
  {
    id: 17,
    src: '/EMF_8299.jpg',
    alt: 'Event image 17',
    className: 'h-80 w-80',
  },
  {
    id: 18,
    src: '/EMF_8303.jpg',
    alt: 'Event image 18',
    className: 'h-80 w-80',
  },
  {
    id: 19,
    src: '/EMF_8310.jpg',
    alt: 'Event image 19',
    className: 'h-80 w-80',
  },
  {
    id: 20,
    src: '/EMF_8312.jpg',
    alt: 'Event image 20',
    className: 'h-80 w-80',
  },
  {
    id: 21,
    src: '/EMF_8318.jpg',
    alt: 'Event image 21',
    className: 'h-80 w-80',
  },
  {
    id: 22,
    src: '/EMF_8320.jpg',
    alt: 'Event image 22',
    className: 'h-80 w-80',
  },
  {
    id: 23,
    src: '/EMF_8321.jpg',
    alt: 'Event image 23',
    className: 'h-80 w-80',
  },
  {
    id: 24,
    src: '/EMF_8323.jpg',
    alt: 'Event image 24',
    className: 'h-80 w-80',
  },
  {
    id: 25,
    src: '/EMF_8325.jpg',
    alt: 'Event image 25',
    className: 'h-80 w-80',
  },
  {
    id: 26,
    src: '/EMF_8326.jpg',
    alt: 'Event image 26',
    className: 'h-80 w-80',
  },
  {
    id: 27,
    src: '/EMF_8328.jpg',
    alt: 'Event image 27',
    className: 'h-80 w-80',
  },
  {
    id: 28,
    src: '/EMF_8333.jpg',
    alt: 'Event image 28',
    className: 'h-80 w-80',
  },
  {
    id: 29,
    src: '/EMF_8337.jpg',
    alt: 'Event image 29',
    className: 'h-80 w-80',
  },
  {
    id: 30,
    src: '/EMF_8338.jpg',
    alt: 'Event image 30',
    className: 'h-80 w-80',
  },
  {
    id: 31,
    src: '/EMF_8339.jpg',
    alt: 'Event image 31',
    className: 'h-80 w-80',
  },
  {
    id: 32,
    src: '/EMF_8343.jpg',
    alt: 'Event image 32',
    className: 'h-80 w-80',
  },
  {
    id: 33,
    src: '/EMF_8355.jpg',
    alt: 'Event image 33',
    className: 'h-80 w-80',
  },
  {
    id: 34,
    src: '/EMF_8359.jpg',
    alt: 'Event image 34',
    className: 'h-80 w-80',
  },
  {
    id: 35,
    src: '/EMF_8378.jpg',
    alt: 'Event image 35',
    className: 'h-80 w-80',
  },
  {
    id: 36,
    src: '/EMF_8384.jpg',
    alt: 'Event image 36',
    className: 'h-80 w-80',
  },
  {
    id: 37,
    src: '/EMF_8389.jpg',
    alt: 'Event image 37',
    className: 'h-80 w-80',
  },
  {
    id: 38,
    src: '/EMF_8394.jpg',
    alt: 'Event image 38',
    className: 'h-80 w-80',
  },
  {
    id: 39,
    src: '/EMF_8396.jpg',
    alt: 'Event image 39',
    className: 'h-80 w-80',
  },
  {
    id: 40,
    src: '/EMF_8398.jpg',
    alt: 'Event image 40',
    className: 'h-80 w-80',
  },
  {
    id: 41,
    src: '/EMF_8403.jpg',
    alt: 'Event image 41',
    className: 'h-80 w-80',
  },
  {
    id: 42,
    src: '/EMF_8406.jpg',
    alt: 'Event image 42',
    className: 'h-80 w-80',
  },
  {
    id: 43,
    src: '/EMF_8408.jpg',
    alt: 'Event image 43',
    className: 'h-80 w-80',
  },
  {
    id: 44,
    src: '/EMF_8412.jpg',
    alt: 'Event image 44',
    className: 'h-80 w-80',
  },
  {
    id: 45,
    src: '/EMF_8414.jpg',
    alt: 'Event image 45',
    className: 'h-80 w-80',
  },
  {
    id: 46,
    src: '/IMG_0200.jpg',
    alt: 'Event image 46',
    className: 'h-80 w-80',
  },
  {
    id: 47,
    src: '/IMG_0213.jpg',
    alt: 'Event image 47',
    className: 'h-80 w-80',
  },
  {
    id: 48,
    src: '/IMG_0219.jpg',
    alt: 'Event image 48',
    className: 'h-80 w-80',
  },
  {
    id: 49,
    src: '/IMG_0228.jpg',
    alt: 'Event image 49',
    className: 'h-80 w-80',
  },
  {
    id: 50,
    src: '/IMG_0235.jpg',
    alt: 'Event image 50',
    className: 'h-80 w-80',
  },
]

export default function GallerySection() {
  const duplicatedImages = [...eventImages, ...eventImages, ...eventImages]
  return (
    <section
      className="flex min-h-screen flex-col bg-black text-white"
      id="gallery"
    >
      {/* Content Section */}
      <div className="font-plus_jaka mx-auto w-full max-w-[1500px] py-16 lg:py-24">
        <div className="max-w-4xl">
          <h2 className="mb-8 text-4xl leading-tight">
            Last year, the FORWARD Conference empowered emerging leaders to
            build, inspire, and transform. From bold ideas to actionable
            strategies, it was all about moving FORWARD together.
          </h2>

          <Button
            variant="outline"
            className="h-auto border-white bg-white px-6 py-3 font-medium text-black hover:bg-gray-100"
          >
            EXPLORE LAST YEAR&apos;S EVENT
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="relative space-y-6 overflow-hidden pb-16">
        <div className="animate-infinite-scroll-right flex gap-4">
          {duplicatedImages.map((image, index) => (
            <div
              key={`${image.id}-${index}`}
              className={cn(
                'relative flex-shrink-0 overflow-hidden rounded-lg',
                image.className
              )}
            >
              <BlurImage
                src={`/images${image.src}` || '/placeholder.svg'}
                alt={image.alt}
                fill
                className="object-cover grayscale transition-all duration-300 hover:grayscale-0"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
        <div className="animate-infinite-scroll-left flex gap-4">
          {[...duplicatedImages].reverse().map((image, index) => (
            <div
              key={`row2-${image.id}-${index}`}
              className={cn(
                'relative flex-shrink-0 overflow-hidden rounded-lg',
                image.className
              )}
            >
              <BlurImage
                src={`/images${image.src}` || '/placeholder.svg'}
                alt={image.alt}
                fill
                className="object-cover grayscale transition-all duration-300 hover:grayscale-0"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
        <div
          className="animate-infinite-scroll-right flex gap-4"
          style={{ transform: 'translateX(-50%)' }}
        >
          {duplicatedImages.map((image, index) => (
            <div
              key={`${image.id}-${index}`}
              className={cn(
                'relative flex-shrink-0 overflow-hidden rounded-lg',
                image.className
              )}
            >
              <BlurImage
                src={`/images${image.src}` || '/placeholder.svg'}
                alt={image.alt}
                fill
                className="object-cover grayscale transition-all duration-300 hover:grayscale-0"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes infinite-scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @keyframes infinite-scroll-left {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-infinite-scroll-right {
          animation: infinite-scroll-right 30s linear infinite;
          width: calc(300% + 2rem);
        }

        .animate-infinite-scroll-left {
          animation: infinite-scroll-left 35s linear infinite;
          width: calc(300% + 2rem);
        }

        .animate-infinite-scroll-right:hover,
        .animate-infinite-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
