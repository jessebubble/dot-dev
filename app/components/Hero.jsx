import { Logo } from '~/components/images/Logo';
import { Link } from '@remix-run/react';

const navigation = [
   { name: 'Linkedin', href: 'https://www.linkedin.com/in/jessebubble/' },
   { name: 'GitHub', href: 'https://github.com/jessebubble' },
   { name: 'Contact', href: 'mailto:jesse@devsanantonio.com' },
];

export function Hero() {
   return (
      <>
         <div className="bg-white">
            <header className="absolute inset-x-0 top-0 z-50">
               <div className="mx-auto max-w-7xl">
                  <div className="px-6 pt-6 lg:max-w-2xl lg:pl-8 lg:pr-0">
                     <nav
                        className="flex items-center justify-between lg:justify-start"
                        aria-label="Global"
                     >
                        <Link to="/" className="-m-1.5 p-1.5">
                           <span className="sr-only">JesseBubble</span>
                           <Logo className="h-16 w-auto md:h-20 lg:h-24" />
                        </Link>

                        <div className="ml-12 flex gap-x-14">
                           {navigation.map((item) => (
                              <Link
                                 key={item.name}
                                 to={item.href}
                                 className="text-sm font-semibold leading-6 text-neutral-950"
                                 target="_blank"
                                 rel="noopener noreferrer"
                              >
                                 {item.name}
                              </Link>
                           ))}
                        </div>
                     </nav>
                  </div>
               </div>
            </header>

            <div className="relative">
               <div className="mx-auto max-w-7xl">
                  <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
                     <svg
                        className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                     >
                        <polygon points="0,0 90,0 50,100 0,100" />
                     </svg>

                     <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
                        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                           <h1 className="text-4xl font-bold tracking-tight text-neutral-950 sm:text-6xl">
                              Hey, I'm Jesse
                           </h1>
                           <p className="mt-6 text-lg leading-8 text-neutral-600">
                              San Antonio-based developer & community champion.
                              I translate my passion for web development and
                              modern UX practices into impactful user
                              experiences | <strong>Founder of DEVSA</strong>
                           </p>
                           <div className="mt-10 flex items-center gap-x-6">
                              <a
                                 href="https://www.instagram.com/devsatx"
                                 className="rounded-md bg-neutral-950 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-neutral-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-600"
                              >
                                 Follow DEVSA
                              </a>
                              <a
                                 href="https://devsanantonio.com/"
                                 className="text-sm font-semibold leading-6 text-neutral-950"
                              >
                                 Learn more <span aria-hidden="true">→</span>
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="bg-neutral-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                  <img
                     className="lg:aspect-auto aspect-[3/2] object-cover lg:h-full lg:w-full"
                     src="https://res.cloudinary.com/jessebubble/image/upload/v1714599154/devsa_u7xs6b.jpg"
                     alt="JesseBubble speaking at DEVSA event"
                  />
               </div>
            </div>
         </div>
      </>
   );
}
