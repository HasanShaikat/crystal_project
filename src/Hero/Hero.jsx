
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
// import './Hero.css'

const navigation = [
  { name: 'About', href: '#About' },
  { name: 'Services', href: '#Service' },
  { name: 'Faq', href: '#Faq' },
  { name: 'Contact', href: '#Contact' },
]

const Hero=()=>{
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
     return (
       <div id='Hero' className=''>
               <div className="opacity-4" id='bg'>
                <header className="absolute inset-x-0 top-0 z-50 container mx-auto ">
                  <nav aria-label="Global" className="flex items-center justify-between py-4 px-6 lg:px-8">
                    <div className="flex lg:flex-1">
                      <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Crystal Cure Pest Control</span>
                        <img
                          alt=""
                          src="/images/crystal-cure-final-logo.png"
                          className="h-20 w-auto"
                        />
                      </a>
                    </div>
                    <div className="flex lg:hidden">
                      <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                      >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                      </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                      {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900 hover:text-red-800">
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                      <span href="#" className="font-semibold text-red-900">
                      +880 189197 1990 / +880 190448 0448
                      </span>
                    </div>
                  </nav>
                  <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-50" />
                    <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                      <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                          <span className="sr-only">Crystal Cure Pest Control</span>
                          <img
                            alt=""
                            src="../public/images/crystal-cure-final-logo.png"
                            className="h-16 w-auto"
                          />
                        </a>
                        <button
                          type="button"
                          onClick={() => setMobileMenuOpen(false)}
                          className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                          <span className="sr-only">Close menu</span>
                          <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                      </div>
                      <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                          <div className="space-y-2 py-6">
                            {navigation.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                              >
                                {item.name}
                              </a>
                            ))}
                          </div>
                          <div className="py-6">
                            <a
                              href="#"
                              className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                            >
                               +880 189197 1990 / +880 190448 0448
                            </a>
                          </div>
                        </div>
                      </div>
                    </DialogPanel>
                  </Dialog>
                </header>
          
                <div className="relative isolate px-6 pt-14 lg:px-8">
                  {/* <img src="/public/images/technician.jpg" alt="" srcset="" /> */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                  ></div>
                  <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                   
                    <div className="text-center">
                      <h1 className="text-balance text-2xl font-semibold tracking-tight text-gray-900 sm:text-5xl text-red-800">
                        Crystal Cure Pest Control
                      </h1>
                      <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                      We stand by the quality of our services. Crystal Cure offers guarantees and follow-up inspections to ensure the long-term effectiveness of our pest control solutions.
                      </p>
                      <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                          href="#Contact"
                          className="rounded-md bg-red-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Contact Now
                        </a>
                        
                      </div>
                    </div>
                  </div>


                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                  >
                  </div>
                </div>
              </div>
       </div>
     );
}
export default Hero;

