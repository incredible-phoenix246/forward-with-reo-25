import { Avatar, AvatarImage } from '~/components/ui/avatar'
import { Card, CardContent, CardFooter } from '~/components/ui/card'
import BlurImage from './miscellaneous/blur-image'

const Testimonial4 = () => {
  const testimonials = [
    {
      quote:
        "In the world we live in today, so many things say no to our dreams and hinder us from moving forward. But it's up to you to stand firm and declare: I will make progress with what God has placed in my hands.",
      name: 'Pst. Philps',
      role: 'Entrepreneur & Mentor',
      image: '/DSC_2068.jpg',
    },
    {
      quote:
        "Those who change the world don't do ordinary things. They pursue what they are called to do — and they do it with excellence.",
      extraQuote:
        'To achieve anything meaningful in life, you must work with DISCIPLINE.',
      name: 'Pst. Femi Lazarus',
      role: 'Lead Pastor of Light Nation Church',
      image: '/203A4863.jpg',
    },
    {
      quote:
        "When changemakers gather at FORWARD, we don't just talk about the future — we begin to build it, one bold decision at a time.",
      name: 'Your Name Here',
      role: 'Your Role Here',
      image: '/EMF_8755.jpg',
    },
  ]

  return (
    <section className="mx-auto max-w-[1500px] py-32">
      <div className="container">
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 items-stretch gap-x-0 gap-y-4 lg:grid-cols-3 lg:gap-4">
            <BlurImage
              src="/images/EMF_8343.jpg"
              alt="placeholder"
              width={800}
              height={600}
              className="h-72 w-full rounded-md object-cover lg:h-auto"
            />
            <Card className="col-span-2 flex items-center justify-center p-6">
              <div className="flex flex-col gap-4">
                <q className="text-xl font-medium lg:text-3xl">
                  Growth isn&apos;t accidental — it&apos;s intentional. FORWARD
                  is the journey toward becoming the leader tomorrow demands.
                </q>
              </div>
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {testimonials.map((t, index) => (
              <Card key={index}>
                <CardContent className="text-foreground/70 flex flex-col gap-2 px-6 pt-6 leading-7">
                  <q>{t.quote}</q>
                  {t.extraQuote && <q>{t.extraQuote}</q>}
                </CardContent>
                <CardFooter>
                  <div className="flex gap-4 leading-5">
                    <Avatar className="ring-input size-10 rounded-full ring-1">
                      <AvatarImage src={t.image} alt={t.name} />
                    </Avatar>
                    <div className="text-sm">
                      <p className="font-medium">{t.name}</p>
                      <p className="text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export { Testimonial4 }
