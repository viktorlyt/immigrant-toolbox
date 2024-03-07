// used the following component : https://tailwindcomponents.com/component/page-sections-1


import Image from "next/image";
import Link from 'next/link';
import React from 'react';

const FOOTER_LINKS = [
  { href: '/legal', key: 'legal', label: 'Legal' },
  { href: '/claim', key: 'claim', label: 'Claim' },
  { href: '/privacy', key: 'privacy', label: 'Privacy Policy' },
  { href: '/', key: 'terms', label: 'Terms & Conditions' },
];




const Footer: React.FC = () => {
  return (
    <footer className="border-2 border-red-500 bg-white mx-auto absolute bottom-0 w-full" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="border-2 border-red-500 mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-5">
            <Link href="/">
            <img className="h-20" src="/logo.png" alt="Company Logo" />

            </Link>
            <p className="text-sm leading-6 text-gray-600">Embark on your journey towards a new life with Immigrant Toolbox. We're here to accompany you on every step of your path, embracing the diverse beauty of cultures worldwide, all within one comprehensive app.</p>
            
          {/* Socials Icons */}

            <div className="mt-7">
                    <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                        <a className="text-gray-500 cursor-pointer hover:text-gray-700">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                className="w-5 h-5" viewBox="0 0 24 24">
                                <path
                                    d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
                                </path>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round"
                                stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none"
                                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z">
                                </path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </a>
                    </span>
                </div>  
          
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Solutions</h3>
                <ul role="list" className="mt-6 space-y-4">




          
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Marketing</a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Analytics</a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Commerce</a>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Support</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Pricing</a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Documentation</a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Guides</a>
                  </li>
                
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">About</a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Blog</a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Jobs</a>
                  </li>
                
                </ul>
              </div>
              {/* <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Claim</a>
                  </li>
                  <li>
                    <Link href="/privacy" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Privacy</Link>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Terms</a>
                  </li>
                </ul>
              </div> */}
{/* used map function for footer */}

<div>
<div className="mt-10 md:mt-0">
    <h3 className="text-sm font-semibold leading-6 text-gray-900">Legal</h3>
    <ul role="list" className="mt-6 space-y-4">
        {FOOTER_LINKS.map((link) => (
            <li key={link.key}>
                {link.href ? (
                    <Link href={link.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                        {link.label}
                    </Link>
                ) : (
                    <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                        {link.label}
                    </a>
                )}
            </li>
        ))}
    </ul>
</div>

</div>




            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-500">&copy; 2024 Immigrant ToolBox, Inc. All rights reserved.</p>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
